'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver';
import { Palette, Smartphone, Globe, Code, Database, ShoppingCart,ArrowRight,Plus,X} from 'lucide-react';
import styles from '@/app/styles/services.module.css';

// Service data type
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isMain?: boolean;
}

// Services data
const mainServices: Service[] = [
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user experiences that engage and convert users effectively.',
    icon: <Palette className="w-8 h-8" />,
    isMain: true,
  },
  {
    id: 'app-design',
    title: 'App Design',
    description: 'Designing mobile applications with focus on user experience and modern design principles.',
    icon: <Smartphone className="w-8 h-8" />,
    isMain: true,
  },
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Building responsive websites that deliver exceptional performance and visual appeal.',
    icon: <Globe className="w-8 h-8" />,
    isMain: true,
  },
];

const additionalServices: Service[] = [
  {
    id: 'backend-dev',
    title: 'Backend Development',
    description: 'Robust server-side solutions with scalable architecture and secure API development.',
    icon: <Code className="w-8 h-8" />,
  },
  {
    id: 'database-design',
    title: 'Database Design',
    description: 'Optimized database structures for efficient data management and query performance.',
    icon: <Database className="w-8 h-8" />,
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    description: 'Complete online store development with payment integration and inventory management.',
    icon: <ShoppingCart className="w-8 h-8" />,
  },
];

// Animation variants
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
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
  hover: {
    y: -15,
    transition: {
      duration: 0.3,
      ease: 'easeOut' as const,
    },
  },
};

const expandButtonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { delay: 0.6, duration: 0.4 }
  },
};

const additionalCardsVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
    },
  },
};

// Service Card Component
const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const cardClass = `${styles.serviceCard} ${index === 0 ? styles.primary : styles.secondary}`;
  
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={cardClass}
    >
      {/* Card Icon */}
      <motion.div 
        className={styles.cardIcon}
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        {service.icon}
      </motion.div>

      {/* Title */}
      <h3 className={styles.cardTitle}>
        {service.title}
      </h3>

      {/* Description */}
      <p className={styles.cardDescription}>
        {service.description}
      </p>

      {/* Learn More Link */}
      <motion.div 
        className={styles.learnMore}
        whileHover={{ x: 5 }}
      >
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4" />
      </motion.div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const { ref: elementRef, isInView: isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const toggleServices = () => {
    setShowAllServices(!showAllServices);
  };

  return (
    <section
    id="services"
    ref={elementRef}
    className={styles.servicesSection}
    aria-label="services"
    >

      <div className={styles.servicesContainer}>
        {/* Header with button in top right */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate={isVisible ? "visible" : "hidden"} 
          className={styles.servicesHeader}
        >
          <div className={styles.servicesTitleWrapper}>
            <motion.span 
              variants={itemVariants} 
              className={styles.servicesSubtitle}
            >
              What I Offer
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className={styles.servicesTitle}
            >
              My <span className={styles.highlight}>Services</span>
            </motion.h2>
          </div>
          
          <motion.div
            variants={expandButtonVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className={styles.headerButtonContainer}
          >
            <motion.button
              onClick={toggleServices}
              className={`${styles.viewAllBtn} ${styles.pulse}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{showAllServices ? 'Show Less' : 'View All'}</span>
              <span className={styles.icon}>
                {showAllServices ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className={styles.servicesGrid}
        >
          {mainServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>

        {/* Additional Services Grid */}
        <div className={`${styles.additionalServices} ${showAllServices ? styles.show : ''}`}>
          <motion.div
            variants={additionalCardsVariants}
            initial="hidden"
            animate={showAllServices ? "visible" : "hidden"}
            className={styles.servicesGrid}
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                custom={index}
              >
                <ServiceCard service={service} index={index + 3} />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          {showAllServices && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className={styles.bottomCta}
            >
              <p className={styles.ctaText}>
                Ready to start your next project? or to request a service? Let's discuss how I can help bring your vision to life.
              </p>
              <motion.button
                className={styles.viewAllBtn}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="/#contact">
                  Get In Touch
                </a>
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;