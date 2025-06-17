'use client';

import React, { useState } from 'react'
import YearNavigation from '../components/past-projects/YearNavigation'
import ProjectCard from '../components/past-projects/ProjectCard'

const PastProjects = () => {
  const years = [2025, 2024, 2023, 2022, 2021];
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const handleYearClick = (year: number) => {
    const element = document.getElementById(`year-${year}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCardExpand = (year: number, index: number) => {
    setExpandedCardId(`${year}-${index}`);
  };

  const handleCardClose = () => {
    setExpandedCardId(null);
  };

  const sampleProjects = [
    {
      title: "AI-Powered Study Assistant",
      description: "An intelligent study companion that helps students organize their notes and create personalized study plans.",
      linkText: "View Project"
    },
    {
      title: "Smart Campus Navigation",
      description: "A mobile app that helps students navigate campus buildings and find available study spaces in real-time.",
      linkText: "Learn More"
    },
    {
      title: "Virtual Study Groups",
      description: "A platform connecting students for virtual study sessions with integrated video chat and shared whiteboard.",
      linkText: "Explore"
    },
    {
      title: "Campus Event Hub",
      description: "A centralized platform for discovering and managing campus events, with personalized recommendations.",
      linkText: "Check it out"
    },
    {
      title: "Eco-Friendly Campus",
      description: "An initiative tracking and promoting sustainable practices across campus facilities and student activities.",
      linkText: "Join the movement"
    },
    {
      title: "Student Resource Portal",
      description: "A comprehensive platform connecting students with academic resources, tutoring, and mental health support.",
      linkText: "Access resources"
    }
  ];

  return (
    <>
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
              <div className="w-full max-w-[1200px] flex flex-wrap justify-center">
                {sampleProjects.map((project, index) => (
                  <div key={index} className="w-[400px] h-[550px] flex items-center justify-center">
                    <ProjectCard
                      imageUrl="/previous_event.png"
                      title={project.title}
                      description={project.description}
                      linkUrl={`/projects/${year}/${index + 1}`}
                      linkText={project.linkText}
                      onExpand={() => handleCardExpand(year, index)}
                      isExpanded={expandedCardId === `${year}-${index}`}
                      onClose={handleCardClose}
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      {expandedCardId && (
        <div 
          className="fixed inset-0 bg-black/70 z-[9999]"
          onClick={handleCardClose}
        />
      )}
    </>
  )
}

export default PastProjects