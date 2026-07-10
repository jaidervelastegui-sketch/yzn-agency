export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "border-violet-200/35 bg-white text-black shadow-[0_0_52px_rgba(168,85,247,0.24)] hover:border-white hover:bg-violet-100 hover:shadow-[0_0_72px_rgba(168,85,247,0.34)]",
    secondary:
      "border-white/12 bg-white/[0.05] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-violet-200/38 hover:bg-white/[0.09] hover:text-violet-100 hover:shadow-[0_0_38px_rgba(168,85,247,0.12)]",
  };

  const classes = `group relative inline-flex items-center justify-center overflow-hidden rounded-full border px-7 py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.26em] transition-all duration-500 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-200 ${variants[variant]} ${className}`;

  const content = (
    <>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative">{children}</span>
    </>
  );

  if (href) {
    return (
      <a className={classes} data-motion-button href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} data-motion-button type={type} {...props}>
      {content}
    </button>
  );
}
