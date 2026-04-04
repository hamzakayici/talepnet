import CreateCatalogsPage from '@/components/create-catalogs/CreateCatalogsPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Create Catalogs | TalepNET',
  'Supplier catalog creation with cleaner item presentation, stronger discoverability, agreement linkage, and better procurement reuse in TalepNET.',
  'https://www.talepnet.com/create-catalogs',
);

const page = () => {
  return <CreateCatalogsPage />;
};

export default page;
