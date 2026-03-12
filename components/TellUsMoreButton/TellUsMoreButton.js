import React from 'react';

const TellUsMoreButton = ({ 
  setContactVisible, 
  title = "Tell us about your project",
  icon = "/tellmore.svg",
  showIcon = true 
}) => {
  return (
    <button
      className="cursor-pointer   h-11 lg:h-14 p-4 rounded-[16px] bg-white text-gray-950 font-medium text-base flex items-center justify-center gap-2 font-[Plus_Jakarta_Sans] text-[18px]
        transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] hover:bg-white/60 hover:border-2 hover:border-white/60"
      onClick={() => setContactVisible(true)}
      style={{
        border: '2px solid transparent',
        animationDelay: '1ms',
        transitionProperty: 'background, transform, border-color',
      }}>
      {showIcon && (
        <img
          src={icon}
          alt=""
          className="transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] hover:translate-x-0.5"
        />
      )}
      {title}
    </button>
  );
};

export default TellUsMoreButton;
