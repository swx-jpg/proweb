'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const POINTS = [
  '60 dias de garantia',
  'Entrega em 3 dias',
  'Sem fidelização',
  'Suporte em Portugal',
];

export default function Guarantees() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const distance = () =>
        Math.max(0, track.scrollWidth - window.innerWidth + 200);

      gsap.fromTo(
        track,
        { x: 150 },
        {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative border-y border-line bg-paper-soft py-10 md:py-14 overflow-hidden"
    >
      <div
        ref={trackRef}
        className="flex items-center gap-10 md:gap-16 whitespace-nowrap will-change-transform"
        style={{ width: 'max-content' }}
      >
        {[0, 1].map((loop) => (
          <div
            key={loop}
            className="flex items-center gap-10 md:gap-16 flex-shrink-0"
          >
            {POINTS.map((p) => (
              <div
                key={`${loop}-${p}`}
                className="flex items-center gap-3 md:gap-4"
              >
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-full bg-accent/15 text-accent flex-shrink-0"
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="w-4 h-4 md:w-5 md:h-5"
                  >
                    <path
                      d="M4 10l4 4 8-8"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-serif text-2xl md:text-4xl text-ink whitespace-nowrap">
                  {p}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
