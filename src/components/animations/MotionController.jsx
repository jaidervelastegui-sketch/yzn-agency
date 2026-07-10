"use client";

import { useEffect, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { gsap } from "./gsapClient";
import { motionDefaults } from "./motionConfig";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function MotionController() {
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const allMotionElements = document.querySelectorAll(
      "[data-motion-text], [data-motion-title], [data-motion-visual], [data-motion-button], [data-motion-item], [data-motion-group], [data-motion-section]",
    );

    const context = gsap.context(() => {
      const navbar = document.querySelector('[data-motion-section="navbar"]');
      const hero = document.querySelector('[data-motion-section="hero"]');
      const services = document.querySelector('[data-motion-section="services"]');
      const portfolio = document.querySelector('[data-motion-section="portfolio"]');
      const testimonials = document.querySelector('[data-motion-section="testimonials"]');
      const contact = document.querySelector('[data-motion-section="contact"]');

      if (navbar) {
        gsap.from(navbar, {
          ...motionDefaults,
          y: -28,
          autoAlpha: 0,
          duration: 0.85,
          scale: 0.985,
        });
      }

      if (hero) {
        const heroElements = hero.querySelectorAll(
          "[data-motion-text], [data-motion-title], [data-motion-button], [data-motion-visual]",
        );

        gsap.from(heroElements, {
          ...motionDefaults,
          y: 34,
          autoAlpha: 0,
          scale: 0.985,
          duration: 1.05,
          stagger: 0.09,
          delay: 0.1,
        });
      }

      if (services) {
        const serviceCards = services.querySelectorAll('[data-motion-item^="service-"]');

        serviceCards.forEach((card) => {
          gsap.from(card, {
            ...motionDefaults,
            y: 56,
            autoAlpha: 0,
            scale: 0.98,
            scrollTrigger: {
              trigger: card,
              start: "top 78%",
              once: true,
            },
          });
        });
      }

      if (portfolio) {
        const projects = portfolio.querySelectorAll('[data-motion-item^="project-"]');

        projects.forEach((project) => {
          gsap.from(project, {
            ...motionDefaults,
            y: 70,
            autoAlpha: 0,
            duration: 1,
            scrollTrigger: {
              trigger: project,
              start: "top 78%",
              once: true,
            },
          });
        });
      }

      [testimonials, contact].forEach((section) => {
        if (!section) {
          return;
        }

        gsap.from(section.querySelectorAll("[data-motion-group], [data-motion-item]"), {
          ...motionDefaults,
          autoAlpha: 0,
          duration: 0.95,
          stagger: 0.08,
          scrollTrigger: {
            trigger: section,
            start: "top 76%",
            once: true,
          },
        });
      });
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());

    const safetyTimer = setTimeout(() => {
      gsap.set(allMotionElements, {
        opacity: 1,
        visibility: "visible",
        clearProps: "transform",
      });
      ScrollTrigger.refresh();
    }, 3000);

    return () => {
      context.revert();
      clearTimeout(safetyTimer);
    };
  }, []);

  return null;
}
