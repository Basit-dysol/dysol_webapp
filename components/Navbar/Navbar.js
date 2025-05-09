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
        className={`absolute max-w-[1920px] pr-10 pl-25 top-0  pt-10 w-full z-50 flex place-content-between  }`}>
        {/* className={`fixed top-0 left-0 pt-6 right-0 w-full z-50 flex items-center justify-between ${isOpen ? 'sticky' : ''
          }` */}
        {/* Split background overlay */}
        {isOpen && (
          <div className="absolute inset-0 z-[-1] flex">
            {/* <div className="w-2/3 bg-[#220A39]"></div>
            <div className="w-1/3 bg-[#B93182]"></div> */}
          </div>
        )}

        {/* Logo */}
        <Link href="/" className="flex  transition-colors">
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
            {
              isOpen ?
                <Image
                  src="/cross.svg"
                  alt="Close Menu"
                  width={24}
                  height={24}
                />
                // <X size={25} />
                : <Image src="/menu.svg" alt="Open Menu" width={24} height={24} />
            }
          </button>
        </div>
      </nav>

      {/* Full-screen Menu */}
      {isOpen && (
        <div className="sticky inset-0 w-full h-screen text-white/60 z-40">
          <div className="w-full h-full flex">
            {/* Left Column */}
            <div className="w-[70%] flex flex-col justify-center  md:justify-end  pb-12 bg-[#220A39] pl-12 md:pl-24">
              <h1 className=" mb-8 font-medium xl:text-xl 2xl:text-2xl">
                Navigation
              </h1>
              <div className="  xl:space-y-4 2xl:space-y-9">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About us', path: '/about' },
                  { name: 'Our Work', path: '/our-work' },
                  { name: 'Our Process', path: '/our-process' },
                  { name: 'Contact us', path: '/contact-us' },
                ].map(({ name, path }) => (
                  <Link
                    key={name}
                    href={path}
                    onClick={() => setIsOpen(false)}
                    className=" text-2xl xl:leading-0 xl:text-4xl 2xl:text-6xl font-medium hover:text-white/80 transition-colors block">
                    {name}
                    <Image
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      src="/right-arrow.svg"
                      width={50}
                      height={50}
                      alt="right-arrow"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="nav-items-right w-[487px] lg:w-[30%] flex flex-col items-center align-middle justify-center  md:justify-end sm:pb-12 pb-0 bg-[#B93182]  px-2 md:px-10">
              {[
                { Icon: '/emailUs.svg', text: 'Email us', link: 'mailto:info@dysol.com'  },
                { Icon: '/linkedIn.svg', text: 'LinkedIn', link: 'https://www.linkedin.com/company/dysol-pvt-ltd/' },
                { Icon: '/instagram.svg', text: 'Instagram' },
                { Icon: '/twitter.svg', text: 'X (Twitter)' },
                { Icon: '/facebook.svg', text: 'Facebook', link: 'https://www.facebook.com/share/1Abqv41mXX/' },
                { Icon: '/telegram.svg', text: 'Telegram' },
              ].map(({ Icon, text, link }) => (
                <button
                  key={text}
                  onClick={() => link && (window.location.href = link)}
                  className="w-full max-w-md h-12 px-5 py-3 flex items-center gap-5 rounded-xl border border-white/20 bg-white/20 hover:bg-white/10 transition-colors">
                  <Image src={Icon} alt={text} width={36} height={36} />

                  <div className=" h-[24px] min-h-[1em] w-[1px] bg-[rgba(255,255,255,0.2)] dark:bg-white/10"></div>

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
