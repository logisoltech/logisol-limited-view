"use client";

import Blog from "./Components/UI/Blog";
import Hero from "./Components/UI/Hero";
import Navbar from "./Components/UI/Navbar";
import Pricing from "./Components/UI/Pricing";
import Services from "./Components/UI/Services";
import Solution from "./Components/UI/Solution";
import WhyChooseUs from "./Components/UI/WhyChooseUs";
import Footer from "./Components/UI/Footer";
import AboutUs from "./Components/UI/AboutUs";
import Facts from "./Components/UI/Facts";
import Work from "./Components/UI/Work";
import Testimonials from "./Components/UI/Testimonials";
import FAQs from "./Components/UI/FAQs";
import Collaborate from "./Components/UI/Collaborate";
import Slider from "./Components/UI/Slider";
import { useState, useEffect } from "react";
import ModalLeadForm from "./Components/UI/ModalLeadForm";
import Script from "next/script";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 7000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Slider />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Solution />
      <Facts />
      <Pricing />
      <Work />
      <Testimonials />
      <FAQs />
      <Blog />
      <Collaborate />
      <Footer />
      <ModalLeadForm open={showModal} onClose={() => setShowModal(false)} />

      {/* FAQ Schema Markup - Only for Home Page */}
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        id="faq-schema"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How do you develop a mobile app?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We follow a step-by-step mobile app development process which includes: • Understanding your requirements • Creating wireframes and UI/UX design • Developing the app using the right technology • Testing thoroughly for bugs and performance • Deploying on App Stores (iOS & Android) We also offer post-launch support and updates."
              }
            },
            {
              "@type": "Question",
              "name": "What is an SEO service?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "SEO (Search Engine Optimization) is a set of strategies used to improve your website's visibility on search engines like Google. Our SEO services include: • Keyword research • On-page optimization (like content and meta tags) • Technical SEO improvements • Off-page SEO (backlinks) • Regular performance reports The goal is to increase traffic and generate more leads or sales for your business."
              }
            },
            {
              "@type": "Question",
              "name": "How much does it cost to develop a website?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Website development cost varies depending on: • The number of pages • Features required (e.g. e-commerce, blog, contact forms) • Design complexity • Custom functionality Typically, basic websites start from $100, while more advanced websites can cost more. Contact us for a free quote based on your needs."
              }
            },
            {
              "@type": "Question",
              "name": "What are the top 3 social media platforms?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The top 3 social media platforms currently are: Facebook – Great for reaching a broad audience and running ads Instagram – Ideal for visual content and brand engagement LinkedIn – Best for B2B networking and professional services We help businesses grow their online presence through tailored social media marketing strategies."
              }
            }
          ]
        })}
      </Script>

      <Script id="review-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Logisol Technologies",
          "url": "https://logisoltech.com",
          "email": "info@logisol.tech",
          "telephone": "+1-626-671-6483",
          "sameAs": [
            "https://clutch.co/profile/logisol-technologies",
            "https://www.trustpilot.com/review/logisoltech.com"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": 15,
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": [
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Liam Carter"
              },
              "reviewBody": "Logisol brought our app vision to life—smooth, polished, and on schedule. We partnered with Logisol to build a cross‑platform mobile app from a rough MVP concept. From wireframes to final deployment, their team (led by Olivia) delivered a sleek, intuitive UI and rock-solid backend. They managed timelines flawlessly, and post-launch metrics showed a 4.8 ★ average rating, 10k+ downloads in the first month, and daily active users doubling our target. Exceptional work all around.",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "1"
              }
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Olivia Ramirez"
              },
              "reviewBody": "Logisol redesigned our outdated site with a fast, responsive, SEO-Optimized platform that now feels modern and engaging. Under Emma's project leadership, load times dropped 60%, bounce rate decreased by 45%, and organic traffic nearly doubled within three months. Best part? Online sales increased by 35% during that time. True professionals—on time, on budget, and beyond expectations.",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "1"
              }
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Emma Walker"
              },
              "reviewBody": "Logisol crafted a smart, multi-channel campaign including social reels, content strategy, and targeted ad spend. Under Liam's coordination, our organic engagement soared 55%, qualified leads rose by 42%, and cost‑per‑lead dropped 28% in just 90 days. Their transparent reporting and hands-on creativity made them feel like part of our team. Highly recommend!",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "1"
              }
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Organization",
                "name": "Trustpilot"
              },
              "reviewBody": "Logisol Technologies has a 4.9 star rating from 20+ reviewers on Trustpilot, highlighting excellent service and client satisfaction.",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.9",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          ]
        })}
      </Script>
    </div>
  );
}
