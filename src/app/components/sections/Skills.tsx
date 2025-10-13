'use client';

import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import styles from '@/app/styles/skills.module.css';

// TypeScript interfaces
interface Skill {
  name: string;
  icon: string;
  proficiency: number;
  description: string;
}

interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

// Skills data with corresponding image URLs and descriptions
const skillsData: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    skills: [
      { 
        name: 'React', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 
        proficiency: 92,
        description: 'Advanced component-based architecture and modern React patterns'
      },
      { 
        name: 'TypeScript', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', 
        proficiency: 88,
        description: 'Type-safe JavaScript development with advanced type systems'
      },
      { 
        name: 'Next.js', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', 
        proficiency: 85,
        description: 'Full-stack React framework with SSR and optimization'
      },
      { 
        name: 'Tailwind CSS', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', 
        proficiency: 90,
        description: 'Modern utility-first CSS framework for rapid UI development'
      }
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    skills: [
      { 
        name: 'Python', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 
        proficiency: 87,
        description: 'Django, Flask, and data processing applications'
      },
      { 
        name: 'Node.js', 
        icon: '/nodejs.png', 
        proficiency: 85,
        description: 'Server-side JavaScript with Express and advanced patterns'
      },
      { 
        name: 'Django', 
        icon: '/django.png', 
        proficiency: 82,
        description: 'High-level Python web framework for rapid development'
      },
      { 
        name: 'Express', 
        icon: '/express.png', 
        proficiency: 83,
        description: 'Fast and minimalist web framework for Node.js'
      }
    ]
  },
  {
    id: 'databases',
    name: 'Database',
    skills: [
      { 
        name: 'MongoDB', 
        icon: '/mongodb.png', 
        proficiency: 85,
        description: 'NoSQL document database with aggregation pipelines'
      },
      { 
        name: 'PostgreSQL', 
        icon: '/postgre.png', 
        proficiency: 80,
        description: 'Advanced SQL queries, indexing, and performance optimization'
      },
      { 
        name: 'Redis', 
        icon: '/redis.png', 
        proficiency: 78,
        description: 'In-memory caching and session management'
      },
      { 
        name: 'MySQL', 
        icon: '/mysql-database.png', 
        proficiency: 82,
        description: 'Relational database management and optimization'
      }
    ]
  },
  {
    id: 'ai-ml',
    name: 'AI/ML',
    skills: [
      { 
        name: 'PyTorch', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', 
        proficiency: 75,
        description: 'Deep learning framework for research and production'
      },
      { 
        name: 'TensorFlow', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', 
        proficiency: 72,
        description: 'End-to-end machine learning platform'
      },
      { 
        name: 'Scikit-learn', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 
        proficiency: 78,
        description: 'Machine learning library for classical algorithms'
      },
      { 
        name: 'Pandas', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', 
        proficiency: 85,
        description: 'Data manipulation and analysis library'
      }
    ]
  },
  {
    id: 'devops',
    name: 'DevOps',
    skills: [
      { 
        name: 'Docker', 
        icon: '/docker.png', 
        proficiency: 78,
        description: 'Containerization and multi-stage builds'
      },
      { 
        name: 'AWS', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', 
        proficiency: 80,
        description: 'Cloud services, Lambda, S3, and infrastructure management'
      },
      { 
        name: 'Git', 
        icon: '/github.png', 
        proficiency: 90,
        description: 'Version control and collaborative development'
      },
      { 
        name: 'Linux', 
        icon: '/linux.png', 
        proficiency: 82,
        description: 'System administration and server management'
      }
    ]
  }
];

// Individual skill card component
const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="group relative overflow-hidden cursor-pointer"
    >
      {/* Glassmorphic card with gradient border */}
      <div className={styles.skillCard}>
        
        {/* Skill icon and percentage container */}
        <div className="flex items-center justify-between mb-4">
          {/* Skill icon */}
          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
            {!imageError ? (
              <Image
                src={skill.icon}
                alt={`${skill.name} icon`}
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                {skill.name.charAt(0)}
              </div>
            )}
          </div>

          {/* Skill percentage */}
          <div className="text-right">
            <div className={styles.skillPercentage}>
              {skill.proficiency}%
            </div>
          </div>
        </div>

        {/* Skill name */}
        <h4 className={styles.skillName}>
          {skill.name}
        </h4>

        {/* Progress bar */}
        <div className={styles.skillProgress}>
          <motion.div
            className={styles.skillProgressFill}
            initial={{ width: 0 }}
            animate={{ width: `${skill.proficiency}%` }}
            transition={{ 
              delay: index * 0.1 + 0.5, 
              duration: 1.5, 
              ease: [0.4, 0, 0.2, 1] 
            }}
          />
        </div>
        
        {/* Skill description */}
        <p className={styles.skillDescription}>
          {skill.description}
        </p>
      </div>
    </motion.div>
  );
};

// Main Skills component
const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="skills" 
      ref={ref}
      className={styles.portfolioContainer}
      aria-label="Skills and Technologies"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className={styles.portfolioHeader}
        >
          <h1 className={styles.portfolioTitle}>
            Skills Portfolio
          </h1>
          <p className={styles.portfolioSubtitle}>
            Expertise across multiple technologies
          </p>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.tabNavigation}
        >
          {skillsData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`${styles.tabButton} ${
                activeTab === category.id ? styles.tabButtonActive : ''
              }`}
              aria-pressed={activeTab === category.id}
              role="tab"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10">{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
        >
          {skillsData
            .find(category => category.id === activeTab)
            ?.skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;