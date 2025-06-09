'use client';

import React from 'react';

interface YearNavigationProps {
  years: number[];
  onYearClick: (year: number) => void;
}

const YearNavigation: React.FC<YearNavigationProps> = ({ years, onYearClick }) => {
  return (
    <div 
      style={{
        borderRadius: '20px'
      }}
      className="bg-[#1a1a1a] text-white py-16 px-2 sticky top-0 z-10 shadow-lg border-b border-gray-700 w-full"
    >
      <div className="w-full flex justify-evenly items-center">
        {years.map((year, index) => (
          <React.Fragment key={year}>
            <button
              style={{ 
                color: 'white', 
                fontSize: '2.67rem',
                transform: 'scale(1)',
                transition: 'all 0.3s ease'
              }}
              className="font-medium hover:text-gray-300 bg-transparent border-none outline-none hover:scale-125"
              onClick={() => onYearClick(year)}
            >
              {year}
            </button>
            {index < years.length - 1 && (
              <div 
                style={{
                  height: '64px',
                  width: '2px',
                  backgroundColor: 'white',
                  margin: '0 1rem'
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default YearNavigation; 