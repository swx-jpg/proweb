import Reveal from '@/components/Reveal';

const points = [
  {
    n: '01',
    title: 'Design feito à mão',
    body: 'Nada de templates. Cada secção é desenhada para a tua marca, para o teu público, para o teu objectivo.',
  },
  {
    n: '02',
    title: 'Animações profissionais',
    body: 'Scroll suave, transições cinemáticas e detalhes de movimento que separam um site amador de um site caro.',
  },
  {
    n: '03',
    title: 'Rápido e optimizado',
    body: 'Código moderno, SEO técnico, performance pensada ao detalhe. Google gosta. Clientes também.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative py-24 md:py-48 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-3xl mb-20 md:mb-32">
          <div data-reveal className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-5 md:mb-6">
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
              <path d="M12 2 L13.6 10.4 L22 12 L13.6 13.6 L12 22 L10.4 13.6 L2 12 L10.4 10.4 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </div>
          <p data-reveal className="text-xs uppercase tracking-[0.3em] text-muted mb-6">
            O que fazemos
          </p>
          <h2
            data-reveal
            className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight"
          >
            Um site é a primeira impressão.{' '}
            <span className="text-muted">Fazemo-la contar.</span>
          </h2>
        </Reveal>

        <Reveal
          as="div"
          stagger={0.15}
          className="grid md:grid-cols-3 gap-10 md:gap-16"
        >
          {points.map((p) => (
            <div key={p.n} data-reveal className="border-t border-ink/15 pt-6">
              <div className="font-serif text-sm text-accent mb-6">{p.n}</div>
              <h3 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">
                {p.title}
              </h3>
              <p className="text-ink-soft leading-relaxed">{p.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
