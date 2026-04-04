import TechnologyPage from '@/components/industries/TechnologyPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Spend Control for Technology Teams | TalepNET',
  'Connected procurement for technology companies with requests, approvals, suppliers, budgets, sourcing, orders, and spend visibility in one workflow-driven system.',
  'https://www.talepnet.com/industries/technology',
);

const page = () => {
  return <TechnologyPage />;
};

export default page;
