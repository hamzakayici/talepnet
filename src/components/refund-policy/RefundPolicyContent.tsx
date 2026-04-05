'use client';

import { useI18n } from '@/i18n/I18nProvider';
import RevealAnimation from '../animation/RevealAnimation';

const RefundPolicyContent = () => {
  const { messages } = useI18n();
  const refund = messages.legal.refund;
  const colors = ['bg-ns-yellow', 'bg-ns-green', 'bg-ns-cyan'];

  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 md:pb-[200px] xl:pt-[180px]">
      <div className="main-container">
        <div className="refund-policy space-y-[70px]">
          <RevealAnimation delay={0.2}>
            <div className="space-y-3">
              <h2>{refund.title}</h2>
              <p>{refund.updated}</p>
            </div>
          </RevealAnimation>

          {refund.sections.map((section, index) => (
            <RevealAnimation key={section.title} delay={0.3 + index * 0.1}>
              <div className="space-y-3">
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </div>
            </RevealAnimation>
          ))}

          <RevealAnimation delay={0.5}>
            <div className="space-y-3">
              <h2>{refund.eligibility.title}</h2>
              <p>{refund.eligibility.description}</p>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 mt-6 list-inside space-y-3 font-normal">
                {refund.eligibility.items.map((item, index) => (
                  <li key={index + 1}>{item}</li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div className="space-y-3">
              <h2>{refund.steps.title}</h2>
              <p>{refund.steps.description}</p>
              <ol className="mt-8 mb-6 space-y-8">
                {refund.steps.items.map((step, index) => (
                  <li key={step.step}>
                    <RevealAnimation delay={0.5 + index * 0.1}>
                      <div className="bg-background-1 dark:bg-background-6 flex max-w-[596px] items-start gap-4 rounded-2xl px-7 py-5 sm:gap-[22px] sm:rounded-[20px] sm:px-[34px] sm:py-6">
                        <div
                          className={`flex size-10 items-center justify-center ${colors[index] || colors[0]} text-tagline-1 text-secondary shrink-0 rounded-full font-semibold`}>
                          {step.step}
                        </div>
                        <div className="space-y-1">
                          <p className="text-tagline-1 text-secondary dark:text-accent leading-[27px] font-medium sm:text-lg">
                            {step.title}
                          </p>
                          <p>{step.description}</p>
                        </div>
                      </div>
                    </RevealAnimation>
                  </li>
                ))}
              </ol>
              <RevealAnimation delay={0.7}>
                <p>{refund.steps.footer}</p>
              </RevealAnimation>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.9}>
            <div className="space-y-3">
              <h2>{refund.nonRefundable.title}</h2>
              <p>{refund.nonRefundable.description}</p>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 mt-6 list-inside space-y-3 font-normal">
                {refund.nonRefundable.items.map((item, index) => (
                  <li key={index + 1}>{item}</li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {refund.additional.map((section) => (
            <RevealAnimation key={section.title} delay={0.8}>
              <div className="space-y-3">
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RefundPolicyContent;
