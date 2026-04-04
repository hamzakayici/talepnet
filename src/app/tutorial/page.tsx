import Blog from '@/components/tutorial/Blog';
import Tutorials from '@/components/tutorial/Tutorials';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Eğitimler | TalepNET',
};

const Tutorial = () => {
  return (
    <main className="bg-background-3 dark:bg-background-5 overflow-x-hidden">
      <Blog />
      <Tutorials />
    </main>
  );
};

export default Tutorial;
