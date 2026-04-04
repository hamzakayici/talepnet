import ProcureToPayPage from '@/components/procure-to-pay/ProcureToPayPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Procure-to-Pay | TalepNET',
  'Connect requests, approvals, sourcing, suppliers, orders, receiving, budgets, and payable readiness in one procure-to-pay workflow.',
  'https://www.talepnet.com/solutions/procure-to-pay',
);

const page = () => <ProcureToPayPage />;

export default page;
