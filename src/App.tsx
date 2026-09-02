/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BackgroundShader } from './components/BackgroundShader';
import { TopNavbar } from './components/TopNavbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AcademicSection } from './components/AcademicSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchSection } from './components/ResearchSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResearchAssistantModal } from './components/ResearchAssistantModal';
import { Project } from './types';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAssistantOpen, setIsAssistantOpen] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#e5e2e1] font-sans antialiased selection:bg-[#00dbe9] selection:text-[#002022] overflow-x-hidden">
      {/* Background Interactive WebGL Shader */}
      <BackgroundShader />

      {/* Top Fixed / Sticky Navigation Bar */}
      <TopNavbar onOpenAssistant={() => setIsAssistantOpen(true)} />

      {/* Main Content Area */}
      <main className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 pb-24">
        {/* 1. Hero Section */}
        <HeroSection
          onExploreProjects={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 2. About & Stats Section */}
        <AboutSection />

        {/* 3. Academic Core Timeline */}
        <AcademicSection />

        {/* 4. Technical Arsenal Skills */}
        <SkillsSection />

        {/* 5. Research & Engineering Projects */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 6. Research Publications & Focus */}
        <ResearchSection />

        {/* 7. Professional Experience */}
        <ExperienceSection />

        {/* 8. Contact & Collaboration Section */}
        <ContactSection />
      </main>

      {/* Laboratory Precision Footer */}
      <Footer />

      {/* Interactive Project Deep Dive & Simulator Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive AI Research Assistant Modal */}
      <ResearchAssistantModal
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
      />

      {/* Floating Research Assistant Quick Trigger Pill */}
      <button
        id="floating-research-assistant-trigger"
        onClick={() => setIsAssistantOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full glass-card border border-[#00dbe9]/40 bg-[#0e0e0e]/90 text-[#00dbe9] shadow-[0_0_25px_rgba(0,219,233,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer group"
        title="Ask Anshika's AI Assistant"
      >
        <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline font-mono text-xs font-semibold text-[#dbfcff] pr-1">
          Ask Anshika AI
        </span>
      </button>
    </div>
  );
}
