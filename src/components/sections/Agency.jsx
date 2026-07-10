"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { gsap } from "@/components/animations/gsapClient";
import Container from "@/components/ui/Container";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const pillars = [
  { number: "01", title: "Producción Audiovisual", accent: "via-fuchsia-400/60" },
  { number: "02", title: "Branding", accent: "via-violet-400/60" },
  { number: "03", title: "Contenido Digital", accent: "via-emerald-400/60" },
  { number: "04", title: "Dirección Creativa", accent: "via-sky-400/60" },
];

export default function Agency() {
  const sectionRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const textBlock = sectionRef.current.querySelector("[data-motion-group]");
      if (textBlock) {
        gsap.from(textBlock.querySelectorAll("[data-motion-text], [data-motion-title]"), {
          y: 30,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: textBlock,
            start: "top 76%",
            once: true,
          },
        });
      }

      const items = sectionRef.current.querySelectorAll("[data-motion-item]");
      gsap.from(items, {
        y: 40,
        autoAlpha: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });
    }, sectionRef);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 sm:py-40"
      data-motion-section="agency"
      id="agencia"
    >
      <div className="absolute right-[-18rem] top-1/4 -z-10 h-[34rem] w-[34rem] rounded-full bg-violet-500/9 blur-[150px]" />

      <Container>
        <div data-motion-group>
          <p
            className="text-[0.68rem] font-bold uppercase tracking-[0.5em] text-violet-100/68"
            data-motion-text
          >
            Agencia
          </p>

          <p
            className="mt-12 sm:mt-16 max-w-4xl text-3xl font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl"
            data-motion-title
          >
            No somos una agencia tradicional.
          </p>

          <p
            className="mt-8 sm:mt-10 max-w-3xl text-lg leading-8 text-white/68 sm:text-xl sm:leading-9"
            data-motion-text
          >
            Creamos identidades, contenido y experiencias digitales para marcas que quieren
            diferenciarse.
          </p>
        </div>

        <div className="relative mt-12 sm:mt-16">
          <div className="border-t border-white/[0.08]" />
          <p
            className="mt-8 sm:mt-10 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8"
            data-motion-text
          >
            No seguimos tendencias. Diseñamos sistemas visuales que permanecen.
          </p>
        </div>

        <div className="mt-20 sm:mt-32 h-px w-full bg-gradient-to-r from-violet-100/20 to-transparent" />

        <div className="mt-16 sm:mt-24 grid gap-x-16 gap-y-14 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="group"
              data-motion-item={`pillar-${pillar.number}`}
            >
              <span
                className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-white/20"
                aria-hidden="true"
              >
                {pillar.number}
              </span>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
                {pillar.title}
              </p>
              <div className={`mt-4 h-px w-16 bg-gradient-to-r from-white/60 ${pillar.accent} to-transparent transition-all duration-500 group-hover:w-24`} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
