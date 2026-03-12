import HeroSection from '@/components/HeroSection/HeroSection';
import ComputerVisionSection from '@/components/ComputerVision/ComputerVisionSection';
import AboutSection from '@/components/AboutSection/About';
import OurWorkSection from '@/components/OurWorkSection/OurWorkSection';
import WhyUsSection from '@/components/WhyUsSection/WhyUsSection';
import TestimonialSection from '@/components/Testimonials/TestimonialSection';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className=''>
      <HeroSection />
      <ComputerVisionSection />
      <OurWorkSection />
      <AboutSection />
      <WhyUsSection />
      <TestimonialSection />
    </main>
  );
}
