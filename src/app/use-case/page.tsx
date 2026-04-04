import FeatureIntro from '@/components/use-case/FeatureIntro';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import FinanceAndOperation from '../../components/use-case/FinanceAndOperation';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Kullanım Senaryoları | TalepNET',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-5">
      <FeatureIntro />
      <FinanceAndOperation />
    </main>
  );
};

export default page;
