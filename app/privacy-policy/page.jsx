"use client";

import { useState } from "react";
import {
  FaPlusCircle,
  FaMinusCircle,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";
import Navbar from "../Components/UI/Navbar";
import Footer from "../Components/UI/Footer";
import { font } from "../Components/Font/font";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { particlesConfig } from "../Components/Data/particlesConfig";
import { useCallback } from "react";
import { headingFont } from "../Components/Font/headingFont";
import Slider from "../Components/UI/Slider";
import Collaborate from "../Components/UI/Collaborate";
import { FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        type: "spring",
      },
    }),
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
            Privacy <span className="text-cyan-400">Policy </span>
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
      <section className="relative w-full bg-white flex flex-col md:flex-row items-start justify-center max-lg:p-6 lg:px-8 lg:py-8">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Left: Main Content */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Description */}
            <div className="text-md md:text-sm text-gray-900 leading-relaxed">
              <p className="mb-4">
                At <span className="text-cyan-400"> Logisol Technologies</span>,
                we are committed to protecting your privacy and ensuring that
                your personal information is handled in a safe and responsible
                manner. This Privacy Policy explains how we collect, use, and
                protect the information you provide to us when interacting with
                our website and services.
              </p>
            </div>

            {/* Privacy Policy Sections */}
            <section>
              <div className="space-y-6">
                {/* 1. Personal Information We Collect */}
                <div>
                  <h1 className="text-xl font-bold mb-1">1. Personal Information We Collect</h1>
                  <p className="text-sm md:text-md mb-3">
                    When you interact with our website, we automatically collect certain types of information. This may include:
                  </p>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>Content you view</li>
                    <li>Date and time of your visits</li>
                    <li>Products or services you interact with or purchase</li>
                    <li>IP address and associated location</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    We use this information to provide you with a more personalized experience, including relevant advertisements (commonly known as Retargeting). This is statistical data and does not personally identify you.
                  </p>
                </div>

                {/* 2. Cookies and Retargeting */}
                <div>
                  <h1 className="text-xl font-bold mb-1">2. Cookies and Retargeting</h1>
                  <p className="text-sm md:text-md mb-3">
                    When you browse https://logisol.tech/, advertising cookies may be placed on your computer. These cookies allow us (via advertising partners) to show you retargeted ads on other websites based on your past interactions with us.
                  </p>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>These technologies do not collect personal data like your name, email, phone number, or address.</li>
                    <li>You can opt out of this type of advertising by visiting AdRoll's opt-out page or the respective ad partner's website.</li>
                  </ul>
                  
                  <h2 className="text-lg font-bold mb-1 mt-4">a) Personally Identifiable Information (PII)</h2>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>Logisol Technologies does not rent or sell your personally identifiable information to third parties.</li>
                    <li>We may store your personal information on servers or databases hosted by third-party providers, but under our direct control.</li>
                    <li>Any personal information you voluntarily make public on our site (e.g., blog comments) will be visible to others. If you remove it, cached versions may still exist.</li>
                    <li>Our blog or comment sections may be managed by third-party platforms. Logisol Technologies does not control how they collect or use your data. Please refer to their privacy policies.</li>
                    <li>Information submitted through our contact forms will be used by our internal team solely for communication purposes.</li>
                  </ul>

                  <h2 className="text-lg font-bold mb-1 mt-4">b) Non-Personally Identifiable Information</h2>
                  <p className="text-sm md:text-md mb-3">
                    We may share anonymized data, such as:
                  </p>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>Usage patterns</li>
                    <li>Page visits</li>
                    <li>Device/platform types</li>
                    <li>Referring/exit pages</li>
                    <li>Click statistics</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    This information may be shared with third parties to help improve our services and understand general usage trends.
                  </p>
                </div>

                {/* 3. Data Security */}
                <div>
                  <h1 className="text-xl font-bold mb-1">3. Data Security</h1>
                  <p className="text-sm md:text-md mb-3">
                    We implement secure technologies and encryption standards to ensure your personal information is protected during data collection and transmission. This includes any sensitive data such as:
                  </p>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>Bank details</li>
                    <li>Credit/debit card information</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    Our secure servers and industry-standard safeguards help minimize unauthorized access and misuse of your personal data.
                  </p>
                </div>

                {/* 4. Changes to This Policy */}
                <div>
                  <h1 className="text-xl font-bold mb-1">4. Changes to This Policy</h1>
                  <p className="text-sm md:text-md mb-3">
                    Logisol Technologies may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Effective Date." We encourage you to review this policy periodically to stay informed about how we protect your information.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Collaborate />
      <Footer />
    </div>
  );
}
