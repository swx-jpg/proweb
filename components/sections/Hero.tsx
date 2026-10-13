'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import BlurText from '@/components/reactbits/BlurText/BlurText';
import Magnetic from '@/components/Magnetic';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
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
          Estúdio web · Portugal
        </p>

        <h1 className="font-serif text-[clamp(2.25rem,8vw,8rem)] leading-[0.95] tracking-tight text-ink max-w-5xl">
          <BlurText
            text="Websites que não parecem feitos num template."
            animateBy="words"
            direction="top"
            delay={90}
            stepDuration={0.4}
          />
        </h1>

        <p
          data-hero-sub
          className="mt-8 md:mt-10 max-w-xl text-base md:text-xl text-ink-soft leading-relaxed"
        >
          Desenhamos e desenvolvemos sites profissionais para marcas que querem
          ser levadas a sério. Design editorial, animações cuidadas, entregas
          rápidas.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Magnetic strength={0.3} radius={120}>
            <a
              data-hero-cta
              href="#precos"
              className="btn-fill-up group inline-flex items-center justify-center gap-2 bg-ink text-paper rounded-full px-7 py-4 text-base font-medium transition-colors"
            >
              Ver pacotes
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
              Falar connosco
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
        <div className="hidden md:block">(est. 2025)</div>
      </div>
    </section>
  );
}
