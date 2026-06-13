import type { Metadata, Viewport } from 'next';
import { Source_Serif_4, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export const metadata: Metadata = {
  metadataBase: new URL('https://vishanthashok.app'),
  title: 'Vishanth Ashok — Product · Strategy · Finance',
  description:
    'Sophomore at UT Austin building at the intersection of finance and technology. Builder of LonghornPath, Engralyx, and Parcelis.',
  openGraph: {
    title: 'Vishanth Ashok',
    description: 'Product · Strategy · Finance — UT Austin',
    url: 'https://vishanthashok.app',
    siteName: 'Vishanth Ashok',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#FAF9F5',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
