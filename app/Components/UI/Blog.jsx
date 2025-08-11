import React from "react";
import { font } from "../Font/font";
import { FaArrowRight } from "react-icons/fa";
import useBlogs from "@/app/hooks/useBlogs";
import Link from "next/link";

const Blog = () => {
  const { blogs, loading } = useBlogs();

  return (
    <section
      className={`py-20 px-4 md:px-8 lg:px-16 bg-white relative z-20 ${font.className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Latest Blog Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-cyan-400 text-sm">✦</span>
          <span className="text-gray-600 text-sm font-medium">LATEST BLOG</span>
        </div>
        
        {/* Header Section */}
        <div className="flex max-sm:flex-col sm:items-center justify-between mb-6">
          <div className="max-sm:mb-4">
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#283a64]">
              Insights from our <span className="text-cyan-400">experts</span>
            </h2>
          </div>

          {/* See All Post Button */}
          <a href="/blogs" className="flex items-center gap-2">
            <button className="cursor-pointer bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium flex items-center space-x-2">
              See All Post
            </button>
            <div className="w-12 h-12 bg-[#283A64] rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
              <FaArrowRight className="w-5 h-5 text-white" />
            </div>
          </a>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.sys.id}
              href={`/blogs/${blog.fields.slug}`}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Blog Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={blog.fields.coverImage.fields.file.url}
                  alt={blog.fields.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-lg mb-4 leading-tight">
                  {blog.fields.title}
                </h3>

                {/* Read More Link */}
                <button
                  className="cursor-pointer flex items-center gap-2 text-cyan-400 hover:text-cyan-500 transition-colors duration-300 font-medium"
                >
                  Read More
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile See All Post Button */}
        <div className="md:hidden flex justify-center mt-12">
          <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 px-6 py-3 rounded-full text-[#283a64] font-medium">
            See All Post
            <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
