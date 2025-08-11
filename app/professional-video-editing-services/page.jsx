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

export default function ProfessionalVideoEditingServices() {
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
            Professional <span className="text-cyan-400">Video Editing </span>
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
                  src="/services/video-editing.webp"
                  alt="Professional Video Editing Services"
                  className="w-full h-[340px] object-cover object-center"
                />
              </div>
            </div>

            {/* Skilled Video Editor Section */}
            <section>
              <motion.div
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <h2
                  className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-6 text-[#283A64]"
                  style={{ lineHeight: "1.15" }}
                >
                  Quickly Add a{" "}
                  <span className="text-cyan-400">Skilled Video Editor</span> to
                  Your Team
                </h2>
                <p className="text-sm md:text-md mb-6 text-[#222]">
                  No need to waste time hiring or training. At{" "}
                  <span className="text-cyan-400">Logisol Technologies</span> we
                  make it easy and fast to get a professional video editor. You
                  can start in just a few minutes—not weeks.
                </p>
                <ul className="list-disc ml-6 mb-6 text-sm md:text-md text-[#222] space-y-2">
                  <li>
                    <span className="text-[#283A64]">
                      No extra work for you
                    </span>{" "}
                    – We manage everything behind the scenes
                  </li>
                  <li>
                    <span className="text-[#283A64]">
                      No need to hire full-time staff
                    </span>{" "}
                    – Use our service only when needed
                  </li>
                  <li>
                    <span className="text-[#283A64]">
                      Find your perfect editor today
                    </span>{" "}
                    – We choose someone who fits your content style and industry
                  </li>
                  <li>
                    <span className="text-[#283A64]">
                      Flexible monthly plans
                    </span>{" "}
                    – Add or reduce work whenever you want
                  </li>
                </ul>
                <p className="text-sm md:text-md text-[#222]">
                  Whether you're working solo, running a startup, or managing a
                  busy agency, our editing service fits right in—especially if
                  you're also building new platforms like mobile apps for your
                  users. <br /> <br /> Make more videos. Spend less time
                  editing. Let Logisol do the hard work so you can focus on your
                  ideas.
                </p>
              </motion.div>
            </section>

            {/* Section: Your Reliable Video Editing Partner */}
            <section>
              <motion.div
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <h2
                  className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-4 text-[#283A64]"
                  style={{ lineHeight: "1.15" }}
                >
                  Your Reliable{" "}
                  <span className="text-[#3ac7e8]">Video Editing</span> Partner
                </h2>
                <p className="text-sm md:text-md mb-6 text-[#222]">
                  At <span className="text-[#3ac7e8]">Logisol</span>, we do more
                  than just cut and trim videos. We work with you to bring your
                  ideas to life. Whether you're a YouTuber, influencer, business
                  owner, or agency, we help you tell your story clearly.
                </p>
                <ul className="list-disc ml-6 mb-6 text-sm md:text-md text-[#222] space-y-2">
                  <li>
                    Great for content creators, social media teams, coaches,
                    agencies, and online brands
                  </li>
                  <li>Every video matches your voice, brand, and audience</li>
                  <li>
                    We handle every format—shorts, reels, verticals—and make
                    sure your videos are always aligned with your brand's social
                    media storytelling.
                  </li>
                </ul>
                <p className="text-sm md:text-md text-[#222]">
                  We understand your platform, your audience, and your goals.
                  Let's create videos that work for you.
                </p>
              </motion.div>
            </section>

            {/* Section: Trusted by Content Creators */}
            <section>
              <motion.div
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <h2
                  className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-4 text-[#283A64]"
                  style={{ lineHeight: "1.15" }}
                >
                  Trusted by{" "}
                  <span className="text-[#3ac7e8]">Content Creators</span>
                  <br />
                  Around the World
                </h2>
                <p className="text-sm md:text-md mb-6 text-[#222]">
                  From new YouTubers to big digital agencies, people from
                  different industries trust{" "}
                  <span className="text-[#3ac7e8]">Logisol</span> for fast,
                  high-quality video editing.
                </p>
                <ul className="list-disc ml-6 mb-6 text-sm md:text-md text-[#222] space-y-2">
                  <li>
                    We've helped creators in fitness, finance, education, real
                    estate, and more
                  </li>
                  <li>Real stories and reviews from happy clients</li>
                  <li>
                    Our clients come back again and again—they become long-term
                    partners
                  </li>
                </ul>
                <p className="text-sm md:text-md text-[#222]">
                  Join the many creators who trust us to grow their brand and
                  reach more viewers.
                </p>
              </motion.div>
            </section>

            {/* Why Choose Logisol for Video Editing Section */}
            <section>
              <motion.div
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <h2
                  className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-4 text-[#283A64]"
                  style={{ lineHeight: "1.15" }}
                >
                  Why Choose <span className="text-[#3ac7e8]">Logisol</span> for{" "}
                  <span className="text-[#3ac7e8]">Video Editing</span>
                </h2>
                <p className="text-sm md:text-md mb-6 text-[#222]">
                  We don't just make videos look better—we edit them to support
                  your overall digital presence, just like strong SEO strategies
                  help you stay visible in search.
                </p>
                <ul className="list-disc ml-6 mb-6 text-sm md:text-md text-[#222] space-y-2">
                  <li>
                    Save over 10 hours per week by letting us do the editing
                  </li>
                  <li>Get your videos back in 1–2 business days</li>
                  <li>
                    Every video goes through quality checks before delivery
                  </li>
                  <li>We use smart editing that helps keep viewers engaged</li>
                </ul>
                <p className="text-sm md:text-md text-[#222]">
                  Grow your channel, attract customers, and stop wasting time.
                  Let us turn your videos into ready-to-post content.
                </p>
              </motion.div>
            </section>

            {/* Custom Videos Delivered Every Day Section */}
            <section>
              <motion.div
                custom={4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <h2
                  className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-4 text-[#283A64]"
                  style={{ lineHeight: "1.15" }}
                >
                  Custom <span className="text-[#3ac7e8]">Videos</span>{" "}
                  Delivered Every Day
                </h2>
                <p className="text-sm md:text-md mb-6 text-[#222]">
                  In today's online world, regular content is important. That's
                  why <span className="text-[#3ac7e8]">Logisol</span> is
                  designed to give you new videos whenever you need them—even
                  every day.
                </p>
                <ul className="list-disc ml-6 mb-6 text-sm md:text-md text-[#222] space-y-2">
                  <li>Submit your projects to us—we work on them daily</li>
                  <li>Our system reduces the back-and-forth time</li>
                  <li>
                    Ask for changes anytime—we'll revise until you're happy
                  </li>
                </ul>
                <p className="text-sm md:text-md text-[#222]">
                  Want daily videos? We're ready. We work fast, stay flexible,
                  and focus on your satisfaction.
                </p>
              </motion.div>
            </section>

            {/* Get Your Time Back—Let Us Handle the Editing Section */}
            <section>
              <motion.div
                custom={5}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <h2
                  className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-4 text-[#283A64]"
                  style={{ lineHeight: "1.15" }}
                >
                  Get Your Time Back—
                  <span className="text-[#3ac7e8]">Let Us</span> Handle the
                  Editing
                </h2>
                <p className="text-sm md:text-md mb-6 text-[#222]">
                  Every hour you spend editing could be used for better
                  things—like planning your next campaign or improving your
                  online tools through custom web development solutions. We're
                  here to help.
                </p>
                <ul className="list-disc ml-6 mb-6 text-sm md:text-md text-[#222] space-y-2">
                  <li>Stop feeling tired or overwhelmed by editing</li>
                  <li>Use your time to plan, post, or promote</li>
                  <li>
                    Best for solo creators, small businesses, and personal
                    brands
                  </li>
                </ul>
                <p className="text-sm md:text-md text-[#222]">
                  Create without stress. Grow without editing delays. Logisol
                  takes care of your post-production.
                </p>
              </motion.div>
            </section>

            {/* Edit More Videos Without the Stress Section */}
            <section>
              <motion.div
                custom={6}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <h2
                  className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-4 text-[#283A64]"
                  style={{ lineHeight: "1.15" }}
                >
                  Edit More <span className="text-[#3ac7e8]">Videos</span>{" "}
                  Without the Stress
                </h2>
                <p className="text-sm md:text-md mb-6 text-[#222]">
                  Have many videos to edit each month? No problem. Our system is
                  built for handling a large amount of work.
                </p>
                <ul className="list-disc ml-6 mb-6 text-sm md:text-md text-[#222] space-y-2">
                  <li>
                    Ideal for agencies, large marketing teams, and growing
                    brands
                  </li>
                  <li>Easy communication with your assigned manager</li>
                  <li>
                    White-label options if you need to show content to your
                    clients
                  </li>
                </ul>
                <p className="text-sm md:text-md text-[#222]">
                  No delays. No stress. Just fast, dependable video editing.
                </p>
              </motion.div>
            </section>

            {/* Videos Made to Keep Viewers Watching Section */}
            <section>
              <motion.div
                custom={7}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <h2
                  className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-4 text-[#283A64]"
                  style={{ lineHeight: "1.15" }}
                >
                  Videos Made to Keep{" "}
                  <span className="text-[#3ac7e8]">Viewers</span> Watching
                </h2>
                <p className="text-sm md:text-md mb-6 text-[#222]">
                  We combine smart technology with creative editing. This helps
                  us make videos that people actually watch all the way through.
                </p>
                <ul className="list-disc ml-6 mb-6 text-sm md:text-md text-[#222] space-y-2">
                  <li>
                    We know how to edit for YouTube, TikTok, Instagram,
                    LinkedIn, and more
                  </li>
                  <li>
                    We use music, timing, and strong calls-to-action to keep
                    people interested
                  </li>
                  <li>
                    Our goal is to stop the scroll—just like effective digital
                    marketing campaigns do by capturing the right audience
                    attention at the right time.
                  </li>
                </ul>
                <p className="text-sm md:text-md text-[#222]">
                  We don't just follow trends—we help you grow your audience by
                  making videos that perform.
                </p>
              </motion.div>
            </section>

            {/* One Platform. Unlimited Edits. Full Support. Section */}
            <section>
              <motion.div
                custom={8}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <h2
                  className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-4 text-[#283A64]"
                  style={{ lineHeight: "1.15" }}
                >
                  One Platform. Unlimited Edits. Full Support.
                </h2>
                <p className="text-sm md:text-md mb-6 text-[#222]">
                  Everything you need is in one easy-to-use system. Request,
                  review, and revise your videos in just a few clicks.
                </p>
                <ul className="list-disc ml-6 mb-6 text-sm md:text-md text-[#222] space-y-2">
                  <li>
                    Submit projects, give feedback, and check progress all in
                    one place
                  </li>
                  <li>Ask for unlimited edits—no extra charges</li>
                  <li>24/7 support and clear visibility of your projects</li>
                </ul>
                <p className="text-sm md:text-md text-[#222]">
                  Stay in control without doing all the work. We make video
                  editing simple and stress-free.
                </p>
              </motion.div>
            </section>

            {/* Meet Your Personal Video Editing Team Section */}
            <section>
              <motion.div
                custom={9}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <h2
                  className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] mb-4 text-[#283A64]"
                  style={{ lineHeight: "1.15" }}
                >
                  Meet Your Personal{" "}
                  <span className="text-[#3ac7e8]">Video Editing</span> Team
                </h2>
                <p className="text-sm md:text-md mb-6 text-[#222]">
                  A good video needs more than tools—it needs people who
                  understand your style. That's what we offer.
                </p>
                <ul className="list-disc ml-6 mb-6 text-sm md:text-md text-[#222] space-y-2">
                  <li>
                    You get a dedicated editor who understands your brand
                    visuals, especially if you've worked with us on graphic
                    design materials like logos or video overlays.
                  </li>
                  <li>
                    We specialize in different areas like YouTube, coaching,
                    real estate, ecommerce, and more
                  </li>
                  <li>We give creative ideas and suggestions—not just edits</li>
                </ul>
                <p className="text-sm md:text-md text-[#222]">
                  We don't just follow your instructions—we become your content
                  partner.
                </p>
              </motion.div>
            </section>

            {/* What Clients Are Saying - Testimonials Section */}
            <Testimonials />

            {/* FAQ Section for Web Development */}
            <WebDevFAQ />

            {/* Ready to Build Your Mobile App? */}
            <section className="space-y-8">
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Ready to Improve Your{" "}
                <span className="text-cyan-400">Videos</span> with Professional
                Editing?
              </h2>
              <div className="flex flex-row gap-4">
                <a href="/contact-us" className="flex items-center gap-2">
                  <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                    Free or Book a Demo now
                  </button>
                  <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                    <FaArrowRight className="w-5 h-5 text-white" />
                  </div>
                </a>
              </div>
              <p className="text-sm md:text-md text-[#222]">
                Whether you're a startup founder, enterprise team, or digital
                agency looking for a white-label partner — Logisol Technologies
                is here to bring your vision to life.
              </p>
            </section>
          </div>
          {/* Right: Sticky Services Category Card (md and up only) */}
          <div className="hidden md:block flex-shrink-0 w-full md:w-[350px] lg:w-[400px]">
            <ServicesCategory />
          </div>
        </div>
      </section>
      {/* On mobile, show ServicesCategory at the bottom before Collaborate */}
      <div className="block md:hidden w-full px-8 md:px-16 lg:px-24 mt-8">
        <ServicesCategory />
      </div>
      <Collaborate />
      <Footer />

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
                url: "https://logisol.tech/professional-video-editing-services/",
              },
              author: { "@type": "Person", name: "Daniel Ross" },
              reviewBody:
                "Working with Logisol Technologies was a smooth and professional experience. Their video editors took our raw footage and turned it into something cinematic and polished. Communication was easy, and the final result exceeded our expectations.",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              publisher: { "@type": "Organization", name: "EchoFrame Media" },
            },
            {
              "@type": "Review",
              name: "Review",
              itemReviewed: {
                "@type": "Organization",
                name: "Logisol Technologies",
                url: "https://logisol.tech/professional-video-editing-services/",
              },
              author: { "@type": "Person", name: "Olivia Bennett" },
              reviewBody:
                "We needed several explainer videos for our healthcare platform, and Logisol delivered clean, well-paced edits that matched our brand voice. The team was receptive to feedback and always met deadlines, which made the whole process stress-free.",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              publisher: {
                "@type": "Organization",
                name: "Nova Health Solutions",
              },
            },
            {
              "@type": "Review",
              name: "Review",
              itemReviewed: {
                "@type": "Organization",
                name: "Logisol Technologies",
                url: "https://logisol.tech/professional-video-editing-services/",
              },
              author: { "@type": "Person", name: "Marcus Allen" },
              reviewBody:
                "From social media clips to promotional videos, Logisol has been our go-to partner. They understand our audience and consistently deliver edits that are visually engaging and professionally structured. Truly a dependable creative partner.",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              publisher: { "@type": "Organization", name: "GearUp Athletics" },
            },
          ],
        })}
      </Script>

      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How do I start with Logisol’s services?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Click “Get Started” and fill out a short form. We’ll find the right editor for your needs. You can submit your first project the same day.",
              },
            },
            {
              "@type": "Question",
              name: "What types of videos can you edit?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We edit all kinds—YouTube, TikTok, podcasts, ads, real estate tours, and more. If you filmed it, we can edit it.",
              },
            },
            {
              "@type": "Question",
              name: "Why should I choose Logisol instead of hiring someone?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Freelancers can be risky. In-house editors are expensive. With Logisol, you get skilled editors, simple pricing, and full support—without the hassle.",
              },
            },
            {
              "@type": "Question",
              name: "How fast will I get my edited videos?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Most videos are done in 1–2 business days. Need it faster? We offer express delivery for high-volume clients.",
              },
            },
            {
              "@type": "Question",
              name: "Can I work with the same editor each time?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We assign you a dedicated editor or team to keep your content consistent.",
              },
            },
            {
              "@type": "Question",
              name: "Do you work with agencies and large teams?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We support agencies and big brands with white-label options and large editing packages.",
              },
            },
            {
              "@type": "Question",
              name: "How much do your services cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer simple monthly plans based on how much content you have. No hidden charges. Ask us for a quote today.",
              },
            },
          ],
        })}
      </Script>

      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Professional Video Editing Services",
          description:
            "Boost your content with expert video editing services. Enjoy fast turnaround, creative edits, and pro results tailored to your brand or unique style.",
          url: "https://logisol.tech/professional-video-editing-services/",
          provider: {
            "@type": "Organization",
            name: "Logisol Technologies",
            url: "https://logisol.tech",
            logo: "https://logisol.tech/logisol-logo-nav.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-626-671-6483",
              contactType: "Customer Service",
              email: "info@logisol.tech",
            },
          },
          serviceType: "Professional Video Editing Services",
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
          name: "Professional Video Editing Services",
          image: "https://logisol.tech/logisol-logo-nav.png",
          description:
            "Boost your content with expert video editing services. Enjoy fast turnaround, creative edits, and pro results tailored to your brand or unique style.",
          url: "https://logisol.tech/professional-video-editing-services/",
          brand: {
            "@type": "Organization",
            name: "Logisol Technologies",
            url: "https://logisol.tech",
            logo: "https://logisol.tech/logisol-logo-nav.png",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: 2,
            bestRating: "5",
            worstRating: "1",
          },
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
                "Logisol Technologies impressed us with their fast turnaround and professional video editing. Their attention to detail and storytelling skills made a huge difference.",
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
                "Excellent experience working with Logisol's video editing team. They delivered polished, creative work that matched our brand tone perfectly.",
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
        "Working with Logisol Technologies was a smooth and professional experience. Their video editors took our raw footage and turned it into something cinematic and polished. Communication was easy, and the final result exceeded our expectations.",
      name: "Daniel Ross",
      title: "Creative Director, EchoFrame Media",
    },
    {
      quote:
        "We needed several explainer videos for our healthcare platform, and Logisol delivered clean, well-paced edits that matched our brand voice. The team was receptive to feedback and always met deadlines, which made the whole process stress-free.",
      name: "Olivia Bennett",
      title: "Marketing Manager, Nova Health Solutions",
    },
    {
      quote:
        "From social media clips to promotional videos, Logisol has been our go-to partner. They understand our audience and consistently deliver edits that are visually engaging and professionally structured. Truly a dependable creative partner.",
      name: "Marcus Allen",
      title: "CEO, GearUp Athletics",
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
      question: "How do I start with Logisol's services?",
      answer:
        "Click Get Started and fill out a short form. We'll find the right editor for your needs. You can submit your first project the same day.",
    },
    {
      question: "What types of videos can you edit?",
      answer:
        "We edit all kinds—YouTube, TikTok, podcasts, ads, real estate tours, and more. If you filmed it, we can edit it.",
    },
    {
      question: "Why should I choose Logisol instead of hiring someone?",
      answer:
        "Freelancers can be risky. In-house editors are expensive. With Logisol, you get skilled editors, simple pricing, and full support—without the hassle.",
    },
    {
      question: "How fast will I get my edited videos?",
      answer:
        "Most videos are done in 1–2 business days. Need it faster? We offer express delivery for high-volume clients.",
    },
    {
      question: "Can I work with the same editor each time?",
      answer:
        "Yes. We assign you a dedicated editor or team to keep your content consistent.",
    },
    {
      question: "Do you work with agencies and large teams?",
      answer:
        "Yes. We support agencies and big brands with white-label options and large editing packages.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "We offer simple monthly plans based on how much content you have. No hidden charges. Ask us for a quote today.",
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
