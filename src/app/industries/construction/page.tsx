import ConstructionPage from '@/components/industries/ConstructionPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Construction Purchasing for Projects and Sites | TalepNET',
  'Structured construction procurement across projects, sites, suppliers, orders, receiving, budgets, and spend visibility.',
  'https://www.talepnet.com/industries/construction',
);

const page = () => {
  return <ConstructionPage />;
};

export default page;
