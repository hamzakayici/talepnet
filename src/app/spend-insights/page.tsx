import SpendInsightsPage from '@/components/spend-insights/SpendInsightsPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Spend Insights | TalepNET',
  'Turn procurement activity into spend visibility with supplier, contract, budget, and workflow context in TalepNET.',
  'https://www.talepnet.com/spend-insights',
);

const page = () => {
  return <SpendInsightsPage />;
};

export default page;
