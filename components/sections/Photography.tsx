import Reveal from '@/components/Reveal';
import { photoPacks, photoNotes } from '@/lib/pricing';

export default function Photography() {
  return (
    <section
      id="fotografia"
      className="relative py-24 md:py-40 px-5 md:px-10 bg-paper-soft border-y border-line"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-3xl mb-14 md:mb-20">
          <div data-reveal className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-5 md:mb-6">
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
              <path d="M8 7 L9.5 4 L14.5 4 L16 7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
              <rect x="2" y="7" width="20" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="12" cy="14" r="4" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="18.5" cy="10.5" r="0.8" fill="currentColor"/>
            </svg>
          </div>
          <p data-reveal className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted mb-4 md:mb-6">
            Fotografia para o site
          </p>
          <h2
            data-reveal
            className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight"
          >
            Fotos que fazem o site funcionar.
          </h2>
          <p
            data-reveal
            className="mt-6 text-base md:text-lg text-ink-soft max-w-xl leading-relaxed"
          >
            Sessão no teu espaço, entrega em 72 horas. Licença de utilização
            no site e redes sociais incluída.
          </p>
        </Reveal>

        <Reveal className="grid md:grid-cols-3 gap-6" stagger={0.12}>
          {photoPacks.map((p) => {
            const dark = !!p.highlight;
            return (
              <article
                key={p.name}
                data-reveal
                className={`relative flex flex-col rounded-3xl p-6 md:p-8 border transition-colors ${
                  dark
                    ? 'bg-ink text-paper border-ink'
                    : 'bg-paper border-line hover:border-ink/40'
                }`}
              >
                {dark && (
                  <span className="absolute -top-3 left-6 bg-accent text-paper text-[10px] uppercase tracking-[0.25em] px-3 py-1 rounded-full">
                    Mais popular
                  </span>
                )}
                <h3 className="font-serif text-2xl md:text-3xl mb-3">
                  {p.name}
                </h3>
                <p
                  className={`text-sm mb-6 leading-relaxed flex-1 ${
                    dark ? 'text-paper/70' : 'text-ink-soft'
                  }`}
                >
                  {p.deliverables}
                </p>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <div className="font-serif text-3xl md:text-4xl tracking-tight">
                    {p.noVat}
                  </div>
                  <div
                    className={`text-xs ${
                      dark ? 'text-paper/50' : 'text-muted'
                    }`}
                  >
                    s/ IVA · {p.vat} c/ IVA
                  </div>
                </div>
              </article>
            );
          })}
        </Reveal>

        <Reveal className="mt-10 md:mt-12 grid gap-2 text-sm text-muted max-w-3xl">
          {photoNotes.map((n) => (
            <p key={n} data-reveal>
              · {n}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
