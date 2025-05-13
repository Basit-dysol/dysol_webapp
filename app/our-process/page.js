import Breadcrumbs from '@/components/Shared/Breadcrumbs';
import Image from 'next/image';
import OurProcessCard from '@/components/OurProcess/OurProcessCard';

export default function OurProcessPage() {
  const cultureObjs = [
    {
      icon: '/ourprocess/users.svg',
      heading: 'Deep Technical & Engineering Expertise',
      description:
        'Our team of engineers takes your concept and develops a blueprint that’s feasible and ready for manufacturing. We factor in everything—durability, efficiency, and scalability—so you can be assured your product succeeds.',
    },
    {
      icon: '/ourprocess/pen.svg',
      heading: 'Design Excellence',
      description:
        'Our design process blends style and usability, creating innovations that work seamlessly to attract and engage your ideal users.',
    },
    {
      icon: '/ourprocess/brain.svg',
      heading: 'IP Protection',
      description:
        'Safeguarding your unique innovations is at the core of our focus. Our approach ensures your intellectual property stays protected through every stage of development at Dysol.',
    },
    {
      icon: '/ourprocess/robot.svg',
      heading: 'Leading-Edge Technologies',
      description:
        'We’re all about crafting solutions that are as innovative as they are practical. By using the latest in tech and engineering, we give your product a competitive edge. ',
    },
  ];

  const process = [
    {
      image: '/ourprocess/feasibility.svg',
      description: 'Feasibility Study',
      subdescription:
        'Our team analyses every angle to make sure your idea is both possible, practical, and successful from the start.',
      // slug: 'feasibility',
    },
    {
      image: '/ourprocess/research.svg',
      description: 'Research & Development',
      subdescription:
        'With our curiosity and tech insights, we’re not afraid to dive deep and turn complex challenges into simple, effective solutions.',
      // slug: 'world-s-first-solar-breast-pump',
    },
    {
      image: '/ourprocess/industrial.svg',
      description: 'Industrial & Mechanical Design',
      subdescription:
        'We create designs that not only look good but are built to work in real life, making your product stand out.',
      // slug: 'iris-identification-device',
    },
    {
      image: '/ourprocess/electrical.svg',
      description: 'Electrical Engineering',
      subdescription:
        'Our team powers up your vision with precision-engineered electrical systems that enhance durability and efficiency.',
      // slug: 'baby-rocker',
    },
    {
      image: '/ourprocess/aiml.svg',
      description: 'AI & ML',
      subdescription:
        'We design adaptable solutions that grow smarter over time, keeping you ahead of the curve.',
      // slug: 'ai-ac-control-device',
    },
    {
      image: '/ourprocess/computer.svg',
      description: 'Computer Vision',
      subdescription:
        'We’re experts in building software that amplifies your product’s impact, designed to integrate seamlessly and scale effortlessly.',
      // slug: 'smart-blood-pressure-monitor',
    },
    {
      image: '/ourprocess/software.svg',
      description: 'Software Development',
      subdescription:
        'We build software that amplifies your product’s impact, designed to integrate seamlessly and scale effortlessly.',
      // slug: 'smart-blood-pressure-monitor',
    },
    {
      image: '/ourprocess/mobile.svg',
      description: 'Mobile App Development',
      subdescription:
        'With user-centric design at our core, we create mobile apps that connect, engage, and enhance the user journey.',
      // slug: 'smart-blood-pressure-monitor',
    },
    {
      image: '/ourprocess/semi.svg',
      description: 'Semiconductor Design',
      subdescription:
        'We design custom semiconductors tailored to maximise functionality and efficiency, pushing your product’s potential to new heights.',
      // slug: 'smart-blood-pressure-monitor',
    },
    {
      image: '/ourprocess/manufacture.svg',
      description: 'Manufacturing',
      subdescription:
        'Our full-spectrum manufacturing ensures that your product makes it to market with top-class quality.',
      // slug: 'smart-blood-pressure-monitor',
    },
    {
      image: '/ourprocess/brand.svg',
      description: 'Brand Development',
      subdescription:
        'We shape brands that resonate, building trust and customer loyalty through purposeful design and a focus on authenticity.',
      // slug: 'smart-blood-pressure-monitor',
    },
    {
      image: '/ourprocess/uiux.svg',
      description: 'UI/UX',
      subdescription:
        'Our approach combines form and function, creating intuitive interfaces that enhance the user experience across every touchpoint.',
      // slug: 'smart-blood-pressure-monitor',
    },
  ];

  return (
    <main className="bg-black">
      <section className="w-full h-[500px] text-white bg-[#1A1A1A] bg-cover bg-center  mt-[-20px] flex flex-col justify-center px-25 pt-25">
        <Breadcrumbs label="Our Process" />
        <h2 className="mt-8 text-5xl font-medium items-start text-left">
          The Dysol way of working
        </h2>
        <p className="text-white/50 mt-4 w-[65vw]">
          At Dysol, we’re your global end-to-end product development partner
          from idea to market launch. We walk with you every step of the way,
          combining our hands-on expertise and approach so that your vision is
          brought to life efficiently and effectively. Our team of experts work
          closely with you to refine concepts, manage market research, develop
          designs, and conduct rigorous testing. Working with Dysol means
          working with a partner invested in creating your impactful solution
          and positioning your product for success in the marketplace.
        </p>
      </section>

      <section className="bg-[#1A1A1A] px-25 py-15 flex flex-col gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
          {process.map((process, index) => (
            // <div key={index} className=' min-h-max h-[400px] rounded-2xl'>
            // </div>
            <OurProcessCard key={index} {...process}/>
            // <ProductCard key={index} {...process} />
          ))}
        </div>
      </section>

      <section className="bg-[#1A1A1A] pl-30 pr-40 py-35 rounded-b-[80px]">
        <div className="grid grid-cols-2 justify-between  gap-20">
          {/* left column */}
          <div className="flex flex-col gap-8">
            <p className="font-normal text-[18px]/[28px] font-[Inter] text-white/78">
              OUR APPROACH TO INNOVATION
            </p>
            <h5 className="font-[Plus_Jakarta_Sans] font-medium text-[48px]">
              To develop word-class winning products, we combine:
            </h5>
          </div>

          {/* Right columns */}
          <div className="flex flex-col">
            <div className="flex flex-col gap-14">
              {cultureObjs.map((item, index) => {
                return (
                  <div className="flex gap-8 items-start" key={index}>
                    <Image
                      alt="marker icon"
                      src={item.icon}
                      width={25}
                      height={25}
                      className="inline-block pt-2"
                    />

                    <span key={index}>
                      <h5 className="font-medium text-[24px] font-[Plus_Jakarta_Sans] pb-2">
                        {item.heading}
                      </h5>
                      <p className="font-[Inter] text-[18px]/[28px] text-white/78 text-justify">
                        {item.description}
                      </p>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
