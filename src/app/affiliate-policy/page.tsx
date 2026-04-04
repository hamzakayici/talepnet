import AffiliateContent from '@/components/affiliate-policy/AffiliateContent';
import Guideline from '@/components/affiliate-policy/Guideline';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'İş Ortaklığı Politikası | TalepNET',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Guideline />
      <AffiliateContent />
    </main>
  );
};

export default page;
