export default function SectionTitle({ eyebrow, title, children, ...props }) {
  return (
    <div className="mb-16 max-w-5xl md:mb-20" data-motion-group {...props}>
      {eyebrow ? (
        <p
          className="mb-6 text-[0.68rem] font-bold uppercase tracking-[0.5em] text-violet-100/68"
          data-motion-text
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className="max-w-4xl text-4xl font-semibold leading-[1.0] tracking-[-0.065em] text-white sm:text-6xl lg:text-[4.75rem]"
        data-motion-title
      >
        {title}
      </h2>
      {children ? (
        <p className="mt-7 max-w-2xl text-base leading-8 text-white/64 sm:text-lg" data-motion-text>
          {children}
        </p>
      ) : null}
    </div>
  );
}
