import WhyUsCard from './WhyUsCard';
import { FaRobot, FaIndustry, FaClock, FaRocket } from 'react-icons/fa';

const whyUsData = [
  {
    icon: <FaRobot />,
    title: 'Leading with Technology',
    description:
      'We integrate cutting-edge technology into your product to give your business a market-leading solution.',
  },
  {
    icon: <FaIndustry />,
    title: 'Industry Expertise',
    description:
      'Our diverse team brings experience across industries, tailoring solutions to your business challenges.',
  },
  {
    icon: <FaClock />,
    title: 'On-Time, On-Budget',
    description:
      'From start to finish, we manage your timeline and budget, balancing innovation with efficiency.',
  },
  {
    icon: <FaRocket />,
    title: 'End-to-End Development',
    description:
      'We ensure a seamless transition from concept to prototype, saving you time and resources.',
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-16 px-6 bg-black text-white">
      <h2 className="text-md uppercase text-gray-400 text-center">Why Us?</h2>
      <h3 className="text-3xl font-bold text-center mt-2">
        Why choose to partner with us?
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {whyUsData.map((item, index) => (
          <WhyUsCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
