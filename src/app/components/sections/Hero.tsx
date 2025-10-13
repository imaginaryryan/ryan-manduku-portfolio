'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Download, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import styles from '@/app/styles/Hero.module.css';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Full Stack Developer',
    'UX/UI Designer',
    'Digital Marketer'
  ];

  useEffect(() => {
    const typeSpeed = 80;
    const deleteSpeed = 20;
    const pauseTime = 2000;
    const delayBetweenTexts = 500;

    const type = () => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        
        if (charIndex === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          setTimeout(() => {}, delayBetweenTexts);
        }
      } else {
        setCurrentText(current.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        
        if (charIndex === current.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const speed = isDeleting ? deleteSpeed : typeSpeed;
    const timer = setTimeout(type, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, charIndex, isDeleting, texts]);

  return (
    <section 
     id= "hero"
     className={styles.heroContainer}
     aria-label="Hero component"
    >    
      <div className={styles.heroCard}>
        {/* Header Section */}
        <header className={styles.heroHeader}>
          <div className={styles.heroName}>
            Hello, I'm <span className={styles.nameHighlight}>Ryan</span>
          </div>
        </header>

        {/* Typewriter Effect Section */}
        <h1 className={styles.typewriterContainer}>
          <div className={styles.typewriterText}>{currentText}</div>
        </h1>

        {/* Description Section */}
        <section className={styles.heroDescription}>
          <p className={styles.descriptionText}>
           I'm a Full Stack Web Developer and Software Engineer based in Harare, Zimbabwe, specializing in building scalable web applications 
           and innovative software products. From crafting intuitive front-end experiences to architecting robust back-end systems, 
           I deliver end-to-end solutions that drive results.</p>
        </section>
               <p className ={styles.socialMedia}>
                Reach out to transform ideas into powerful digital solutions!!!</p>
        {/* Social Media Section */}
        <section className={styles.socialMedia}>
          <ul className={styles.socialList}>
            <li>
              <Link href="#" className={styles.socialLink} aria-label="Facebook">
                <Facebook size={20} />
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.socialLink} aria-label="Twitter">
                <Twitter size={20} />
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com/imaginary.ryan" className={styles.socialLink} aria-label="Instagram">
                <Instagram size={20} />
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.socialLink} aria-label="LinkedIn">
                <Linkedin size={20} />
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.socialLink} aria-label="GitHub">
                <Github size={20} />
              </Link>
            </li>
          </ul>
        </section>

        {/* CTA Buttons Section */}
        <section className={styles.ctaButtons}>
          <Link href="#projects" className={`${styles.ctaButton} ${styles.ctaPrimary}`}>
            My Work
          </Link>
          <a 
            href="/ryan-manduku.pdf" 
            className={`${styles.ctaButton} ${styles.ctaSecondary}`}
            download="Ryan-Manduku-CV.pdf"
          >
            <Download size={20} />
            Download CV
          </a>
        </section>
      </div>
    </section>
  );
};

export default Hero;