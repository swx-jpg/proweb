import Reveal from '@/components/Reveal';

const steps = [
  {
    n: '01',
    title: 'Conversa',
    body: 'Falamos 30 minutos. Percebemos o teu negócio, o que te distingue e o que precisa de estar no site.',
  },
  {
    n: '02',
    title: 'Proposta',
    body: 'Em 48 horas enviamos uma proposta clara: âmbito, prazos, preço fechado. Zero letras pequenas.',
  },
  {
    n: '03',
    title: 'Design & Desenvolvimento',
    body: 'Desenhamos, mostramos, iteramos contigo. Entregamos num link privado para aprovares antes de ir ao ar.',
  },
  {
    n: '04',
    title: 'Lançamento & Suporte',
    body: 'Publicamos, ensinamos-te a mexer no que precisas e ficamos cá para o que vier a seguir.',
  },
];

export default function Process() {
  return (
    <section
      id="processo"
      className="relative py-24 md:py-48 px-5 md:px-10 bg-paper-soft border-y border-line"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-3xl mb-20">
          <div data-reveal className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-5 md:mb-6">
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
              <circle cx="4" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="20" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6.3 12 L10 12 M14 12 L17.7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <p data-reveal className="text-xs uppercase tracking-[0.3em] text-muted mb-6">
            Processo
          </p>
          <h2
            data-reveal
            className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight"
          >
            Quatro passos. <span className="text-muted">Sem complicação.</span>
          </h2>
        </Reveal>

        <Reveal className="grid md:grid-cols-2 gap-x-16 gap-y-16" stagger={0.12}>
          {steps.map((s) => (
            <div key={s.n} data-reveal className="flex gap-6 md:gap-10">
              <div className="font-serif text-accent text-lg pt-1 min-w-[2.5rem]">
                {s.n}
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
                  {s.title}
                </h3>
                <p className="text-ink-soft leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
