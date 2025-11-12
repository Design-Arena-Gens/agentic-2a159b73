import type { Metadata } from 'next';
import { Inter, Spectral } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
});
const spectral = Spectral({
  subsets: ['latin'],
  variable: '--font-spectral',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'The Whisper in the Dark',
  description: 'A cinematic horror vignette rendered in the browser.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-abyss-900 text-neutral-200">
      <body
        className={`${inter.variable} ${spectral.variable} font-inter antialiased bg-abyss-900`}
      >
        {children}
      </body>
    </html>
  );
}
