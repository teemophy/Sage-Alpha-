import React from 'react';

const Hero: React.FC<{ onIntroRequest: () => void }> = ({ onIntroRequest }) => {
  return (
    <section id="mission" className="relative pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden">
      {/* Atmospheric Backgrounds */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[140px] -z-10 animate-pulse opacity-50"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border border-white/5 text-white/60 text-[9px] font-bold uppercase tracking-[0.4em] mb-8">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald"></span>
              </span>
              Protocol Phase 0 : Ready
            </div>
            
            <h1 className="font-space text-5xl md:text-[8rem] font-bold tracking-tight mb-8 leading-[0.85] text-white">
              Systematic Logic.<br/>
              <span className="text-gold italic font-serif tracking-tight">Institutional</span> Rigor.
            </h1>
            
            <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Engineering verifiable algorithmic strategies for liquid global markets with absolute discipline and proprietary execution logic.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={onIntroRequest}
                className="group relative px-12 py-4 bg-gold text-navy font-bold rounded-xl transition-all shadow-2xl overflow-hidden text-[10px] uppercase tracking-[0.2em]"
              >
                <span className="relative z-10">Initiate Introduction</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              
              <div className="hidden sm:flex items-center gap-6">
                <div className="h-10 w-px bg-white/10"></div>
                <div className="text-[9px] font-mono text-slate-600 flex flex-col items-start gap-1 tracking-wider">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald">●</span>
                    <span>Alpha Engine v1.02</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald">●</span>
                    <span>Verified Real-Money Track</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Systematic Growth Curve SVG */}
            <div className="mt-20 w-full max-w-4xl opacity-20 pointer-events-none">
              <svg viewBox="0 0 800 160" className="w-full h-auto">
                <path 
                  d="M0,150 Q100,145 200,120 T400,80 T600,40 T800,10" 
                  fill="none" 
                  stroke="url(#grad)" 
                  strokeWidth="1.5" 
                  strokeDasharray="4,4"
                  className="animate-[dash_8s_linear_infinite]"
                />
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor:'#fbbf24', stopOpacity:0}} />
                    <stop offset="50%" style={{stopColor:'#fbbf24', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#fbbf24', stopOpacity:0.2}} />
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex justify-between mt-4 text-[8px] font-mono text-slate-700 uppercase tracking-[0.5em] px-2">
                <span>Phase 0 Genesis</span>
                <span>Independent Validation</span>
                <span>Systematic Scaling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
      `}</style>
    </section>
  );
};

export default Hero;