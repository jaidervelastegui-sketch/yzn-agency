"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { gsap } from "./gsapClient";

export default function LenisController() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      wrapper: window,
      content: document.documentElement,
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    const updateScrollTrigger = () => ScrollTrigger.update();
    const raf = (time) => lenis.raf(time * 1000);

    lenis.on("scroll", updateScrollTrigger);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      lenis.off("scroll", updateScrollTrigger);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
