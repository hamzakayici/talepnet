'use client';

import { useI18n } from '@/i18n/I18nProvider';
import RevealAnimation from '../animation/RevealAnimation';

const Content = () => {
  const { messages } = useI18n();
  const sections = messages.legal.notice.sections;

  return (
    <section className="xl:pb-28 lg:pb-20 pb-16">
      <div className="main-container">
        <div className="max-w-[950px] mx-auto w-full">
          {sections.map((section, index) => (
            <RevealAnimation key={section.title} delay={0.1 + index * 0.1}>
              <div className="py-8 space-y-3">
                <h2 className="text-heading-4 font-normal">{section.title}</h2>
                <div className="space-y-2">
                  {section.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

Content.displayName = 'Content';
export default Content;
