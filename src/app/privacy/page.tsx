import PrivacyContent from '@/components/privacy/PrivacyContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Privacy Policy | TalepNET',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <PrivacyContent />

    </main>
  );
};

export default page;
