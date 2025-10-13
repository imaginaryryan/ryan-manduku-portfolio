'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FloatingParticle {
  id: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
}

interface AnimatedBackgroundProps {
  isDark?: boolean;
  particleCount?: number;
  showOrbs?: boolean;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  isDark = false, 
  particleCount = 20,
  showOrbs = true 
}) => {
  const [particles, setParticles] = useState<FloatingParticle[]>([]);

  useEffect(() => {
    // Generate particles only on client side
    setParticles(
      Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 2,
      }))
    );
  }, [particleCount]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs - only show if showOrbs is true */}
      {showOrbs && (
        <>
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute w-1 h-1 rounded-full ${
            isDark ? 'bg-blue-400/20' : 'bg-blue-500/20'
          }`}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
      
      {/* Grid pattern for Experience component */}
      {!showOrbs && (
        <div 
          className={`absolute inset-0 ${
            isDark 
              ? 'bg-gradient-to-br from-slate-900/50 via-transparent to-blue-900/20' 
              : 'bg-gradient-to-br from-slate-50/50 via-transparent to-blue-50/30'
          }`}
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${
              isDark ? 'rgba(148, 163, 184, 0.1)' : 'rgba(71, 85, 105, 0.1)'
            } 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      )}
    </div>
  );
};

export default AnimatedBackground;