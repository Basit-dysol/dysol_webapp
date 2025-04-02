'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  X,
  AlignRight,
  Mail,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Send,
} from 'lucide-react';
import ContactUs from '../ContactUs/ContactUs';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactVisible, setContactVisible] = useState(false);

  return (
    <>
      {/* Navbar with split background when open */}
      <nav
        className={`fixed top-0 left-0 right-0 w-full p-4 z-50 flex items-center justify-between ${
          isOpen ? 'relative' : 'bg-transparent backdrop-blur-sm'
        }`}>
        {/* Split background overlay */}
        {isOpen && (
          <div className="absolute inset-0 z-[-1] flex">
            <div className="w-[70%] bg-[#220A39]"></div>
            <div className="w-[30%] bg-[#B93182]"></div>
          </div>
        )}

        {/* Logo */}
        <Link href="/" className="flex mx-14 items-center transition-colors">
          <span>
            <img src="/dysollogo.svg" alt="" />
          </span>
          {/* <span className={isOpen ? 'text-white' : 'text-pink-300'}>▶</span> */}
        </Link>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Become a Client Button */}
          <button
            className="w-[183px] h-11 px-4 py-3 rounded-[16px] bg-white text-gray-950 font-medium text-base flex items-center justify-center gap-2"
            onClick={() => setContactVisible(true)}>
            <img src="/becomeclient.svg" alt="" />
            Become a client
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button className="w-20 h-11 px-4 py-3 rounded-[16px] bg-gray-950 text-white flex items-center justify-center gap-2">
              EN <span className="text-xs">▼</span>
            </button>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-white p-2 rounded-full transition-all duration-300 ${
              isOpen ? 'bg-[#f1c4f4]' : 'bg-[#FFFFFF]/40'
            }`}>
            {isOpen ? <X size={25} /> : <AlignRight size={25} />}
          </button>
        </div>
      </nav>

      {/* Full-screen Menu */}
      {isOpen && (
        <div className="fixed inset-0 w-full h-full text-white/60 z-40">
          <div className="w-full h-full flex">
            {/* Left Column */}
            <div className="w-[70%] flex flex-col justify-end pb-12 bg-[#220A39] pl-20">
              <h1 className=" mb-8">Navigation</h1>
              <div className="space-y-8">
                {[
                  'Home',
                  'About us',
                  'Our Work',
                  'Our Process',
                  'Contact us',
                ].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-medium hover:text-white/80 transition-colors block">
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="w-[30%] flex flex-col items-center align-middle justify-end pb-12 space-y-1.5 bg-[#B93182] px-8">
              {[
                { Icon: Mail, text: 'Email us' },
                { Icon: Linkedin, text: 'LinkedIn' },
                { Icon: Instagram, text: 'Instagram' },
                { Icon: Twitter, text: 'X (Twitter)' },
                { Icon: Facebook, text: 'Facebook' },
                { Icon: Send, text: 'Telegram' },
              ].map(({ Icon, text }) => (
                <button
                  key={text}
                  className="w-full max-w-md h-12 px-5 py-3 flex items-center gap-5 rounded-xl border border-white/20 bg-white/20 hover:bg-white/10 transition-colors">
                  <Icon className="w-6 h-6" />{' '}
                  <span className="text-white/20">|</span>
                  <span className="text-xl font-normal">{text}</span>
                </button>
              ))}
              {/* </div> */}
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {isContactVisible && (
        <ContactUs onClose={() => setContactVisible(false)} />
      )}
    </>
  );
}
