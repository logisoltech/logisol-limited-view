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

export default function FAQs() {
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
            Frequently <span className="text-cyan-400">Asked </span>
            Questions
            <br />
            (FAQ's)
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
            {/* FAQ Section for Web Development */}
            <WebDevFAQ />
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
    </div>
  );
}

function WebDevFAQ() {
  const faqs = [
    {
      title: "General Information",
      faqs: [
        {
          question: "What services does Logisol Technologies offer?",
          answer:
            "We provide mobile app development (Android, iOS, Flutter, React Native), website design & development, SEO, social media marketing, graphic designing, and video editing services.",
        },
        {
          question: "How do I get started with your services?",
          answer:
            "Just contact us through our website, email, or phone. Our team will schedule a consultation to understand your needs and guide you through the next steps.",
        },
        {
          question: "Do you offer custom solutions or pre-built packages?",
          answer:
            "We offer both. Depending on your business goals, we can create a fully customized solution or provide package-based services for faster deployment.",
        },
        {
          question: "What industries do you serve?",
          answer:
            "We work with clients from various industries including eCommerce, healthcare, education, real estate, logistics, and more.",
        },
        {
          question: "How do you ensure quality and client satisfaction?",
          answer:
            "We follow industry-standard development practices, provide regular updates, and offer revisions based on client feedback to ensure 100% satisfaction.",
        },
        {
          question: "Can I hire your team on a monthly or project basis?",
          answer:
            "Yes, we offer both flexible hiring models—monthly retainers and fixed project-based pricing.",
        },
        {
          question: "Where is Logisol Technologies located? Do you work internationally?",
          answer:
            "We are based in [add your city/country], and we proudly work with clients around the globe.",
        },
      ],
    },    
    {
      title: "Mobile App Development",
      faqs: [
        {
          question: "Do you develop native apps for Android and iOS?",
          answer:
            "Yes, we have expert developers for both Android (Java/Kotlin) and iOS (Swift) platforms.",
        },
        {
          question: "What is cross-platform development and why should I choose it?",
          answer:
            "Cross-platform development using Flutter or React Native lets you build one app that works on both Android and iOS, saving time and cost.",
        },
        {
          question: "How long does it take to build a mobile app?",
          answer:
            "It depends on features and complexity. A basic app may take 3–4 weeks, while advanced apps could take 2–3 months or more.",
        },
        {
          question: "Will you help me launch the app on the Play Store and App Store?",
          answer:
            "Yes, we handle the complete deployment process, including submission and store approval.",
        },
        {
          question: "Can I update or scale my app after it’s launched?",
          answer:
            "Absolutely. We offer ongoing support, feature updates, and scalability options to grow your app over time.",
        },
        {
          question: "Do you offer UI/UX design for mobile apps?",
          answer:
            "Yes, we create modern, user-friendly interfaces that enhance user experience across all devices.",
        },
        {
          question: "Is my app idea secure with you?",
          answer:
            "100%. We sign NDAs (Non-Disclosure Agreements) to protect your idea and data.",
        },
      ],
    },
    {
      title: "Website Design & Development",
      faqs: [
        {
          question: "Do you build custom websites or use templates?",
          answer:
            "We specialize in fully custom website development tailored to your brand. However, we also offer template-based solutions for faster turnaround.",
        },
        {
          question: "What technologies do you use for website development?",
          answer:
            "We work with HTML5, CSS3, JavaScript, WordPress, PHP, Laravel, React, JS, and other modern technologies.",
        },
        {
          question: "Will my website be mobile and SEO-friendly?",
          answer:
            "Yes, all our websites are responsive (mobile-friendly) and SEO-optimized by default.",
        },
        {
          question: "Do you offer eCommerce website development?",
          answer:
            "Yes, we develop custom eCommerce websites with secure payment gateways and product management systems.",
        },
        {
          question: "How much does a website cost and how long does it take?",
          answer:
            "Basic websites can start in 5–7 days. Cost varies based on features, but we offer competitive pricing for all budgets.",
        },
        {
          question: "Can I manage and update the website myself after it’s built?",
          answer:
            "Yes, we provide CMS-based websites (like WordPress) where you can easily make changes on your own.",
        },
        {
          question: "Do you provide website maintenance and support?",
          answer:
            "Yes, we offer monthly maintenance packages and on-demand support services.",
        },
      ],
    },
    {
      title: "SEO (Search Engine Optimization)",
      faqs: [
        {
          question: "What SEO services do you offer?",
          answer:
            "We provide on-page SEO, off-page SEO, technical SEO, and local SEO to improve your site’s visibility and traffic.",
        },
        {
          question: "When can I expect to see SEO results?",
          answer:
            "SEO results typically start appearing within 2–3 months, with significant improvements over 6 months.",
        },
      ],
    },
    {
      title: "Social Media Marketing",
      faqs: [
        {
          question: "Do you manage social media accounts?",
          answer:
            "Yes, we manage and grow accounts on Facebook, Instagram, LinkedIn, Twitter, and other platforms.",
        },
        {
          question: "Can you create content for social media campaigns?",
          answer:
            "Absolutely! We design graphics, write captions, and even handle ad campaigns.",
        },
      ],
    },
    {
      title: "Graphic Designing",
      faqs: [
        {
          question: "What kind of graphic designs do you provide?",
          answer:
            "Logo design, business cards, social media posts, brochures, flyers, and branding materials.",
        },
        {
          question: "How quickly can you deliver a design?",
          answer:
            "Most designs are delivered within 2–4 business days, depending on complexity.",
        },
      ],
    }                    
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="w-full max-w-4xl mx-auto mt-16 mb-8">
      {faqs.map((faq, index) => {
        return (
          <div key={index} className="mb-20">
            <h2
              className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-6 text-[#283A64]"
              style={{ lineHeight: "1.15" }}
            >
              <span className="text-[#283A64]">{faq.title.split(' ')[0]}</span>{" "}
              <span className="text-cyan-400">{faq.title.split(' ').slice(1).join(' ')}</span>
            </h2>
            <div className="flex flex-col gap-5">
              {faq.faqs.map((faq, idx) => {
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
          </div>
        );
      })}
    </section>
  );
}
