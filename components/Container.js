export const Container = ({ className, ...props }) => (
  <div
    {...props}
    className={`w-full max-w-[1920px] bg-[#0d0d0d] bg-[url('/footer-bg.png')]  mx-auto rounded-b-[40px] md:rounded-b-[80px] ${className || ''}`}
    // className={`w-full bg-[#1A1A1A] mx-auto ${className || ''}`}
  />
);
