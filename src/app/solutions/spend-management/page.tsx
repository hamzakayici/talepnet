import SpendInsightsPage from '@/components/spend-insights/SpendInsightsPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Spend Management | TalepNET',
  'Turn procurement activity into spend visibility with supplier, contract, budget, and workflow context in TalepNET.',
  'https://www.talepnet.com/solutions/spend-management',
);

const page = () => <SpendInsightsPage />;

export default page;
