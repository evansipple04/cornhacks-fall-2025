'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <Link href="/" className={styles.logoContainer}>
          <Image 
            src="/corn.svg" 
            alt="CornHacks Logo" 
            width={50} 
            height={50}
            className={styles.logo}
          />
          <span className={styles.brandText}>CornHacks</span>
        </Link>
        
        <div className={styles.separator}></div>
        
        <a 
          href="mailto:cornhacks@unl.edu" 
          className={styles.emailLink}
        >
          cornhacks@unl.edu
        </a>
        
        <div className={styles.separator}></div>
        
        <a 
          href="https://www.instagram.com/unl_cornhacks/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <Image 
            src="/logos/instagram.png" 
            alt="Instagram" 
            width={35} 
            height={35}
            className={styles.socialIcon}
          />
        </a>
      </div>
    </nav>
  );
} 