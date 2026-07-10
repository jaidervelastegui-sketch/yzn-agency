"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { gsap } from "@/components/animations/gsapClient";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const steps = [
  {
    number: "01",
    title: "Descubrimiento",
    text: "Conocemos tu marca, objetivos y público para tomar decisiones con contexto.",
  },
  {
    number: "02",
    title: "Estrategia",
    text: "Definimos dirección creativa, posicionamiento y objetivos del proyecto.",
  },
  {
    number: "03",
    title: "Diseño",
    text: "Construimos una identidad visual sólida y coherente.",
  },
  {
    number: "04",
    title: "Producción",
    text: "Desarrollamos piezas audiovisuales, gráficas y digitales con alto nivel de detalle.",
  },
  {
    number: "05",
    title: "Entrega",
    text: "Presentamos el proyecto, realizamos ajustes finales y acompañamos su implementación.",
  },
];

export default function Process() {
  const sectionRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = sectionRef.current.querySelectorAll("[data-motion-item]");

      items.forEach((item) => {
        gsap.from(item, {
          y: 56,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 78%",
            once: true,
          },
        });
      });

      const titles = sectionRef.current.querySelectorAll("[data-motion-title]");
      gsap.from(titles, {
        y: 28,
        autoAlpha: 0,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 76%",
          once: true,
        },
      });

      const texts = sectionRef.current.querySelectorAll("[data-motion-text]");
      gsap.from(texts, {
        y: 20,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 74%",
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
      data-motion-section="process"
      id="proceso"
    >
      <div className="absolute left-1/2 top-1/3 -z-10 h-[32rem] w-[42rem] -translate-x-1/2 rounded-full bg-violet-500/9 blur-[130px]" />

      <Container>
        <SectionTitle
          eyebrow="Proceso"
          title="Nuestra metodología"
        >
          No improvisamos. Cada proyecto sigue un proceso diseñado para obtener resultados.
        </SectionTitle>

        <div className="relative" data-motion-group>
          <div className="absolute left-[2.25rem] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-violet-100/25 to-transparent lg:block" />

          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative grid gap-6 lg:grid-cols-[4rem_1px_1fr] lg:gap-x-10 lg:gap-y-0"
                data-motion-item={`process-${index + 1}`}
              >
                <div className="flex items-start lg:justify-end">
                  <span className="text-[4rem] sm:text-[6rem] font-black leading-none tracking-[-0.12em] text-white/[0.08] lg:text-[8rem]">
                    {step.number}
                  </span>
                </div>

                <div className="relative hidden flex-col items-center lg:flex">
                  <div className="relative z-10 mt-3 h-3 w-3 rounded-full border border-violet-100/50 bg-violet-100/20 shadow-[0_0_18px_rgba(168,85,247,0.35)]" />
                </div>

                <Card className="p-6 sm:p-8" data-motion-item={undefined}>
                  <div className="relative">
                    <h3
                      className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl"
                      data-motion-title
                    >
                      {step.title}
                    </h3>
                    <p
                      className="mt-4 max-w-2xl text-base leading-7 text-white/64"
                      data-motion-text
                    >
                      {step.text}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
