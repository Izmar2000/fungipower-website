
import { HeroContent } from "./HeroContent";
import { GlassmorphismPanel } from "./GlassmorphismPanel";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[600px] md:min-h-[800px] overflow-hidden flex flex-col"
      style={{
        background: `linear-gradient(135deg, #F58220 0%, #D71920 100%)`
      }}
    >
      {/* Delicate, Sharp, Stylish Mycelium SVG Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen opacity-60">
        <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
          <filter id="fine-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <g stroke="white" fill="none" className="opacity-20" strokeLinecap="round">
            {/* Elegant Main Strands */}
            <path d="M-100,600 C200,550 400,700 700,500 C1000,300 1200,450 1500,200" strokeWidth="1.5" />
            <path d="M-50,200 C300,300 500,100 800,250 C1100,400 1300,150 1600,350" strokeWidth="1.2" />
            <path d="M300,-100 C400,200 200,400 450,650 C600,800 500,900 700,1000" strokeWidth="1" />

            {/* Fine, Delicate Branches */}
            <path d="M150,575 Q250,500 380,250" strokeWidth="0.75" />
            <path d="M550,600 Q700,750 950,850" strokeWidth="0.75" />
            <path d="M850,450 Q1050,450 1250,650" strokeWidth="0.75" />
            <path d="M350,230 Q500,180 680,100" strokeWidth="0.5" />
            <path d="M1000,330 Q1150,250 1350,150" strokeWidth="0.5" />
            <path d="M400,530 Q500,450 650,400" strokeWidth="0.5" />

            {/* Micro details (Extra fine) */}
            <path d="M220,530 Q280,490 320,470" strokeWidth="0.3" />
            <path d="M630,510 Q700,490 770,430" strokeWidth="0.3" />
            <path d="M980,410 Q1040,400 1100,370" strokeWidth="0.3" />
            <path d="M480,210 Q550,180 610,140" strokeWidth="0.3" />
          </g>

          {/* Glowing Nodes / Spores - subtly pulsating */}
          <g fill="white" filter="url(#fine-glow)" className="opacity-90">
            {[
              [150, 575], [380, 250], [550, 600], [850, 450], [950, 850], [1250, 650],
              [350, 230], [680, 100], [1000, 330], [1350, 150], [400, 530], [650, 400],
              [700, 500], [800, 250], [450, 650],
              [220, 530], [320, 470], [630, 510], [770, 430], [980, 410], [1100, 370]
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? "1.5" : "0.8"} className="animate-pulse" style={{ animationDelay: `${i * 0.3}s`, animationDuration: '4s' }} />
            ))}
          </g>
        </svg>
      </div>

      {/* Spacer to push content down below fixed header */}
      <div className="h-20 md:h-24 lg:h-28" />

      {/* Main Content - No Overlays, Just Pure Color */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex-1 flex items-center py-8 md:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full">
          <div className="w-full lg:w-1/2 flex justify-start">
            <HeroContent />
          </div>
          <div className="w-full lg:w-1/2 flex justify-end">
            <GlassmorphismPanel />
          </div>
        </div>
      </main>

    </section>
  );
};
