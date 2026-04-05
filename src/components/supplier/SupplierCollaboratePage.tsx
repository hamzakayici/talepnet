'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { localizeHref } from '@/i18n/pathnames';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LinkButton from '@/components/ui/button/LinkButton';
import { ArrowRight, Check, LucideIcon, PackageCheck } from 'lucide-react';

type CollaborateContent = {
  badge: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  heroHighlights: string[];
  sections: {
    workspaceEyebrow: string;
    workspaceTitle: string;
    workspaceText: string;
    problemEyebrow: string;
    problemTitle: string;
    problemText: string;
    capabilityEyebrow: string;
    capabilityTitle: string;
    capabilityText: string;
    journeysEyebrow: string;
    journeysTitle: string;
    flowEyebrow: string;
    flowTitle: string;
    supplierEyebrow: string;
    supplierTitle: string;
    supplierText: string;
    buyerEyebrow: string;
    buyerTitle: string;
    buyerText: string;
    messagesEyebrow: string;
    messagesTitle: string;
    messagesText: string;
    outcomesEyebrow: string;
    outcomesTitle: string;
    useCasesEyebrow: string;
    useCasesTitle: string;
    faqEyebrow: string;
    faqTitle: string;
    finalTitle: string;
    finalText: string;
    joinPortal: string;
  };
  painPoints: string[];
  features: { title: string; description: string }[];
  journeys: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  benefits: { title: string; text: string }[];
  useCases: string[];
  faqs: { question: string; answer: string }[];
};

function ImagePlaceholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`flex min-h-[220px] items-center justify-center bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_100%)] dark:bg-[linear-gradient(135deg,#151b24_0%,#0f141c_100%)] ${className}`}>
      <div className="rounded-full border border-dashed border-secondary/20 px-4 py-2 text-sm tracking-[0.14em] text-secondary/45 dark:border-accent/15 dark:text-accent/40">
        {label}
      </div>
    </div>
  );
}

type Props = {
  page: CollaborateContent;
  featureIcons: LucideIcon[];
};

export default function SupplierCollaboratePage({ page, featureIcons }: Props) {
  const { locale } = useI18n();

  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_28%),linear-gradient(180deg,#f4fbf8_0%,#ffffff_52%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container relative z-10 pb-16 md:pb-20 xl:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">{page.badge}</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[12ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                  {page.title}
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  {page.description}
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href={localizeHref('/contact-us', locale)} className="btn btn-primary btn-md">
                    {page.primaryCta}
                  </LinkButton>
                  <LinkButton
                    href="#collaboration-flow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    {page.secondaryCta}
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                  <ImagePlaceholder label="Supplier collaboration workspace placeholder" className="min-h-[320px] sm:min-h-[390px]" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.heroHighlights.map((item) => (
                    <div key={item} className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                      <p className="text-sm leading-6 text-secondary/75 dark:text-accent/70">
                        <span className="mr-2 inline-flex size-5 items-center justify-center rounded-full bg-primary-100 text-primary-600 align-middle dark:bg-primary-500/15 dark:text-primary-300">
                          <Check className="size-3.5" />
                        </span>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="border-y border-stroke-3 bg-background-12 py-20 dark:border-stroke-7 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[28px] bg-white p-8 dark:bg-background-6 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                {page.sections.workspaceEyebrow}
              </span>
              <h2 className="mt-5 max-w-[13ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                {page.sections.workspaceTitle}
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">{page.sections.workspaceText}</p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="space-y-4 p-8 lg:p-10">
                  <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                    {page.sections.problemEyebrow}
                  </span>
                  <h3 className="text-3xl font-normal leading-tight text-secondary dark:text-accent">
                    {page.sections.problemTitle}
                  </h3>
                  <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">{page.sections.problemText}</p>
                </div>
                <div className="space-y-4 border-t border-stroke-3 p-8 dark:border-stroke-7 lg:border-t-0 lg:border-l lg:p-10">
                  {page.painPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <ArrowRight className="mt-1 size-4 shrink-0 text-primary-500" />
                      <p className="text-sm leading-6 text-secondary/72 dark:text-accent/70">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <RevealAnimation delay={0.12}>
            <div className="sticky top-28 rounded-[30px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-5 lg:p-10">
              <span className="badge badge-green mb-5">{page.sections.capabilityEyebrow}</span>
              <h2 className="max-w-[12ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                {page.sections.capabilityTitle}
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">{page.sections.capabilityText}</p>
            </div>
          </RevealAnimation>

          <div className="grid gap-5 md:grid-cols-2">
            {page.features.map((feature, index) => {
              const Icon = featureIcons[index] ?? featureIcons[0];
              return (
                <RevealAnimation key={feature.title} delay={0.14 + index * 0.04}>
                  <div className="rounded-[24px] border border-stroke-3 bg-white p-6 dark:border-stroke-7 dark:bg-background-5">
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-primary-100 text-primary-600 dark:bg-primary-500/10 dark:text-primary-300">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-5 text-2xl font-normal text-secondary dark:text-accent">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-secondary/72 dark:text-accent/70">{feature.description}</p>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container">
          <div className="max-w-3xl">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-5">{page.sections.journeysEyebrow}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-3xl font-normal text-secondary dark:text-accent sm:text-4xl">{page.sections.journeysTitle}</h2>
            </RevealAnimation>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {page.journeys.map((journey, index) => (
              <RevealAnimation key={journey.title} delay={0.18 + index * 0.06}>
                <div className="flex h-full flex-col rounded-[24px] border border-stroke-3 bg-white p-6 dark:border-stroke-7 dark:bg-background-6">
                  <span className="text-sm tracking-[0.16em] text-primary-500">Journey {index + 1}</span>
                  <h3 className="mt-5 text-2xl font-normal text-secondary dark:text-accent">{journey.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-secondary/72 dark:text-accent/70">{journey.text}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section id="collaboration-flow" className="py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container">
          <div className="max-w-3xl">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-5">{page.sections.flowEyebrow}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-3xl font-normal text-secondary dark:text-accent sm:text-4xl">{page.sections.flowTitle}</h2>
            </RevealAnimation>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {page.steps.map((step, index) => (
              <RevealAnimation key={step.title} delay={0.18 + index * 0.06}>
                <div className="flex h-full flex-col rounded-[24px] border border-stroke-3 bg-white p-6 dark:border-stroke-7 dark:bg-background-5">
                  <span className="text-sm tracking-[0.16em] text-primary-500">Step {index + 1}</span>
                  <h3 className="mt-5 text-2xl font-normal text-secondary dark:text-accent">{step.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-secondary/72 dark:text-accent/70">{step.text}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-6 lg:p-10">
              <span className="badge badge-green mb-5">{page.sections.supplierEyebrow}</span>
              <h2 className="max-w-[13ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                {page.sections.supplierTitle}
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">{page.sections.supplierText}</p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-6 lg:p-10">
              <span className="badge badge-green mb-5">{page.sections.buyerEyebrow}</span>
              <h2 className="max-w-[13ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                {page.sections.buyerTitle}
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">{page.sections.buyerText}</p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <RevealAnimation delay={0.12}>
            <ImagePlaceholder label="Message-centered collaboration placeholder" className="rounded-[30px] min-h-[320px] border border-stroke-3 dark:border-stroke-7" />
          </RevealAnimation>

          <RevealAnimation delay={0.22}>
            <div className="rounded-[30px] bg-white p-8 dark:bg-background-5 lg:p-10">
              <span className="badge badge-green mb-5">{page.sections.messagesEyebrow}</span>
              <h2 className="max-w-[12ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                {page.sections.messagesTitle}
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">{page.sections.messagesText}</p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container">
          <div className="max-w-3xl">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-5">{page.sections.outcomesEyebrow}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-3xl font-normal text-secondary dark:text-accent sm:text-4xl">{page.sections.outcomesTitle}</h2>
            </RevealAnimation>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {page.benefits.map((benefit, index) => (
              <RevealAnimation key={benefit.title} delay={0.18 + index * 0.05}>
                <div className="rounded-[24px] border border-stroke-3 bg-white p-6 dark:border-stroke-7 dark:bg-background-6">
                  <h3 className="text-xl font-normal text-secondary dark:text-accent">{benefit.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-secondary/72 dark:text-accent/70">{benefit.text}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <RevealAnimation delay={0.14}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-5 lg:p-10">
              <span className="badge badge-green mb-5">{page.sections.useCasesEyebrow}</span>
              <h2 className="max-w-[12ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                {page.sections.useCasesTitle}
              </h2>
            </div>
          </RevealAnimation>

          <div className="grid gap-4">
            {page.useCases.map((item, index) => (
              <RevealAnimation key={item} delay={0.18 + index * 0.05}>
                <div className="flex items-start gap-3 rounded-[20px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                  <PackageCheck className="mt-1 size-4 shrink-0 text-primary-500" />
                  <p className="text-sm leading-6 text-secondary/72 dark:text-accent/70">{item}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stroke-3 bg-background-12 py-20 dark:border-stroke-7 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-10 lg:grid-cols-[0.74fr_1.26fr]">
          <RevealAnimation delay={0.14}>
            <div className="rounded-[28px] bg-white p-8 dark:bg-background-6 lg:p-10">
              <span className="badge badge-green mb-5">{page.sections.faqEyebrow}</span>
              <h2 className="max-w-[12ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                {page.sections.faqTitle}
              </h2>
            </div>
          </RevealAnimation>

          <div className="space-y-4">
            <Accordion className="space-y-4" defaultValue="supplier-collaborate-faq-1" animationDelay={0.08}>
              {page.faqs.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`supplier-collaborate-faq-${index + 1}`}
                  className="rounded-[24px] border border-stroke-3 bg-white px-6 dark:border-stroke-7 dark:bg-background-6">
                  <AccordionTrigger
                    value={`supplier-collaborate-faq-${index + 1}`}
                    className="py-5 text-left text-lg font-normal text-secondary dark:text-accent">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent
                    value={`supplier-collaborate-faq-${index + 1}`}
                    className="pb-5 text-sm leading-6 text-secondary/72 dark:text-accent/70">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container">
          <RevealAnimation delay={0.1}>
            <div className="overflow-hidden rounded-[36px] border border-stroke-3 bg-[linear-gradient(135deg,#101828_0%,#1d2939_48%,#0f172a_100%)] p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.18)] dark:border-stroke-7 md:p-12 xl:p-16">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <span className="badge badge-white mb-5">{page.sections.outcomesEyebrow}</span>
                  <h2 className="max-w-[12ch] text-3xl font-normal leading-tight sm:text-4xl xl:text-5xl">
                    {page.sections.finalTitle}
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">{page.sections.finalText}</p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <LinkButton href={localizeHref('/contact-us', locale)} className="btn btn-primary btn-md">
                    {page.primaryCta}
                  </LinkButton>
                  <LinkButton href="https://portal.talepnet.com/sign-up" className="btn btn-white btn-md hover:btn-accent">
                    {page.sections.joinPortal}
                  </LinkButton>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </main>
  );
}
