'use client'

import { useEffect, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import ProjectCard from '@/app/components/project/ProjectCard'; 
import { projects } from '@/data/projectsData';
import styles from '@/app/styles/projects.module.css';

const ProjectsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants - moved outside the function
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  useEffect(() => {
    initShimmerEffect();
  }, []);

  const initShimmerEffect = () => {
    const techTags = document.querySelectorAll(`.${styles.techTag}`);
    
    function addRandomShimmer() {
      const randomTag = techTags[Math.floor(Math.random() * techTags.length)];
      if (randomTag) {
        randomTag.classList.add(styles.shimmer);
        setTimeout(() => {
          randomTag.classList.remove(styles.shimmer);
        }, 500);
      }
    }

    setInterval(addRandomShimmer, 2000);

    techTags.forEach(tag => {
      tag.addEventListener('mouseenter', () => {
        tag.classList.add(styles.shimmer);
      });

      tag.addEventListener('animationend', () => {
        tag.classList.remove(styles.shimmer);
      });
    });
  };

  // Return statement moved to the component level
  return (
    <section 
      id="projectsSection"
      ref={ref}
      className={styles.projectsSectionWrapper}
    >
      <div className={styles.innerContainer}/>
      
      {/* Header */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={styles.header}
      >
        <motion.h1 variants={itemVariants} className={styles.sectionTitle}>
          Featured Projects
        </motion.h1>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={styles.projectsGrid}
      >
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;