
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Identity from './components/Identity';
import Roadmap from './components/Roadmap';
import AllocationTree from './components/AllocationTree';
import Governance from './components/Governance';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <Header />
      
      <main>
        <Hero />
        
        {/* Intro Separator */}
        <div className="container mx-auto px-6 py-12">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <Identity />
        
        <Roadmap />
        
        <AllocationTree />
        
        <Governance />

        {/* Closing CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto glass p-12 rounded-3xl border-gold/20 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold px-4 py-1 rounded text-slate-900 text-[10px] font-bold uppercase tracking-widest">
                Selective Introduction
              </div>
              <h2 className="font-space text-3xl md:text-4xl font-bold mb-6">Introduction Protocol</h2>
              <p className="text-slate-400 mb-10 leading-relaxed">
                If this framing makes sense to you, you may request an introduction. 
                If you are looking for preservation, guaranteed income, or lifestyle management, 
                this platform will not be a fit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-gold transition-all">
                  Contact Authorized Introducer
                </button>
                <button className="px-10 py-4 glass border border-white/10 text-white font-bold rounded-lg hover:bg-white/5 transition-all">
                  Phase 0 Documentation
                </button>
              </div>
              <div className="mt-8 text-[10px] text-slate-500 uppercase tracking-widest italic">
                “Protecting the strategy is our first and only priority.”
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Floating Disclaimer Button (Sticky CTA) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="px-4 py-3 glass border border-green/30 text-green rounded-full shadow-lg text-xs font-bold tracking-widest hover:scale-105 transition-all flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green animate-pulse"></div>
          PHASE 0 TERMINAL
        </button>
      </div>
    </div>
  );
};

export default App;
