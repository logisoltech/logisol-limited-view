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
import Collaborate from "../Components/UI/Collaborate";
import { FaDotCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function OurPricingPage() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/contact-us');
  };

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
              className={`${headingFont.className} text-[80px] max-lg:text-[60px] max-md:text-[30px] text-[#283A64] text-center mb-6`}
            >
              Our <span className="text-cyan-400">Pricing</span>
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

        {/* --- Pricing Section --- */}
        <section className="w-full bg-white relative z-20 flex justify-center items-center py-6 px-8">
          <div className="p-6 mb-6 w-full border-b border-[#d4d8e0]">
            <p className="text-gray-900 text-base md:text-lg xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
              At Logisol Tech, we don't just build websites or write code—we
              build scalable digital solutions that help businesses compete,
              grow, and lead in the modern world. We are a results-driven
              software house offering a wide range of services that include Web
              Development, App Development, SEO, Social Media Marketing, Graphic
              Design, and Video Editing—each tailored to suit your industry and
              business goals.
            </p>
          </div>
        </section>

        {/* --- Website Development Pricing Section --- */}
        <section className="w-full bg-white relative z-20 flex justify-center items-center max-lg:p-6 lg:px-8 lg:py-8">
          <div className="w-full max-w-7xl">
            <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] mb-12">
              Website Development Pricing
            </h2>
            <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-8">
              <div className="relative">
                {/* Gradient background layer */}
                <div
                  className="absolute inset-0 z-0 rounded-2xl shadow-lg"
                  style={{
                    background:
                      "linear-gradient(180deg, #a9b2c3 70%, #c8ebf4 100%)",
                    backgroundColor: "transparent",
                  }}
                />
                {/* Starter Site Card */}
                <div className="relative rounded-2xl z-10 border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px] relative xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                  <div className="mb-4">
                    <svg
                      className="w-12 h-12 text-cyan-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="14"
                        rx="2"
                        stroke="currentColor"
                      />
                      <rect
                        x="7"
                        y="7"
                        width="10"
                        height="6"
                        rx="1"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                    Starter Site
                  </h3>
                  <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                    Perfect for small businesses looking to establish an online
                    presence.
                  </p>
                  <p className="text-4xl font-bold text-cyan-300 mb-2">
                    $<span className="text-5xl">499</span>
                  </p>
                  <button className="w-full bg-[#aeb8c6] text-[#283A64] font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer" onClick={handleGetStarted}>
                    Get Started
                  </button>
                  <ul className="w-full text-left text-gray-700 space-y-4 xl:min-h-[57px]">
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Up to 5
                      Informational Pages
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Mobile
                      Responsive Design
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Contact Form &
                      Google Map
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Basic SEO
                      Optimization
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> 1 Revision Round
                    </li>
                    <li className="flex items-center gap-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Delivery: 1–2
                      Weeks
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                {/* Gradient background layer */}
                <div
                  className="absolute inset-0 z-0 rounded-2xl shadow-lg"
                  style={{
                    background:
                      "linear-gradient(180deg, #a9b2c3 70%, #c8ebf4 100%)",
                    backgroundColor: "transparent",
                  }}
                />

                {/* Business Pro Card */}
                <div className="rounded-2xl border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px] relative xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                  {/* Popular Ribbon */}
                  <div className="absolute top-0 right-0">
                    <span className="bg-cyan-300 text-white text-xs font-bold px-4 py-1 rounded-tr-2xl rounded-bl-2xl tracking-widest">
                      POPULAR
                    </span>
                  </div>
                  <div className="mb-4">
                    <svg
                      className="w-12 h-12 text-cyan-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="14"
                        rx="2"
                        stroke="currentColor"
                      />
                      <rect
                        x="7"
                        y="7"
                        width="10"
                        height="6"
                        rx="1"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                    Business Pro
                  </h3>
                  <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                    Ideal for small to mid-sized e-commerce businesses.
                  </p>
                  <div className="text-4xl font-bold text-cyan-300 mb-2">
                    $<span className="text-5xl">999</span>
                  </div>
                  <button className="w-full bg-cyan-300 text-white font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer" onClick={handleGetStarted}>
                    Get Started
                  </button>
                  <ul className="w-full text-left text-gray-700 space-y-3 xl:min-h-[57px]">
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Up to 12 Pages +
                      Product Catalog
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Shopping Cart &
                      Payment Integration
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Mobile
                      Optimization
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Newsletter
                      Signup
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Basic Inventory
                      Integration
                    </li>
                    <li className="flex items-center gap-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Delivery: 3–4
                      Weeks
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                {/* Gradient background layer */}
                <div
                  className="absolute inset-0 z-0 rounded-2xl shadow-lg"
                  style={{
                    background:
                      "linear-gradient(180deg, #a9b2c3 70%, #c8ebf4 100%)",
                    backgroundColor: "transparent",
                  }}
                />
                {/* Custom Development Card */}
                <div className="relative z-10 rounded-2xl border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px] relative xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                  <div className="mb-4">
                    <svg
                      className="w-12 h-12 text-cyan-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="14"
                        rx="2"
                        stroke="currentColor"
                      />
                      <rect
                        x="7"
                        y="7"
                        width="10"
                        height="6"
                        rx="1"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                    Custom Development
                  </h3>
                  <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                    For mid-to-large businesses needing fully customized web
                    apps.
                  </p>
                  <div className="text-4xl font-bold text-cyan-300 mb-2">
                    $<span className="text-5xl">1999+</span>
                  </div>
                  <button className="w-full bg-[#aeb8c6] text-[#283A64] font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer" onClick={handleGetStarted}>
                    Get Started
                  </button>
                  <ul className="w-full text-left text-gray-700 space-y-3 xl:min-h-[57px]">
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Custom CMS /
                      Admin Panel
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> React / Node.js
                      Tech Stack
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Advanced
                      Features & APIs
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> SEO, Analytics,
                      Security Layers
                    </li>
                    <li className="flex items-center gap-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Delivery: 4–6
                      Weeks (Based on Scope)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- App Development Pricing Section --- */}
        <section className="w-full bg-white relative z-20 flex justify-center items-center max-lg:p-6 lg:px-8 lg:py-8">
          <div className="w-full max-w-7xl">
            <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] mb-12">
              App Development Pricing
            </h2>
            <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-8">
              {/* MVP Package Card */}
              <div className="relative">
                {/* Gradient background layer */}
                <div
                  className="absolute inset-0 z-0 rounded-2xl shadow-lg"
                  style={{
                    background:
                      "linear-gradient(180deg, #a9b2c3 70%, #c8ebf4 100%)",
                    backgroundColor: "transparent",
                  }}
                />
                <div className="relative rounded-2xl z-10 border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px] xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                  <div className="mb-4">
                    <svg
                      className="w-12 h-12 text-cyan-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="6"
                        y="2"
                        width="12"
                        height="20"
                        rx="3"
                        stroke="currentColor"
                      />
                      <rect
                        x="10"
                        y="18"
                        width="4"
                        height="2"
                        rx="1"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                    MVP Package
                  </h3>
                  <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                    Single platform app for small businesses or MVPs.
                  </p>
                  <div className="text-4xl font-bold text-cyan-300 mb-2">
                    $<span className="text-5xl">2,499</span>
                  </div>
                  <button className="w-full bg-[#aeb8c6] text-[#283A64] font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer" onClick={handleGetStarted}>
                    Get Started
                  </button>
                  <ul className="w-full text-left text-gray-700 space-y-3 xl:min-h-[57px]">
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Up to 5 Screens
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Android or iOS
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Simple UI/UX
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Contact Form &
                      Push Notifications
                    </li>
                    <li className="flex items-center gap-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Delivery: 3–4
                      Weeks
                    </li>
                  </ul>
                </div>
              </div>
              {/* Cross-Platform App Card */}
              <div className="relative">
                {/* Gradient background layer */}
                <div
                  className="absolute inset-0 z-0 rounded-2xl shadow-lg"
                  style={{
                    background:
                      "linear-gradient(180deg, #a9b2c3 70%, #c8ebf4 100%)",
                    backgroundColor: "transparent",
                  }}
                />
                <div className="relative rounded-2xl z-10 border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px] xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                  {/* Popular Ribbon */}
                  <div className="absolute top-0 right-0">
                    <span className="bg-cyan-300 text-white text-xs font-bold px-4 py-1 rounded-tr-2xl rounded-bl-2xl tracking-widest">
                      POPULAR
                    </span>
                  </div>
                  <div className="mb-4">
                    <svg
                      className="w-12 h-12 text-cyan-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="6"
                        y="2"
                        width="12"
                        height="20"
                        rx="3"
                        stroke="currentColor"
                      />
                      <rect
                        x="10"
                        y="18"
                        width="4"
                        height="2"
                        rx="1"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                    Cross-Platform App
                  </h3>
                  <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                    Cross-platform mobile solution for growing brands.
                  </p>
                  <div className="text-4xl font-bold text-cyan-300 mb-2">
                    $<span className="text-5xl">5,999</span>
                  </div>
                  <button className="w-full bg-cyan-300 text-white font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer" onClick={handleGetStarted}>
                    Get Started
                  </button>
                  <ul className="w-full text-left text-gray-700 space-y-3 xl:min-h-[57px]">
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Up to 15 Screens
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> React Native or
                      Flutter
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> User
                      Authentication + Admin Panel
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> API Integrations
                    </li>
                    <li className="flex items-center gap-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Delivery: 5–7
                      Weeks
                    </li>
                  </ul>
                </div>
              </div>
              {/* Enterprise App Card */}
              <div className="relative">
                {/* Gradient background layer */}
                <div
                  className="absolute inset-0 z-0 rounded-2xl shadow-lg"
                  style={{
                    background:
                      "linear-gradient(180deg, #a9b2c3 70%, #c8ebf4 100%)",
                    backgroundColor: "transparent",
                  }}
                />
                <div className="relative rounded-2xl z-10 border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px] xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                  <div className="mb-4">
                    <svg
                      className="w-12 h-12 text-cyan-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="6"
                        y="2"
                        width="12"
                        height="20"
                        rx="3"
                        stroke="currentColor"
                      />
                      <rect
                        x="10"
                        y="18"
                        width="4"
                        height="2"
                        rx="1"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                    Enterprise App
                  </h3>
                  <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                    Fully scalable app tailored to your business logic.
                  </p>
                  <div className="text-4xl font-bold text-cyan-300 mb-2">
                    $<span className="text-5xl">12,000+</span>
                  </div>
                  <button className="w-full bg-[#aeb8c6] text-[#283A64] font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer" onClick={handleGetStarted}>
                    Get Started
                  </button>
                  <ul className="w-full text-left text-gray-700 space-y-3 xl:min-h-[57px]">
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Unlimited
                      Screens (Per Scope)
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Native or
                      Cross-Platform
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Custom Backend
                      (Node.js, Firebase, etc.)
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Real-Time
                      Features, Admin Roles, Payment Systems
                    </li>
                    <li className="flex items-center gap-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Delivery: Based
                      on Requirements
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SEO Packages Section --- */}
        <section className="w-full bg-white relative z-20 flex justify-center items-center max-lg:p-6 lg:px-8 lg:py-8">
          <div className="w-full max-w-7xl">
            <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] mb-12">
              SEO Packages
            </h2>
            <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-8">
              {/* Starter SEO Card */}
              <div className="relative">
                {/* Gradient background layer */}
                <div
                  className="absolute inset-0 z-0 rounded-2xl shadow-lg"
                  style={{
                    background:
                      "linear-gradient(180deg, #a9b2c3 70%, #c8ebf4 100%)",
                    backgroundColor: "transparent",
                  }}
                />
                <div className="relative rounded-2xl z-10 border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px] xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                  <div className="mb-4">
                    <svg
                      className="w-12 h-12 text-cyan-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" stroke="currentColor" />
                      <path d="M21 21l-4.35-4.35" stroke="currentColor" />
                      <path d="M12 8v4l2 2" stroke="currentColor" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                    Starter SEO
                  </h3>
                  <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                    For businesses starting with local or basic organic
                    visibility.
                  </p>
                  <div className="text-4xl font-bold text-cyan-300 mb-2">
                    $<span className="text-5xl">399</span>{" "}
                    <span className="text-lg font-normal text-[#283A64]">
                      /month
                    </span>
                  </div>
                  <button className="w-full bg-[#aeb8c6] text-[#283A64] font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer" onClick={handleGetStarted}>
                    Get Started
                  </button>
                  <ul className="w-full text-left text-gray-700 space-y-3 xl:min-h-[57px]">
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> 5 Keywords
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> On-Page
                      Optimization
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> 1 Blog Post /
                      Month
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Basic Link
                      Building
                    </li>
                    <li className="flex items-center gap-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Monthly Reports
                    </li>
                  </ul>
                </div>
              </div>
              {/* Basic Growth SEO Card */}
              <div className="relative">
                {/* Gradient background layer */}
                <div
                  className="absolute inset-0 z-0 rounded-2xl shadow-lg"
                  style={{
                    background:
                      "linear-gradient(180deg, #a9b2c3 70%, #c8ebf4 100%)",
                    backgroundColor: "transparent",
                  }}
                />
                <div className="relative rounded-2xl z-10 border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px] xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                  {/* Popular Ribbon */}
                  <div className="absolute top-0 right-0">
                    <span className="bg-cyan-300 text-white text-xs font-bold px-4 py-1 rounded-tr-2xl rounded-bl-2xl tracking-widest">
                      POPULAR
                    </span>
                  </div>
                  <div className="mb-4">
                    <svg
                      className="w-12 h-12 text-cyan-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" stroke="currentColor" />
                      <path d="M21 21l-4.35-4.35" stroke="currentColor" />
                      <path d="M12 8v4l2 2" stroke="currentColor" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                    Basic Growth SEO
                  </h3>
                  <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                    More keywords, better content, deeper analysis.
                  </p>
                  <div className="text-4xl font-bold text-cyan-300 mb-2">
                    $<span className="text-5xl">799</span>{" "}
                    <span className="text-lg font-normal text-[#283A64]">
                      /month
                    </span>
                  </div>
                  <button className="w-full bg-cyan-300 text-white font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer" onClick={handleGetStarted}>
                    Get Started
                  </button>
                  <ul className="w-full text-left text-gray-700 space-y-3 xl:min-h-[57px]">
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> 15 Keywords
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Competitor
                      Research
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Technical SEO
                      Fixes
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> 2 Blogs / Month
                    </li>
                    <li className="flex items-center gap-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Schema Markup +
                      Monthly Strategy Call
                    </li>
                  </ul>
                </div>
              </div>
              {/* Enterprise SEO Card */}
              <div className="relative">
                {/* Gradient background layer */}
                <div
                  className="absolute inset-0 z-0 rounded-2xl shadow-lg"
                  style={{
                    background:
                      "linear-gradient(180deg, #a9b2c3 70%, #c8ebf4 100%)",
                    backgroundColor: "transparent",
                  }}
                />
                <div className="relative rounded-2xl z-10 border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px] xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                  <div className="mb-4">
                    <svg
                      className="w-12 h-12 text-cyan-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" stroke="currentColor" />
                      <path d="M21 21l-4.35-4.35" stroke="currentColor" />
                      <path d="M12 8v4l2 2" stroke="currentColor" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                    Enterprise SEO
                  </h3>
                  <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                    Advanced SEO strategy for national reach & long-term growth.
                  </p>
                  <div className="text-4xl font-bold text-cyan-300 mb-2">
                    $<span className="text-5xl">1,499+</span>{" "}
                    <span className="text-lg font-normal text-[#283A64]">
                      /month
                    </span>
                  </div>
                  <button className="w-full bg-[#aeb8c6] text-[#283A64] font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer" onClick={handleGetStarted}>
                    Get Started
                  </button>
                  <ul className="w-full text-left text-gray-700 space-y-3 xl:min-h-[57px]">
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> 30+ Keywords
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> High Authority
                      Backlinks
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> 4 SEO Blogs /
                      Month
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Conversion
                      Optimization
                    </li>
                    <li className="flex items-center gap-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Dedicated SEO
                      Manager + Dashboard
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Social Media Marketing Section --- */}
        <section className="w-full bg-white relative z-20 flex justify-center items-center max-lg:p-6 lg:px-8 lg:py-8">
          <div className="w-full max-w-7xl">
            <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] mb-12">
              Social Media Marketing
            </h2>
            <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-8">
              {/* Starter Social Card */}
              <div className="relative">
                {/* Gradient background layer */}
                <div
                  className="absolute inset-0 z-0 rounded-2xl shadow-lg"
                  style={{
                    background:
                      "linear-gradient(180deg, #a9b2c3 70%, #c8ebf4 100%)",
                    backgroundColor: "transparent",
                  }}
                />
                <div className="relative rounded-2xl z-10 border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px] xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                  <div className="mb-4">
                    <svg
                      className="w-12 h-12 text-cyan-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" stroke="currentColor" />
                      <circle cx="8" cy="10" r="2" stroke="currentColor" />
                      <circle cx="16" cy="10" r="2" stroke="currentColor" />
                      <path d="M8 12c0 2 4 2 4 0" stroke="currentColor" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                    Starter Social
                  </h3>
                  <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                    Consistent, quality content for growing a basic social
                    presence.
                  </p>
                  <div className="text-4xl font-bold text-cyan-300 mb-2">
                    $<span className="text-5xl">399</span>{" "}
                    <span className="text-lg font-normal text-[#283A64]">
                      /month
                    </span>
                  </div>
                  <button className="w-full bg-[#aeb8c6] text-[#283A64] font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer" onClick={handleGetStarted}>
                    Get Started
                  </button>
                  <ul className="w-full text-left text-gray-700 space-y-3 xl:min-h-[57px]">
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> 2 Platforms
                      (e.g., Facebook + Instagram)
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> 8 Posts/Month
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Basic Design &
                      Hashtags
                    </li>
                    <li className="flex items-center gap-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Monthly
                      Reporting
                    </li>
                  </ul>
                </div>
              </div>
              {/* Growth Social Card */}
              <div className="relative">
                {/* Gradient background layer */}
                <div
                  className="absolute inset-0 z-0 rounded-2xl shadow-lg"
                  style={{
                    background:
                      "linear-gradient(180deg, #a9b2c3 70%, #c8ebf4 100%)",
                    backgroundColor: "transparent",
                  }}
                />
                <div className="relative rounded-2xl z-10 border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px] xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                  {/* Popular Ribbon */}
                  <div className="absolute top-0 right-0">
                    <span className="bg-cyan-300 text-white text-xs font-bold px-4 py-1 rounded-tr-2xl rounded-bl-2xl tracking-widest">
                      POPULAR
                    </span>
                  </div>
                  <div className="mb-4">
                    <svg
                      className="w-12 h-12 text-cyan-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" stroke="currentColor" />
                      <circle cx="8" cy="10" r="2" stroke="currentColor" />
                      <circle cx="16" cy="10" r="2" stroke="currentColor" />
                      <path d="M8 12c0 2 4 2 4 0" stroke="currentColor" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                    Growth Social
                  </h3>
                  <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                    Elevated content, light ads, and strategic engagement.
                  </p>
                  <div className="text-4xl font-bold text-cyan-300 mb-2">
                    $<span className="text-5xl">799</span>{" "}
                    <span className="text-lg font-normal text-[#283A64]">
                      /month
                    </span>
                  </div>
                  <button className="w-full bg-cyan-300 text-white font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer" onClick={handleGetStarted}>
                    Get Started
                  </button>
                  <ul className="w-full text-left text-gray-700 space-y-3 xl:min-h-[57px]">
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> 3 Platforms
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> 16 Posts + 4
                      Reels / Month
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Comments & DMs
                      Monitoring
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Ad Campaign
                      Setup
                    </li>
                    <li className="flex items-center gap-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Monthly Strategy
                      Call
                    </li>
                  </ul>
                </div>
              </div>
              {/* Pro Social Card */}
              <div className="relative">
                {/* Gradient background layer */}
                <div
                  className="absolute inset-0 z-0 rounded-2xl shadow-lg"
                  style={{
                    background:
                      "linear-gradient(180deg, #a9b2c3 70%, #c8ebf4 100%)",
                    backgroundColor: "transparent",
                  }}
                />
                <div className="relative rounded-2xl z-10 border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px] xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                  <div className="mb-4">
                    <svg
                      className="w-12 h-12 text-cyan-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" stroke="currentColor" />
                      <circle cx="8" cy="10" r="2" stroke="currentColor" />
                      <circle cx="16" cy="10" r="2" stroke="currentColor" />
                      <path d="M8 12c0 2 4 2 4 0" stroke="currentColor" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                    Pro Social
                  </h3>
                  <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                    High-volume, data-driven content management for growing
                    brands.
                  </p>
                  <div className="text-4xl font-bold text-cyan-300 mb-2">
                    $<span className="text-5xl">1,499</span>{" "}
                    <span className="text-lg font-normal text-[#283A64]">
                      /month
                    </span>
                  </div>
                  <button className="w-full bg-[#aeb8c6] text-[#283A64] font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer" onClick={handleGetStarted}>
                    Get Started
                  </button>
                  <ul className="w-full text-left text-gray-700 space-y-3 xl:min-h-[57px]">
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> All Major
                      Platforms
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> 30+ Posts /
                      Month + 8 Reels
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Community
                      Management
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Paid Campaign
                      Management
                    </li>
                    <li className="flex items-center gap-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Competitor
                      Research + Reporting Dashboard
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Design & Video Editing Section --- */}
        <section className="w-full bg-white relative z-20 flex justify-center items-center max-lg:p-6 lg:px-8 lg:py-8">
          <div className="w-full max-w-7xl">
            <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] mb-12">
              Design & Video Editing
            </h2>
            <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-8">
              {/* Creative Starter Card */}
              <div className="relative">
                {/* Gradient background layer */}
                <div
                  className="absolute inset-0 z-0 rounded-2xl shadow-lg"
                  style={{
                    background:
                      "linear-gradient(180deg, #a9b2c3 70%, #c8ebf4 100%)",
                    backgroundColor: "transparent",
                  }}
                />
                <div className="relative rounded-2xl z-10 border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px] xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                  <div className="mb-4">
                    <svg
                      className="w-12 h-12 text-cyan-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="4"
                        y="16"
                        width="16"
                        height="4"
                        rx="2"
                        stroke="currentColor"
                      />
                      <rect
                        x="6"
                        y="10"
                        width="12"
                        height="4"
                        rx="2"
                        stroke="currentColor"
                      />
                      <rect
                        x="8"
                        y="4"
                        width="8"
                        height="4"
                        rx="2"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                    Creative Starter
                  </h3>
                  <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                    Simple, clean designs and videos for startups.
                  </p>
                  <div className="text-4xl font-bold text-cyan-300 mb-2">
                    $<span className="text-5xl">299</span>{" "}
                    <span className="text-lg font-normal text-[#283A64]">
                      /month
                    </span>
                  </div>
                  <button className="w-full bg-[#aeb8c6] text-[#283A64] font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer" onClick={handleGetStarted}>
                    Get Started
                  </button>
                  <ul className="w-full text-left text-gray-700 space-y-3 xl:min-h-[57px]">
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> 10 Graphic Posts
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> 2 Reels or Short
                      Videos (30s)
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> 2 Revisions Each
                    </li>
                    <li className="flex items-center gap-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Turnaround: 3-5
                      Days
                    </li>
                  </ul>
                </div>
              </div>
              {/* Growth Creative Card */}
              <div className="relative">
                {/* Gradient background layer */}
                <div
                  className="absolute inset-0 z-0 rounded-2xl shadow-lg"
                  style={{
                    background:
                      "linear-gradient(180deg, #a9b2c3 70%, #c8ebf4 100%)",
                    backgroundColor: "transparent",
                  }}
                />
                <div className="relative rounded-2xl z-10 border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px] xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                  {/* Popular Ribbon */}
                  <div className="absolute top-0 right-0">
                    <span className="bg-cyan-300 text-white text-xs font-bold px-4 py-1 rounded-tr-2xl rounded-bl-2xl tracking-widest">
                      POPULAR
                    </span>
                  </div>
                  <div className="mb-4">
                    <svg
                      className="w-12 h-12 text-cyan-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="4"
                        y="16"
                        width="16"
                        height="4"
                        rx="2"
                        stroke="currentColor"
                      />
                      <rect
                        x="6"
                        y="10"
                        width="12"
                        height="4"
                        rx="2"
                        stroke="currentColor"
                      />
                      <rect
                        x="8"
                        y="4"
                        width="8"
                        height="4"
                        rx="2"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                    Growth Creative
                  </h3>
                  <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                    A full content design service for active social or digital
                    campaigns.
                  </p>
                  <div className="text-4xl font-bold text-cyan-300 mb-2">
                    $<span className="text-5xl">599</span>{" "}
                    <span className="text-lg font-normal text-[#283A64]">
                      /month
                    </span>
                  </div>
                  <button className="w-full bg-cyan-300 text-white font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer" onClick={handleGetStarted}>
                    Get Started
                  </button>
                  <ul className="w-full text-left text-gray-700 space-y-3 xl:min-h-[57px]">
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> 20 Graphics
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> 4 Edited Videos
                      (up to 60s)
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Motion Graphics
                      + Brand Templates
                    </li>
                    <li className="flex items-center gap-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Strategy Support
                    </li>
                  </ul>
                </div>
              </div>
              {/* Pro Visual Suite Card */}
              <div className="relative">
                {/* Gradient background layer */}
                <div
                  className="absolute inset-0 z-0 rounded-2xl shadow-lg"
                  style={{
                    background:
                      "linear-gradient(180deg, #a9b2c3 70%, #c8ebf4 100%)",
                    backgroundColor: "transparent",
                  }}
                />
                <div className="relative rounded-2xl z-10 border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px] xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                  <div className="mb-4">
                    <svg
                      className="w-12 h-12 text-cyan-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="4"
                        y="16"
                        width="16"
                        height="4"
                        rx="2"
                        stroke="currentColor"
                      />
                      <rect
                        x="6"
                        y="10"
                        width="12"
                        height="4"
                        rx="2"
                        stroke="currentColor"
                      />
                      <rect
                        x="8"
                        y="4"
                        width="8"
                        height="4"
                        rx="2"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                    Pro Visual Suite
                  </h3>
                  <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                    A full design & video editing partner for content-heavy
                    operations.
                  </p>
                  <div className="text-4xl font-bold text-cyan-300 mb-2">
                    $<span className="text-5xl">1,299+</span>{" "}
                    <span className="text-lg font-normal text-[#283A64]">
                      /month
                    </span>
                  </div>
                  <button className="w-full bg-[#aeb8c6] text-[#283A64] font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer" onClick={handleGetStarted}>
                    Get Started
                  </button>
                  <ul className="w-full text-left text-gray-700 space-y-3 xl:min-h-[57px]">
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Unlimited*
                      Graphic Requests (Fair Use)
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> 8+ Edited Videos
                      / Month
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Product Videos,
                      Animations, Promo Visuals
                    </li>
                    <li className="flex items-center gap-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Dedicated
                      Manager + Weekly Delivery Cycle
                    </li>
                  </ul>
                </div>
              </div>
              {/* Pro Visual Suite Card */}
              <div className="relative">
                {/* Gradient background layer */}
                <div
                  className="absolute inset-0 z-0 rounded-2xl shadow-lg"
                  style={{
                    background:
                      "linear-gradient(180deg, #a9b2c3 70%, #c8ebf4 100%)",
                    backgroundColor: "transparent",
                  }}
                />
                <div className="relative rounded-2xl z-10 border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[600px] xl:min-h-[72px] lg:min-h-[48px] md:min-h-[72px] ">
                  <div className="mb-4">
                    <svg
                      className="w-12 h-12 text-cyan-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="4"
                        y="16"
                        width="16"
                        height="4"
                        rx="2"
                        stroke="currentColor"
                      />
                      <rect
                        x="6"
                        y="10"
                        width="12"
                        height="4"
                        rx="2"
                        stroke="currentColor"
                      />
                      <rect
                        x="8"
                        y="4"
                        width="8"
                        height="4"
                        rx="2"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#283A64] mb-2">
                    Add-Ons (Available Across Services):
                  </h3>
                  <button className="w-full bg-[#aeb8c6] text-[#283A64] font-semibold py-3 rounded-full mb-6 mt-2 cursor-pointer" onClick={handleGetStarted}>
                    Get Started
                  </button>
                  <ul className="w-full text-left text-gray-700 space-y-3 xl:min-h-[57px]">
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Logo Design:
                      $149
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Brand Kit: $199
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Explainer Video
                      (with Voiceover): $299
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Local SEO Boost:
                      $200/month
                    </li>
                    <li className="flex items-center gap-2 border-b-1 pb-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> eCommerce SEO:
                      $300/month
                    </li>
                    <li className="flex items-center gap-2 xl:min-h-[57px]">
                      <FaDotCircle className="text-cyan-400" /> Social Ads
                      Management: $299/month
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Collaborate />
      <Footer />
    </div>
  );
}
