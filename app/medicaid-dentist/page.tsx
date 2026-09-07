import { LandingPage } from '@/components/landing-page';
import { campaignMetadata } from '@/lib/campaign-metadata';

export const dynamic = 'force-static';

export const metadata = campaignMetadata(
  'Dentist Who Accepts Medicaid in Manassas, VA',
  'Manassas Dental & Cosmetics accepts Medicaid and Medicare. Request free benefit verification for your specific plan before your visit.',
  '/medicaid-dentist',
);

export default function MedicaidDentistPage() {
  return <LandingPage campaign="medicaid" />;
}
