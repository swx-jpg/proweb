// Preços reais Proweb. Valores em euros. IVA a 23%.

export type Price = { noVat: string; vat: string };

export type Package = {
  slug: string;
  name: string;
  tagline: string;
  installation: Price;
  monthly: Price;
  monthlyOnly: Price; // alternativa sem instalação, contrato 12 meses
  delivery: string;
  changesPerMonth: number;
  features: string[];
  featured?: boolean;
};

export const packages: Package[] = [
  {
    slug: 'essencial',
    name: 'Essencial',
    tagline: 'Site de 1 página',
    installation: { noVat: '349 €', vat: '429,27 €' },
    monthly: { noVat: '19 €/mês', vat: '23,37 €/mês' },
    monthlyOnly: { noVat: '49 €/mês', vat: '60,27 €/mês' },
    delivery: '3 dias',
    changesPerMonth: 1,
    features: [
      'Adaptado a telemóvel',
      'Botão de WhatsApp e chamada',
      'Mapa com a localização',
      'Perfil Google da Empresa configurado',
      'SEO otimizado',
    ],
  },
  {
    slug: 'profissional',
    name: 'Profissional',
    tagline: 'Site até 4 páginas',
    installation: { noVat: '649 €', vat: '798,27 €' },
    monthly: { noVat: '29 €/mês', vat: '35,67 €/mês' },
    monthlyOnly: { noVat: '79 €/mês', vat: '97,17 €/mês' },
    delivery: '7 dias',
    changesPerMonth: 2,
    features: [
      'Tudo do Essencial',
      'Formulário de contacto',
      'Galeria de fotografias',
      'SEO otimizado',
    ],
    featured: true,
  },
  {
    slug: 'loja',
    name: 'Loja Online',
    tagline: 'Site com loja',
    installation: { noVat: '1 190 €', vat: '1 463,70 €' },
    monthly: { noVat: '49 €/mês', vat: '60,27 €/mês' },
    monthlyOnly: { noVat: '129 €/mês', vat: '158,67 €/mês' },
    delivery: '14 dias',
    changesPerMonth: 4,
    features: [
      'Tudo do Profissional',
      'Até 25 produtos',
      'Pagamentos por MB Way e cartão',
      'Configuração de envios',
    ],
  },
];

export type Extra = {
  name: string;
  description?: string;
  noVat: string;
  vat: string;
};

export const extras: Extra[] = [
  {
    name: 'Página adicional',
    noVat: '90 €',
    vat: '110,70 €',
  },
  {
    name: 'Fotografia profissional',
    description: 'Mínimo 10 a 12 fotos',
    noVat: 'desde 165 €',
    vat: 'desde 202,95 €',
  },
  {
    name: 'Redação profissional dos textos',
    noVat: '120 €',
    vat: '147,60 €',
  },
  {
    name: 'Mais 25 produtos na loja',
    noVat: '100 €',
    vat: '123,00 €',
  },
  {
    name: 'Gestão de redes sociais',
    description: '4 publicações por mês',
    noVat: 'desde 149 €/mês',
    vat: 'desde 183,27 €/mês',
  },
];

export type PhotoPack = {
  name: string;
  deliverables: string;
  noVat: string;
  vat: string;
  highlight?: boolean;
};

export const photoPacks: PhotoPack[] = [
  {
    name: 'Site de 1 página',
    deliverables: '10 a 12 fotos · até 1h30 no local',
    noVat: '165 €',
    vat: '202,95 €',
  },
  {
    name: 'Site de 4 páginas',
    deliverables: '22 a 25 fotos · até 3h no local · retratos de equipa',
    noVat: '286 €',
    vat: '351,78 €',
    highlight: true,
  },
  {
    name: 'Site completo + vídeo',
    deliverables:
      'Pacote de 4 páginas · 1 vídeo 15–20s · 2 clips verticais para redes',
    noVat: '462 €',
    vat: '568,26 €',
  },
];

export const photoNotes = [
  'Foto adicional: 9 € s/ IVA (11,07 € c/ IVA)',
  'Styling de pratos para restaurantes: + 66 € s/ IVA (+81,18 € c/ IVA)',
  'Deslocação: 0,50 €/km s/ IVA além de 30 km. Urgência: +25% sobre o pacote.',
];

export const contact = {
  whatsapp: 'https://wa.me/351XXXXXXXXX',
  email: 'ola@proweb.pt',
  calendar: 'https://cal.com/proweb',
};
