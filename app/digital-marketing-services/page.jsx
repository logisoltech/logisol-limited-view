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
import { motion } from "framer-motion";
import Script from "next/script";

export default function DigitalMarketingServices() {
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
            Digital <span className="text-cyan-400">Marketing </span>
            Services
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
          <div className="flex-1 flex flex-col gap-10">
            {/* Image and Description */}
            <div>
              <div className="rounded-3xl overflow-hidden mb-8 shadow-lg">
                <img
                  src="/services/digital-marketing.webp"
                  alt="Social Media Marketing Team"
                  className="w-full h-[340px] object-cover object-center"
                />
              </div>
              <div className="text-md md:text-sm text-gray-900 leading-relaxed">
                <p className="mb-4">
                  <span className="text-cyan-400">
                    Welcome to Logisol Technologies
                  </span>{" "}
                  – where we focus on real results, not just empty numbers. We{" "}
                  <a
                    href="/custom-web-development-services"
                    className="cursor-pointer"
                  >
                    build tailored digital platforms
                  </a>{" "}
                  that help your business grow faster, attract the right
                  customers, and generate better profits.
                </p>
                <p className="mb-4">
                  We partner with startups, small businesses, and enterprises to{" "}
                  <a
                    href="/mobile-application-development-services"
                    className="cursor-pointer"
                  >
                    build mobile apps that streamline operations and engage
                    users
                  </a>
                  . If you're tired of wasting time on marketing that doesn't
                  work, our affordable digital marketing services give you a
                  clear plan to improve traffic, leads, and sales.
                </p>
              </div>
            </div>

            {/* What We Offer in Digital Marketing --- Section */}
            <section>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px]    mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                What we <span className="text-cyan-400">Offer</span> in Digital
                Marketing
              </h2>
              <div className="space-y-6">
                {/* 1. Search Engine Optimization (SEO) */}
                <div>
                  <h2 className="text-lg font-bold mb-1">
                    Search Engine Optimization (SEO)
                  </h2>
                  <p className="text-md md:text-sm mb-3">
                    Rank higher on Google, get discovered by new customers, and
                    build long-term authority. We cover everything from
                    technical fixes to content improvement in our{" "}
                    <a
                      href="/seo-services-and-strategy"
                      className="cursor-pointer"
                    >
                      search visibility strategies{" "}
                    </a>{" "}
                    to boost your entire online presence.
                  </p>
                </div>

                {/* 2. Pay-Per-Click Advertising (Google & Meta Ads) */}
                <div>
                  <h2 className="text-lg font-bold mb-1">
                    Pay-Per-Click Advertising (Google & Meta Ads)
                  </h2>
                  <p className="text-md md:text-sm mb-3">
                    Instant visibility through smart, targeted ad campaigns. We
                    manage everything—keyword research, ad copy, bidding, and
                    A/B testing—to maximize your return on ad spend (ROAS).
                  </p>
                </div>

                {/* 3. Content Marketing */}
                <div>
                  <h2 className="text-lg font-bold mb-1">Content Marketing</h2>
                  <p className="text-md md:text-sm mb-3">
                    We craft compelling blogs, guides, product descriptions, and
                    lead magnets tailored to your audience. Our full service
                    content-marketing approach builds trust, boosts SEO, and
                    keeps your audience engaged across every touchpoint.
                  </p>
                </div>

                {/* 4. Email Marketing */}
                <div>
                  <h2 className="text-lg font-bold mb-1">Email Marketing</h2>
                  <p className="text-md md:text-sm mb-3">
                    Build strong relationships and nurture leads with
                    personalized, automated email campaigns. From welcome
                    sequences to newsletters and promotions—we create content
                    that converts.
                  </p>
                </div>

                {/* 5. Social Media Marketing */}
                <div>
                  <h2 className="text-lg font-bold mb-1">
                    Social Media Marketing
                  </h2>
                  <p className="text-md md:text-sm mb-3">
                    Amplify your reach and engagement on platforms like
                    Facebook, Instagram, LinkedIn, and Twitter. We{" "}
                    <a
                      href="/social-media-marketing-services"
                      className="cursor-pointer"
                    >
                      strategically plan and manage your content presence
                    </a>{" "}
                    to engage audiences and build brand trust online.
                  </p>
                </div>

                {/* 6. Conversion Rate Optimization (CRO) */}
                <div>
                  <h2 className="text-lg font-bold mb-1">
                    Conversion Rate Optimization (CRO)
                  </h2>
                  <p className="text-md md:text-sm mb-3">
                    It's not just about traffic—it's about results. We analyze
                    user behavior, test landing pages, and improve funnels to
                    turn clicks into customers.
                  </p>
                </div>

                {/* 7. Analytics & Reporting */}
                <div>
                  <h2 className="text-lg font-bold mb-1">
                    Analytics & Reporting
                  </h2>
                  <p className="text-md md:text-sm mb-3">
                    Stay in control with regular, transparent reports. We track
                    KPIs like traffic sources, bounce rate, leads, and
                    conversions—and adjust strategy accordingly.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Choose Full Digital Marketing Services? --- Section */}
            <section>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px]    mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Why Choose Full{" "}
                <span className="text-cyan-400">Digital Marketing </span>{" "}
                Services?
              </h2>
              <div className="space-y-6">
                <p className="text-md md:text-sm mb-3">
                  From SEO to social media, we unify strategies using
                  data-driven insights and digital marketing audit services to
                  reveal what's working—and what's not. We connect SEO, social
                  media, and online ads into one strong plan that brings real
                  business results.
                </p>
                <p className="text-md md:text-sm mb-3">
                  If you're having trouble getting noticed online, wasting money
                  on ads, or struggling to connect with your customers—we can
                  help. Our team uses the best tools and methods to track every
                  dollar you spend and make sure it gives you the best return.
                </p>
              </div>
            </section>

            {/* SEO Services: Make Your Website Work for You --- Section */}
            <section>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px]    mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                SEO Services – Make Your{" "}
                <span className="text-cyan-400">Website </span> Work for You
              </h2>
              <p className="text-sm md:text-md mb-3">
                If people can't find you on Google, it's like your business
                doesn't exist.
              </p>
              <p className="text-sm md:text-md mb-3">
                That's why SEO is so important. We don't just use keywords—we
                make your website fast, mobile-friendly, and trusted by Google
                so more people can discover your business.
              </p>
              <div className="space-y-6">
                {/* Our SEO Services */}
                <div>
                  <h2 className="text-xl font-bold mb-1">Our SEO Services:</h2>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>
                      <span className="text-[#283A64]">Technical SEO</span> –
                      Fix loading issues, broken links, and mobile problems
                    </li>
                    <li>
                      <span className="text-[#283A64]">On-Page SEO</span> –
                      Improve your page titles, tags, and structure
                    </li>
                    <li>
                      <span className="text-[#283A64]">Off-Page SEO</span> – Get
                      high-quality backlinks for trust and authority
                    </li>
                    <li>
                      <span className="text-[#283A64]">Local SEO</span> – Help
                      people find your business in your local area
                    </li>
                    <li>
                      <span className="text-[#283A64]">
                        Content Optimization
                      </span>{" "}
                      – Write strong content that ranks well
                    </li>
                  </ul>
                </div>

                {/* Tools We Use */}
                <div>
                  <h2 className="text-xl font-bold mb-1">Tools We Use:</h2>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>Google Search Console</li>
                    <li>SEMrush or Ahrefs</li>
                    <li>Screaming Frog</li>
                    <li>SurferSEO</li>
                  </ul>
                </div>

                {/* Example Result */}
                <div>
                  <h2 className="text-xl font-bold mb-1">Example Result:</h2>
                  <p className="text-md md:text-sm mb-3">
                    <span className="text-[#283A64]">SaaS Company</span> – We
                    grew their website traffic by{" "}
                    <span className="text-cyan-400">300% in 6 months </span> and
                    improved sales leads by{" "}
                    <span className="text-cyan-400">180%</span>.
                  </p>
                </div>
                <div className="flex flex-row gap-4 mb-4">
                  <a href="/contact-us" className="flex items-center gap-2">
                    <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                      Get a Free Quote
                    </button>
                    <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                      <FaArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </section>

            {/* Social Media Marketing – Build Trust and Grow Online --- Section */}
            <section>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px]    mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Social Media Marketing –{" "}
                <span className="text-cyan-400">
                  Build Trust and Grow Online
                </span>
              </h2>
              <p className="text-sm md:text-md mb-3">
                Today, people want more than just good products. They want to
                connect with brands they trust. We help you share your brand
                story and connect with your followers in a real way.
              </p>
              <div className="space-y-6">
                {/* Our SMM Services */}
                <div>
                  <h2 className="text-xl font-bold mb-1">Our SMM Services:</h2>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>
                      Social media planning (Facebook, Instagram, LinkedIn,
                      TikTok)
                    </li>
                    <li>
                      <a href="graphics-designing-services">
                        {" "}
                        Crafting stunning visuals{" "}
                      </a>{" "}
                      like social media posts, brand videos, and engaging
                      stories that reflect your identity
                    </li>
                    <li>Replying to comments and managing followers</li>
                    <li>Running paid ads to reach the right people</li>
                    <li>Working with influencers (if needed)</li>
                  </ul>
                </div>

                {/* Tools We Use */}
                <div>
                  <h2 className="text-xl font-bold mb-1">Tools We Use:</h2>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>Meta Business Suite</li>
                    <li>Hootsuite</li>
                    <li>Sprout Social</li>
                  </ul>
                </div>

                {/* Why Our Social Media Works */}
                <div>
                  <h2 className="text-xl font-bold mb-1">
                    Why Our Social Media Works:
                  </h2>
                  <p className="text-sm md:text-md mb-3">
                    We don't post just to be active. We post to build trust and
                    bring results.
                  </p>
                </div>
                <div className="flex flex-row gap-4 mb-4">
                  <a href="/contact-us" className="flex items-center gap-2">
                    <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                      Get a Free Quote
                    </button>
                    <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                      <FaArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </section>

            {/* PPC Advertising – Bring Fast Results and Quality Leads --- Section */}
            <section>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px]    mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                PPC Advertising –{" "}
                <span className="text-cyan-400">
                  Bring Fast Results and Quality Leads
                </span>
              </h2>
              <p className="text-sm md:text-md mb-3">
                PPC advertising helps you reach people who are already searching
                for what you offer. But if the ads are not done properly, it can
                waste money.
              </p>
              <p className="text-sm md:text-md mb-3">
                Every ad is backed by insights from our PPC audit service,
                ensuring campaigns are well-targeted, optimized, and
                cost-effective.
              </p>
              <p className="text-sm md:text-md mb-3">
                As a trusted PPC service provider, we offer:
              </p>
              <div className="space-y-6">
                {/* Our PPC Services */}
                <div>
                  <h2 className="text-xl font-bold mb-1">Our PPC Services:</h2>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>
                      <span className="text-[#283A64]">
                        Google and Bing Search Ads
                      </span>
                    </li>
                    <li>
                      <span className="text-[#283A64]">Retargeting Ads</span>{" "}
                      (remind people who visited your site)
                    </li>
                    <li>
                      <span className="text-[#283A64]">
                        Ads on Facebook, Instagram, and LinkedIn
                      </span>
                    </li>
                    <li>
                      <a
                        href="professional-video-editing-services"
                        className="text-[#283A64]"
                      >
                        Polished, professional-grade video edits
                      </a>{" "}
                      make your YouTube and display ads more attention-grabbing
                      and memorable.
                    </li>
                    <li>
                      <span className="text-[#283A64]">
                        Landing Page Design and Optimization
                      </span>{" "}
                    </li>
                  </ul>
                </div>

                {/* Tools We Use */}
                <div>
                  <h2 className="text-xl font-bold mb-1">Tools We Use:</h2>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>Google Ads & GA4</li>
                    <li>Meta Ads Manager</li>
                    <li>HubSpot or Salesforce integrations</li>
                  </ul>
                </div>

                {/* Example Result */}
                <div>
                  <h2 className="text-xl font-bold mb-1">Example Result:</h2>
                  <p className="text-sm md:text-md mb-3">
                    <span className="text-[#283A64]">Healthcare Business</span>{" "}
                    – We got them{" "}
                    <span className="text-cyan-400">
                      7.5 times return on ad spend
                    </span>{" "}
                    and reduced ad costs by{" "}
                    <span className="text-cyan-400">35%</span>.
                  </p>
                </div>

                <div className="flex flex-row gap-4 mb-4">
                  <a href="/contact-us" className="flex items-center gap-2">
                    <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                      Get a Free Quote
                    </button>
                    <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                      <FaArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </section>

            {/* How We Work – Clear, Honest, Effective --- Section */}
            <section>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px]    mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                How - <span className="text-cyan-400">We Work - </span> Clear,
                Honest, Effective
              </h2>
              <p className="text-sm md:text-md mb-3">
                We are fully transparent. You'll always know what we're doing
                and why. Our approach is step-by-step:
              </p>
              <div className="space-y-6">
                {/* Our 5-Step Process */}
                <div>
                  <h2 className="text-xl font-bold mb-1">
                    Our 5-Step Process:
                  </h2>
                  <ol className="text-sm pl-8 mb-3 list-decimal">
                    <li>
                      <span className="text-[#283A64]">Discovery Call</span> –
                      Learn about your goals and problems
                    </li>
                    <li>
                      <span className="text-[#283A64]">Strategy Planning</span>{" "}
                      – Create a custom plan for your needs
                    </li>
                    <li>
                      <span className="text-[#283A64]">Execution</span> – We put
                      the plan into action
                    </li>
                    <li>
                      <span className="text-[#283A64]">Reporting</span> – You
                      get easy-to-understand reports every month
                    </li>
                    <li>
                      <span className="text-[#283A64]">
                        Ongoing Optimization
                      </span>{" "}
                      – We test, adjust, and improve continuously
                    </li>
                  </ol>
                </div>

                <p className="text-md md:text-sm mb-3">
                  We also teach you what we do, so you feel confident and
                  informed.
                </p>

                <div className="flex flex-row gap-4 mb-4">
                  <a href="/contact-us" className="flex items-center gap-2">
                    <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                      Get a Free Quote
                    </button>
                    <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                      <FaArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </section>

            {/* Real Results from Real Clients --- Section */}
            <section>
              <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px]    mb-8 text-[#283A64]">
                Real <span className="text-cyan-400">Results</span> from Real
                Clients
              </h2>
              <div className="space-y-8">
                {/* SaaS Startup */}
                <div>
                  <h3 className="text-2xl md:text-xl font-bold text-black mb-1">
                    SaaS Startup | SEO + PPC
                  </h3>
                  <div className="pl-2">
                    <div className="text-black text-md md:text-sm">
                      <span className="font-semibold text-black">Problem:</span>{" "}
                      <span className="text-gray-700">Not enough leads</span>
                    </div>
                    <div className="text-black text-md md:text-sm">
                      <span className="font-semibold text-cyan-400">
                        Solution:
                      </span>{" "}
                      <span className="text-gray-700">
                        Keyword plan + retargeting ads
                      </span>
                    </div>
                    <div className="text-black text-md md:text-sm">
                      <span className="font-semibold text-cyan-600">
                        Result:
                      </span>{" "}
                      <span className="text-gray-700">
                        +300% traffic | +200% leads
                      </span>
                    </div>
                  </div>
                </div>
                {/* E-Commerce Brand */}
                <div>
                  <h3 className="text-2xl md:text-xl font-bold text-black mb-1">
                    E-Commerce Brand | SMM + PPC
                  </h3>
                  <div className="pl-2">
                    <div className="text-black text-md md:text-sm">
                      <span className="font-semibold text-black">Problem:</span>{" "}
                      <span className="text-gray-700">
                        Low sales, many abandoned carts
                      </span>
                    </div>
                    <div className="text-black text-md md:text-sm">
                      <span className="font-semibold text-cyan-400">
                        Solution:
                      </span>{" "}
                      <span className="text-gray-700">
                        Retargeting and better ad creatives
                      </span>
                    </div>
                    <div className="text-black text-md md:text-sm">
                      <span className="font-semibold text-cyan-600">
                        Result:
                      </span>{" "}
                      <span className="text-gray-700">
                        +$50K sales in 90 days | 6.1x return on ad spend
                      </span>
                    </div>
                  </div>
                </div>
                {/* Local Clinic */}
                <div>
                  <h3 className="text-2xl md:text-xl font-bold text-black mb-1">
                    Local Clinic | Local SEO
                  </h3>
                  <div className="pl-2">
                    <div className="text-black text-md md:text-sm">
                      <span className="font-semibold text-black">Problem:</span>{" "}
                      <span className="text-gray-700">
                        Lost customers to local competitors
                      </span>
                    </div>
                    <div className="text-black text-md md:text-sm">
                      <span className="font-semibold text-cyan-400">
                        Solution:
                      </span>{" "}
                      <span className="text-gray-700">
                        Google profile and local links
                      </span>
                    </div>
                    <div className="text-black text-md md:text-sm">
                      <span className="font-semibold text-cyan-600">
                        Result:
                      </span>{" "}
                      <span className="text-gray-700">
                        #1 on Google for 5 services | +120% more bookings
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Logisol Technologies? --- Section */}
            <section>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px]    mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Why <span className="text-cyan-400">Logisol Technologies?</span>
              </h2>
              <p className="text-sm md:text-md mb-3">
                We're not a "one-size-fits-all" agency. For companies seeking
                digital marketing services, we only take on projects where we're
                confident we can deliver results.
              </p>
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-1">
                    What Makes Us Different:
                  </h2>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>Unique strategies built for your industry</li>
                    <li>100% clear and honest reports</li>
                    <li>Certified experts (Google, Meta, HubSpot)</li>
                    <li>Custom dashboard to track progress</li>
                    <li>One dedicated manager for your project</li>
                    <li>
                      Experience in E-Commerce, Healthcare, SaaS, Local
                      Services, and B2B
                    </li>
                  </ul>
                </div>

                <div className="flex flex-row gap-4 mb-4">
                  <a href="/contact-us" className="flex items-center gap-2">
                    <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                      Get a Free Quote
                    </button>
                    <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                      <FaArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </section>

            {/* What Clients Are Saying - Testimonials Section */}
            <Testimonials />

            {/* FAQ Section for Web Development */}
            <WebDevFAQ />

            {/* Let’s Grow Your Business the Right Way --- Section */}
            <section>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px]    mb-6 text-[#283A64] uppercase"
                style={{ lineHeight: "1.15" }}
              >
                Let's Grow Your <span className="text-cyan-400">Business</span>{" "}
                the Right Way
              </h2>
              <p className="text-md md:text-sm mb-4">
                Join over 50 businesses that trust Logisol Technologies for
                smart, honest, and result-driven digital marketing.
              </p>
              <div className="flex flex-row gap-4 mb-4">
                <a href="/contact-us" className="flex items-center gap-2">
                  <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                    Get in touch
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
              name: "How do you measure success?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We track things like leads, sales, website visits, and ad returns.",
              },
            },
            {
              "@type": "Question",
              name: "When will I see results?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "SEO takes 3–6 months. PPC and SMM can show results in 30 days.",
              },
            },
            {
              "@type": "Question",
              name: "Do I need all services (SEO, SMM, PPC)?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. We create a plan based on what your business needs most.",
              },
            },
            {
              "@type": "Question",
              name: "Can you work with my current marketing team?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We can work together or handle everything for you.",
              },
            },
            {
              "@type": "Question",
              name: "Which industries do you work with?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "E-Commerce, Healthcare, SaaS, Local Services, and more.",
              },
            },
            {
              "@type": "Question",
              name: "How often do you send reports?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We send monthly reports and regular updates through calls or dashboards.",
              },
            },
          ],
        })}
      </Script>

      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Digital Marketing Services",
          description:
            "Boost your brand with expert digital marketing services including SEO, PPC, social media, and content strategies designed to grow your business online fast.",
          serviceType: "Grow Online | Pro Digital Marketing Services Today",
          provider: {
            "@type": "Organization",
            name: "Logisol Technologies",
            url: "https://logisol.tech/digital-marketing-services/",
            logo: "https://logisol.tech/logisol-logo-nav.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-626-671-6483",
              email: "info@logisol.tech",
              contactType: "Customer Support",
              availableLanguage: ["English"],
            },
          },
          areaServed: {
            "@type": "Place",
            name: "United States",
          },
          url: "https://logisol.tech/digital-marketing-services/",
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
                url: "https://logisol.tech/digital-marketing-services/",
                logo: "https://logisol.tech/logisol-logo-nav.png",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              author: {
                "@type": "Person",
                name: "Rachel Moore",
              },
              reviewBody:
                "The team at Logisol really understood our brand voice and brought it to life on social media. We’ve seen better engagement and our followers are actually turning into customers.",
            },
            {
              "@type": "Review",
              name: "Review",
              itemReviewed: {
                "@type": "Organization",
                name: "Logisol Technologies",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              author: {
                "@type": "Person",
                name: "James Patel",
              },
              reviewBody:
                "Before working with Logisol, our website barely showed up on Google. Now, we're getting steady traffic and real leads every week. They explained everything clearly and made the process easy.",
            },
            {
              "@type": "Review",
              name: "Review",
              itemReviewed: {
                "@type": "Organization",
                name: "Logisol Technologies",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              author: {
                "@type": "Person",
                name: "Nina Alvarez",
              },
              reviewBody:
                "Logisol helped us stop wasting money on ads that didn’t convert. They set up targeted campaigns that brought in better-quality leads at a lower cost.",
            },
          ],
        })}
      </Script>

      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Grow Online | Pro Digital Marketing Services Today",
          description:
            "Boost your brand with expert digital marketing services including SEO, PPC, social media, and content strategies designed to grow your business online fast.",
          image: "https://logisol.tech/logisol-logo-nav.png",
          url: "https://logisol.tech/digital-marketing-services/",
          brand: {
            "@type": "Brand",
            name: "Logisol Technologies",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            ratingCount: 2,
          },
          review: [
            {
              "@type": "Review",
              author: {
                "@type": "Organization",
                name: "Clutch",
                url: "https://clutch.co/profile/logisol-technologies",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "4.9",
                bestRating: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Organization",
                name: "Trustpilot",
                url: "https://www.trustpilot.com/review/logisoltech.com",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
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
        "The team at Logisol really understood our brand voice and brought it to life on social media. We’ve seen better engagement and our followers are actually turning into customers.",
      name: "Rachel Moore",
      title: "Marketing Lead, UrbanLeaf Organics",
    },
    {
      quote:
        "Before working with Logisol, our website barely showed up on Google. Now, we're getting steady traffic and real leads every week. They explained everything clearly and made the process easy.",
      name: "James Patel",
      title: "Co-Founder, CraftEdge Studio",
    },
    {
      quote:
        "Logisol helped us stop wasting money on ads that didn’t convert. They set up targeted campaigns that brought in better-quality leads at a lower cost.",
      name: "Nina Alvarez",
      title: "Operations Manager, BrightNest Interiors",
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
      question: "How do you measure success?",
      answer:
        "We track things like leads, sales, website visits, and ad returns.",
    },
    {
      question: "When will I see results?",
      answer: "SEO takes 3–6 months. PPC and SMM can show results in 30 days.",
    },
    {
      question: "Do I need all services (SEO, SMM, PPC)?",
      answer: "No. We create a plan based on what your business needs most.",
    },
    {
      question: "Can you work with my current marketing team?",
      answer: "Yes. We can work together or handle everything for you.",
    },
    {
      question: "Which industries do you work with?",
      answer: "E-Commerce, Healthcare, SaaS, Local Services, and more.",
    },
    {
      question: "How often do you send reports?",
      answer:
        "We send monthly reports and regular updates through calls or dashboards.",
    },
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="w-full max-w-4xl mx-auto mt-16 mb-8">
      <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px]    text-[#283A64] mb-8 text-center">
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
