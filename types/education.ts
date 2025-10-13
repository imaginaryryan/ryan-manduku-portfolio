// types/education.ts
export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  status: 'completed' | 'ongoing';
  // location?: string;
  description: string;
}