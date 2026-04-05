import RevealAnimation from '@/components/animation/RevealAnimation';
import Client from '@/components/testimonial/Client';
import Integration from '@/components/testimonial/Integration';
import Reviews from '@/components/testimonial/Reviews';
import { defaultLocale, Locale } from '@/i18n/config';
import { getMessages } from '@/i18n/getMessages';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { headers } from 'next/headers';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Referanslar | TalepNET',
};

const page = async ({ locale: localeProp }: { locale?: Locale } = {}) => {
  const headerList = await headers();
  const locale = localeProp ?? ((headerList.get('x-locale') as Locale | null) ?? defaultLocale);
  const { secondary } = await getMessages(locale);
  const testimonial = secondary.testimonial;

  return (
    <main className="bg-background-1 dark:bg-background-6">
      <section className="pt-32 pb-4 sm:pt-36 md:pt-42 xl:pt-[180px]">
        <div className="main-container text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-5 !normal-case">{testimonial.badge}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 className="font-normal">{testimonial.title}</h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-secondary/72 dark:text-accent/70">
              {testimonial.description}
            </p>
          </RevealAnimation>
        </div>
      </section>
      <Reviews
        badgeClass="badge-green"
        className="bg-background-1 dark:bg-background-6 py-[80px] md:py-[90px] lg:py-[140px]"
      />
      <Client />
      <Integration />
    </main>
  );
};

export default page;
