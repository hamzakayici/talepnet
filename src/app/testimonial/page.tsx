import CTAV1 from '@/components/shared/cta/CTAV1';
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
      <CTAV1
        className="dark:bg-background-6 bg-white"
        badgeClass="badge-green"
        badgeText="Hemen Başlayın"
        ctaHeading="TalepNET ile satın alma süreçlerinizi dijitalleştirin"
        description="Ücretsiz denemenizi bugün başlatın ve satın alma süreçlerinizi kolayca dijitalleştirin."
        ctaBtnText="Ücretsiz Başlayın"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default page;
