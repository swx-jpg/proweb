'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#precos', label: 'Preços' },
  { href: '#trabalhos', label: 'Conceitos' },
  { href: '#processo', label: 'Processo' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'bg-paper/85 backdrop-blur-md border-b border-line/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 h-14 md:h-16">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="font-serif text-lg md:text-xl tracking-tight"
        >
          Proweb<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-ink-soft">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-ink transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center gap-2 bg-ink text-paper rounded-full px-4 py-2 text-sm hover:bg-accent transition-colors"
          >
            Orçamento
          </a>

          <button
            type="button"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden -mr-2 w-10 h-10 flex items-center justify-center text-ink"
          >
            <span className="relative block w-5 h-[14px]">
              <span
                className={`absolute left-0 top-0 w-full h-[1.5px] bg-current transition-transform duration-300 ${
                  open ? 'translate-y-[6px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 w-full h-[1.5px] bg-current transition-transform duration-300 ${
                  open ? '-translate-y-[6px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-6 pb-8 pt-2 space-y-1 border-t border-line/60">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block font-serif text-2xl py-3 text-ink hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 bg-ink text-paper rounded-full px-5 py-3 text-sm"
            >
              Pedir orçamento →
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
