'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { localizeHref } from '@/i18n/pathnames';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const TermsConditionContent = () => {
  const { locale, messages } = useI18n();
  const terms = messages.legal.terms;

  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[200px]">
      <div className="main-container">
        <RevealAnimation delay={0.3}>
          <div className="space-y-3">
            <h2>{terms.title}</h2>
            <div className="space-y-7">
              <p>{terms.intro}</p>
              <p>{terms.updated}</p>
            </div>
          </div>
        </RevealAnimation>
        <article className="terms-conditions-body">
          {terms.sections.slice(0, 6).map((section, index) => (
            <RevealAnimation key={section.title} delay={0.4 + index * 0.1}>
              <div className="space-y-6">
                <h3>{section.title}</h3>
                <p>{section.body}</p>
                {section.list ? (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </RevealAnimation>
          ))}
          <RevealAnimation delay={0.4}>
            <Link
              href={localizeHref('/privacy', locale)}
              className="section-button btn btn-xl dark:btn-accent hover:btn-primary btn-secondary">
              <span>{terms.privacyCta}</span>
            </Link>
          </RevealAnimation>
          {terms.sections.slice(6).map((section, index) => (
            <RevealAnimation key={section.title} delay={0.5 + index * 0.1}>
              <div className="space-y-6">
                <h3>{section.title}</h3>
                <p>
                  {section.body}
                  {section.title.startsWith('13.') || section.title.startsWith('13 ') ? (
                    <>
                      {' '}
                      <Link href={localizeHref('/contact-us', locale)} className="text-secondary dark:text-accent">
                        {terms.contactLabel}
                      </Link>
                      .
                    </>
                  ) : null}
                </p>
              </div>
            </RevealAnimation>
          ))}
        </article>
      </div>
    </section>
  );
};

export default TermsConditionContent;
