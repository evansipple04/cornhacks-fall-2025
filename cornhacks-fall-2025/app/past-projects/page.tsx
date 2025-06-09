'use client';

import React from 'react'
import YearNavigation from '../components/past-projects/YearNavigation'

const PastProjects = () => {
  const years = [2025, 2024, 2023, 2022, 2021];

  const handleYearClick = (year: number) => {
    // Scroll functionality will be added later
    console.log(`Scrolling to ${year}`);
  };

  return (
    <div className="w-full">
      <YearNavigation years={years} onYearClick={handleYearClick} />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Past Projects</h1>
        {/* Content sections for each year will be added later */}
      </div>
    </div>
  )
}

export default PastProjects