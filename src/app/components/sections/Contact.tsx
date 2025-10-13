'use client';

import { useState, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Send, RefreshCw, CheckCircle, XCircle, Linkedin, Github, Instagram, Facebook } from 'lucide-react';
import styles from '@/app/styles/contact.module.css';


// Types and Interfaces
interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  ariaLabel: string;
}

interface SocialMedia {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  url: string;
  ariaLabel: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

// EmailJS Configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_x9yhrw3',
  TEMPLATE_ID: 'template_81hwzxt',
  PUBLIC_KEY: '2jMKO0dlEJ9N9EUYy',
};

// Email service function
const sendEmailToOwner = async (formData: FormData): Promise<boolean> => {
  try {
    if (!window.emailjs) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
      script.async = true;
      document.head.appendChild(script);
      
      await new Promise((resolve, reject) => {
        script.onload = resolve;
        script.onerror = reject;
      });
      
      window.emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }

    const response = await window.emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      {
        to_email: 'ryanmanduku7@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
        contact_time: new Date().toLocaleString(),
      }
    );

    return response.status === 200;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
};

// Enhanced email validation
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  const trimmedEmail = email.trim().toLowerCase();
  if (!emailRegex.test(trimmedEmail)) return false;
  if (trimmedEmail.includes('..')) return false;
  
  const parts = trimmedEmail.split('@');
  if (parts.length !== 2) return false;
  
  const domain = parts[1];
  if (!domain.includes('.') || domain.startsWith('.') || domain.endsWith('.')) return false;
  
  return true;
};

// Custom Form Hook
const useContactForm = (initialState: FormData) => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState<string>('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.name.trim())) {
      newErrors.name = 'Name can only contain letters, spaces, hyphens, and apostrophes';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address (e.g., user@example.com)';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters long';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    } else if (formData.message.trim().length > 2000) {
      newErrors.message = 'Message must be less than 2000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      setSubmitMessage('Please fill in all required fields correctly');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const success = await sendEmailToOwner(formData);
      
      if (success) {
        setSubmitStatus('success');
        setSubmitMessage('Message successfully sent! Thank you for reaching out. I\'ll get back to you soon.');
        setFormData(initialState);
        setErrors({});
      } else {
        setSubmitStatus('error');
        setSubmitMessage('Failed to send message. Please check your internet connection and try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('An unexpected error occurred. Please try again or contact me directly.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRetry = () => {
    setSubmitStatus('idle');
    setSubmitMessage('');
  };

  const resetForm = () => {
    setFormData(initialState);
    setErrors({});
    setSubmitStatus('idle');
    setSubmitMessage('');
  };

  return {
    formData,
    setFormData,
    errors,
    setErrors,
    isSubmitting,
    submitStatus,
    submitMessage,
    handleSubmit,
    handleRetry,
    resetForm
  };
};

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

// Contact Data
const contactInfo: ContactInfo[] = [
  {
    icon: Phone,
    label: 'Call Me',
    value: '+263 77 254 7014',
    href: 'tel:+263772547014',
    ariaLabel: 'Call Ryan Manduku'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'ryanmanduku7@gmail.com',
    href: 'mailto:ryanmanduku7@gmail.com',
    ariaLabel: 'Send email to Ryan Manduku'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Harare, Zimbabwe',
    href: 'https://maps.google.com/?q=Harare+Zimbabwe',
    ariaLabel: 'View location on Google Maps'
  }
];

// Social Media Data
const socialMedia: SocialMedia[] = [
  {
    icon: Linkedin,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/ryanmanduku',
    ariaLabel: 'Visit Ryan Manduku LinkedIn profile'
  },
  {
    icon: Github,
    name: 'GitHub',
    url: 'https://github.com/ryanmanduku',
    ariaLabel: 'Visit Ryan Manduku GitHub profile'
  },
  {
    icon: Instagram,
    name: 'Instagram',
    url: 'https://www.instagram.com/imaginary.ryan/',
    ariaLabel: 'Visit Ryan Manduku Instagram profile'
  },
  {
    icon: Facebook,
    name: 'Facebook',
    url: 'https://facebook.com/ryanmanduku',
    ariaLabel: 'Visit Ryan Manduku Facebook profile'
  }
];

// Form Input Component
const FormInput = ({ 
  label, 
  name, 
  type = 'text', 
  value, 
  error, 
  onChange, 
  maxLength,
  ...props 
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  maxLength?: number;
  [key: string]: any;
}) => {
  const inputClassName = `${type === 'textarea' ? styles.textarea : styles.input} ${error ? styles.inputError : ''}`;

  return (
    <div className={styles.formGroup}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      {type === 'textarea' ? (
        <div style={{ position: 'relative' }}>
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            className={inputClassName}
            {...props}
          />
          {maxLength && (
            <div className={styles.charCount}>
              {value.length}/{maxLength}
            </div>
          )}
        </div>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          className={inputClassName}
          {...props}
        />
      )}
      {error && (
        <p className={styles.errorMessage} role="alert">
          <XCircle style={{ width: '16px', height: '16px', flexShrink: 0 }} />
          {error}
        </p>
      )}
    </div>
  );
};

// Main Contact Component
const Contact: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const {
    formData,
    setFormData,
    errors,
    setErrors,
    isSubmitting,
    submitStatus,
    submitMessage,
    handleSubmit,
    handleRetry,
  } = useContactForm({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev: FormErrors) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section 
    id= "contact"
    ref={ref}
    className={styles.container}
    aria-label="contact form">

      <div className={styles.innerContainer}>
        {/* Header */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={styles.header}
        >
          <motion.h1 variants={itemVariants} className={styles.title}>
            Get In Touch
            <div className={styles.titleUnderline}></div>
          </motion.h1>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={styles.content}
        >
          {/* Left Section */}
          <motion.div variants={itemVariants} className={styles.leftSection}>
            <h2 className={styles.sectionTitle}>
              Let's discuss your project
            </h2>
            <p className={styles.sectionDescription}>
          I'm available for freelance projects and work opportunities. 
          Connect with me via phone, email, or social media to discuss how we can collaborate to bring your next project to life
            </p>

            {/* Contact Info */}
            <div className={styles.contactInfo}>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={styles.contactItem}
                  aria-label={info.ariaLabel}
                >
                  <div className={styles.contactIcon}>
                        <info.icon className="w-6 h-6" />
                  </div>
                  <div className={styles.contactDetails}>
                    <h3 className={styles.contactLabel}>
                      {info.label}
                    </h3>
                    <p className={styles.contactValue}>
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Media Section */}
            <div className={styles.socialSection}>
              <h3 className={styles.socialTitle}>Find Me On</h3>
              <div className={styles.socialLinks}>
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={social.ariaLabel}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className='w-5 h-5'/>
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div variants={itemVariants} className={styles.rightSection}>
            <h2 className={styles.sectionTitle}>
              Send Me A Message
            </h2>
            <p className={styles.sectionDescription}>
              Got a project or proposal? Let's talk.
            </p>

            <div className={styles.form}>
              <div className={styles.formRow}>
                <FormInput
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  error={errors.name}
                  maxLength={50}
                  required
                />
                <FormInput
                  label="Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={errors.email}
                  maxLength={100}
                  required
                />
              </div>

              <FormInput
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                error={errors.subject}
                maxLength={100}
                required
              />

              <FormInput
                label="Your Message"
                name="message"
                type="textarea"
                value={formData.message}
                onChange={handleInputChange}
                error={errors.message}
                rows={6}
                maxLength={2000}
                required
              />

              {/* Submit Button */}
              <div>
                <motion.button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={styles.submitBtn}
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98, y: 0 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className={styles.spin} style={{ width: '16px', height: '16px' }} />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send style={{ width: '16px', height: '16px' }} />
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`${styles.statusMessage} ${styles.successMessage}`}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px', fontWeight: 500 }}>
                      <CheckCircle style={{ width: '20px', height: '20px' }} />
                      <span>Message Successfully Sent!</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: '#d1d5db' }}>
                      {submitMessage}
                    </p>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`${styles.statusMessage} ${styles.errorMessage}`}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px', fontWeight: 500 }}>
                      <XCircle style={{ width: '20px', height: '20px' }} />
                      <span>Failed to Send Message</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: '#d1d5db', marginBottom: '16px' }}>
                      {submitMessage}
                    </p>
                    <motion.button
                      onClick={handleRetry}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={styles.retryBtn}
                    >
                      <RefreshCw className='w-5 h-5' />
                      <span>RETRY</span>
                    </motion.button>
                  </motion.div>
                )}

                {submitMessage && submitStatus === 'idle' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`${styles.statusMessage} ${styles.warningMessage}`}
                  >
                    <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 500 }}>
                      {submitMessage}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

declare global {
  interface Window {
    emailjs: any;
  }
}

export default Contact;