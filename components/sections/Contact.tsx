'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';
import { contact } from '@/lib/pricing';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Hook up with Resend/Formspree/API route later.
    setSent(true);
  };

  return (
    <section
      id="contacto"
      className="relative py-24 md:py-48 px-5 md:px-10 bg-ink text-paper"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-3xl mb-12 md:mb-16">
          <div data-reveal className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/20 text-accent-soft mb-5 md:mb-6">
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
              <path d="M3 5 Q3 3.5 4.5 3.5 L19.5 3.5 Q21 3.5 21 5 L21 15 Q21 16.5 19.5 16.5 L13 16.5 L8 20.5 L8 16.5 L4.5 16.5 Q3 16.5 3 15 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
            </svg>
          </div>
          <p data-reveal className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-paper/50 mb-4 md:mb-6">
            Vamos a isto
          </p>
          <h2
            data-reveal
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight"
          >
            Tens 10 minutos?{' '}
            <span className="text-paper/50">Nós tratamos do resto.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">
          <Reveal className="space-y-6" stagger={0.1}>
            <a
              data-reveal
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-6 rounded-2xl border border-paper/15 p-5 md:p-6 hover:border-accent hover:bg-paper/5 transition-colors"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-paper/50 mb-2">
                  Resposta rápida
                </div>
                <div className="font-serif text-2xl">WhatsApp</div>
              </div>
              <span className="text-2xl transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              data-reveal
              href={contact.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-6 rounded-2xl border border-paper/15 p-5 md:p-6 hover:border-accent hover:bg-paper/5 transition-colors"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-paper/50 mb-2">
                  Marcar chamada
                </div>
                <div className="font-serif text-2xl">30 min · gratuito</div>
              </div>
              <span className="text-2xl transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              data-reveal
              href={`mailto:${contact.email}`}
              className="group flex items-center justify-between gap-6 rounded-2xl border border-paper/15 p-5 md:p-6 hover:border-accent hover:bg-paper/5 transition-colors"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-paper/50 mb-2">
                  Email directo
                </div>
                <div className="font-serif text-xl md:text-2xl break-all">
                  {contact.email}
                </div>
              </div>
              <span className="text-2xl transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </Reveal>

          <Reveal>
            <form
              data-reveal
              onSubmit={onSubmit}
              className="space-y-5 rounded-2xl bg-paper text-ink p-6 md:p-8"
            >
              <div className="font-serif text-2xl mb-2">
                Prefere escrever? Conte-nos sobre o projecto.
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  required
                  name="name"
                  placeholder="Nome"
                  className="col-span-2 sm:col-span-1 bg-paper-soft border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-ink"
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="col-span-2 sm:col-span-1 bg-paper-soft border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-ink"
                />
              </div>
              <select
                name="pacote"
                defaultValue=""
                className="w-full bg-paper-soft border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-ink"
              >
                <option value="" disabled>
                  Pacote de interesse
                </option>
                <option>Landing Page</option>
                <option>Website Institucional</option>
                <option>Website com Loja</option>
                <option>Ainda não sei</option>
              </select>
              <textarea
                name="message"
                rows={4}
                placeholder="Conta-nos sobre o teu projecto…"
                className="w-full bg-paper-soft border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-ink resize-none"
              />
              <button
                type="submit"
                disabled={sent}
                className="btn-fill-up w-full inline-flex items-center justify-center gap-2 bg-ink text-paper rounded-full px-6 py-4 text-sm font-medium transition-colors disabled:opacity-60"
              >
                {sent ? 'Obrigado — respondemos em 24h' : 'Enviar pedido'}
                {!sent && <span>→</span>}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
