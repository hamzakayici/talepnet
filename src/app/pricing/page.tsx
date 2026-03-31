import Client from '@/components/pricing/Client';
import Faq from '@/components/pricing/Faq';
import Pricing from '@/components/pricing/Pricing';
import CTAV1 from '@/components/shared/cta/CTAV1';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Fiyatlandırma | TalepNET',
};

const page = () => {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <Pricing />
      <Client />
      <Faq />
      <CTAV1
        className="dark:bg-background-7 bg-accent"
        badgeText="Hemen Başlayın"
        badgeClass="!badge-cyan"
        ctaHeading="TalepNET ile satın alma süreçlerinizi dijitalleştirin"
        description="Ücretsiz denemenizi bugün başlatın ve satın alma süreçlerinizi kolayca dijitalleştirin."
        ctaBtnText="Ücretsiz Başlayın"
        btnClass="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default page;
