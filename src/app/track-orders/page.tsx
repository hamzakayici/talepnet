import TrackOrdersPage from '@/components/track-orders/TrackOrdersPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Track Orders | TalepNET',
  'Supplier-facing purchase order tracking with clearer status visibility, direct response actions, and cleaner execution follow-up in TalepNET.',
  'https://www.talepnet.com/track-orders',
);

const page = () => {
  return <TrackOrdersPage />;
};

export default page;
