import React from 'react'
import Link from 'next/link'
const Sponsor = () => {
  return (
    <div>sponsor page
      <Link href="/past-projects">
        <button>Go to Past Projects</button>
      </Link>
      <Link href="/about">
        <button>Go to About</button>
      </Link>
    </div>
    
  )
}

export default Sponsor