import Reveal from '@/components/Reveal';

const INDUSTRIES = [
  { label: 'Restaurantes', icon: Fork },
  { label: 'Clínicas', icon: Stethoscope },
  { label: 'Lojas de bairro', icon: Bag },
  { label: 'Pastelarias & cafés', icon: Cup },
  { label: 'Studios & salões', icon: Scissors },
  { label: 'Advogados', icon: Scale },
  { label: 'Imobiliárias', icon: House },
  { label: 'Alojamento local', icon: Bed },
];

export default function ParaQuem() {
  return (
    <section className="relative py-24 md:py-40 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-3xl mb-12 md:mb-16">
          <div
            data-reveal
            className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-5 md:mb-6"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M4 21 C 4 16 7.5 13 12 13 C 16.5 13 20 16 20 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <p data-reveal className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted mb-4 md:mb-6">
            Para quem fazemos
          </p>
          <h2
            data-reveal
            className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight"
          >
            Negócios reais, com clientes à porta.
          </h2>
          <p
            data-reveal
            className="mt-6 text-base md:text-lg text-ink-soft max-w-xl leading-relaxed"
          >
            Trabalhamos com PMEs portuguesas que querem parecer tão
            profissionais online como são no mundo real.
          </p>
        </Reveal>

        <Reveal
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          stagger={0.06}
        >
          {INDUSTRIES.map((it) => {
            const Icon = it.icon;
            return (
              <div
                key={it.label}
                data-reveal
                className="group flex items-center gap-4 rounded-2xl border border-line bg-paper p-4 md:p-5 hover:border-ink/40 hover:bg-paper-soft transition-colors"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-accent/10 text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-paper transition-colors">
                  <Icon />
                </span>
                <span className="font-serif text-base md:text-lg">
                  {it.label}
                </span>
              </div>
            );
          })}
        </Reveal>

        <p className="mt-10 text-sm text-muted max-w-2xl">
          Não vês o teu nicho? Fazemos para qualquer negócio sério.{' '}
          <a
            href="#contacto"
            className="text-ink underline underline-offset-4 hover:text-accent"
          >
            Fala connosco
          </a>
          .
        </p>
      </div>
    </section>
  );
}

/* --- Icons (editorial line style, 24×24) --- */

function Fork() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M7 3 L7 10 M11 3 L11 10 M15 3 L15 7 Q15 10 11 10 Q9 10 9 10 M9 10 L9 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 7 L15 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function Stethoscope() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M4 3 L4 10 Q4 14 8 14 Q12 14 12 10 L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 14 L8 18 Q8 21 12 21 Q16 21 16 18 L16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="16" cy="13.5" r="2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function Bag() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M5 8 L19 8 L18 20 Q18 21 17 21 L7 21 Q6 21 6 20 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M9 8 Q9 4 12 4 Q15 4 15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function Cup() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M5 8 L17 8 L16 18 Q16 20 14 20 L8 20 Q6 20 6 18 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M17 10 L20 10 Q21 10 21 11 L21 14 Q21 15 20 15 L17 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 3 L9 5 M12 3 L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function Scissors() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <circle cx="6" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="6" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 8.5 L20 20 M8 15.5 L20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function Scale() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M12 3 L12 21 M6 21 L18 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 11 L8 5 L12 11" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M12 11 L16 5 L20 11" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M4 11 Q6 13.5 8 11 Q10 13.5 12 11 Q14 13.5 16 11 Q18 13.5 20 11" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

function House() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M3 11 L12 3 L21 11" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M5 10 L5 20 L19 20 L19 10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M10 20 L10 14 L14 14 L14 20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

function Bed() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M3 11 L3 20 M3 20 L21 20 M21 11 L21 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 15 L21 15" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 11 Q3 10 4 10 L12 10 Q13 10 13 11 L13 15" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="7" cy="12.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
