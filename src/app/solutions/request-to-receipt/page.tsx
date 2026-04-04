import RequestToReceiptPage from '@/components/request-to-receipt/RequestToReceiptPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Request-to-Receipt | TalepNET',
  'Connect request intake, approvals, purchasing, orders, and receiving through one visible workflow.',
  'https://www.talepnet.com/solutions/request-to-receipt',
);

const page = () => <RequestToReceiptPage />;

export default page;
