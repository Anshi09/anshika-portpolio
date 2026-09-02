import React from 'react';
import { ArrowRight, Mail, Terminal, Sparkles, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
  onContactClick,
}) => {
  return (
    <section
      id="hero-section"
      className="min-h-[85vh] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 pt-12 md:pt-16 pb-12 relative"
    >
      {/* Left Content Column */}
      <div className="flex-1 space-y-7 z-10">
        {/* Status Pill */}
        <div
          id="hero-status-badge"
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-[#131313]/70 backdrop-blur-md shadow-[0_0_15px_rgba(0,219,233,0.08)]"
        >
          <span className="w-2 h-2 rounded-full bg-[#00dbe9] shadow-[0_0_8px_#dbfcff] animate-pulse"></span>
          <span className="font-mono text-xs text-[#b9cacb] tracking-wider uppercase">
            M.Tech in CSE (June 2026) @ Thapar Institute of Eng. & Tech.
          </span>
        </div>

        {/* Main Display Headline */}
        <h1 className="font-display text-[42px] sm:text-[54px] lg:text-[68px] font-bold text-[#e5e2e1] max-w-3xl leading-[1.1] tracking-tight">
          Building Intelligent Systems. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dbfcff] via-[#00dbe9] to-[#006970]">
            Exploring the Future of AI.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#b9cacb] max-w-xl text-lg md:text-xl font-normal leading-relaxed">
          Researcher and Software Engineer specializing in Machine Learning, Cognitive Computing, and Full-Stack Development.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-3">
          <button
            id="hero-view-projects-btn"
            onClick={onExploreProjects}
            className="primary-btn px-8 py-4 rounded-full font-medium inline-flex items-center gap-2.5 cursor-pointer shadow-lg"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="hero-contact-me-btn"
            onClick={onContactClick}
            className="secondary-btn px-8 py-4 rounded-full font-medium inline-flex items-center gap-2.5 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-[#00dbe9]" />
            <span>Contact Me</span>
          </button>

          <a
            id="hero-github-link"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-white/10 bg-white/5 hover:border-[#00dbe9]/50 hover:bg-[#00dbe9]/10 text-[#b9cacb] hover:text-[#dbfcff] transition-all duration-300"
            title="View GitHub Profile"
          >
            <Terminal className="w-4 h-4" />
          </a>
        </div>

        {/* Quick Highlights Badge Matrix */}
        <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-[#849495]">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#00dbe9]" />
            <span>Cognitive Architectures</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#00dbe9]" />
            <span>Multimodal AI & Vision</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00dbe9]"></span>
            <span>Scalable Systems</span>
          </div>
        </div>
      </div>

      {/* Right Graphic / Interactive Media Container */}
      <div className="flex-1 relative w-full max-w-lg lg:max-w-none aspect-[4/3] lg:aspect-auto lg:h-[540px] rounded-3xl overflow-hidden glass-card border border-white/10 p-2 group glow-hover">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00dbe9]/15 via-transparent to-transparent z-10 mix-blend-overlay pointer-events-none"></div>

        {/* Technical Corner Tag */}
        <div className="absolute top-5 left-5 z-20 px-3 py-1 rounded-full bg-[#0e0e0e]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#dbfcff] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00dbe9]"></span>
          <span>NEURAL_SYS // V2.4</span>
        </div>

        <img
          id="hero-abstract-image"
          alt="Abstract representation of intelligent systems and neural networks"
          className="w-full h-full object-cover rounded-2xl opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          src={PERSONAL_INFO.heroAbstractImg}
        />

        {/* Bottom Floating Stats Pill */}
        <div className="absolute bottom-5 left-5 right-5 z-20 p-4 rounded-2xl bg-[#0e0e0e]/85 backdrop-blur-xl border border-white/10 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-mono text-[#849495] uppercase tracking-wider">Research Domain</div>
            <div className="text-sm font-semibold text-[#e5e2e1]">Cognitive Workload & Deep Vision</div>
          </div>
          <div className="text-right">
            <div className="text-[11px] font-mono text-[#849495] uppercase tracking-wider">Laboratory Focus</div>
            <div className="text-sm font-semibold text-[#00dbe9]">Thapar TIET</div>
          </div>
        </div>
      </div>
    </section>
  );
};
