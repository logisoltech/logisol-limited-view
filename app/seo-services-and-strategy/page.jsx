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

export default function SEOServices() {
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
            SEO{" "}
            <span className="text-cyan-400">
              <br />
              Services{" "}
            </span>
            <br />
            and Strategy
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
                  src="/services/seo.jpg"
                  alt="Social Media Marketing Team"
                  className="w-full h-[340px] object-cover object-center"
                />
              </div>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Grow Your Business with Search – Powered by{" "}
                <span className="text-cyan-400">Logisol Technologies</span>
              </h2>
              <div className="text-md md:text-sm text-gray-900 leading-relaxed">
                <p className="mb-4">
                  At{" "}
                  <span className="text-cyan-400"> Logisol Technologies</span>,
                  we help your website show up higher on Google and other search
                  engines. Our{" "}
                  <span className="text-cyan-400"> SEO services</span> are made
                  to increase your website visits, bring real customers, and
                  grow your business in a smart and steady way.
                </p>
                <p className="mb-4">
                  SEO today goes beyond search rankings—it also enhances
                  visibility across platforms, including{" "}
                  <a
                    href="mobile-application-development-services"
                    className="cursor-pointer"
                  >
                    {" "}
                    mobile applications{" "}
                  </a>{" "}
                  where users frequently engage with brands on the go.
                </p>
                <p className="mb-4">
                  We offer complete SEO solutions tailored for all types of
                  businesses—from a home builder SEO company to retail brands,
                  we build strategies that work—and often integrate them with{" "}
                  <a
                    className="cursor-pointer"
                    href="digital-marketing-services"
                  >
                    {" "}
                    digital marketing strategies{" "}
                  </a>{" "}
                  that drive traffic through both organic and paid channels.
                  Whether you want to attract local customers or grow
                  nationally, we create SEO plans that give real, measurable
                  results—even if you're a SEO company for window cleaners
                  looking to rank in local searches.
                </p>
              </div>
            </div>

            {/* Our SEO Services --- Section */}
            <section>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Our complete <span className="text-cyan-400">SEO</span> Services
              </h2>
              <div className="space-y-6">
                {/* 1. Technical SEO */}
                <div>
                  <h2 className="text-xl font-bold mb-1">1. Technical SEO</h2>
                  <p className="text-sm md:text-md mb-3">
                    As a technical SEO services company, we ensure your website
                    functions smoothly and is built with search visibility in
                    mind—especially when developed through{" "}
                    <a
                      className="cursor-pointer"
                      href="custom-web-development-services"
                    >
                      custom web development
                    </a>{" "}
                    that aligns structure, speed, and SEO standards:
                  </p>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>Make your website load faster</li>
                    <li>
                      Ensure your website works well on all mobile devices
                    </li>
                    <li>
                      Use <span className="text-cyan-400">HTTPS</span> to keep
                      your site secure
                    </li>
                    <li>Organize your website with a clear URL structure</li>
                    <li>
                      Submit <span className="text-cyan-400">sitemaps</span> and{" "}
                      <span className="text-cyan-400">robots.txt</span> files to
                      Google
                    </li>
                    <li>
                      Fix errors like broken links or pages that don’t load
                    </li>
                    <li>
                      Add structured data (schema) to help search engines
                      understand your content
                    </li>
                  </ul>
                </div>

                {/* 2. On-Page SEO */}
                <div>
                  <h2 className="text-xl font-bold mb-1">2. On-Page SEO</h2>
                  <p className="text-sm md:text-md mb-3">
                    We improve each page of your website so that it is useful
                    for both users and search engines:
                  </p>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>
                      Write clear and optimized page titles, descriptions, and
                      headers
                    </li>
                    <li>Use important keywords in smart places</li>
                    <li>
                      Incorporating clear visuals—especially{" "}
                      <a
                        href="graphics-designing-services"
                        className="cursor-pointer"
                      >
                        professionally designed graphics
                      </a>{" "}
                      helps improve both SEO and the user experience
                    </li>
                    <li>
                      Check if the content matches what users are searching for
                    </li>
                    <li>Make URLs short and easy to read</li>
                    <li>Make content easy to read and understand</li>
                  </ul>
                </div>

                {/* 3. Off-Page SEO & Link Building */}
                <div>
                  <h2 className="text-xl font-bold mb-1">
                    3. Off-Page SEO & Link Building
                  </h2>
                  <p className="text-sm md:text-md mb-3">
                    We help build your website's reputation by getting links
                    from other trusted websites:
                  </p>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>Get quality backlinks from reliable websites</li>
                    <li>Write guest blogs and partner with influencers</li>
                    <li>Submit your website to trusted directories</li>
                    <li>
                      We also amplify visibility through{" "}
                      <a
                        href="social-media-marketing-services"
                        className="cursor-pointer"
                      >
                        social media marketing efforts{" "}
                      </a>{" "}
                      that encourage natural backlinks and increased brand
                      discussions online
                    </li>
                    <li>Monitor backlink quality to avoid harmful links</li>
                    <li>Use a healthy mix of anchor texts and link types</li>
                  </ul>
                </div>

                {/* 4. Local SEO */}
                <div>
                  <h2 className="text-xl font-bold mb-1">4. Local SEO</h2>
                  <p className="text-sm md:text-md mb-3">
                    Whether you're a hotel SEO company or a local boutique, we
                    help your business appear in local search results and on
                    Google Maps, so nearby customers can find you:
                  </p>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>Optimize your Google Business Profile</li>
                    <li>Use local keywords that match your area</li>
                    <li>
                      Keep your business Name, Address, and Phone number (NAP)
                      consistent across websites
                    </li>
                    <li>
                      Whether you're listing a salon or offering moving company
                      local SEO services, get featured in local directories
                      (like Yelp, Yellow Pages, Bing)
                    </li>
                    <li>
                      Create pages for each location you serve—a smart move if
                      you're a restaurant SEO company expanding into multiple
                      cities.
                    </li>
                    <li>Manage and respond to customer reviews</li>
                    <li>Add local content for better geo-targeted results</li>
                  </ul>
                </div>

                {/* 5. Ecommerce SEO */}
                <div>
                  <h2 className="text-xl font-bold mb-1">5. Ecommerce SEO</h2>
                  <p className="text-sm md:text-md mb-3">
                    We improve SEO for{" "}
                    <span className="text-cyan-400"> online stores</span>,
                    including platforms like Shopify, WooCommerce, and Magento:
                  </p>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>Write SEO-friendly product titles and descriptions</li>
                    <li>Use canonical tags and fix page duplication</li>
                    <li>Improve category and filter page SEO</li>
                    <li>
                      Show product details (like price and reviews) in search
                      results using rich snippets
                    </li>
                    <li>Fix issues with filter and navigation pages</li>
                    <li>Set up Google Shopping and Merchant Center properly</li>
                  </ul>
                </div>

                {/* 6. SEO Audit & Reporting */}
                <div>
                  <h2 className="text-xl font-bold mb-1">
                    6. SEO Audit & Reporting
                  </h2>
                  <p className="text-sm md:text-md mb-3">
                    As a trusted technical SEO audit consultancy, we check your
                    current SEO performance and keep you updated regularly:
                  </p>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>Do a full SEO health check of your website</li>
                    <li>Compare your SEO with your competitors</li>
                    <li>Review backlinks and check for spammy links</li>
                    <li>Track how your keywords are ranking in Google</li>
                    <li>Connect with Google Analytics and Search Console</li>
                    <li>
                      Send easy-to-understand monthly reports with tips to
                      improve
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SEO Process --- Section */}
            <section className="w-full">
              <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-6 text-[#283A64]">
                Our Step-by-Step <span className="text-cyan-400">SEO</span>{" "}
                Process
              </h2>
              <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">
                {/* Card 1: Website SEO Audit & Competitor Check */}
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
                      <div className="flex flex-row gap-2 text-[#283A64] items-center max-lg:min-h-[112px]">
                        <div className="flex items-center justify-center">
                          <h3 className="text-xl font-bold text-center">
                            Website SEO Audit & Competitor Check
                          </h3>
                        </div>
                        <FaLightbulb className="w-10 h-10" />
                      </div>
                      <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[144px] max-xl:min-h-[264px] max-md:min-h-auto">
                        We analyze your website alongside your top competitors
                        to identify performance gaps. This helps uncover
                        opportunities to optimize your strategy and stay ahead
                        in your industry.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2: Keyword Research & Strategy */}
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
                      <div className="flex flex-row gap-2 text-[#283A64] items-center max-lg:min-h-[112px]">
                        <div className="flex items-center justify-center">
                          <h3 className="text-xl font-bold mb-2 text-center">
                            Keyword Research & Strategy
                          </h3>
                        </div>
                        <FaLightbulb className="w-10 h-10" />
                      </div>
                      <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[144px] max-xl:min-h-[264px] max-md:min-h-auto">
                        We research and identify the most effective keywords
                        your target audience is actively searching for. This
                        ensures your content aligns with real customer intent
                        and drives more qualified traffic.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 3: Technical & On-Page Optimization */}
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
                      <div className="flex flex-row gap-2 text-[#283A64] items-center max-lg:min-h-[112px]">
                        <div className="flex items-center justify-center">
                          <h3 className="text-xl font-bold mb-2 text-center">
                            Technical & On-Page Optimization
                          </h3>
                        </div>
                        <FaLightbulb className="w-10 h-10" />
                      </div>
                      <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[144px] max-xl:min-h-[264px] max-md:min-h-auto">
                        Whether you want to hire technical SEO experts or just
                        resolve technical issues yourself, we optimize every
                        aspect of your site's performance, from speed to
                        crawlability. We also enhance your site structure and
                        content to improve user experience and search engine
                        rankings.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 4: SEO Content Writing */}
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
                      <div className="flex flex-row gap-2 text-[#283A64] items-center max-lg:min-h-[112px]">
                        <div className="flex items-center justify-center">
                          <h3 className="text-xl font-bold mb-2 text-center">
                            SEO Content Writing
                          </h3>
                        </div>
                        <FaLightbulb className="w-10 h-10" />
                      </div>
                      <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[144px] max-xl:min-h-[264px] max-md:min-h-auto">
                        We develop high-quality, SEO-driven content tailored to
                        boost your search rankings. From written material to
                        <a
                          href="professional-video-editing-services"
                          className="cursor-pointer"
                        >
                          {" "}
                          professionally edited video content
                        </a>
                        , we create assets that retain attention and convert
                        search visitors into leads.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 5: Link Building */}
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
                      <div className="flex flex-row gap-2 text-[#283A64] items-center max-lg:min-h-[112px]">
                        <div className="flex items-center justify-center">
                          <h3 className="text-xl font-bold mb-2 text-center">
                            Link Building
                          </h3>
                        </div>
                        <FaLightbulb className="w-10 h-10" />
                      </div>
                      <p className="text-gray-700 text-base mb-4 text-center xl:min-h-[144px] max-xl:min-h-[264px] max-md:min-h-auto">
                        We secure backlinks from reputable websites to
                        strengthen your domain authority. These quality links
                        boost your search rankings and enhance your brand's
                        online credibility.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Our SEO Services --- Section */}
            <section>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Our complete <span className="text-cyan-400">SEO</span> Services
              </h2>
              <div className="space-y-6">
                {/* 1. Technical SEO */}
                <div>
                  <h2 className="text-xl font-bold mb-1">Technical SEO</h2>
                  <p className="text-sm md:text-md mb-3">
                    Our technical SEO auditing services ensure your website
                    meets Google's core vitals and backend standards:
                  </p>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>Fast loading speed</li>
                    <li>Mobile responsiveness</li>
                    <li>Secure HTTPS setup</li>
                    <li>XML sitemaps</li>
                    <li>Schema markup</li>
                    <li>Crawl &amp; index optimization</li>
                  </ul>
                </div>

                {/* 2. On-Page SEO */}
                <div>
                  <h2 className="text-xl font-bold mb-1">On-Page SEO</h2>
                  <p className="text-sm md:text-md mb-3">
                    We optimize every page of your website with:
                  </p>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>Strategic keyword placements</li>
                    <li>SEO-friendly URLs</li>
                    <li>Meta titles &amp; descriptions</li>
                    <li>Headings (H1, H2, H3…)</li>
                    <li>Internal linking</li>
                    <li>Image alt tags</li>
                  </ul>
                </div>

                {/* 3. Off-Page SEO / Link Building */}
                <div>
                  <h2 className="text-xl font-bold mb-1">
                    Off-Page SEO / Link Building
                  </h2>
                  <p className="text-sm md:text-md mb-3">
                    Grow your site’s authority through high-quality,
                    niche-relevant backlinks:
                  </p>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>Guest posts</li>
                    <li>Directory submissions</li>
                    <li>Social bookmarks</li>
                    <li>Influencer mentions</li>
                    <li>Authority link outreach</li>
                  </ul>
                </div>

                {/* 4. Local SEO */}
                <div>
                  <h2 className="text-xl font-bold mb-1">Local SEO</h2>
                  <p className="text-sm md:text-md mb-3">
                    From enterprise brands to startups seeking cheap local SEO
                    services, we help dominate local search results and attract
                    nearby customers with:
                  </p>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>
                      <span className="text-cyan-400">
                        Google Business Profile
                      </span>{" "}
                      optimization
                    </li>
                    <li>Local citations (NAP consistency)</li>
                    <li>Local keyword targeting</li>
                    <li>Customer reviews strategy</li>
                  </ul>
                </div>

                {/* 5. E-Commerce SEO */}
                <div>
                  <h2 className="text-xl font-bold mb-1">E-Commerce SEO</h2>
                  <p className="text-sm md:text-md mb-3">
                    Drive product discovery and conversions with:
                  </p>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>Product page optimization</li>
                    <li>Structured product data</li>
                    <li>Category keyword targeting</li>
                    <li>Shopify/WooCommerce SEO setup</li>
                  </ul>
                </div>

                {/* 6. SEO Audit & Reporting */}
                <div>
                  <h2 className="text-xl font-bold mb-1">
                    SEO Audit &amp; Reporting
                  </h2>
                  <p className="text-sm md:text-md mb-3">
                    We run in-depth SEO audits to identify gaps and continuously
                    track:
                  </p>
                  <ul className="text-sm pl-8 mb-3 list-disc">
                    <li>Organic traffic</li>
                    <li>Bounce rate</li>
                    <li>Keyword rankings</li>
                    <li>Backlink profiles</li>
                    <li>SEO health score</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* What Clients Are Saying - Testimonials Section */}
            <Testimonials />

            {/* FAQ Section for Web Development */}
            <WebDevFAQ />

            {/* Let's Work Together --- Section */}
            <section>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-6 text-[#283A64] uppercase"
                style={{ lineHeight: "1.15" }}
              >
                Let's Work <span className="text-cyan-400">Together</span>
              </h2>
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
              <p className="text-sm md:text-md mb-6 text-[#222]">
                Let Logisol Technologies help you achieve higher rankings,
                increase visibility, and turn traffic into revenue. Contact us
                today for a free SEO audit or custom consultation.
              </p>
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
              name: "What is SEO and how does it work?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "SEO means Search Engine Optimization. It helps your website show up higher in Google search results. We do this by improving your website content, structure, and getting quality links.",
              },
            },
            {
              "@type": "Question",
              name: "How long does SEO take to show results?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Normally, you will start to see results in 3 to 6 months, depending on your business and competition.",
              },
            },
            {
              "@type": "Question",
              name: "What is the cost of your SEO services?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We don’t have fixed prices. We create a plan based on your website, industry, and goals. You can contact us for a free quote.",
              },
            },
            {
              "@type": "Question",
              name: "Do you give reports?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we send monthly reports with details about your traffic, keyword rankings, backlinks, and conversions.",
              },
            },
            {
              "@type": "Question",
              name: "Is SEO better than paid ads?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "SEO is better for long-term growth. Ads give quick results but stop once the budget ends. SEO keeps bringing visitors over time and builds your trust online.",
              },
            },
            {
              "@type": "Question",
              name: "Can I do SEO by myself?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can do some basic things, but expert-level SEO needs tools, experience, and time. That’s why many businesses trust professionals like us.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer SEO for local businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes! We help small businesses appear in Google’s local search and map results to bring in nearby customers.",
              },
            },
          ],
        })}
      </Script>

      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Smart SEO Services | Strategy for Lasting Results",
          description:
            "Unlock long-term success with expert SEO services and smart strategies that boost search rankings, increase visibility, and drive steady traffic growth.",
          url: "https://logisol.tech/seo-services-and-strategy/",
          provider: {
            "@type": "Organization",
            name: "Logisol Technologies",
            url: "https://logisol.tech/seo-services-and-strategy/",
            logo: "https://logisol.tech/logisol-logo-nav.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-626-671-6483",
              contactType: "customer support",
              email: "info@logisol.tech",
              areaServed: "US",
            },
          },
          areaServed: {
            "@type": "Country",
            name: "United States",
          },
          serviceType: "SEO Services and Strategy",
          image: "https://logisol.tech/logisol-logo-nav.png",
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
                url: "https://logisol.tech/seo-services-and-strategy/",
              },
              author: { "@type": "Person", name: "Ava Mitchell" },
              reviewBody:
                "We saw a real shift in our online visibility within a few months. Logisol’s team explained everything clearly and focused on strategies that actually delivered results. The increase in organic traffic directly impacted our lead generation.",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              publisher: {
                "@type": "Organization",
                name: "GreenSprout Solutions",
              },
            },
            {
              "@type": "Review",
              name: "Review",
              itemReviewed: {
                "@type": "Organization",
                name: "Logisol Technologies",
                url: "https://logisol.tech/seo-services-and-strategy/",
              },
              author: { "@type": "Person", name: "Daniel Reyes" },
              reviewBody:
                "Logisol took the time to understand our business and built an SEO strategy tailored to our niche. Their approach was transparent and data-driven. We’ve since doubled our search traffic and improved our Google rankings significantly.",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              publisher: {
                "@type": "Organization",
                name: "EcoHarvest Organics",
              },
            },
            {
              "@type": "Review",
              name: "Review",
              itemReviewed: {
                "@type": "Organization",
                name: "Logisol Technologies",
                url: "https://logisol.tech/seo-services-and-strategy/",
              },
              author: { "@type": "Person", name: "Sophie Chen" },
              reviewBody:
                "We used to rely heavily on ads, but Logisol helped us build long-term visibility through SEO. Their team optimized our content and structure without overcomplicating things. Now, most of our leads come from organic search.",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              publisher: { "@type": "Organization", name: "NovaTech Systems" },
            },
          ],
        })}
      </Script>

      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Smart SEO Services | Strategy for Lasting Results",
          description:
            "Unlock long-term success with expert SEO services and smart strategies that boost search rankings, increase visibility, and drive steady traffic growth.",
          image: "https://logisol.tech/logisol-logo-nav.png",
          url: "https://logisol.tech/seo-services-and-strategy/",
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
                ratingValue: "4.9",
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
        "We saw a real shift in our online visibility within a few months. Logisol’s team explained everything clearly and focused on strategies that actually delivered results. The increase in organic traffic directly impacted our lead generation.",
      name: "Ava Mitchell",
      title: "Marketing Director, GreenSprout Solutions",
    },
    {
      quote:
        "Logisol took the time to understand our business and built an SEO strategy tailored to our niche. Their approach was transparent and data-driven. We’ve since doubled our search traffic and improved our Google rankings significantly.",
      name: "Daniel Reyes",
      title: "Co-Founder, EcoHarvest Organics",
    },
    {
      quote:
        "We used to rely heavily on ads, but Logisol helped us build long-term visibility through SEO. Their team optimized our content and structure without overcomplicating things. Now, most of our leads come from organic search.",
      name: "Sophie Chen",
      title: "Head of Digital, NovaTech Systems",
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
      question: "What is SEO and how does it work?",
      answer:
        "SEO means Search Engine Optimization. It helps your website show up higher in Google search results. We do this by improving your website content, structure, and getting quality links.",
    },
    {
      question: "How long does SEO take to show results?",
      answer:
        "Normally, you will start to see results in 3 to 6 months, depending on your business and competition.",
    },
    {
      question: "What is the cost of your SEO services?",
      answer:
        "We don’t have fixed prices. We create a plan based on your website, industry, and goals. You can contact us for a free quote.",
    },
    {
      question: "Do you give reports?",
      answer:
        "Yes, we send monthly reports with details about your traffic, keyword rankings, backlinks, and conversions.",
    },
    {
      question: "Is SEO better than paid ads?",
      answer:
        "SEO is better for long-term growth. Ads give quick results but stop once the budget ends. SEO keeps bringing visitors over time and builds your trust online.",
    },
    {
      question: "Can I do SEO by myself?",
      answer:
        "You can do some basic things, but expert-level SEO needs tools, experience, and time. That’s why many businesses trust professionals like us.",
    },
    {
      question: "Do you offer SEO for local businesses?",
      answer:
        "Yes! We help small businesses appear in Google’s local search and map results to bring in nearby customers.",
    },
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="w-full max-w-4xl mx-auto mt-16 mb-8">
      <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] font-extrabold text-[#283A64] mb-8 text-center">
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
