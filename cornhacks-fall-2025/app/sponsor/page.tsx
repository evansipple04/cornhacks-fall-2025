import React from 'react'
import styles from './sponsor.module.css'
import Image from 'next/image'

const Sponsor = () => {
  return (
    <div className={styles.container}>
      <div className="flex flex-col items-center">
        <h1 className={styles.welcomeText}>Welcome to your future.</h1>
        <p className={styles.subText}>Establish connections with the best talent in Nebraska.</p>
        <a 
          href="mailto:cornhacks@unl.edu"
          className={styles.emailButton}
        >
          Contact Us
        </a>
      </div>

      <div className="mt-[50px]">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center gap-16">
            {/* Top Row - 3 Logos */}
            <div className="flex justify-center gap-16">
              {/* Olsson */}
              <a href="https://www.olsson.com/" target="_blank" rel="noopener noreferrer" className="w-[300px] h-[200px] bg-white rounded-xl flex items-center justify-center p-6 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]">
                <Image
                  src="/logos/olsson.png"
                  alt="Olsson Logo"
                  width={280}
                  height={180}
                  className="object-contain"
                />
              </a>
              {/* LI-COR */}
              <a href="https://www.licor.com/" target="_blank" rel="noopener noreferrer" className="w-[300px] h-[200px] bg-white rounded-xl flex items-center justify-center p-6 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]">
                <Image
                  src="/logos/licor.png"
                  alt="LI-COR Logo"
                  width={280}
                  height={180}
                  className="object-contain"
                />
              </a>
              {/* Belcan */}
              <a href="https://www.belcan.com/" target="_blank" rel="noopener noreferrer" className="w-[300px] h-[200px] bg-white rounded-xl flex items-center justify-center p-6 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]">
                <Image
                  src="/logos/belcan.png"
                  alt="Belcan Logo"
                  width={280}
                  height={180}
                  className="object-contain"
                />
              </a>
            </div>
            {/* Bottom Row - 2 Logos */}
            <div className="flex justify-center gap-16">
              {/* Conagra */}
              <a href="https://www.conagrabrands.com/" target="_blank" rel="noopener noreferrer" className="w-[300px] h-[200px] bg-white rounded-xl flex items-center justify-center p-6 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]">
                <Image
                  src="/logos/conagra.png"
                  alt="Conagra Logo"
                  width={280}
                  height={180}
                  className="object-contain"
                />
              </a>
              {/* DPL */}
              <a href="https://dontpaniclabs.com/" target="_blank" rel="noopener noreferrer" className="w-[300px] h-[200px] bg-white rounded-xl flex items-center justify-center p-6 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]">
                <Image
                  src="/logos/DPL_logo_2018_rgb.png"
                  alt="DPL Logo"
                  width={280}
                  height={180}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsor