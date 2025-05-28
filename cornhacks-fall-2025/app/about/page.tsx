import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      About Page
      <Link href="/past-projects">
        <button>Go to Past Projects</button>
      </Link>
      <Link href="/sponsor">
        <button>Go to Sponsors</button>
      </Link>
    </div>
  )
}

export default HomePage;