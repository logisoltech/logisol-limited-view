"use client";
import React, { useState } from "react";
import { font } from "../Font/font";
import navLinks from "../Data/navLinks.json";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav
      className={`${font.className} p-6 sticky top-0 z-50 bg-white shadow-sm`}
    >
      <div className="w-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="https://logisol.tech" className="flex-shrink-0">
          <img
            src="/logisol-logo-nav.png"
            alt="Logisol Logo"
            className="w-auto h-12"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group">
              {link.dropdown ? (
                <div className="relative">
                  <button
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                    onMouseEnter={() => toggleDropdown(index)}
                  >
                    <a href={link.href}>{link.label}</a>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeDropdown === index && (
                    <div
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => {
                        setActiveDropdown(null);
                        setActiveSubDropdown(null);
                      }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10"
                    >
                      {link.dropdown.map((subLink, subIndex) => (
                        <div key={subIndex} className="relative group">
                          {subLink.dropdown ? (
                            <>
                              <button
                                className={`flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 ${
                                  activeSubDropdown === subIndex
                                    ? "font-bold bg-blue-50"
                                    : ""
                                }`}
                                onMouseEnter={() =>
                                  setActiveSubDropdown(subIndex)
                                }
                                onMouseLeave={() => setActiveSubDropdown(null)}
                              >
                                <a href={subLink.href}>{subLink.label}</a>
                                <svg
                                  className="w-4 h-4 ml-2"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </button>
                              {activeSubDropdown === subIndex && (
                                <div
                                  onMouseEnter={() => {
                                    setActiveDropdown(index);
                                    setActiveSubDropdown(subIndex);
                                  }}
                                  onMouseLeave={() =>
                                    setActiveSubDropdown(null)
                                  }
                                  className="absolute top-0 left-full w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20"
                                >
                                  {subLink.dropdown.map((item, itemIdx) => (
                                    <a
                                      key={itemIdx}
                                      href={item.href}
                                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                                      onClick={() => {
                                        setActiveDropdown(null);
                                        setActiveSubDropdown(null);
                                      }}
                                    >
                                      {item.label}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <a
                              href={subLink.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subLink.label}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <button className="bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-6 py-2 rounded-full transition-colors duration-200 font-medium">
            <a href="/contact-us">Get a Quote</a>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 border-t border-gray-200 pt-4">
          <div className="space-y-2">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.dropdown ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                      onClick={() => toggleDropdown(index)}
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {activeDropdown === index && (
                      <div className="ml-4 space-y-2 mt-2">
                        {link.dropdown.map((subLink, subIndex) => (
                          <a
                            key={subIndex}
                            href={subLink.href}
                            className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 py-1"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {subLink.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200 mt-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium">
                <a href="/contact-us">Get a Quote</a>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
