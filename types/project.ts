export interface Technology {
  name: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  technologies: Technology[];
  githubUrl: string;
  liveUrl?: string | null;
  category: 'Full-Stack' | 'Frontend' | 'Backend' | 'Mobile Development'| 'Data Science' | 'IoT Development';
}

export interface ProjectsSectionProps {
  projects?: Project[];
}

export interface ProjectCardProps {
  project: Project;
}