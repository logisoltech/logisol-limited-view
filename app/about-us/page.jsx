"use client";
import React, { useCallback } from "react";
import Navbar from "../Components/UI/Navbar";
import Footer from "../Components/UI/Footer";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { particlesConfig } from "../Components/Data/particlesConfig";
import { font } from "../Components/Font/font";
import { headingFont } from "../Components/Font/headingFont";
import Slider from "../Components/UI/Slider";
import {
  FaArrowRight,
  FaLightbulb,
  FaStar,
  FaTrophy,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";
import Collaborate from "../Components/UI/Collaborate";

export default function AboutPage() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <div className={font.className}>
      <Navbar />
      {/* Hero/Main Section */}
      <section className="relative h-[29rem] max-md:h-[20rem] bg-white overflow-hidden flex flex-col items-center justify-center">
        {/* Particles.js Background */}
        <Particles
          id="tsparticles-about"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesConfig}
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h1
            className={`${headingFont.className} text-[80px] max-lg:text-[60px] max-md:text-[30px] text-[#283A64] text-center mb-6`}
          >
            About <span className="text-cyan-400">Us</span>
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

      {/* About Us Section */}
      <section
        className={`${font.className} bg-white items-center justify-center relative z-20 w-full mx-auto max-lg:px-8 max-lg:py-8 px-8 py-8`}
      >
        <div className="flex gap-x-6 lg:flex-row max-lg:flex-col relative">
          {/* Left: Image */}
          <div className="flex-1 flex flex-col w-full">
            <img
              src="/about-us-about-sec.webp"
              alt="About Us"
              className="rounded-3xl object-cover w-full h-[480px] md:h-[600px] shadow-lg"
            />
            <div className="max-w-7xl flex flex-col md:flex-row items-center md:items-stretch gap-4 px-6 py-6">
              {/* Satisfied Customers */}
              <div className="flex space-x-4 px-6 py-4 text-center md:text-left">
                <span className="text-5xl font-bold text-cyan-400">150+</span>
                <div className="text-gray-700 text-base mt-1">
                  Satisfied <br /> Customers
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 flex flex-col items-start mt-12 sm:mb-6 md:mb-3 max-sm:mb-3 md:mt-0">
            <span className="uppercase tracking-widest text-xs text-gray-500 mb-2 flex items-center gap-2">
              <span className="text-cyan-400 text-lg">*</span> About Us
            </span>
            <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] leading-tight mb-4">
              Empowering Business <br />
              <span className="text-cyan-400">
                Through Code, Creativity & Strategy.
              </span>
            </h2>
            <div className="bg-gradient-to-b from-[#86D8EB] to-[#ffffff] border-l-4 border-[#86D8EB] rounded-xl p-6 mb-6 w-full">
              <p className="text-base text-gray-700 max-sm:text-sm">
                At Logisol Tech, we don't just build websites or write code—we
                build scalable digital solutions that help businesses compete,
                grow, and lead in the modern world. We are a results-driven
                software house offering a wide range of services that include
                Web Development, App Development, SEO, Social Media Marketing,
                Graphic Design, and Video Editing—each tailored to suit your
                industry and business goals.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="/contact-us" className="flex items-center gap-2">
                <button className="cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                  Contact Us
                </button>
                <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                  <FaArrowRight className="w-5 h-5 text-white" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- Our Approach Section --- */}
      <section
        className={`${font.className} w-full bg-white relative z-20 mx-auto max-lg:p-6 lg:px-8 lg:py-8 flex flex-col lg:flex-row items-center gap-12`}
      >
        {/* Left: Text Content */}
        <div className="flex-1">
          <span className="uppercase tracking-widest text-base font-semibold text-[#283A64] flex items-center gap-2 mb-4">
            <span className="text-cyan-400 text-lg">*</span> OUR APPROACH
          </span>
          <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] leading-tight mb-4">
            Strategic <span className="text-cyan-400">approach</span>
            <span className="text-[#283A64]"> to </span>
            innovative solutions
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-2">
            Founded by a team of tech-savvy innovators and digital strategists,
            Logisol Tech was born out of a simple idea: to bridge the gap
            between business vision and technology. With our roots in innovation
            and a stronghold in execution, we deliver real-world solutions
            powered by strategy, design, and code.
          </p>
        </div>
        {/* Right: Image Grid */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-6 relative">
          <img
            src="/about-us-approach-1.webp"
            alt="Team using tablet"
            className="rounded-2xl object-cover w-full h-48 md:h-full"
          />
          <img
            src="/about-us-approach-2.webp"
            alt="Business strategy"
            className="rounded-2xl object-cover w-full h-48 md:h-full"
          />
          <img
            src="/about-us-approach-3.webp"
            alt="Team collaboration"
            className="rounded-2xl object-cover w-full h-48 md:h-full col-span-2"
          />
          {/* Circular Badge */}
          {/* <div className="absolute -translate-x-52/55 -translate-y-1/2 md:left-auto md:top-auto md:-right-16 md:bottom-16 z-10">
                        <div className="w-36 h-36 bg-cyan-100 rounded-full flex flex-col items-center justify-center border-8 border-white shadow-lg relative">
                            <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mb-2">
                                <span className="text-3xl">😊</span>
                            </div>
                            <span className="text-xs text-[#283A64] font-semibold text-center px-2">Business development and solutions Since 2021</span>
                        </div>
                    </div> */}
        </div>
      </section>

      {/* What We Do Section */}
      <section
        className={`${font.className} w-full bg-white relative z-20 overflow-hidden max-lg:p-6 lg:px-8 lg:py-8`}
      >
        <div className="mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FaStar className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium uppercase tracking-wide">
                  WHAT WE DO
                </span>
              </div>
              <h2 className="text-[50px] max-xl:text-[40px] text-[#283A64] leading-tight mb-4">
                Experienced <span className="text-cyan-400">Professionals</span>
              </h2>
            </div>

            <div className="hidden lg:flex items-center space-x-3">
              <button className="bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium">
                Contact Us
              </button>
              <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                <FaArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-base md:text-md my-4">
            We design intelligent systems, scalable platforms, and
            performance-optimized digital assets that turn visitors into
            customers and clicks into conversions. Whether you need a
            custom-built app or a multi-platform marketing campaign, we bring
            together creativity, strategy, and technology to elevate your brand.
          </p>

          {/* Main Content */}
          <div className="relative grid grid-cols-3 max-md:grid-cols-1 gap-6 max-sm:space-y-8 items-center justify-center">
            {/* Left Column: Top Left & Bottom Left */}
            <div className="flex flex-col max-sm:gap-4 md:divide-y-1 divide-gray-300 max-md:divide-x-1 items-center max-md:flex-row md:items-end">
              {/* Top Left Feature */}
              <div className="bg-white p-5 max-w-xs w-full">
                <div className="flex items-center space-x-3 mb-2">
                  <FaUsers className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-semibold text-[#283a64] text-base">
                    Custom Solutions
                  </h3>
                </div>
                <p className="text-sm text-gray-600">
                  No cookie-cutter code. Every project is built uniquely for
                  your needs.
                </p>
              </div>
              {/* Bottom Left Feature */}
              <div className="bg-white p-5 max-w-xs w-full mt-auto">
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

            {/* Center Column: Image */}
            <div className="flex flex-col gap-8 items-center justify-center h-full">
              <div className="relative w-80 h-80 lg:w-[400px] lg:h-[400px] mx-auto">
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
            <div className="flex flex-col max-sm:gap-4 md:divide-y-1 divide-gray-300 max-md:divide-x-1 items-center max-md:flex-row">
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
              <div className="bg-white p-5 max-w-xs w-full mt-auto">
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
                <button className="cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                  Contact Us
                </button>
                <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                  <FaArrowRight className="w-5 h-5 text-white" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- Connect With Us Section --- */}
      <section className="w-full bg-white relative z-20 mx-auto max-lg:p-6 lg:px-8 lg:py-8 flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Text Content */}
        <div className="flex-1">
          <span className="uppercase tracking-widest text-base font-semibold text-[#283A64] flex items-center gap-2 mb-4">
            <span className="text-cyan-400 text-lg">*</span> CONNECT WITH US
          </span>
          <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] leading-tight mb-4">
            Find and Connect With Us on{" "}
            <span className="text-cyan-400">social media</span> Platforms
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/about-us-2/avatar-1.webp"
              alt="1"
              className="w-10 h-10 rounded-full border-2 border-white -ml-2 first:ml-0"
            />
            <img
              src="/about-us-2/avatar-2.webp"
              alt="2"
              className="w-10 h-10 rounded-full border-2 border-white -ml-2"
            />
            <img
              src="/about-us-2/avatar-3.webp"
              alt="3"
              className="w-10 h-10 rounded-full border-2 border-white -ml-2"
            />
            <span className="ml-2 text-gray-700 text-base">
              Join and share your experiences, Ideas with Logisol. We are here
              to listen and help your business grow.
            </span>
          </div>
          <div className="flex items-center gap-4 mb-8">
            <a href="/contact-us" className="flex items-center gap-2">
              <button className="cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                Get Started
              </button>
              <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                <FaArrowRight className="w-5 h-5 text-white" />
              </div>
            </a>
          </div>
          {/* Card */}
          <div className="border rounded-2xl p-6 flex items-center gap-6 bg-white shadow-sm">
            <img
              src="/what-we-social-image.jpg.webp"
              alt="Social Media"
              className="w-24 h-24 rounded-xl object-cover"
            />
            <div className="flex-1">
              <div className="font-semibold text-[#283A64] mb-2 max-sm:text-sm">
                Empowering Businesses to Unmatched Growth Through Innovative
                Strategies
              </div>
              <div className="flex gap-4 mt-2 max-sm:flex-col">
                <a
                  href="https://www.facebook.com/logisol.tech/"
                  className="flex items-center border border-[#283A64] rounded-full px-4 py-2 text-[#283A64] hover:bg-cyan-400 hover:text-white transition"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
                  </svg>
                  Facebook
                </a>
                <a
                  href="https://www.linkedin.com/company/logisol-technologies"
                  className="flex items-center border border-[#283A64] rounded-full px-4 py-2 text-[#283A64] hover:bg-cyan-400 hover:text-white transition"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.531-2.513-1.531 0-1.767 1.197-1.767 2.435v4.682h-3v-9h2.881v1.233h.041c.401-.761 1.381-1.563 2.845-1.563 3.042 0 3.604 2.003 3.604 4.605v4.725z" />
                  </svg>
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Main Image and Badge */}
        <div className="flex-1 flex flex-col items-center relative">
          <img
            src="/connect-with-us.webp"
            alt="Connect with us"
            className="rounded-3xl object-cover w-full shadow-lg"
          />
          {/* Circular Badge */}
          {/* <div className="absolute left-1/2 bottom-0 translate-x-1/2 md:left-auto md:bottom-8 md:-right-16 z-10">
            <div className="w-36 h-36 bg-cyan-100 rounded-full flex flex-col items-center justify-center border-8 border-white shadow-lg relative rotate-12">
              <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center mb-2 rotate-[-12deg]">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
              <span className="text-xs text-cyan-600 font-semibold text-center px-2 rotate-[-12deg]">
                Let us help you grow & step ahead of the rest
              </span>
            </div>
          </div> */}
        </div>
      </section>

      <Collaborate />
      <Footer />
    </div>
  );
}
