import { useState } from "react";
import Image from 'next/image';


export default function DropdownComponent() {
  const [open, setOpen] = useState(false);

  {/* <button className="w-20 h-11 px-4 py-3 rounded-[16px] bg-gray-950 text-white flex items-center justify-center gap-2">
              EN <span className="text-xs">▼</span>
            </button> */}
  return (
    <div className="relative inline-block text-left">
      <button
        // onClick={() => setOpen(!open)}
        className=" h-11 px-[18px] py-3 rounded-[16px] bg-gray-950 text-white flex items-center justify-center gap-1"
      >
        EN
        <Image src='/chevronDown.svg' alt="Email us" width={16} height={16} />

      </button>

      {open && (
        // <div className="absolute mt-2 w-44 bg-white border rounded shadow-lg z-50">
          // <ul className="py-1 text-sm text-gray-700">
            {/* <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li> */}
          // </ul>
        // </div>
      )}
    </div>
  );
}
