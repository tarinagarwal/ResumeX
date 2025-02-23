import { create } from 'zustand';
import { Resume } from '../types/resume';

interface ResumeStore {
  resume: Resume;
  isDarkMode: boolean;
  setResume: (resume: Resume) => void;
  updatePersonalDetails: (details: Partial<Resume['personalDetails']>) => void;
  toggleDarkMode: () => void;
}

const defaultResume: Resume = {
  personalDetails: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    title: '',
  },
  summary: '',
  experience: [],
  education: [],
  skills: [],
  certifications: [],
  projects: [],
  template: 'modern',
  theme: {
    primary: '#4F46E5',
    font: 'inter',
  },
};

export const useResumeStore = create<ResumeStore>((set) => ({
  resume: defaultResume,
  isDarkMode: false,
  setResume: (resume) => set({ resume }),
  updatePersonalDetails: (details) =>
    set((state) => ({
      resume: {
        ...state.resume,
        personalDetails: { ...state.resume.personalDetails, ...details },
      },
    })),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));