/**
 * Types and interfaces for Anshika Rana's Research & Portfolio App
 */

export interface Project {
  id: string;
  title: string;
  category: 'AI Research' | 'Computer Vision' | 'Mobile App' | 'Full-Stack';
  subtitle: string;
  description: string;
  detailedDescription: string;
  icon: string;
  image: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  keyFeatures: string[];
  techStack: string[];
  codeSnippet?: {
    language: string;
    code: string;
    title: string;
  };
  demoType: 'cognitive-calculator' | 'doc-verification' | 'mobile-eventsync' | 'mobile-frendii';
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    primary?: boolean;
    description?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  bulletPoints: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  specialization: string;
  description: string;
  highlights: string[];
  status: 'Current' | 'Completed';
}

export interface ResearchWork {
  id: string;
  title: string;
  domain: string;
  period: string;
  summary: string;
  problemStatement: string;
  workDone: string[];
  methodology: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  collaborationType: 'Research Collaboration' | 'Engineering Role' | 'Consulting / Advisory' | 'General Inquiry';
}
