
import React from 'react';

const AllocationTree: React.FC = () => {
  return (
    <section id="allocation" className="py-24 bg-[#020617] relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-space text-4xl md:text-5xl font-bold mb-6">Allocation Framework</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Numerical Highlights */}
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="glass p-10 rounded-2xl border-green/10 text-center">
                  <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2">Minimum</div>
                  <div className="text-4xl font-space font-bold text-green">$25,000</div>
                </div>
                <div className="glass p-10 rounded-2xl border-gold/10 text-center">
                  <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2">Maximum</div>
                  <div className="text-4xl font-space font-bold text-gold">$100,000</div>
                </div>
              </div>
              
              <div className="bg-red-500/5 border border-red-500/20 p-8 rounded-2xl">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    <strong className="text-white block mb-1 uppercase tracking-tighter">Risk Positioning</strong>
                    This is not wealth management, portfolio advisory, or capital preservation. It is a systematic execution sleeve. Allocators must treat capital as risk capital.
                  </div>
                </div>
              </div>
            </div>

            {/* Parameters Table */}
            <div className="glass p-10 rounded-3xl border-white/5 space-y-8">
              <h3 className="font-space text-2xl font-bold border-b border-white/5 pb-6">Allocation Parameters</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400 uppercase tracking-widest text-[10px] font-bold">Capital Type</span>
                  <span className="text-white font-medium">Defined Risk Capital Only</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400 uppercase tracking-widest text-[10px] font-bold">Liquidity Window</span>
                  <span className="text-white font-medium text-green">Monthly Review</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400 uppercase tracking-widest text-[10px] font-bold">Lockup Period</span>
                  <span className="text-white font-medium text-gold">None (Flexible)</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400 uppercase tracking-widest text-[10px] font-bold">Reporting Frequency</span>
                  <span className="text-white font-medium">Quarterly Summary</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5">
                 <div className="inline-block px-4 py-1.5 rounded-full bg-green/10 border border-green/30 text-green text-[10px] font-bold uppercase tracking-widest">
                   PHASE 0 CAPACITY ACTIVE
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllocationTree;
