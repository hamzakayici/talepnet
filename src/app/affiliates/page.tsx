import AffiliateProcess from '@/components/affiliates/AffiliateProcess';
import AffiliateProgram from '@/components/affiliates/AffiliateProgram';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'İş Ortaklığı | TalepNET',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <AffiliateProgram />
      <AffiliateProcess />
    </main>
  );
};

export default page;
