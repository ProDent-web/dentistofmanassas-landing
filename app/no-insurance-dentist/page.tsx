import { LandingPage } from '@/components/landing-page';
import { campaignMetadata } from '@/lib/campaign-metadata';

export const dynamic = 'force-static';

export const metadata = campaignMetadata(
  'Dentist Without Insurance in Manassas | Payment Plans Available',
  'No dental insurance? Ask about a $79 new-patient exam, an in-house plan starting at $30/month, and flexible dental financing in Manassas.',
  '/no-insurance-dentist',
);

export default function NoInsuranceDentistPage() {
  return <LandingPage campaign="no-insurance" />;
}
