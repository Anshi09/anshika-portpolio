import React, { useState } from 'react';
import { RESEARCH_WORK } from '../data/portfolioData';
import { Brain, CheckCircle2, ChevronDown, ChevronUp, Cpu, Layers, Sparkles, Terminal } from 'lucide-react';

export const ResearchSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('research-cognitive-load');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="research" className="mt-28 md:mt-40">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-[#00dbe9] mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>M.TECH GRADUATE INVESTIGATIONS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#e5e2e1]">
            Research Work & Investigations
          </h2>
        </div>
        <p className="text-sm font-mono text-[#849495] max-w-md">
          Summary of algorithmic design, empirical experiments, and computational modeling conducted at Thapar Institute.
        </p>
      </div>

      <div className="space-y-8">
        {RESEARCH_WORK.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <div
              key={item.id}
              id={`research-item-${item.id}`}
              className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 glow-hover transition-all duration-300 space-y-6"
            >
              {/* Card Header */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="px-3 py-1 rounded-full bg-[#00dbe9]/15 text-[#dbfcff] border border-[#00dbe9]/30">
                      {item.domain}
                    </span>
                    <span className="text-[#849495]">•</span>
                    <span className="text-[#00dbe9]">{item.period}</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-[#e5e2e1]">
                    {item.title}
                  </h3>
                </div>

                <button
                  onClick={() => toggleExpand(item.id)}
                  className="secondary-btn px-4 py-2.5 rounded-xl text-xs font-mono inline-flex items-center gap-2 self-start cursor-pointer shrink-0"
                >
                  <span>{isExpanded ? 'Collapse Details' : 'Deep Dive Work'}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4 text-[#00dbe9]" /> : <ChevronDown className="w-4 h-4 text-[#00dbe9]" />}
                </button>
              </div>

              {/* Research Summary */}
              <p className="text-sm md:text-base text-[#b9cacb] leading-relaxed">
                {item.summary}
              </p>

              {/* Problem Statement Card */}
              <div className="p-4 rounded-2xl bg-[#131313]/90 border border-white/5 text-sm space-y-1">
                <span className="text-xs font-mono uppercase text-[#00dbe9] font-semibold tracking-wider">
                  Investigated Challenge:
                </span>
                <p className="text-[#b9cacb] leading-relaxed">
                  {item.problemStatement}
                </p>
              </div>

              {/* Empirical Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {item.metrics.map((metric, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-[#131313] border border-white/5 text-center">
                    <div className="text-base sm:text-lg font-display font-bold text-[#dbfcff]">
                      {metric.value}
                    </div>
                    <div className="text-[10px] font-mono text-[#849495] mt-0.5">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Detailed Work Accordion */}
              {isExpanded && (
                <div className="pt-4 border-t border-white/5 space-y-5 animate-in fade-in duration-200">
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#00dbe9] font-bold flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5" />
                      Key Work Done & Computational Pipeline
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {item.workDone.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-[#e5e2e1]">
                          <CheckCircle2 className="w-4 h-4 text-[#00dbe9] mt-0.5 shrink-0" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs font-mono text-[#849495] border-t border-white/5">
                    <div>
                      <span className="text-[#00dbe9] font-medium">Methodology:</span> {item.methodology}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded bg-[#1c1b1b] border border-white/5 text-[#dbfcff]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
