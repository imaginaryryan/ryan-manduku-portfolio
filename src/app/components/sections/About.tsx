'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver';

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

const About: React.FC = () => {
  const { ref: elementRef, isInView: isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={elementRef}
      id="about"
      className="relative py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
                         variants={containerVariants}
                         initial="hidden"
                         animate={isVisible ? "visible" : "hidden"}
                         className="text-glow text-center mb-16"
                       >
                         <motion.p
                           variants={itemVariants}
                           className="text-sm font-semibold text-purple-600 dark:text-purple-400 
                                      uppercase tracking-wider mb-4"
                         >
                           
                           — about
                         </motion.p>
                         <motion.h2
                           variants={itemVariants}
                           className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                         > 
                         WHO IS RYAN MANDUKU?
                         </motion.h2>
                       </motion.div>
       
        {/* Content Grid - Mobile: Image first, then text. Desktop: Text left, image right */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Text Content - Order 2 on mobile, 1 on desktop */}
          <motion.div
            variants={itemVariants}
            className="order-2 lg:order-1 space-y-6"
          >
            <div className=" hero-card space-y-4">
              <p className="text-lg leading-relaxed">
                I'm a passionate software developer with a deep love for creating innovative solutions 
                that make a real difference. My journey in technology began during my computer science 
                studies, where I discovered my enthusiasm for both frontend and backend development. 
                I thrive on the challenge of turning complex problems into elegant, user-friendly applications.
              </p>
              
              <p className="text-lg leading-relaxed">
                What drives me most is the intersection of creativity and logic in programming. I enjoy 
                collaborating with diverse teams, learning new technologies, and constantly pushing 
                myself to grow as a developer. Whether it's building responsive web interfaces, 
                designing robust APIs, or optimizing database performance, I approach each project 
                with curiosity and attention to detail.
              </p>
              
              <p className="text-lg leading-relaxed">
                Beyond coding, I'm someone who values continuous learning and staying current with 
                industry trends. I believe in writing clean, maintainable code and creating solutions 
                that not only work well but also provide exceptional user experiences. My goal is 
                to contribute to projects that have meaningful impact while growing alongside 
                talented professionals in the tech community.
              </p>
              
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new frameworks, contributing to open-source 
                projects, or sharing knowledge with fellow developers. I'm always excited about the next 
                challenge and the opportunity to bring creative ideas to life through technology.
              </p>
            </div>
          </motion.div>

          {/* Image Container - Order 1 on mobile, 2 on desktop */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2"
          >
            <div className="relative w-full aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
              <img
                src="/ryanpics.jpg"
                alt="Ryan Manduku - Software Developer"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              {/* Optional overlay for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;