import Breadcrumbs from "@/components/Shared/Breadcrumbs";
import Image from "next/image";
import OurComputerVisionCard from "@/components/ComputerVision/OurComputerVisionCard";
import Testimonials from "@/components/ComputerVision/Testimonials";
// import TestimonialSection from "@/components/Testimonials/TestimonialSection";

export default function ComputerVisionPage() {
  const process = [
    {
      image: "/computervision/Vector1.png",
      description: "Manufacturing & Quality Inspection",
      subdescription: [
        "Replace manual inspection",
        "Detect defects in real time",
        "Automate grading and classification",
        "Improve consistency and reduce waste",
      ],
    },
    {
      image: "/computervision/Vector2.png",
      description: "Inventory & Operational Visibility",
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
      description: "Autonomous & Mobile Vision Systems",
      subdescription: [
        "Real-time detection and tracking",
        "Onboard edge inference",
        "Low-latency decision support",
        "Operates with limited connectivity",
      ],
    },
    {
      image: "/computervision/Vector5.png",
      description: "Public Space Monitoring & Safety",
      subdescription: [
        "Thermal anomaly detection",
        "Crowd monitoring and alerts",
        "Identity-linked safety systems",
        "Continuous unattended operation",
      ],
    },
    {
      image: "/computervision/Vector6.png",
      description: "Process Optimization & Loss Prevention",
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
      <section className="w-full h-auto md:h-[500px] 2xl:px-32 text-white bg-[#1A1A1A] mt-[-20px] flex flex-col justify-center px-6 md:px-24 pt-12 md:pt-24 pb-8">
        <Breadcrumbs label="Computer Vision" />
        <h2 className="mt-6 md:mt-8 text-3xl md:text-5xl font-medium text-left">
          Computer Vision for <br /> real-world deployment.
        </h2>
        <p className=" mt-4 md:mt-4 w-full md:w-[65vw] text-base md:text-inherit text-white/80">
          We design and deploy systems that operate inside real environments. Replacing <br /> manual processes and delivering reliable insight at
          scale.
        </p>
        <div className="mt-6">
          <button className="bg-white text-black px-6 py-3 rounded-[16px] text-sm font-medium flex gap-2">
            <img
              src="/computervision/computer-vision1.png"
              alt=""
              className="transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] hover:translate-x-0.5"
            />
            Talk to us about your use case
          </button>
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-6 md:px-24 py-8 md:py-14 2xl:px-32 flex flex-col gap-6 md:gap-10">
        <p className="text-white/90 text-lg md:text-xl max-w-4xl">
          At Dysol, computer vision is engineered as a complete system integrated with <br />
          <span className="font-bold">hardware, embedded software, and deployment constraints from day one.</span>
        </p>
      </section>

      {/* Process Grid */}
      <section className="bg-[#1A1A1A] px-6 md:px-24 py-6 md:py-2 2xl:px-32 flex flex-col gap-6 md:gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
          {process.map((item, index) => (
            <OurComputerVisionCard key={index} {...item} />
          ))}
        </div>
      </section>

      <section className="bg-[#1A1A1A] px-6 md:px-24 2xl:px-32 py-20 flex flex-col md:flex-row gap-16  ">
        {/* Left */}
        <div className="md:w-1/2">
          <p className="text-white/50 text-sm uppercase mb-6">Why Dysol?</p>

          <h3 className="text-3xl md:text-4xl font-medium leading-tight">
            Many teams can train models.
            <br />
            Few can deploy vision systems that perform reliably in the real world.
          </h3>
        </div>

        {/* Right */}
        <div className="w-1/2 flex ml-auto max-w-lg justify-center flex-col gap-2 text-white/90">
          <div>
            {cultureObjs.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <Image src={`/computervision/i${index + 1}.png`} alt="arrow" width={10} height={10} className="mt-[6px]" />
                <span className="text-xm md:text-base leading-relaxed">{item}</span>
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
