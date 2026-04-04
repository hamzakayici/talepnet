import PurchaseFormsPage from '@/components/purchase-forms/PurchaseFormsPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Purchase Forms | TalepNET',
  'Turn approved demand into sourcing-ready purchase forms with multi-quotation comparison, RFQ management, and workflow submission in TalepNET.',
  'https://www.talepnet.com/purchase-forms',
);

const page = () => {
  return <PurchaseFormsPage />;
};

export default page;
