// types/experience.ts

import { ReactNode } from 'react';


// Experience data type
export interface ExperienceItem {
  id: string;
  position: string;
  company: string;
  period: string;
  description: string;
  type:string;
}

export interface ExperienceHighlight {
  icon: ReactNode;
  text: string;
}

export interface ExperienceData {
  name: string;
  title: string;
  introduction: string[];
  highlights: ExperienceHighlight[];
}

export interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
}


