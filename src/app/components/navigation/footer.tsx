'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import styles from'@/app/styles/Footer.module.css';

const Footer: React.FC =  () => {
  const currentYear = new Date().getFullYear();

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  interface SocialLink {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    href: string;
    ariaLabel: string;
  }

  const socialLinks: SocialLink[] = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ryanmanduku',
      ariaLabel: 'Visit Ryan\'s LinkedIn profile'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ryanmanduku',
      ariaLabel: 'Visit Ryan\'s GitHub profile'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/ryanmanduku',
      ariaLabel: 'Visit Ryan\'s Twitter profile'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/imaginary.ryan/',
      ariaLabel: 'Visit Ryan\'s Instagram profile'
    }
  ];

  return (
    <footer className={styles.footer}>
      {/* Footer Content */}
      <div className={styles.container}>
        {/* Main footer content */}
        <div className={styles.grid}>
          
          {/* Column 1: About/Description */}
          <div className={styles.column}>
            <h3 className={styles.gradientHeading}>Ryan Manduku</h3>
            <p className={styles.paragraph}>
              Full Stack Website Developer and Digital marketer helping you bring your ideas to life
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.column}>
            <h3 className={styles.whiteHeading}>Quick Links</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <a href="#hero" className={styles.link}>
                  Home
                </a>
              </li>
              {/* <li className={styles.listItem}>
                <a href="#about" className={styles.link}>
                  About
                </a>
              </li> */}
              <li className={styles.listItem}>
                <a href="#services" className={styles.link}>
                  Services
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="#skills" className={styles.link}>
                  Skills
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="#projectsSection" className={styles.link}>
                  Featured Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className={styles.column}>
            <h3 className={styles.whiteHeading}>Services</h3>
            <ul className={styles.servicesList}>
              <li className={styles.serviceItem}>
                Social Media Growth
              </li>
              <li className={styles.serviceItem}>
                Content Creation
              </li>
              <li className={styles.serviceItem}>
                Platform Management
              </li>
              <li className={styles.serviceItem}>
                Performance Tracking
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Me */}
          <div className={styles.column}>
            <h3 className={styles.whiteHeading}>Contact Me</h3>
            <div className={styles.contactInfo}>
              <p className={styles.contactText}>
                Harare, Zimbabwe
              </p>
              <a
                href="mailto:viralgrowth199@gmail.com"
                className={styles.contactLink}
              >
                ryanmanduku7@gmail.com
              </a>

              {/* Social Links */}
              <motion.div variants={itemVariants} className={styles.socialSection}>
                <h3 className={styles.socialHeading}>Connect With Me On</h3>
                
                {/* Social Media Icons */}
                <div className={styles.socialIcons}>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={styles.socialIcon}
                      aria-label={social.ariaLabel}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            <p>
              © {currentYear}
              <a href="#hero" className={styles.copyrightLink}>
                ryan manduku
              </a>
              all rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        id="ast-scroll-top"
        tabIndex={0}
        aria-label="Scroll to Top"
        className={styles.scrollToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;