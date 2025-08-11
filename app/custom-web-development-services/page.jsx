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
  FaArrowRight,
  FaStar,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Script from "next/script";

export default function WebDevelopmentServices() {
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
            Custom{" "}
            <span className="text-cyan-400">
              <br />
              Web Development <br />
            </span>{" "}
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
                  src="/services/web-development/hero.webp"
                  alt="Web Development Team"
                  className="w-full h-[340px] object-cover object-center"
                />
              </div>
              <div className="text-md md:text-sm text-gray-900 leading-relaxed">
                <p className="mb-4">
                  <span className="font-bold">
                    Are ready-made website templates holding your business back?
                  </span>
                  <br />
                  If your website looks like everyone else’s, it’s not doing
                  your brand justice. In today’s fast-moving digital world, just
                  being online isn’t enough—you need a website that reflects
                  your vision and helps you grow.
                  <br />
                  <br />
                  <span className="font-bold">
                    At Logisol Technologies, we understand the problem.
                  </span>
                  <br />
                  Many businesses try off-the-shelf web solutions that can’t
                  scale, don’t integrate well with other tools, and fail to
                  deliver the results they expect. This leads to frustration,
                  wasted time, and missed opportunities.
                  <br />
                  <br />
                  <span className="font-bold">We’re here to change that.</span>
                  <br />
                  With our custom web development services, you get more than
                  just a website—you get a powerful digital tool built to fit
                  your business. From smooth user experience and advanced
                  features to top-level security and seamless system
                  integration, we create websites that grow with you and help
                  you stay ahead of the competition.
                </p>
              </div>
            </div>

            {/* What is Custom Web Development? */}
            <div>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] mb-6"
                style={{ lineHeight: "1.15" }}
              >
                What is{" "}
                <span className="text-cyan-400">Custom Web Development?</span>
              </h2>
              <p className="text-md md:text-sm mb-4">
                <span className="font-bold">
                  Not all websites are created equal.
                </span>
                <br />
                <br />
                While templates may be quick and cheap, they come with limits.
                Custom web development means building your website or web app
                from scratch—designed just for your business, your goals, and
                your users. At Logisol Technologies, we don't use cookie-cutter
                designs. We create bespoke digital solutions that work the way
                you need them to.
                <br />
                <br />
                At <span className="text-cyan-400">Logisol Technologies</span>,
                we don’t use cookie-cutter designs. We create bespoke digital
                solutions that work the way you need them to.
              </p>
              <h3 className="font-bold text-lg md:text-md my-3">
                Here’s how custom development stands out:
              </h3>
              <ul className="text-md md:text-sm list-disc ml-6 space-y-4">
                <li>
                  <span className="font-bold">Flexibility & Scalability:</span>{" "}
                  Your site is built to grow with your business—add new features
                  anytime. Unlike template-based solutions that restrict your
                  growth, custom development gives you the freedom to evolve
                  your digital presence as your business expands.
                </li>
                <li>
                  <span className="font-bold">Unique Functionality:</span> We
                  develop tools and workflows that match exactly how your
                  business runs. From custom dashboards to specialized booking
                  systems, we create functionality that's tailored to your
                  specific operational needs.
                </li>
                <li>
                  <span className="font-bold">Better Speed & Performance:</span>{" "}
                  Everything is optimized from the start, so your users stay
                  engaged. Custom development eliminates unnecessary code and
                  bloat that often comes with template-based solutions,
                  resulting in faster loading times and better user experience.
                </li>
                <li>
                  <span className="font-bold">Stronger Security:</span> We
                  tailor protection to your specific needs—no generic setups
                  here. Custom security measures are implemented based on your
                  data sensitivity, user requirements, and industry regulations.
                </li>
                <li>
                  <span className="font-bold">Smooth Integrations:</span> Easily
                  connect with your CRM, ERP, or any tools you already use.
                  Custom development ensures seamless integration with your
                  existing business systems, eliminating data silos and
                  improving operational efficiency.
                </li>
              </ul>

              <h3 className="font-bold text-lg md:text-md mt-6">
                Solving Real Business Problems
              </h3>
              <p className="text-md md:text-sm">
                Custom development removes the limitations of:
                <ul className="list-disc ml-6 mt-2">
                  <li>Generic designs that don't reflect your brand</li>
                  <li>Systems that can't grow with your business</li>
                  <li>Tools that don't connect or talk to each other</li>
                </ul>
                <br />
                <span className="italic text-sm">
                  Expert Tip: Start with clear business goals. We'll build your
                  custom solution around them.
                </span>
              </p>
            </div>

            {/* Why Custom is the Right Choice for Your Business */}
            <div>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] mb-6"
                style={{ lineHeight: "1.15" }}
              >
                Why Custom is the{" "}
                <span className="text-cyan-400">Right Choice</span> for Your
                Business
              </h2>
              <p className="text-md md:text-sm mb-4">
                At Logisol Technologies, we don’t just build websites—we solve
                business problems. A custom web solution helps you stand out,
                grow faster, and work smarter.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Strong Brand Identity & Better User Experience
                  </h3>
                  <p className="text-md md:text-sm">
                    <span className="font-bold">Problem:</span> Template
                    websites all look the same. They don’t feel like you. Plus,
                    clunky design often drives visitors away.
                    <br />
                    <span className="font-bold">Solution:</span> We design a
                    website that fits your brand and guides users smoothly from
                    first click to final action, complemented by our{" "}
                    <a
                      className="cursor-pointer"
                      href="/graphics-designing-services"
                    >
                      graphics designing services
                    </a>
                    .
                    <br />
                    <span className="font-bold">Your Benefits:</span>
                    <ul className="list-disc ml-6">
                      <li>A unique, modern look that reflects your brand</li>
                      <li>Easy navigation and user-friendly design</li>
                      <li>Better engagement and more leads</li>
                    </ul>
                    <br />
                    <span className="italic text-sm">
                      Expert Tip: Great user experience = more conversions. With
                      a custom site, we design every part to help visitors take
                      action.
                    </span>
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Built to Grow With You
                  </h3>
                  <p className="text-md md:text-sm">
                    <span className="font-bold">Problem:</span> Many websites
                    break or get outdated when your business grows.
                    <br />
                    <span className="font-bold">Solution:</span> We build your
                    site with growth in mind—so adding features or handling more
                    users is easy.
                    <br />
                    <span className="font-bold">Your Benefits:</span>
                    <ul className="list-disc ml-6">
                      <li>No need for major rebuilds later</li>
                      <li>Save money over time</li>
                      <li>Ready for future upgrades</li>
                    </ul>
                    <br />
                    <span className="italic text-sm">
                      Expert Tip: Scalability isn’t an add-on—it’s a must. Start
                      with a system that grows with your goals.
                    </span>
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Easy Integration with Your Business Tools
                  </h3>
                  <p className="text-md md:text-sm">
                    <span className="font-bold">Problem:</span> Your current
                    tools (CRM, ERP, email systems) don’t connect well with your
                    website.
                    <br />
                    <span className="font-bold">Solution:</span> We create a
                    custom setup that works with your existing systems, not
                    against them.
                    <br />
                    <span className="font-bold">Your Benefits:</span>
                    <ul className="list-disc ml-6">
                      <li>Everything runs smoothly in one place</li>
                      <li>Less manual work, more automation</li>
                      <li>Better decision-making from connected data</li>
                    </ul>
                    <br />
                    <span className="italic text-sm">
                      Expert Tip: Let us know what tools you already use—custom
                      development makes integration simple.
                    </span>
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Strong Security and Fast Performance
                  </h3>
                  <p className="text-md md:text-sm">
                    <span className="font-bold">Problem:</span> Off-the-shelf
                    platforms often have weak security and slow speeds.
                    <br />
                    <span className="font-bold">Solution:</span> We build your
                    site with custom security and performance in mind from the
                    start.
                    <br />
                    <span className="font-bold">Your Benefits:</span>
                    <ul className="list-disc ml-6">
                      <li>Your data stays safe</li>
                      <li>Faster load times = better user experience</li>
                      <li>Lower risk of costly issues</li>
                    </ul>
                    <br />
                    <span className="italic text-sm">
                      Expert Tip: Ask your developer about security
                      measures—custom means you control how secure your site is.
                    </span>
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Higher ROI (Return on Investment)
                  </h3>
                  <p className="text-md md:text-sm">
                    <span className="font-bold">Problem:</span> Many businesses
                    overspend on websites that don’t perform.
                    <br />
                    <span className="font-bold">Solution:</span> A custom site
                    pays for itself by delivering real results—more leads, lower
                    costs, and a clear edge over the competition.
                    <br />
                    <span className="font-bold">Your Benefits:</span>
                    <ul className="list-disc ml-6">
                      <li>Better conversion rates</li>
                      <li>Lower long-term maintenance costs</li>
                      <li>
                        Achieve a stronger digital presence that supports sales
                        with our{" "}
                        <a
                          className="cursor-pointer"
                          href="/seo-services-and-strategy"
                        >
                          SEO services and strategy
                        </a>
                      </li>
                    </ul>
                    <br />
                    <span className="italic text-sm">
                      Expert Tip: Always look at the bigger picture. A smart
                      custom site saves you money and helps your business grow
                      through effective{" "}
                      <a
                        className="cursor-pointer"
                        href="/social-media-marketing-services"
                      >
                        social media marketing services
                      </a>
                      .
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Custom vs. Template Comparison */}
            <div>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] mb-3"
                style={{ lineHeight: "1.15" }}
              >
                Custom vs. <span className="text-cyan-400">Template</span>:
                What's Best for Your Business?
              </h2>
              <p className="text-md md:text-sm mb-4">
                When it comes to building your website, you have two choices: a
                custom-built solution or a pre-made template. While templates
                may seem easier or cheaper at first, they often fall short when
                your business starts to grow or needs advanced features. Here’s
                a clear comparison to help you decide.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="min-w-full border border-gray-300 rounded-3xl divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left font-semibold text-gray-900">Feature / Aspect</th>
                      <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left font-semibold text-gray-900">Custom-Built Website</th>
                      <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left font-semibold text-gray-900">Template-Based Website</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="even:bg-gray-50">
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700 font-semibold">Control & Flexibility</td>
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700">
                        Full control over design and features. Easily tailored to
                        your needs.
                      </td>
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700">
                        Limited by preset themes and plugins. Custom changes are
                        hard.
                      </td>
                    </tr>
                    <tr className="even:bg-gray-50">
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700 font-semibold">Scalability</td>
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700">Built to grow with your business.</td>
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700">
                        Scaling up often requires expensive workarounds or full
                        rebuilds.
                      </td>
                    </tr>
                    <tr className="even:bg-gray-50">
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700 font-semibold">Performance</td>
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700">
                        Optimized for speed and performance from day one.
                      </td>
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700">
                        Can be slow and overloaded with unnecessary code.
                      </td>
                    </tr>
                    <tr className="even:bg-gray-50">
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700 font-semibold">Security</td>
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700">
                        Custom-built security based on your needs.
                      </td>
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700">
                        Relies on generic security—more vulnerable to hacks.
                      </td>
                    </tr>
                    <tr className="even:bg-gray-50">
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700 font-semibold">Unique Branding</td>
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700">Designed to match your brand 100%.</td>
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700">
                        Looks similar to many other websites using the same theme.
                      </td>
                    </tr>
                    <tr className="even:bg-gray-50">
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700 font-semibold">System Integration</td>
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700">
                        Easily connects to your CRM, ERP, or business tools.
                      </td>
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700">
                        Limited integration—may need extra plugins or workarounds.
                      </td>
                    </tr>
                    <tr className="even:bg-gray-50">
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700 font-semibold">Maintenance</td>
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700">
                        Professional support ensures stability and updates.
                      </td>
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700">
                        Hidden costs with plugin updates and compatibility issues.
                      </td>
                    </tr>
                    <tr className="even:bg-gray-50">
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700 font-semibold">Initial Cost</td>
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700">
                        Higher investment upfront—but it's custom to your
                        business.
                      </td>
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700">
                        Lower upfront cost—but you may pay more down the road.
                      </td>
                    </tr>
                    <tr className="even:bg-gray-50">
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700 font-semibold">Long-Term Value</td>
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700">
                        High ROI: saves money, supports growth, gives you an edge.
                      </td>
                      <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700">
                        Low ROI: may require a rebuild as your needs grow.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3 className="font-bold text-lg md:text-md my-3">
                Why Custom Wins for Serious Businesses
              </h3>
              <p className="text-md md:text-sm">
                Yes, custom web development may cost more at the start—but it
                gives you full control, higher performance, and real long-term
                savings. For businesses that want to scale, automate, and stand
                out online, the choice is clear.
              </p>
              <br />
            </div>

            {/* Who Do We Work With */}
            {/* <div>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64]  mb-6"
                style={{ lineHeight: "1.15" }}
              >
                Who Do We <span className="text-cyan-400">Work With</span>
              </h2>
              <ul className="list-disc ml-6 mb-6 text-md md:text-sm text-[#222]">
                <li>
                  <span className="text-[#283A64]">Startups</span> – We provide
                  specialized web development services for startups to help
                  launch their first product quickly and professionally
                </li>
                <li>
                  <span className="text-[#283A64]">Small Businesses</span> –
                  Creating online presence and attracting customers
                </li>
                <li>
                  <span className="text-[#283A64]">Enterprises</span> – Building
                  smart systems and automated solutions through our enterprise
                  web development services
                </li>
                <li>
                  <span className="text-[#283A64]">Agencies</span> – Providing
                  white-label development support
                </li>
                <li>
                  <span className="text-[#283A64]">E-Commerce Brands</span> –
                  Creating and managing strong online stores
                </li>
              </ul>
              <a
                href="/custom-web-development-services"
                className="flex items-center gap-2"
              >
                <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                  Let's Build Together
                </button>
                <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                  <FaArrowRight className="w-5 h-5 text-white" />
                </div>
              </a>
            </div> */}

            {/* What Clients Are Saying - Testimonials Section */}
            <Testimonials />
            {/* Our Transparent Web Development Process */}
            <div>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] mb-6"
                style={{ lineHeight: "1.15" }}
              >
                Our <span className="text-cyan-400">Transparent</span> Web
                Development Process
              </h2>
              <p className="text-md md:text-sm mb-4">
                From Idea to Impact, We Build With You, Every Step of the Way.
                At Logisol Technologies, we believe in building more than just
                websites—we build partnerships. Our process is clear,
                collaborative, and focused on your success. No confusion. No
                surprises.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Phase 1: Discovery & Strategy
                  </h3>
                  <p className="text-md md:text-sm">
                    We start by learning about your business goals, audience,
                    and what makes you unique.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Phase 2: Planning & Prototyping
                  </h3>
                  <p className="text-md md:text-sm">
                    Once we understand your vision, we create a solid plan to
                    bring it to life.
                    <ul className="list-disc ml-6">
                      <li>Roadmap with timelines and milestones</li>
                      <li>Wireframes and clickable prototypes</li>
                      <li>Clear structure for content and features</li>
                    </ul>
                    <br />
                    <span className="font-bold">Tools We Use:</span> Jira,
                    Asana, and Slack for easy updates and collaboration. We
                    follow Agile (Scrum/Kanban) to keep projects flexible and
                    on-track.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Phase 3: Design & User Experience (UX/UI)
                  </h3>
                  <p className="text-md md:text-sm">
                    Now we design a website that doesn’t just look good—it works
                    beautifully.
                    <ul className="list-disc ml-6">
                      <li>Clean, modern UI that reflects your brand</li>
                      <li>Mobile-first and responsive design</li>
                      <li>UX built to convert and retain users</li>
                    </ul>
                    <br />
                    <span className="italic text-sm">
                      Expert Tip: A mobile-first approach ensures your site
                      looks great everywhere—from desktops to smartphones,
                      powered by our{" "}
                      <a
                        className="cursor-pointer"
                        href="/mobile-application-development-services"
                      >
                        mobile application development services
                      </a>
                      .
                    </span>
                    <br />
                    <span className="font-bold">Design Tools:</span> Figma,
                    Adobe XD
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Phase 4: Development & Implementation
                  </h3>
                  <p className="text-md md:text-sm">
                    Our developers turn your design into a fast, functional, and
                    secure website.
                    <ul className="list-disc ml-6">
                      <li>Scalable and clean front-end/back-end code</li>
                      <li>Database design and system setup</li>
                      <li>Integrations with APIs and third-party tools</li>
                    </ul>
                    <br />
                    <span className="font-bold">
                      Tech Stack Management:
                    </span>{" "}
                    GitHub, GitLab, and modern coding standards ensure quality
                    and teamwork.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Phase 5: Quality Assurance & Testing
                  </h3>
                  <p className="text-md md:text-sm">
                    Before going live, we test everything—thoroughly.
                    <ul className="list-disc ml-6">
                      <li>Functional and usability testing</li>
                      <li>Cross-browser and device compatibility</li>
                      <li>Security and speed checks</li>
                      <li>You review, we refine</li>
                    </ul>
                    <br />
                    <span className="font-bold">Testing Tools:</span>{" "}
                    Industry-standard QA frameworks for a bug-free experience.
                    <br />
                    <span className="italic text-sm">
                      Expert Tip: Testing is where we find small issues before
                      they become big problems.
                    </span>
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Phase 6: Deployment & Launch
                  </h3>
                  <p className="text-md md:text-sm">
                    Your website is now ready for the world.
                    <ul className="list-disc ml-6">
                      <li>
                        Deployed on your preferred cloud hosting (AWS, Google
                        Cloud, Azure)
                      </li>
                      <li>Final pre-launch checklist</li>
                      <li>Live support on launch day</li>
                    </ul>
                    <br />
                    We’re with you when the switch flips—no last-minute chaos.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Phase 7: Post-Launch Support & Optimization
                  </h3>
                  <p className="text-md md:text-sm">
                    We don’t disappear after launch. We help your site perform,
                    grow, and stay secure.
                    <ul className="list-disc ml-6">
                      <li>Regular updates and performance checks</li>
                      <li>Security monitoring and patches</li>
                      <li>Plans for future upgrades and scaling</li>
                    </ul>
                    <br />
                    <span className="italic text-sm">
                      Expert Tip: A custom site needs care—budget for
                      maintenance and future growth.
                    </span>
                    <br />
                    <span className="font-bold">
                      Client Portal Access:
                    </span>{" "}
                    Track your requests, monitor updates, and submit tickets
                    anytime.
                  </p>
                </div>
              </div>
            </div>
            {/* Our Technical Expertise & Technology Stack */}
            <div>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] mb-6"
                style={{ lineHeight: "1.15" }}
              >
                Our Technical <span className="text-cyan-400">Expertise</span> &
                Technology Stack
              </h2>
              <p className="text-md md:text-sm mb-4">
                We Use the Right Tools to Build the Right Solutions. At Logisol
                Technologies, we don’t just build websites—we build future-ready
                digital platforms using the world’s most powerful technologies.
                Whether you’re launching a startup or scaling an enterprise
                system, our team has the skills, tools, and experience to bring
                your vision to life.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Core Programming Languages
                  </h3>
                  <p className="text-md md:text-sm">
                    We build fast, secure, and scalable platforms using
                    industry-leading technologies:
                    <ul className="list-disc ml-6">
                      <li>
                        <strong>Python (Django, Flask)</strong> – great for
                        secure and scalable applications
                      </li>
                      <li>
                        <strong>JavaScript (Node.js, Express.js)</strong> –
                        ideal for fast, real-time platforms
                      </li>
                      <li>
                        <strong>PHP (Laravel, Symfony)</strong> – widely used
                        for robust and flexible web apps
                      </li>
                      <li>
                        <strong>Ruby (Ruby on Rails)</strong> – excellent for
                        rapid development and MVPs
                      </li>
                    </ul>
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Front-End Frameworks
                  </h3>
                  <p className="text-md md:text-sm">
                    Your users see the front—we make sure it’s fast, modern, and
                    responsive:
                    <ul className="list-disc ml-6">
                      <li>
                        <strong>React.js</strong> – powerful, dynamic user
                        interfaces
                      </li>
                      <li>
                        <strong>Angular</strong> – scalable and structured apps
                      </li>
                      <li>
                        <strong>Vue.js</strong> – lightweight and highly
                        interactive designs
                      </li>
                    </ul>
                    <br />
                    <span className="font-bold">Technology Spotlight:</span> We
                    specialize in Jamstack and serverless architecture—ideal for
                    businesses that need speed, security, and scalability from
                    day one.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Back-End & Databases
                  </h3>
                  <p className="text-md md:text-sm">
                    We handle everything behind the scenes, ensuring your
                    systems run smoothly:
                    <ul className="list-disc ml-6">
                      <li>
                        <strong>Back-End Frameworks:</strong> Node.js, Django,
                        Laravel
                      </li>
                      <li>
                        <strong>Relational Databases:</strong> MySQL, PostgreSQL
                      </li>
                      <li>
                        <strong>NoSQL Databases:</strong> MongoDB, DynamoDB
                      </li>
                    </ul>
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Cloud Platforms & Infrastructure
                  </h3>
                  <p className="text-md md:text-sm">
                    We host and scale your project on secure, global cloud
                    platforms:
                    <ul className="list-disc ml-6">
                      <li>Amazon Web Services (AWS)</li>
                      <li>Google Cloud Platform (GCP)</li>
                      <li>Microsoft Azure</li>
                      <li>
                        <strong>Serverless Solutions:</strong> AWS Lambda, Azure
                        Functions
                      </li>
                    </ul>
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    CMS & E-commerce Solutions
                  </h3>
                  <p className="text-md md:text-sm">
                    We offer powerful content and product management solutions:
                    <ul className="list-disc ml-6">
                      <li>
                        <strong>Headless CMS:</strong> Contentful, Strapi
                      </li>
                      <li>
                        <strong>Custom E-commerce Integrations:</strong> Stripe,
                        Shopify API
                      </li>
                    </ul>
                    <br />
                    Whether you need a fast blog or a full online store, we
                    build it to fit your workflow.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    APIs & Integrations
                  </h3>
                  <p className="text-md md:text-sm">
                    We make all your tools talk to each other:
                    <ul className="list-disc ml-6">
                      <li>RESTful & GraphQL APIs</li>
                      <li>
                        CRM, ERP, payment gateways, and third-party systems
                      </li>
                    </ul>
                    <br />
                    No silos—just seamless data exchange and automation.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Methodologies & Workflow
                  </h3>
                  <p className="text-md md:text-sm">
                    We use Agile development to keep your project on track and
                    transparent:
                    <ul className="list-disc ml-6">
                      <li>Scrum & Kanban for iterative progress</li>
                      <li>Real-time updates through Jira, Asana, and Slack</li>
                      <li>Version control through Git, GitHub, GitLab</li>
                    </ul>
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Certified. Trained. Experienced.
                  </h3>
                  <p className="text-md md:text-sm">
                    Our developers stay sharp with regular training,
                    certifications, and real-world experience across industries
                    like:
                    <ul className="list-disc ml-6">
                      <li>E-commerce</li>
                      <li>Healthcare</li>
                      <li>FinTech</li>
                      <li>SaaS</li>
                      <li>Logistics & Service Booking</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            {/* Our Web Development Services Include */}
            {/* <div>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64]"
                style={{ lineHeight: "1.15" }}
              >
                Our{" "}
                <span className="text-cyan-400">Web Development Services</span>{" "}
                <span className="text-[#283A64]">Include</span>
              </h2>
            </div> */}

            {/* --- Web Development Services Cards --- */}
            {/* 
            <div className="w-full">
              <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">
                <motion.div
                  custom={0}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                >
                  <div className="relative">
                    <div
                      className="absolute inset-0 z-0 rounded-2xl"
                      style={{
                        background: "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                      }}
                    />
                    <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                      <h3 className="text-2xl font-bold text-[#283A64] mb-2 text-center min-h-[65px]">
                        Custom Business Websites
                      </h3>
                      <p className="text-gray-700 text-base mb-4 text-center min-h-[144px]">
                        We create websites that match your industry and speak to your audience. Whether you need a company website, personal brand site or niche platform, we build it to be both useful and attractive.
                      </p>
                      <div className="text-sm text-center">
                        <span className="font-semibold">Best for: </span>
                        <span className="text-gray-700">
                          Startups, small businesses, service providers, and enterprises needing robust enterprise web application development services
                        </span>
                      </div>
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
                  <div className="relative">
                    <div
                      className="absolute inset-0 z-0 rounded-2xl"
                      style={{
                        background: "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                      }}
                    />
                    <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col justify-center items-center min-h-[250px]">
                      <h3 className="text-2xl font-bold text-[#283A64] mb-2 text-center">
                        Performance & Speed Optimization
                      </h3>
                      <p className="text-gray-700 text-base mb-4 text-center min-h-[144px]">
                        Slow websites push people away. We improve loading speed using tools like image compression, lazy loading, server caching and smaller file sizes. This also helps your SEO.
                      </p>
                      <div className="text-sm text-center">
                        <span className="font-semibold">Best for: </span>
                        <span className="text-gray-700">
                          Businesses that want higher rankings and fewer lost visitors
                        </span>
                      </div>
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
                  <div className="relative">
                    <div
                      className="absolute inset-0 z-0 rounded-2xl"
                      style={{
                        background: "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                      }}
                    />
                    <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[250px]">
                      <h3 className="text-2xl font-bold text-[#283A64] mb-2 text-center">
                        E-Commerce Development
                      </h3>
                      <p className="text-gray-700 text-base mb-4 text-center min-h-[144px]">
                        We build online stores using Shopify, WooCommerce or fully custom systems—perfect for brands also investing in{" "}
                        <a className="cursor-pointer" href="/social-media-marketing-services">
                          social media-driven sales
                        </a>. Your store will be fast, secure and simple to use. We design it to turn visitors into customers.
                      </p>
                      <div className="text-sm text-center">
                        <span className="font-semibold">Best for: </span>
                        <span className="text-gray-700">
                          Online brands, fashion stores, electronics, wholesale and retail
                        </span>
                      </div>
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
                  <div className="relative">
                    <div
                      className="absolute inset-0 z-0 rounded-2xl"
                      style={{
                        background: "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                      }}
                    />
                    <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[250px]">
                      <h3 className="text-2xl font-bold text-[#283A64] mb-2 text-center min-h-[65px]">
                        CMS Integration
                      </h3>
                      <p className="text-gray-700 text-base mb-4 text-center min-h-[144px]">
                        A CMS (Content Management System) helps you update your website without needing coding skills. We work with WordPress, Strapi, or build custom dashboards so you can manage content easily.
                      </p>
                      <div className="text-sm text-center">
                        <span className="font-semibold">Best for: </span>
                        <span className="text-gray-700">
                          Businesses that need to update their content often
                        </span>
                      </div>
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
                  <div className="relative">
                    <div
                      className="absolute inset-0 z-0 rounded-2xl"
                      style={{
                        background: "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                      }}
                    />
                    <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[250px]">
                      <h3 className="text-2xl font-bold text-[#283A64] mb-2 text-center">
                        Landing Pages & Sales Funnels
                      </h3>
                      <p className="text-gray-700 text-base mb-4 text-center min-h-[144px]">
                        We build focused landing pages and multi-step funnels that support your lead generation, especially when tied to{" "}
                        <a className="cursor-pointer" href="/digital-marketing-services">
                          digital ad strategies
                        </a> or seasonal campaigns. We test and improve these pages to make sure they give you results.
                      </p>
                      <div className="text-sm text-center">
                        <span className="font-semibold">Best for: </span>
                        <span className="text-gray-700">
                          SaaS products, online courses, campaigns, local businesses
                        </span>
                      </div>
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
                  <div className="relative">
                    <div
                      className="absolute inset-0 z-0 rounded-2xl"
                      style={{
                        background: "linear-gradient(180deg, #a9b2c3 0%, #c8ebf4 100%)",
                      }}
                    />
                    <div className="relative rounded-2xl z-10 shadow-lg border border-[#b2eaf6] p-8 flex flex-col items-center min-h-[250px]">
                      <h3 className="text-2xl font-bold text-[#283A64] mb-2 text-center">
                        Website Maintenance & Support
                      </h3>
                      <p className="text-gray-700 text-base mb-4 text-center min-h-[144px]">
                        We take care of your website even after it's live. That includes fixing bugs, updating plugins, taking backups and doing regular security checks so you don't have to worry.
                      </p>
                      <div className="text-sm text-center">
                        <span className="font-semibold">Best for: </span>
                        <span className="text-gray-700">
                          Companies looking for dependable long-term support
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            */}

            {/* Showcasing Success: Real Results for Real Businesses */}
            <div>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] mb-6"
                style={{ lineHeight: "1.15" }}
              >
                Showcasing <span className="text-cyan-400">Success</span>: Real
                Results for Real Businesses
              </h2>
              <p className="text-md md:text-sm mb-4">
                See What We’ve Built. See What’s Possible. At Logisol
                Technologies, we don’t just deliver websites—we deliver
                measurable results. From growing online sales to streamlining
                business operations, our custom solutions help real companies
                achieve real outcomes.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Case Study 1: TechNova - SaaS Platform (B2B Software)
                  </h3>
                  <p className="text-md md:text-sm">
                    <span className="font-bold">Challenge:</span> TechNova’s
                    existing platform was hard to scale and lacked integration
                    with their sales CRM.
                    <br />
                    <span className="font-bold">Solution:</span> We built a
                    scalable web app using React and Node.js, fully integrated
                    with HubSpot CRM and Stripe billing.
                    <br />
                    <span className="font-bold">Results:</span>
                    <ul className="list-disc ml-6">
                      <li>30% increase in lead-to-customer conversion</li>
                      <li>Reduced support requests by 40% with better UX</li>
                      <li>Page speed improved 2x</li>
                    </ul>
                    <br />
                    <span className="italic text-sm">
                      Visual Suggestion: Screenshot of the dashboard interface +
                      integrated analytics panel.
                    </span>
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Case Study 2: PureOrganics - E-commerce Retailer
                  </h3>
                  <p className="text-md md:text-sm">
                    <span className="font-bold">Challenge:</span> The client
                    used a slow, outdated Shopify theme that couldn’t handle
                    bulk orders or inventory syncing.
                    <br />
                    <span className="font-bold">Solution:</span> We developed a
                    custom headless commerce solution with Shopify API and
                    Strapi CMS on AWS.
                    <br />
                    <span className="font-bold">Results:</span>
                    <ul className="list-disc ml-6">
                      <li>35% increase in sales within 3 months</li>
                      <li>Automated inventory sync across platforms</li>
                      <li>Mobile conversions improved by 50%</li>
                    </ul>
                    <br />
                    <span className="italic text-sm">
                      Visual Suggestion: Product detail page with fast checkout
                      UI.
                    </span>
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Case Study 3: MediConnect - Healthcare Service Portal
                  </h3>
                  <p className="text-md md:text-sm">
                    <span className="font-bold">Challenge:</span> MediConnect
                    needed a secure, HIPAA-compliant platform for booking,
                    patient record access, and remote consults.
                    <br />
                    <span className="font-bold">Solution:</span> We built a
                    secure patient portal using Django, PostgreSQL, and AWS
                    Lambda functions.
                    <br />
                    <span className="font-bold">Results:</span>
                    <ul className="list-disc ml-6">
                      <li>
                        100% HIPAA compliance with data encryption & audit
                        trails
                      </li>
                      <li>Cut patient onboarding time by 60%</li>
                      <li>Integrated live chat & appointment scheduling</li>
                    </ul>
                    <br />
                    <span className="italic text-sm">
                      Visual Suggestion: Login and booking interface with
                      patient dashboard.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Why Partner with Logisol Technologies */}
            <div>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] mb-6"
                style={{ lineHeight: "1.15" }}
              >
                Why Partner with{" "}
                <span className="text-cyan-400">Logisol Technologies?</span>
              </h2>
              <p className="text-md md:text-sm mb-4">
                More Than a Vendor. We’re Your Strategic Partner. At Logisol
                Technologies, we don’t just build websites—we build long-term
                partnerships. Our team works closely with you to understand your
                goals, solve real problems, and deliver digital solutions that
                bring lasting value.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Our Client-Centric Approach
                  </h3>
                  <p className="text-md md:text-sm">
                    We treat your project like it’s our own.
                    <ul className="list-disc ml-6">
                      <li>
                        We start by learning about your business, your market,
                        and your audience’s pain points.
                      </li>
                      <li>
                        You get a dedicated project manager who keeps you
                        updated and ensures every milestone is met.
                      </li>
                      <li>
                        Our agile process means we move fast, adapt quickly, and
                        include your feedback at every stage.
                      </li>
                    </ul>
                    <br />
                    <span className="italic text-sm">
                      Expert Tip: Clear communication isn’t optional—it’s how
                      great projects get done. With us, you’re never left in the
                      dark.
                    </span>
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Long-Term Partnership & Support
                  </h3>
                  <p className="text-md md:text-sm">
                    We’re with you beyond the launch.
                    <ul className="list-disc ml-6">
                      <li>
                        Regular updates, maintenance, and upgrades to keep your
                        system secure and fast
                      </li>
                      <li>
                        Performance optimization and scalability checks as your
                        business grows
                      </li>
                      <li>
                        Strategic insights to help you improve and innovate
                        continuously
                      </li>
                    </ul>
                    <br />
                    <span className="italic text-sm">
                      Differentiation: Our post-launch packages include access
                      to a client portal, live ticket tracking, and quarterly
                      performance reports—services most agencies don’t offer.
                    </span>
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Measurable ROI That Matters
                  </h3>
                  <p className="text-md md:text-sm">
                    We don’t just deliver features—we deliver impact.
                    <ul className="list-disc ml-6">
                      <li>
                        Boost conversion rates, reduce bounce rates, and
                        automate business tasks
                      </li>
                      <li>
                        Save time and cut costs with tailored, efficient
                        solutions
                      </li>
                      <li>Gain a competitive edge in your market</li>
                    </ul>
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-md mb-1">
                    Why Choose Logisol?
                  </h3>
                  <p className="text-md md:text-sm">
                    Choosing Logisol Technologies means partnering with a team
                    that prioritizes transparency, agility, and results. From
                    day one, we offer a clear, collaborative process—our agile
                    development approach ensures flexibility, timely updates,
                    and complete visibility into every phase of your project.
                    You’ll never be left guessing about progress or priorities.
                    Our team is made up of certified experts with deep
                    cross-industry experience, including e-commerce, healthcare,
                    SaaS, FinTech, logistics, and more. We use modern, scalable
                    technologies like React, Node.js, Django, and AWS to build
                    high-performance digital platforms tailored to your goals.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ Section for Web Development */}
            <WebDevFAQ />
            {/* Ready to Build Your Bespoke Digital Future */}
            <div>
              <h2
                className="text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] mb-6"
                style={{ lineHeight: "1.15" }}
              >
                Ready to Build Your{" "}
                <span className="text-cyan-400">Bespoke Digital Future?</span>
              </h2>
              <h3 className="font-bold text-lg md:text-md my-3">
                {" "}
                Let’s Create Something Extraordinary Together.{" "}
              </h3>
              <p className="text-md md:text-sm mb-4">
                <br />
                Don’t let generic website templates hold your business back.
                <br />
                <br />
                <span className="font-bold">At Logisol Technologies,</span> we
                build custom web solutions that reflect your vision, solve real
                business challenges, and fuel long-term growth.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="/contact-us" className="flex items-center gap-2">
                  <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                    Request a Free Consultation
                  </button>
                  <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
                    <FaArrowRight className="w-5 h-5 text-white" />
                  </div>
                </a>
                <a href="/contact-us" className="flex items-center gap-2">
                  <button className="text-md md:text-sm cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
                    Want a Custom Estimate?
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
      <div className="z-20 block lg:hidden w-full max-lg:p-6">
        <ServicesCategory />
      </div>
      <Collaborate />
      <Footer />

      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Custom Web Development Services",
          description:
            "At Logisol Technologies, we create websites that don’t just look good — they help your business work better. Whether you’re just starting or already running a large company, we build websites that match your business goals.",
          url: "https://logisol.tech/custom-web-development-services/",
          image: "https://logisol.tech/services/web-development/hero.webp",
          serviceType: "Custom Web Development",
          areaServed: {
            "@type": "Country",
            name: "United States",
          },
          provider: {
            "@type": "Organization",
            name: "Logisol Technologies",
            url: "https://logisol.tech",
            logo: "https://logisol.tech/logisol-logo-nav.png",
            sameAs: [
              "https://www.facebook.com/logisol.tech/",
              "https://www.instagram.com/logisol.tech/",
              "https://www.linkedin.com/company/logisol-technologies",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-626-671-6483",
              contactType: "Customer Service",
            },
            address: {
              "@type": "PostalAddress",
              addressCountry: "USA",
            },
          },
          review: [
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Priya Nandakumar",
              },
              reviewBody:
                "I was impressed not only by the technical skill but also by how approachable and collaborative the team was. They made complex decisions feel easy and guided us through every step without overwhelming us with jargon. The final website reflects our brand perfectly and has been well received by both clients and staff. It’s rare to find a team that combines professionalism with such a human touch.",
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Jonathan Cruz",
              },
              reviewBody:
                "From start to finish, the development process was smooth and well-managed. The team was incredibly responsive to our feedback and brought creative solutions to the table that elevated our online presence. What stood out most was their attention to detail and genuine interest in helping our business grow. We've seen a noticeable improvement in user engagement since the new site went live.",
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Amanda Lee",
              },
              reviewBody:
                "Working with the team on our new website was a seamless and genuinely enjoyable experience. They took the time to understand our vision, offered thoughtful suggestions, and delivered a site that truly represents who we are as a company. The communication was clear throughout, deadlines were met, and the final product exceeded our expectations in both design and functionality. I would confidently recommend their services to anyone looking for a professional and dependable development partner.",
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
              name: "What is the typical timeline for a custom web development project?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Timelines vary based on complexity, features, and client responsiveness. A typical project can range from 3–6 months for smaller applications to 9–12+ months for large-scale enterprise solutions. We provide a detailed timeline during the discovery phase.",
              },
            },
            {
              "@type": "Question",
              name: "How much does custom web development cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Costs are highly variable, depending on project scope, features, design complexity, and integrations. We provide transparent, itemized quotes after a thorough discovery phase.",
              },
            },
            {
              "@type": "Question",
              name: "Can you integrate our new custom website with our existing CRM/ERP/marketing automation tools?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. Seamless integration with your current business systems is a key advantage of custom web development. We specialize in API integrations.",
              },
            },
            {
              "@type": "Question",
              name: "What kind of ongoing support and maintenance do you offer after launch?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer various post-launch support packages, including proactive maintenance, security updates, performance monitoring, bug fixes, and continuous optimization based on your evolving needs.",
              },
            },
            {
              "@type": "Question",
              name: "How involved will my team be in the development process?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Client involvement is crucial. We maintain clear communication channels and provide regular updates, encouraging your feedback at every stage through agile sprints and dedicated client portals.",
              },
            },
            {
              "@type": "Question",
              name: "Is custom web development suitable for small businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. If a small business has unique operational needs, specific long-term goals, or aims for significant competitive differentiation, custom development can be a highly strategic investment.",
              },
            },
          ],
        })}
      </Script>
    </div>
  );
}

function WebDevFAQ() {
  const faqs = [
    {
      question:
        "What is the typical timeline for a custom web development project?",
      answer:
        "Timelines vary based on complexity, features, and client responsiveness. A typical project can range from 3–6 months for smaller applications to 9–12+ months for large-scale enterprise solutions. We provide a detailed timeline during the discovery phase.",
    },
    {
      question: "How much does custom web development cost?",
      answer: (
        <div className="space-y-2">
          <p>
            Costs are highly variable, depending on project scope, features,
            design complexity, and integrations. We provide transparent,
            itemized quotes after a thorough discovery phase.
          </p>
          <p className="italic text-sm">
            <strong>Differentiation Opportunity:</strong> Consider an
            interactive ‘Project Cost Estimator’ or ‘Discovery Questionnaire’ as
            a lead generation tool.
          </p>
        </div>
      ),
    },
    {
      question:
        "Can you integrate our new custom website with our existing CRM/ERP/marketing automation tools?",
      answer:
        "Absolutely. Seamless integration with your current business systems is a key advantage of custom web development. We specialize in API integrations.",
    },
    {
      question:
        "What kind of ongoing support and maintenance do you offer after launch?",
      answer: (
        <div className="space-y-2">
          <p>
            We offer various post-launch support packages, including proactive
            maintenance, security updates, performance monitoring, bug fixes,
            and continuous optimization based on your evolving needs.
          </p>
          <p className="italic text-sm">
            <strong>Expert Tip:</strong> Budget for ongoing maintenance and
            optimization.
          </p>
        </div>
      ),
    },
    {
      question: "How involved will my team be in the development process?",
      answer: (
        <div className="space-y-2">
          <p>
            Client involvement is crucial. We maintain clear communication
            channels and provide regular updates, encouraging your feedback at
            every stage through agile sprints and dedicated client portals.
          </p>
          <p className="italic text-sm">
            <strong>Expert Tip:</strong> Don’t compromise on clear
            communication.
          </p>
        </div>
      ),
    },
    {
      question: "Is custom web development suitable for small businesses?",
      answer:
        "Yes, if a small business has unique operational needs, specific long-term goals, or aims for significant competitive differentiation, custom development can be a highly strategic investment.",
    },
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="w-full max-w-4xl mx-auto mt-16 mb-8">
      <h2 className="text-4xl md:text-3xl text-[#283A64] mb-8 text-center">
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
        "I was impressed not only by the technical skill but also by how approachable and collaborative the team was. They made complex decisions feel easy and guided us through every step without overwhelming us with jargon. The final website reflects our brand perfectly and has been well received by both clients and staff. It’s rare to find a team that combines professionalism with such a human touch.",
      name: "Priya Nandakumar",
      title: "Founder & Creative Lead, Studio Nanda",
    },
    {
      quote:
        "From start to finish, the development process was smooth and well-managed. The team was incredibly responsive to our feedback and brought creative solutions to the table that elevated our online presence. What stood out most was their attention to detail and genuine interest in helping our business grow. We've seen a noticeable improvement in user engagement since the new site went live.",
      name: "Jonathan Cruz",
      title: "Operations Manager, Evergreen Supply Co.",
    },
    {
      quote:
        "Working with the team on our new website was a seamless and genuinely enjoyable experience. They took the time to understand our vision, offered thoughtful suggestions, and delivered a site that truly represents who we are as a company. The communication was clear throughout, deadlines were met, and the final product exceeded our expectations in both design and functionality. I would confidently recommend their services to anyone looking for a professional and dependable development partner.",
      name: "Amanda Lee",
      title: "Marketing Director, BrightPath Consulting",
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
