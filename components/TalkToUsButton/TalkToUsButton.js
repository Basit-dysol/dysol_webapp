"use client";
import Image from "next/image";

export default function TalkToUsButton() {
  return (
    <button onClick={() => window.dispatchEvent(new Event("openContactUs"))} className="bg-white px-8 py-4 rounded-[16px] flex flex-row gap-2">
      <div className="rounded-full flex items-center justify-center">
        <Image src="/computervision/computer-vision1.png" alt="phone icon" width={22} height={22} />
      </div>
      <p className="text-[20px] text-black">Talk to us about your use case</p>
    </button>
  );
}
