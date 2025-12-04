'use client'


import Link from 'next/link';
import styles from '@/app/styles/header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', href: '#hero' },
    // { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Featured Projects', href: '#projectsSection' }
  ];

  return (
  <header 
    id ="header"
    className={`${styles.headerwrapper} ${isScrolled ? styles.scrolled : ''}`}
    aria-label="header">

      <nav className={styles.navContainer}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          Ryan Manduku
        </Link>
        
        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.navMenuOpen : styles.navMenuClosed}`}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.navItem}>
              <Link href={item.href} className={styles.navLink} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
          <li className={styles.navItem}>
            <Link href="#contact" className={styles.ctaButton} onClick={closeMenu}>
              Let's Connect
            </Link>
          </li>
        </ul>
        
        <button 
          className={styles.mobileMenuToggle} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </nav>
    </header>
  
  );
};

export default Header;