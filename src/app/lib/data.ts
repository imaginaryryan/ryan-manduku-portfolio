import { projects } from '@/data/projectsData';
import { Project } from 'types/project';

export const fetchProjects = async (): Promise<Project[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return projects;
};