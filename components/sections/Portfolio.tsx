'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Swap `image` for real screenshots in /public (e.g. /work/studio-mares.jpg).
const projects = [
  {
    name: 'Studio Marés',
    tag: 'Estúdio criativo',
    year: '2025',
    image: 'https://picsum.photos/seed/studio-mares/1200/1500',
  },
  {
    name: 'Casa Oliveira',
    tag: 'Restaurante',
    year: '2025',
    image: 'https://picsum.photos/seed/casa-oliveira/1200/1500',
  },
  {
    name: 'Nord Atelier',
    tag: 'Moda',
    year: '2024',
    image: 'https://picsum.photos/seed/nord-atelier/1200/1500',
  },
  {
    name: 'Fermenta',
    tag: 'Padaria artesanal',
    year: '2024',
    image: 'https://picsum.photos/seed/fermenta/1200/1500',
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop/tablet: vertical scroll → horizontal pin.
      mm.add('(min-width: 768px)', () => {
        const getDistance = () =>
          Math.max(0, track.scrollWidth - window.innerWidth);

        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => '+=' + getDistance(),
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Scroll-velocity skew — cards tilt based on how fast you scroll.
        const skewSetter = gsap.quickSetter('[data-work-card]', 'skewY', 'deg');
        const clamp = gsap.utils.clamp(-6, 6);
        const velST = ScrollTrigger.create({
          onUpdate: (self) => {
            const skew = clamp(self.getVelocity() / 400);
            gsap.to(
              { s: skew },
              {
                s: 0,
                duration: 0.7,
                ease: 'power3.out',
                overwrite: true,
                onUpdate: function () {
                  skewSetter(this.targets()[0].s);
                },
              }
            );
          },
        });

        const imgs = track.querySelectorAll<HTMLImageElement>('img');
        const onLoad = () => ScrollTrigger.refresh();
        imgs.forEach((img) => {
          if (!img.complete) {
            img.addEventListener('load', onLoad, { once: true });
            img.addEventListener('error', onLoad, { once: true });
          }
        });

        return () => {
          imgs.forEach((img) => {
            img.removeEventListener('load', onLoad);
            img.removeEventListener('error', onLoad);
          });
          velST.kill();
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      // Mobile: swipe-native horizontal scroll + fade-in on enter.
      mm.add('(max-width: 767px)', () => {
        gsap.from('[data-work-card]', {
          opacity: 0,
          y: 40,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            once: true,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="trabalhos"
      className="relative md:h-screen md:overflow-hidden md:flex md:flex-col py-20 md:py-0"
    >
      <div className="pt-4 md:pt-28 pb-8 md:pb-8 px-5 md:px-10 md:shrink-0">
        <div className="max-w-7xl mx-auto flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted mb-3 md:mb-4">
              Projectos conceituais
            </p>
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight max-w-xl">
              Exemplos do que fazemos.
            </h2>
            <p className="hidden md:block mt-4 text-sm text-muted max-w-xl leading-relaxed">
              Estes são conceitos desenhados pela nossa equipa para demonstrar
              o nosso estilo. Em breve, serão substituídos pelos primeiros
              projectos de clientes reais.
            </p>
          </div>
          <p className="hidden md:block text-sm text-muted max-w-xs">
            Continua a fazer scroll para ver todos.
          </p>
          <p className="md:hidden text-sm text-muted">
            Arrasta para o lado.
          </p>
        </div>
      </div>

      <div className="md:flex-1 md:min-h-0 md:flex md:items-center overflow-x-auto md:overflow-hidden snap-x snap-mandatory md:snap-none no-scrollbar">
        <div
          ref={trackRef}
          className="flex gap-5 md:gap-8 pl-5 md:pl-10 pr-[15vw] md:pr-[20vw] will-change-transform"
          style={{ width: 'max-content' }}
        >
          {projects.map((p) => (
            <article
              key={p.name}
              data-work-card
              className="group relative flex-shrink-0 snap-start w-[78vw] sm:w-[55vw] md:w-auto h-[62vh] md:h-full md:max-h-[70vh] md:aspect-[4/5] aspect-[4/5] rounded-3xl overflow-hidden bg-ink/80"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/30 to-black/70" />

              {/* Conceito badge */}
              <span className="absolute top-4 right-4 md:top-6 md:right-6 bg-paper text-ink text-[9px] md:text-[10px] uppercase tracking-[0.25em] px-2.5 py-1 rounded-full z-20">
                Conceito
              </span>

              <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-10 text-paper">
                <div className="flex items-start justify-between text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-80">
                  <span>{p.tag}</span>
                  <span>{p.year}</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-5xl leading-tight">
                    {p.name}
                  </h3>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                    Ver conceito <span>→</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
