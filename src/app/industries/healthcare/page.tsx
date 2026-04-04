import HealthcarePage from '@/components/industries/HealthcarePage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Healthcare Purchasing Control for Hospitals and Clinics | TalepNET',
  'Connected healthcare procurement workflows for hospitals, clinics, laboratories, suppliers, budgets, receiving, and spend visibility.',
  'https://www.talepnet.com/industries/healthcare',
);

const page = () => {
  return <HealthcarePage />;
};

export default page;
