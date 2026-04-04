import HospitalityPage from '@/components/industries/HospitalityPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Hospitality Procurement Across Properties | TalepNET',
  'Connected hospitality procurement for hotels, resorts, restaurants, and multi-property operations with approvals, sourcing, suppliers, receiving, budgets, and spend visibility.',
  'https://www.talepnet.com/industries/hospitality',
);

const page = () => {
  return <HospitalityPage />;
};

export default page;
