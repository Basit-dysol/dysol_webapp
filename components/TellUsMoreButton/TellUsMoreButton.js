import React from 'react';

const TellUsMoreButton = ({ setContactVisible }) => {
  return (
    <button
      className="w-max lg:w-[350px] xl:w-[294px] h-11 lg:h-14 p-4 rounded-[16px] bg-white text-gray-950 font-medium text-base flex items-center justify-center gap-2 font-[Plus_Jakarta_Sans] text-[18px]"
      onClick={() => setContactVisible(true)}>
      <img src="/tellmore.svg" alt="" />
      Tell us about your project
    </button>
  );
};

export default TellUsMoreButton;
