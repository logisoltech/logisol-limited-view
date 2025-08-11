"use client";
import React from "react";
import { font } from "../Font/font";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className={`${font.className} bg-white pt-12 z-20 relative pb-4 px-4 border-t border-gray-200`}
    >
      <div className="max-w-7xl mx-auto px-6 max-sm:w-full">
        <div className="mx-auto grid grid-cols-4 max-md:grid-cols-1 gap-5">
          {/* Left Section */}
          <div className="col-span-1">
            <h2 className="text-4xl md:text-2xl font-semibold text-gray-900 mb-2">
              Let's achieve <span className="text-[#283A64]">excellence</span>
            </h2>
            <p className="text-[#283A64] font-semibold mt-6 mb-6 text-lg">
              Subscribe to our newsletter
            </p>
            <form className="flex items-center mb-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="rounded-full border border-gray-300 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-cyan-300 md:w-auto"
              />
              {/* <button
                type="submit"
                className="-ml-8 z-10 bg-[#283A64] rounded-full w-12 h-12 flex items-center justify-center hover:bg-cyan-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10l9-6 9 6M4 10v10a1 1 0 001 1h14a1 1 0 001-1V10"
                  />
                </svg>
              </button> */}
            </form>
            <div className="flex flex-row items-center justify-center gap-x-2 overflow-visible md:justify-normal">
              <img
                src="/footer/Clutch.webp"
                alt="clutch"
                className="w-24 h-24"
              />
              <img
                src="/footer/trust-pilot.webp"
                alt="trustpilot"
                className="w-24 h-24"
              />
              <img
                src="/footer/google.webp"
                alt="google"
                className="w-24 h-24"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Quick Link
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/custom-web-development-services"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  Website Development
                </a>
              </li>
              <li>
                <a
                  href="/mobile-application-development-services"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="/social-media-marketing-services"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a
                  href="/digital-marketing-services"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="/seo-services-and-strategy"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  SEO
                </a>
              </li>
              <li>
                <a
                  href="/graphics-designing-services"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  Graphic Design
                </a>
              </li>
              <li>
                <a
                  href="/professional-video-editing-services"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  Video Editing
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/faqs"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  Help
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/faqs"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  Term's & Condition
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="text-gray-700 hover:text-cyan-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact & Social Section */}
        <div className="max-w-7xl mx-auto mt-12">
          <div className="relative rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 py-8">
            {/* Gradient background layer */}
            <div
              className="absolute inset-0 z-0"
              style={{
                background: "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                backgroundColor: "transparent",
              }}
            />
            {/* Content */}
            <a
              href="https://logisol.tech"
              className="relative z-10 flex items-center mb-4 md:mb-0"
            >
              <img
                src="/logisol-logo-nav.png"
                alt="Logisol Logo"
                className="w-40 h-14 object-contain"
              />
            </a>
            <div className="relative z-10 flex flex-col md:flex-row items-center md:space-x-8">
              <span className="hidden md:block border-l border-gray-400 h-6 mx-4"></span>
              <div className="flex items-center text-lg font-semibold text-gray-800 mb-2 md:mb-0">
                <FaPhoneAlt className="w-6 h-6 mr-2 text-cyan-400" />
                <a href="tel:+16266716483">(626)-671-6483</a>
              </div>
              <span className="hidden md:block border-l border-gray-400 h-6 mx-4"></span>
              <div className="flex items-center text-lg font-semibold text-gray-800">
                <FaEnvelope className="w-6 h-6 mr-2 text-cyan-400" />
                <a href="mailto:info@logisol.tech">info@logisol.tech</a>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-8 max-sm:w-full">
          <p className="text-gray-700 text-sm mb-4 md:mb-0">
            Copyright © 2021-2025 All Rights Reserved.
          </p>
          <div className="flex space-x-4 max-sm:space-x-1">
            <a
              href="https://www.facebook.com/logisol.tech/"
              className="flex items-center border border-gray-700 rounded-full px-4 max-sm:px-2 py-2 text-[#283a64] hover:bg-[#283a64] hover:text-white transition-colors"
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
              href="https://www.instagram.com/logisol.tech/"
              className="flex items-center border border-gray-700 rounded-full px-4 max-sm:px-2 py-2 text-[#283a64] hover:bg-[#283a64] hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.783 2.225 7.149 2.163 8.415 2.105 8.795 2.094 12 2.094m0-2.163C8.741-.069 8.332-.058 7.052.002 5.782.062 4.515.334 3.541 1.308 2.567 2.282 2.295 3.55 2.233 4.816c-.06 1.28-.071 1.689-.071 5.184s.012 3.904.07 5.184c.062 1.266.334 2.534 1.308 3.508.974.974 2.242 1.246 3.508 1.308 1.28.06 1.689.071 5.184.071s3.904-.012 5.184-.07c1.266-.062 2.534-.334 3.508-1.308.974-.974 1.246-2.242 1.308-3.508.058-1.28.069-1.689.069-5.184s-.012-3.904-.07-5.184c-.062-1.266-.334-2.534-1.308-3.508-.974-.974-2.242-1.246-3.508-1.308C15.647.175 15.267.163 12 .163z" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/logisol-technologies"
              className="flex items-center border border-gray-700 rounded-full px-4 max-sm:px-2 py-2 text-[#283a64] hover:bg-[#283a64] hover:text-white transition-colors"
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
    </footer>
  );
};

export default Footer;
