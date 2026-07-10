"use client";

import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
  const [barReady, setBarReady] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setBarReady(true));
    const exitTimer = setTimeout(() => setExiting(true), 1000);
    const doneTimer = setTimeout(() => {
      setHidden(true);
      onFinish?.();
    }, 1500);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onFinish]);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030303]"
      style={{
        opacity: exiting ? 0 : 1,
        transition: "opacity 0.5s ease",
      }}
    >
      <style>{`
        @keyframes loaderBar {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
      <span
        className="text-[clamp(3rem,10vw,6rem)] font-black tracking-[-0.1em] text-white"
        style={{
          opacity: exiting ? 0 : 1,
          transform: exiting ? "scale(0.96)" : "scale(1)",
          transition: "opacity 0.45s ease, transform 0.45s ease",
        }}
      >
        YZN
      </span>
      <div className="relative mt-8 h-[1px] w-48 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full w-full origin-left rounded-full bg-white"
          style={{
            animation: barReady ? "loaderBar 0.85s ease-out forwards" : "none",
          }}
        />
      </div>
    </div>
  );
}
