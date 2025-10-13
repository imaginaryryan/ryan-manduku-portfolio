'use client';

import React from 'react';
import {educationData} from '@/data/education';
import {experienceData} from '@/data/experience';
import {EducationItem} from 'types/education';
import {ExperienceItem} from 'types/experience';
import styles from '@/app/styles/EducationExperience.module.css';

interface EducationCardProps {
  item: EducationItem;
  index: number;
}

interface ExperienceCardProps {
  item: ExperienceItem;
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ item, index }) => (
  <div 
    className={styles.item} 
    style={{ animationDelay: `${index * 0.1}s` }}
    role="article"
    aria-labelledby={`education-${item.id}-title`}
  >
    <div className={styles.itemHeader}>
      <div>
        <h3 id={`education-${item.id}-title`} className={styles.itemTitle}>
          {item.title}
        </h3>
        <p className={styles.itemCompany}>{item.institution}</p>
      </div>
      <span className={styles.itemPeriod} aria-label={`Duration: ${item.period}`}>
        {item.period}
      </span>
    </div>
    <p className={styles.itemDescription}>{item.description}</p>
  </div>
);

const ExperienceCard: React.FC<ExperienceCardProps> = ({ item, index }) => (
  <div 
    className={styles.item} 
    style={{ animationDelay: `${index * 0.1}s` }}
    role="article"
    aria-labelledby={`experience-${item.id}-title`}
  >
    <div className={styles.itemHeader}>
      <div>
        <h3 id={`experience-${item.id}-title`} className={styles.itemTitle}>
          {item.position}
        </h3>
        <p className={styles.itemCompany}>{item.company}</p>
      </div>
      <span className={styles.itemPeriod} aria-label={`Duration: ${item.period}`}>
        {item.period}
      </span>
    </div>
    <p className={styles.itemDescription}>{item.description}</p>
  </div>
);

const EducationExperience: React.FC = () => {
  
  return (
    <section 
      id= "EducationExperience"
      className={styles.wrapper}
      aria-label="Education and Experience"
    >

      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Education and Work</h1>
        
        <div className={styles.sectionsGrid}>
          {/* Education Section */}
          <section className={styles.section} aria-labelledby="education-heading">
            <h2 id="education-heading" className={styles.sectionTitle}>
              Education
            </h2>
            <div className={styles.itemsContainer}>
              {educationData.map((item, index) => (
                <EducationCard 
                  key={item.id} 
                  item={item} 
                  index={index}
                />
              ))}
            </div>
          </section>

          {/* Professional Experience Section */}
          <section className={styles.section} aria-labelledby="experience-heading">
            <h2 id="experience-heading" className={styles.sectionTitle}>
              Professional Experience
            </h2>
            <div className={styles.itemsContainer}>
              {experienceData.map((item, index) => (
                <ExperienceCard 
                  key={item.id} 
                  item={item} 
                  index={index}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;