"use client";
import React, { useState } from "react";
import { font } from "../Font/font";
import { headingFont } from "../Font/headingFont";
import ModelStartProjectForm from "./ModalStartProjectForm";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      className={`${font.className} relative h-[44rem] max-md:h-auto md:h-auto bg-white`}
    >
      <ModelStartProjectForm
        open={showModal}
        onClose={() => setShowModal(false)}
      />

      <div className="relative z-10 w-full mx-auto px-6 lg:pt-10 max-md:flex max-md:flex-col max-md:items-center">
        <div className="grid md:grid-cols-2 gap-6 items-center max-md:items-center max-md:justify-center max-md:text-center max-md:flex">
          {/* Left Content */}
          <div className="text-left space-y-8 max-md:text-center max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
            <div className="space-y-4 max-md:items-center max-md:text-center max-md:flex max-md:flex-col max-md:mt-6">
              <h1
                className={`${headingFont.className} text-3xl uppercase max-md:text-3xl lg:text-4xl text-[#283a64] leading-tight w-[350px] md:w-[423px]`}
              >
                <span className="text-cyan-400">Expert</span> Services and
                Solutions for
                <br />
                <span className="text-cyan-400"> Web</span> &
                <span className="text-cyan-400"> Mobile</span> App Development
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-md">
                Turning Logic into Innovative Solutions
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <div className="flex flex-row items-center gap-x-2" onClick={() => setShowModal(true)}>
                <div>
                  <button className="cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-8 py-2 rounded-full transition-colors duration-200 font-medium text-lg flex items-center space-x-2">
                    <span>Let's Discuss</span>
                  </button>
                </div>
                <div>
                  <div className="w-12 h-12 custom-blue rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div
              className="flex flex-row items-center gap-x-2"
              style={{ marginTop: "-20px" }}
            >
              <img
                src="/footer/Clutch.webp"
                alt="clutch"
                className="md:w-[120px] w-[100px] h-[100px] md:h-[120px]"
              />
              <img
                src="/footer/trust-pilot.webp"
                alt="trustpilot"
                className="md:w-[120px] w-[100px] h-[100px] md:h-[120px]"
              />
              <img
                src="/footer/google.webp"
                alt="google"
                className="md:w-[120px] w-[100px] h-[100px] md:h-[120px]"
              />
            </div>
          </div>
          <div className="relative max-md:hidden">
            <div className="relative">
              <div className="w-full h-[600px] lg:h-[700px] rounded-2xl overflow-hidden">
                <iframe 
                  src='https://my.spline.design/r4xbot-M9VClhsKCc95jSGQxB2Segua/?t=123456'
                  frameBorder='0' 
                  width='100%' 
                  height='100%'
                  
                  title="Interactive 3D Model"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute z-20 top-[-2.5rem] right-[10%] md:right-[12%] lg:right-[18%] xl:right-[153px]">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
                  <svg
                    className="w-8 h-8 lg:w-10 lg:h-10 text-[#283a64]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>

              <div className="absolute z-20 bottom-[-0.5rem] left-[12%] md:left-[18%] lg:left-[70px] xl:left-[70px]">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
                  <svg
                    className="w-8 h-8 lg:w-10 lg:h-10 text-[#283a64]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
              </div>

              {/* Additional decorative dots */}
              <div className="absolute top-1/4 -left-8 hidden lg:block z-20">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute top-1/2 -left-4 hidden lg:block z-20">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-100"></div>
              </div>
              <div className="absolute bottom-1/4 -left-6 hidden lg:block z-20">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
              </div>

              {/* Additional floating elements */}
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block z-20">
                <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
