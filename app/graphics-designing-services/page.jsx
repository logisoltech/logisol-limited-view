"use client";

import Navbar from "../Components/UI/Navbar";
import Footer from "../Components/UI/Footer";
import Collaborate from "../Components/UI/Collaborate";
import { font } from "../Components/Font/font";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { particlesConfig } from "../Components/Data/particlesConfig";
import { useCallback } from "react";
import { headingFont } from "../Components/Font/headingFont";
import Slider from "../Components/UI/Slider";
import ServicesCategory from "../Components/UI/ServicesCategory";
import { useState } from "react";
import {
  FaPlusCircle,
  FaMinusCircle,
  FaLightbulb,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Script from "next/script";

export default function GraphicsDesigningServices() {
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
            Graphic Designing <span className="text-cyan-400">Services</span>
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
          {/* Left: Main Content (Image/Intro + Why Stand Out) */}
          <div className="flex-1 flex flex-col gap-16">
            {/* Image and Description */}
            <div>
              <div className="rounded-3xl overflow-hidden mb-8 shadow-lg">
                <img
                  src="/services/graphic-designing.webp"
                  alt="Graphics Designing Team"
                  className="w-full h-[340px] object-cover object-center"
                />
              </div>
            </div>
            {/* Professional Graphics Design That Helps Your Business Grow */}
            <section>
              <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-6 text-[#283A64]">
                Professional{" "}
                <span className="text-cyan-400">
                  Graphics Design
                  <br className="hidden md:inline" /> That Helps Your Business
                  Grow
                </span>{" "}
                <span className="text-[#283A64]">Stand Out</span>
              </h2>
              <div className="text-sm md:text-md text-gray-900 leading-relaxed">
                <p className="mb-4">
                  At{" "}
                  <span className="text-cyan-400 font-semibold hover:text-black">
                    Logisol Technologies
                  </span>
                  , we create smart and attractive graphic designs that help
                  your brand look professional and trustworthy. Whether you are
                  starting a new business, growing your company, or want to look
                  better online — our design team is ready to turn your ideas
                  into real visuals that speak clearly to your customers.
                </p>
                <p className="mb-4">
                  We design everything from{" "}
                  <span className="text-cyan-400 font-semibold hover:text-black">
                    logos, spamackaging, and branding
                  </span>{" "}
                  to{" "}
                  <span className="text-cyan-400 font-semibold hover:text-black">
                    social media posts, websites, and user interfaces
                  </span>
                  . Our goal is to help your business stand out — and our
                  visuals are often part of larger digital marketing strategies
                  that turn attention into action. From brand awareness to
                  conversion-focused creatives, we support the full funnel. We
                  offer:
                </p>
              </div>
              <ul className="list-disc ml-6 mb-6 text-sm md:text-md text-cyan-400">
                <li>Fast delivery</li>
                <li>Unlimited revisions</li>
                <li>Full design ownership</li>
              </ul>
              <p className="text-sm md:text-md text-gray-900 leading-relaxed">
                Our designs are high quality, affordable, and made just for you.
              </p>
            </section>

            {/* Our Graphic Design Services --- Section */}
            <section>
              <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-3 text-[#283A64]">
                Our{" "}
                <span className="text-cyan-400">Graphic Design Services</span>{" "}
                <span className="text-[#283A64]">Include</span>
              </h2>

              {/* --- Graphic Design Services Cards --- */}
              <div className="w-full">
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">
                  <motion.div
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                  >
                    {/* Card 1: Logo & Brand Identity Design */}
                    <div className="relative">
                      <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-b from-[#a9b2c3] to-[#c8ebf4]" />
                      <div className="relative z-10 rounded-2xl shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                        <div className="flex flex-row gap-2 text-[#283A64] items-center min-h-[90px]">
                          <FaLightbulb className="w-10 h-10" />
                          <div className="flex items-center justify-center min-h-[90px]">
                            <h3 className="text-xl font-bold mb-2 text-center">
                              Logo & Brand Identity Design
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-700 text-base mb-4 text-center min-h-[168px]">
                          We design impactful print materials that bring your
                          brand to life. From brochures, flyers, and business
                          cards to menus, catalogs, and event signage—we help
                          you stand out across all brand touchpoints.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    custom={1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                  >
                    {/* Card 2: Print Design Services */}
                    <div className="relative">
                      <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-b from-[#a9b2c3] to-[#c8ebf4]" />
                      <div className="relative z-10 rounded-2xl shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                        <div className="flex flex-row gap-2 text-[#283A64] items-center min-h-[90px]">
                          <FaLightbulb className="w-10 h-10" />
                          <div className="flex items-center justify-center min-h-[90px]">
                            <h3 className="text-xl font-bold mb-2 text-center">
                              Print Design Services
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-700 text-base mb-4 text-center min-h-[168px]">
                          High-impact print materials—from menus and brochures
                          to event banners. We also offer video editing that
                          transforms raw footage into brand-aligned stories for
                          a consistent visual presence.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    custom={2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                  >
                    {/* Card 3: Web & Digital Graphics */}
                    <div className="relative">
                      <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-b from-[#a9b2c3] to-[#c8ebf4]" />
                      <div className="relative z-10 rounded-2xl shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                        <div className="flex flex-row gap-2 text-[#283A64] items-center min-h-[90px]">
                          <FaLightbulb className="w-10 h-10" />
                          <div className="flex items-center justify-center min-h-[90px]">
                            <h3 className="text-xl font-bold mb-2 text-center">
                              Web & Digital Graphics
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-700 text-base mb-4 text-center min-h-[168px]">
                          From UI design to web banners and social posts, our
                          visuals drive engagement and trust across platforms.
                          Optimized for conversion and user experience.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    custom={3}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                  >
                    {/* Card 4: Infographics & Data Design */}
                    <div className="relative">
                      <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-b from-[#a9b2c3] to-[#c8ebf4]" />
                      <div className="relative z-10 rounded-2xl shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                        <div className="flex flex-row gap-2 text-[#283A64] items-center min-h-[90px]">
                          <FaLightbulb className="w-10 h-10" />
                          <div className="flex items-center justify-center min-h-[90px]">
                            <h3 className="text-xl font-bold mb-2 text-center">
                              Infographics & Data Design
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-700 text-base mb-4 text-center min-h-[168px]">
                          Visual storytelling meets SEO. We design infographics
                          that simplify complex data and boost discoverability,
                          making your content more impactful.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    custom={4}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                  >
                    {/* Card 5: Packaging & Product Design */}
                    <div className="relative">
                      <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-b from-[#a9b2c3] to-[#c8ebf4]" />
                      <div className="relative z-10 rounded-2xl shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                        <div className="flex flex-row gap-2 text-[#283A64] items-center min-h-[90px]">
                          <FaLightbulb className="w-10 h-10" />
                          <div className="flex items-center justify-center min-h-[90px]">
                            <h3 className="text-xl font-bold mb-2 text-center">
                              Packaging & Product Design
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-700 text-base mb-4 text-center min-h-[168px]">
                          Eye-catching packaging that sells. We design boxes,
                          labels, wraps, and product mockups tailored for online
                          and retail visibility.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    custom={5}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                  >
                    {/* Card 6: Industry-Specific Design Services */}
                    <div className="relative">
                      <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-b from-[#a9b2c3] to-[#c8ebf4]" />
                      <div className="relative z-10 rounded-2xl shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                        <div className="flex flex-row gap-2 text-[#283A64] items-center min-h-[90px]">
                          <FaLightbulb className="w-10 h-10" />
                          <div className="flex items-center justify-center min-h-[90px]">
                            <h3 className="text-xl font-bold mb-2 text-center">
                              Industry-Specific Design
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-700 text-base mb-4 text-center min-h-[168px]">
                          Tailored designs for restaurants, real estate,
                          eCommerce, and more. From banners to menus, we create
                          visuals that resonate with your audience.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Why Choose Logisol for Graphic Designing Services? */}
            <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] leading-tight">
              Why Choose <span className="text-cyan-400">Logisol</span> for
              Graphic Designing Services?
            </h2>

            <section className="w-full bg-white flex flex-col md:flex-row lg:items-center justify-between gap-5">
              {/* Left: Heading and Bullet Points */}
              <div className="flex-1 flex flex-col gap-3">
                <ul className="flex flex-col gap-5 text-sm md:text-md text-[#222]">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-6 h-6 flex items-center justify-center rounded-full border-2 border-cyan-300 text-cyan-400">
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="9" />
                      </svg>
                    </span>
                    Here's why hundreds of clients trust us:
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-6 h-6 flex items-center justify-center rounded-full border-2 border-cyan-300 text-cyan-400">
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="9" />
                      </svg>
                    </span>
                    <span>
                      Unlimited Revisions – We revise until you're fully happy
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-6 h-6 flex items-center justify-center rounded-full border-2 border-cyan-300 text-cyan-400">
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="9" />
                      </svg>
                    </span>
                    <span>
                      Fast Delivery – Most designs ready within 1–3 days
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-6 h-6 flex items-center justify-center rounded-full border-2 border-cyan-300 text-cyan-400">
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="9" />
                      </svg>
                    </span>
                    <span>
                      Fixed Prices – No hidden charges, no hourly rates
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-6 h-6 flex items-center justify-center rounded-full border-2 border-cyan-300 text-cyan-400">
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="9" />
                      </svg>
                    </span>
                    <span>
                      Direct Communication – Talk to your designer directly
                    </span>
                  </li>
                </ul>
              </div>
              {/* Right: Image */}
              <div className="flex-shrink-0 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/services/graphic-designing-2.webp"
                  alt="Why Choose Logisol for Graphic Designing Services"
                  className="w-full h-auto object-cover object-center"
                />
              </div>
            </section>

            {/* How Our Design Process Works */}
            <section className="w-full bg-white py-6">
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] mb-3 leading-tight">
                  How Our <span className="text-cyan-400">Design</span> Process
                  Works
                </h2>
                <div
                  className="w-8 h-8 rounded-full bg-cyan-200 mb-4"
                  style={{ marginLeft: "-1.5rem" }}
                ></div>
                <p className="text-sm md:text-md text-gray-800 mb-8">
                  We follow a simple 5-step process to keep things easy, clear,
                  and fast—an approach that also works seamlessly when we
                  collaborate on mobile app projects that require intuitive,
                  user-centered design. From discovery to final delivery, we
                  ensure every visual enhances the app experience.
                </p>
                <ol className="space-y-6">
                  <li>
                    <span className="font-bold text-[#283A64] text-sm md:text-md">
                      1. Discovery
                    </span>
                    <br />
                    <span className="text-gray-800">
                      We learn about your business, your goals, your audience,
                      and competitors.
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-[#283A64] text-sm md:text-md">
                      2. Design Brief
                    </span>
                    <br />
                    <span className="text-gray-800">
                      We plan what you need, what you expect, and when you need
                      it.
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-[#283A64] text-sm md:text-md">
                      3. Concept Creation
                    </span>
                    <br />
                    <span className="text-gray-800">
                      We make a few design samples for you to choose and give
                      feedback.
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-[#283A64] text-sm md:text-md">
                      4. Revisions
                    </span>
                    <br />
                    <span className="text-gray-800">
                      We make changes based on your feedback until you are 100%
                      satisfied.
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-[#283A64] text-sm md:text-md">
                      5. Final Delivery
                    </span>
                    <br />
                    <span className="text-gray-800">
                      We send you all final files—ready to use, with full
                      rights.
                    </span>
                  </li>
                </ol>
                <p className="mt-8 text-gray-700">
                  You are involved in every step — from the first idea to the
                  final design.
                </p>
              </div>
            </section>

            {/* What Clients Are Saying - Testimonials Section */}
            <Testimonials />

            {/* FAQ Section for Web Development */}
            <WebDevFAQ />

            {/* Why Choose Logisol Technologies */}
            <section>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Start With a <span className="text-cyan-400">Free</span> Design
                Consultation
              </h2>
              <p>
                Want to give your brand a new look or launch with style? We’re
                here to help. <br /> Let’s talk about your ideas, goals, and
                deadlines —{" "}
                <span className="text-cyan-400">no commitment needed.</span>
              </p>
              <div className="flex gap-4 mt-4">
                <a href="/contact-us" className="flex items-center gap-2">
                  <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                    Request a Free Quote
                  </button>
                  <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                    <FaArrowRight className="w-5 h-5 text-white" />
                  </div>
                </a>
              </div>
            </section>
          </div>
          {/* Right: Sticky Services Category Card (md and up only) */}
          <div className="hidden lg:block flex-shrink-0 w-full md:w-[350px] lg:w-[400px]">
            <ServicesCategory />
          </div>
        </div>
      </section>
      {/* On mobile, show ServicesCategory at the bottom before Collaborate */}
      <div className="block lg:hidden w-full px-8 md:px-16 lg:px-24 mt-8">
        <ServicesCategory />
      </div>
      <Collaborate />
      <Footer />

      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How fast will I receive my designs?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Usually within 1–3 business days, depending on the project size.",
              },
            },
            {
              "@type": "Question",
              name: "Do you really give unlimited revisions?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes! We keep working on your design until you are happy — no extra charge.",
              },
            },
            {
              "@type": "Question",
              name: "What file types do I get?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You’ll receive AI, PSD, PNG, JPG, and PDF. We can send other formats if needed.",
              },
            },
            {
              "@type": "Question",
              name: "What if I don’t like the first design?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No problem — we’ll share other ideas and revise the design until it’s right for you.",
              },
            },
          ],
        })}
      </Script>

      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Review",
              name: "Review",
              itemReviewed: {
                "@type": "Organization",
                name: "Logisol Technologies",
                url: "https://logisol.tech/graphics-designing-services/",
              },
              author: { "@type": "Person", name: "Emily Carter" },
              reviewBody:
                "Working with Logisol Technologies was a game-changer for our brand visuals. Their graphic design team created clean, professional materials that perfectly aligned with our identity. From brochures to social media creatives, everything looked sharp and on-point.",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              publisher: {
                "@type": "Organization",
                name: "BluePeak Real Estate",
              },
            },
            {
              "@type": "Review",
              name: "Review",
              itemReviewed: {
                "@type": "Organization",
                name: "Logisol Technologies",
                url: "https://logisol.tech/graphics-designing-services/",
              },
              author: { "@type": "Person", name: "Michael Thompson" },
              reviewBody:
                "We hired Logisol for a complete branding package, and they absolutely delivered. The designs were fresh, modern, and visually compelling. Their team is skilled, responsive, and genuinely understands how design drives user engagement.",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              publisher: {
                "@type": "Organization",
                name: "Sparkline Tech Solutions",
              },
            },
            {
              "@type": "Review",
              name: "Review",
              itemReviewed: {
                "@type": "Organization",
                name: "Logisol Technologies",
                url: "https://logisol.tech/graphics-designing-services/",
              },
              author: { "@type": "Person", name: "Sarah Mitchell" },
              reviewBody:
                "Our company needed a range of graphics for digital courses and promotional content. Logisol’s designers quickly understood our vision and created assets that were both beautiful and functional. Their creativity and attention to detail truly stood out.",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              publisher: {
                "@type": "Organization",
                name: "BrightPath Learning Co.",
              },
            },
          ],
        })}
      </Script>

      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Graphics Designing Services",
          description:
            "Boost your brand with expert graphics designing services. From custom logos to marketing visuals, we deliver designs that attract, engage, and convert.",
          provider: {
            "@type": "Organization",
            name: "Logisol Technologies",
            url: "https://logisol.tech/graphics-designing-services/",
            logo: "https://logisol.tech/logisol-logo-nav.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-626-671-6483",
              contactType: "Customer Service",
              email: "info@logisol.tech",
            },
          },
          serviceType: "Graphics Designing Services",
          url: "https://logisol.tech/graphics-designing-services/",
          areaServed: {
            "@type": "Country",
            name: "United States",
          },
          availableChannel: {
            "@type": "ServiceChannel",
            serviceLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
            },
          },
        })}
      </Script>

      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Graphics Designing Services",
          image: "https://logisol.tech/logisol-logo-nav.png",
          description:
            "Boost your brand with expert graphics designing services. From custom logos to marketing visuals, we deliver designs that attract, engage, and convert.",
          brand: {
            "@type": "Organization",
            name: "Logisol Technologies",
            logo: "https://logisol.tech/logisol-logo-nav.png",
            url: "https://logisol.tech/graphics-designing-services/",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: 2,
            bestRating: "5",
            worstRating: "1",
          },
          url: "https://logisol.tech/graphics-designing-services/",
          review: [
            {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "4.9",
                bestRating: "5",
              },
              author: {
                "@type": "Organization",
                name: "Clutch",
                sameAs: "https://clutch.co/profile/logisol-technologies",
              },
              reviewBody:
                "Highly rated for creative and professional graphic design solutions on Clutch. Their design work has consistently impressed clients across industries.",
            },
            {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "4.9",
                bestRating: "5",
              },
              author: {
                "@type": "Organization",
                name: "Trustpilot",
                sameAs: "https://www.trustpilot.com/review/logisoltech.com",
              },
              reviewBody:
                "Logisol delivers visually stunning designs that align perfectly with our brand. Exceptional attention to detail and client support, as reflected in our Trustpilot reviews.",
            },
          ],
        })}
      </Script>
    </div>
  );
}

function Testimonials() {
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

  const testimonials = [
    {
      quote:
        "Working with Logisol Technologies was a game-changer for our brand visuals. Their graphic design team created clean, professional materials that perfectly aligned with our identity. From brochures to social media creatives, everything looked sharp and on-point.",
      name: "Emily Carter",
      title: "Marketing Director, BluePeak Real Estate",
    },
    {
      quote:
        "We hired Logisol for a complete branding package, and they absolutely delivered. The designs were fresh, modern, and visually compelling. Their team is skilled, responsive, and genuinely understands how design drives user engagement.",
      name: "Michael Thompson",
      title: "Founder & CEO, Sparkline Tech Solutions",
    },
    {
      quote:
        "Our company needed a range of graphics for digital courses and promotional content. Logisol’s designers quickly understood our vision and created assets that were both beautiful and functional. Their creativity and attention to detail truly stood out.",
      name: "Sarah Mitchell",
      title: "Content & Creative Lead, BrightPath Learning Co.",
    },
  ];

  return (
    <section className="w-full">
      <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] mb-8">
        What <span className="text-cyan-400">Clients</span> Are Saying
      </h2>
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="rounded-2xl border border-gray-300 bg-gradient-to-br from-[#e9eaf3] to-[#d3d7e6] shadow-lg p-8"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, idx) => (
                <FaStar key={idx} className="text-yellow-400 text-xl mx-0.5" />
              ))}
            </div>
            <p className="text-gray-800 text-sm md:text-md mb-6 text-center">
              {t.quote}
            </p>
            <div className="text-center mt-4">
              <div className="font-bold text-lg text-[#283A64]">{t.name}</div>
              <div className="text-gray-600 text-sm">{t.title}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function WebDevFAQ() {
  const faqs = [
    {
      question: "How fast will I receive my designs?",
      answer:
        "Usually within 1–3 business days, depending on the project size.",
    },
    {
      question: "Do you really give unlimited revisions?",
      answer:
        "Yes! We keep working on your design until you are happy — no extra charge.",
    },
    {
      question: "What file types do I get?",
      answer:
        "You’ll receive AI, PSD, PNG, JPG, and PDF. We can send other formats if needed.",
    },
    {
      question: "What if I don’t like the first design?",
      answer:
        "No problem — we’ll share other ideas and revise the design until it’s right for you.",
    },
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="w-full max-w-4xl mx-auto mt-16 mb-8">
      <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] mb-8 text-center">
        Frequently Asked Questions (<span className="text-cyan-400">FAQs</span>)
      </h2>
      <div className="flex flex-col gap-5">
        {faqs.map((faq, idx) => {
          const open = openIdx === idx;
          return (
            <div
              key={idx}
              className={`border border-gray-300 rounded-2xl bg-white transition-all duration-300 ${
                open ? "shadow-lg" : ""
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                onClick={() => setOpenIdx(open ? null : idx)}
                aria-expanded={open}
                aria-controls={`faq-panel-${idx}`}
              >
                <span className="font-bold text-lg md:text-xl text-[#283A64]">
                  {faq.question}
                </span>
                <span className="ml-4">
                  {open ? (
                    <FaMinusCircle className="text-[#283A64] text-2xl" />
                  ) : (
                    <FaPlusCircle className="text-cyan-400 text-2xl" />
                  )}
                </span>
              </button>
              <div
                id={`faq-panel-${idx}`}
                className={`px-6 pb-5 text-gray-800 text-sm md:text-md transition-all duration-300 ${
                  open ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
