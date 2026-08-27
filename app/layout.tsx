import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '보미뷰티 | 대구 복현동 네일 속눈썹 메이크업',
  description: '대구 북구 복현동 BOMI BEAUTY. 네일, 속눈썹, 메이크업과 보미뷰티의 다양한 스타일을 만나보세요',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bomi-beauty.sites.openai.com'),
  openGraph: {
    title: '보미뷰티 | 대구 복현동 네일 속눈썹 메이크업',
    description: '대구 북구 복현동 BOMI BEAUTY. 네일, 속눈썹, 메이크업과 보미뷰티의 다양한 스타일을 만나보세요',
    type: 'website',
    locale: 'ko_KR',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'BOMI BEAUTY' }],
  },
  twitter: { card: 'summary_large_image', title: 'BOMI BEAUTY', description: 'BEAUTY, JUST FOR YOU', images: ['/og.png'] },
  manifest: '/manifest.webmanifest',
  appleWebApp: { capable: true, title: 'BOMI BEAUTY', statusBarStyle: 'default' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
