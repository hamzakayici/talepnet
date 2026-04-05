'use client';

import { useTranslations } from '@/i18n/useTranslations';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const NewsLetter = () => {
  const t = useTranslations('home');

  return (
    <RevealAnimation delay={0.1}>
      <section className="bg-secondary dark:bg-background-6 pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[76px] lg:pb-[76px]">
        <div className="main-container">
          <div className="text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-blur dark:!text-accent/60 dark:!bg-accent/10 mb-5">{t('newsletter.badge')}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mb-3 text-white">{t('newsletter.title')}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mb-6 text-white/60">{t('newsletter.description')}</p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="text-center">
                <LinkButton
                  href="https://app.talepnet.com/sign-up"
                  className="btn btn-primary hover:btn-accent btn-md mx-auto w-[90%] border-0 md:mx-0 md:w-auto">
                  {t('newsletter.button')}
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default NewsLetter;
