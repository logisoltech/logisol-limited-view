"use client";
import React from "react";
import { font } from "../Font/font";
import {
  FaGlobe,
  FaMobile,
  FaChartLine,
  FaShareAlt,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaGlobe className="w-8 h-8 text-cyan-400" />,
      title: "Web Development",
      description: "Creating responsive and scalable websites.",
      link: "/custom-web-development-services",
    },
    {
      icon: <FaMobile className="w-8 h-8 text-cyan-400" />,
      title: "App Development",
      description: "Developing user-friendly mobile applications.",
      link: "/mobile-application-development-services",
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-cyan-400" />,
      title: "Digital Marketing",
      description:
        "Enhancing your online presence through strategic campaigns.",
      link: "/digital-marketing-services",
    },
    {
      icon: <FaShareAlt className="w-8 h-8 text-cyan-400" />,
      title: "Social Media Marketing",
      description: "Engaging your audience across platforms.",
      link: "/social-media-marketing-services",
    },  
  ];

  return (
    <section className={`${font.className} py-16 bg-white relative z-20`}>
      <div className="max-w-7xl mx-auto px-6 max-sm:w-full">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaStar className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium uppercase tracking-wide">
                SERVICES
              </span>
            </div>
            <h2 className="text-4xl md:text-3xl lg:text-5xl text-[#283a64]">
              Services <span className="text-cyan-400">We Offer</span>
            </h2>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <a href="/services" className="flex items-center gap-2">
              <button className="cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                <span>See All Services</span>
              </button>
              <div className="w-12 h-12 custom-blue rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                <FaArrowRight className="w-5 h-5 text-white" />
              </div>
            </a>
          </div>
        </div>

        <p className="bg-gradient-to-b from-[#86D8EB] to-[#ffffff] rounded-xl p-6 text-gray-900 mb-4 text-base md:text-md">
          Realize the complete potential of your business through personalized
          web development, mobile apps, branding, and marketing services all
          provided in one place. At Logisol Technologies, our mission goes
          beyond simply creating digital solutions; we aim to create success
          stories.
        </p>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/services.webp"
                alt="Professional team collaborating on services"
                className="w-full h-auto object-cover"
              />

              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 w-3 h-3 bg-cyan-400 rounded-full"></div>
              <div className="absolute top-1/2 -right-8 w-2 h-2 bg-cyan-400 rounded-full"></div>
              <div className="absolute -bottom-4 -right-6 w-4 h-4 bg-cyan-400 rounded-full"></div>
            </div>
          </div>

          {/* Right Side - Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#283a64] p-6 rounded-xl hover:bg-[#1e2a4a] transition-colors duration-200 group"
              >
                <div className="flex flex-col space-y-4">
                  {/* Icon */}
                  <div className="flex items-center justify-start">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-medium text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="pt-2">
                    <a
                      href={service.link}
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 duration-200 font-medium text-sm group-hover:translate-x-1 transform transition-transform"
                    >
                      <span>Read More</span>
                      <FaArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile CTA Button */}
        <div className="lg:hidden mt-8 flex justify-center">
          <div className="flex items-center space-x-3">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg transition-colors duration-200 font-medium flex items-center space-x-2">
              <span>See All Services</span>
            </button>
            <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
              <FaArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
