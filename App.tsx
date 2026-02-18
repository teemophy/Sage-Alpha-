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
            <h3 className="font-space text-2xl font-bold text-white mb-2 tracking-tight">Request Introduction</h3>
            <p className="text-slate-400 text-sm">Selective onboarding for institutional allocators.</p>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors text-2xl">&times;</button>
        </div>
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Request Encrypted. Validation pending review.'); onClose(); }}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">Identity</label>
              <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-gold outline-none transition-all placeholder:text-slate-700" placeholder="Full Name" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">Communication</label>
              <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-gold outline-none transition-all placeholder:text-slate-700" placeholder="Corporate Email" />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">Institutional Affiliation</label>
            <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-gold outline-none transition-all placeholder:text-slate-700" placeholder="Firm Name / Entity Type" />
          </div>
          <button type="submit" className="w-full py-4 bg-gold text-navy font-bold rounded-xl hover:opacity-90 active:scale-[0.98] transition-all text-xs uppercase tracking-widest">
            Initiate Secure Protocol
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
        "KERNEL INITIALIZING...",
        "ENCRYPTION: AES-256 ACTIVE",
        "PHASE 0 GATEWAY: OPEN",
        "CONNECTING TO NODES: [HKG, FRA, NYC]",
        "CALIBRATING EXECUTION LATENCY...",
        "STATUS: STABLE (12.4ms)",
        "CHECKING VALIDATION CAPACITY...",
        "SYSTEM_STATUS: STANDBY_MODE",
        "READY FOR ALLOCATOR PROTOCOL."
      ];
      let i = 0;
      const interval = setInterval(() => {
        if (i < messages.length) {
          setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${messages[i]}`]);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 700);
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
    <div className="fixed inset-0 z-[400] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
      <div className="w-full max-w-2xl glass rounded-xl overflow-hidden border-white/10 shadow-2xl">
        <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex justify-between items-center">
          <span className="font-mono text-[9px] text-gold font-bold tracking-[0.2em] uppercase">System Integrity Terminal</span>
          <button onClick={onClose} className="text-slate-400 hover:text-white">&times;</button>
        </div>
        <div ref={scrollRef} className="p-8 h-80 overflow-y-auto font-mono text-[10px] text-slate-300 leading-relaxed bg-[#010409]">
          {logs.map((log, idx) => (
            <div key={idx} className="mb-1 text-slate-400">
              <span className="text-gold/50 mr-2">SYS:</span> {log}
            </div>
          ))}
          <div className="animate-pulse inline-block w-1.5 h-3.5 bg-gold ml-1"></div>
        </div>
        <div className="p-4 border-t border-white/5 grid grid-cols-3 gap-4 text-center bg-white/5">
          <div className="space-y-0.5">
            <div className="text-[8px] text-slate-500 uppercase font-bold tracking-widest">Integrity</div>
            <div className="text-emerald text-xs font-bold">99.98%</div>
          </div>
          <div className="space-y-0.5">
            <div className="text-[8px] text-slate-500 uppercase font-bold tracking-widest">Latency</div>
            <div className="text-white text-xs font-bold">12.4ms</div>
          </div>
          <div className="space-y-0.5">
            <div className="text-[8px] text-slate-500 uppercase font-bold tracking-widest">Gateway</div>
            <div className="text-gold text-xs font-bold">PHASE 0</div>
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
      {/* Institutional Ticker */}
      <div className="w-full bg-navy border-b border-white/5 py-1.5 overflow-hidden sticky top-0 z-[110] glass">
        <div className="animate-ticker">
          <span className="mx-12 text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em]">PHASE 0 PROTOCOL: <span className="text-emerald">ACTIVE</span></span>
          <span className="mx-12 text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em]">ENCRYPTION: <span className="text-white">AES-256</span></span>
          <span className="mx-12 text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em]">LATENCY: <span className="text-white">12.4ms</span></span>
          <span className="mx-12 text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em]">NODES: <span className="text-gold">GLOBAL_CLUSTER_01</span></span>
          <span className="mx-12 text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em]">CAPACITY: <span className="text-gold">CONSTRAINED</span></span>
          <span className="mx-12 text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em]">STATUS: <span className="text-emerald">SYNCHRONIZED</span></span>
          
          {/* Loop overlap */}
          <span className="mx-12 text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em]">PHASE 0 PROTOCOL: <span className="text-emerald">ACTIVE</span></span>
          <span className="mx-12 text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em]">ENCRYPTION: <span className="text-white">AES-256</span></span>
        </div>
      </div>

      <Header />
      
      <main>
        <Hero onIntroRequest={() => setIsIntroOpen(true)} />
        
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center gap-4">
            <div className="h-px flex-grow bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="w-1 h-1 rounded-full bg-gold/50"></div>
            <div className="h-px flex-grow bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          </div>
        </div>

        <Identity />
        <Roadmap />
        <AllocationTree />
        <Governance />

        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto glass p-12 md:p-24 rounded-3xl border-gold/5 relative group hover:border-gold/20 transition-all duration-700">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold px-6 py-2 rounded-lg text-navy text-[10px] font-bold uppercase tracking-[0.3em] shadow-2xl">
                Gateway Introduction
              </div>
              
              <h2 className="font-space text-4xl md:text-5xl font-bold mb-8 tracking-tight">Selective Connectivity</h2>
              <p className="text-slate-500 mb-12 text-base md:text-lg leading-relaxed max-w-xl mx-auto font-light">
                SageAlpha is engineered for long-horizon institutional viability. We invite sophisticated entities to initiate a secure introduction protocol.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => setIsIntroOpen(true)}
                  className="px-12 py-5 bg-gold text-navy font-bold rounded-xl hover:opacity-90 active:scale-[0.98] transition-all text-xs uppercase tracking-widest shadow-xl"
                >
                  Initiate Introduction
                </button>
                <button 
                  onClick={() => setIsTerminalOpen(true)}
                  className="px-12 py-5 glass border border-white/5 text-white/80 font-bold rounded-xl hover:bg-white/5 transition-all text-xs uppercase tracking-widest"
                >
                  System Log
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Minimal Status Indicator */}
      <div className="fixed bottom-8 right-8 z-[150]">
        <button 
          onClick={() => setIsTerminalOpen(true)}
          className="px-5 py-3.5 glass border border-white/10 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-4 font-mono text-[9px] font-bold tracking-[0.3em] uppercase text-white/70"
        >
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-emerald animate-ping absolute inset-0"></div>
            <div className="w-2 h-2 rounded-full bg-emerald relative"></div>
          </div>
          Phase 0 Online
        </button>
      </div>

      <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
      <IntroModal isOpen={isIntroOpen} onClose={() => setIsIntroOpen(false)} />
    </div>
  );
};

export default App;