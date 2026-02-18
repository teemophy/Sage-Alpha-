import React from 'react';

const Governance: React.FC = () => {
  return (
    <section id="governance" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-[10px] font-mono text-gold mb-4 uppercase tracking-[0.4em] font-bold">Protocol Foundation</div>
          <h2 className="font-space text-4xl md:text-5xl font-bold mb-6">Governance & Integrity</h2>
          <p className="text-slate-400">
            Non-negotiable frameworks protecting the strategy, the future fund, and the absolute integrity of the track record.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="glass p-8 rounded-2xl border-white/5 group hover:border-gold/30 transition-all">
            <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:glow-gold transition-all">
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h4 className="font-space text-xl font-bold mb-4">Structural Principles</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>• Selective capital acceptance only.</li>
              <li>• Performance claims are backward-looking only.</li>
              <li>• No partnership rights implied.</li>
              <li>• Full execution discretion retained.</li>
            </ul>
          </div>

          <div className="glass p-8 rounded-2xl border-white/5 group hover:border-gold/30 transition-all">
            <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:glow-gold transition-all">
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            </div>
            <h4 className="font-space text-xl font-bold mb-4">Transparency Protocol</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>• Quarterly performance summaries.</li>
              <li>• Clear strategy category documentation.</li>
              <li>• Strict separation of execution vs advisory.</li>
              <li>• Defined capital boundaries.</li>
            </ul>
          </div>

          <div className="glass p-8 rounded-2xl border-white/5 group hover:border-white/20 transition-all">
            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 transition-all">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
            </div>
            <h4 className="font-space text-xl font-bold mb-4">Strict Boundaries</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>• No personal balance sheet management.</li>
              <li>• No lifestyle advisory services.</li>
              <li>• No tax or estate structuring.</li>
              <li>• No forward-looking return projections.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Governance;