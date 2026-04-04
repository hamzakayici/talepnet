import ReceivingPage from '@/components/receiving/ReceivingPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Receiving | TalepNET',
  'Turn purchase completion into a controlled receiving process with line-level receipt recording, partial receipt support, and workflow traceability in TalepNET.',
  'https://www.talepnet.com/receiving',
);

const page = () => {
  return <ReceivingPage />;
};

export default page;
