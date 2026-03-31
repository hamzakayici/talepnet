import AnalyticsDetails from '@/components/analytics/AnalyticsDetails';
import AnalyticsHero from '@/components/analytics/AnalyticsHero';
import AnalyticsTestimonial from '@/components/analytics/AnalyticsTestimonial';
import CTAV1 from '@/components/shared/cta/CTAV1';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Analizler | TalepNET',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <AnalyticsHero />
      <AnalyticsDetails />
      <AnalyticsTestimonial />
      <CTAV1
        className="dark:bg-background-5 bg-white"
        badgeText="Hemen Başlayın"
        badgeClass="!badge-cyan-v2"
        ctaHeading="TalepNET ile satın alma süreçlerinizi dijitalleştirin"
        description="Ücretsiz denemenizi bugün başlatın ve satın alma süreçlerinizi kolayca dijitalleştirin."
        ctaBtnText="Ücretsiz Başlayın"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default page;
