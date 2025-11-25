import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: '株式会社アドバンス | デジタルビジネスをワンストップでサポート',
  description: 'システム開発、ホームページ制作、WEBマーケティング、AI研修まで、デジタルビジネスの成功をワンストップでサポートします。',
  keywords: 'システム開発, ホームページ制作, WEBマーケティング, AI研修, コーポレートサイト, ECサイト',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
