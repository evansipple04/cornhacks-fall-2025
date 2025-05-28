import React from 'react'
import Link from 'next/link'
const PastProjects = () => {
  return (
    <div>Past projects page
      <Link href="/about">
        <button>Go to About</button>
      </Link>
      <Link href="/sponsor">
        <button>Go to Sponsors</button>
      </Link>
    </div>
  )
}

export default PastProjects