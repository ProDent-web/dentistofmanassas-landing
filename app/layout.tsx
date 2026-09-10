import type { Metadata } from 'next';
import './globals.css';

const SITE_URL = 'https://dentistofmanassas.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Dentist in Manassas, VA | Manassas Dental & Cosmetics',
  description:
    'Modern, gentle dentistry in Manassas, VA. New patients welcome, most insurance accepted, and flexible payment options available.',
  openGraph: {
    title: 'Dentist in Manassas, VA | Manassas Dental & Cosmetics',
    description:
      'Modern, gentle dental care for the whole family on Liberia Avenue in Manassas.',
    type: 'website',
    url: SITE_URL,
    siteName: 'Manassas Dental & Cosmetics',
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: 'Manassas Dental & Cosmetics — Dentist in Manassas, VA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dentist in Manassas, VA | Manassas Dental & Cosmetics',
    description:
      'Modern, gentle dental care for the whole family on Liberia Avenue in Manassas.',
    images: [`${SITE_URL}/og.jpg`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* CallRail dynamic number insertion — must run on every page */}
        <script
          type="text/javascript"
          src="https://cdn.callrail.com/companies/607625076/ff2d2f841d0f15cd2470/12/swap.js"
        />
      </body>
    </html>
  );
}
