'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';
import { faqs } from '@/lib/faq';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-24 md:py-40 px-5 md:px-10 bg-paper-soft border-y border-line"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal className="max-w-3xl mb-12 md:mb-16">
          <div
            data-reveal
            className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-5 md:mb-6"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
              <path d="M8.5 9 Q 8.5 6 12 6 Q 15.5 6 15.5 9 Q 15.5 11.5 12 12.5 L 12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="12" cy="18.5" r="1" fill="currentColor"/>
            </svg>
          </div>
          <p data-reveal className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted mb-4 md:mb-6">
            Perguntas frequentes
          </p>
          <h2
            data-reveal
            className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight"
          >
            As dúvidas que já respondemos{' '}
            <span className="text-muted">100 vezes.</span>
          </h2>
        </Reveal>

        <Reveal className="divide-y divide-line border-y border-line" stagger={0.05}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} data-reveal>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left"
                >
                  <span className="font-serif text-lg md:text-2xl text-ink">
                    {f.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border border-ink/20 flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-accent border-accent text-paper' : 'text-ink'
                    }`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                      <path d="M12 5 L12 19 M5 12 L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="pb-6 md:pb-7 pr-14 md:pr-16 text-base md:text-lg text-ink-soft leading-relaxed">
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>

        <p className="mt-10 text-sm text-muted">
          Ainda tens dúvidas?{' '}
          <a
            href="#contacto"
            className="text-ink underline underline-offset-4 hover:text-accent"
          >
            Marca uma chamada grátis
          </a>{' '}
          — 30 minutos para responder a tudo o que precisares.
        </p>
      </div>
    </section>
  );
}
