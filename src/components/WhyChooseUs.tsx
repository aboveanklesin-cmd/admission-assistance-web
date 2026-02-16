'use client';

import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

const cards = [
  {
    title: 'Robust Learning Model:',
    text: '350+ hours of video lectures to enhance your learning outcomes.',
    bg: 'bg-blue-50',
    img: '/images/why/Robustlearning.png',
  },
  {
    title: 'Industry Collaborations',
    text: 'Specializations in collaboration with TCS iON for industry readiness.',
    bg: 'bg-green-50',
    img: '/images/why/IndustryCollaboration.png',
  },
  {
    title: 'Real World Projects',
    text: 'Real world projects and case studies to help you succeed in your industry.',
    bg: 'bg-red-50',
    img: '/images/why/Real-World-Projects.png',
  },
  {
    title: 'AI-Powered Career Discovery Platform',
    text: 'AI-powered tools for mock interviews, resume building and job discovery.',
    bg: 'bg-purple-50',
    img: '/images/why/ai-career.png',
  },
  {
    title: 'Global Education:',
    text: 'Experience a truly global education with renowned international faculty.',
    bg: 'bg-yellow-50',
    img: '/images/why/globaleducation.png',
  },
];

export function WhyChooseUs() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % cards.length;
        slider.scrollTo({
          left: slider.clientWidth * next,
          behavior: 'smooth',
        });
        return next;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Why Choose Amity University Online MBA?
        </h2>

        {/* Top Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/why/hero.jpg"
              alt="Why Choose Amity Online MBA"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-white">
            <Quote className="w-10 h-10 mb-6" />
            <p className="text-lg leading-relaxed text-gray-200 max-w-xl">
              An Amity Online MBA Course is an innovative program that builds
              next-gen leaders to rule the business industry. The program offers
              flexibility, industry-relevant curriculum, and global recognition
              that prepares you to conquer the business world with in-demand
              skills and expertise.
            </p>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          onScroll={(e) => {
            const el = e.currentTarget;
            const index = Math.round(el.scrollLeft / el.clientWidth);
            setActive(index);
          }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className={`snap-center flex-shrink-0 w-[280px] md:w-[320px] rounded-2xl p-6 ${card.bg}`}
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                {card.text}
              </p>
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-40 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {cards.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                active === i ? 'bg-yellow-400 scale-125' : 'bg-gray-500/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
