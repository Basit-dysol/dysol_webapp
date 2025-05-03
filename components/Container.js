export const Container = ({ className, ...props }) => (
  <div
    {...props}
    className={`w-full max-w-[1920px] bg-[#1A1A1A] m-1.5  mx-auto ${className || ''}`}
    // className={`w-full bg-[#1A1A1A] mx-auto ${className || ''}`}

  />
);
