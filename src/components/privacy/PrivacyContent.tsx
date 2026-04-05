'use client';

import { useI18n } from '@/i18n/I18nProvider';
import RevealAnimation from '../animation/RevealAnimation';

const PrivacyContent = () => {
  const { locale, messages } = useI18n();
  const privacy = messages.legal.privacy;

  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        <div className="privacy-policy space-y-[75px]">
          <div className="space-y-3">
            <RevealAnimation delay={0.1}>
              <h2>{privacy.title}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>{privacy.intro}</p>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>{privacy.updated}</p>
            </RevealAnimation>
          </div>

          {privacy.sections.map((section, index) => (
            <RevealAnimation key={section.title} delay={0.4 + index * 0.05}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4>{section.title}</h4>
                  {section.body ? <p>{section.body}</p> : null}
                  {section.list ? (
                    <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;
