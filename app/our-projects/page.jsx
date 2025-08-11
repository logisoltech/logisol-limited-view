"use client";
import React, { useCallback, useState } from "react";
import Navbar from "../Components/UI/Navbar";
import Footer from "../Components/UI/Footer";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { particlesConfig } from "../Components/Data/particlesConfig";
import { font } from "../Components/Font/font";
import { headingFont } from "../Components/Font/headingFont";
import Slider from "../Components/UI/Slider";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Collaborate from "../Components/UI/Collaborate";

export default function OurProjectsPage() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  // Gallery images with project details
  const images = [
    {
      id: "activewear",
      src: "/our-projects/activewear.webp",
      title: "FitFlex Activewear",
      category: "Fashion & Fitness",
    },
    {
      id: "fashionhub",
      src: "/our-projects/fashionhub.webp",
      title: "StyleHub Fashion",
      category: "E-commerce",
    },
    {
      id: "carrental",
      src: "/our-projects/carrental.webp",
      title: "DriveEasy Rentals",
      category: "Transportation",
    },
    {
      id: "cardetailing",
      src: "/our-projects/cardetailing.webp",
      title: "AutoShine Pro",
      category: "Automotive Services",
    },
    {
      id: "cosmetic",
      src: "/our-projects/cosmetic.webp",
      title: "BeautyGlow Cosmetics",
      category: "Beauty & Wellness",
    },
    {
      id: "garbage",
      src: "/our-projects/garbage.webp",
      title: "EcoClean Solutions",
      category: "Environmental Services",
    },
    {
      id: "junk",
      src: "/our-projects/junk.webp",
      title: "JunkAway Services",
      category: "Waste Management",
    },
    {
      id: "gym",
      src: "/our-projects/gym.webp",
      title: "PowerFit Gym",
      category: "Fitness & Health",
    },
    {
      id: "dental",
      src: "/our-projects/dental.webp",
      title: "SmileCare Dental",
      category: "Healthcare",
    },
    {
      id: "hairremoval",
      src: "/our-projects/hairremoval.webp",
      title: "SmoothSkin Clinic",
      category: "Beauty & Wellness",
    },
    {
      id: "healthcare",
      src: "/our-projects/healthcare.webp",
      title: "MediCare Plus",
      category: "Healthcare",
    },
    {
      id: "lifecoach",
      src: "/our-projects/lifecoach.webp",
      title: "LifeBalance Coaching",
      category: "Personal Development",
    },
    {
      id: "landscape",
      src: "/our-projects/landscape.webp",
      title: "GreenScape Design",
      category: "Landscaping",
    },
    {
      id: "laundy",
      src: "/our-projects/laundry.webp",
      title: "FreshWash Laundry",
      category: "Home Services",
    },
    {
      id: "ngo",
      src: "/our-projects/ngo.webp",
      title: "HopeForAll NGO",
      category: "Non-Profit",
    },
    {
      id: "7",
      src: "/our-projects/spa.webp",
      title: "Spa Care",
      category: "Healthcare",
    },
    {
      id: "8",
      src: "/our-projects/bistrocafe.webp",
      title: "Cafe Bistro",
      category: "Food & Health",
    },
    {
      id: "9",
      src: "/our-projects/realestate.webp",
      title: "Home Hero",
      category: "Real Estate",
    },
    {
      id: "1",
      src: "/our-projects/1.webp",
      title: "AppLab",
      category: "Lifestyle",
    },
    {
      id: "2",
      src: "/our-projects/2.webp",
      title: "FLOW98Z",
      category: "Music",
    },
    {
      id: "3",
      src: "/our-projects/3.webp",
      title: "Mountain Sofuta",
      category: "Adventure",
    },
    {
      id: "4",
      src: "/our-projects/4.webp",
      title: "Side Chic's",
      category: "Fast Food",
    },
    {
      id: "5",
      src: "/our-projects/5.webp",
      title: "Ferguson & Sons Construction",
      category: "Construction",
    },
    {
      id: "6",
      src: "/our-projects/6.webp",
      title: "Cloud RPBLC",
      category: "Space",
    },
  ];

  const [selectedId, setSelectedId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  // Helper to get current index
  const currentIdx = selectedId
    ? images.findIndex((img) => img.id === selectedId)
    : -1;

  const goLeft = (e) => {
    e.stopPropagation();
    if (currentIdx > -1) {
      setSelectedId(
        images[(currentIdx - 1 + images.length) % images.length].id
      );
    }
  };

  const goRight = (e) => {
    e.stopPropagation();
    if (currentIdx > -1) {
      setSelectedId(images[(currentIdx + 1) % images.length].id);
    }
  };

  // Load more function
  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, images.length));
  };

  // Get visible projects
  const visibleProjects = images.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < images.length;

  // Blur/dim effect for background when modal is open
  const blurClass = selectedId
    ? "filter blur-md brightness-75 transition-all duration-300"
    : "";

  return (
    <div className={font.className}>
      <div className={blurClass}>
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
              className={`${headingFont.className} text-[80px] max-lg:text-[60px] max-md:text-[30px] text-[#283A64] text-center mb-6`}
            >
              Our <span className="text-cyan-400">Projects</span>
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

        {/* --- Portfolio Style Project Gallery --- */}
        <section className="relative min-h-screen bg-white">
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:50px_50px]"></div>

          {/* Content */}
          <div className="relative z-10 py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="text-center mb-12 sm:mb-14 lg:mb-16">
                <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] mb-4 sm:mb-6">
                  Our <span className="text-cyan-400">Portfolio</span>
                </h2>
                <p className="text-base sm:text-lg max-w-3xl mx-auto px-4">
                  Using latest technologies and 100% satisfaction guarantees, we
                  ensure that we always bring out the best of your brand.
                </p>
              </div>

              {/* Portfolio Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {visibleProjects.map((img) => (
                  <div key={img.id} className="group relative">
                    {/* Portfolio Item Container */}
                    <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300">
                      {/* Image Container with full scroll effect */}
                      <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden">
                        <div className="absolute inset-0 transition-transform duration-1200 ease-out group-hover:-translate-y-[220%]">
                          <Image
                            src={img.src}
                            alt={img.title}
                            width={600}
                            height={800}
                            className="w-full h-auto object-cover object-top cursor-pointer"
                            style={{ minHeight: "400px" }}
                            onClick={() => setSelectedId(img.id)}
                          />
                        </div>

                        {/* Gradient overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Project Info */}
                      <div className="p-4 sm:p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="inline-block px-2 sm:px-3 py-1 text-xs font-semibold text-white bg-gray-800 rounded-full mb-2">
                              {img.category}
                            </span>
                            <h3 className="text-white text-base sm:text-lg font-semibold group-hover:text-[#283A64] transition-colors duration-300">
                              {img.title}
                            </h3>
                          </div>

                          {/* View Project Arrow */}
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-600 group-hover:border-[#283A64] transition-colors duration-300">
                              <svg
                                className="w-4 h-4 text-gray-400 group-hover:text-[#283A64] transition-colors duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 17L17 7M17 7H7M17 7V17"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {hasMoreProjects && (
                <div className="flex justify-center mt-12">
                  <motion.button
                    onClick={loadMore}
                    className="px-8 py-3 bg-[#283A64] hover:bg-cyan-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Load More Projects
                  </motion.button>
                </div>
              )}
            </div>
          </div>
        </section>

        <Collaborate />
        <Footer />
      </div>
      {/* Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId={selectedId}
              className="w-[90vw] max-w-4xl overflow-hidden flex justify-center relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Arrow */}
              <button
                onClick={goLeft}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-cyan-200 text-[#283A64] rounded-full p-3 z-10 shadow-lg"
                aria-label="Previous image"
              >
                <FaArrowLeft size={24} />
              </button>
              <Image
                src={images.find((img) => img.id === selectedId)?.src}
                alt="Expanded Project"
                width={200}
                height={100}
                className="w-3/4 h-auto object-cover"
              />
              {/* Right Arrow */}
              <button
                onClick={goRight}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-cyan-200 text-[#283A64] rounded-full p-3 z-10 shadow-lg"
                aria-label="Next image"
              >
                <FaArrowRight size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
