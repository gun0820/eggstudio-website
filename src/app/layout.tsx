import type { Metadata } from 'next';
import { Inter, Noto_Sans_TC } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/data/site';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const notoSansTC = Noto_Sans_TC({
  variable: '--font-noto-sans-tc',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | VR影片・XR體驗・AI影像`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: ['VR影片', 'XR沉浸式體驗', 'AI影像', '紀錄片', '動畫', '互動裝置', '彩蛋影像', '高雄', '影像製作'],
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | VR影片・XR體驗・AI影像`,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | VR影片・XR體驗・AI影像`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD 結構化資料
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      alternateName: siteConfig.nameEn,
      url: siteConfig.url,
      email: siteConfig.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '溪洲街10號',
        addressLocality: '台北市文山區',
        addressCountry: 'TW',
      },
      sameAs: [siteConfig.facebook],
      founder: {
        '@type': 'Person',
        name: '高憲郎',
        alternateName: 'Kurt Kao',
      },
      foundingDate: '2018',
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${siteConfig.url}/#localbusiness`,
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '溪洲街10號',
        addressLocality: '台北市文山區',
        addressCountry: 'TW',
      },
      priceRange: '$$',
      description: siteConfig.description,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant-TW">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${notoSansTC.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
