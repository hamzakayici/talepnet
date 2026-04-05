'use client';

import { useLocale } from '@/i18n/I18nProvider';
import { localizeHref } from '@/i18n/pathnames';
import { useTranslations } from '@/i18n/useTranslations';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Contact = () => {
  const locale = useLocale();
  const t = useTranslations('support');

  return (
    <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
      <div className="main-container">
        <RevealAnimation delay={0.12}>
          <div className="overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#0f172a_0%,#153b4a_55%,#0b1020_100%)] p-8 text-white md:p-12 xl:p-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-3xl font-normal leading-tight text-white lg:text-5xl">
                  {t('cta.title')}
                </p>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
                  {t('cta.description')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <LinkButton href={localizeHref('/contact-us', locale)} className="btn btn-primary btn-md">
                  {t('cta.button')}
                </LinkButton>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Contact;
