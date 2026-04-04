import CollaboratePage from '@/components/collaborate/CollaboratePage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Collaborate | TalepNET',
  'Supplier collaboration across RFQs, quotations, agreements, catalogs, orders, and contextual communication in TalepNET.',
  'https://www.talepnet.com/collaborate',
);

const page = () => {
  return <CollaboratePage />;
};

export default page;
