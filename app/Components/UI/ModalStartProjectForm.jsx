"use client";

import { font } from "../Font/font";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

export default function ModelStartProjectForm({ open, onClose }) {
  const [first_name, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        onClose();
        setSuccess("");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [success, onClose]);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    const templateParams = {
      first_name,
      last_name: "",
      email,
      contact,
      budget,
      message,
    };
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setSuccess("Thank you! Your message has been sent.");
      setFirstName("");
      setEmail("");
      setContact("");
      setMessage("");
      setBudget("");
    } catch (err) {
      setError("Sorry, something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`${font.className} fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-invert backdrop-opacity-30`}
    >
      <div className="relative w-full max-w-4xl mx-auto flex max-sm:flex-col max-sm:my-36 max-sm:mx-4 rounded-3xl overflow-hidden max-h-[98vh] overflow-y-auto">
        {/* Left Section */}
        <div className="flex flex-col justify-center max-sm:hidden relative">
          <img
            src="/form-image.png"
            alt="Logisol Logo"
            className="w-full relative z-10"
          />
          <div
            className="absolute top-0 right-0 w-3/4 rounded-l-3xl h-full bg-white"
          ></div>
        </div>
        {/* Right Section (Form) */}
        <div className="w-[60%] bg-white max-sm:w-full px-10 py-5 flex flex-col justify-center">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-black text-xl hover:bg-cyan-600 transition"
          >
            <span>&times;</span>
          </button>
          <p className="text-lg font-semibold text-[#283A64] mb-4">
            Start Your Project
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              className="w-full border-b-2 border-gray-300 focus:border-gray-400 focus:outline-hidden text-sm text-black py-4 mb-2 placeholder-gray-400"
              placeholder="Your Name"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="w-full border-b-2 border-gray-300 focus:border-gray-400 focus:outline-hidden text-sm text-black py-4 mb-2 placeholder-gray-400"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="w-full border-b-2 border-gray-300 focus:border-gray-400 focus:outline-hidden text-sm text-black py-4 mb-2 placeholder-gray-400"
              placeholder="Your Phone Number"
              type="tel"
              value={contact}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9-+]/g, "");
                setContact(value);
              }}
              required
            />
            <input
              className="w-full border-b-2 border-gray-300 focus:border-gray-400 focus:outline-hidden text-sm text-black py-4 mb-4 placeholder-gray-400"
              placeholder="Project Budget"
              value={budget}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, "");
                setBudget(value);
              }}
            />
            <textarea
              className="w-full focus:outline-hidden text-sm text-black py-4 bg-gray-200 px-4 rounded-lg mb-2 placeholder-gray-400 min-h-[100px]"
              placeholder="Tell us about your project"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {success && (
              <div className="text-green-400 font-semibold">{success}</div>
            )}
            {error && <div className="text-red-400 font-semibold">{error}</div>}
            <div className="max-sm:flex max-sm:justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-8 py-2 rounded-full transition-colors duration-200 font-medium text-lg flex items-center space-x-2"
              >
                <span className="text-sm">SUBMIT</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
