"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const velocity = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMouseMove);

    const loop = () => {
      const dx = pos.current.x - current.current.x;
      const dy = pos.current.y - current.current.y;

      current.current.x += dx * 0.18;
      current.current.y += dy * 0.18;

      velocity.current.x = dx;
      velocity.current.y = dy;

      const speed = Math.sqrt(dx * dx + dy * dy);
      const tilt = Math.atan2(dy, dx) * (180 / Math.PI);
      const scale = 1 + Math.min(speed * 0.015, 0.5);
      const rotate = speed > 2 ? tilt * 0.3 : 0;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%) rotate(${rotate}deg) scale(${scale})`;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
      style={{ transform: "translate(-100px, -100px) translate(-50%, -50%)" }}
    >
      <Image
        src="/natti_logo.png"
        alt="cursor"
        width={48}
        height={48}
        className="w-12 h-12 object-contain"
        priority
      />
    </div>
  );
}
