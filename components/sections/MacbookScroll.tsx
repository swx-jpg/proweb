'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MacbookScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const macRef = useRef<HTMLDivElement>(null);
  const lidCoverRef = useRef<HTMLDivElement>(null);
  const macScreenRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      const finalScale = isMobile ? 4 : 5.5;

      // Initial state
      gsap.set(macRef.current, {
        xPercent: -45,
        opacity: 0,
        scale: 0.9,
        transformOrigin: '50% 46%', // slightly above center → zoom focuses on screen
      });
      gsap.set(phoneRef.current, {
        xPercent: 45,
        opacity: 0,
        scale: 0.9,
        transformOrigin: 'center center',
      });
      gsap.set(lidCoverRef.current, { yPercent: 0 });
      gsap.set(macScreenRef.current, {
        opacity: 0,
        filter: 'brightness(0.4)',
      });
      gsap.set(revealRef.current, { opacity: 0 });
      gsap.set(logoRef.current, {
        opacity: 0,
        scale: 0.9,
        filter: 'blur(14px)',
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=240%', // tighter — less dwell after the logo lands
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // ─── Phase A (0 – 0.18): devices fly in, title fades ───
      tl.to(titleRef.current, { opacity: 0, y: -40, duration: 0.1 }, 0)
        .to(
          [macRef.current, phoneRef.current],
          {
            xPercent: 0,
            opacity: 1,
            scale: 1,
            duration: 0.18,
            ease: 'expo.out',
          },
          0
        )

        // ─── Breathing room — viewer takes in the composition ───
        .to({}, { duration: 0.08 })

        // ─── Phase B (0.26 – 0.46): lid cover slides UP, revealing screen ───
        .to(
          lidCoverRef.current,
          {
            yPercent: -100,
            duration: 0.2,
            ease: 'power3.inOut',
          },
          0.26
        )
        // Screen wakes up during the uncover
        .to(
          macScreenRef.current,
          {
            opacity: 1,
            filter: 'brightness(1)',
            duration: 0.15,
          },
          0.33
        )

        // ─── Dwell (0.46 – 0.58): both devices visible with site live ───
        .to({}, { duration: 0.12 })

        // ─── Phase C: Mac zooms in. iPhone stays put but fades under the
        //    growing Mac (Mac is layered above it). ───
        .to(
          macRef.current,
          {
            scale: finalScale,
            duration: 0.24,
            ease: 'power3.in', // accelerates toward end — "diving" feel
          },
          0.6
        )
        // iPhone fades once the growing Mac starts to cover it (scale ~1.5×).
        .to(
          phoneRef.current,
          { opacity: 0, duration: 0.12, ease: 'none' },
          0.7
        )
        // Frame + chrome fade near zoom peak (they're off-screen anyway)
        // Content inside the screen fades BEFORE the zoom peaks, so we never
        // see the mini-site enormously scaled — just paper filling the view.
        .to('[data-mac-content]', { opacity: 0, duration: 0.18 }, 0.65)
        .to('[data-mac-frame]', { opacity: 0, duration: 0.2 }, 0.72)
        .to('[data-mac-chrome]', { opacity: 0, duration: 0.18 }, 0.72)

        // ─── Phase D (0.82 – 1): paper blend + logo lands ───
        .to(
          revealRef.current,
          { opacity: 1, duration: 0.14, ease: 'power2.in' },
          0.78
        )
        .to(
          logoRef.current,
          {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.18,
            ease: 'expo.out',
          },
          0.82
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden px-5 md:px-10 bg-paper"
    >
      <div
        ref={titleRef}
        className="absolute top-20 md:top-28 inset-x-0 text-center px-5 md:px-6 z-10"
      >
        <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/10 text-accent mb-4 md:mb-5">
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 md:w-7 md:h-7">
            <rect x="3" y="4" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M2 19 L22 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M10 19 L14 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
          </svg>
        </div>
        <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted mb-3 md:mb-4">
          O teu site. Qualquer ecrã.
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl leading-tight max-w-2xl mx-auto">
          Perfeito em desktop.{' '}
          <span className="text-muted">Perfeito em bolso.</span>
        </h2>
      </div>

      <div className="w-full max-w-6xl flex items-center justify-center gap-4 md:gap-14 pt-8">
        {/* MACBOOK — z-10 so it stays in front of the phone as it grows */}
        <div
          ref={macRef}
          className="w-[62%] md:w-[64%] relative z-10 will-change-transform"
        >
          {/* LID — fixed aspect, contains screen + cover */}
          <div className="relative w-full aspect-[16/10] rounded-[16px] overflow-hidden bg-neutral-900 shadow-[0_40px_80px_-20px_rgba(20,18,16,0.4)]">
            {/* Bezel padding (gives screen its inset frame) */}
            <div className="absolute inset-[8px] md:inset-[10px] rounded-[8px] md:rounded-[10px] overflow-hidden">
              {/* Screen content */}
              <div
                ref={macScreenRef}
                className="relative w-full h-full bg-paper overflow-hidden"
              >
                <div data-mac-content className="absolute inset-0">
                  <MacScreenContent />
                </div>
              </div>
            </div>

            {/* LID COVER — slides up to "open" the laptop */}
            <div
              ref={lidCoverRef}
              data-mac-frame
              className="absolute inset-0 z-20 will-change-transform overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, #3a3632 0%, #2a2724 55%, #1c1a18 100%)',
              }}
            >
              {/* Brushed metal highlight */}
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  background:
                    'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.18), transparent 55%)',
                }}
              />
              {/* Proweb branding */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="font-serif text-[clamp(2.2rem,8vw,7rem)] leading-none tracking-tight text-paper/95 flex items-baseline">
                  Proweb<span className="text-accent">.</span>
                </div>
              </div>
              {/* Subtle seam at the "bottom" of the lid */}
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-black/30" />
            </div>
          </div>

          {/* BASE */}
          <div
            data-mac-frame
            className="relative w-[102%] left-[-1%] -mt-[2px]"
          >
            <div className="h-[6px] bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-700 rounded-t-[2px]" />
            <div
              className="h-[20px] md:h-[26px] rounded-b-[14px] bg-gradient-to-b from-neutral-700 via-neutral-500 to-neutral-700 shadow-[0_30px_40px_-15px_rgba(0,0,0,0.45)] relative overflow-hidden"
              style={{ transform: 'perspective(600px) rotateX(2deg)' }}
            >
              <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-[22%] h-[6px] rounded-sm bg-neutral-800/40" />
            </div>
          </div>
        </div>

        {/* IPHONE — behind the Mac during the zoom (Mac covers it as it grows) */}
        <div
          ref={phoneRef}
          data-mac-frame
          className="w-[24%] md:w-[17%] max-w-[200px] relative z-0 will-change-transform"
        >
          <div className="relative w-full aspect-[9/19] rounded-[26px] bg-neutral-900 p-[6px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)]">
            <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[40%] h-4 md:h-5 bg-neutral-900 rounded-b-xl z-10" />
            <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-paper">
              <PhoneScreenContent />
            </div>
          </div>
        </div>
      </div>

      {/* Final blend overlay */}
      <div
        ref={revealRef}
        className="pointer-events-none absolute inset-0 bg-paper z-30"
      />

      {/* Logo lands in the void */}
      <div
        ref={logoRef}
        className="pointer-events-none absolute inset-0 z-40 flex flex-col items-center justify-center text-center px-6"
      >
        <div className="font-serif text-[clamp(3.5rem,13vw,11rem)] leading-none tracking-tight text-ink flex items-baseline">
          Proweb<span className="text-accent">.</span>
        </div>
        <div className="mt-5 md:mt-7 text-[10px] md:text-xs uppercase tracking-[0.5em] text-muted">
          Estúdio web · Portugal
        </div>
      </div>
    </section>
  );
}

function MacScreenContent() {
  return (
    <div className="h-full w-full flex flex-col bg-paper text-ink">
      <div
        data-mac-chrome
        className="flex items-center gap-1.5 px-3 py-2 border-b border-line bg-paper-soft"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <div className="mx-auto h-5 w-[46%] rounded-md bg-paper border border-line text-[9px] text-muted flex items-center justify-center">
          proweb.pt
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden">
        <div
          data-mac-chrome
          className="flex items-center justify-between px-6 py-3 text-[10px]"
        >
          <div className="font-serif tracking-tight">
            Proweb<span className="text-accent">.</span>
          </div>
          <div className="flex gap-4 text-muted">
            <span>Serviços</span>
            <span>Preços</span>
            <span>Trabalhos</span>
          </div>
          <div className="bg-ink text-paper rounded-full px-2 py-0.5">
            Orçamento
          </div>
        </div>

        <div className="px-6 md:px-12 pt-5 md:pt-10">
          <div className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-muted mb-3">
            Estúdio web · Portugal
          </div>
          <div className="font-serif text-[clamp(1rem,3.5vw,2.6rem)] leading-[0.95] max-w-[85%]">
            Websites que{' '}
            <span className="relative italic text-accent inline-block">
              não
              <svg
                aria-hidden="true"
                viewBox="0 0 120 70"
                preserveAspectRatio="none"
                className="absolute left-[-23%] right-[-23%] top-[-35%] bottom-[-35%] w-[146%] h-[170%] pointer-events-none overflow-visible"
              >
                <path
                  d="M60,6 C 96,6 112,20 112,36 C 112,58 86,66 60,66 C 32,66 8,56 8,36 C 8,16 32,8 60,10"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{' '}
            parecem feitos num template.
          </div>
          <div className="mt-4 flex gap-2">
            <div className="bg-ink text-paper rounded-full px-3 py-1.5 text-[10px]">
              Ver pacotes →
            </div>
            <div className="border border-ink/20 rounded-full px-3 py-1.5 text-[10px]">
              Falar connosco
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-6 right-6 md:left-8 md:right-8 grid grid-cols-3 gap-2">
          {[
            { l: 'Landing', p: '349€', dark: false },
            { l: 'Institucional', p: '649€', dark: true },
            { l: 'Loja', p: '1190€', dark: false },
          ].map((c) => (
            <div
              key={c.l}
              className={`relative rounded-md p-2 md:p-3 border ${
                c.dark
                  ? 'bg-ink text-paper border-ink'
                  : 'bg-paper-soft text-ink border-line'
              }`}
            >
              <div className="font-serif text-[10px] md:text-xs">{c.l}</div>
              <div className="font-serif text-sm md:text-lg mt-1">{c.p}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PhoneScreenContent() {
  return (
    <div className="h-full w-full flex flex-col bg-paper text-ink">
      <div className="flex items-center justify-between px-3 py-2 text-[7px]">
        <div className="font-serif tracking-tight">
          Proweb<span className="text-accent">.</span>
        </div>
        <div className="w-5 h-[1px] bg-ink" />
      </div>
      <div className="flex-1 px-3 pt-3">
        <div className="text-[6px] uppercase tracking-[0.3em] text-muted mb-1.5">
          Estúdio web
        </div>
        <div className="font-serif text-sm leading-[0.95]">
          Websites que não parecem feitos num template.
        </div>
        <div className="mt-3 flex flex-col gap-1.5">
          <div className="bg-ink text-paper rounded-full px-2 py-1 text-[7px] text-center">
            Ver pacotes →
          </div>
          <div className="border border-ink/20 rounded-full px-2 py-1 text-[7px] text-center">
            Falar connosco
          </div>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-1.5">
          {[
            { l: 'Landing', p: '349€', dark: false },
            { l: 'Institucional', p: '649€', dark: true },
            { l: 'Loja', p: '1190€', dark: false },
          ].map((c) => (
            <div
              key={c.l}
              className={`rounded-md p-1.5 border ${
                c.dark
                  ? 'bg-ink text-paper border-ink'
                  : 'bg-paper-soft text-ink border-line'
              }`}
            >
              <div className="font-serif text-[7px]">{c.l}</div>
              <div className="font-serif text-xs mt-0.5">{c.p}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
