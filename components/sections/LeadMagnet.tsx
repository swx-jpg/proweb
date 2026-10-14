'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Hook up with Resend / Mailchimp / API route later.
    setSent(true);
  };

  return (
    <section className="relative py-20 md:py-28 px-5 md:px-10">
      <div className="max-w-5xl mx-auto">
        <Reveal className="rounded-3xl border border-line bg-paper-soft p-8 md:p-12 relative overflow-hidden">
          {/* decorative blob */}
          <div className="pointer-events-none absolute -right-20 -top-20 w-64 h-64 rounded-full bg-accent/15 blur-3xl" />
          <div
            data-reveal
            className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/15 text-accent mb-5"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <rect x="4" y="3" width="16" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 8 L16 8 M8 12 L16 12 M8 16 L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          <div data-reveal className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted mb-3">
            Grátis · PDF
          </div>
          <h2
            data-reveal
            className="font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight max-w-3xl"
          >
            7 erros que fazem o teu site perder clientes.
          </h2>
          <p
            data-reveal
            className="mt-5 text-base md:text-lg text-ink-soft max-w-2xl leading-relaxed"
          >
            Um guia curto (ler em 10 min) com os erros mais comuns em
            websites de pequenos negócios portugueses e como evitá-los.
            Recebes por email, sem spam.
          </p>

          <form
            onSubmit={onSubmit}
            data-reveal
            className="mt-7 flex flex-col sm:flex-row gap-3 max-w-xl"
          >
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="o-teu-email@dominio.com"
              aria-label="Email para receber o guia"
              disabled={sent}
              className="flex-1 bg-paper border border-line rounded-full px-5 py-3.5 text-sm focus:outline-none focus:border-ink disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={sent}
              className="btn-fill-up inline-flex items-center justify-center gap-2 bg-ink text-paper rounded-full px-6 py-3.5 text-sm font-medium transition-colors disabled:opacity-60"
            >
              {sent ? 'A caminho — verifica a caixa' : 'Enviem o guia →'}
            </button>
          </form>

          <p className="mt-4 text-xs text-muted">
            Só uso o teu email para enviar o guia. Zero newsletter forçada,
            zero spam.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
