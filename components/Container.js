export const Container = ({ className, ...props }) => (
  <div
    {...props}
    className={`w-full bg-[#1A1A1A] mx-auto ${className || ''}`}
  />
);
