import ContractManagementPage from '@/components/contract-management/ContractManagementPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Contract Management | TalepNET',
  'Turn supplier contracts into active procurement controls with catalog visibility, sourcing inputs, and contract-aware purchasing behavior in TalepNET.',
  'https://www.talepnet.com/contract-management',
);

const page = () => {
  return <ContractManagementPage />;
};

export default page;
