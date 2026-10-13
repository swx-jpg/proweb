'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const LETTERS = ['P', 'r', 'o', 'w', 'e', 'b'];

export default function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Only play once per session
    if (
      typeof window !== 'undefined' &&
      sessionStorage.getItem('intro-played') === '1'
    ) {
      setVisible(false);
      return;
    }

    const el = ref.current;
    if (!el) return;

    document.body.style.overflow = 'hidden';

    const start = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = '';
          sessionStorage.setItem('intro-played', '1');
          setVisible(false);
        },
      });

      // Letters rise into view, staggered.
      tl.to('[data-intro-letter]', {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power4.out',
        stagger: 0.07,
      })
        // Tag fades in just after
        .to(
          '[data-intro-tag]',
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
          '-=0.4'
        )
        // Hold
        .to({}, { duration: 0.9 })
        // Overlay slides up as one block, taking the letters with it
        .to(el, {
          yPercent: -100,
          duration: 1,
          ease: 'expo.inOut',
        });
    };

    // Wait for fonts so letters don't swap mid-reveal
    if (document.fonts?.ready) {
      document.fonts.ready.then(start);
    } else {
      start();
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 z-[100] bg-ink text-paper flex flex-col items-center justify-center overflow-hidden"
    >
      <div
        data-intro-tag
        className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-paper/50 mb-6 md:mb-8"
        style={{ opacity: 0, transform: 'translateY(8px)' }}
      >
        Estúdio web · Portugal
      </div>
      <div className="font-serif text-[clamp(4.5rem,18vw,15rem)] leading-none tracking-tight flex items-baseline overflow-hidden">
        {LETTERS.map((l, i) => (
          <span
            key={i}
            data-intro-letter
            className="inline-block"
            style={{
              transform: 'translateY(110%)',
              opacity: 0,
              willChange: 'transform',
            }}
          >
            {l}
          </span>
        ))}
        <span
          data-intro-letter
          className="text-accent inline-block"
          style={{
            transform: 'translateY(110%)',
            opacity: 0,
            willChange: 'transform',
          }}
        >
          .
        </span>
      </div>
    </div>
  );
}
