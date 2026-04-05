'use client';

import { useLocale } from '@/i18n/I18nProvider';
import { localizeHref } from '@/i18n/pathnames';
import { useTranslations } from '@/i18n/useTranslations';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Services = () => {
  const locale = useLocale();
  const t = useTranslations('support');

  const resources = [
    {
      title: t('resources.faqTitle'),
      text: t('resources.faqText'),
      href: localizeHref('/faq', locale),
      cta: t('resources.faqCta'),
    },
    {
      title: t('resources.tutorialsTitle'),
      text: t('resources.tutorialsText'),
      href: localizeHref('/tutorial', locale),
      cta: t('resources.tutorialsCta'),
    },
    {
      title: t('resources.blogTitle'),
      text: t('resources.blogText'),
      href: localizeHref('/blog', locale),
      cta: t('resources.blogCta'),
    },
    {
      title: t('resources.contactTitle'),
      text: t('resources.contactText'),
      href: localizeHref('/contact-us', locale),
      cta: t('resources.contactCta'),
    },
  ];

  return (
    <section className="py-12 md:py-16 xl:py-20">
      <div className="main-container">
        <div className="mb-14 max-w-3xl">
          <RevealAnimation delay={0.12}>
            <span className="text-tagline-1 text-primary-500">{t('resources.badge')}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.18}>
            <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
              {t('resources.title')}
            </h2>
          </RevealAnimation>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {resources.map((item, index) => (
            <RevealAnimation key={item.title} delay={0.22 + index * 0.05}>
              <article className="flex h-full flex-col rounded-[28px] border border-stroke-3 bg-white p-7 dark:border-stroke-7 dark:bg-background-6">
                <h3 className="text-2xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-secondary/72 dark:text-accent/70">{item.text}</p>
                <div className="mt-7">
                  <LinkButton
                    href={item.href}
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent"
                  >
                    {item.cta}
                  </LinkButton>
                </div>
              </article>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
