'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is a Hackathon?",
    answer: "A hackathon is an invention marathon. Students come together to build innovative software and hardware over an extended period. It's very beginner friendly and is designed to be engaging to students at all levels of experience. We would love for you to come and experience a hackathon for yourself!"
  },
  {
    question: "Where and when will CornHacks take place?",
    answer: "CornHacks 2025 will start on Saturday, March 1, and will continue through Sunday, March 2 — with an optional info session at 6:00PM on Friday, February 28. The event will be hosted in person at Kiewit Hall; it will feature events, workshops, and keynotes. And rest assured: you will definitely still receive an abundance of swag and a chance at prizes."
  },
  {
    question: "What is the cost to attend CornHacks?",
    answer: "FREE. There is no cost to attend CornHacks. We only ask you bring your creativity and skill. Additionally, meals will be provided."
  },
  {
    question: "Do I need any prior experience to register for CornHacks? What if this is my first hackathon?",
    answer: "There is no prior experience required to participate in CornHacks. Any and all student participants are welcome! We are happy to help you form a team, get started with your project, and have an awesome first hackathon!"
  },
  {
    question: "Do I need to be a college student to attend?",
    answer: "Yes, attendees must be currently enrolled undergraduate/graduate students at a college/university. Additionally, attendees must be at or over 18 years of age."
  },
  {
    question: "Do I need to form a team before I register? What do I do if I do not have a team?",
    answer: "Participants are not required to find a team prior to the event, although you are certainly welcome to do so. At the beginning of the event, we will host a session for all still looking to form a team so you can find others with whom you can work. Teams may have a maximum of four members."
  },
  {
    question: "Will there be any swag or prizes?",
    answer: "SO much swag, SO many prizes. Teams that win tiered or track prizes will also receive additional prizes; while this year's prizes are still being determined, previous years have seen prizes such as flatscreen TVs, Nintendo Switches, high-quality wireless headphones, and iPads."
  },
  {
    question: "Are there rules for this event?",
    answer: "There are, in fact! Attendees will have to adhere to the UNL Student Code of Conduct. More specific rules may be prescribed by CornHacks organizers before or during the event."
  },
  {
    question: "Is there anything I need to do in advance?",
    answer: "There are a couple of things we would ask you do before the event begins: please fill out this photo release waiver and the CornHacks registration (you will be able to upload your photo release waiver when you fill out the registration)."
  }
];

export default function Home() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start py-16 px-4 max-w-4xl mx-auto">
        <div className="flex-1">
          <h1 className="text-5xl font-normal text-gray-800 mb-6 text-center md:text-left font-['Arial_Black','Helvetica_Bold',sans-serif]">
            Welcome to <span className="text-orange-600">CornHacks 2025</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 text-center md:text-left font-['Arial_Black','Helvetica_Bold',sans-serif]">
            CornHacks aims to bring some of the most talented developers from around the Midwest to join in a weekend full of hacking. Hosted at the University of Nebraska-Lincoln, over 100 participants will code all day and night to be assessed by industry professionals and compete for prizes.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-normal text-gray-800 mb-8 text-center font-['Arial_Black','Helvetica_Bold',sans-serif]">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {/* FAQ Item 1 */}
          <div className={`bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] hover:border-gray-300 transition-all duration-300 p-4 ${
            openItems.includes(0) ? 'shadow-md' : ''
          }`}>
            <button
              onClick={() => toggleItem(0)}
              className="w-full text-left transition-colors duration-200 border-none outline-none focus:outline-none focus:ring-0"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-normal text-xl text-gray-800 leading-tight font-['Arial_Black','Helvetica_Bold',sans-serif] pr-4">What is a Hackathon?</h3>
                <Image
                  src="/arrow.png"
                  alt="Expand arrow"
                  width={20}
                  height={20}
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openItems.includes(0) ? 'rotate-90' : ''
                  }`}
                />
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.includes(0) ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}>
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-700 text-base leading-relaxed">A hackathon is an invention marathon. Students come together to build innovative software and hardware over an extended period. It's very beginner friendly and is designed to be engaging to students at all levels of experience. We would love for you to come and experience a hackathon for yourself!</p>
              </div>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className={`bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] hover:border-gray-300 transition-all duration-300 p-4 ${
            openItems.includes(1) ? 'shadow-md' : ''
          }`}>
            <button
              onClick={() => toggleItem(1)}
              className="w-full text-left transition-colors duration-200 border-none outline-none focus:outline-none focus:ring-0"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-normal text-xl text-gray-800 leading-tight font-['Arial_Black','Helvetica_Bold',sans-serif] pr-4">Where and when will CornHacks take place?</h3>
                <Image
                  src="/arrow.png"
                  alt="Expand arrow"
                  width={20}
                  height={20}
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openItems.includes(1) ? 'rotate-90' : ''
                  }`}
                />
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.includes(1) ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}>
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-700 text-base leading-relaxed">CornHacks 2025 will start on Saturday, March 1, and will continue through Sunday, March 2 — with an optional info session at 6:00PM on Friday, February 28. The event will be hosted in person at Kiewit Hall; it will feature events, workshops, and keynotes. And rest assured: you will definitely still receive an abundance of swag and a chance at prizes.</p>
              </div>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className={`bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] hover:border-gray-300 transition-all duration-300 p-4 ${
            openItems.includes(2) ? 'shadow-md' : ''
          }`}>
            <button
              onClick={() => toggleItem(2)}
              className="w-full text-left transition-colors duration-200 border-none outline-none focus:outline-none focus:ring-0"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-normal text-xl text-gray-800 leading-tight font-['Arial_Black','Helvetica_Bold',sans-serif] pr-4">What is the cost to attend CornHacks?</h3>
                <Image
                  src="/arrow.png"
                  alt="Expand arrow"
                  width={20}
                  height={20}
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openItems.includes(2) ? 'rotate-90' : ''
                  }`}
                />
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.includes(2) ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}>
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-700 text-base leading-relaxed">FREE. There is no cost to attend CornHacks. We only ask you bring your creativity and skill. Additionally, meals will be provided.</p>
              </div>
            </div>
          </div>

          {/* FAQ Item 4 */}
          <div className={`bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] hover:border-gray-300 transition-all duration-300 p-4 ${
            openItems.includes(3) ? 'shadow-md' : ''
          }`}>
            <button
              onClick={() => toggleItem(3)}
              className="w-full text-left transition-colors duration-200 border-none outline-none focus:outline-none focus:ring-0"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-normal text-xl text-gray-800 leading-tight font-['Arial_Black','Helvetica_Bold',sans-serif] pr-4">Do I need any prior experience to register for CornHacks? What if this is my first hackathon?</h3>
                <Image
                  src="/arrow.png"
                  alt="Expand arrow"
                  width={20}
                  height={20}
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openItems.includes(3) ? 'rotate-90' : ''
                  }`}
                />
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.includes(3) ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}>
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-700 text-base leading-relaxed">There is no prior experience required to participate in CornHacks. Any and all student participants are welcome! We are happy to help you form a team, get started with your project, and have an awesome first hackathon!</p>
              </div>
            </div>
          </div>

          {/* FAQ Item 5 */}
          <div className={`bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] hover:border-gray-300 transition-all duration-300 p-4 ${
            openItems.includes(4) ? 'shadow-md' : ''
          }`}>
            <button
              onClick={() => toggleItem(4)}
              className="w-full text-left transition-colors duration-200 border-none outline-none focus:outline-none focus:ring-0"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-normal text-xl text-gray-800 leading-tight font-['Arial_Black','Helvetica_Bold',sans-serif] pr-4">Do I need to be a college student to attend?</h3>
                <Image
                  src="/arrow.png"
                  alt="Expand arrow"
                  width={20}
                  height={20}
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openItems.includes(4) ? 'rotate-90' : ''
                  }`}
                />
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.includes(4) ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}>
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-700 text-base leading-relaxed">Yes, attendees must be currently enrolled undergraduate/graduate students at a college/university. Additionally, attendees must be at or over 18 years of age.</p>
              </div>
            </div>
          </div>

          {/* FAQ Item 6 */}
          <div className={`bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] hover:border-gray-300 transition-all duration-300 p-4 ${
            openItems.includes(5) ? 'shadow-md' : ''
          }`}>
            <button
              onClick={() => toggleItem(5)}
              className="w-full text-left transition-colors duration-200 border-none outline-none focus:outline-none focus:ring-0"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-normal text-xl text-gray-800 leading-tight font-['Arial_Black','Helvetica_Bold',sans-serif] pr-4">Do I need to form a team before I register? What do I do if I do not have a team?</h3>
                <Image
                  src="/arrow.png"
                  alt="Expand arrow"
                  width={20}
                  height={20}
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openItems.includes(5) ? 'rotate-90' : ''
                  }`}
                />
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.includes(5) ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}>
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-700 text-base leading-relaxed">Participants are not required to find a team prior to the event, although you are certainly welcome to do so. At the beginning of the event, we will host a session for all still looking to form a team so you can find others with whom you can work. Teams may have a maximum of four members.</p>
              </div>
            </div>
          </div>

          {/* FAQ Item 7 */}
          <div className={`bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] hover:border-gray-300 transition-all duration-300 p-4 ${
            openItems.includes(6) ? 'shadow-md' : ''
          }`}>
            <button
              onClick={() => toggleItem(6)}
              className="w-full text-left transition-colors duration-200 border-none outline-none focus:outline-none focus:ring-0"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-normal text-xl text-gray-800 leading-tight font-['Arial_Black','Helvetica_Bold',sans-serif] pr-4">Will there be any swag or prizes?</h3>
                <Image
                  src="/arrow.png"
                  alt="Expand arrow"
                  width={20}
                  height={20}
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openItems.includes(6) ? 'rotate-90' : ''
                  }`}
                />
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.includes(6) ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}>
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-700 text-base leading-relaxed">SO much swag, SO many prizes. Teams that win tiered or track prizes will also receive additional prizes; while this year's prizes are still being determined, previous years have seen prizes such as flatscreen TVs, Nintendo Switches, high-quality wireless headphones, and iPads.</p>
              </div>
            </div>
          </div>

          {/* FAQ Item 8 */}
          <div className={`bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] hover:border-gray-300 transition-all duration-300 p-4 ${
            openItems.includes(7) ? 'shadow-md' : ''
          }`}>
            <button
              onClick={() => toggleItem(7)}
              className="w-full text-left transition-colors duration-200 border-none outline-none focus:outline-none focus:ring-0"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-normal text-xl text-gray-800 leading-tight font-['Arial_Black','Helvetica_Bold',sans-serif] pr-4">Are there rules for this event?</h3>
                <Image
                  src="/arrow.png"
                  alt="Expand arrow"
                  width={20}
                  height={20}
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openItems.includes(7) ? 'rotate-90' : ''
                  }`}
                />
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.includes(7) ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}>
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-700 text-base leading-relaxed">There are, in fact! Attendees will have to adhere to the UNL Student Code of Conduct. More specific rules may be prescribed by CornHacks organizers before or during the event.</p>
              </div>
            </div>
          </div>

          {/* FAQ Item 9 */}
          <div className={`bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] hover:border-gray-300 transition-all duration-300 p-4 ${
            openItems.includes(8) ? 'shadow-md' : ''
          }`}>
            <button
              onClick={() => toggleItem(8)}
              className="w-full text-left transition-colors duration-200 border-none outline-none focus:outline-none focus:ring-0"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-normal text-xl text-gray-800 leading-tight font-['Arial_Black','Helvetica_Bold',sans-serif] pr-4">Is there anything I need to do in advance?</h3>
                <Image
                  src="/arrow.png"
                  alt="Expand arrow"
                  width={20}
                  height={20}
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openItems.includes(8) ? 'rotate-90' : ''
                  }`}
                />
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.includes(8) ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}>
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-700 text-base leading-relaxed">There are a couple of things we would ask you do before the event begins: please fill out this photo release waiver and the CornHacks registration (you will be able to upload your photo release waiver when you fill out the registration).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
