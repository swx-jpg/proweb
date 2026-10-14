import { packages } from '@/lib/pricing';
import { faqs } from '@/lib/faq';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://proweb.pt';

type JsonLd = Record<string, unknown>;

export default function StructuredData() {
  const organization: JsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}#organization`,
    name: 'Proweb',
    url: SITE_URL,
    logo: `${SITE_URL}/icon`,
    image: `${SITE_URL}/opengraph-image`,
    description:
      'Estúdio web em Portugal. Websites profissionais à medida com entrega rápida e garantia de 60 dias.',
    foundingDate: '2026',
    sameAs: [],
  };

  const localBusiness: JsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}#business`,
    name: 'Proweb',
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    description:
      'Estúdio web português. Landing pages, sites institucionais e lojas online.',
    priceRange: '€349 – €1 190',
    areaServed: {
      '@type': 'Country',
      name: 'Portugal',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PT',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pacotes Proweb',
      itemListElement: packages.map((p, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: {
          '@type': 'Service',
          name: `${p.name} — ${p.tagline}`,
          description: p.features.join(' · '),
          provider: { '@id': `${SITE_URL}#organization` },
        },
        price: p.installation.noVat.replace(/[^\d]/g, ''),
        priceCurrency: 'EUR',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
      })),
    },
  };

  const website: JsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    url: SITE_URL,
    name: 'Proweb',
    description:
      'Estúdio web em Portugal — Websites que não parecem feitos num template.',
    inLanguage: 'pt-PT',
    publisher: { '@id': `${SITE_URL}#organization` },
  };

  const faqPage: JsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [organization, localBusiness, website, faqPage],
  };

  return (
    <script
      type="application/ld+json"
      // Server-rendered inline JSON — no XSS risk since all values are static or from our config.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
