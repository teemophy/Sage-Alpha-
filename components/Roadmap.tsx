import React from 'react';
import { PHASES } from '../constants';

const Roadmap: React.FC = () => {
  return (
    <section id="journey" className="py-20 relative overflow-hidden bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-[10px] font-mono text-gold mb-4 uppercase tracking-[0.4em] font-bold">Strategic Evolution</div>
          <h2 className="font-space text-5xl md:text-7xl font-bold mb-6 text-white">Roadmap</h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed">A disciplined multi-stage progression from validation to institutional scale.</p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-white/10 to-transparent hidden md:block"></div>

          <div className="space-y-24">
            {PHASES.map((phase, index) => (
              <div key={phase.id} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Connection Point */}
                <div className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full z-10 hidden md:block border-2 ${phase.status === 'current' ? 'bg-gold border-gold glow-gold' : 'bg-navy border-white/20'}`}>
                  {phase.status === 'current' && <div className="absolute inset-0 rounded-full bg-gold animate-ping opacity-30"></div>}
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[45%]">
                  <div className={`glass p-8 rounded-2xl border-l-2 ${phase.status === 'current' ? 'border-gold glow-gold' : 'border-white/5 opacity-50'}`}>
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="font-space text-3xl font-bold text-white leading-tight">{phase.title}</h3>
                      {phase.status === 'current' && (
                        <span className="text-[9px] font-bold text-gold tracking-widest uppercase bg-gold/10 px-3 py-1.5 rounded">Current State</span>
                      )}
                    </div>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Objective</div>
                        <p className="text-slate-300 text-sm leading-relaxed">{phase.objective}</p>
                      </div>

                      {phase.trigger && (
                        <div className="space-y-2">
                          <div className="text-[9px] font-bold text-gold uppercase tracking-widest">Activation Trigger</div>
                          <p className="text-slate-300 text-sm italic">{phase.trigger}</p>
                        </div>
                      )}

                      <div className="space-y-3">
                        <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Participants</div>
                        <div className="flex flex-wrap gap-2">
                          {phase.participants.map(p => (
                            <span key={p} className="text-[9px] bg-white/5 border border-white/10 px-3 py-1 rounded text-slate-400 font-medium">{p}</span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-8 mt-8 pt-8 border-t border-white/5">
                        <div className="space-y-1">
                          <div className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">Structure</div>
                          <div className="text-xs text-white font-medium">{phase.structure}</div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">Capacity</div>
                          <div className="text-xs text-white font-medium">{phase.capacity}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for MD screens */}
                <div className="hidden md:block md:w-[10%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;