export const Container = ({ className, ...props }) => (
  <div
    {...props}
    className={`w-full max-w-[1728px] bg-[#1A1A1A] mx-auto ${className || ''}`}
  />
);
