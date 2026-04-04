import NonProfitPage from '@/components/industries/NonProfitPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Nonprofit Purchasing and Budget Control | TalepNET',
  'Connected nonprofit procurement with requests, approvals, suppliers, orders, budget visibility, and spend control in one workflow-driven system.',
  'https://www.talepnet.com/industries/non-profit',
);

const page = () => {
  return <NonProfitPage />;
};

export default page;
