export const Container = ({ className, ...props }) => (
  <div
    {...props}
    className={`w-full max-w-[2150px] bg-[#1A1A1A] mx-auto ${className || ''}`}
  />
);
