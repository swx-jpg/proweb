import Reveal from '@/components/Reveal';
import { extras } from '@/lib/pricing';

export default function AddOns() {
  return (
    <section className="relative py-24 md:py-40 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-3xl mb-14 md:mb-16">
          <div data-reveal className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-5 md:mb-6">
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
              <path d="M9 3 L10 8 L15 9 L10 10 L9 15 L8 10 L3 9 L8 8 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
              <path d="M17 13 L18 16.5 L21.5 17.5 L18 18.5 L17 22 L16 18.5 L12.5 17.5 L16 16.5 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
            </svg>
          </div>
          <p data-reveal className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted mb-4 md:mb-6">
            Extras
          </p>
          <h2
            data-reveal
            className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight"
          >
            Para potenciar o teu site.
          </h2>
        </Reveal>

        <Reveal className="divide-y divide-line border-y border-line" stagger={0.08}>
          {extras.map((e) => (
            <div
              key={e.name}
              data-reveal
              className="grid grid-cols-[1fr_auto] gap-6 py-6 md:py-7 items-baseline"
            >
              <div>
                <div className="font-serif text-xl md:text-2xl">{e.name}</div>
                {e.description && (
                  <div className="text-sm text-muted mt-1">{e.description}</div>
                )}
              </div>
              <div className="text-right">
                <div className="font-serif text-lg md:text-xl">{e.noVat}</div>
                <div className="text-xs text-muted mt-0.5">
                  {e.vat} c/ IVA
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
