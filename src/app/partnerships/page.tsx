import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { defaultLocale, Locale } from '@/i18n/config';
import { getMessages } from '@/i18n/getMessages';
import { localizeHref } from '@/i18n/pathnames';
import { generateMetadata } from '@/utils/generateMetaData';
import type { Metadata } from 'next';
import { headers } from 'next/headers';

export const metadata: Metadata = generateMetadata(
  'İş Ortaklıkları | TalepNET',
  'TalepNET ile yönlendirme, uygulama desteği ve ekosistem iş birliği alanlarındaki iş ortaklığı fırsatlarını keşfedin.',
  'https://www.talepnet.com/partnerships',
);

const PartnershipsPage = async ({ locale: localeProp }: { locale?: Locale } = {}) => {
  const headerList = await headers();
  const locale = localeProp ?? ((headerList.get('x-locale') as Locale | null) ?? defaultLocale);
  const { secondary } = await getMessages(locale);
  const page = secondary.partnerships;

  return (
    <main className="bg-white dark:bg-background-6">
      <section className="pt-32 pb-20 sm:pt-36 md:pt-40 md:pb-24 xl:pt-[180px] xl:pb-28">
        <div className="main-container">
          <div className="mx-auto max-w-3xl text-center">
            <RevealAnimation delay={0.12}>
              <span className="badge badge-green !normal-case">{page.badge}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h1 className="mt-5 text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                {page.title}
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.24}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-secondary/72 dark:text-accent/70 sm:text-lg">
                {page.description}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.28}>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-secondary/56 dark:text-accent/55 sm:text-base">
                {page.fit}
              </p>
            </RevealAnimation>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {page.areas.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.28 + index * 0.05}>
                <article className="rounded-[28px] border border-stroke-3 bg-background-3 p-7 dark:border-stroke-7 dark:bg-background-5">
                  <h2 className="text-2xl font-normal text-secondary dark:text-accent">{item.title}</h2>
                  <p className="mt-4 text-base leading-7 text-secondary/72 dark:text-accent/70">{item.text}</p>
                </article>
              </RevealAnimation>
            ))}
          </div>

          <RevealAnimation delay={0.42}>
            <div className="mt-12 rounded-[30px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-5 lg:p-10">
              <h2 className="text-3xl font-normal text-secondary dark:text-accent">{page.ctaTitle}</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-secondary/72 dark:text-accent/70">
                {page.ctaText}
              </p>
              <div className="mt-7">
                <LinkButton href={localizeHref('/contact-us', locale)} className="btn btn-primary btn-md">
                  {page.ctaLabel}
                </LinkButton>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </main>
  );
};

export default PartnershipsPage;
