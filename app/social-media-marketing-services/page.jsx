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
import ServicesCategory from "../Components/UI/ServicesCategory";
import Collaborate from "../Components/UI/Collaborate";
import { FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import Script from "next/script";

export default function SocialMediaMarketingServices() {
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
            className={`${headingFont.className} text-[80px] max-lg:text-[60px] max-md:text-[30px] font-extrabold text-[#283A64] text-center mb-6`}
          >
            Social Media{" "}
            <span className="text-cyan-400">
              <br />
              Marketing Solutions
            </span>
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
                  src="/services/social-media.webp"
                  alt="Social Media Marketing Team"
                  className="w-full h-[500px] object-cover object-center"
                />
              </div>
              <div className="leading-relaxed">
                <p className="mb-4 text-sm md:text-md text-[#222]">
                  Social media is where your customers live—and your brand
                  should too. At{" "}
                  <a
                    href="/"
                    className="text-cyan-400 font-semibold hover:underline"
                  >
                    Logisol Technologies
                  </a>
                  , we help businesses establish a powerful presence on
                  platforms like Facebook, Instagram, LinkedIn, Twitter, and
                  TikTok. From content strategy to daily posting and performance
                  tracking, we manage your brand's voice—just like top real
                  estate social media marketing companies do for property
                  listings and grow your digital community with intention.
                </p>
                <p className="mb-4 text-sm md:text-md text-[#222]">
                  Whether you're starting from scratch or growing a startup, we
                  aim to rank among the best social media marketing companies
                  for small business. Our{" "}
                  <span className="text-cyan-400 font-semibold hover:underline">
                    Social Media Marketing (SMM)
                  </span>{" "}
                  services are crafted to tell your story, build trust, and
                  drive action.
                </p>
                <div className="flex flex-row gap-4 mt-4">
                  <a href="/contact-us" className="flex items-center gap-2">
                    <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                      Let's talk
                    </button>
                    <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                      <FaArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* What You Get in Our Social Media Services */}
            <section>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                What You Get in Our{" "}
                <span className="text-cyan-400">Social Media </span>
                Services
              </h2>
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-bold mb-1">
                    1. Social Media Strategy Planning
                  </h2>
                  <p className="text-sm md:text-md mb-3">
                    Every success starts with a good plan. We first understand
                    your business goals, customer interests, what's happening in
                    your industry, and what your competitors are doing. After
                    this, we create a strong and clear plan.
                  </p>
                  <p className="text-sm md:text-md mb-3">
                    This includes everything needed for niche campaigns like med
                    spa social media marketing, such as:
                  </p>
                  <ul className="text-sm pl-8 mb-1 list-disc">
                    <li>Choosing what type of content to post</li>
                    <li>
                      Picking the right social media platforms for your business
                    </li>
                    <li>Setting goals (KPIs) to track your success</li>
                    <li>Planning your social media campaigns</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-bold mb-1">
                    2. Creating and Posting Content
                  </h2>
                  <p className="text-sm md:text-md mb-3">
                    We create eye-catching and creative content such as:
                  </p>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>Images</li>
                    <li>Carousel posts (multiple images or slides)</li>
                    <li>Short videos and reels</li>
                    <li>Stories for Facebook and Instagram</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    As a trusted restaurant social media marketing agency, we
                    also write simple, attractive captions and add hashtags to
                    reach more people and fill your tables. We schedule your
                    posts strategically to align with your peak engagement
                    hours—especially for service businesses like social media
                    marketing for salons targeting appointments and
                    walk-ins—especially for businesses that rely on user
                    interaction, like those with tailored{" "}
                    <a
                      className="cursor-pointer"
                      href="/custom-web-development-services"
                    >
                      {" "}
                      digital interfaces and custom web experiences
                    </a>
                    .
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-bold mb-1">
                    3. Managing Your Social Media Platforms
                  </h2>
                  <p className="text-sm md:text-md mb-3">
                    We take care of your social media accounts completely. This
                    includes:
                  </p>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>
                      Updating profile photos, banners, and business details
                    </li>
                    <li>Answering messages and comments</li>
                    <li>Replying to reviews</li>
                    <li>Engaging with your followers regularly</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    We help keep your page active, professional, and
                    trustworthy—whether you're a growing startup or need social
                    media marketing for home inspectors aiming to gain local
                    leads.
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-bold mb-1">
                    4. Paid Advertising on Social Media
                  </h2>
                  <p className="text-sm md:text-md mb-3">
                    We run paid ads on platforms like Facebook, Instagram,
                    LinkedIn, X (Twitter), TikTok, and YouTube. Our ad services
                    include:
                  </p>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>Creating designs and videos for ads</li>
                    <li>
                      Choosing the right people to show ads to—based on insights
                      from our expert LinkedIn marketing consultants
                    </li>
                    <li>Testing different ad styles</li>
                    <li>
                      Managing your ad budget through flexible Facebook
                      marketing services packages
                    </li>
                    <li>Tracking ad performance to get the best results</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-bold mb-1">
                    5. Researching Trends and Hashtags
                  </h2>
                  <p className="text-sm md:text-md mb-3">
                    We keep your content updated by checking:
                  </p>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>What people are talking about online</li>
                    <li>What your audience likes to see</li>
                    <li>How the platforms are changing</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    We use smart and trending hashtags so more people can
                    discover your posts.
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-bold mb-1">
                    6. Monthly Reports and Results
                  </h2>
                  <p className="text-sm md:text-md mb-3">
                    Every month, we give you a full report showing reach,
                    engagement, and clicks—whether you're subscribed to a full
                    social media marketing package or starting small. Our
                    performance tracking aligns closely with your website's
                    <a
                      className="cursor-pointer"
                      href="/seo-services-and-strategy"
                    >
                      {" "}
                      search visibility and long-term SEO growth{" "}
                    </a>
                    —ensuring your digital marketing efforts are always working
                    together:
                  </p>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>
                      How many people saw your posts (reach & impressions)
                    </li>
                    <li>
                      How people interacted with your posts (likes, comments,
                      shares)
                    </li>
                    <li>How many people clicked or bought something</li>
                    <li>
                      How much your ads cost, including insights into the cost
                      of Instagram marketing, and how well they performed
                    </li>
                  </ul>
                </div>
                <p className="text-sm md:text-md mb-3">
                  These reports help us improve and grow your results every
                  month, and we make sure your overall{" "}
                  <a
                    className="cursor-pointer"
                    href="/digital-marketing-services"
                  >
                    {" "}
                    digital marketing strategy stays cohesive
                  </a>{" "}
                  across platforms—combining social, ads, and performance.
                </p>
              </div>
              <div className="flex flex-row gap-4 mt-4">
                <a href="/contact-us" className="flex items-center gap-2">
                  <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                    Free Consultation
                  </button>
                  <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                    <FaArrowRight className="w-5 h-5 text-white" />
                  </div>
                </a>
              </div>
            </section>

            {/* Social Media Process Section */}
            <section className="w-full">
              <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-6 text-[#283A64]">
                Our Step-by-Step{" "}
                <span className="text-cyan-400">Social Media</span> Process
              </h2>
              <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">
                {/* Card 1: Audit & Discovery */}
                <motion.div
                  custom={0}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                >
                  <div className="relative">
                    <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-b from-[#a9b2c3] to-[#c8ebf4]" />
                    <div className="relative z-10 rounded-2xl shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                      <div className="flex flex-row gap-2 text-[#283A64] items-center min-h-[90px]">
                        <div className="min-h-[90px] flex items-center justify-center">
                          <h3 className="text-xl font-bold mb-2 text-center">
                            Audit & Discovery
                          </h3>
                        </div>
                        <FaLightbulb className="w-10 h-10" />
                      </div>
                      <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[144px] max-xl:min-h-[264px] max-md:min-h-auto">
                        We start by reviewing your current social media
                        presence, focusing on your brand's voice and style, your
                        target audience, and the performance of past posts. This
                        helps us identify what's effective and what areas need
                        improvement.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2: Strategy & Content Planning */}
                <motion.div
                  custom={1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                >
                  <div className="relative">
                    <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-b from-[#a9b2c3] to-[#c8ebf4]" />
                    <div className="relative z-10 rounded-2xl shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                      <div className="flex flex-row gap-2 text-[#283A64] items-center min-h-[90px]">
                        <div className="min-h-[90px] flex items-center justify-center">
                          <h3 className="text-xl font-bold mb-2 text-center">
                            Strategy & Content Planning
                          </h3>
                        </div>
                        <FaLightbulb className="w-10 h-10" />
                      </div>
                      <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[144px] max-xl:min-h-[264px] max-md:min-h-auto">
                        We handle all aspects of planning—what and when to post,
                        ad strategy and budget, creative concepts tailored to
                        your business, and setting clear, measurable goals to
                        achieve through social media.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 3: Visual Design & Captions */}
                <motion.div
                  custom={2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                >
                  <div className="relative">
                    <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-b from-[#a9b2c3] to-[#c8ebf4]" />
                    <div className="relative z-10 rounded-2xl shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                      <div className="flex flex-row gap-2 text-[#283A64] items-center min-h-[90px]">
                        <div className="min-h-[90px] flex items-center justify-center">
                          <h3 className="text-xl font-bold mb-2 text-center">
                            Visual Design & Captions
                          </h3>
                        </div>
                        <FaLightbulb className="w-10 h-10" />
                      </div>
                      <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[144px] max-xl:min-h-[264px] max-md:min-h-auto">
                        We plan everything for your social media success—what to
                        post and when, ad strategy and budgeting, creative ideas
                        tailored to your brand, and clear goals to drive
                        results.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 4: Posting & Customer Engagement */}
                <motion.div
                  custom={3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                >
                  <div className="relative">
                    <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-b from-[#a9b2c3] to-[#c8ebf4]" />
                    <div className="relative z-10 rounded-2xl shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                      <div className="flex flex-row gap-2 text-[#283A64] items-center min-h-[90px]">
                        <div className="min-h-[90px] flex items-center justify-center">
                          <h3 className="text-xl font-bold mb-2 text-center">
                            Posting & Customer Engagement
                          </h3>
                        </div>
                        <FaLightbulb className="w-10 h-10" />
                      </div>
                      <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[144px] max-xl:min-h-[264px] max-md:min-h-auto">
                        Our creative team designs stunning images and
                        videos—backed by{" "}
                        <a
                          className="cursor-pointer"
                          href="/graphics-designing-services"
                        >
                          {" "}
                          professional brand-focused graphic work
                        </a>{" "}
                        that grab attention and enhance brand recall across your
                        social media posts. Every post is crafted to drive
                        clicks, comments, shares, and even sales.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 5: Tracking & Improving */}
                <motion.div
                  custom={4}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                >
                  <div className="relative">
                    <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-b from-[#a9b2c3] to-[#c8ebf4]" />
                    <div className="relative z-10 rounded-2xl shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                      <div className="flex flex-row gap-2 text-[#283A64] items-center min-h-[90px]">
                        <div className="min-h-[90px] flex items-center justify-center">
                          <h3 className="text-xl font-bold mb-2 text-center">
                            Tracking & Improving
                          </h3>
                        </div>
                        <FaLightbulb className="w-10 h-10" />
                      </div>
                      <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[144px] max-xl:min-h-[264px] max-md:min-h-auto">
                        We publish your content across all platforms and go
                        beyond just posting—we respond to messages, answer
                        questions, and actively build strong relationships with
                        your followers. For brands using apps to engage users
                        directly, we align your social activity with{" "}
                        <a
                          className="cursor-pointer"
                          href="/mobile-application-development-services"
                        >
                          {" "}
                          mobile application engagement strategies
                        </a>
                        <a
                          className="cursor-pointer"
                          href="/mobile-application-development-services"
                        >
                          {" "}
                          to drive deeper connections and in-app actions.
                        </a>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-row gap-4 mt-8">
                <a href="/contact-us" className="flex items-center gap-2">
                  <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                    Book a Free Strategy Call
                  </button>
                  <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                    <FaArrowRight className="w-5 h-5 text-white" />
                  </div>
                </a>
              </div>
            </section>

            {/* Platforms We Work With --- Section */}
            <section>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Platforms <span className="text-cyan-400">We Work With</span>
              </h2>
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-[#283A64] mb-1">
                    Facebook
                  </h2>
                  <p className="text-sm md:text-md mb-3">
                    We manage both free posts and paid ads under our
                    comprehensive Facebook global marketing services. We also
                    handle Facebook groups and retarget people who already
                    visited your page or website.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#283A64] mb-1">
                    Instagram
                  </h2>
                  <p className="text-sm md:text-md mb-3">
                    We make Reels, run hashtag campaigns, do influencer
                    collaborations, and create stories—especially for niches
                    like Instagram marketing for restaurants.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#283A64] mb-1">
                    LinkedIn
                  </h2>
                  <p className="text-sm md:text-md mb-3">
                    As a results-driven linkedin-marketing-agency, we focus on
                    business-to-business (B2B) content, professional branding,
                    and lead generation.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#283A64] mb-1">
                    Twitter (X)
                  </h2>
                  <p className="text-sm md:text-md mb-3">
                    We post timely updates, follow trends, and engage with
                    current conversations.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#283A64] mb-1">
                    TikTok
                  </h2>
                  <p className="text-sm md:text-md mb-3">
                    We create fun and trending short videos, often powered by
                    <a
                      className="cursor-pointer"
                      href="/professional-video-editing-services"
                    >
                      {" "}
                      expert video editing and storytelling techniques
                    </a>{" "}
                    that help your brand stand out on platforms like TikTok and
                    YouTube.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#283A64] mb-1">
                    YouTube
                  </h2>
                  <p className="text-sm md:text-md mb-3">
                    We help optimize your channel, plan video content, and
                    increase viewer engagement.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 mt-8">
                <a
                  href="/social-media-marketing-services"
                  className="flex items-center gap-2"
                >
                  <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                    Boost my socials
                  </button>
                  <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                    <FaArrowRight className="w-5 h-5 text-white" />
                  </div>
                </a>
              </div>
            </section>

            {/* What Clients Are Saying - Testimonials Section */}
            <Testimonials />

            {/* FAQ Section for Web Development */}
            <WebDevFAQ />

            {/* Let's Work Together --- Section */}
            <section>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Let's Work Together{" "}
              </h2>
              <p className="text-sm md:text-md text-[#222]">
                Your brand deserves attention and real results. At{" "}
                <span className="text-cyan-400">Logisol Technologies</span>, we
                do more than just make content—we help your business grow. We
                plan smartly, post regularly, and help you connect with the
                right people online. <br /> <br /> Ready to amplify your social
                presence? Let’s talk.
              </p>
              <div className="flex flex-row gap-4 mt-4 max-sm:flex-col">
                <a href="/contact-us" className="flex items-center gap-2">
                  <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                    info@logisol.tech
                  </button>
                  <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                    <FaArrowRight className="w-5 h-5 text-white" />
                  </div>
                </a>
                <a href="/contact-us" className="flex items-center gap-2">
                  <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                    +92-321-321-3444
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
              name: "Why should I work with a social media agency?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We bring experience, planning, and daily management. You save time, and we help you grow with the latest trends and proven strategies.",
              },
            },
            {
              "@type": "Question",
              name: "Do I need to give you content?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No, we can create everything—from images and videos to writing captions. If you have any photos, videos, or ideas, we are happy to use them too.",
              },
            },
            {
              "@type": "Question",
              name: "Do you manage both free and paid posts?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we handle both. Free posts help with trust and brand building, while paid ads help get leads and sales.",
              },
            },
            {
              "@type": "Question",
              name: "Which platforms are best for my business?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "It depends on your business type, who your customers are, and your goals. We’ll suggest the best ones after understanding your needs.",
              },
            },
            {
              "@type": "Question",
              name: "How do you check if the strategy is working?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We track key numbers like how many people saw your post, how many followed, clicked, or bought something. These results help us plan better.",
              },
            },
            {
              "@type": "Question",
              name: "Can I check the content before it goes live?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. You will see every post before we publish. You can approve or ask for changes.",
              },
            },
            {
              "@type": "Question",
              name: "How much does it cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The cost depends on what you need—whether it's just posts, ads, or full social media management. Contact us for a custom quote.",
              },
            },
          ],
        })}
      </Script>

      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Social Media Marketing Services | Grow Your Brand Fast",
          description:
            "Reach your audience where it matters. Our social media marketing services help you build trust, increase traffic, and turn followers into loyal customers.",
          serviceType: "Social Media Marketing Solutions",
          url: "https://logisol.tech/social-media-marketing-services/",
          image: "https://logisol.tech/logisol-logo-nav.png",
          provider: {
            "@type": "Organization",
            name: "Logisol Technologies",
            url: "https://logisol.tech/social-media-marketing-services/",
            logo: "https://logisol.tech/logisol-logo-nav.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-626-671-6483",
              email: "info@logisol.tech",
              contactType: "customer support",
              areaServed: "US",
            },
          },
          areaServed: {
            "@type": "Country",
            name: "United States",
          },
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
                url: "https://logisol.tech/social-media-marketing-services/",
              },
              author: { "@type": "Person", name: "Tyler Grant" },
              reviewBody:
                "Logisol didn’t just schedule posts — they built a complete social strategy around our goals. Engagement rates are up, and our DMs are now full of genuine inquiries. Their creative direction and analytics support made all the difference.",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              publisher: {
                "@type": "Organization",
                name: "VistaWorks Interiors",
              },
            },
            {
              "@type": "Review",
              name: "Review",
              itemReviewed: {
                "@type": "Organization",
                name: "Logisol Technologies",
                url: "https://logisol.tech/social-media-marketing-services/",
              },
              author: { "@type": "Person", name: "Maya Singh" },
              reviewBody:
                "We struggled with consistency and growth on social media until we started working with Logisol. They brought structure, creativity, and a clear voice to our brand online. Our follower count and brand recognition have grown steadily since.",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              publisher: { "@type": "Organization", name: "WellNest Naturals" },
            },
            {
              "@type": "Review",
              name: "Review",
              itemReviewed: {
                "@type": "Organization",
                name: "Logisol Technologies",
                url: "https://logisol.tech/social-media-marketing-services/",
              },
              author: { "@type": "Person", name: "Lena Brooks" },
              reviewBody:
                "Partnering with Logisol completely transformed our social presence. Their team crafted a content strategy that actually spoke to our audience and boosted engagement across all platforms. We've seen a noticeable increase in followers turning into real customers.",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              publisher: {
                "@type": "Organization",
                name: "FreshAura Skincare",
              },
            },
          ],
        })}
      </Script>

      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Social Media Marketing Solutions",
          image: "https://logisol.tech/logisol-logo-nav.png",
          description:
            "Reach your audience where it matters. Our social media marketing services help you build trust, increase traffic, and turn followers into loyal customers.",
          brand: {
            "@type": "Organization",
            name: "Logisol Technologies",
            logo: "https://logisol.tech/logisol-logo-nav.png",
            url: "https://logisol.tech",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: 2,
            bestRating: "5",
            worstRating: "1",
          },
          url: "https://logisol.tech/social-media-marketing-services/",
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
                "Rated highly for outstanding social media marketing results. See more: https://clutch.co/profile/logisol-technologies",
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
                "Clients appreciate the impact of Logisol’s social media marketing. See more: https://www.trustpilot.com/review/logisoltech.com",
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
        "Logisol didn’t just schedule posts — they built a complete social strategy around our goals. Engagement rates are up, and our DMs are now full of genuine inquiries. Their creative direction and analytics support made all the difference.",
      name: "Tyler Grant",
      title: "Marketing Lead, VistaWorks Interiors",
    },
    {
      quote:
        "We struggled with consistency and growth on social media until we started working with Logisol. They brought structure, creativity, and a clear voice to our brand online. Our follower count and brand recognition have grown steadily since.",
      name: "Maya Singh",
      title: "Co-Founder, WellNest Naturals",
    },
    {
      quote:
        "Partnering with Logisol completely transformed our social presence. Their team crafted a content strategy that actually spoke to our audience and boosted engagement across all platforms. We've seen a noticeable increase in followers turning into real customers.",
      name: "Lena Brooks",
      title: "Brand Manager, FreshAura Skincare",
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
      question: "Why should I work with a social media agency?",
      answer:
        "We bring experience, planning, and daily management. You save time, and we help you grow with the latest trends and proven strategies.",
    },
    {
      question: "Do I need to give you content?",
      answer:
        "No, we can create everything—from images and videos to writing captions. If you have any photos, videos, or ideas, we are happy to use them too.",
    },
    {
      question: "Do you manage both free and paid posts?",
      answer:
        "Yes, we handle both. Free posts help with trust and brand building, while paid ads help get leads and sales.",
    },
    {
      question: "Which platforms are best for my business?",
      answer:
        "It depends on your business type, who your customers are, and your goals. We’ll suggest the best ones after understanding your needs.",
    },
    {
      question: "How do you check if the strategy is working?",
      answer:
        "We track key numbers like how many people saw your post, how many followed, clicked, or bought something. These results help us plan better.",
    },
    {
      question: "Can I check the content before it goes live?",
      answer:
        "Yes. You will see every post before we publish. You can approve or ask for changes.",
    },
    {
      question: "How much does it cost?",
      answer:
        "The cost depends on what you need—whether it's just posts, ads, or full social media management. Contact us for a custom quote.",
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
                className={`px-6 pb-5 text-gray-800 text-base transition-all duration-300 ${
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
