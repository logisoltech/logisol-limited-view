"use client";

import { useCallback } from "react";
import Navbar from "../Components/UI/Navbar";
import Footer from "../Components/UI/Footer";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { particlesConfig } from "../Components/Data/particlesConfig";
import { font } from "../Components/Font/font";
import { headingFont } from "../Components/Font/headingFont";
import Slider from "../Components/UI/Slider";
import Collaborate from "../Components/UI/Collaborate";
import {
  FaGlobe,
  FaMobile,
  FaChartLine,
  FaShareAlt,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

export default function Services() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

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
    {
      icon: <FaStar className="w-8 h-8 text-cyan-400" />,
      title: "SEO",
      description: "Optimizing your website for better search engine rankings.",
      link: "/seo-services-and-strategy",
    },
    {
      icon: <FaStar className="w-8 h-8 text-cyan-400" />,
      title: "Graphic Design",
      description: "Creating visually compelling designs.",
      link: "/graphics-designing-services",
    },
    {
      icon: <FaStar className="w-8 h-8 text-cyan-400" />,
      title: "Video Editing",
      description: "Producing engaging video content.",
      link: "/professional-video-editing-services",
    },
  ];

  return (
    <div className={font.className}>
      <Navbar />
      {/* Hero/Main Section */}
      <section className="relative h-[29rem] max-sm:h-[20rem] bg-white overflow-hidden flex flex-col items-center justify-center">
        {/* Particles.js Background */}
        <Particles
          id="tsparticles-about"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesConfig}
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1
            className={`${headingFont.className} text-[80px] max-lg:text-[60px] max-md:text-[30px] font-extrabold text-[#283A64] text-center mb-6`}
          >
            Our <span className="text-cyan-400">Services</span>
          </h1>
          {/* Partners */}
          <div
            className="flex flex-row items-center gap-x-2"
            style={{ marginTop: "-20px" }}
          >
            <img
              src="/footer/Clutch.webp"
              alt="clutch"
              className="max-md:w-[100px] w-[120px] h-[120px] max-md:h-[100px]"
            />
            <img
              src="/footer/trust-pilot.webp"
              alt="trustpilot"
              className="max-md:w-[100px] w-[120px] h-[120px] max-md:h-[100px]"
            />
            <img
              src="/footer/google.webp"
              alt="google"
              className="max-md:w-[100px] w-[120px] h-[120px] max-md:h-[100px]"
            />
          </div>
        </div>
      </section>

      <Slider />

      {/* Services Section */}
      <section className="bg-white relative z-20 py-12 px-6">
        {/* Service Cards */}
        <div className="grid grid-cols-3 max-lg:grid-cols-2 xl:mx-auto xl:max-w-3/4 max-sm:grid-cols-1 gap-6">
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
                  <h3 className="text-xl text-white">{service.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="pt-2">
                  <a
                    href={service.link}
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium text-sm group-hover:translate-x-1 transform transition-transform"
                  >
                    <span>Read More</span>
                    <FaArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Collaborate />
      <Footer />
    </div>
  );
}
