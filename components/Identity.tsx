import React from 'react';

const Identity: React.FC = () => {
  return (
    <section id="identity" className="py-12 relative bg-navy">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          <div className="glass p-10 rounded-2xl border-gold/10 relative overflow-hidden flex flex-col group hover:border-gold/30 transition-all">
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
              <svg className="w-48 h-48 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            </div>
            <div className="text-[10px] font-mono text-gold mb-4 uppercase tracking-[0.3em] font-bold">Platform Status</div>
            <h3 className="font-space text-3xl font-bold mb-6 text-white">What We Are</h3>
            <ul className="space-y-4 text-slate-400 flex-grow text-sm md:text-base leading-relaxed">
              <li className="flex gap-4 items-start">
                <span className="text-gold font-mono font-bold mt-1">01</span>
                <span>A proprietary quantitative research engine and execution system for global liquid markets.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-gold font-mono font-bold mt-1">02</span>
                <span>A builder of verifiable, real-money track records focused on institutional-grade scalability.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-gold font-mono font-bold mt-1">03</span>
                <span>Focused on the intellectual property of execution and absolute strategic discipline.</span>
              </li>
            </ul>
          </div>

          <div className="glass p-10 rounded-2xl border-white/5 relative overflow-hidden flex flex-col group hover:border-white/10 transition-all">
            <div className="absolute top-0 right-0 p-6 opacity-[0.03]">
              <svg className="w-48 h-48 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
            </div>
            <div className="text-[10px] font-mono text-slate-500 mb-4 uppercase tracking-[0.3em] font-bold">Boundary Map</div>
            <h3 className="font-space text-3xl font-bold mb-6 text-slate-400">What We Not</h3>
            <ul className="space-y-4 text-slate-500 flex-grow text-sm md:text-base leading-relaxed italic">
              <li className="flex gap-4 items-start">
                <span className="font-mono font-bold mt-1">01</span>
                <span>A retail-facing brand, hedge fund, or general wealth management firm.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="font-mono font-bold mt-1">02</span>
                <span>Provider of lifestyle management, concierge services, or business advisory.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="font-mono font-bold mt-1">03</span>
                <span>A seller of ownership narratives or promised fixed returns.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Identity;