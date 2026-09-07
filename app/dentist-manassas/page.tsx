import { LandingPage } from '@/components/landing-page';
import { campaignMetadata } from '@/lib/campaign-metadata';

export const dynamic = 'force-static';

export const metadata = campaignMetadata(
  'Dentist in Manassas, VA | Manassas Dental & Cosmetics',
  'Looking for a dentist near you in Manassas? Meet three experienced doctors offering family, cosmetic, restorative, implant, and emergency dental care.',
  '/dentist-manassas',
);

export default function DentistManassasPage() {
  return <LandingPage campaign="general" />;
}
