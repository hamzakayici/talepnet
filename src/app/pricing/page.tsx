import Pricing from '@/components/pricing/Pricing';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Pricing | TalepNET',
  'Compare TalepNET plans across free, team, business, and enterprise rollout needs.',
  'https://www.talepnet.com/pricing',
);

const page = () => {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <Pricing />
    </main>
  );
};

export default page;
