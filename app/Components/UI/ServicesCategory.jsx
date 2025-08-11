import React from "react";

export default function ServicesCategory({ className = "", children }) {
  return (
    <div className={`sticky top-8 z-20 ${className}`} style={{ maxHeight: 'calc(100vh - 4rem)' }}>
      <div className="rounded-3xl bg-gradient-to-b from-[#c3c9d6] to-[#b6e6f3] shadow-xl p-8">
        <h3 className="text-2xl font-bold text-[#283A64] mb-4">Services Category</h3>
        <ul className="divide-y divide-[#b0b8c9]">
          <li>
            <a href="/custom-web-development-services" className="flex items-center justify-between py-4 text-[#283A64] font-medium hover:text-cyan-400 transition-colors">
              Web development
              <span className="ml-2">↗</span>
            </a>
          </li>
          <li>
            <a href="/mobile-application-development-services" className="flex items-center justify-between py-4 text-[#283A64] font-medium hover:text-cyan-400 transition-colors">
              Mobile Development
              <span className="ml-2">↗</span>
            </a>
          </li>
          <li>
            <a href="/digital-marketing-services" className="flex items-center justify-between py-4 text-[#283A64] font-medium hover:text-cyan-400 transition-colors">
              Digital Marketing
              <span className="ml-2">↗</span>
            </a>
          </li>
          <li>
            <a href="/social-media-marketing-services" className="flex items-center justify-between py-4 text-[#283A64] font-medium hover:text-cyan-400 transition-colors">
              Social Media Marketing
              <span className="ml-2">↗</span>
            </a>
          </li>
          <li>
            <a href="/seo-services-and-strategy" className="flex items-center justify-between py-4 text-[#283A64] font-medium hover:text-cyan-400 transition-colors">
              SEO
              <span className="ml-2">↗</span>
            </a>
          </li>
          <li>
            <a href="/graphics-designing-services" className="flex items-center justify-between py-4 text-[#283A64] font-medium hover:text-cyan-400 transition-colors">
              Graphic Design
              <span className="ml-2">↗</span>
            </a>
          </li>
          <li>
            <a href="/professional-video-editing-services" className="flex items-center justify-between py-4 text-[#283A64] font-medium hover:text-cyan-400 transition-colors">
              Video Editing
              <span className="ml-2">↗</span>
            </a>
          </li>
        </ul>
        {children}
      </div>
    </div>
  );
} 