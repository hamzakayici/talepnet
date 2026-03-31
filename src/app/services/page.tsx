import Feature from '@/components/services/Feature';
import Integration from '@/components/services/Integration';
import Services from '@/components/services/Services';
import UseCases from '@/components/services/UseCases';
import CTAV1 from '@/components/shared/cta/CTAV1';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Çözümler | TalepNET',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Services />
      <Integration />
      <UseCases />
      <Feature
        btnClassName="btn btn-md hover:btn-primary btn-white"
        className="bg-background-3 dark:bg-background-7 py-[100px] lg:py-[200px]"
      />
      <CTAV1
        className="dark:bg-background-6 bg-white"
        badgeClass="hidden"
        ctaHeading="TalepNET ile satın alma süreçlerinizi"
        spanText="dijitalleştirin"
        description="Ücretsiz denemenizi bugün başlatın ve satın alma süreçlerinizi kolayca dijitalleştirin."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Ücretsiz Başlayın"
      />
    </main>
  );
};

export default page;
