import GdprContent from '@/components/gdpr/GdprContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Çerez Politikası | TalepNET',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-6">
      <GdprContent />

    </main>
  );
};

export default page;
