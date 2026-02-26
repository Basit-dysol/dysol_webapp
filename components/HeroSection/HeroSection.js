'use client';
import { useState } from 'react';
import ContactUs from '../ContactUs/ContactUs';
import TellUsMoreButton from '../TellUsMoreButton/TellUsMoreButton';

export default function HeroSection() {
  const [isContactVisible, setContactVisible] = useState(false);

  return (
    <>
      <div>
        <section className="flex flex-col w-full 2xl:aspect-video min-h-[80vh] md:min-h-[calc(100vh-16px)] text-white justify-center bg-[url('/Home/e1fcaa3756c3adce89efa5520493ff906932acd6.png')] bg-cover bg-center  py-8 md:py-16 px-6 md:px-24 xl:aspect-[156/100] 2xl:px-32 space-y-4 md:space-y-6 pr-0 xl:pr-[40vw] 2xl:pr-[40vw] ">
        <div className='flex flex-col items-start justify-center ' >
          <h1 className="text-3xl md:text-4xl xl:text-[4.14rem] 2xl:text-[4.5rem] md:w-[45vw] xl:w-[45vw] 2xl:w-[50vw] text-left font-medium md:leading-[3rem] xl:leading-[5rem] 2xl:leading-24">
            Engineering
            <br className="md:hidden" />
            <span className="hidden md:inline"> </span>
            <br className="hidden md:block" />
            intelligent products
            <br className="md:hidden" />
            <span className="hidden md:inline"> </span>
            <br className="hidden md:block" />
            for the real world.
          </h1>
          <p className="text-sm md:text-base 2xl:text-xl md:w-[48vw] 2xl:w-[46vw] text-white/60 font-light text-left leading-relaxed md:leading-6 xl:leading-6 max-w-[90vw] md:max-w-none">
          From hardware and computer vision to embedded systems and   <br className="hidden md:block" /> IoT, we help take you from idea to factory-ready execution.
          </p>
          <div className="mt-14 md:mt-10">
            <TellUsMoreButton setContactVisible={setContactVisible} />
          </div>
          </div>
        </section>

        {/* Contact Modal */}
        {isContactVisible && (
          <ContactUs onClose={() => setContactVisible(false)} />
        )}
      </div>
    </>
  );
}

// 'use client';
// import { useState } from 'react';
// import ContactUs from '../ContactUs/ContactUs';
// import TellUsMoreButton from '../TellUsMoreButton/TellUsMoreButton';

// export default function HeroSection() {
//   const [isContactVisible, setContactVisible] = useState(false);

//   return (
//     <>
//       <section className="flex flex-col w-full min-h-[calc(100vh-16px)] text-white justify-end bg-[url('/LandingPage.png')] bg-cover bg-center rounded-4xl pb-16 px-24 xl:aspect-[156/100] 2xl:px-32 space-y-6 pr-0 xl:pr-[40vw] 2xl:pr-[40vw]">
//         <h1 className="text-4xl xl:text-[4.25rem] 2xl:text-[4.5rem] xl:w-[45vw] 2xl:w-[50vw] text-left font-medium xl:leading-[5rem] 2xl:leading-24">
//           Let's take your
//           <br className="hidden sm:block" />
//           idea from concept
//           <br className="hidden sm:block" />
//           to market
//         </h1>
//         <p className="xl:text-shadow-md 2xl:text-xl xl:w-[42vw] 2xl:w-[40vw] text-white/60 font-light text-left leading-relaxed xl:leading-8">
//           At Dysol, we bring your product idea to life with top-tier engineering
//           and design. From idea to manufacturing, we're your trusted partner in
//           end-to-end product development.
//           <br className="hidden sm:block" />
//           With an expert team of engineers, technologists, and programmers ready
//           to help your business make an impact. Are you ready to pioneer the
//           future?
//         </p>
//         <TellUsMoreButton setContactVisible={setContactVisible} />
//       </section>

//       {/* Contact Modal */}
//       {isContactVisible && (
//         <ContactUs onClose={() => setContactVisible(false)} />
//       )}
//     </>
//   );
// }
