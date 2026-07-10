"use client";

import gsap from "gsap";

export { gsap };

export function createGsapContext(scope, setup) {
  return gsap.context(() => setup(gsap), scope);
}
