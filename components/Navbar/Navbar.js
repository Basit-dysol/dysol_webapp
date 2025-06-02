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
      {/* Navbar - Added mobile padding */}
      <nav className="absolute max-w-[1920px] pr-6 pl-6 md:pr-10 md:pl-24 2xl:pl-32 top-0 pt-6 md:pt-10 w-full z-50 flex justify-between items-center">
        {/* Logo - Added mobile sizing */}
        <Link href="/" className="flex transition-colors">
          <img
            src="/dysollogo.svg"
            alt="Dysol Logo"
            className="w-32 md:w-auto"
          />
        </Link>

        {/* Right Section - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="md:w-[183px] h-11 px-3 md:px-[18px] py-3 rounded-[16px] bg-white text-gray-950 font-medium text-base flex items-center justify-center gap-2 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]  hover:bg-white/60 hover:border-2 hover:border-white/60 border-2 border-transparent"
            onClick={() => setContactVisible(true)}
            style={{
              animationDelay: '1ms',
              transitionProperty: 'background, transform, border-color',
            }}>
            <img
              src="/becomeclient.svg"
              alt=""
              className="transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] hover:translate-x-0.5"
            />
            Become a client
          </button>

          <div className="relative">
            <DropdownComponent />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-white p-3 rounded-full transition-all duration-300 ${
              isOpen ? 'bg-[#D583B4]' : 'bg-[#FFFFFF]/40'
              }`}>
            {isOpen ?
              <Image src="/cross.svg" alt="Close" width={24} height={24} />
              : <Image src="/menu.svg" alt="Menu" width={24} height={24} />}
          </button>
        </div>

        {/* Mobile Menu Button - Visible only on mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 rounded-full bg-[#FFFFFF]/40">
          <Image
            src={isOpen ? '/cross.svg' : '/menu.svg'}
            alt="Menu"
            width={24}
            height={24}
          />
        </button>
      </nav>

      {/* Mobile Menu - Modified for mobile view */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 w-full h-screen text-white/60 z-40">
          <div className="w-full h-full flex flex-col">
            {/* Navigation Links - Centered container */}
            <div className="flex-1 bg-[#220A39] p-6 flex flex-col justify-center items-center">
              <div className="space-y-6 w-full max-w-xs text-center">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About us', path: '/about' },
                  { name: 'Our Work', path: '/our-work' },
                  { name: 'Our Process', path: '/our-process' },
                  { name: 'Contact us', path: '/contact-us' },
                ].map(({ name, path }) => (
                  <div key={name}>
                    {name === 'Contact us' ?
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          setContactVisible(true);
                        }}
                        className="text-xl font-medium hover:text-white/80 block w-full text-center">
                        {name}
                      </button>
                      : <Link
                        href={path}
                        onClick={() => setIsOpen(false)}
                        className="text-xl font-medium hover:text-white/80 block w-full text-center">
                        {name}
                      </Link>
                    }
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links - Modified for mobile */}
            <div className="bg-[#B93182] p-6">
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    Icon: '/emailUs.svg',
                    text: 'Email',
                    link: 'mailto:info@dysol.com',
                  },
                  {
                    Icon: '/linkedIn.svg',
                    text: 'LinkedIn',
                    link: 'https://www.linkedin.com/company/dysol-pvt-ltd/',
                  },
                  { Icon: '/instagram.svg', text: 'Instagram' },
                  { Icon: '/twitter.svg', text: 'Twitter' },
                  {
                    Icon: '/facebook.svg',
                    text: 'Facebook',
                    link: 'https://www.facebook.com/share/1Abqv41mXX/',
                  },
                  { Icon: '/telegram.svg', text: 'Telegram' },
                ].map(({ Icon, text, link }) => (
                  <button
                    key={text}
                    onClick={() => link && window.open(link, '_blank')}
                    className="h-12 px-3 flex items-center gap-3 rounded-xl border border-white/20 bg-white/20 hover:bg-white/10">
                    <Image src={Icon} alt={text} width={24} height={24} />
                    <span className="text-base">{text}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Become Client Button */}
            <div className="bg-[#220A39] p-6">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setContactVisible(true);
                }}
                className="w-full h-12 px-3 rounded-[16px] bg-white text-gray-950 font-medium flex items-center justify-center gap-2">
                <img src="/becomeclient.svg" alt="" />
                Become a client
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Menu - Original untouched */}
      {isOpen && (
        <div className="hidden md:block sticky inset-0 w-full h-screen text-white/60 z-40">
          {/* Desktop Menu - Original Code */}
          {isOpen && (
            <div className="hidden md:block sticky inset-0 w-full h-screen text-white/60 z-40">
              <div className="w-full h-full flex">
                {/* Left Column */}
                <div className="w-[70%] 2xl:w-[72%] flex flex-col justify-center md:justify-end pb-12 bg-[#220A39] pl-12 md:pl-24 2xl:pl-32">
                  <h1 className="mb-8 font-normal xl:text-xl 2xl:text-3xl">
                    Navigation
                  </h1>
                  <div className="xl:space-y-4 2xl:space-y-7">
                    {[
                      { name: 'Home', path: '/' },
                      { name: 'About us', path: '/about' },
                      { name: 'Our Work', path: '/our-work' },
                      { name: 'Our Process', path: '/our-process' },
                      { name: 'Contact us', path: '/contact-us' },
                    ].map(({ name, path }) => (
                      <div key={name} className='flex items-center gap-2 group'>
                        {name === 'Contact us' ?
                          <button
                            onClick={() => {
                              setIsOpen(false);
                              setContactVisible(true);
                            }}
                            className="text-xl xl:text-5xl xl:leading-0 2xl:leading-none 2xl:text-7xl font-medium hover:text-white/80 transition-colors block">
                            {name}

                          </button>
                          : <Link
                            href={path}
                            onClick={() => setIsOpen(false)}
                            className="text-xl xl:text-5xl xl:leading-0 2xl:leading-none 2xl:text-7xl font-medium hover:text-white transition-colors block">
                            {name}

                          </Link>}

                        <Image
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              src="/right-arrow.svg"
                              width={50}
                              height={50}
                          alt="right-arrow"
                        />

                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column */}
                <div className="nav-items-right xl:gap-2 2xl:gap-5 w-[487px] lg:w-[30%] 2xl:w-[28%] flex flex-col items-center align-middle justify-center md:justify-end sm:pb-16 pb-0 bg-[#B93182] px-2 md:px-10">
                  {[
                    {
                      Icon: '/emailUs.svg',
                      text: 'Email us',
                      link: 'mailto:info@dysol.com',
                    },
                    {
                      Icon: '/linkedIn.svg',
                      text: 'LinkedIn',
                      link: 'https://www.linkedin.com/company/dysol-pvt-ltd/',
                    },
                    { Icon: '/instagram.svg', text: 'Instagram' },
                    { Icon: '/twitter.svg', text: 'X (Twitter)' },
                    {
                      Icon: '/facebook.svg',
                      text: 'Facebook',
                      link: 'https://www.facebook.com/share/1Abqv41mXX/',
                    },
                    { Icon: '/telegram.svg', text: 'Telegram' },
                  ].map(({ Icon, text, link }) => (
                    <button
                      key={text}
                      onClick={() => link && (window.location.href = link)}
                      className="w-full max-w-md h-12 2xl:h-16 px-5 py-3 flex items-center gap-5 rounded-xl border border-white/20 bg-white/20 hover:bg-white/10 transition-colors">
                      <Image src={Icon} alt={text} width={36} height={36} />
                      <div className="h-[24px] min-h-[1em] w-[1px] bg-[rgba(255,255,255,0.2)] dark:bg-white/10"></div>
                      <span className="nav-items__text text-2xl 2xl:text-3xl">
                        {text}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Contact Modal */}
      {isContactVisible && (
        <ContactUs onClose={() => setContactVisible(false)} />
      )}
    </>
  );
}

// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';

// import ContactUs from '../ContactUs/ContactUs';

// import Image from 'next/image';
// import DropdownComponent from '../Shared/Dropdown';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isContactVisible, setContactVisible] = useState(false);

//   return (
//     <>
//       {/* Navbar with split background when open */}
//       <nav
//         className={`absolute max-w-[1920px] pr-10 pl-24 2xl:pl-32 top-0  pt-10 w-full z-50 flex place-content-between  }`}>
//         {/* className={`fixed top-0 left-0 pt-6 right-0 w-full z-50 flex items-center justify-between ${isOpen ? 'sticky' : ''
//           }` */}
//         {/* Split background overlay */}
//         {isOpen && (
//           <div className="absolute inset-0 z-[-1] flex">
//             {/* <div className="w-2/3 bg-[#220A39]"></div>
//             <div className="w-1/3 bg-[#B93182]"></div> */}
//           </div>
//         )}

//         {/* Logo */}
//         <Link href="/" className="flex  transition-colors">
//           <span>
//             <img src="/dysollogo.svg" alt="" />
//           </span>
//           {/* <span className={isOpen ? 'text-white' : 'text-pink-300'}>▶</span> */}
//         </Link>

//         {/* Right Section */}
//         <div className="flex items-center gap-4">
//           {/* Become a Client Button */}
//           <button
//             className="md:w-[183px]  h-11 px-3 md:px-[18px]  py-3 rounded-[16px] bg-white text-gray-950 font-medium text-base flex items-center justify-center gap-2"
//             onClick={() => setContactVisible(true)}>
//             <img src="/becomeclient.svg" alt="" />
//             Become a client
//           </button>

//           {/* Language Selector */}
//           <div className="relative">
//             <DropdownComponent />
//           </div>

//           {/* Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className={`text-white p-3 rounded-full transition-all duration-300 ${
//               isOpen ? 'bg-[#D583B4]' : 'bg-[#FFFFFF]/40'
//             }`}>
//             {
//               isOpen ?
//                 <Image
//                   src="/cross.svg"
//                   alt="Close Menu"
//                   width={24}
//                   height={24}
//                 />
//                 // <X size={25} />
//               : <Image src="/menu.svg" alt="Open Menu" width={24} height={24} />
//             }
//           </button>
//         </div>
//       </nav>

//       {/* Full-screen Menu */}
//       {isOpen && (
//         <div className="sticky inset-0 w-full h-screen text-white/60 z-40">
//           <div className="w-full h-full flex">
//             {/* Left Column */}
//             <div className="w-[70%] flex flex-col justify-center  md:justify-end  pb-12 bg-[#220A39] pl-12 md:pl-24">
//               <h1 className=" mb-8 font-medium xl:text-xl 2xl:text-2xl">
//                 Navigation
//               </h1>
//               <div className="xl:space-y-4 2xl:space-y-9">
//                 {[
//                   { name: 'Home', path: '/' },
//                   { name: 'About us', path: '/about' },
//                   { name: 'Our Work', path: '/our-work' },
//                   { name: 'Our Process', path: '/our-process' },
//                   { name: 'Contact us', path: '/contact-us' },
//                 ].map(({ name, path }) => (
//                   <div key={name}>
//                     {name === 'Contact us' ?
//                       <button
//                         onClick={() => {
//                           setIsOpen(false); // Close the navbar
//                           setContactVisible(true); // Show contact modal
//                         }}
//                         className="text-2xl xl:leading-0 xl:text-4xl 2xl:text-6xl font-medium hover:text-white/80 transition-colors block">
//                         {name}
//                         <Image
//                           className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                           src="/right-arrow.svg"
//                           width={50}
//                           height={50}
//                           alt="right-arrow"
//                         />
//                       </button>
//                     : <Link
//                         href={path}
//                         onClick={() => setIsOpen(false)}
//                         className="text-2xl xl:leading-0 xl:text-4xl 2xl:text-6xl font-medium hover:text-white/80 transition-colors block">
//                         {name}
//                         <Image
//                           className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                           src="/right-arrow.svg"
//                           width={50}
//                           height={50}
//                           alt="right-arrow"
//                         />
//                       </Link>
//                     }
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="nav-items-right w-[487px] lg:w-[30%] flex flex-col items-center align-middle justify-center  md:justify-end sm:pb-12 pb-0 bg-[#B93182]  px-2 md:px-10">
//               {[
//                 {
//                   Icon: '/emailUs.svg',
//                   text: 'Email us',
//                   link: 'mailto:info@dysol.com',
//                 },
//                 {
//                   Icon: '/linkedIn.svg',
//                   text: 'LinkedIn',
//                   link: 'https://www.linkedin.com/company/dysol-pvt-ltd/',
//                 },
//                 { Icon: '/instagram.svg', text: 'Instagram' },
//                 { Icon: '/twitter.svg', text: 'X (Twitter)' },
//                 {
//                   Icon: '/facebook.svg',
//                   text: 'Facebook',
//                   link: 'https://www.facebook.com/share/1Abqv41mXX/',
//                 },
//                 { Icon: '/telegram.svg', text: 'Telegram' },
//               ].map(({ Icon, text, link }) => (
//                 <button
//                   key={text}
//                   onClick={() => link && (window.location.href = link)}
//                   className="w-full max-w-md h-12 px-5 py-3 flex items-center gap-5 rounded-xl border border-white/20 bg-white/20 hover:bg-white/10 transition-colors">
//                   <Image src={Icon} alt={text} width={36} height={36} />

//                   <div className=" h-[24px] min-h-[1em] w-[1px] bg-[rgba(255,255,255,0.2)] dark:bg-white/10"></div>

//                   <span className="nav-items__text text-2xl">{text}</span>
//                 </button>
//               ))}
//               {/* </div> */}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Contact Modal */}
//       {isContactVisible && (
//         <ContactUs onClose={() => setContactVisible(false)} />
//       )}
//     </>
//   );
// }
