import PurchaseRequestsPage from '@/components/purchase-requests/PurchaseRequestsPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Purchase Requests | TalepNET',
  'Create, route, approve, and track purchase requests in one structured workflow with TalepNET.',
  'https://www.talepnet.com/purchase-requests',
);

const page = () => {
  return <PurchaseRequestsPage />;
};

export default page;
