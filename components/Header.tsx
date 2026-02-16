
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, Logo } from '../constants';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Track active section
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'glass py-3' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button 
            onClick={handleLogoClick}
            className="flex items-center gap-4 group focus:outline-none"
          >
            <Logo className="w-12 h-12 transition-transform group-hover:scale-105" />
            <span className="font-space text-xl font-bold tracking-tighter hidden sm:block">
              SAGE<span className="text-green transition-colors group-hover:text-gold">ALPHA</span>
            </span>
          </button>
          
          <nav className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a 
                  key={item.label} 
                  href={item.href} 
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 relative py-1 ${
                    isActive ? 'text-gold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-px bg-gold scale-x-0 transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : ''}`} />
                </a>
              );
            })}
          </nav>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[90] glass transition-all duration-500 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-12">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-2xl font-space font-bold text-white uppercase tracking-widest hover:text-gold transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={handleLogoClick}
            className="mt-8 px-8 py-3 glass border border-green/30 text-green rounded-lg text-sm font-bold tracking-widest"
          >
            HOME
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
