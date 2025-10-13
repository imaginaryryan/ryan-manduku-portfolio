
// src/types/index.ts
export interface AboutData {
  name: string;
  title: string;
  introduction: string;
  highlights: string[];
  currentFocus: string;
  stats: {
    label: string;
    value: string | number;
  }[];
}

export interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}