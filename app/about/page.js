import Breadcrumbs from '@/components/Shared/Breadcrumbs';
import Image from 'next/image';

export default function AboutPage() {
  const cultureObjs = [
    {
      icon: '/bulb.svg',
      heading: 'Innovation',
      description:
        'Progress doesn’t rest, and neither do we. Our team is constantly exploring new technologies and pushing boundaries to solve challenges and bring impactful ideas to life. ',
    },
    {
      icon: '/customer.svg',
      heading: 'Consumer Experience',
      description:
        'We strive to create products that your consumers love. Every move we make is with the consumer in mind, making our designs intuitive, functional and impactful. ',
    },
    {
      icon: '/speed.svg',
      heading: 'Speed Wins',
      description:
        'In the fast-paced world of tech, timing is everything. We work with agility and precision to stay ahead, delivering solutions that make an impact at the right time.',
    },
    {
      icon: '/medal.svg',
      heading: 'End-to-end excellence',
      description:
        'From the spark of an idea to mass production, we work with an essence of excellence every step of the way. This holistic approach means a smooth and successful experience for you and your product.',
    },
  ];

  return (
    <main className="">
      {/* Hero Section */}
      <div className="bg-black">
        <section className="w-full h-auto md:h-[500px] 2xl:px-32 text-white bg-[#1A1A1A] mt-[-20px] flex flex-col justify-center px-6 md:px-24 pt-12 md:pt-24 pb-8">
          <Breadcrumbs label="Selected Work" />
          <h1 className="font-medium text-4xl md:text-[3.375rem] leading-relaxed md:leading-[4.5rem] pt-4 md:pt-8">
            We're a team of creative problem solvers{' '}
            <br className="hidden md:block" />
            ready to bring your big ideas to life.
          </h1>
        </section>
      </div>

      {/* Image Section */}
      <section className="w-full h-64 md:h-[480px] 2xl:h-[580px] bg-[url('/CreativeContemplation.png')] bg-cover bg-center"></section>

      {/* About & Office Section */}
      <section className="bg-[#1A1A1A] px-6 md:px-24 py-8 md:py-16 flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-20 md:py-10">
          {/* Left Column */}
          <div className="flex flex-col gap-4 md:gap-5 mb-8 md:mb-0">
            <h5 className="font-[Plus_Jakarta_Sans] font-medium text-3xl md:text-[40px]">
              About us
            </h5>
            <p className="font-[Inter] text-base md:text-[14px] 2xl:text-[18px] text-white/60">
              We’re a team of world-class engineers, AI and ML specialists, and
              UI/UX experts based out of Dubai, UAE, united by a vision of
              developing impactful products. Our forward-thinking brand team
              complements our technical expertise, meaning that every project
              meets high quality standards and engages its users. Collaboration
              is at the heart of everything we do, combining our diverse skills
              and perspectives to transform your idea into a market-ready
              solution that makes a difference.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 md:gap-5">
            <h5 className="font-[Plus_Jakarta_Sans] font-medium text-3xl md:text-[40px]">
              Come say hi to us
            </h5>
            <div className="flex flex-col gap-4 md:gap-5">
              {['Dubai Office', 'London Office'].map((office, index) => (
                <div className="flex gap-4 md:gap-6 items-start" key={index}>
                  <Image
                    alt="marker icon"
                    src="/marker.svg"
                    width={24}
                    height={24}
                    className="w-6 h-6 md:w-8 md:h-8 mt-1"
                  />
                  <div>
                    <h5 className="font-medium text-xl md:text-[24px] font-[Plus_Jakarta_Sans] pb-1 md:pb-2">
                      {office}
                    </h5>
                    <p className="font-[Inter] text-sm md:text-[18px] text-white/78">
                      {index === 0 ?
                        'Prime Tower, Business Bay, Dubai, United Arab Emirates.'
                      : '3 Sheldon Square, London W2 6HY'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-48 md:h-[400px] bg-[url('/map.png')] rounded-lg md:rounded-[12px] bg-cover bg-center"></div>
      </section>

      {/* Culture Section */}
      <section className="bg-[#1A1A1A] px-6 md:pl-30 md:pr-40 py-12 md:py-35 rounded-b-[40px] md:rounded-b-[80px]">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-20">
          {/* Left Column */}
          <div className="flex flex-col gap-4 md:gap-8 mb-8 md:mb-0">
            <h5 className="font-[Plus_Jakarta_Sans] font-medium text-3xl md:text-[48px]">
              Our culture shapes <br className="hidden md:block" />
              tomorrow's solutions.
            </h5>
            <p className="font-[Inter] text-base md:text-[18px] text-white/78">
              At Dysol, creating solutions that make an impact is at the core of
              our culture.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <div className="flex flex-col gap-6 md:gap-14">
              {cultureObjs.map((item, index) => (
                <div className="flex gap-4 md:gap-8 items-start" key={index}>
                  <Image
                    alt={item.heading}
                    src={item.icon}
                    width={20}
                    height={20}
                    className="w-5 h-5 md:w-6 md:h-6 mt-1"
                  />
                  <div>
                    <h5 className="font-medium text-xl md:text-[24px] font-[Plus_Jakarta_Sans] pb-1 md:pb-2">
                      {item.heading}
                    </h5>
                    <p className="font-[Inter] text-sm md:text-[18px] text-white/78">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// import Breadcrumbs from '@/components/Shared/Breadcrumbs';
// import Image from 'next/image';

// export default function AboutPage() {

//   const cultureObjs = [{
//     icon: '/bulb.svg',
//     heading: 'Innovation',
//     description: 'Progress doesn’t rest, and neither do we. Our team is constantly exploring new technologies and pushing boundaries to solve challenges and bring impactful ideas to life. '
//   },
//   {
//     icon: '/customer.svg',
//     heading: 'Consumer Experience',
//     description: 'We strive to create products that your consumers love. Every move we make is with the consumer in mind, making our designs intuitive, functional and impactful. '
//   },
//   {
//     icon: '/speed.svg',
//     heading: 'Speed Wins',
//     description: 'In the fast-paced world of tech, timing is everything. We work with agility and precision to stay ahead, delivering solutions that make an impact at the right time.'
//   },
//   {
//     icon: '/medal.svg',
//     heading: 'End-to-end excellence',
//     description: 'From the spark of an idea to mass production, we work with an essence of excellence every step of the way. This holistic approach means a smooth and successful experience for you and your product.'
//   }
//   ]
//   return (
//     <main className="bg-black">
//       <section className="w-full h-[500px] text-white bg-[#1A1A1A] bg-cover bg-center rounded-b-[80px]  mt-[-20px] flex flex-col justify-center px-25 pt-25">
//         <Breadcrumbs label="Selected Work" />
//         <h1 className="font-semibold text-6xl leading-[5rem] pt-8">
//           We’re a team of creative problem solvers <br /> ready to bring your big ideas to life.
//         </h1>
//       </section>

//       <section className="w-full h-[480px] 2xl:h-[580px] bg-[url('/CreativeContemplation.png')] bg-cover bg-center"></section>

//       <section className='bg-[#1A1A1A] px-25 py-15 flex flex-col gap-10'>
//         <div className='grid grid-cols-2 justify-between py-10 gap-20'>
//           {/* left column */}
//           <div className='flex flex-col gap-5'>
//             <h5 className='font-[Plus_Jakarta_Sans] font-medium text-[40px]'>About us</h5>
//             <p className='font-normal text-[14px] 2xl:text-[18px]/[28px] font-[Inter] text-white/60'>We’re a team of world-class engineers, AI and ML specialists, and UI/UX experts based out of Dubai, UAE, united by a vision of developing impactful products. Our forward-thinking brand team complements our technical expertise, meaning that every project meets high quality standards and engages its users. Collaboration is at the heart of everything we do, combining our diverse skills and perspectives to transform your idea into a market-ready solution that makes a difference. </p>
//           </div>

//           {/* Right columns */}
//           <div className='flex flex-col gap-5'>
//             <h5 className='font-[Plus_Jakarta_Sans] font-medium text-[40px]'>Come say hi to us</h5>
//             <div className='flex flex-col gap-5'>
//               <div className='flex gap-6 items-start'>
//                 <Image alt="marker icon" src="/marker.svg" width={30} height={30} className='inline-block pt-1' />
//                 <span>
//                   <h5 className='font-medium text-[24px] font-[Plus_Jakarta_Sans] pb-2'>Dubai Office</h5>
//                   <p className='font-[Inter] text-[18px]/[28px] text-white/78'>Prime Tower, Business Bay, Dubai, United Arab Emirates.</p>
//                 </span>
//               </div>

//               <div className='flex gap-6 items-start'>
//                 <Image alt="marker icon" src="/marker.svg" width={30} height={30} className='inline-block' />
//                 <span>
//                   <h5 className='font-medium text-[24px] font-[Plus_Jakarta_Sans] pb-2'>London Office</h5>
//                   <p className='font-[Inter] text-[18px]/[28px] text-white/78'>3 Sheldon Square, London W2 6HY</p>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="w-full h-[400px] bg-[url('/map.png')] rounded-[12px] bg-cover bg-center">
//         </div>
//       </section>

//       <section className='bg-[#1A1A1A] pl-30 pr-40 py-35 rounded-b-[80px]'>
//         <div className='grid grid-cols-2 justify-between  gap-20'>
//           {/* left column */}
//           <div className='flex flex-col gap-8'>
//             <h5 className='font-[Plus_Jakarta_Sans] font-medium text-[48px]'>Our culture shapes <br/>  tomorrows's solutions.</h5>
//             <p className='font-normal text-[18px]/[28px] font-[Inter] text-white/78'>At Dysol, creating solutions that make an impact is at the core of our culture.  </p>
//           </div>

//           {/* Right columns */}
//           <div className='flex flex-col'>
//             <div className='flex flex-col gap-14'>

//               {cultureObjs.map((item, index) => {
//                 return (

//                   <div className='flex gap-8 items-start' key={index}>
//                     <Image alt="marker icon" src={item.icon} width={25} height={25} className='inline-block pt-2' />

//                     <span key={index}>
//                       <h5 className='font-medium text-[24px] font-[Plus_Jakarta_Sans] pb-2'>{item.heading}</h5>
//                       <p className='font-[Inter] text-[18px]/[28px] text-white/78 text-justify'>{item.description}</p>
//                     </span>

//                   </div>)
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//     </main>
//   );
// }
