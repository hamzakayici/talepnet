import SupplierPortalPage from '@/components/supplier-portal/SupplierPortalPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Supplier Portal | TalepNET',
  'Supplier-facing portal for RFQs, quotations, agreements, catalogs, orders, and buyer collaboration in TalepNET.',
  'https://www.talepnet.com/supplier-portal',
);

const page = () => {
  return <SupplierPortalPage />;
};

export default page;
