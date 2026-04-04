import Contact from '@/components/faq/Contact';
import FaqTab from '@/components/faq/FaqTab';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'FAQ | TalepNET',
};

const FAQ = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <FaqTab />
      <Contact />
    </main>
  );
};

export default FAQ;
