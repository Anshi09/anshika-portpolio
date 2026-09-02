import React from 'react';
import { EXPERIENCE } from '../data/portfolioData';
import { Briefcase, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="mt-28 md:mt-40">
      <div className="glass-card rounded-3xl p-8 md:p-14 border border-white/10 relative overflow-hidden">
        {/* Glow ambient accent */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#00dbe9]/10 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none"></div>

        <div className="flex items-center gap-3 mb-10 relative z-10">
          <div className="p-2.5 rounded-xl bg-[#00dbe9]/10 border border-[#00dbe9]/30 text-[#00dbe9]">
            <Briefcase className="w-6 h-6" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#e5e2e1]">
            Professional Experience
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-[#00dbe9]/20 ml-3 md:ml-5 space-y-10">
          {EXPERIENCE.map((exp) => (
            <div key={exp.id} className="relative pl-7 md:pl-10 space-y-4">
              {/* Timeline Indicator Pin */}
              <div className="absolute w-4 h-4 rounded-full bg-[#050505] border-2 border-[#00dbe9] -left-[9px] top-1 shadow-[0_0_12px_#00dbe9]" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#e5e2e1]">
                    {exp.role}
                  </h3>
                  <p className="text-base text-[#00dbe9] font-medium">
                    {exp.company} • <span className="text-xs font-mono text-[#849495]">{exp.location}</span>
                  </p>
                </div>

                <span className="font-mono text-xs px-3.5 py-1 rounded-full bg-[#00dbe9]/10 text-[#dbfcff] border border-[#00dbe9]/30 w-fit">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm md:text-base text-[#b9cacb]">
                {exp.description}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#e5e2e1]">
                {exp.bulletPoints.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <ArrowRight className="w-4 h-4 text-[#00dbe9] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Tag Group */}
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-3 py-1 rounded-lg bg-[#131313] border border-white/10 text-[#dbfcff]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
