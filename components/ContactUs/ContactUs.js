'use client';

import { useState } from 'react';

export default function ContactUs({ onClose }) {
  return (
    <>
      {/* Blurred Background - Keeps Previous Screen Visible */}
      <div
        className="fixed inset-0 backdrop-blur-md bg-black/30 z-50"
        onClick={onClose}
      />

      {/* Contact Form Panel - Covers Right Half */}
      <div className="fixed right-0 top-0 h-full w-1/2 bg-[#191919] text-white p-8 shadow-lg z-50 overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 text-2xl">
          ✖
        </button>

        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-2">
          Start your project with Dysol
        </h2>
        <p className="text-gray-400 mb-6">
          Whether you have a question, need support, or want to bring your big
          idea to life, our team is here to help. Reach out to us by completing
          the form below and let’s talk about how we can design the future
          together.
        </p>

        {/* Contact Form */}
        <form>
          {/* Two-Column Layout for Name, Company, Email, and Contact */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-4">
            <FloatingLabelInput
              label="Your Name"
              placeholder="What is your name?"
              icon=""
            />
            <FloatingLabelInput
              label="Your Company Name"
              placeholder="What is your company name?"
              icon=""
            />
            <FloatingLabelInput
              label="Your Email Address"
              placeholder="Enter your email address"
              icon=""
            />
            <FloatingLabelInput
              label="Your Contact Number"
              placeholder="Enter contact number"
              icon=""
            />
          </div>

          {/* Message Field - Full Width */}
          <div className="mb-4">
            <FloatingLabelTextarea
              label="Message Body"
              placeholder="What do you want to talk about?"
              icon=""
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white text-gray-950 p-3 rounded-full font-medium hover:bg-gray-200 transition">
            Contact us ✈️
          </button>
        </form>
      </div>
    </>
  );
}

/* Floating Label Input Component */
function FloatingLabelInput({ label, placeholder, icon }) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={isFocused ? '' : placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(e.target.value !== '')}
        className="w-full p-4 pl-10 bg-[#333] border border-[#444] rounded-lg placeholder-transparent text-white focus:outline-none focus:ring-2 focus:ring-gray-500 peer"
      />
      <label
        className={`absolute left-10 top-4 text-gray-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-300`}>
        {label}
      </label>
      <span className="absolute left-3 top-4 text-gray-500">
        <i className={`material-icons`}>{icon}</i>
      </span>
    </div>
  );
}

/* Floating Label Textarea Component */
function FloatingLabelTextarea({ label, placeholder, icon }) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative">
      <textarea
        placeholder={isFocused ? '' : placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(e.target.value !== '')}
        className="w-full p-4 pl-10 bg-[#333] border border-[#444] rounded-lg placeholder-transparent text-white focus:outline-none focus:ring-2 focus:ring-gray-500 peer"
        rows="4"
      />
      <label
        className={`absolute left-10 top-4 text-gray-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-300`}>
        {label}
      </label>
      <span className="absolute left-3 top-4 text-gray-500">
        <i className={`material-icons`}>{icon}</i>
      </span>
    </div>
  );
}
