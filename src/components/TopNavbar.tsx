import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Send } from 'lucide-react';

interface TopNavbarProps {
  onOpenAssistant?: () => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({ onOpenAssistant }) => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'research', 'experience', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'research', label: 'Research' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-nav-header"
      className={`glass-nav sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'shadow-[0_4px_30px_rgba(0,219,233,0.12)] border-b border-white/10' : 'border-b border-white/5'
      }`}
    >
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-6 py-4 w-full">
        {/* Brand Logo */}
        <a
          href="#"
          id="brand-logo-link"
          className="font-display text-[22px] md:text-[28px] font-bold tracking-tighter text-[#e5e2e1] uppercase flex items-center gap-2 group cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span>ANSHIKA RANA</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00dbe9] shadow-[0_0_8px_#00dbe9] group-hover:scale-150 transition-transform duration-300"></span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[15px]" aria-label="Main Navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              onClick={() => scrollTo(item.id)}
              className={`transition-all duration-300 relative py-1 cursor-pointer ${
                activeSection === item.id
                  ? 'text-[#dbfcff] font-semibold'
                  : 'text-[#b9cacb] hover:text-[#dbfcff]'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00dbe9] shadow-[0_0_8px_#00dbe9] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          {onOpenAssistant && (
            <button
              id="ai-assistant-toggle-btn"
              onClick={onOpenAssistant}
              className="secondary-btn px-4 py-2.5 rounded-full text-xs font-mono font-medium inline-flex items-center gap-2 cursor-pointer"
              title="Interact with Anshika's AI Research Assistant"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00dbe9]" />
              <span>Research AI</span>
            </button>
          )}

          <button
            id="lets-connect-cta-btn"
            onClick={() => scrollTo('contact')}
            className="primary-btn px-6 py-2.5 rounded-full text-sm font-medium inline-flex items-center gap-2 scale-95 active:scale-90 transition-transform cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          {onOpenAssistant && (
            <button
              onClick={onOpenAssistant}
              className="p-2 rounded-lg bg-white/5 text-[#00dbe9] border border-white/10"
              aria-label="Open AI Assistant"
            >
              <Sparkles className="w-5 h-5" />
            </button>
          )}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#e5e2e1] hover:text-[#dbfcff] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-white/10 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-[#00dbe9]/10 border-[#00dbe9]/40 text-[#dbfcff]'
                    : 'bg-[#1c1b1b]/50 border-white/5 text-[#b9cacb] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => scrollTo('contact')}
              className="w-full primary-btn py-3 rounded-full text-center font-medium text-sm flex justify-center items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Let's Connect
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
