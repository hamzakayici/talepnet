import PurchaseOrdersPage from '@/components/purchase-orders/PurchaseOrdersPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Purchase Orders | TalepNET',
  'Turn approved purchases into structured purchase orders with supplier-ready communication, receiving integration, and controlled execution in TalepNET.',
  'https://www.talepnet.com/purchase-orders',
);

const page = () => {
  return <PurchaseOrdersPage />;
};

export default page;
