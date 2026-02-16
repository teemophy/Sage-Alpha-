
import React from 'react';
import { PHASES } from '../constants';

const Roadmap: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="font-space text-4xl md:text-5xl font-bold mb-6">Roadmap</h2>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green via-gold to-slate-800 hidden md:block"></div>

          <div className="space-y-24">
            {PHASES.map((phase, index) => (
              <div key={phase.id} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Connection Point */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-green z-10 hidden md:block">
                  {phase.status === 'current' && <div className="absolute inset-0 rounded-full bg-green animate-ping opacity-50"></div>}
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[45%]">
                  <div className={`glass p-8 rounded-2xl border-l-4 ${phase.status === 'current' ? 'border-green green-glow' : 'border-slate-700 opacity-60'}`}>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-space text-2xl font-bold">{phase.title}</h3>
                      {phase.status === 'current' && (
                        <span className="text-[10px] font-bold text-green tracking-widest uppercase bg-green/10 px-2 py-1 rounded">Active Stage</span>
                      )}
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Objective</div>
                        <p className="text-slate-300 text-sm">{phase.objective}</p>
                      </div>

                      {phase.trigger && (
                        <div>
                          <div className="text-xs font-bold text-gold uppercase tracking-widest mb-1">Activation Trigger</div>
                          <p className="text-slate-300 text-sm">{phase.trigger}</p>
                        </div>
                      )}

                      <div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Participants</div>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {phase.participants.map(p => (
                            <span key={p} className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-400">{p}</span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/5">
                        <div>
                          <div className="text-[10px] font-bold text-slate-500 uppercase">Structure</div>
                          <div className="text-xs text-slate-300 mt-1">{phase.structure}</div>
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-slate-500 uppercase">Capacity</div>
                          <div className="text-xs text-slate-300 mt-1">{phase.capacity}</div>
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
