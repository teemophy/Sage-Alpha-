import React from 'react';

const Hero: React.FC<{ onIntroRequest: () => void }> = ({ onIntroRequest }) => {
  return (
    <section id="mission" className="relative pt-24 pb-20 md:pt-48 md:pb-40 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[160px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-white/5 rounded-full blur-[160px] -z-10"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border border-white/10 text-white/80 text-[10px] font-bold uppercase tracking-[0.4em] mb-12 animate-fade-in">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald"></span>
              </span>
              Validation Mode: Active
            </div>
            
            <h1 className="font-space text-5xl md:text-[10rem] font-bold tracking-tight mb-12 leading-[0.85] text-white">
              Systematic Logic.<br/>
              <span className="text-gold italic font-serif tracking-tight">Institutional</span> Excellence.
            </h1>
            
            <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-light">
              Designing verifiable, algorithmic execution strategies for liquid global markets with mathematical rigor and absolute discipline.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <button 
                onClick={onIntroRequest}
                className="group relative px-12 py-5 bg-gold text-navy font-bold rounded-xl transition-all glow-gold overflow-hidden text-sm uppercase tracking-widest"
              >
                <span className="relative z-10">Request Introduction</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              
              <div className="flex items-center gap-6">
                <div className="h-10 w-px bg-white/10 hidden sm:block"></div>
                <div className="text-[10px] font-mono text-slate-500 flex flex-col items-start gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald">●</span>
                    <span>Alpha Engine v1.02</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald">●</span>
                    <span>High Fidelity Validation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Visualization Placeholder */}
            <div className="mt-32 w-full max-w-4xl opacity-40">
              <svg viewBox="0 0 800 200" className="w-full h-auto">
                <path 
                  d="M0,180 Q100,170 200,150 T400,100 T600,60 T800,20" 
                  fill="none" 
                  stroke="url(#grad)" 
                  strokeWidth="2" 
                  strokeDasharray="5,5"
                  className="animate-[dash_5s_linear_infinite]"
                />
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor:'#fbbf24', stopOpacity:0}} />
                    <stop offset="100%" style={{stopColor:'#fbbf24', stopOpacity:1}} />
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex justify-between mt-4 text-[9px] font-mono text-slate-600 uppercase tracking-widest">
                <span>Phase 0 Inception</span>
                <span>Real-Time Validation Protocol</span>
                <span>Systematic Growth Curve</span>
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