import RevealAnimation from '@/components/animation/RevealAnimation';
import LocationsSection from '@/components/shared/LocationsSection';
import LinkButton from '@/components/ui/button/LinkButton';
import { defaultLocale, Locale } from '@/i18n/config';
import { getMessages } from '@/i18n/getMessages';
import { localizeHref } from '@/i18n/pathnames';
import { generateMetadata } from '@/utils/generateMetaData';
import { CheckCircle2, GitBranch, ShieldCheck, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';
import { headers } from 'next/headers';

export const metadata: Metadata = generateMetadata(
  'Why TalepNET | About',
  'Learn why TalepNET exists, what we are building, and how we think about connected procurement workflows.',
  'https://www.talepnet.com/about',
);

const beliefIcons = [GitBranch, ShieldCheck, Sparkles];

const AboutPage = async ({ locale: localeProp }: { locale?: Locale } = {}) => {
  const headerList = await headers();
  const locale = localeProp ?? ((headerList.get('x-locale') as Locale | null) ?? defaultLocale);
  const { about } = await getMessages(locale);

  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_26%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_30%),linear-gradient(180deg,#f7fffb_0%,#ffffff_56%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container pb-16 md:pb-20 xl:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6 !normal-case">{about.hero.badge}</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[14ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                  {about.hero.title}
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-2xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  {about.hero.description}
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href={localizeHref('/contact-us', locale)} className="btn btn-primary btn-md">
                    {about.hero.primaryCta}
                  </LinkButton>
                  <LinkButton
                    href={localizeHref('/product-features', locale)}
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent"
                  >
                    {about.hero.secondaryCta}
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="rounded-[30px] border border-stroke-3 bg-background-3 p-8 dark:border-stroke-7 dark:bg-background-5 lg:p-10">
                <p className="text-tagline-1 text-primary-500">{about.introCard.eyebrow}</p>
                <p className="mt-5 text-base leading-8 text-secondary/72 dark:text-accent/70">
                  {about.introCard.text}
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container">
          <RevealAnimation delay={0.12}>
            <div className="max-w-3xl">
              <span className="text-tagline-1 text-primary-500">{about.beliefsSection.eyebrow}</span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                {about.beliefsSection.title}
              </h2>
            </div>
          </RevealAnimation>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {about.beliefs.map((item, index) => {
              const Icon = beliefIcons[index] ?? Sparkles;
              return (
                <RevealAnimation key={item.title} delay={0.16 + index * 0.05}>
                  <article className="rounded-[28px] border border-stroke-3 bg-white p-7 dark:border-stroke-7 dark:bg-background-6">
                    <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-500/15 dark:text-primary-300">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-5 text-2xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-secondary/72 dark:text-accent/70">{item.text}</p>
                  </article>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="max-w-xl">
              <span className="text-tagline-1 text-primary-500">{about.focusSection.eyebrow}</span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                {about.focusSection.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-secondary/72 dark:text-accent/70">
                {about.focusSection.description}
              </p>
            </div>
          </RevealAnimation>

          <div className="grid gap-4">
            {about.focusAreas.map((item, index) => (
              <RevealAnimation key={item} delay={0.18 + index * 0.05}>
                <div className="rounded-[22px] border border-stroke-3 bg-background-3 p-5 dark:border-stroke-7 dark:bg-background-5">
                  <p className="text-base leading-7 text-secondary/80 dark:text-accent/80">{item}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="max-w-xl">
              <span className="text-tagline-1 text-primary-500">{about.audienceSection.eyebrow}</span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                {about.audienceSection.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-secondary/72 dark:text-accent/70">
                {about.audienceSection.description}
              </p>
            </div>
          </RevealAnimation>

          <div className="grid gap-4">
            {about.audiences.map((item, index) => (
              <RevealAnimation key={item} delay={0.18 + index * 0.05}>
                <div className="flex items-start gap-3 rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-6">
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary-500" />
                  <p className="text-base leading-7 text-secondary/80 dark:text-accent/80">{item}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-2">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[28px] bg-background-3 p-8 dark:bg-background-5 lg:p-10">
              <span className="text-tagline-1 text-primary-500">{about.productThinking.eyebrow}</span>
              <p className="mt-5 text-2xl font-normal leading-tight text-secondary dark:text-accent lg:text-4xl">
                {about.productThinking.title}
              </p>
              <p className="mt-5 text-base leading-8 text-secondary/72 dark:text-accent/70">
                {about.productThinking.description}
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-6 lg:p-10">
              <span className="text-tagline-1 text-primary-500">{about.today.eyebrow}</span>
              <p className="mt-5 text-base leading-8 text-secondary/72 dark:text-accent/70">
                {about.today.description1}
              </p>
              <p className="mt-4 text-base leading-8 text-secondary/72 dark:text-accent/70">
                {about.today.description2}
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <LocationsSection
        eyebrow={about.locations.eyebrow}
        title={about.locations.title}
        description={about.locations.description}
        locations={about.locations.items}
      />

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container">
          <RevealAnimation delay={0.12}>
            <div className="max-w-3xl">
              <span className="text-tagline-1 text-primary-500">{about.expectationsSection.eyebrow}</span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                {about.expectationsSection.title}
              </h2>
            </div>
          </RevealAnimation>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {about.expectations.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.16 + index * 0.05}>
                <article className="rounded-[26px] border border-stroke-3 bg-white p-7 dark:border-stroke-7 dark:bg-background-6">
                  <h3 className="text-2xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-secondary/72 dark:text-accent/70">{item.text}</p>
                </article>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
        <div className="main-container">
          <RevealAnimation delay={0.12}>
            <div className="overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#0f172a_0%,#153b4a_55%,#0b1020_100%)] p-8 text-white md:p-12 xl:p-14">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-3xl">
                  <span className="text-tagline-1 inline-block text-white/65">{about.finalCta.eyebrow}</span>
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                    {about.finalCta.title}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <LinkButton href={localizeHref('/contact-us', locale)} className="btn btn-primary btn-md">
                    {about.finalCta.primaryCta}
                  </LinkButton>
                  <LinkButton href={localizeHref('/contact-us', locale)} className="btn btn-white btn-md hover:btn-secondary">
                    {about.finalCta.secondaryCta}
                  </LinkButton>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
