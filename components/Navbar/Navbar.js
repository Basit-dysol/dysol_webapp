'use client';

import { useState } from 'react';
import Link from 'next/link';

import ContactUs from '../ContactUs/ContactUs';

import Image from 'next/image';
import DropdownComponent from '../Shared/Dropdown';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactVisible, setContactVisible] = useState(false);

  return (
    <>
      {/* Navbar with split background when open */}
      <nav
        className={`sticky top-0 left-0 right-0 w-full p-4 z-50 flex items-center justify-between ${
          isOpen ? 'sticky' : 'bg-transparent backdrop-blur-sm'
          }`}>
        {/* Split background overlay */}
        {isOpen && (
          <div className="absolute inset-0 z-[-1] flex">
            {/* <div className="w-2/3 bg-[#220A39]"></div>
            <div className="w-1/3 bg-[#B93182]"></div> */}
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
        <div className="flex items-center gap-4">
          {/* Become a Client Button */}
          <button
            className="md:w-[183px]  h-11 px-3 md:px-[18px]  py-3 rounded-[16px] bg-white text-gray-950 font-medium text-base flex items-center justify-center gap-2"
            onClick={() => setContactVisible(true)}>
            <img src="/becomeclient.svg" alt="" />
            Become a client
          </button>

          {/* Language Selector */}
          <div className="relative">
            <DropdownComponent />
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-white p-3 rounded-full transition-all duration-300 ${isOpen ? 'bg-[#D583B4]' : 'bg-[#FFFFFF]/40'
              }`}>
            {isOpen ?
              <Image src='/cross.svg' alt="Close Menu" width={24} height={24} />

              // <X size={25} />
              : <Image src='/menu.svg' alt="Open Menu" width={24} height={24} />}

          </button>
        </div>
      </nav>

      {/* Full-screen Menu */}
      {isOpen && (
        <div className="sticky inset-0 w-full h-screen text-white/60 z-40">
          <div className="w-full h-full flex">
            {/* Left Column */}
            <div className="w-[70%] flex flex-col justify-center  md:justify-end  pb-12 bg-[#220A39] pl-10 md:pl-20">
              <h1 className=" mb-8 font-medium text-2xl">Navigation</h1>
              <div className="space-y-9">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About us', path: '/about-us' },
                  { name: 'Our Work', path: '/our-work' },
                  { name: 'Our Process', path: '/our-process' },
                  { name: 'Contact us', path: '/contact-us' },
                ].map(({ name, path }) => (
                  <Link
                    key={name}
                    href={path}
                    onClick={() => setIsOpen(false)}
                    className=" text-3xl md:text-6xl font-medium hover:text-white/80 transition-colors block">
                    {name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="nav-items flex flex-col items-center align-middle justify-center  md:justify-end sm:pb-12 pb-0 bg-[#B93182] px-2 md:px-10">
              {[
                { Icon: '/emailUs.svg', text: 'Email us' },
                { Icon: '/linkedIn.svg', text: 'LinkedIn' },
                { Icon: '/instagram.svg', text: 'Instagram' },
                { Icon: '/twitter.svg', text: 'X (Twitter)' },
                { Icon: '/facebook.svg', text: 'Facebook' },
                { Icon: '/telegram.svg', text: 'Telegram' },
              ].map(({ Icon, text }) => (
                <button
                  key={text}
                  className="w-full max-w-md h-12 px-5 py-3 flex items-center gap-5 rounded-xl border border-white/20 bg-white/20 hover:bg-white/10 transition-colors">
                  <Image src={Icon} alt={text} width={36} height={36}  />

                  <div
                    className=" h-[24px] min-h-[1em] w-[1px] bg-[rgba(255,255,255,0.2)] dark:bg-white/10"></div>

                  <span className="nav-items__text text-2xl">{text}</span>
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
