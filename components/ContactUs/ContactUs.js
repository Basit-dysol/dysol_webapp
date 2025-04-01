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
      <div className="fixed right-0 top-0 h-full w-1/2 bg-white text-black p-8 shadow-lg z-50 overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl">
          ✖
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-2">
          Start your project with Dysol
        </h2>
        <p className="text-gray-600 mb-6">
          Whether you have a question, need support, or want to bring your big
          idea to life, our team is here to help. Reach out to us by completing
          the form below and let’s talk about how we can design the future
          together.
        </p>

        {/* Contact Form */}
        <form>
          {/* Two-Column Layout for Name, Company, Email, and Contact */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <FloatingLabelInput
              label="Your Name"
              placeholder="What is your name?"
            />
            <FloatingLabelInput
              label="Your Company Name"
              placeholder="What is your company name?"
            />
            <FloatingLabelInput
              label="Your Email Address"
              placeholder="Enter your email address"
            />
            <FloatingLabelInput
              label="Your Contact Number"
              placeholder="Enter contact number"
            />
          </div>

          {/* Message Field - Full Width */}
          <div className="mb-4">
            <FloatingLabelTextarea
              label="Message Body"
              placeholder="What do you want to talk about?"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition">
            Contact us
          </button>
        </form>
      </div>
    </>
  );
}

/* Floating Label Input Component */
function FloatingLabelInput({ label, placeholder }) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={isFocused ? '' : placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(e.target.value !== '')}
        className="w-full p-3 border rounded placeholder-transparent focus:outline-none focus:border-blue-500 peer"
      />
      <label
        className={`absolute left-3 top-3 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500`}>
        {label}
      </label>
    </div>
  );
}

/* Floating Label Textarea Component */
function FloatingLabelTextarea({ label, placeholder }) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative">
      <textarea
        placeholder={isFocused ? '' : placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(e.target.value !== '')}
        className="w-full p-3 border rounded placeholder-transparent focus:outline-none focus:border-blue-500 peer"
        rows="4"></textarea>
      <label
        className={`absolute left-3 top-3 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500`}>
        {label}
      </label>
    </div>
  );
}
