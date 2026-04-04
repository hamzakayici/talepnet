import AutomotivePage from '@/components/industries/AutomotivePage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Purchasing Workflows for Automotive Operations | TalepNET',
  'Connected automotive procurement workflows for plants, branches, warehouses, service operations, suppliers, approvals, receiving, and spend visibility.',
  'https://www.talepnet.com/industries/automotive',
);

const page = () => {
  return <AutomotivePage />;
};

export default page;
