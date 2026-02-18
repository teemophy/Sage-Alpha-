import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Identity from './components/Identity';
import Roadmap from './components/Roadmap';
import AllocationTree from './components/AllocationTree';
import Governance from './components/Governance';
import Footer from './components/Footer';

const IntroModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate encryption and submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
      <div className="w-full max-w-xl glass rounded-2xl overflow-hidden border-gold/20 p-8 shadow-2xl relative">
        <button onClick={handleClose} className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors text-2xl z-10">&times;</button>
        
        {!submitted ? (
          <>
            <div className="mb-8">
              <h3 className="font-space text-2xl font-bold text-white mb-2 tracking-tight">Institutional Onboarding</h3>
              <p className="text-slate-400 text-sm">Initiate the Phase 0 secure protocol. All data is AES-256 encrypted.</p>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">Principal Identity</label>
                  <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-gold outline-none transition-all placeholder:text-slate-700" placeholder="Full Legal Name" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">Secure Communication</label>
                  <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-gold outline-none transition-all placeholder:text-slate-700" placeholder="Corporate Email" />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">Institutional Affiliation</label>
                <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-gold outline-none transition-all placeholder:text-slate-700" placeholder="Firm Name / Entity Type" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">Brief Intent</label>
                <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-gold outline-none transition-all placeholder:text-slate-700 resize-none" placeholder="Purpose of allocation..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-gold text-navy font-bold rounded-xl hover:opacity-90 active:scale-[0.98] transition-all text-xs uppercase tracking-widest flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-navy/20 border-t-navy rounded-full animate-spin"></div>
                    Encrypting Payload...
                  </>
                ) : 'Submit Phase 0 Request'}
              </button>
            </form>
          </>
        ) : (
          <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-emerald/10 border border-emerald/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="font-space text-3xl font-bold text-white mb-4">Request Encrypted</h3>
            <p className="text-slate-400 text-base leading-relaxed max-w-xs mx-auto mb-10">
              Your institutional credentials have been queued for validation. A principal will contact you via secure channels within 24 hours.
            </p>
            <button 
              onClick={handleClose}
              className="px-12 py-4 glass border border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-all text-xs uppercase tracking-widest"
            >
              Close Gateway
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
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
          
          <span className="mx-12 text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em]">PHASE 0 PROTOCOL: <span className="text-emerald">ACTIVE</span></span>
          <span className="mx-12 text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em]">ENCRYPTION: <span className="text-white">AES-256</span></span>
        </div>
      </div>

      <Header />
      
      <main>
        <Hero onIntroRequest={() => setIsIntroOpen(true)} />
        
        <div className="container mx-auto px-6 py-2">
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

        <section id="contact" className="py-12 md:py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto glass p-10 md:p-16 rounded-3xl border-gold/5 relative group hover:border-gold/20 transition-all duration-700">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold px-8 py-2.5 rounded-lg text-navy text-[10px] font-bold uppercase tracking-[0.4em] shadow-2xl">
                Gateway Introduction
              </div>
              
              <h2 className="font-space text-4xl md:text-5xl font-bold mb-8 tracking-tight text-white">Selective Connectivity</h2>
              <p className="text-slate-500 mb-12 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
                SageAlpha is engineered for long-horizon institutional viability. We invite sophisticated entities and institutional allocators to initiate a secure introduction protocol.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => setIsIntroOpen(true)}
                  className="group relative px-14 py-5 bg-gold text-navy font-bold rounded-xl transition-all shadow-xl overflow-hidden text-[11px] uppercase tracking-widest"
                >
                  <span className="relative z-10">Initiate Introduction</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <IntroModal isOpen={isIntroOpen} onClose={() => setIsIntroOpen(false)} />
    </div>
  );
};

export default App;