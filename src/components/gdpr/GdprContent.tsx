'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { localizeHref } from '@/i18n/pathnames';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const GdprContent = () => {
  const { locale, messages } = useI18n();
  const cookies = messages.legal.cookies;

  return (
    <section className="pt-32 pb-[200px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          <RevealAnimation delay={0.3}>
            <div className="space-y-3">
              <h2>{cookies.title}</h2>
              <p>{cookies.intro}</p>
              <p>{cookies.updated}</p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.35}>
            <p>
              {cookies.privacyIntro}{' '}
              <Link href={localizeHref('/privacy', locale)} className="text-secondary dark:text-accent">
                {cookies.privacyLabel}
              </Link>
              .
            </p>
          </RevealAnimation>

          {cookies.sections.map((section, index) => (
            <RevealAnimation key={section.title} delay={0.4 + index * 0.08}>
              <div className="space-y-6">
                <h3 className="text-heading-4">{section.title}</h3>
                {section.body ? <p>{section.body}</p> : null}
                {section.list ? (
                  <ul className="space-y-3">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start justify-start gap-2">
                        <span className="bg-secondary dark:bg-accent mt-2 inline-block size-1.5 rounded-full" />
                        <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GdprContent;
