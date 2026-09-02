import React, { useState } from 'react';
import { EDUCATION } from '../data/portfolioData';
import { GraduationCap, BookOpen, Award, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export const AcademicSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('mtech');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="education" className="mt-28 md:mt-40">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#e5e2e1]">
          Academic Core
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#00dbe9]/40 via-[#00dbe9]/10 to-transparent"></div>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-10 pb-4">
        {EDUCATION.map((item, index) => {
          const isCurrent = item.status === 'Current';
          const isExpanded = expandedId === item.id;

          return (
            <div key={item.id} className="relative pl-8 md:pl-14">
              {/* Timeline Pin Indicator */}
              <div
                className={`absolute w-4 h-4 rounded-full -left-[9px] top-2 transition-all duration-300 ${
                  isCurrent
                    ? 'bg-[#050505] border-2 border-[#00dbe9] shadow-[0_0_12px_#00dbe9]'
                    : 'bg-[#050505] border-2 border-white/30'
                }`}
              />

              {/* Glass Card */}
              <div
                className={`glass-card p-6 md:p-8 rounded-2xl transition-all duration-300 ${
                  isCurrent ? 'glow-hover border-[#00dbe9]/30' : 'hover:border-white/20 opacity-90 hover:opacity-100'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                  <div className="flex items-center gap-3">
                    <GraduationCap className={`w-5 h-5 ${isCurrent ? 'text-[#00dbe9]' : 'text-[#b9cacb]'}`} />
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-[#e5e2e1]">
                      {item.degree}
                    </h3>
                  </div>

                  <span
                    className={`font-mono text-xs px-3 py-1 rounded-full border w-fit tracking-wide ${
                      isCurrent
                        ? 'bg-[#00dbe9]/10 text-[#dbfcff] border-[#00dbe9]/30'
                        : 'bg-white/5 text-[#b9cacb] border-white/10'
                    }`}
                  >
                    {item.period}
                  </span>
                </div>

                <p className="text-base sm:text-lg text-[#00dbe9] font-medium mb-1">
                  {item.institution}
                </p>

                <p className="text-[#b9cacb] text-sm md:text-base mb-4 font-normal">
                  {item.specialization}
                </p>

                {/* Expandable Module Highlights */}
                <div className="pt-2 border-t border-white/5">
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="flex items-center gap-2 text-xs font-mono text-[#b9cacb] hover:text-[#dbfcff] transition-colors cursor-pointer py-1"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#00dbe9]" />
                    <span>{isExpanded ? 'Hide Key Highlights & Modules' : 'View Key Highlights & Modules'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {isExpanded && (
                    <div className="mt-4 space-y-2.5 animate-in fade-in duration-200">
                      <p className="text-xs text-[#849495] leading-relaxed">
                        {item.description}
                      </p>
                      <ul className="space-y-2 pt-1">
                        {item.highlights.map((hl, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-[#e5e2e1]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00dbe9] mt-0.5 shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
