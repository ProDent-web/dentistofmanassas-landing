import type { Metadata } from 'next';

const SITE_URL = 'https://dentistofmanassas.com';
const SOCIAL_IMAGE = `${SITE_URL}/og.jpg`;

export function campaignMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${SITE_URL}${path}`,
      siteName: 'Manassas Dental & Cosmetics',
      images: [
        {
          url: SOCIAL_IMAGE,
          width: 1200,
          height: 630,
          alt: 'Manassas Dental & Cosmetics — Dentist in Manassas, VA',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [SOCIAL_IMAGE],
    },
  };
}
