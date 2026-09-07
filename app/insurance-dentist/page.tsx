import { LandingPage } from '@/components/landing-page';
import { campaignMetadata } from '@/lib/campaign-metadata';

export const dynamic = 'force-static';

export const metadata = campaignMetadata(
  'Dentist Who Accepts Insurance in Manassas | Free Benefits Check',
  'Most major dental insurance plans accepted in Manassas. Request complimentary benefit verification before your first visit.',
  '/insurance-dentist',
);

export default function InsuranceDentistPage() {
  return <LandingPage campaign="insurance" />;
}
