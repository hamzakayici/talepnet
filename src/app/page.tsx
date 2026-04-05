import CTA from '@/components/home/CTA';
import Feature from '@/components/home/Feature';
import FeatureV2 from '@/components/home/FeatureV2';
import Hero from '@/components/home/Hero';
import Highlights from '@/components/home/Highlights';
import NewsLetter from '@/components/home/NewsLetter';
import Process from '@/components/home/Process';
import Services from '@/components/home/Services';
import SupplierPortal from '@/components/home/SupplierPortal';
import ReviewsV1 from '@/components/shared/reviews/ReviewsV1';
import Integration from '@/components/tutorial/Integration';
import { detectPreferredLocale, isLocale, localeCookieName } from '@/i18n/config';
import { localizeHref } from '@/i18n/pathnames';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'TalepNET | Organizasyonlar İçin Akıllı Satın Alma Yönetimi',
};

const HomePage = () => {
  return (
    <main className="dark:bg-background-6 bg-white">
      <Hero />
      <Services />
      <Highlights />
      <Feature />
      <FeatureV2 />
      <Integration />
      <Process />
      <SupplierPortal />
      <ReviewsV1
        badgeColor="hidden"
        background="lg:py-[150px] sm:py-[100px] py-20 bg-background-2 dark:bg-background-6"
        sliderClassName="bg-white dark:bg-background-5"
      />
      <CTA />
      <NewsLetter />
    </main>
  );
};

const page = async ({ locale }: { locale?: 'en' | 'tr' } = {}) => {
  if (locale) {
    return <HomePage />;
  }

  const cookieStore = await cookies();
  const headerList = await headers();
  const cookieLocale = cookieStore.get(localeCookieName)?.value;
  const redirectLocale = isLocale(cookieLocale) ? cookieLocale : detectPreferredLocale(headerList.get('accept-language'));

  redirect(localizeHref('/', redirectLocale));
};

export default page;
