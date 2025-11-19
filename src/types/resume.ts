export interface SocialLink {
  platform: 'github' | 'linkedin' | 'portfolio' | 'twitter' | 'other';
  url: string;
}

export interface PersonalInfo {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  socialLinks: SocialLink[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string; // Markdown or bullet points
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  current: boolean;
}

export interface SkillCategory {
  id: string;
  name: string; // e.g., "Languages", "Frameworks"
  skills: string[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  selectedTemplate: 'modern' | 'classic' | 'creative' | 'executive' | 'minimalist' | 'professional' | 'tech' | 'designer' | 'academic' | 'startup';
}

export const initialResumeState: ResumeData = {
  personalInfo: {
    fullName: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
    socialLinks: []
  },
  skills: [],
  experience: [],
  projects: [],
  education: [],
  selectedTemplate: 'modern'
};
