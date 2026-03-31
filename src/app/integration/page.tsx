import Integration from '@/components/integration/Integration';
import CTAV1 from '@/components/shared/cta/CTAV1';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Entegrasyonlar | TalepNET',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Integration />
      <CTAV1
        className="dark:bg-background-8 bg-white"
        badgeText="Hemen Başlayın"
        badgeClass="!badge-green"
        ctaHeading="TalepNET ile satın alma süreçlerinizi dijitalleştirin"
        description="Ücretsiz denemenizi bugün başlatın ve satın alma süreçlerinizi kolayca dijitalleştirin."
        ctaBtnText="Ücretsiz Başlayın"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default page;
