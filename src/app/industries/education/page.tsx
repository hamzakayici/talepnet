import EducationPage from '@/components/industries/EducationPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Education Purchasing for Multi-Campus Institutions | TalepNET',
  'Connected education procurement for schools, colleges, and multi-campus institutions with approvals, suppliers, budgets, orders, and spend visibility.',
  'https://www.talepnet.com/industries/education',
);

const page = () => {
  return <EducationPage />;
};

export default page;
