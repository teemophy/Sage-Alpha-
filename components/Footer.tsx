import React from 'react';
import { Logo } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Logo className="w-8 h-8" />
              <span className="font-space text-lg font-bold tracking-tighter">SAGEALPHA</span>
            </div>
            <p className="text-slate-500 text-sm max-w-sm mb-6">
              A proprietary quantitative research and execution platform designed for institutional resilience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 glass flex items-center justify-center rounded-lg hover:text-gold transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
              <a href="#" className="w-10 h-10 glass flex items-center justify-center rounded-lg hover:text-gold transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            </div>
          </div>
          
          <div>
            <h5 className="font-space font-bold mb-6 text-white uppercase tracking-widest text-xs">Framework</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#mission" className="hover:text-gold transition-colors">Platform Mission</a></li>
              <li><a href="#identity" className="hover:text-gold transition-colors">Core Identity</a></li>
              <li><a href="#journey" className="hover:text-gold transition-colors">Validation Protocol</a></li>
              <li><a href="#allocation" className="hover:text-gold transition-colors">Allocation Tree</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-space font-bold mb-6 text-white uppercase tracking-widest text-xs">Compliance</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#governance" className="hover:text-gold transition-colors">Governance Rules</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Risk Disclosures</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Transparency Log</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Legal Boundaries</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 text-[10px] text-slate-600 uppercase tracking-widest leading-loose">
          <p className="mb-4">
            DISCLAIMER: Trading in liquid markets involves material risk. SageAlpha Technologies is a proprietary platform, not a fund, wealth management firm, or advisory service. Past performance is not indicative of future results. Participants must be financially sophisticated and capable of absorbing total loss of allocated capital.
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <span>&copy; {new Date().getFullYear()} SageAlpha Technologies. All Rights Reserved.</span>
            <span>Proprietary quantitative research & execution.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;