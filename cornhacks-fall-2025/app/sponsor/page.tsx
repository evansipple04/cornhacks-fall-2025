import React from 'react'
import styles from './sponsor.module.css'

const Sponsor = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.welcomeText}>Welcome to your future.</h1>
      <p className={styles.subText}>Establish connections with the best talent in Nebraska.</p>
      <a 
        href="mailto:cornhacks@unl.edu"
        className={styles.emailButton}
      >
        Contact Us
      </a>
    </div>
  )
}

export default Sponsor