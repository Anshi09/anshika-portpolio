import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Terminal, Linkedin, Mail, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#131313] w-full border-t border-white/5 relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 py-16 flex flex-col items-center gap-6">
        {/* Brand Name */}
        <div className="flex flex-col items-center gap-2">
          <div className="font-display text-2xl sm:text-3xl font-bold tracking-tighter text-[#e5e2e1] uppercase">
            ANSHIKA RANA
          </div>
          <p className="text-xs font-mono text-[#00dbe9] tracking-wider">
            AI & ML RESEARCHER // THAPAR TIET
          </p>
        </div>

        {/* Footer Navigation & Social Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-mono text-[#b9cacb]">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00dbe9] transition-colors flex items-center gap-1.5"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00dbe9] transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-[#00dbe9] transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <button
            onClick={scrollToTop}
            className="hover:text-[#00dbe9] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to Top</span>
          </button>
        </div>

        {/* Precision Copyright Stamp */}
        <div className="pt-4 border-t border-white/5 w-full text-center">
          <p className="font-mono text-xs text-[#849495] tracking-widest uppercase">
            © {new Date().getFullYear()} ANSHIKA RANA. LABORATORY-GRADE PRECISION.
          </p>
        </div>
      </div>
    </footer>
  );
};
