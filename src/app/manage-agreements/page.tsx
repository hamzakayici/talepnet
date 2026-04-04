import ManageAgreementsPage from '@/components/manage-agreements/ManageAgreementsPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Manage Agreements | TalepNET',
  'Supplier-facing agreement visibility with lifecycle context, covered items, sourcing continuity, and catalog linkage in TalepNET.',
  'https://www.talepnet.com/manage-agreements',
);

const page = () => {
  return <ManageAgreementsPage />;
};

export default page;
