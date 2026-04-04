import SourceToOrderPage from '@/components/source-to-order/SourceToOrderPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Source-to-Order | TalepNET',
  'Move from sourcing to purchase orders with quotation comparison, supplier context, and structured execution.',
  'https://www.talepnet.com/solutions/source-to-order',
);

const page = () => <SourceToOrderPage />;

export default page;
