import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Intro from '@/components/Intro';

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
  title: 'Proweb — Websites que vendem',
  description:
    'Websites profissionais à medida para o teu negócio: landing pages, sites institucionais e lojas online. Design editorial, animações cuidadas, entrega rápida.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="pt-PT"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full grain" suppressHydrationWarning>
        <Intro />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
