'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Magnetic from '@/components/Magnetic';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const circleRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Word reveal: duration 1, stagger 0.08, delay 0.1 → last word finishes ~1.58s
      gsap.from('[data-hero-word]', {
        y: 60,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 1,
        delay: 0.1,
        stagger: 0.08,
        ease: 'power3.out',
      });

      // Circle around "não" draws from one end to the other,
      // starting right as the title finishes de-blurring.
      if (circleRef.current) {
        gsap.fromTo(
          circleRef.current,
          { strokeDashoffset: 100 },
          {
            strokeDashoffset: 0,
            duration: 1.1,
            delay: 1,
            ease: 'power2.out',
          }
        );
      }
      gsap.from('[data-hero-sub]', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1.3,
        ease: 'power3.out',
      });
      gsap.from('[data-hero-cta]', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1.6,
        stagger: 0.1,
        ease: 'power3.out',
      });
      gsap.from('[data-hero-meta]', {
        opacity: 0,
        duration: 1.4,
        delay: 2,
      });
      gsap.to('[data-hero-scroll]', {
        y: 10,
        duration: 1.4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen flex flex-col justify-between pt-28 md:pt-32 pb-8 md:pb-10 px-5 md:px-10 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-accent/25 blur-3xl animate-blob-1 top-[5%] left-[10%]" />
        <div className="absolute w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-accent-soft/20 blur-3xl animate-blob-2 top-[30%] right-[-5%]" />
        <div className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-[#e8c4a0]/25 blur-3xl animate-blob-3 bottom-[-15%] left-[-10%]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        <p
          data-hero-meta
          className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted mb-6 md:mb-8"
        >
          Estúdio web em Portugal · Desde 2026
        </p>

        <h1 className="font-serif text-[clamp(2.25rem,8vw,8rem)] leading-[0.95] tracking-tight text-ink max-w-5xl">
          <span data-hero-word className="inline-block will-change-transform">
            Websites
          </span>{' '}
          <span data-hero-word className="inline-block will-change-transform">
            que
          </span>{' '}
          <span
            data-hero-word
            className="inline-block relative italic text-accent will-change-transform"
          >
            não
            <svg
              aria-hidden="true"
              viewBox="0 0 120 70"
              preserveAspectRatio="none"
              className="absolute left-[-23%] right-[-23%] top-[-35%] bottom-[-35%] w-[146%] h-[170%] pointer-events-none overflow-visible"
            >
              <path
                ref={circleRef}
                pathLength={100}
                d="M60,6 C 96,6 112,20 112,36 C 112,58 86,66 60,66 C 32,66 8,56 8,36 C 8,16 32,8 60,10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                style={{ strokeDasharray: 100, strokeDashoffset: 100 }}
              />
            </svg>
          </span>{' '}
          <span data-hero-word className="inline-block will-change-transform">
            parecem
          </span>{' '}
          <span data-hero-word className="inline-block will-change-transform">
            feitos
          </span>{' '}
          <span data-hero-word className="inline-block will-change-transform">
            num
          </span>{' '}
          <span data-hero-word className="inline-block will-change-transform">
            template.
          </span>
        </h1>

        <p
          data-hero-sub
          className="mt-8 md:mt-10 max-w-xl text-base md:text-xl text-ink-soft leading-relaxed"
        >
          Clientes que entram no teu site e dizem{' '}
          <span className="text-ink font-medium">
            "estes aqui são a sério"
          </span>
          . Entrega em 3 a 14 dias, 60 dias de garantia, suporte em português.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Magnetic strength={0.3} radius={120}>
            <a
              data-hero-cta
              href="#precos"
              className="btn-fill-up group inline-flex items-center justify-center gap-2 bg-ink text-paper rounded-full px-7 py-4 text-base font-medium transition-colors"
            >
              Ver pacotes · desde 349€
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </Magnetic>
          <Magnetic strength={0.3} radius={120}>
            <a
              data-hero-cta
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 border border-ink/40 rounded-full px-7 py-4 text-base font-medium hover:border-ink hover:bg-ink/5 transition-colors"
            >
              Marcar chamada grátis
            </a>
          </Magnetic>
        </div>
      </div>

      <div
        data-hero-meta
        className="relative z-10 max-w-7xl mx-auto w-full flex items-end justify-between text-xs uppercase tracking-[0.25em] text-muted"
      >
        <div data-hero-scroll className="flex items-center gap-3">
          <span className="h-px w-10 bg-ink/40" />
          scroll
        </div>
        <div className="hidden md:block">(est. 2026)</div>
      </div>
    </section>
  );
}
