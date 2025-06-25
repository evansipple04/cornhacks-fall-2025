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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-orange-600">CornHacks 2025</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          CornHacks aims to bring some of the most talented developers from around the Midwest to join in a weekend full of hacking. Hosted at the University of Nebraska-Lincoln, over 100 participants will code all day and night to be assessed by industry professionals and compete for prizes.
        </p>
      </div>

      {/* Previous Event Image */}
      <div className="flex flex-col items-center mb-12">
        <Image
          src="/previous_event.png"
          alt="CornHacks previous event photo"
          width={700}
          height={350}
          className="rounded-lg shadow-md object-cover w-full max-w-2xl h-auto"
          priority
        />
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 pb-16 p-4">
        <div className="space-y-8">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow border p-4 mb-4 m-2 flex flex-col md:flex-row md:items-start md:space-x-8">
              <h3 className="font-bold text-lg text-gray-800 mb-2 md:mb-0 md:w-1/3 flex-shrink-0">{item.question}</h3>
              <p className="text-gray-700 text-base leading-relaxed md:w-2/3">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
