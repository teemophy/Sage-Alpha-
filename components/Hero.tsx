
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="mission" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-green/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full glass border border-green/30 text-green text-xs font-bold uppercase tracking-widest mb-8 animate-pulse">
          PHASE 0 — VALIDATION PROTOCOL
        </div>
        
        <h1 className="font-space text-5xl md:text-8xl font-bold tracking-tighter mb-8 max-w-5xl mx-auto leading-tight">
          Systematic Execution for <span className="text-gold italic">Institutional</span> Relevance.
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          SageAlpha Technologies is a proprietary quantitative research and execution platform. 
          Its sole function is to design, test, and deploy algorithmic trading strategies in liquid markets.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-green text-slate-900 font-bold rounded-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all">
            Request Introduction
          </button>
          <button className="px-8 py-4 glass border border-white/10 text-white font-bold rounded-lg hover:bg-white/5 transition-all">
            View Protocol Documentation
          </button>
        </div>
        
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/5 py-12 max-w-4xl mx-auto">
          <div>
            <div className="text-gold text-2xl font-space font-bold">PROPRIETARY</div>
            <div className="text-slate-500 text-xs uppercase tracking-widest mt-1">Research Engine</div>
          </div>
          <div>
            <div className="text-green text-2xl font-space font-bold">SYSTEMATIC</div>
            <div className="text-slate-500 text-xs uppercase tracking-widest mt-1">Trading Logic</div>
          </div>
          <div>
            <div className="text-white text-2xl font-space font-bold">LIQUID</div>
            <div className="text-slate-500 text-xs uppercase tracking-widest mt-1">Market Focus</div>
          </div>
          <div>
            <div className="text-gold text-2xl font-space font-bold">PHASE 0</div>
            <div className="text-slate-500 text-xs uppercase tracking-widest mt-1">Current Protocol</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
