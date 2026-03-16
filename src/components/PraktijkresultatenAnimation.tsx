'use client'
import { Player, PlayerRef } from '@remotion/player'
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'
import { useRef, useEffect } from 'react'

// ─── Card data ────────────────────────────────────────────────────────────────

type CardData = {
    type: 'range' | 'single' | 'double'
    from1: number; to1: number
    from2?: number; to2?: number
    prefix1?: string; prefix2?: string
    suffix: string
    label: string; sub: string
    accent: string
    featured?: boolean
    sparkFrom: string   // label shown bottom-left of sparkline
    sparkTo: string     // label shown top-right of sparkline
}

const CARDS: CardData[] = [
    {
        type: 'range', from1: 0, to1: 48, from2: 0, to2: 94, suffix: '%',
        label: 'Silicium opname verdubbeld', sub: 'gietwater stabiel',
        accent: '#84cc16', featured: true,
        sparkFrom: '48%', sparkTo: '94%',
    },
    {
        type: 'range', from1: 0, to1: 11, from2: 0, to2: 86, suffix: '%',
        label: 'Fosfor opname', sub: 'bij 45% hogere P-gift via gietwater',
        accent: '#84cc16',
        sparkFrom: '11%', sparkTo: '86%',
    },
    {
        type: 'single', prefix1: '+', from1: 0, to1: 88, suffix: '%',
        label: 'Molybdeen in oud plantsap', sub: 'direct bewijs ALL12® · bij lagere Mo-gift',
        accent: '#84cc16',
        sparkFrom: '0%', sparkTo: '+88%',
    },
    {
        type: 'single', prefix1: '+', from1: 0, to1: 46, suffix: '%',
        label: 'Zink in oud plantsap', sub: 'Zn · stabiele accumulatie',
        accent: '#84cc16',
        sparkFrom: '0%', sparkTo: '+46%',
    },
    {
        type: 'double', prefix1: '−', from1: 0, to1: 42, prefix2: '−', from2: 0, to2: 46, suffix: '%',
        label: 'Selectieve ionen-exclusie', sub: 'Na −42% · Cl −46% in jong blad',
        accent: '#ffffff',
        sparkFrom: '0%', sparkTo: '−42%',
    },
]

// Slow stagger — each card is a moment
const CARD_STAGGER = 52
const LABEL_HOLD = 12   // frames label is visible before counting starts
const COUNT_DURATION = 62

function easeOutCubic(t: number) { return 1 - Math.pow(1 - t, 3) }

function countUp(frame: number, startFrame: number, from: number, to: number) {
    const t = Math.max(0, Math.min(1, (frame - startFrame - LABEL_HOLD) / COUNT_DURATION))
    return Math.round(from + (to - from) * easeOutCubic(t))
}

// ─── Sparkline — starts bottom-left, ends top-right ──────────────────────────

function SparkLine({
    sparkProgress, accent, type, sparkFrom, sparkTo,
}: {
    sparkProgress: number; accent: string; type: string; sparkFrom: string; sparkTo: string
}) {
    const W = 80, H = 38, N = 30
    const PAD_X = 2, PAD_Y = 2

    // For ionen-exclusie (double): descending line (Na/Cl going down = goal achieved)
    // For all others: ascending curve from bottom-left to top-right
    const allPts = Array.from({ length: N }, (_, i) => {
        const t = i / (N - 1)
        const x = PAD_X + t * (W - PAD_X * 2)
        const y = type === 'double'
            ? (H - PAD_Y) - t * (H - PAD_Y * 2)  // top to bottom (reduction = good)
            : (H - PAD_Y) - Math.pow(t, 0.6) * (H - PAD_Y * 2)  // bottom to top (increase)
        return { x, y }
    })

    const visibleCount = Math.max(2, Math.round(sparkProgress * N))
    const visiblePts = allPts.slice(0, visibleCount)
    const toPoints = (pts: { x: number; y: number }[]) =>
        pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')

    const last = visiblePts[visiblePts.length - 1]
    const startPt = allPts[0]
    const endPt = allPts[N - 1]

    // Tiny fill under the curve for depth
    const fillPath = visiblePts.length > 1
        ? `M ${visiblePts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' L ')} L ${last.x.toFixed(1)},${(H - PAD_Y).toFixed(1)} L ${startPt.x.toFixed(1)},${(H - PAD_Y).toFixed(1)} Z`
        : ''

    return (
        <div style={{ position: 'relative', flexShrink: 0 }}>
            <svg width={W} height={H} style={{ display: 'block', overflow: 'visible' }}>
                {/* Bottom axis line */}
                <line x1={PAD_X} y1={H - PAD_Y} x2={W - PAD_X} y2={H - PAD_Y}
                    stroke={`${accent}18`} strokeWidth={1} />

                {/* Fill under curve */}
                {sparkProgress > 0.1 && fillPath && (
                    <path d={fillPath} fill={`${accent}0a`} />
                )}

                {/* Ghost track */}
                <polyline points={toPoints(allPts)} fill="none"
                    stroke={`${accent}14`} strokeWidth={1.5}
                    strokeLinecap="round" strokeLinejoin="round" />

                {/* Animated line */}
                {sparkProgress > 0.04 && (
                    <polyline points={toPoints(visiblePts)} fill="none"
                        stroke={accent} strokeWidth={2}
                        strokeLinecap="round" strokeLinejoin="round" />
                )}

                {/* Start dot (static) */}
                <circle cx={startPt.x} cy={startPt.y} r={2}
                    fill={`${accent}44`} />

                {/* Animated tip dot */}
                {sparkProgress > 0.06 && last && (
                    <>
                        <circle cx={last.x} cy={last.y} r={4.5} fill={`${accent}18`} />
                        <circle cx={last.x} cy={last.y} r={2.2} fill={accent}
                            style={{ filter: `drop-shadow(0 0 3px ${accent}88)` }} />
                    </>
                )}

                {/* End dot (ghost, always visible as target) */}
                <circle cx={endPt.x} cy={endPt.y} r={1.5}
                    fill={`${accent}22`} />
            </svg>

            {/* FROM label — bottom-left */}
            <div style={{
                position: 'absolute',
                bottom: -1,
                left: 0,
                fontSize: 7,
                fontWeight: 700,
                color: `${accent}44`,
                fontFamily: "'Outfit', system-ui, sans-serif",
                letterSpacing: '0.05em',
                lineHeight: 1,
            }}>
                {sparkFrom}
            </div>

            {/* TO label — top-right, appears when line reaches end */}
            <div style={{
                position: 'absolute',
                top: -1,
                right: 0,
                fontSize: 7.5,
                fontWeight: 800,
                color: sparkProgress > 0.85 ? accent : 'transparent',
                fontFamily: "'Outfit', system-ui, sans-serif",
                letterSpacing: '0.03em',
                lineHeight: 1,
                transition: 'color 0.3s',
            }}>
                {sparkTo}
            </div>
        </div>
    )
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function CardItem({ card, cardIndex }: { card: CardData; cardIndex: number }) {
    const frame = useCurrentFrame()
    const { fps } = useVideoConfig()
    const start = 8 + cardIndex * CARD_STAGGER

    const entranceProgress = spring({
        frame: Math.max(0, frame - start),
        fps,
        config: { damping: 85, stiffness: 100, mass: 1.1 },
    })

    const opacity = interpolate(frame, [start, start + 18], [0, 1], {
        extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
    })
    const translateY = interpolate(entranceProgress, [0, 1], [22, 0])

    // Sparkline and number start after label has been readable for LABEL_HOLD frames
    const sparkProgress = easeOutCubic(
        Math.max(0, Math.min(1, (frame - start - LABEL_HOLD) / COUNT_DURATION))
    )

    const n1 = countUp(frame, start, card.from1, card.to1)
    const n2 = countUp(frame, start, card.from2 ?? 0, card.to2 ?? 0)

    let numStr: string
    if (card.type === 'range') numStr = `${n1}% → ${n2}%`
    else if (card.type === 'single') numStr = `${card.prefix1 ?? ''}${n1}%`
    else numStr = `${card.prefix1 ?? ''}${n1}% / ${card.prefix2 ?? ''}${n2}%`

    const numFontSize = card.type === 'range' ? 23 : 31

    return (
        <div style={{
            opacity,
            transform: `translateY(${translateY}px)`,
            background: card.featured ? 'rgba(132,204,22,0.055)' : 'rgba(255,255,255,0.02)',
            border: `1px solid ${card.featured ? 'rgba(132,204,22,0.2)' : 'rgba(255,255,255,0.06)'}`,
            borderLeft: `2.5px solid ${card.accent}`,
            borderRadius: 10,
            padding: '13px 14px 13px 13px',
            display: 'flex',
            flexDirection: 'column',
            gap: 7,
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Label — uppercase, readable, appears first */}
            <div style={{
                color: 'rgba(255,255,255,0.92)',
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: "'Outfit', system-ui, sans-serif",
                lineHeight: 1.2,
            }}>
                {card.label}
            </div>

            {/* Number + sparkline — animate together after label hold */}
            <div style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: 8,
            }}>
                <div style={{
                    fontFamily: "'Outfit', system-ui, sans-serif",
                    fontWeight: 900,
                    fontSize: numFontSize,
                    color: card.accent,
                    lineHeight: 1.0,
                    letterSpacing: '-0.03em',
                    fontVariantNumeric: 'tabular-nums',
                }}>
                    {numStr}
                </div>
                <SparkLine
                    sparkProgress={sparkProgress}
                    accent={card.accent}
                    type={card.type}
                    sparkFrom={card.sparkFrom}
                    sparkTo={card.sparkTo}
                />
            </div>

            {/* Sub — muted detail */}
            <div style={{
                color: 'rgba(255,255,255,0.22)',
                fontSize: 8.5,
                lineHeight: 1.4,
                fontFamily: "'Outfit', system-ui, sans-serif",
                letterSpacing: '0.01em',
            }}>
                {card.sub}
            </div>
        </div>
    )
}

// ─── Root composition ─────────────────────────────────────────────────────────

function PraktijkComp() {
    return (
        <AbsoluteFill style={{
            background: 'transparent',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 9,
            padding: '1px 2px',
            alignContent: 'start',
        }}>
            {CARDS.map((card, i) => (
                <CardItem key={i} card={card} cardIndex={i} />
            ))}
        </AbsoluteFill>
    )
}

// Last card starts at 8 + 4*52 = 216, finishes at 216 + 12 + 62 = 290
const DURATION = 9999
const FREEZE_FRAME = 295

// ─── Exported Player component ────────────────────────────────────────────────

export default function PraktijkresultatenAnimation() {
    const playerRef = useRef<PlayerRef>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const wrapper = wrapperRef.current
        const player = playerRef.current
        if (!wrapper) return

        const onFrame = () => {
            if ((playerRef.current?.getCurrentFrame() ?? 0) >= FREEZE_FRAME) {
                playerRef.current?.pause()
            }
        }
        player?.addEventListener('frameupdate', onFrame)

        const snapContainer = document.querySelector('main.snap-y') as Element | null
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    playerRef.current?.seekTo(0)
                    playerRef.current?.play()
                }
            },
            { root: snapContainer, threshold: 0.5 },
        )

        observer.observe(wrapper)
        return () => {
            observer.disconnect()
            player?.removeEventListener('frameupdate', onFrame)
        }
    }, [])

    const W = 900
    const H = 284

    return (
        <div ref={wrapperRef} style={{ width: '100%' }}>
            <div style={{ position: 'relative', width: '100%', paddingBottom: `${(H / W) * 100}%` }}>
                <div style={{ position: 'absolute', inset: 0 }}>
                    <Player
                        ref={playerRef}
                        component={PraktijkComp}
                        durationInFrames={DURATION}
                        fps={30}
                        compositionWidth={W}
                        compositionHeight={H}
                        style={{ width: '100%', height: '100%' }}
                        controls={false}
                        loop={false}
                        clickToPlay={false}
                        initialFrame={FREEZE_FRAME}
                        spaceKeyToPlayOrPause={false}
                    />
                </div>
            </div>
        </div>
    )
}
