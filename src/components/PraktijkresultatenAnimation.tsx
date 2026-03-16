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
}

const CARDS: CardData[] = [
    {
        type: 'range', from1: 0, to1: 48, from2: 0, to2: 94, suffix: '%',
        label: 'Silicium opname', sub: 'gietwater stabiel',
        accent: '#84cc16', featured: true,
    },
    {
        type: 'range', from1: 0, to1: 11, from2: 0, to2: 86, suffix: '%',
        label: 'Fosfor opname', sub: 'bij 45% hogere P-gift',
        accent: '#84cc16',
    },
    {
        type: 'single', prefix1: '+', from1: 0, to1: 88, suffix: '%',
        label: 'Molybdeen plantsap', sub: 'bij lagere Mo-gift',
        accent: '#84cc16',
    },
    {
        type: 'single', prefix1: '+', from1: 0, to1: 46, suffix: '%',
        label: 'Zink oud plantsap', sub: 'stabiele accumulatie',
        accent: '#84cc16',
    },
    {
        type: 'double', prefix1: '−', from1: 0, to1: 42, prefix2: '−', from2: 0, to2: 46, suffix: '%',
        label: 'Ionen-exclusie', sub: 'Na −42% · Cl −46% in jong blad',
        accent: '#ffffff',
    },
]

const CARD_STAGGER = 14
const COUNT_DURATION = 52

function easeOutCubic(t: number) { return 1 - Math.pow(1 - t, 3) }

function countUp(frame: number, startFrame: number, from: number, to: number) {
    const t = Math.max(0, Math.min(1, (frame - startFrame - 4) / COUNT_DURATION))
    return Math.round(from + (to - from) * easeOutCubic(t))
}

// ─── Sparkline ────────────────────────────────────────────────────────────────

function SparkLine({ sparkProgress, accent, type }: { sparkProgress: number; accent: string; type: string }) {
    const W = 68, H = 32, N = 24
    const allPts = Array.from({ length: N }, (_, i) => {
        const t = i / (N - 1)
        const x = t * W
        const y = type === 'double'
            ? H * 0.08 + t * H * 0.78                          // descending (Na/Cl reduction = good)
            : H * 0.92 - Math.pow(t, 0.65) * H * 0.82          // rising curve
        return { x, y }
    })
    const visiblePts = allPts.slice(0, Math.max(2, Math.round(sparkProgress * N)))
    const toPoints = (pts: { x: number; y: number }[]) => pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
    const last = visiblePts[visiblePts.length - 1]

    return (
        <svg width={W} height={H} style={{ flexShrink: 0, display: 'block' }}>
            {/* Ghost track */}
            <polyline points={toPoints(allPts)} fill="none"
                stroke={`${accent}18`} strokeWidth={1.5}
                strokeLinecap="round" strokeLinejoin="round" />
            {/* Animated line */}
            {sparkProgress > 0.04 && (
                <polyline points={toPoints(visiblePts)} fill="none"
                    stroke={accent} strokeWidth={2}
                    strokeLinecap="round" strokeLinejoin="round" />
            )}
            {/* Glowing tip dot */}
            {sparkProgress > 0.08 && last && (
                <>
                    <circle cx={last.x} cy={last.y} r={4} fill={`${accent}22`} />
                    <circle cx={last.x} cy={last.y} r={2} fill={accent} />
                </>
            )}
        </svg>
    )
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function CardItem({ card, cardIndex }: { card: CardData; cardIndex: number }) {
    const frame = useCurrentFrame()
    const { fps } = useVideoConfig()
    const start = 8 + cardIndex * CARD_STAGGER

    const progress = spring({
        frame: Math.max(0, frame - start),
        fps,
        config: { damping: 88, stiffness: 130, mass: 1.0 },
    })

    const opacity = interpolate(frame, [start, start + 12], [0, 1], {
        extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
    })
    const translateY = interpolate(progress, [0, 1], [18, 0])
    const sparkProgress = easeOutCubic(Math.max(0, Math.min(1, (frame - start - 4) / COUNT_DURATION)))

    const n1 = countUp(frame, start, card.from1, card.to1)
    const n2 = countUp(frame, start, card.from2 ?? 0, card.to2 ?? 0)

    let numStr: string
    if (card.type === 'range') numStr = `${n1}% → ${n2}%`
    else if (card.type === 'single') numStr = `${card.prefix1 ?? ''}${n1}%`
    else numStr = `${card.prefix1 ?? ''}${n1}% / ${card.prefix2 ?? ''}${n2}%`

    const numFontSize = card.type === 'range' ? 24 : 32

    return (
        <div style={{
            opacity,
            transform: `translateY(${translateY}px)`,
            background: card.featured ? 'rgba(132,204,22,0.05)' : 'rgba(255,255,255,0.02)',
            border: `1px solid ${card.featured ? 'rgba(132,204,22,0.18)' : 'rgba(255,255,255,0.055)'}`,
            borderLeft: `2.5px solid ${card.accent}`,
            borderRadius: 10,
            padding: '13px 14px 11px 13px',
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Label — small uppercase above number */}
            <div style={{
                color: card.featured ? `${card.accent}88` : 'rgba(255,255,255,0.32)',
                fontSize: 7.5,
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontFamily: "'Outfit', system-ui, sans-serif",
            }}>
                {card.label}
            </div>

            {/* Number + sparkline */}
            <div style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: 6,
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
                <SparkLine sparkProgress={sparkProgress} accent={card.accent} type={card.type} />
            </div>

            {/* Sub */}
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

// Cards finish at ~120 frames; extra frames keep end-state frozen without relying on onEnded
const DURATION = 9999
const FREEZE_FRAME = 139

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
