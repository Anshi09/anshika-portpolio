import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Award, Brain, CheckCircle2, ChevronRight, Layers, Lightbulb } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'focus' | 'methodology'>('overview');

  const stats = [
    { value: 'M.Tech', label: 'CSE @ THAPAR', detail: 'Cognitive Computing & ML' },
    { value: 'B.Tech', label: 'CSE @ RIMT', detail: 'Software Engineering Core' },
    { value: 'AI/ML', label: 'RESEARCH', detail: 'Neural Load & Vision' },
    { value: '4+', label: 'MAJOR PROJECTS', detail: 'Deployed & Validated' },
  ];

  return (
    <section id="about" className="mt-28 md:mt-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Left Profile Card */}
        <div
          id="profile-portrait-card"
          className="lg:col-span-4 glass-card p-8 rounded-3xl flex flex-col items-center text-center justify-between gap-6 glow-hover transition-all duration-500 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00dbe9]/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

          {/* Profile Image with subtle cyan halo */}
          <div className="w-44 h-44 rounded-full border-2 border-[#00dbe9]/30 p-1.5 overflow-hidden relative group">
            <div className="absolute inset-0 bg-[#00dbe9]/15 blur-xl group-hover:bg-[#00dbe9]/30 transition-all duration-500"></div>
            <img
              id="profile-portrait-image"
              className="w-full h-full object-cover rounded-full z-10 relative group-hover:scale-105 transition-transform duration-500"
              alt="Anshika Rana portrait - AI Researcher"
              src={PERSONAL_INFO.profileImg}
            />
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#e5e2e1]">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-[#00dbe9] font-mono text-xs tracking-widest uppercase font-semibold">
              AI/ML RESEARCHER & SOFTWARE ENGINEER
            </p>
            <p className="text-[#849495] text-xs font-mono">
              Thapar Institute of Eng. & Tech.
            </p>
          </div>

          {/* Quick Badges */}
          <div className="w-full pt-4 border-t border-white/5 space-y-2 text-left">
            <div className="flex items-center justify-between text-xs font-mono text-[#b9cacb]">
              <span>Specialization:</span>
              <span className="text-[#dbfcff]">Cognitive AI</span>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-[#b9cacb]">
              <span>Primary Stack:</span>
              <span className="text-[#dbfcff]">Python / PyTorch / React Native</span>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-[#b9cacb]">
              <span>Degree Status:</span>
              <span className="text-[#00dbe9] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00dbe9]" />
                M.Tech (Finished June 2026)
              </span>
            </div>
          </div>
        </div>

        {/* Right Info & Metric Grid */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-[#00dbe9]">
              <Brain className="w-3.5 h-3.5" />
              <span>RESEARCH PHILOSOPHY</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#e5e2e1] leading-tight">
              Bridging the gap between <span className="text-[#dbfcff]">Cognition</span> and{' '}
              <span className="text-[#00dbe9]">Computation</span>.
            </h2>

            <p className="text-[#b9cacb] text-base md:text-lg leading-relaxed font-normal">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Interactive Exploration Tabs */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
            <div className="flex items-center gap-2 border-b border-white/5 pb-3">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-[#00dbe9]/15 text-[#dbfcff] border border-[#00dbe9]/30'
                    : 'text-[#b9cacb] hover:text-white'
                }`}
              >
                Core Pillars
              </button>
              <button
                onClick={() => setActiveTab('focus')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  activeTab === 'focus'
                    ? 'bg-[#00dbe9]/15 text-[#dbfcff] border border-[#00dbe9]/30'
                    : 'text-[#b9cacb] hover:text-white'
                }`}
              >
                Lab Focus
              </button>
              <button
                onClick={() => setActiveTab('methodology')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  activeTab === 'methodology'
                    ? 'bg-[#00dbe9]/15 text-[#dbfcff] border border-[#00dbe9]/30'
                    : 'text-[#b9cacb] hover:text-white'
                }`}
              >
                Engineering Standard
              </button>
            </div>

            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#b9cacb]">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02]">
                  <Brain className="w-5 h-5 text-[#00dbe9] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-[#e5e2e1] block text-sm mb-0.5">Cognitive Load Modeling</strong>
                    Quantifying mental workload indices (TI, NTI, CMI-P) for adaptive systems.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02]">
                  <Layers className="w-5 h-5 text-[#00dbe9] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-[#e5e2e1] block text-sm mb-0.5">Computer Vision & OCR</strong>
                    Deep document security, tamper detection, and multimodal entity alignment.
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'focus' && (
              <div className="text-sm text-[#b9cacb] space-y-2">
                <p>
                  At Thapar Institute of Engineering and Technology, our research combines computational psychometrics, machine learning latency profiling, and real-time biometric-algorithmic closed loops.
                </p>
                <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-[#00dbe9]">
                  <span className="px-2.5 py-1 rounded bg-[#00dbe9]/10 border border-[#00dbe9]/20">Dual-Task Paradigms</span>
                  <span className="px-2.5 py-1 rounded bg-[#00dbe9]/10 border border-[#00dbe9]/20">Latency Decomposition</span>
                  <span className="px-2.5 py-1 rounded bg-[#00dbe9]/10 border border-[#00dbe9]/20">Multimodal Fraud Analysis</span>
                </div>
              </div>
            )}

            {activeTab === 'methodology' && (
              <div className="text-sm text-[#b9cacb] space-y-2">
                <p>
                  Bridging scientific rigor with production-grade engineering: from vectorized NumPy tensor operations to reactive, 60fps mobile interfaces in React Native.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#e5e2e1]">
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#00dbe9]" /> Reproducible Pipelines</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#00dbe9]" /> Sub-second Inference</div>
                </div>
              </div>
            )}
          </div>

          {/* 4 Core Metric Stat Blocks */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                id={`stat-card-${idx}`}
                className="glass-card p-5 rounded-2xl flex flex-col justify-center items-center gap-1 border border-white/5 glow-hover text-center"
              >
                <span className="font-display text-2xl sm:text-3xl font-bold text-[#dbfcff]">
                  {stat.value}
                </span>
                <span className="font-mono text-[11px] font-semibold text-[#00dbe9] tracking-wider">
                  {stat.label}
                </span>
                <span className="text-[11px] text-[#849495] mt-1 font-sans">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
