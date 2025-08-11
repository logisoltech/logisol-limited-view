"use client";
import React from "react";
import { font } from "../Font/font";
import {
  FaStar,
  FaUsers,
  FaLightbulb,
  FaUserFriends,
  FaTrophy,
  FaArrowRight,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section
      className={`${font.className} py-16 bg-white relative z-20 overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-6 space-y-4 max-sm:w-full">
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaStar className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium uppercase tracking-wide">
                WHY CHOOSE US
              </span>
            </div>
            <h2 className="text-5xl md:text-3xl lg:text-5xl text-[#283a64]">
              Your <span className="text-cyan-400">Trusted</span> Digital
              Partner
            </h2>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <a href="/contact-us" className="flex items-center gap-2">
              <button className="cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium">
                Contact Us
              </button>
              <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                <FaArrowRight className="w-5 h-5 text-white" />
              </div>
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative grid grid-cols-3 max-md:grid-cols-1 max-sm:gap-0 max-sm:px-0 gap-6 max-sm:space-y-8 items-center justify-center px-4">
          {/* Left Column: Top Left & Bottom Left */}
          <div className="flex flex-col gap-4 md:divide-y-1 divide-gray-300 max-md:divide-x-1 items-center max-md:flex-row md:items-end">
            {/* Top Left Feature */}
            <div className="bg-white p-5 max-w-xs w-full">
              <div className="flex items-center space-x-3 mb-2">
                <FaUsers className="w-5 h-5 text-cyan-400" />
                <h3 className="font-semibold text-[#283a64] text-base">
                  Custom Solutions
                </h3>
              </div>
              <p className="text-sm text-gray-600">
                No cookie-cutter code. Every project is built uniquely for your
                needs.
              </p>
            </div>
            {/* Bottom Left Feature */}
            <div className="bg-white p-5 max-w-xs w-full">
              <div className="flex items-center space-x-3 mb-2">
                <FaLightbulb className="w-5 h-5 text-cyan-400" />
                <h3 className="font-semibold text-[#283a64] text-base">
                  Performance First
                </h3>
              </div>
              <p className="text-sm text-gray-600">
                From SEO to app speed, we optimize for real-world success.
              </p>
            </div>
          </div>

          {/* Center Column: Rotating Circle & Image */}
          <div className="flex flex-col gap-8 items-center justify-center h-full">
            <div className="relative w-80 h-80 lg:w-[400px] lg:h-[400px]">
              {/* Rotating Circle Background */}
              <img
                src="/why-choose-circle.png"
                alt="Rotating circle background"
                className="w-full h-full animate-spin absolute inset-0 max-sm:mt-15"
                style={{ animationDuration: "20s" }}
              />
              {/* Central Image - Man */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden flex items-center justify-center max-sm:mt-30">
                  <img
                    src="/why-choose-us.webp"
                    alt="Digital partner professional"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Top Right & Bottom Right */}
          <div className="flex flex-col gap-4 items-center md:divide-y-1 divide-gray-300 max-md:divide-x-1 max-md:flex-row md:items-start">
            {/* Top Right Feature */}
            <div className="bg-white p-5 max-w-xs w-full">
              <div className="flex items-center space-x-3 mb-2">
                <FaUserFriends className="w-5 h-5 text-cyan-400" />
                <h3 className="font-semibold text-[#283a64] text-base">
                  Business-Oriented Strategy
                </h3>
              </div>
              <p className="text-sm text-gray-600">
                We align every technical detail with your business objectives.
              </p>
            </div>
            {/* Bottom Right Feature */}
            <div className="bg-white p-5 max-w-xs w-full">
              <div className="flex items-center space-x-3 mb-2">
                <FaTrophy className="w-5 h-5 text-cyan-400" />
                <h3 className="font-semibold text-[#283a64] text-base">
                  Transparency
                </h3>
              </div>
              <p className="text-sm text-gray-600">
                No hidden costs. No jargon. Just clear communication and
                reliable delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile CTA Button */}
        <div className="lg:hidden mt-8 flex justify-center">
          <div className="flex items-center space-x-3">
            <a href="/contact-us" className="flex items-center gap-2">
              <button className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg transition-colors duration-200 font-medium">
                Contact Us
              </button>
              <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                <FaArrowRight className="w-5 h-5 text-white" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
