'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { CheckIcon } from '@/icons';
import RevealAnimation from '../animation/RevealAnimation';

const Content = () => {
  const { messages } = useI18n();
  const security = messages.legal.security;

  return (
    <section className="xl:pb-28 lg:pb-20 pb-16">
      <div className="main-container">
        <div className="flex items-start lg:flex-row flex-col lg:gap-x-5 gap-y-5 max-w-[1100px] mx-auto w-full">
          <RevealAnimation delay={0.1}>
            <div className="space-y-2 max-w-[350px] w-full sticky top-28">
              <p className="text-secondary dark:text-accent">{security.eyebrow}</p>
              <p>{security.sideValue}</p>
            </div>
          </RevealAnimation>
          <div className="space-y-6">
            {security.sections.map((section, index) => {
              const delay = (index + 2) * 0.1;

              return (
                <RevealAnimation key={section.title} delay={delay}>
                  <div className={section.listItems ? '' : 'space-y-2'}>
                    <h2 className="text-heading-5 font-normal mb-2">{section.title}</h2>
                    <p>{section.description}</p>
                    {section.listItems && (
                      <>
                        <ul className="mt-4 mb-6 space-y-3">
                          {section.listItems.map((item) => (
                            <li key={item} className="flex items-center gap-x-2">
                              <span className="size-5 rounded-full bg-secondary dark:bg-accent shrink-0 flex items-center justify-center">
                                <CheckIcon className="fill-accent dark:fill-secondary" />
                              </span>
                              <p className="text-secondary/80 dark:text-accent/80">{item}</p>
                            </li>
                          ))}
                        </ul>
                        {section.additionalText && <p>{section.additionalText}</p>}
                      </>
                    )}
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

Content.displayName = 'Content';
export default Content;
