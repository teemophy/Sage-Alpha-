import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Identity from './components/Identity';
import Roadmap from './components/Roadmap';
import AllocationTree from './components/AllocationTree';
import Governance from './components/Governance';
import Footer from './components/Footer';

const IntroModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
      <div className="w-full max-w-xl glass rounded-2xl overflow-hidden border-gold/20 p-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="font-space text-2xl font-bold text-white mb-2">Request Introduction</h3>
            <p className="text-slate-400 text-sm">Selective onboarding for qualified allocators.</p>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors">&times;</button>
        </div>
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Inquiry logged. A protocol officer will review your introduction.'); onClose(); }}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Full Name</label>
              <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-gold outline-none transition-all" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Email Address</label>
              <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-gold outline-none transition-all" placeholder="john@firm.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Institutional Affiliation</label>
            <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-gold outline-none transition-all" placeholder="Family Office / Endowment / Private Bank" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Message / Context</label>
            <textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-gold outline-none transition-all h-32 resize-none" placeholder="Primary objective of introduction..."></textarea>
          </div>
          <button type="submit" className="w-full py-4 bg-gold text-navy font-bold rounded-xl hover:scale-[1.01] active:scale-[0.99] transition-all">
            Initiate Introduction Protocol
          </button>
        </form>
      </div>
    </div>
  );
};

const TerminalModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const messages = [
        "SAGEALPHA KERNEL v1.0.1 INITIALIZING...",
        "AUTH: INSTITUTIONAL_GATEWAY_VALIDATED",
        "PHASE 0 PROTOCOL: ACTIVE",
        "CONNECTING TO GLOBAL LIQUIDITY NODES...",
        "CALIBRATING EXECUTION ENGINE...",
        "LATENCY: 12.4ms [STABLE]",
        "CHECKING VALIDATION CAPACITIES...",
        "SYSTEM_STATUS: STANDBY",
        "MONITORING RISK VECTORS...",
        "READY FOR ALLOCATOR VALIDATION."
      ];
      let i = 0;
      const interval = setInterval(() => {
        if (i < messages.length) {
          setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${messages[i]}`]);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setLogs([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-2xl glass rounded-xl overflow-hidden border-white/10 shadow-2xl">
        <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex justify-between items-center">
          <span className="font-mono text-[10px] text-gold font-bold tracking-widest uppercase">System Validation Terminal</span>
          <button onClick={onClose} className="text-slate-400 hover:text-white">&times;</button>
        </div>
        <div ref={scrollRef} className="p-8 h-80 overflow-y-auto font-mono text-[11px] text-slate-300 leading-relaxed bg-navy">
          {logs.map((log, idx) => (
            <div key={idx} className="mb-1.5">
              <span className="text-gold opacity-50 mr-2">SYS:</span> {log}
            </div>
          ))}
          <div className="animate-pulse inline-block w-2 h-4 bg-gold ml-1"></div>
        </div>
        <div className="p-4 border-t border-white/5 grid grid-cols-3 gap-4 text-center bg-white/5">
          <div>
            <div className="text-[9px] text-slate-500 uppercase font-bold">Node Integrity</div>
            <div className="text-emerald text-sm font-bold">99.98%</div>
          </div>
          <div>
            <div className="text-[9px] text-slate-500 uppercase font-bold">Latency Avg</div>
            <div className="text-white text-sm font-bold">12.4ms</div>
          </div>
          <div>
            <div className="text-[9px] text-slate-500 uppercase font-bold">Protocol</div>
            <div className="text-gold text-sm font-bold">PHASE 0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  return (
    <div className="min-h-screen relative selection:bg-gold/30">
      {/* Top Tape Ticker */}
      <div className="w-full bg-white/5 border-b border-white/5 py-1.5 overflow-hidden sticky top-0 z-[110] glass">
        <div className="animate-ticker">
          <span className="mx-8 text-[9px] font-mono text-slate-500 uppercase tracking-widest">PHASE 0 PROTOCOL: <span className="text-emerald">ACTIVE</span></span>
          <span className="mx-8 text-[9px] font-mono text-slate-500 uppercase tracking-widest">VALIDATION INTEGRITY: <span className="text-emerald">99.98%</span></span>
          <span className="mx-8 text-[9px] font-mono text-slate-500 uppercase tracking-widest">LATENCY: <span className="text-white">12.4ms</span></span>
          <span className="mx-8 text-[9px] font-mono text-slate-500 uppercase tracking-widest">NODES: <span className="text-gold">GLOBAL_CLUSTER_01</span></span>
          <span className="mx-8 text-[9px] font-mono text-slate-500 uppercase tracking-widest">CAPACITY: <span className="text-gold">LIMITED AVAILABLE</span></span>
          <span className="mx-8 text-[9px] font-mono text-slate-500 uppercase tracking-widest">HEARTBEAT: <span className="text-emerald">SYNCHRONIZED</span></span>
          
          {/* Duplicated for smooth loop */}
          <span className="mx-8 text-[9px] font-mono text-slate-500 uppercase tracking-widest">PHASE 0 PROTOCOL: <span className="text-emerald">ACTIVE</span></span>
          <span className="mx-8 text-[9px] font-mono text-slate-500 uppercase tracking-widest">VALIDATION INTEGRITY: <span className="text-emerald">99.98%</span></span>
          <span className="mx-8 text-[9px] font-mono text-slate-500 uppercase tracking-widest">LATENCY: <span className="text-white">12.4ms</span></span>
          <span className="mx-8 text-[9px] font-mono text-slate-500 uppercase tracking-widest">NODES: <span className="text-gold">GLOBAL_CLUSTER_01</span></span>
        </div>
      </div>

      <Header />
      
      <main>
        <Hero onIntroRequest={() => setIsIntroOpen(true)} />
        
        <div className="container mx-auto px-6 py-12">
          <div className="flex items-center gap-4">
            <div className="h-px flex-grow bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_10px_#fbbf24]"></div>
            <div className="h-px flex-grow bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>
        </div>

        <Identity />
        <Roadmap />
        <AllocationTree />
        <Governance />

        <section className="py-24 relative overflow-hidden bg-slate-900/10">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto glass p-10 md:p-20 rounded-3xl border-gold/10 relative group hover:border-gold/30 transition-all duration-500 glow-gold">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold px-5 py-2 rounded text-navy text-[10px] font-bold uppercase tracking-widest">
                Selective Onboarding
              </div>
              
              <h2 className="font-space text-4xl md:text-6xl font-bold mb-8 tracking-tight">Access the Protocol</h2>
              <p className="text-slate-400 mb-12 text-lg leading-relaxed max-w-2xl mx-auto font-light">
                SageAlpha is engineered for long-term institutional resilience. We invite sophisticated entities whose objectives align with systematic rigor to initiate an introduction.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => setIsIntroOpen(true)}
                  className="px-12 py-5 bg-gold text-navy font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all glow-gold text-sm"
                >
                  Initiate Introduction
                </button>
                <button 
                  onClick={() => setIsTerminalOpen(true)}
                  className="px-12 py-5 glass border border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-all text-sm"
                >
                  Validation Log
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Floating Status Button */}
      <div className="fixed bottom-8 right-8 z-[150]">
        <button 
          onClick={() => setIsTerminalOpen(true)}
          className="px-6 py-4 glass border border-white/10 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-4 font-mono text-[10px] font-bold tracking-[0.2em] uppercase"
        >
          <div className="relative">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald animate-ping absolute inset-0"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald relative"></div>
          </div>
          Phase 0 Active
        </button>
      </div>

      <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
      <IntroModal isOpen={isIntroOpen} onClose={() => setIsIntroOpen(false)} />
    </div>
  );
};

export default App;