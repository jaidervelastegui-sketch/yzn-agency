export default function Container({ children, className = "", ...props }) {
  return (
    <div
      className={`mx-auto w-full max-w-[88rem] px-6 sm:px-8 lg:px-12 ${className}`}
      data-motion-container
      {...props}
    >
      {children}
    </div>
  );
}
