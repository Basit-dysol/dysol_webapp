'use client';
import { useState } from 'react';
import ContactUs from '@/components/ContactUs/ContactUs';
import TellUsMoreButton from '@/components/TellUsMoreButton/TellUsMoreButton';
import Link from 'next/link';

export default function Footer() {
  const [isContactVisible, setContactVisible] = useState(false);

  const quickLinks = [
    { label: 'Our Work', link: 'our-work' },
    { label: 'Our Process', link: 'our-process' },
    { label: 'About Us', link: '/about' },
    { label: 'Blog', link: '/' },
  ];

  const socialLinks = [
    { label: 'Instagram', link: '' },
    { label: 'X (Twitter)', link: '' },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/company/dysol-pvt-ltd/',
    },
    {
      label: 'Facebook',
      link: 'https://www.facebook.com/share/1Abqv41mXX/',
    },
  ];

  return (
    <footer
      style={{ backgroundImage: `url('/footer-bg.png')` }}
      className="bg-[#0D0D0D] 2xl:min-h-fit text-white pl-6 pr-4 md:pl-24 md:pr-4  2xl:pl-32 2xl:pr-4 py-12 md:py-30 relative">
      {/* Logo */}
      <Link href="/" className="flex transition-colors pb-5">
        <img src="/dysollogo.svg" alt="Dysol Logo" className="w-32 md:w-auto" />
      </Link>

      <div className="max-w-full grid grid-cols-1 gap-10 sm:grid-cols-2">
        {/* Left Side - Call to Action */}
        <div className="flex flex-col justify-between gap-6 md:gap-8">
          <h2 className="text-3xl md:text-[48px] font-medium font-[Plus_Jakarta_Sans] leading-tight">
            Let’s discuss your brilliant idea!
          </h2>
          <p className="text-white/80 text-sm md:text-base">
            Feel free to reach out if you want to collaborate with us, or simply
            have a chat.
          </p>
          <div className="mt-4 md:mt-0">
            <TellUsMoreButton setContactVisible={setContactVisible} />
          </div>
        </div>

        {/* Right Side Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3  justify-items-center  ">
          {/* Contact Us */}
          <div className="flex flex-col mb-6 sm:mb-0">
            <h3 className="font-semibold text-lg pb-4">Contact us</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white/80">Email us</p>
                <a
                  href="mailto:info@dysol.com"
                  className="text-white/80 hover:underline text-sm">
                  info@dysol.com
                </a>
              </div>
              <div>
                <p className="text-white/80">Call us</p>
                <p className="text-white/80 text-sm">+27637731006</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6 sm:mb-0">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="text-white/80 space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.link} className="hover:underline text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Socials</h3>
            <ul className="text-white/80 space-y-3">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.link} className="hover:underline text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 md:mt-10 space-y-4 lg:space-y-36 xl:space-y-44 2xl:space-y-72 border-t-[1px] border-dashed border-[#4D4D4D] pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p className="font-[Inter] font-normal text-base md:text-[20px]">
          © Dysol, 2025
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <select className="bg-[#0D0D0D] text-white font-[Plus_Jakarta_Sans] font-bold text-sm">
            <option>EN</option>
            <option>FR</option>
          </select>
          <a
            href="#"
            className="hover:underline flex items-center gap-1 font-[Plus_Jakarta_Sans] font-bold text-sm">
            Back to the top ↑
          </a>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <img
            className="w-full"
            src="/footer-bottom.svg"
            alt="Footer decoration"
          />
        </div>
      </div>

      {/* Contact Form Overlay */}
      {isContactVisible && (
        <ContactUs onClose={() => setContactVisible(false)} />
      )}
    </footer>
  );
}

// 'use client';

// import { useState } from 'react';
// import ContactUs from '@/components/ContactUs/ContactUs';
// import TellUsMoreButton from '@/components/TellUsMoreButton/TellUsMoreButton';
// import Link from 'next/link';

// export default function Footer() {
//   const [isContactVisible, setContactVisible] = useState(false);

//   const quickLinks = [
//     { label: 'Our Work', link: 'our-work' },
//     { label: 'Our Process', link: 'our-process' },
//     { label: 'About Us', link: '/about' },
//     { label: 'Blog', link: '/' },
//   ];

//   const socialLinks = [
//     { label: 'Instagram', link: '' },
//     { label: 'X (Twitter)', link: '' },
//     {
//       label: 'LinkedIn',
//       link: 'https://www.linkedin.com/company/dysol-pvt-ltd/',
//     },
//     {
//       label: 'Facebook',
//       link: 'https://www.facebook.com/share/1Abqv41mXX/',
//     },
//   ];

//   return (
//     <footer
//       style={{ backgroundImage: `url('/footer-bg.png')` }}
//       className="background-cover bg-[#0D0D0D] no-repeat min-h-[calc(100vh-45px)] text-white px-24 2xl:px-32 py-30 relative">
//       {/* Logo */}
//       <Link href="/" className="flex transition-colors pb-5">
//         <span>
//           <img src="/dysollogo.svg" alt="" />
//         </span>
//         {/* <span className={isOpen ? 'text-white' : 'text-pink-300'}>▶</span> */}
//       </Link>

//       <div className="max-w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
//         {/* Left Side - Call to Action */}
//         <div className="flex flex-col justify-between gap-8">
//           <h2 className="text-[48px] font-medium font-[Plus_Jakarta_Sans]">
//             Let’s discuss your brilliant idea!
//           </h2>
//           <p className="text-white/80">
//             Feel free to reach out if you want to collaborate with us, or simply
//             have a chat.
//           </p>
//           <TellUsMoreButton setContactVisible={setContactVisible} />
//         </div>
//         <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-20">
//           {/* Contact Us */}
//           <div className="flex flex-col">
//             <h3 className="font-semibold text-lg pb-4">Contact us</h3>
//             {/* <div className='flex flex-1 flex-col content-around flex-wrap'> */}
//             {/* <span > */}
//             <p className="text-white/80 pt-4">Email us</p>
//             <a
//               href="mailto:info@dysol.com"
//               className="text-white/80 hover:underline">
//               info@dysol.com
//             </a>
//             {/* </span>
//               <span> */}
//             <p className="text-white/80 pt-4">Call us</p>
//             <p className="text-white/80">+27637731006</p>
//             {/* </span>
//             </div> */}
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="font-semibold text-lg  mb-5">Quick Links</h3>
//             <ul className="text-white/80 space-y-4">
//               {quickLinks.map((link, index) => (
//                 <li key={index}>
//                   <Link href={link.link} className="hover:underline">
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Socials */}
//           <div>
//             <h3 className="font-semibold text-lg mb-5">Socials</h3>
//             <ul className="text-gray-400 space-y-4">
//               {socialLinks.map((link, index) => (
//                 <li key={index}>
//                   <Link href={link.link} className="hover:underline">
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="mt-10 space-y-[4vw] xl:space-y-[14vw] 2xl:space-y-[14vw] border-t border-gray-700 pt-6 flex justify-between items-center text-gray-400 text-sm">
//         <p className="font-[Inter] font-normal text-[20px]">© Dysol, 2025</p>
//         <div className="flex items-center gap-6">
//           <select className="bg-black text-white font-[Plus_Jakarta_Sans] font-bold">
//             <option>EN</option>
//             <option>FR</option>
//           </select>
//           <a
//             href="#"
//             className="hover:underline flex items-center gap-1 font-[Plus_Jakarta_Sans] font-bold">
//             Back to the top ↑
//           </a>
//         </div>

//         <div className="absolute bottom-0 left-0 ">
//           <img className="" src="/footer-bottom.svg" />
//         </div>
//       </div>

//       {/* Contact Form Overlay (Conditionally Rendered) */}
//       {isContactVisible && (
//         <ContactUs onClose={() => setContactVisible(false)} />
//       )}
//     </footer>
//   );
// }
