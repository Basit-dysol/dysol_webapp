import Breadcrumbs from "@/components/Shared/Breadcrumbs";
import Image from "next/image";
import OurComputerVisionCard from "@/components/ComputerVision/OurComputerVisionCard";
import Testimonials from "@/components/ComputerVision/Testimonials";
import TalkToUsButton from "@/components/TalkToUsButton/TalkToUsButton";

export default function ComputerVisionPage() {
  const process = [
    {
      image: "/computervision/Vector1.png",
      description: "Manufacturing &\n Quality Inspection",
      subdescription: [
        "Replace manual inspection",
        "Detect defects in real time",
        "Automate grading and classification",
        "Improve consistency and reduce waste",
      ],
    },
    {
      image: "/computervision/Vector2.png",
      description: "Inventory &\n Operational Visibility",
      subdescription: [
        "Detect missing or misplaced inventory",
        "Replace manual audits",
        "Monitor movement across zones",
        "Maintain continuous visibility",
      ],
    },
    {
      image: "/computervision/Vector3.png",
      description: "People, Identity & Presence",
      subdescription: [
        "Identity recognition and verification",
        "Attendance and presence tracking",
        "Access monitoring at scale",
        "Secure system integration",
      ],
    },
    {
      image: "/computervision/Vector4.png",
      description: "Autonomous & Mobile\n Vision Systems",
      subdescription: [
        "Real-time detection and tracking",
        "Onboard edge inference",
        "Low-latency decision support",
        "Operates with limited connectivity",
      ],
    },
    {
      image: "/computervision/Vector5.png",
      description: "Public Space\n Monitoring & Safety",
      subdescription: [
        "Thermal anomaly detection",
        "Crowd monitoring and alerts",
        "Identity-linked safety systems",
        "Continuous unattended operation",
      ],
    },
    {
      image: "/computervision/Vector6.png",
      description: "Process Optimization &\n Loss Prevention",
      subdescription: [
        "Detect bottlenecks and inefficiencies",
        "Identify yield loss and rework",
        "Monitor throughput and utilization",
        "Quantify line performance",
      ],
    },
  ];
  const cultureObjs = [
    "Vision integrated directly into hardware",
    "Edge-first architectures",
    "Experience at enterprise and national scale",
    "Production-ready systems, not demos",
  ];
  return (
    <main className=" ">
      {/* Hero Section */}
      <section className="w-full h-auto md:h-[500px] 2xl:px-32 text-white bg-[#1A1A1A] mt-[20px] flex flex-col justify-center px-6 md:px-24 pt-12 md:pt-24 pb-8">
        <Breadcrumbs label="Computer Vision" />
        <h2 className="mt-6 md:mt-8 text-5xl md:text-7xl font-semibold text-left leading-tight md:leading-[1.2] ">
          Computer Vision for <br /> real-world deployment.
        </h2>
        <p className=" mt-4 md:mt-4 w-full text-[1.3rem] md:w-[65vw] text-base  text-white/60">
          We design and deploy systems that operate inside real environments. Replacing <br /> manual processes and delivering reliable insight at
          scale.
        </p>
        <div className="mt-6">
          <TalkToUsButton />
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-6 md:px-24 py-4 lg:mt-[150px] md:py-7 2xl:px-32 flex flex-col gap-6 md:gap-10">
        <p className="text-white/90 text-lg md:text-4xl ">
          At Dysol, computer vision is engineered as a complete system integrated with <br />
          <span className="font-bold">hardware, embedded software, and deployment constraints from day one.</span>
        </p>
      </section>

      {/* Process Grid */}
      <section className="bg-[#1A1A1A] px-6 md:px-24 py-6 lg:mt-[50px] md:py-2 2xl:px-32 flex flex-col gap-6 md:gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
          {process.map((item, index) => (
            <OurComputerVisionCard key={index} {...item} />
          ))}
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-6 md:px-24 2xl:px-32 py-12 md:py-20 lg:mt-[150px] flex flex-col md:flex-row gap-10 md:gap-20">
        {/* Left */}
        <div className="w-full md:w-[60%]">
          <p className="text-white/90 text-base md:text-[1.3rem] uppercase mb-4 md:mb-6">Why Dysol?</p>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-medium leading-snug md:leading-tight">
            Many teams can train models.
            <br />
            Few can deploy vision systems that perform reliably in the real world.
          </h3>
        </div>

        {/* Right */}
        <div className="w-full md:w-[40%] text-white/90">
          <div>
            {cultureObjs.map((item, index) => (
              <div key={index} className="flex items-start justify-start gap-3 md:gap-4 mt-4 md:mt-6">
                <Image src={`/computervision/i${index + 1}.png`} alt="arrow" width={25} height={25} className="mt-1 md:mt-[6px]" />
                <span className="text-sm sm:text-base md:text-[1.5rem] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <Testimonials />
    </main>
  );
}
