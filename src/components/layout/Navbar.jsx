"use client";

import { useEffect, useState } from "react";

import Button from "@/components/ui/Button";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));

    const handleScroll = () => {
      setScrolled(window.scrollY > 36);

      let current = "inicio";
      const offset = 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            current = sectionIds[i];
            break;
          }
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6"
      data-motion-section="navbar"
    >
      <nav
        className={`relative mx-auto flex max-w-[88rem] items-center justify-between overflow-hidden rounded-full border px-5 transition-all duration-500 ease-out sm:px-7 ${
          scrolled
            ? "border-white/[0.09] bg-black/58 py-2.5 shadow-[0_18px_80px_rgba(0,0,0,0.62)] backdrop-blur-3xl"
            : "border-white/[0.075] bg-black/28 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_18px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
        }`}
        data-motion-group
      >
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-100/38 to-transparent" />

        <a
          aria-label="YZN inicio"
          className="group relative z-10 inline-flex items-center gap-3 text-white"
          data-motion-item
          href="#inicio"
        >
          <span className="relative grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.055] text-[0.76rem] font-black tracking-[-0.08em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition duration-500 group-hover:border-violet-100/35 group-hover:bg-white/[0.08] group-hover:shadow-[0_0_44px_rgba(168,85,247,0.2)]">
            <span className="absolute inset-1 rounded-full border border-white/[0.06]" />
            YZN
          </span>
        </a>

        <ul
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-[0.67rem] font-bold uppercase tracking-[0.28em] text-white/52 lg:flex"
          data-motion-group
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <li data-motion-item key={item.href}>
                <a
                  className={`group relative block py-2.5 transition duration-300 hover:text-white ${isActive ? "text-white" : ""}`}
                  href={item.href}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-1/2 h-px -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-100/80 to-transparent transition-all duration-300 group-hover:w-full ${isActive ? "w-full" : "w-0"}`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="relative z-10 hidden lg:block" data-motion-item>
          <Button
            className="border-white/10 bg-white/[0.045] px-5 py-2.5 text-[0.62rem] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-violet-100/30 hover:bg-white/[0.08] hover:text-white"
            href="#contacto"
            variant="secondary"
          >
            Hablemos
          </Button>
        </div>

        <button
          aria-expanded={open}
          aria-label="Abrir menu"
          className="relative z-10 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-[0.66rem] font-bold uppercase tracking-[0.24em] text-white/78 transition duration-300 hover:border-white/18 hover:bg-white/[0.075] hover:text-white lg:hidden"
          data-motion-item
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          {open ? "Cerrar" : "Menu"}
        </button>
      </nav>

      {open ? (
        <div
          className="mx-auto mt-3 max-w-[88rem] rounded-[2rem] border border-white/[0.09] bg-black/72 px-4 py-4 shadow-[0_24px_90px_rgba(0,0,0,0.62)] backdrop-blur-3xl lg:hidden"
          data-motion-group
        >
          <ul className="space-y-1 text-sm font-bold uppercase tracking-[0.24em] text-white/70">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  className="block rounded-2xl px-4 py-3.5 transition duration-300 hover:bg-white/[0.07] hover:text-white"
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <Button
            className="mt-4 w-full border-white/10 bg-white/[0.045] text-white hover:bg-white/[0.08] hover:text-white"
            href="#contacto"
            variant="secondary"
          >
            Hablemos
          </Button>
        </div>
      ) : null}
    </header>
  );
}
