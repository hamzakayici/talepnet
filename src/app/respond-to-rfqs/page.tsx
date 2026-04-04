import RespondToRFQsPage from '@/components/respond-to-rfqs/RespondToRFQsPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Respond to RFQs | TalepNET',
  'Supplier RFQ response workflows with structured quote submission, buyer context, deadlines, and submission history in TalepNET.',
  'https://www.talepnet.com/respond-to-rfqs',
);

const page = () => {
  return <RespondToRFQsPage />;
};

export default page;
