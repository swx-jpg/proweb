'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

type Props = {
  children: ReactNode;
  strength?: number;
  radius?: number;
  className?: string;
};

export default function Magnetic({
  children,
  strength = 0.35,
  radius = 110,
  className = 'inline-block',
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Only on hover-capable devices
    if (typeof window === 'undefined' || !window.matchMedia('(hover: hover)').matches)
      return;

    const el = ref.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if (dist < radius) {
        gsap.to(el, {
          x: dx * strength,
          y: dy * strength,
          duration: 0.5,
          ease: 'power3.out',
        });
        gsap.to(inner, {
          x: dx * strength * 0.4,
          y: dy * strength * 0.4,
          duration: 0.5,
          ease: 'power3.out',
        });
      } else {
        gsap.to([el, inner], {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.4)',
        });
      }
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [strength, radius]);

  return (
    <span ref={ref} className={className}>
      <span ref={innerRef} className="inline-block">
        {children}
      </span>
    </span>
  );
}
