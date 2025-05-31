import { FaRobot, FaBuilding, FaClock, FaRocket } from 'react-icons/fa';

const features = [
  {
    icon: <FaRobot className="text-[#FAA7E0] text-4xl mb-4" />,
    title: 'Leading with Technology',
    description:
      'We leverage cutting-edge technology tools, integrating the latest innovations into your product to give your business a market-leading solution.',
  },
  {
    icon: <FaBuilding className="text-[#FAA7E0] text-4xl mb-4" />,
    title: 'Industry Expertise',
    description:
      'Our diverse team brings extensive experience across various industries, allowing us to tailor solutions that address the unique challenges of your business.',
  },
  {
    icon: <FaClock className="text-[#FAA7E0] text-4xl mb-4" />,
    title: 'On-Time, On-Budget',
    description:
      'From start to finish, we keep your project’s timeline and budget in focus, balancing innovation with resource management to deliver exceptional results.',
  },
  {
    icon: <FaRocket className="text-[#FAA7E0] text-4xl mb-4" />,
    title: 'End-to-End Development',
    description:
      'Our expert team guarantees a seamless transition from concept to prototyping and manufacturing, saving you time and resources by managing each step with precision.',
  },
];

export default function WhyUsSection() {
  return (
    <div className="h-max py-12 md:py-20 2xl:py-36 px-6 md:px-24 2xl:px-32 text-white/90 overflow-hidden">
      {/* Section Title */}
      <h2 className="text-left 2xl:text-xl text-sm text-white/90 uppercase tracking-wide my-6">
        Why Us?
      </h2>

      {/* Main Heading */}
      <h2 className="text-3xl md:text-[2.5rem] xl:text-[2.3rem] 2xl:text-[3rem] text-white/90 leading-tight mb-8 md:mb-12">
        Why choose to partner with us?
      </h2>

      {/* Feature Grid with Borders */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full relative">
        {/* Top Full-Width Dashed Line */}
        <div className="absolute left-0 right-0 top-0 -mx-6 md:-mx-20 border-t-2 border-dashed border-[#4D4D4D] hidden md:inline"></div>

        {features.map((feature, index) => (
          <div
            key={index}
            className={`
              p-4 md:p-6 
              border-b-2 md:border-b-0 
              ${index === 0 ? 'md:border-l-2 md:border-dashed md:border-[#4D4D4D]' : ''}
              ${index === features.length - 1 ? 'md:border-r-2 md:border-dashed md:border-[#4D4D4D]' : ''}
              md:border-r-2 
              border-dashed border-[#4D4D4D] 
              text-left transition-all duration-300 
              hover:bg-[#333333]
              max-md:border-l-0 max-md:border-r-0
            `}>
            {feature.icon}
            <h3 className="text-white text-lg md:text-xl 2xl:text-2xl mb-2">
              {feature.title}
            </h3>
            <p className="text-white/80 text-sm 2xl:text-xl">
              {feature.description}
            </p>
          </div>
        ))}

        {/* Bottom Full-Width Dashed Line */}
        <div className="absolute left-0 right-0 bottom-0 -mx-6 md:-mx-20 border-t-2 border-dashed border-[#4D4D4D] hidden md:block"></div>
      </div>
    </div>
  );
}

// import { FaRobot, FaBuilding, FaClock, FaRocket } from 'react-icons/fa';

// const features = [
//   {
//     icon: <FaRobot className="text-[#FAA7E0] text-4xl mb-4" />,
//     title: 'Leading with Technology',
//     description:
//       'We leverage cutting-edge technology tools, integrating the latest innovations into your product to give your business a market-leading solution.',
//   },
//   {
//     icon: <FaBuilding className="text-[#FAA7E0] text-4xl mb-4" />,
//     title: 'Industry Expertise',
//     description:
//       'Our diverse team brings extensive experience across various industries, allowing us to tailor solutions that address the unique challenges of your business.',
//   },
//   {
//     icon: <FaClock className="text-[#FAA7E0] text-4xl mb-4" />,
//     title: 'On-Time, On-Budget',
//     description:
//       'From start to finish, we keep your project’s timeline and budget in focus, balancing innovation with resource management to deliver exceptional results.',
//   },
//   {
//     icon: <FaRocket className="text-[#FAA7E0] text-4xl mb-4" />,
//     title: 'End-to-End Development',
//     description:
//       'Our expert team guarantees a seamless transition from concept to prototyping and manufacturing, saving you time and resources by managing each step with precision.',
//   },
// ];

// export default function WhyUsSection() {
//   return (
//     <div className="h-max py-20 2xl:py-36 px-24 2xl:px-32 text-white/90 overflow-hidden">
//       {/* Section Title */}
//       <h2 className="text-sm text-white/80 uppercase tracking-wide mb-2">
//         Why Us?
//       </h2>

//       {/* Main Heading */}
//       <h2 className="text-[2.5rem] leading-tight mb-12">
//         Why choose to partner with us?
//       </h2>

//       {/* Feature Grid with Borders */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full relative">
//         {/* Top Full-Width Dashed Line */}
//         <div className="absolute left-0 right-0 top-0 -mx-20 border-t-2 border-dashed border-[#4D4D4D]"></div>

//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className=" p-6 border-r-2 border-dashed border-[#4D4D4D] text-left transition-all duration-300 hover:bg-[#333333]"
//             style={{ borderLeft: index === 0 ? '2px dashed #4D4D4D' : 'none' }}>
//             {feature.icon}
//             <h3 className="text-white/90 text-xl mb-2">{feature.title}</h3>
//             <p className="text-white/70 text-sm">{feature.description}</p>
//           </div>
//         ))}

//         {/* Bottom Full-Width Dashed Line */}
//         <div className="absolute left-0 right-0 bottom-0 -mx-20 border-t-2 border-dashed border-[#4D4D4D]"></div>
//       </div>
//     </div>
//   );
// }
