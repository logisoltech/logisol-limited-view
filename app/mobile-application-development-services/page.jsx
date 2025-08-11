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

export default function MobileDevelopmentServices() {
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
            Mobile App Development That{" "}
            <span className="text-cyan-400">Drives Business Success</span>
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
                  src="/services/mobile-development.webp"
                  alt="Mobile Development Team"
                  className="w-full h-[340px] object-cover object-center"
                />
              </div>
              <div className="text-md md:text-sm text-gray-900 leading-relaxed">
                <p className="mb-4">
                  In today’s mobile-first world, having a high-performance app
                  isn’t a luxury—it’s a necessity. At{" "}
                  <span className="text-cyan-400">Logisol Technologies</span>,
                  we develop custom mobile applications that are intuitive,
                  visually appealing, and built for long-term success. Whether
                  you’re launching a new startup or enhancing enterprise
                  processes. We turn ideas into fully functioning apps your
                  users will love — or even expand them into{" "}
                  <a
                    href="/custom-web-development-services"
                    className="cursor-pointer"
                  >
                    {" "}
                    custom web platforms designed for scalability and speed.{" "}
                  </a>
                </p>
                <p className="mb-4">
                  From sleek user interfaces to complex backend systems, our
                  mobile app development services cover the full lifecycle—from
                  strategy and design to deployment and support.
                </p>
                <div className="flex flex-row gap-4 mt-4 max-md:flex-col">
                  <a href="/contact-us" className="flex items-center gap-2">
                    <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                      Get Your Free Call Scheduled
                    </button>
                    <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                      <FaArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </a>
                  <a href="/contact-us" className="flex items-center gap-2">
                    <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                      Get a Custom Quote in 24 Hours
                    </button>
                    <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                      <FaArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* Why Leading Businesses Trust */}
            <div>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Why Leading Businesses Trust{" "}
                <span className="text-cyan-400">Logisol Technologies</span>
              </h2>
              <p className="text-md md:text-sm mb-3">
                In today’s fast-paced digital economy, success depends on speed,
                scalability, and user experience. Here’s how we help you stay
                ahead:
              </p>
              <div className="space-y-6">
                <div>
                  <ul className="font-bold text-lg mb-1 list-disc">
                    <li>Rapid Development & MVP Launches</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    Accelerate your go-to-market journey with a fast MVP
                    rollout. Launch, test, and validate your product in record
                    time.
                  </p>
                </div>
                <div>
                  <ul className="font-bold text-lg mb-1 list-disc">
                    <li>Budget-Friendly Solutions</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    Save up to 40% on development costs with smart architecture,
                    reusable components, and cross-platform frameworks.
                  </p>
                </div>
                <div>
                  <ul className="font-bold text-lg mb-1 list-disc">
                    <li>Tailored UI/UX for Better Engagement</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    Our designers craft intuitive, brand-aligned interfaces that
                    drive user interaction, reduce churn, and boost retention.
                  </p>
                </div>
                <div>
                  <ul className="font-bold text-lg mb-1 list-disc">
                    <li>Multi-Platform Expertise Under One Roof</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    Whether it’s Android, iOS, or a hybrid mobile app
                    development service, we deliver high-performance apps that
                    work seamlessly across devices.
                  </p>
                </div>
                <div>
                  <ul className="font-bold text-lg mb-1 list-disc">
                    <li>Post-Launch Support & Maintenance</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    We’re here long after launch — offering upgrades, feature
                    enhancements, and performance optimizations.
                  </p>
                </div>
                <div>
                  <ul className="font-bold text-lg mb-1 list-disc">
                    <li>Business-Focused Development</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    We align technical decisions with your business goals,
                    ensuring the solution is optimized for ROI, scalability, and
                    market differentiation.
                  </p>
                </div>
                <div>
                  <ul className="font-bold text-lg mb-1 list-disc">
                    <li>Transparent Collaboration</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    You are involved in every step. With real-time dashboards,
                    milestone reviews, and sprint planning, you’re never left in
                    the dark.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 mt-4 max-sm:flex-col">
                <a href="/contact-us" className="flex items-center gap-2">
                  <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                    Free Consultation
                  </button>
                  <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                    <FaArrowRight className="w-5 h-5 text-white" />
                  </div>
                </a>
              </div>
            </div>
            {/* Our Mobile App Development Services */}
            <div>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px]   mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Our{" "}
                <span className="text-cyan-400">Mobile App Development</span>{" "}
                Services
              </h2>
              <p className="text-sm mb-3">
                We offer a broad spectrum of mobile app services to support
                businesses at every phase — from concept validation to long-term
                growth and monetization.
              </p>
              <div className="space-y-6">
                <div>
                  <ul className="font-bold text-lg mb-1 list-disc">
                    <li>Android App Development</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    As part of our native mobile app development services, we
                    build Android applications using Kotlin, Java, and Jetpack
                    Compose. We focus on compatibility, performance, and robust
                    back-end integration to ensure your app delivers value
                    across Android smartphones and tablets.
                    <br />
                    Whether it’s a consumer-facing app or a B2B solution, our
                    Android experts bring your vision to life with sleek UI,
                    robust architecture, and seamless integration with
                    third-party APIs and hardware.
                  </p>
                </div>
                <div>
                  <ul className="font-bold text-lg mb-1 list-disc">
                    <li>IOS App Development</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    We create secure and sleek iOS apps using Swift and
                    Objective-C. Whether for consumers or enterprise teams, our
                    enterprise mobile app development services ensure iOS apps
                    are scalable, secure, and high-performing.
                    <br />
                    From enterprise tools to interactive entertainment, our iOS
                    apps deliver polished experiences that comply with Apple’s
                    rigorous standards, ensuring a smooth approval and launch
                    process.
                  </p>
                </div>
                <div>
                  <ul className="font-bold text-lg mb-1 list-disc">
                    <li>Cross-Platform App Development</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    Our cross-platform mobile app development services help you
                    cut development time and costs by building once and
                    deploying everywhere, without compromising performance or
                    user experience. Our cross-platform solutions in Flutter and
                    React Native offer native-like performance across platforms,
                    ideal for startups and fast-growing businesses.
                    <br />
                    This approach is ideal for businesses that want consistency
                    across platforms while maintaining a rapid development
                    lifecycle and cost savings.
                  </p>
                </div>
                <div>
                  <ul className="font-bold text-lg mb-1 list-disc">
                    <li>Web to Mobile App Conversion</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    Already have a responsive web platform? We convert it into a
                    mobile app using native wrappers or frameworks, optimizing
                    touch interactions, offline usage, and mobile-specific
                    features.
                    <br />
                    We not only port your app but also optimize its performance,
                    design, and responsiveness for a truly native user
                    experience.
                  </p>
                </div>
                <div>
                  <ul className="font-bold text-lg mb-1 list-disc">
                    <li>E-commerce & On-Demand App Solutions</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    We build high-performance apps for food delivery, grocery,
                    taxi services, home services, and marketplaces. Integrated
                    features include real-time tracking, secure payments,
                    customer dashboards, and admin analytics.
                    <br />
                    Our scalable e-commerce platforms come with smart features
                    like loyalty programs, dynamic pricing, real-time inventory
                    sync, and advanced search — all optimized with{" "}
                    <a
                      href="/seo-services-and-strategy"
                      className="cursor-pointer"
                    >
                      SEO strategies that drive organic mobile traffic.{" "}
                    </a>
                  </p>
                </div>
                <div>
                  <ul className="font-bold text-lg mb-1 list-disc">
                    <li>Mobile App Development for Startups</li>
                  </ul>
                  <p className="text-sm md:text-md mb-3">
                    From idea validation to launch, we guide startups through
                    MVP development with lean architecture and modular
                    codebases. We prioritize speed and cost-efficiency, allowing
                    you to test, iterate, and grow fast.
                    <br />
                    We also help startups with pitch decks and demos while
                    integrating{" "}
                    <a
                      href="/social-media-marketing-services"
                      className="cursor-pointer"
                    >
                      social media marketing tactics that drive pre-launch buzz{" "}
                    </a>{" "}
                    and user interest.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 mt-4 max-sm:flex-col">
                <a href="/contact-us" className="flex items-center gap-2">
                  <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                    Free Consultation
                  </button>
                  <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                    <FaArrowRight className="w-5 h-5 text-white" />
                  </div>
                </a>
              </div>
            </div>

            {/* Mobile App Development Process Section */}
            <section className="w-full">
              <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px]   mb-6 text-[#283A64] text-center">
                Our Development Process - From Idea to Impact
              </h2>
              <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-8">
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
                        <FaLightbulb className="w-10 h-10" />
                        <div className="min-h-[90px] flex items-center justify-center">
                          <h3 className="text-xl font-bold text-center">
                            Discovery & Idea Validation
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-700 text-base mb-4 text-center min-h-[168px]">
                        We learn about your idea, understand your users,
                        evaluate competitors, and explore technical feasibility.
                        Our team conducts workshops to identify core features,
                        define MVP, and set project milestones. We research your
                        industry trends, assess user needs through personas, and
                        explore the problem-solution fit to ensure your app has
                        product-market alignment.
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
                  {/* Card 2: UI/UX Design & Prototyping */}
                  <div className="relative">
                    <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-b from-[#a9b2c3] to-[#c8ebf4]" />
                    <div className="relative z-10 rounded-2xl shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                      <div className="flex flex-row gap-2 text-[#283A64] items-center min-h-[90px]">
                        <FaLightbulb className="w-10 h-10" />
                        <div className="min-h-[90px] flex items-center justify-center">
                          <h3 className="text-xl font-bold text-center">
                            UI/UX Design & Prototyping
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-700 text-base mb-4 text-center min-h-[168px]">
                        Our designers create intuitive and engaging user
                        interfaces. We deliver clickable prototypes, wireframes,
                        and mockups enriched with{" "}
                        <a
                          href="/graphics-designing-services"
                          className="cursor-pointer"
                        >
                          professional graphic design elements tailored to your
                          brand.
                        </a>{" "}
                        Design thinking is at the heart of our process — we
                        involve users in the early feedback loop and use tools
                        like Figma and InVision for high-fidelity prototyping.
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
                  {/* Card 3: Agile App Development */}
                  <div className="relative">
                    <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-b from-[#a9b2c3] to-[#c8ebf4]" />
                    <div className="relative z-10 rounded-2xl shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                      <div className="flex flex-row gap-2 text-[#283A64] items-center min-h-[90px]">
                        <FaLightbulb className="w-10 h-10" />
                        <div className="min-h-[90px] flex items-center justify-center">
                          <h3 className="text-xl font-bold text-center">
                            Agile App Development
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-700 text-base mb-4 text-center min-h-[168px]">
                        We develop in sprints and share working builds for
                        feedback. This iterative model allows flexibility, risk
                        management, and better stakeholder collaboration. Our
                        code is clean, well-documented, and built to scale. We
                        use continuous integration and automated testing to
                        ensure your app is always deployable and high-quality.
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
                  {/* Card 4: Testing & Quality Assurance */}
                  <div className="relative">
                    <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-b from-[#a9b2c3] to-[#c8ebf4]" />
                    <div className="relative z-10 rounded-2xl shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                      <div className="flex flex-row gap-2 text-[#283A64] items-center min-h-[90px]">
                        <FaLightbulb className="w-10 h-10" />
                        <div className="min-h-[90px] flex items-center justify-center">
                          <h3 className="text-xl font-bold text-center">
                            Testing & Quality Assurance
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-700 text-base mb-4 text-center min-h-[168px]">
                        We ensure functionality, security, and performance
                        through rigorous QA. From unit testing to regression and
                        UAT (User Acceptance Testing), every module is
                        thoroughly tested — especially in critical products like
                        mobile banking app development services where security
                        and reliability are paramount. We also conduct
                        performance testing to handle spikes in traffic and
                        simulate real-world usage conditions.
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
                  {/* Card 5: Deployment & Launch */}
                  <div className="relative">
                    <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-b from-[#a9b2c3] to-[#c8ebf4]" />
                    <div className="relative z-10 rounded-2xl shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                      <div className="flex flex-row gap-2 text-[#283A64] items-center min-h-[90px]">
                        <FaLightbulb className="w-10 h-10" />
                        <div className="min-h-[90px] flex items-center justify-center">
                          <h3 className="text-xl font-bold text-center">
                            Deployment & Launch
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-700 text-base mb-4 text-center min-h-[168px]">
                        We prepare your app for a successful launch on the App
                        Store and Google Play. Our team assists with metadata,
                        screenshots, ASO, and{" "}
                        <a
                          href="/professional-video-editing-services"
                          className="cursor-pointer"
                        >
                          app promo videos created with expert video editing
                          services
                        </a>{" "}
                        for a smooth launch. Our DevOps team ensures smooth
                        deployment with zero-downtime rollouts and rollback
                        capabilities if needed.
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
                  {/* Card 6: Post-Launch Support */}
                  <div className="relative">
                    <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-b from-[#a9b2c3] to-[#c8ebf4]" />
                    <div className="relative z-10 rounded-2xl shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                      <div className="flex flex-row gap-2 text-[#283A64] items-center min-h-[90px]">
                        <FaLightbulb className="w-10 h-10" />
                        <div className="min-h-[90px] flex items-center justify-center">
                          <h3 className="text-xl font-bold text-center">
                            Post-Launch Support
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-700 text-base mb-4 text-center min-h-[168px]">
                        The journey doesn’t end after launch. We provide regular
                        updates, monitor analytics, enhance app performance, and
                        scale infrastructure based on your growth. You also
                        receive monthly health reports, crash analytics, and
                        user behavior insights to drive continuous improvement.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Industries We Serve */}
            <section>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px]   mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Industries We <span className="text-cyan-400">Serve</span>
              </h2>
              <p className="text-sm md:text-md mb-6 text-[#222]">
                Our industry-specific solutions help businesses stand out and
                deliver personalized mobile experiences.
              </p>
              <ul className="list-disc ml-6 mb-6 text-sm md:text-md text-[#222] space-y-2">
                <li>
                  <span className="text-[#283A64]">Healthcare & Wellness</span>{" "}
                  – Telemedicine, appointment scheduling, fitness tracking
                </li>
                <li>
                  <span className="text-[#283A64]">E-commerce & Retail</span> –
                  Catalog management, personalized shopping, mobile checkout
                </li>
                <li>
                  <span className="text-[#283A64]">Education & E-Learning</span>{" "}
                  – Online courses, student tracking, interactive quizzes
                </li>
                <li>
                  <span className="text-[#283A64]">Finance & Fintech</span> –
                  Our mobile app development financial services include secure
                  mobile banking, budgeting tools, and investment tracking apps.
                </li>
                <li>
                  <span className="text-[#283A64]">
                    Transportation & Logistics
                  </span>{" "}
                  – Delivery routing, live GPS, fleet tracking
                </li>
                <li>
                  <span className="text-[#283A64]">Entertainment & OTT</span> –
                  Content streaming, subscriptions, user profiles
                </li>
                <li>
                  <span className="text-[#283A64]">Real Estate & PropTech</span>{" "}
                  – Property listings, 3D tours, lead capture forms
                </li>
                <li>
                  <span className="text-[#283A64]">
                    Manufacturing & Field Services
                  </span>{" "}
                  – Workflow apps, inventory tracking, job assignments
                </li>
                <li>
                  <span className="text-[#283A64]">Travel & Hospitality</span> –
                  Booking apps, travel guides, location-based services
                </li>
              </ul>
              <p className="text-sm md:text-md text-[#222]">
                Have a unique concept? Let us custom-build your app while
                aligning it with{" "}
                <a
                  href="/digital-marketing-services"
                  className="cursor-pointer"
                >
                  digital marketing strategies focused on user acquisition and
                  retention.{" "}
                </a>{" "}
              </p>
              <div className="flex gap-4 mt-4">
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

            {/* Technology Stack Section */}
            <section>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px]   mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Our <span className="text-cyan-400">Technology Stack</span>
              </h2>
              <p className="text-sm md:text-md mb-6 text-[#222]">
                We work with a robust and modern stack to power scalable,
                future-proof apps:
              </p>

              <ul className="list-disc ml-6 mb-6 text-sm md:text-md text-[#222] space-y-2">
                <li>
                  <span className="text-[#283A64]">Frontend:</span> Flutter,
                  React Native, Kotlin, Swift
                </li>
                <li>
                  <span className="text-[#283A64]">Backend:</span> Node.js,
                  Express, Firebase
                </li>
                <li>
                  <span className="text-[#283A64]">Database:</span> MongoDB,
                  MySQL, PostgreSQL
                </li>
                <li>
                  <span className="text-[#283A64]">Cloud/Hosting:</span> AWS,
                  Azure, Docker, Vercel
                </li>
                <li>
                  <span className="text-[#283A64]">DevOps & Tools:</span>{" "}
                  GitHub, Postman, Jira, Figma, Notion
                </li>
                <li>
                  <span className="text-[#283A64]">CI/CD:</span> GitHub Actions,
                  Bitbucket Pipelines, Jenkins
                </li>
                <li>
                  <span className="text-[#283A64]">Security:</span> OAuth 2.0,
                  SSL, JWT, GDPR Compliance
                </li>
              </ul>

              <p className="text-sm md:text-md text-[#222]">
                We help you choose the right stack based on performance needs,
                development timelines, and long-term support.
              </p>
            </section>

            {/* What Clients Are Saying - Testimonials Section */}
            <Testimonials />

            {/* FAQ Section for Web Development */}
            <WebDevFAQ />

            {/* Ready to Build Your Mobile App? */}
            <div>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-6 text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Ready to{" "}
                <span className="text-cyan-400">Build Your Mobile App?</span>
              </h2>
              <p className="text-sm md:text-md mb-6 text-[#222]">
                Whether you’re a startup founder, enterprise team, or digital
                agency looking for a white-label partner — Logisol Technologies
                is here to bring your vision to life.
              </p>
              <div className="flex flex-row gap-4 mt-4 max-sm:flex-col">
                <a href="/contact-us" className="flex items-center gap-2">
                  <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                    Free Consult & Cost Quote
                  </button>
                  <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                    <FaArrowRight className="w-5 h-5 text-white" />
                  </div>
                </a>
                <a href="/contact-us" className="flex items-center gap-2">
                  <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                    Claim Free Cost Estimate
                  </button>
                  <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                    <FaArrowRight className="w-5 h-5 text-white" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Right: Sticky Services Category Card (md and up only) */}
          <div className="hidden lg:block flex-shrink-0 w-full md:w-[350px] lg:w-[400px]">
            <ServicesCategory />
          </div>
        </div>
      </section>
      {/* On mobile, show ServicesCategory at the bottom before Collaborate */}
      <div className="z-20 block lg:hidden w-full px-8 md:px-16 lg:px-24 mt-8">
        <ServicesCategory />
      </div>
      <Collaborate />
      <Footer />

      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Mobile App Development",
          description:
            "Get full-stack mobile app development services for iOS and Android. We help startups and enterprises launch sleek, secure, high-performance mobile apps.",
          serviceType: "iOS & Android Apps | Mobile Development Services",
          provider: {
            "@type": "Organization",
            name: "Logisol Technologies",
            url: "https://logisol.tech",
            logo: "https://logisol.tech/logisol-logo-nav.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-626-671-6483",
              contactType: "Customer Support",
              email: "info@logisol.tech",
              availableLanguage: ["English"],
            },
          },
          areaServed: [
            {
              "@type": "Place",
              name: "United States",
            },
            {
              "@type": "Place",
              name: "Global",
            },
          ],
          url: "https://logisol.tech/mobile-application-development-services/",
        })}
      </Script>

      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How do I develop a mobile app?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "It starts with defining your goals and audience. Next, you’ll need wireframes, a tech stack (like React Native or Kotlin), and a development team. With Logisol, you get a full-cycle partner who handles everything from strategy to launch.",
              },
            },
            {
              "@type": "Question",
              name: "What is the mobile app development process?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "It includes:\n\nPlanning and Discovery\nDesign (UI/UX)\nDevelopment (Front-end and Back-end)\nTesting and QA\nDeployment\nLaunch\nPost-launch Support",
              },
            },
            {
              "@type": "Question",
              name: "What are the 7 stages of app development?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Idea Validation\nMarket Research\nWireframing & UI Design\nDevelopment\nTesting\nLaunch\nMaintenance & Scaling",
              },
            },
            {
              "@type": "Question",
              name: "How do I plan an app?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Start with user research, define core features, and outline a monetization strategy. Sketch wireframes or prototypes and work with experts to translate your vision into an actionable roadmap.",
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
              name: "review",
              author: { "@type": "Person", name: "Emily Johnson" },
              reviewBody:
                "We approached Logisol with just an idea — and in less than two months, we had a fully functional MVP. The speed and quality of execution were unmatched.",
              itemReviewed: {
                "@type": "Organization",
                name: "Logisol Technologies",
                url: "https://logisol.tech",
              },
              publisher: { "@type": "Organization", name: "MedAssist" },
            },
            {
              "@type": "Review",
              name: "review",
              author: { "@type": "Person", name: "Michael Thompson" },
              reviewBody:
                "What sets Logisol apart is their commitment after launch. They didn’t just build our app — they helped us scale it, fix user feedback loops, and continue improving.",
              itemReviewed: {
                "@type": "Organization",
                name: "Logisol Technologies",
                url: "https://logisol.tech",
              },
              publisher: { "@type": "Organization", name: "FinSavvy" },
            },
            {
              "@type": "Review",
              name: "review",
              author: { "@type": "Person", name: "Jessica Miller" },
              reviewBody:
                "The app UI/UX was beyond what we expected. Sleek, intuitive, and aligned with our brand perfectly.",
              itemReviewed: {
                "@type": "Organization",
                name: "Logisol Technologies",
                url: "https://logisol.tech",
              },
              publisher: { "@type": "Organization", name: "LearnLoop" },
            },
            {
              "@type": "Review",
              name: "review",
              author: { "@type": "Person", name: "David Wilson" },
              reviewBody:
                "We needed both Android and iOS apps — fast. Logisol used Flutter and delivered a single codebase solution that cut our development time and costs.",
              itemReviewed: {
                "@type": "Organization",
                name: "Logisol Technologies",
                url: "https://logisol.tech",
              },
              publisher: { "@type": "Organization", name: "QuickFleet" },
            },
            {
              "@type": "Review",
              name: "review",
              author: { "@type": "Person", name: "Ashley Davis" },
              reviewBody:
                "Logisol’s team communicated clearly at every step. Weekly demos kept us in the loop, and their agile process made us feel like part of the team.",
              itemReviewed: {
                "@type": "Organization",
                name: "Logisol Technologies",
                url: "https://logisol.tech",
              },
              publisher: { "@type": "Organization", name: "StyleBay" },
            },
          ],
        })}
      </Script>

      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "iOS & Android Apps | Mobile Development Services",
          description:
            "Get full-stack mobile app development services for iOS and Android. We help startups and enterprises launch sleek, secure, high-performance mobile apps.",
          image: "https://logisol.tech/logisol-logo-nav.png",
          url: "https://logisol.tech/mobile-application-development-services/",
          brand: {
            "@type": "Brand",
            name: "Logisol Technologies",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "2",
            bestRating: "5",
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
        "The app UI/UX was beyond what we expected. Sleek, intuitive, and aligned with our brand perfectly.",
      name: "Jessica Miller",
      title: "Product Manager, LearnLoop",
    },
    {
      quote:
        "What sets Logisol apart is their commitment after launch. They didn't just build our app — they helped us scale it, fix user feedback loops, and continue improving. Their ongoing support and dedication to our success has been invaluable. The team's responsiveness and technical expertise helped us create an app that keeps getting better with each update.",
      name: "Michael Thompson",
      title: "CTO, FinSavvy",
    },
    {
      quote:
        "We approached Logisol with just an idea — and in less than two months, we had a fully functional MVP. The speed and quality of execution were unmatched.",
      name: "Emily Johnson",
      title: "Co-Founder, MedAssist",
    },
    {
      quote:
        "Logisol's team communicated clearly at every step. Weekly demos kept us in the loop, and their agile process made us feel like part of the team.",
      name: "Ashley Davis",
      title: "Head of Strategy, StyleBay",
    },
    {
      quote:
        "We needed both Android and iOS apps — fast. Logisol used Flutter and delivered a single codebase solution that cut our development time and costs.",
      name: "David Wilson",
      title: "Operations Head, QuickFleet",
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
      question: "How do I develop a mobile app?",
      answer:
        "It starts with defining your goals and audience. Next, you’ll need wireframes, a tech stack (like React Native or Kotlin), and a development team. With Logisol, you get a full-cycle partner who handles everything from strategy to launch.",
    },
    {
      question: "What is the mobile app development process?",
      answer: (
        <ul className="list-decimal pl-5 space-y-1">
          <li>Planning and Discovery</li>
          <li>Design (UI/UX)</li>
          <li>Development (Front-end and Back-end)</li>
          <li>Testing and QA</li>
          <li>Deployment</li>
          <li>Launch</li>
          <li>Post-launch Support</li>
        </ul>
      ),
    },
    {
      question: "What are the 7 stages of app development?",
      answer: (
        <ul className="list-decimal pl-5 space-y-1">
          <li>Idea Validation</li>
          <li>Market Research</li>
          <li>Wireframing & UI Design</li>
          <li>Development</li>
          <li>Testing</li>
          <li>Launch</li>
          <li>Maintenance & Scaling</li>
        </ul>
      ),
    },
    {
      question: "How do I plan an app?",
      answer:
        "Start with user research, define core features, and outline a monetization strategy. Sketch wireframes or prototypes and work with experts to translate your vision into an actionable roadmap.",
    },
  ];
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="w-full max-w-4xl mx-auto mt-16 mb-8">
      <h2 className="text-[50px] max-xl:text-[40px] max-sm:text-[30px]   text-[#283A64] mb-8 text-center">
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
