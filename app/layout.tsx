import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yohoo217.github.io/g-name-card'),
  title: 'aplevelup — Product Consultancy by G',
  description:
    'aplevelup helps ambitious teams make better apps through product strategy, experience review, and senior advisory.',
  openGraph: {
    title: 'aplevelup — Product Consultancy by G',
    description: 'Senior product strategy and experience advice for better apps.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'aplevelup — Product Consultancy by G',
    description: 'Senior product strategy and experience advice for better apps.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
