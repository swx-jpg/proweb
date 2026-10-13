import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Intro from '@/components/Intro';
import StructuredData from '@/components/StructuredData';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://proweb.pt';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
  axes: ['opsz'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Proweb — Websites que não parecem feitos num template',
    template: '%s · Proweb',
  },
  description:
    'Estúdio web em Portugal. Websites profissionais à medida: landing pages, sites institucionais e lojas online, com entrega em 3 a 14 dias e 60 dias de garantia.',
  applicationName: 'Proweb',
  authors: [{ name: 'Proweb', url: SITE_URL }],
  creator: 'Proweb',
  publisher: 'Proweb',
  keywords: [
    'websites Portugal',
    'estúdio web Portugal',
    'criação de sites',
    'landing page',
    'loja online',
    'website restaurante',
    'website clínica',
    'desenvolvimento web Portugal',
    'web design editorial',
    'sites profissionais',
  ],
  alternates: {
    canonical: '/',
    languages: {
      'pt-PT': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: SITE_URL,
    siteName: 'Proweb',
    title: 'Proweb — Websites que não parecem feitos num template',
    description:
      'Estúdio web em Portugal. Entrega em 3 a 14 dias, 60 dias de garantia, suporte em PT. Landing pages, sites institucionais e lojas online.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Proweb — Estúdio web em Portugal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proweb — Websites que não parecem feitos num template',
    description:
      'Estúdio web em Portugal. Entrega em 3 a 14 dias, 60 dias de garantia.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'business',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f3ece0' },
    { media: '(prefers-color-scheme: dark)', color: '#141210' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="pt-PT"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full grain" suppressHydrationWarning>
        <StructuredData />
        <Intro />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
