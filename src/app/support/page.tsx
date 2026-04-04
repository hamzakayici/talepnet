import Contact from '@/components/support/Contact';
import NeedHelp from '@/components/support/NeedHelp';
import Services from '@/components/support/Services';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Support | TalepNET',
  'Use TalepNET support resources to access tutorials, FAQ content, blog guidance, and direct contact options.',
  'https://www.talepnet.com/support',
);

const Support = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <NeedHelp />
      <Services />
      <Contact />
    </main>
  );
};

export default Support;
