"use client";
import React from "react";
import { font } from "../Font/font";
import { FaArrowRight } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section
      className={`${font.className} bg-white relative z-20 w-full mx-auto py-16 max-sm:py-8`}
    >
      <div className="max-w-7xl mx-auto px-6 max-sm:w-full">
        <div className="flex flex-col md:flex-row relative gap-x-10 z-10">
          {/* Left: Image */}
          <div className="flex flex-col items-end max-lg:items-center w-full">
            <img
              src="/about-us.webp"
              alt="About Us"
              className="rounded-3xl object-cover w-full max-w-lg h-auto md:h-[450px] shadow-lg"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col items-start mt-12 md:mt-0">
            <span className="uppercase tracking-widest text-md font-semibold text-gray-500 mb-2 flex items-center gap-2">
              <span className="text-cyan-400 text-2xl">*</span> About Us
            </span>
            <p className="text-[50px] max-xl:text-[40px] text-[#283A64] leading-tight mb-4">
              Empowering Your <br />
              <span className="text-cyan-400 font-medium">Digital Journey</span>
            </p>
            <div className="bg-gradient-to-b from-[#86D8EB] to-[#ffffff] rounded-xl p-6 mb-6">
              <p className="text-gray-900 text-base md:text-md">
                Realize the complete potential of your business through
                personalized web development, mobile apps, branding, and
                marketing services all provided in one place. At Logisol
                Technologies, our mission goes beyond simply creating digital
                solutions; we aim to create success stories.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="/about-us" className="flex items-center gap-2">
                <button className="cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                  Read More
                </button>
                <div className="w-12 h-12 custom-blue rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                  <FaArrowRight className="w-5 h-5 text-white" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ✅ Overlapping Full-width Card */}
        <div className="w-full p-8">
          <div className="mx-auto flex flex-col md:flex-row items-center max-md:flex-col max-md:gap-6">
            {/* Experience Block */}
            <div className="flex justify-center flex-row gap-x-6 items-end px-6 text-center md:text-left">
              <span className="text-5xl font-bold text-cyan-400">10+</span>
              <div className="text-gray-700 text-base mt-1">
                Years of experience in <br />
                <span className="text-cyan-400">Software Development</span>
              </div>
            </div>

            {/* Features */}

            <div className="relative rounded-xl p-6 py-12 flex-1 flex flex-col md:flex-row max-md:flex-row items-center justify-between gap-6">
              {/* Gradient background layer */}
              <div
                className="absolute inset-0 z-0 rounded-3xl"
                style={{
                  background:
                    "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                  backgroundColor: "transparent",
                }}
              />
              {/* Feature 1 */}
              <div className="z-10 flex-1 flex flex-col items-center md:items-start text-left border-b md:border-b-0 md:border-r border-gray-400 md:pr-6">
                <svg
                  className="w-7 h-7 text-[#283A64] mb-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
                <span className="text-lg text-[#283A64] leading-tight">
                  Tailored Business
                  <br />
                  Solutions
                </span>
              </div>

              {/* Feature 2 */}
              <div className="z-10 flex-1 flex flex-col items-center md:items-start text-left md:border-r border-gray-400 md:px-6">
                <svg
                  className="w-7 h-7 text-[#283A64] mb-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-lg text-[#283A64] leading-tight">
                  Proactive Trends
                  <br />
                  Tracking
                </span>
              </div>

              {/* Feature 3 */}
              <div className="z-10 flex-1 flex flex-col items-center md:items-start text-left md:pl-6">
                <svg
                  className="w-7 h-7 text-[#283A64] mb-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2z"
                  />
                </svg>
                <span className="text-lg text-[#283A64] leading-tight">
                  Affordable
                  <br />
                  Packages
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
