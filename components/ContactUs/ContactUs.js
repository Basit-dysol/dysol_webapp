'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ContactUs({ onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.elements.name.value,
      company: e.target.elements.company.value,
      email: e.target.elements.email.value,
      phone: e.target.elements.phone.value,
      message: e.target.elements.message.value,
    };

    try {
      const response = await fetch('/api/email/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 backdrop-blur-md bg-black/30 z-50"
        onClick={onClose}
      />

      <div className="fixed right-0 top-0 h-full w-full xl:w-1/2 bg-[#191919] text-white p-8 shadow-lg z-50 overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 hover:text-gray-200 text-2xl rounded-full bg-white/40 p-3">
          <Image
            src="/cross.svg"
            alt="Close"
            width={20}
            height={20}
          />
        </button>
        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-4 mt-6">
          Start your project with Dysol
        </h2>
        <p className="text-white/78 mb-10  font-[Inter] font-normal">
          Whether you have a question, need support, or want to bring your big
          idea to life, our team is here to help. Reach out to us by completing
          the form below and let’s talk about how we can design the future
          together.
        </p>
        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          {/* Two-Column Layout for Name, Company, Email, and Contact */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-4">

            <InsetLabelInput
              id="name"
              label="Your name"
              placeholder="What is your name?"
              icon="/contactUs/user.svg"
            />

            <InsetLabelInput
              id="company"
              label="Your Company Name"
              placeholder="What is your company name?"
              icon="/contactUs/company.svg"
            />
            <InsetLabelInput
              id="email"
              label="Your Email Address"
              placeholder="Enter your email address"
              icon="/contactUs/email.svg"
            />
            <InsetLabelInput
              id="contact"
              label="Your Contact Number"
              placeholder="Enter contact number"
              icon="/contactUs/phone.svg"
            />
          </div>
          <div className="mb-4">
            <FloatingLabelTextarea
              name="message" // Add this
              label="Message Body"
              placeholder="What do you want to talk about?"
            />
          </div>
          ;{/* Message Field - Full Width */}
          <div className="mb-4">
            <FloatingLabelTextarea
              label="Message Body"
              placeholder="What do you want to talk about?"
              icon=""
            />
          </div>
          ;
          {submitStatus === 'success' && (
            <div className="mb-4 p-4 bg-green-900/30 text-green-400 rounded-lg">
              Message sent successfully!
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-4 p-4 bg-red-900/30 text-red-400 rounded-lg">
              Error sending message. Please try again.
            </div>
          )}
          <button
            type="submit"
            className="disabled:opacity-50 w-full flex justify-center mt-10 bg-white text-gray-950 p-3 font-[Plus_Jakarta_Sans] rounded-full font-medium hover:bg-gray-200 transition"
            disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : `'Contact us' ${<Image
              src="/contactUs/send.svg"
              alt="Arrow"
              width={18}
              height={18}
              className="inline-block ml-2"
            />}`}
          </button>
        </form>
      </div>
    </>
  );
}

const InsetLabelInput = ({ label, id, icon, onChange, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative bg-[#333] text-white rounded-md  border border-[#444] px-4 pt-4 pb-2 ">
      <label htmlFor={id} className="text-xs uppercase text-white/40  tracking-wider block mb-1 font-[Inter]">{label}</label>

      <div className="flex items-center space-x-3">
        {icon && <Image
          src={icon}
          alt={label}
          width={15}
          height={20}
          className="text-gray-400" />
        }

        <input
          type="text"
          placeholder={isFocused ? '' : placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => setIsFocused(e.target.value !== '')}

          id={id}
          className="bg-transparent font-[Plus_Jakarta_Sans] text-white placeholder-gray-400 outline-none w-full text-base"
        />
      </div>
    </div>
  );
};


// /* Floating Label Input Component */
// function FloatingLabelInput({label, id, placeholder, icon}) {
//   const [isFocused, setIsFocused] = useState(false);
//   return (
//     <div className="relative">
//       <input
//         type="text"
//         id={id}
//         placeholder={isFocused ? '' : placeholder}
//         onFocus={() => setIsFocused(true)}
//         onBlur={(e) => setIsFocused(e.target.value !== '')}
//         className="w-full p-4 pl-10 bg-[#333] border border-[#444] rounded-lg placeholder-transparent text-white focus:outline-none focus:ring-2 focus:ring-gray-500 peer"
//       />
//       <label htmlFor={id}

//         className={`absolute font-[Inter] font-medium uppercase left-10 top-4 text-white/60 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/60 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-300`}>
//         {label}
//       </label>


//       <span className="absolute left-3 top-4 text-gray-500">
//         {/* <i className={`material-icons`}>{icon}</i> */}
//         {icon && <Image className={`material-icons`}
//           src={icon}
//           alt={label}
//           width={15}
//           height={18}
//         />}
//       </span>
//     </div>
//   );
// }

/* Floating Label Textarea Component */
function FloatingLabelTextarea({ label, placeholder, icon, name }) {
  // Add name prop
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative bg-[#333] text-white rounded-md  border border-[#444] px-4 pt-4 pb-2 ">
      <label htmlFor='message' className="text-xs uppercase text-white/40  tracking-wider block mb-1 font-[Inter]">{label}</label>



      <textarea
        id="message"
        name={name}
        placeholder={isFocused ? '' : placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(e.target.value !== '')}
        className="w-full p-4 pl-0 pt-1"
        rows="4"
      />
    </div>
  );
}
