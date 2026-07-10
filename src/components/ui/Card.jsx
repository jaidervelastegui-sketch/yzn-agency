export default function Card({ children, className = "", ...props }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[2rem] border border-white/[0.14] bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05)_48%,rgba(0,0,0,0.06))] p-7 shadow-[0_28px_110px_rgba(0,0,0,0.36)] backdrop-blur-2xl transition-all duration-700 ease-out hover:-translate-y-1.5 hover:border-violet-200/45 hover:bg-white/[0.09] hover:shadow-[0_34px_130px_rgba(88,28,135,0.4)] ${className}`}
      data-motion-item
      {...props}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-violet-400/0 blur-3xl transition duration-700 group-hover:bg-violet-400/18" />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-100/65 to-transparent opacity-85" />
      {children}
    </article>
  );
}
