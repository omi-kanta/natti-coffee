'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const LOGO_SIZE_PC = 80;
const LOGO_SIZE_SP = 52;

export default function ScrollWalker() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const getLogoSize = () =>
      window.innerWidth < 768 ? LOGO_SIZE_SP : LOGO_SIZE_PC;

    const applySize = () => {
      const size = getLogoSize();
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
    };

    applySize();

    let isWalking = false;
    let rotateDir = 1;
    let currentRotate = 0;
    let rafId = 0;
    let stopTimer: ReturnType<typeof setTimeout>;

    const onScroll = () => {
      const logoSize = getLogoSize();
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollRatio = maxScroll > 0 ? scrollY / maxScroll : 0;
      const topPosition = scrollRatio * (window.innerHeight - logoSize);

      el.style.top = `${topPosition}px`;

      isWalking = true;
      clearTimeout(stopTimer);
      stopTimer = setTimeout(() => {
        isWalking = false;
      }, 200);
    };

    const loop = () => {
      rafId = requestAnimationFrame(loop);

      if (isWalking) {
        currentRotate += rotateDir * 0.8;
        if (currentRotate >= 5) {
          currentRotate = 5;
          rotateDir = -1;
        } else if (currentRotate <= -5) {
          currentRotate = -5;
          rotateDir = 1;
        }
      } else {
        if (Math.abs(currentRotate) > 0.1) {
          currentRotate *= 0.85;
        } else {
          currentRotate = 0;
        }
      }

      el.style.transform = `rotate(${currentRotate}deg)`;
    };

    rafId = requestAnimationFrame(loop);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', applySize, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', applySize);
      clearTimeout(stopTimer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 20,
        width: LOGO_SIZE_PC,
        height: LOGO_SIZE_PC,
        zIndex: 100,
        pointerEvents: 'none',
        transformOrigin: 'center bottom',
      }}
    >
      <Image
        src="/natti_logo.png"
        alt="natti walking"
        width={LOGO_SIZE_PC}
        height={LOGO_SIZE_PC}
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
}
