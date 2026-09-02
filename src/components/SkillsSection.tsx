import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Cpu, Database, Layout, Wrench, Search, Sparkles, Check, Info } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    level: string;
    description?: string;
    category: string;
  } | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-6 h-6 text-[#00dbe9]" />;
      case 'memory':
        return <Cpu className="w-6 h-6 text-[#00dbe9]" />;
      case 'dataset':
        return <Database className="w-6 h-6 text-[#00dbe9]" />;
      case 'developer_mode':
        return <Layout className="w-6 h-6 text-[#00dbe9]" />;
      case 'build':
        return <Wrench className="w-6 h-6 text-[#00dbe9]" />;
      default:
        return <Code className="w-6 h-6 text-[#00dbe9]" />;
    }
  };

  return (
    <section id="skills" className="mt-28 md:mt-40">
      {/* Section Header with Gradient Dividers */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-[1px] flex-1 bg-gradient-to-l from-[#00dbe9]/30 to-transparent hidden md:block"></div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#e5e2e1] text-center">
          Technical Arsenal
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#00dbe9]/30 to-transparent"></div>
      </div>

      {/* Interactive Search & Quick Filter */}
      <div className="max-w-md mx-auto mb-10">
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-[#849495] absolute left-4 pointer-events-none" />
          <input
            type="text"
            placeholder="Search language, framework, or model..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[#131313] border border-white/10 text-xs font-mono text-[#e5e2e1] placeholder-[#849495] focus:outline-none focus:border-[#00dbe9] focus:shadow-[0_0_15px_rgba(0,219,233,0.2)] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 text-xs font-mono text-[#849495] hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => {
          const isSpanTwo = cat.id === 'web-app-dev';
          const filteredSkills = cat.skills.filter(s =>
            s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (s.description && s.description.toLowerCase().includes(searchQuery.toLowerCase()))
          );

          if (searchQuery && filteredSkills.length === 0) return null;

          return (
            <div
              key={cat.id}
              id={`skill-category-${cat.id}`}
              className={`glass-card p-6 md:p-8 rounded-3xl flex flex-col gap-6 glow-hover transition-all duration-300 ${
                isSpanTwo && !searchQuery ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[#e5e2e1]">
                    {cat.title}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#849495]">
                  {cat.skills.length} skills
                </span>
              </div>

              {/* Chips / Badges */}
              <div className="flex flex-wrap gap-2.5">
                {(searchQuery ? filteredSkills : cat.skills).map((skill) => (
                  <button
                    key={skill.name}
                    onClick={() =>
                      setSelectedSkill({
                        name: skill.name,
                        level: skill.level,
                        description: skill.description,
                        category: cat.title
                      })
                    }
                    className={`px-3.5 py-2 rounded-xl bg-[#131313] border font-mono text-xs flex items-center gap-2 transition-all cursor-pointer text-left ${
                      skill.primary
                        ? 'border-white/15 text-[#e5e2e1] hover:border-[#00dbe9]/60 hover:bg-[#00dbe9]/10'
                        : 'border-white/5 text-[#b9cacb] hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        skill.primary
                          ? 'bg-[#00dbe9] shadow-[0_0_6px_#00dbe9]'
                          : 'bg-white/30'
                      }`}
                    />
                    <span>{skill.name}</span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Skill Detail Floating Inspector */}
      {selectedSkill && (
        <div className="mt-6 glass-card p-5 rounded-2xl border border-[#00dbe9]/40 bg-[#0e0e0e]/95 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#00dbe9]/10 border border-[#00dbe9]/30 text-[#00dbe9] mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-base text-[#dbfcff]">{selectedSkill.name}</span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-[#00dbe9]">
                  {selectedSkill.level}
                </span>
                <span className="font-mono text-[10px] text-[#849495]">{selectedSkill.category}</span>
              </div>
              <p className="text-xs text-[#b9cacb] mt-1 font-sans">
                {selectedSkill.description || 'Specialized in production algorithms and experimental pipelines.'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setSelectedSkill(null)}
            className="text-xs font-mono text-[#849495] hover:text-white px-3 py-1 rounded bg-white/5"
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
};
