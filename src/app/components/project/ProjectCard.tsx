'use client'

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { ProjectCardProps } from 'types/project'; 
import styles from '@/app/styles/projects.module.css';

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imageError, setImageError] = useState<boolean>(false);
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  // const getProjectIcon = useCallback((category: ProjectCardProps['project']['category']): string => {
  //   const icons = {
  //     'Full-Stack': 'layer-group',
  //     'Frontend': 'laptop-code',
  //     'Backend': 'server',
  //     'Mobile Development': 'mobile-alt'
  //   };
  //   return icons[category] || 'code';
  // }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
    setImageLoading(false);
  }, []);

  const handleImageLoad = useCallback(() => {
    setImageLoading(false);
  }, []);

  return (
    <div className={styles.projectCard} data-category={project.category}>
      <div className={styles.projectImage}>
        {!imageError ? (
          <>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={styles.projectImageImg}
              onError={handleImageError}
              onLoad={handleImageLoad}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {imageLoading && (
              <div className={styles.imageLoader}>
                <i className={`fas fa-spinner fa-spin ${styles.loadingIcon}`}></i>
              </div>
            )}
          </>
        ) : (
          <div className={styles.fallbackIcon}>
            {/* <i className={`fas fa-${getProjectIcon(project.category)}`}></i> */}
          </div>
        )}
      </div>
      
      <div className={styles.projectContent}>
        <div className={styles.projectHeader}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <span className={styles.projectCategory}>{project.category}</span>
        </div>
        
        <p className={styles.projectDescription}>{project.description}</p>
        
        <div className={styles.projectTech}>
          {project.technologies.map((tech, index) => (
            <span 
              key={`${tech.name}-${index}`}
              className={styles.techTag}
              style={{ borderLeftColor: tech.color }}
              title={tech.name}
            >
              {tech.name}
            </span>
          ))}
        </div>
        
        <div className={styles.projectButtons}>
          <a 
            href={project.githubUrl}
            className={`${styles.projectBtn} ${styles.github}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
          >
            <i className="fab fa-github"></i>
            Code
          </a>
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              className={`${styles.projectBtn} ${styles.demo}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
            >
              <i className="fas fa-external-link-alt"></i>
              Live Demo
            </a>
          )}
          
          <button 
            className={`${styles.projectBtn} ${styles.details}`}
            aria-label={`View details about ${project.title}`}
          >
            <i className="fas fa-info-circle"></i>
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;