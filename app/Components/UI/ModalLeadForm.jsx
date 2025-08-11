"use client";

import { useState, useEffect } from "react";
import { font } from "../Font/font";
import { headingFont } from "../Font/headingFont";
import emailjs from "emailjs-com";

export default function ModalLeadForm({ open, onClose }) {
  const [budget, setBudget] = useState(10000);
  const minBudget = 2000;
  const maxBudget = 150000;

  // Add state for form fields
  const [first_name, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  // Handle form submit
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
      budget: `$${budget.toLocaleString()}`,
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
      setBudget(10000);
      setShowModal(false);
    } catch (err) {
      setError("Sorry, something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`${font.className} fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-invert backdrop-opacity-10`}
      style={{ minHeight: "100vh" }}
    >
      <div
        className="relative w-full max-w-5xl mx-auto flex max-sm:flex-col max-sm:my-4 max-sm:mx-2 rounded-3xl overflow-hidden shadow-2xl max-h-[98vh] overflow-y-auto"
        style={{ background: "#111" }}
      >
        {/* Left Section */}
        <div
          className="w-[40%] min-w-[320px] max-sm:w-full bg-[#0a0a1a] p-10 flex flex-col justify-between max-sm:p-4"
          style={{
            background: "linear-gradient(135deg, #0a0a1a 80%, #1a1a2a 100%)",
          }}
        >
          <div>
            <img src="/favicon.ico" alt="Logisol Logo" className="w-16 mb-6 max-sm:mb-2 max-sm:w-10" />
            <h2
              className={`${headingFont.className} text-white text-4xl font-extrabold mb-2 max-sm:text-lg`}
            >
              Hold On A Moment!
            </h2>
            <p className="text-gray-200 mb-4">
              Book Your Free strategy session to find out why{" "}
              <span className="font-bold text-cyan-400">
                500+ successful brands
              </span>{" "}
              trust us for.
            </p>
            <div className="h-1 w-16 bg-gradient-to-r from-gray-500 to-cyan-400 mb-6 max-sm:mb-2" />
          </div>
          <ul className="space-y-3 mt-8 max-sm:mt-2">
            <li className="flex items-center text-white text-base max-sm:text-sm">
              <span className="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center mr-2 text-white text-lg">
                ✓
              </span>{" "}
              End-to-End Development
            </li>
            <li className="flex items-center text-white text-base max-sm:text-sm">
              <span className="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center mr-2 text-white text-lg">
                ✓
              </span>{" "}
              Budget Estimation & Cost Breakdown
            </li>
            <li className="flex items-center text-white text-base max-sm:text-sm">
              <span className="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center mr-2 text-white text-lg">
                ✓
              </span>{" "}
              Faster Go-To-Market Strategies
            </li>
          </ul>
        </div>
        {/* Right Section (Form) */}
        <div className="w-[60%] bg-[#18181c] max-sm:w-full p-10 flex flex-col justify-center max-sm:p-4">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white text-xl hover:bg-pink-600 transition"
          >
            <span>&times;</span>
          </button>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              className="w-full rounded-xl bg-[#111] text-white px-5 py-4 mb-2 outline-none placeholder-gray-400"
              placeholder="Full Name"
              value={first_name}
              onChange={e => setFirstName(e.target.value)}
              required
            />
            <input
              className="w-full rounded-xl bg-[#111] text-white px-5 py-4 mb-2 outline-none placeholder-gray-400"
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              className="w-full rounded-xl bg-[#111] text-white px-5 py-4 mb-2 outline-none placeholder-gray-400"
              placeholder="Contact Number"
              type="tel"
              pattern="[0-9]*"
              value={contact}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9-+]/g, '');
                setContact(value);
              }}
              required
            />
            <div className="bg-[#111] rounded-xl px-5 py-4 mb-2">
              <label className="block text-white mb-2">Set Budget</label>
              <div className="flex items-center">
                <input
                  type="range"
                  min={minBudget}
                  max={maxBudget}
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full accent-cyan-500"
                />
              </div>
              <div className="flex justify-between text-xs mt-2">
                <span className="text-white">
                  ${minBudget.toLocaleString()}
                </span>
                <span className="text-cyan-500 font-bold">
                  ${budget.toLocaleString()}
                </span>
                <span className="text-white">
                  ${maxBudget.toLocaleString()}
                </span>
              </div>
            </div>
            <textarea
              className="w-full rounded-xl bg-[#111] text-white px-5 py-4 mb-2 outline-none placeholder-gray-400 min-h-[100px] max-sm:min-h-[50px]"
              placeholder="Description"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            {success && <div className="text-green-400 font-semibold">{success}</div>}
            {error && <div className="text-red-400 font-semibold">{error}</div>}
            <button
              className="bg-gradient-to-r from-[#283A64] via-sky-800 to-cyan-600 text-white px-8 py-2 rounded-full transition-colors duration-200 font-medium text-lg flex items-center space-x-2"
              type="submit"
              disabled={loading}
            >
              <span>{loading ? "Sending..." : "SUBMIT"}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
