"use client";
import React from "react";
import { font } from "../Font/font";
import { FaStar, FaArrowRight, FaCog, FaUsers } from "react-icons/fa";

const Solution = () => {
  return (
    <section
      className={`${font.className} px-4 sm:px-6 md:px-12 lg:px-24 py-16 bg-white relative z-20 mx-auto overflow-x-hidden`}
    >
      <div className="max-w-7xl mx-auto px-0 sm:px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Header */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FaStar className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium uppercase tracking-wide">
                  WHAT WE DO
                </span>
              </div>
              <h2 className="text-5xl md:text-3xl lg:text-5xl text-[#283a64]">
                Experienced <span className="text-cyan-400">Professionals</span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                We design intelligent systems, scalable platforms, and
                performance-optimized digital assets that turn visitors into
                customers and clicks into conversions. Whether you need a
                custom-built app or a multi-platform marketing campaign, we
                bring together creativity, strategy, and technology to elevate
                your brand.
              </p>

              {/* Feature Point */}
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                  <FaCog className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#283a64] text-lg mb-2">
                    Research is key to success
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We analyze client needs and industry trends to build smart,
                    scalable digital solutions tailored to every project.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-3">
              <a href="/about-us" className="flex items-center gap-2">
                <button className="cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                  Discover More
                </button>
                <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                  <FaArrowRight className="w-5 h-5 text-white" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="relative">
            <div className="flex flex-col sm:flex-row gap-6 h-auto sm:h-[500px]">
              {/* Main vertical rectangle image */}
              <div className="w-full max-w-xs sm:w-64 relative rounded-2xl overflow-hidden mx-auto sm:mx-0">
                <img
                  src="/solution-people.webp"
                  alt="Team of experienced professionals collaborating"
                  className="w-full h-[320px] sm:h-full object-cover"
                />

                {/* Satisfied Clients Overlay */}
                <div className="absolute bottom-6 left-6 bg-[#283A64] text-white px-4 py-3 rounded-lg shadow-lg animate-slide-horizontal">
                  <div className="flex items-center space-x-2">
                    <FaUsers className="w-5 h-5" />
                    <div>
                      <div className="font-bold text-lg">150 +</div>
                      <div className="text-sm opacity-90">
                        Satisfied Clients
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Two square images beside the rectangle */}
              <div className="flex flex-row sm:flex-col gap-4 sm:gap-6 w-full sm:w-auto justify-center">
                <div className="w-1/2 sm:w-52 h-40 sm:h-60 rounded-xl overflow-hidden shadow-lg mx-auto sm:mx-0">
                  <img
                    src="/solution-2.webp"
                    alt="Professional consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 sm:w-52 h-40 sm:h-60 rounded-xl overflow-hidden shadow-lg mx-auto sm:mx-0">
                  <img
                    src="/solution-3.webp"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            {/* <div className="absolute -top-4 -right-4 w-3 h-3 bg-cyan-400 rounded-full hidden lg:block"></div>
            <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-cyan-400 rounded-full hidden lg:block"></div> */}
          </div>
        </div>
      </div>

      {/* Custom CSS for sliding animation */}
      <style jsx>{`
        @keyframes slide-horizontal {
          0%,
          100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(20px);
          }
        }
        .animate-slide-horizontal {
          animation: slide-horizontal 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Solution;
