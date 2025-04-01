'use client';

import { useState } from 'react';
import ContactUs from '@/components/ContactUs/ContactUs';

export default function Footer() {
  const [isContactVisible, setContactVisible] = useState(false);

  return (
    <footer className="bg-black text-white py-16 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Left Side - Call to Action */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold">
            Let’s discuss your brilliant idea!
          </h2>
          <p className="text-gray-400 mt-2">
            Feel free to reach out if you want to collaborate with us, or simply
            have a chat.
          </p>
          <button
            className="mt-6 bg-white text-black font-medium px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-300 transition"
            onClick={() => setContactVisible(true)}>
            🚀 Tell us about your project
          </button>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-lg">Contact us</h3>
          <p className="text-gray-400 mt-2">Email us</p>
          <a
            href="mailto:info@dysol.com"
            className="text-white hover:underline">
            info@dysol.com
          </a>
          <p className="text-gray-400 mt-2">Call us</p>
          <p className="text-white">+XXXX-XXXXXX</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="text-gray-400 space-y-2 mt-2">
            <li>
              <a href="#" className="hover:underline">
                Our Work
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Process
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold text-lg">Socials</h3>
          <ul className="text-gray-400 space-y-2 mt-2">
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                X (Twitter)
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex justify-between items-center text-gray-400 text-sm">
        <p>© Dysol, 2025</p>
        <div className="flex items-center gap-6">
          <select className="bg-black text-white">
            <option>EN</option>
            <option>FR</option>
          </select>
          <a href="#" className="hover:underline flex items-center gap-1">
            Back to the top ↑
          </a>
        </div>
      </div>

      {/* Contact Form Overlay (Conditionally Rendered) */}
      {isContactVisible && (
        <ContactUs onClose={() => setContactVisible(false)} />
      )}
    </footer>
  );
}
