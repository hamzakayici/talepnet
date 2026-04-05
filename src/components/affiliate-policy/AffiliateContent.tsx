'use client';

import { useI18n } from '@/i18n/I18nProvider';
import RevealAnimation from '../animation/RevealAnimation';

const AffiliateContent = () => {
  const { messages } = useI18n();
  const affiliate = messages.legal.affiliate;
  const sections = affiliate.sections;

  return (
    <section className="bg-background-1 dark:bg-background-6 py-28 md:py-36 lg:py-44 2xl:py-[200px]">
      <div className="main-container">
        <div className="mx-auto max-w-[848px] space-y-[70px]">
          {sections.map((section, index) => (
            <RevealAnimation key={section.title} delay={0.1 + index * 0.1}>
              <div className="mt-10 space-y-3">
                <h2 className="text-heading-4">{section.title}</h2>
                <p>{section.body}</p>
              </div>
            </RevealAnimation>
          ))}
          <RevealAnimation delay={0.5}>
            <div className="rounded-[24px] border border-stroke-3 bg-white p-7 dark:border-stroke-7 dark:bg-background-5">
              <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                {affiliate.footerNote}
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AffiliateContent;
