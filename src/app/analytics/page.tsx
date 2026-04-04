import AnalyticsDetails from '@/components/analytics/AnalyticsDetails';
import AnalyticsHero from '@/components/analytics/AnalyticsHero';
import AnalyticsTestimonial from '@/components/analytics/AnalyticsTestimonial';
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
    </main>
  );
};

export default page;
