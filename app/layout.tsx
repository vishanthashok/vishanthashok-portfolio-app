import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Vishanth Ashok — PM & Strategy',
  description: 'Sophomore at UT Austin building at the intersection of finance and technology.',
  openGraph: {
    title: 'Vishanth Ashok',
    description: 'PM & Strategy · UT Austin',
    url: 'https://vishanthashok.app',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
