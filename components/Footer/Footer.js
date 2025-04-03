'use client';

import { useState } from 'react';
import ContactUs from '@/components/ContactUs/ContactUs';
import TellUsMoreButton from '@/components/TellUsMoreButton/TellUsMoreButton';

export default function Footer() {
  const [isContactVisible, setContactVisible] = useState(false);

  return (
    <footer className="bg-black text-white py-16 px-20 relative">
      <div className="max-w-7xl grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Left Side - Call to Action */}
        <div className="flex flex-col justify-between">
          <h2 className="text-4xl font-bold">
            Let’s discuss your brilliant idea!
          </h2>
          <p className="text-gray-400 mt-2">
            Feel free to reach out if you want to collaborate with us, or simply
            have a chat.
          </p>
          <TellUsMoreButton />

        </div>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-20">

          {/* Contact Us */}
          <div className='flex flex-col'>
            <h3 className="font-semibold text-lg pb-4">Contact us</h3>
            {/* <div className='flex flex-1 flex-col content-around flex-wrap'> */}
              {/* <span > */}
                <p className="text-gray-400">Email us</p>
                <a
                  href="mailto:info@dysol.com"
                  className="text-gray-400 hover:underline">
                  info@dysol.com
                </a>
              {/* </span>
              <span> */}
                <p className="text-gray-400 pt-2">Call us</p>
                <p className="text-gray-400">+XXXX-XXXXXX</p>
              {/* </span>
            </div> */}


          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg  mb-5">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
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

      <div>
        <img src="/footer-bottom.svg" />
      </div>

      {/* Contact Form Overlay (Conditionally Rendered) */}
      {isContactVisible && (
        <ContactUs onClose={() => setContactVisible(false)} />
      )}
    </footer>
  );
}
