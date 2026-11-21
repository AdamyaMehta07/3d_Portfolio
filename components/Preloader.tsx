"use client";

import { useEffect, useState } from "react";

const TICK = 900; // ms per number

export default function Preloader() {
  const [n, setN] = useState(3);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }
    // n === 0 is the cut: short flicker, then remove
    const t = setTimeout(
      () => (n > 0 ? setN(n - 1) : setDone(true)),
      n > 0 ? TICK : 280
    );
    return () => clearTimeout(t);
  }, [n]);

  // no scrolling while the leader plays
  useEffect(() => {
    document.documentElement.style.overflow = done ? "" : "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [done]);

  if (done) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[45] bg-ink ${n === 0 ? "leader-cut" : ""}`}
    >
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative size-[min(70vw,70vh)]">
          {/* sweep: one full turn per number */}
          {n > 0 && (
            <div
              key={n}
              className="leader-sweep absolute inset-0 rounded-full"
              style={{ animationDuration: `${TICK}ms` }}
            />
          )}

          {/* rings + crosshair */}
          <div className="absolute inset-0 rounded-full border border-lime/70" />
          <div className="absolute inset-[18%] rounded-full border border-lime/30" />
          <div className="absolute left-0 right-0 top-1/2 h-px bg-lime/50" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-lime/50" />

          {/* number */}
          <div className="absolute inset-0 grid place-items-center">
            <span
              key={n}
              className="leader-num font-display text-[28vmin] leading-none text-lime"
            >
              {n > 0 ? n : ""}
            </span>
          </div>
        </div>
      </div>

      <p className="absolute left-8 top-[calc(var(--bar)+1.5rem)] text-[10px] uppercase tracking-[0.25em] text-bone/60">
        Reel 01
      </p>
      <p className="absolute right-8 top-[calc(var(--bar)+1.5rem)] text-[10px] uppercase tracking-[0.25em] text-bone/60">
        Picture start
      </p>
      <p className="absolute bottom-[calc(var(--bar)+1.5rem)] left-8 text-[10px] uppercase tracking-[0.25em] text-bone/60">
        00:00:0{3 - Math.min(n, 3)}:00
      </p>
    </div>
  );
}