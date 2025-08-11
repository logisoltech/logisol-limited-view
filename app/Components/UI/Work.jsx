"use client";
import React, { useState } from "react";
import { font } from "../Font/font";

const steps = [
  {
    title: "Consultation",
    desc: "Understanding your requirements.",
    number: "01",
    bg: "/work.webp",
  },
  {
    title: "Planning",
    desc: "Strategizing the best approach.",
    number: "02",
    bg: "/work.webp",
  },
  {
    title: "Execution",
    desc: "Developing and implementing solutions.",
    number: "03",
    bg: "/work.webp",
  },
  {
    title: "Delivery",
    desc: "Ensuring timely and quality delivery.",
    number: "04",
    bg: "/work.webp",
  },
];

const Work = () => {
  const [hovered, setHovered] = useState(null);

  // For mobile: disable hover effect
  const isTouch =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  return (
    <div className="w-full mx-auto bg-white relative z-20">
      <section
        className={`${font.className} relative z-20 max-w-7xl mx-auto px-4 py-16`}
      >
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left: Text and Circle Arrow */}
          <div className="flex-1 flex flex-col items-start gap-6">
            <span className="uppercase tracking-widest text-xs text-gray-500 mb-2 flex items-center gap-2">
              <span className="text-cyan-400 text-lg">*</span> How it work
            </span>
            <h2 className="text-5xl md:text-3xl lg:text-5xl text-[#283a64]">
              Step-by-Step guide to a<br />
              project <span className="text-cyan-400">success</span>
            </h2>
            <p className="text-gray-700 text-base md:text-lg max-w-xl">
              Our structured approach to project completion ensures success at
              every stage. With a clear roadmap—from strategic planning and
              resource allocation to execution and performance evaluation—we
              guide your project to impactful results.
            </p>
            {/* Image */}
            <div className="relative flex items-center justify-center mb-4">
              <img 
                src="/logisol.png" 
                alt="logo" 
                className="animate-spin w-45 h-45"
                style={{ animationDuration: '10s' }}
              />
              {/* Circle between image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Steps */}
          <div className="flex-1 flex flex-col gap-6 w-full">
            {steps.map((step, idx) => {
              const isActive = hovered === idx;
              return (
                <div
                  key={step.title}
                  className={`group relative flex items-center justify-between rounded-2xl border border-gray-300 bg-white shadow-sm px-8 py-6 overflow-hidden cursor-pointer`}
                  onMouseEnter={() => !isTouch && setHovered(idx)}
                  onMouseLeave={() => !isTouch && setHovered(null)}
                  onTouchStart={() => {}}
                >
                  {/* Animated background image */}
                  <div
                    className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out ${
                      isActive ? "translate-x-0" : "-translate-x-full"
                    }`}
                    style={{
                      backgroundImage: `url(${step.bg})`,
                      opacity: 0.25,
                    }}
                  />

                  {/* Content above background */}
                  <div className="flex flex-col relative z-10">
                    <span
                      className={`font-bold text-lg md:text-xl mb-1 transition-colors duration-200 text-[#283A64]`}
                    >
                      {step.title}
                    </span>
                    <span className="text-gray-700 text-sm md:text-base">
                      {step.desc}
                    </span>
                  </div>
                  <span
                    className={`relative z-10 text-3xl md:text-5xl font-bold transition-colors duration-200 ${
                      isActive ? "text-cyan-400" : "text-[#283A64]"
                    }`}
                  >
                    {step.number}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
