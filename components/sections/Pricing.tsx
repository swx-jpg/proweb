'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { packages } from '@/lib/pricing';

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from('[data-price-card]', {
        y: 80,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 1.1,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: el,
          start: 'top 70%',
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="precos"
      className="relative py-24 md:py-48 px-5 md:px-10 bg-paper-soft border-y border-line"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-14 md:mb-20">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-5 md:mb-6">
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
              <path d="M12 2 L22 12 L13 21 L2 10 L2 2 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <circle cx="7.5" cy="7.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted mb-4 md:mb-6">
            Pacotes
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Preço fechado.{' '}
            <span className="text-muted">Sem surpresas.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-ink-soft max-w-xl leading-relaxed">
            A mensalidade inclui alojamento, domínio, SSL e as alterações
            indicadas.{' '}
            <span className="text-ink font-medium">
              60 dias para experimentar.
            </span>{' '}
            Se não convencer os teus clientes, devolvemos tudo e ficas com o
            site. Zero penalização, zero burocracia.
          </p>
        </div>

        {/* Launch offer banner */}
        <div className="mb-10 md:mb-14 rounded-2xl bg-ink text-paper px-5 md:px-8 py-5 md:py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start md:items-center gap-4">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-paper flex-shrink-0 font-serif text-xl">
              !
            </span>
            <div>
              <div className="font-serif text-lg md:text-xl leading-tight">
                Oferta de lançamento
              </div>
              <p className="text-sm text-paper/70 mt-1 max-w-xl">
                Os primeiros 5 clientes de 2026 têm{' '}
                <span className="text-accent-soft font-medium">
                  20% off na instalação
                </span>{' '}
                e aparecem em destaque no nosso portfólio.{' '}
                <span className="text-paper">2 lugares</span> já preenchidos.
              </p>
            </div>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 bg-paper text-ink rounded-full px-5 py-3 text-sm font-medium hover:bg-accent hover:text-paper transition-colors flex-shrink-0"
          >
            Reservar lugar →
          </a>
        </div>

        <div ref={ref} className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg) => {
            const dark = !!pkg.featured;
            return (
              <article
                key={pkg.slug}
                data-price-card
                className={`relative flex flex-col rounded-3xl p-6 md:p-8 border transition-colors ${
                  dark
                    ? 'bg-ink text-paper border-ink'
                    : 'bg-paper border-line hover:border-ink/40'
                }`}
              >
                {dark && (
                  <span className="absolute -top-3 left-6 bg-accent text-paper text-[10px] uppercase tracking-[0.25em] px-3 py-1 rounded-full">
                    Recomendado
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="font-serif text-3xl md:text-4xl mb-2">
                    {pkg.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      dark ? 'text-paper/70' : 'text-ink-soft'
                    }`}
                  >
                    {pkg.tagline}
                  </p>
                </div>

                <div
                  className={`rounded-2xl p-5 mb-5 border ${
                    dark
                      ? 'bg-paper/5 border-paper/15'
                      : 'bg-paper-soft border-line'
                  }`}
                >
                  <div
                    className={`text-[10px] mb-3 flex items-center gap-2 ${
                      dark ? 'text-paper/50' : 'text-muted'
                    }`}
                  >
                    <span>Numa agência:</span>
                    <span className="line-through decoration-[1.5px]">
                      {pkg.agencyAnchor}
                    </span>
                  </div>
                  <div
                    className={`text-[10px] uppercase tracking-[0.3em] mb-2 ${
                      dark ? 'text-paper/60' : 'text-muted'
                    }`}
                  >
                    Instalação Proweb
                  </div>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <div className="font-serif text-4xl md:text-5xl tracking-tight">
                      {pkg.installation.noVat}
                    </div>
                    <div
                      className={`text-xs ${
                        dark ? 'text-paper/50' : 'text-muted'
                      }`}
                    >
                      s/ IVA · {pkg.installation.vat} c/ IVA
                    </div>
                  </div>

                  <div
                    className={`h-px my-4 ${
                      dark ? 'bg-paper/15' : 'bg-line'
                    }`}
                  />

                  <div
                    className={`text-[10px] uppercase tracking-[0.3em] mb-2 ${
                      dark ? 'text-paper/60' : 'text-muted'
                    }`}
                  >
                    Mensalidade
                  </div>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <div className="font-serif text-2xl md:text-3xl tracking-tight">
                      {pkg.monthly.noVat}
                    </div>
                    <div
                      className={`text-xs ${
                        dark ? 'text-paper/50' : 'text-muted'
                      }`}
                    >
                      s/ IVA · {pkg.monthly.vat} c/ IVA
                    </div>
                  </div>
                </div>

                <dl
                  className={`grid grid-cols-2 gap-3 mb-6 text-sm ${
                    dark ? 'text-paper/90' : 'text-ink-soft'
                  }`}
                >
                  <div>
                    <dt
                      className={`text-[10px] uppercase tracking-[0.25em] mb-1 ${
                        dark ? 'text-paper/50' : 'text-muted'
                      }`}
                    >
                      Entrega
                    </dt>
                    <dd className="font-serif text-lg">{pkg.delivery}</dd>
                  </div>
                  <div>
                    <dt
                      className={`text-[10px] uppercase tracking-[0.25em] mb-1 ${
                        dark ? 'text-paper/50' : 'text-muted'
                      }`}
                    >
                      Alterações
                    </dt>
                    <dd className="font-serif text-lg">
                      {pkg.changesPerMonth}/mês
                    </dd>
                  </div>
                </dl>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm leading-relaxed">
                      <span
                        className={`mt-[0.4em] inline-block h-[6px] w-[6px] rounded-full flex-shrink-0 ${
                          dark ? 'bg-accent-soft' : 'bg-accent'
                        }`}
                      />
                      <span className={dark ? 'text-paper/90' : 'text-ink-soft'}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`text-xs leading-relaxed mb-5 pb-5 border-b ${
                    dark
                      ? 'text-paper/60 border-paper/15'
                      : 'text-muted border-line'
                  }`}
                >
                  Sem instalação:{' '}
                  <span
                    className={`font-serif text-sm ${
                      dark ? 'text-paper' : 'text-ink'
                    }`}
                  >
                    {pkg.monthlyOnly.noVat}
                  </span>{' '}
                  s/ IVA · contrato 12 meses
                </div>

                <a
                  href="#contacto"
                  className={`btn-fill-up group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-colors ${
                    dark
                      ? 'bg-paper text-ink hover:text-paper'
                      : 'bg-ink text-paper'
                  }`}
                >
                  Começar agora
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-sm text-muted max-w-2xl">
          Precisas de algo específico? Qualquer pacote pode ser adaptado.{' '}
          <a
            href="#contacto"
            className="text-ink underline underline-offset-4 hover:text-accent"
          >
            Fala connosco
          </a>{' '}
          e desenhamos uma proposta à medida.
        </p>
      </div>
    </section>
  );
}
