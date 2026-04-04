import SupplierManagementPage from '@/components/supplier-management/SupplierManagementPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Supplier Management | TalepNET',
  'Manage suppliers as part of the procurement operating system with contracts, RFQs, purchase orders, portal collaboration, and supplier visibility in TalepNET.',
  'https://www.talepnet.com/supplier-management',
);

const page = () => {
  return <SupplierManagementPage />;
};

export default page;
