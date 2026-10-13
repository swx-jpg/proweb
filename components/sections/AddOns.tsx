import Reveal from '@/components/Reveal';
import { extras } from '@/lib/pricing';

export default function AddOns() {
  return (
    <section className="relative py-24 md:py-40 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-3xl mb-14 md:mb-16">
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
