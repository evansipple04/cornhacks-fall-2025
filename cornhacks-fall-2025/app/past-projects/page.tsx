'use client';

import React from 'react'
import YearNavigation from '../components/past-projects/YearNavigation'

const PastProjects = () => {
  const years = [2025, 2024, 2023, 2022, 2021];

  const handleYearClick = (year: number) => {
    const element = document.getElementById(`year-${year}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      <YearNavigation years={years} onYearClick={handleYearClick} />
      <div className="p-8 space-y-16">
        {years.map((year) => (
          <section 
            key={year} 
            id={`year-${year}`}
            className="min-h-screen flex flex-col items-center"
          >
            <h2 className="text-4xl font-bold mb-8">{year} Projects</h2>
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Sample project cards - replace with actual project data */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                <p className="text-gray-600 mb-4">Brief project description goes here.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Tech Stack</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Category</span>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                <p className="text-gray-600 mb-4">Brief project description goes here.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Tech Stack</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Category</span>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                <p className="text-gray-600 mb-4">Brief project description goes here.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Tech Stack</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Category</span>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default PastProjects