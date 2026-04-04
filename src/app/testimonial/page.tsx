import Client from '@/components/testimonial/Client';
import Integration from '@/components/testimonial/Integration';
import Reviews from '@/components/testimonial/Reviews';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Referanslar | TalepNET',
};

const page = () => {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <Reviews
        badgeClass="badge-green"
        className="bg-background-1 dark:bg-background-6 py-[100px] md:py-[100px] lg:py-[200px]"
      />
      <Client />
      <Integration />
    </main>
  );
};

export default page;
