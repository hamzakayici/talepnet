import SolutionsPage from '@/components/solutions/SolutionsPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Solutions | TalepNET',
  'Explore Talepnet solutions for procure-to-pay, request-to-receipt, source-to-order, approvals, spend management, budget control, and accounts payable.',
  'https://www.talepnet.com/solutions',
);

const page = () => {
  return <SolutionsPage />;
};

export default page;
