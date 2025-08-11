"use client";

import React, { useCallback } from "react";
import Navbar from "../Components/UI/Navbar";
import Footer from "../Components/UI/Footer";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { particlesConfig } from "../Components/Data/particlesConfig";
import { font } from "../Components/Font/font";
import { headingFont } from "../Components/Font/headingFont";
import Link from "next/link";
import Collaborate from "../Components/UI/Collaborate";
import Slider from "../Components/UI/Slider";
import useBlogs from "../hooks/useBlogs";

export default function BlogPage() {
  const { blogs, loading } = useBlogs();
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className={font.className}>
      <Navbar />

      {/* Hero/Main Section */}
      <section className="relative h-[29rem] bg-white overflow-hidden flex flex-col items-center justify-center">
        <Particles
          id="tsparticles-about"
          init={particlesInit}
          options={particlesConfig}
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 text-center">
          <h1
            className={`${headingFont.className} text-[80px] max-lg:text-[60px] max-md:text-[30px] text-[#283A64] mb-6`}
          >
            Our <span className="text-cyan-400">Blog</span>
          </h1>
          <div className="flex gap-x-2 justify-center mt-[-20px]">
            <img
              src="/footer/Clutch.webp"
              alt="clutch"
              className="w-[120px] h-[120px]"
            />
            <img
              src="/footer/trust-pilot.webp"
              alt="trustpilot"
              className="w-[120px] h-[120px]"
            />
            <img
              src="/footer/google.webp"
              alt="google"
              className="w-[120px] h-[120px]"
            />
          </div>
        </div>
      </section>

      <Slider />

      {/* Blog Card Grid */}
      <section className="w-full bg-white relative z-20 flex flex-col justify-center items-center pt-12 px-24 max-md:px-16 max-sm:px-8">
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blogs...</p>
          </div>
        ) : blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogs.map((blog) => {
              const { title, slug, coverImage, category } = blog.fields;
              const imageUrl = coverImage?.fields?.file?.url;
              return (
                <div key={slug} className="flex flex-col">
                  <Link
                    href={`/blogs/${slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="overflow-hidden rounded-3xl">
                      <img
                        src={`https:${imageUrl}`}
                        alt={title}
                        width={600}
                        height={400}
                        className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg mb-4 leading-tight text-[#222] min-h-[67.5px]">
                        {title}
                      </h3>
                      <p className="font-semibold mb-4">{category}</p>
                      <span className="text-cyan-400 flex items-center gap-2 group-hover:underline">
                        Read More
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No blogs available at the moment.
            </p>
            <p className="text-gray-500 mt-2">
              Check back soon for new content!
            </p>
          </div>
        )}
      </section>

      <Collaborate />
      <Footer />
    </div>
  );
}
