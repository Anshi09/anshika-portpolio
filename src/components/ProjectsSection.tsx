import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { FlaskConical, ShieldCheck, Calendar, Users, ArrowUpRight, Play, Sparkles, Layers } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'AI Research', 'Computer Vision', 'Mobile App'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'cognitive-load':
        return <span className="text-[#00dbe9] font-mono text-sm">🧪 Cognitive AI</span>;
      case 'ai-document-verification':
        return <span className="text-[#00dbe9] font-mono text-sm">🛡️ Multimodal CV</span>;
      case 'eventsync-app':
        return <span className="text-[#00dbe9] font-mono text-sm">📅 React Native</span>;
      case 'frendii-social':
        return <span className="text-[#00dbe9] font-mono text-sm">🌐 Social Graph</span>;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="mt-28 md:mt-40">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="flex items-center gap-4 flex-1">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#e5e2e1]">
            Research & Engineering
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#00dbe9]/40 via-[#00dbe9]/10 to-transparent"></div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#00dbe9] text-[#002022] font-bold shadow-[0_0_15px_rgba(0,219,233,0.3)]'
                  : 'bg-[#131313] border border-white/10 text-[#b9cacb] hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 2x2 Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => {
          return (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => onSelectProject(project)}
              className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full border border-white/10 glow-hover transition-all duration-500 cursor-pointer relative"
            >
              {/* Card Image Area */}
              <div className="h-64 sm:h-72 overflow-hidden relative bg-[#131313]">
                <div className="absolute inset-0 bg-[#131313]/25 z-10 group-hover:bg-transparent transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent z-10"></div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-[#0e0e0e]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#dbfcff]">
                  {getProjectIcon(project.id)}
                </div>

                {/* Interactive Simulator Trigger Indicator */}
                <div className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#00dbe9]/10 border border-[#00dbe9]/30 text-[#00dbe9] group-hover:bg-[#00dbe9] group-hover:text-black transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                <img
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={project.image}
                />
              </div>

              {/* Card Content Area */}
              <div className="p-7 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display text-2xl font-bold text-[#e5e2e1] group-hover:text-[#dbfcff] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-[#b9cacb] mb-6 text-sm sm:text-base leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Tags & Simulator CTA */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] px-2.5 py-1 bg-[#1c1b1b] rounded-md border border-white/5 text-[#b9cacb]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-[#00dbe9] group-hover:translate-x-1 transition-transform">
                    <span className="flex items-center gap-1.5">
                      <Play className="w-3.5 h-3.5 fill-current" />
                      Launch Live Simulator & Architecture
                    </span>
                    <span className="text-[#849495] group-hover:text-[#dbfcff]">→</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
