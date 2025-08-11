"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Navbar from "@/app/Components/UI/Navbar";
import Footer from "@/app/Components/UI/Footer";
import { font } from "@/app/Components/Font/font";
import { headingFont } from "@/app/Components/Font/headingFont";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { particlesConfig } from "@/app/Components/Data/particlesConfig";
import { useCallback, useEffect, useState } from "react";
import Slider from "@/app/Components/UI/Slider";
import { FaCalendarDay, FaTags, FaChevronUp } from "react-icons/fa";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Script from "next/script";
import React from "react";

export default function BlogClientPage({ blog }) {
  const { title, coverImage, publishDate, author, sections, service, schema } =
    blog.fields;
  const imageUrl = coverImage?.fields?.file?.url;
  const [headings, setHeadings] = useState([]);
  const [activeHeading, setActiveHeading] = useState("");

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  // Extract headings from the content
  useEffect(() => {
    if (sections) {
      const extractedHeadings = [];
      const processNode = (node) => {
        if (
          (node.nodeType === "heading-2" && node.content) ||
          (node.nodeType === "heading-3" && node.content)
        ) {
          const text = node.content[0]?.value || "";
          const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          extractedHeadings.push({ text, id });
        }
        if (node.content) {
          node.content.forEach(processNode);
        }
      };

      sections.content.forEach(processNode);
      setHeadings(extractedHeadings);

      console.log("Schema", schema);
    }
  }, [sections]);

  // Handle scroll to track active heading
  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings
        .map((h) => document.getElementById(h.id))
        .filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i];
        if (element.offsetTop <= scrollPosition) {
          setActiveHeading(headings[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Format date to show only date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const [titlePart1, titlePart2] = title
    .split(/:(.+)/)
    .map((str) => str?.trim());

  const renderOptions = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node) => (
        <h1
          className={`${headingFont.className} text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] text-center mb-6 max-md:text-4xl`}
        >
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_2]: (node) => {
        const text = node.content[0]?.value || "";
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");

        // Split based on `:` or any custom delimiter
        const [part1, part2] = text.split(/:(.+)/).map((str) => str?.trim());

        return (
          <h2
            id={id}
            className="text-2xl md:text-3xl font-bold mt-6 mb-4 scroll-mt-20"
          >
            <span className="text-[#283A64]">{part1}</span>
            {part2 && <span className="text-cyan-600">: {part2}</span>}
          </h2>
        );
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        const text = node.content[0]?.value || "";
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        return (
          <h3 id={id} className="font-semibold my-3 pt-4 pb-2">
            {children}
          </h3>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="text-sm md:text-md mb-3">{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="text-lg lg:text-xl pl-8 mb-3 list-disc">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="text-2xl font-semibold lg:text-3xl mb-3">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="text-md lg:text-lg ml-2">{children}</li>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, description, file } = node.data.target.fields;
        const imageUrl = file?.url?.startsWith("http")
          ? file.url
          : `https:${file.url}`;

        return (
          <div className="my-6 flex justify-center">
            <img
              src={imageUrl}
              alt={description || title || "Content image"}
              width={file.details.image.width}
              height={file.details.image.height}
              className="rounded-xl shadow-lg object-contain max-w-full h-auto"
            />
          </div>
        );
      },
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          className="text-blue-600 underline hover:text-blue-800 transition-all duration-150"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
      [BLOCKS.TABLE]: (node, children) => {
        // Check if children contain tr elements directly
        const hasDirectTr = React.Children.toArray(children).some(
          (child) => child.type === "tr"
        );

        if (hasDirectTr) {
          // Wrap tr elements in tbody
          return (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border border-gray-300 rounded-lg divide-y divide-gray-200">
                <tbody>{children}</tbody>
              </table>
            </div>
          );
        }

        // If children are already properly structured (tbody/thead), render as is
        return (
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border border-gray-300 rounded-lg divide-y divide-gray-200">
              {children}
            </table>
          </div>
        );
      },
      [BLOCKS.TABLE_BODY]: (node, children) => <tbody>{children}</tbody>,
      [BLOCKS.TABLE_HEADER]: (node, children) => (
        <thead className="bg-gray-100">{children}</thead>
      ),
      [BLOCKS.TABLE_ROW]: (node, children) => (
        <tr className="even:bg-gray-50">{children}</tr>
      ),
      [BLOCKS.TABLE_CELL]: (node, children) => (
        <td className="px-4 py-2 border border-gray-200 text-sm md:text-base text-gray-700">
          {children}
        </td>
      ),
      [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
        <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-left font-semibold text-gray-900">
          {children}
        </th>
      ),
    },
  };

  return (
    <div className={`${font.className}`}>
      <Navbar />

      <section className="relative h-[29rem] max-sm:h-[20rem] bg-white overflow-hidden flex flex-col items-center justify-center">
        {/* Particles.js Background */}
        <Particles
          id="tsparticles-about"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesConfig}
          className="absolute inset-0 z-0"
        />
        <div className="px-24 relative z-10 flex flex-col items-center justify-center w-full h-full max-md:px-16 max-sm:px-8">
          <h1
            className={`${headingFont.className} text-[50px] max-xl:text-[40px] max-sm:text-[30px] text-[#283A64] text-center mb-6 max-md:text-4xl`}
          >
            <span className="text-[#283A64]">{titlePart1}</span>
            {titlePart2 && (
              <span className="text-cyan-600">: {titlePart2}</span>
            )}
          </h1>
          <div className="flex items-center justify-center mt-2">
            <a
              href="/"
              className="flex flew-row gap-x-6 text-lg font-semibold hover:underline items-center gap-2"
            >
              <span className="flex flex-row items-center gap-2">
                <FaCalendarDay /> {formatDate(publishDate)}
              </span>
              <span className="flex flex-row items-center gap-2">
                <FaTags /> {author}
              </span>
            </a>
          </div>
        </div>
      </section>

      <Slider />

      <section className="w-full bg-white relative z-20 flex justify-center items-center px-16 max-sm:px-4">
        <div className="mx-auto px-6 py-12 max-sm:px-4 flex gap-8 max-sm:flex-col max-sm:w-full">
          {/* Main Content */}
          <div className="flex-1 max-sm:w-full">
            {imageUrl && (
              <img
                src={`https:${imageUrl}`}
                alt={title}
                className="rounded-xl w-full mb-10 object-cover h-auto"
              />
            )}

            <div className="w-full">
              {documentToReactComponents(sections, renderOptions)}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-80 flex-shrink-0 max-lg:hidden">
            {/* Logo Section */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 mb-6 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src="/favicon.ico"
                    alt="Logisol Logo"
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Logisol</h3>
                  <p className="text-sm text-gray-600">Technologies</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Founded in 2024, Logisol is a trusted tech company delivering
                innovative digital solutions and cutting-edge web development
                services.
              </p>
              <a
                href="/about"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
              >
                Read More
              </a>
            </div>

            <div className="sticky top-28 space-y-4">
              {/* Table of Contents */}
              {headings.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                      <FaChevronUp className="text-blue-600" />
                      In this article
                    </h3>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    <nav className="p-4">
                      <ul className="space-y-2">
                        {headings.map((heading, index) => (
                          <li key={heading.id}>
                            <button
                              onClick={() => scrollToHeading(heading.id)}
                              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 ${
                                activeHeading === heading.id
                                  ? "bg-blue-100 text-blue-700 font-medium"
                                  : "text-gray-600"
                              }`}
                            >
                              {heading.text}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
              <div className="bg-[#eefafd] rounded-xl border border-gray-200 shadow-sm p-4">
                <p className="text-gray-800 font-semibold text-lg mb-4">
                  {service}
                </p>
                <button className="bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-2 rounded-full transition-colors duration-200 font-medium">
                  <a href="/contact-us">Contact Us</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {schema && (
        <Script
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      )}

      <Footer />
    </div>
  );
}
