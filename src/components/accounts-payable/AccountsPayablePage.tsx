'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { localizeHref } from '@/i18n/pathnames';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LinkButton from '@/components/ui/button/LinkButton';
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  FileSearch,
  Landmark,
  Radar,
  ReceiptText,
  ScanSearch,
} from 'lucide-react';

function ImagePlaceholder({
  label,
  className = '',
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex min-h-[220px] items-center justify-center bg-[linear-gradient(135deg,#f2f5fb_0%,#fbfcfe_100%)] dark:bg-[linear-gradient(135deg,#171d2a_0%,#0f141c_100%)] ${className}`}>
      <div className="rounded-full border border-dashed border-white/20 px-4 py-2 text-sm tracking-[0.14em] uppercase text-white/55 dark:border-accent/15 dark:text-accent/40">
        {label}
      </div>
    </div>
  );
}

const pillars = [
  {
    title: 'Verified purchasing context',
    text: 'Every invoice should point back to a real purchasing decision. Talepnet connects requests, approvals, quotations, purchase orders, and receiving history in one operational record.',
    icon: ClipboardCheck,
  },
  {
    title: 'Audit-ready process visibility',
    text: 'Workflow actions, approval steps, supplier decisions, and execution history stay tied together, making it easier to understand why a payable exists and how it moved through the organization.',
    icon: FileSearch,
  },
  {
    title: 'Unified finance and procurement control',
    text: 'Cost centers, fiscal years, budget visibility, supplier records, and procurement activity contribute to a cleaner AP environment where finance does not need to rebuild context manually.',
    icon: Landmark,
  },
];

export default function AccountsPayablePage() {
  const { locale, messages } = useI18n();
  const page = messages.solutions.accountsPayable;

  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0f172a_0%,#11283c_42%,#183b52_100%)] pt-32 text-white dark:bg-[linear-gradient(135deg,#09111c_0%,#102135_46%,#163a4d_100%)] md:pt-40 xl:pt-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.16),transparent_24%)]" />
        <div className="main-container relative z-10 pb-18 md:pb-22 xl:pb-24">
          <div className="grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">{page.badge}</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[12ch] text-4xl font-normal leading-tight text-white sm:text-5xl xl:text-6xl">
                  {page.title}
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-white/74 sm:text-lg">
                  {page.description}
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href={localizeHref('/contact-us', locale)} className="btn btn-primary btn-md">
                    {page.primaryCta}
                  </LinkButton>
                  <LinkButton
                    href="#ap-workflow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    {page.secondaryCta}
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/6 backdrop-blur-sm">
                  <ImagePlaceholder
                    label={page.heroPlaceholder}
                    className="min-h-[320px] sm:min-h-[390px]"
                  />
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {page.heroHighlights.map((item: string) => (
                    <div key={item} className="border-t border-white/12 py-3 text-sm leading-6 text-white/72">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="bg-white py-18 dark:bg-background-6 md:py-22 xl:py-24">
        <div className="main-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <RevealAnimation delay={0.12}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                {page.introEyebrow}
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                {page.introTitle}
              </h2>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.24}>
            <div className="space-y-5 border-l border-stroke-3 pl-6 dark:border-stroke-7 md:pl-8">
              {page.introParagraphs.map((paragraph: string) => (
                <p key={paragraph} className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                  {paragraph}
                </p>
              ))}
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container space-y-12">
          <div className="max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                {page.pillarsEyebrow}
              </span>
            </RevealAnimation>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            {page.pillars.map((item: { title: string; text: string }, index: number) => {
              const Icon = pillars[index]?.icon ?? ClipboardCheck;
              return (
                <RevealAnimation key={item.title} delay={0.18 + index * 0.06}>
                  <article className="space-y-5">
                    <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-500/15 dark:text-primary-300">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-2xl font-normal text-secondary dark:text-accent">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-secondary/72 dark:text-accent/70">
                        {item.text}
                      </p>
                    </div>
                  </article>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>

      <section id="ap-workflow" className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <RevealAnimation delay={0.12}>
            <div className="sticky top-28 rounded-[30px] bg-[linear-gradient(135deg,#11263a_0%,#194156_52%,#0d1824_100%)] p-8 text-white lg:p-10">
              <span className="text-tagline-1 inline-block text-white/62">
                {page.flowEyebrow}
              </span>
              <p className="mt-5 max-w-xl text-2xl font-normal leading-tight text-white lg:text-4xl">
                {page.flowTitle}
              </p>
            </div>
          </RevealAnimation>

          <div className="grid gap-4">
            {page.steps.map((step: { title: string; text: string }, index: number) => (
              <RevealAnimation key={step.title} delay={0.18 + index * 0.06}>
                <div className="grid gap-4 rounded-[24px] border border-stroke-3 bg-background-3 p-6 dark:border-stroke-7 dark:bg-background-5 md:grid-cols-[auto_1fr] md:items-start">
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-white text-sm text-secondary dark:bg-background-6 dark:text-accent">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-normal text-secondary dark:text-accent">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-secondary/72 dark:text-accent/70">
                      {step.text}
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-x-10 gap-y-8 lg:grid-cols-2">
          <div className="space-y-4 lg:col-span-2">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                {page.featuresEyebrow}
              </span>
            </RevealAnimation>
          </div>

          {page.features.map((item: { title: string; text: string }, index: number) => (
            <RevealAnimation key={item.title} delay={0.18 + index * 0.05}>
              <div className="border-t border-stroke-3 pt-5 dark:border-stroke-7">
                <h3 className="text-2xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70">
                  {item.text}
                </p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 xl:grid-cols-[1fr_1fr]">
          <RevealAnimation delay={0.12}>
            <div className="h-full rounded-[28px] border border-stroke-3 bg-background-3 p-8 dark:border-stroke-7 dark:bg-background-5 lg:p-10">
              <div className="flex items-center gap-3 text-secondary dark:text-accent">
                <BadgeCheck className="size-5 text-primary-500" />
                <span className="text-tagline-1">{page.strengthsEyebrow}</span>
              </div>
              <ul className="mt-6 grid gap-4">
                {page.strengths.map((item: string) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary-500" />
                    <span className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="h-full rounded-[28px] bg-[linear-gradient(135deg,#0f172a_0%,#17384b_52%,#0d1720_100%)] p-8 text-white lg:p-10">
              <div className="flex items-center gap-3 text-white">
                <Radar className="size-5 text-primary-300" />
                <span className="text-tagline-1 text-white/74">{page.futureEyebrow}</span>
              </div>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/74">
                {page.futureText}
              </p>
              <ul className="mt-6 grid gap-4 md:grid-cols-2">
                {page.futureReady.map((item: string) => (
                  <li key={item} className="flex items-start gap-3">
                    <ArrowRight className="mt-1 size-4 shrink-0 text-primary-300" />
                    <span className="text-sm leading-6 text-white/72">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.12}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                {page.whyEyebrow}
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                {page.whyTitle}
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-4">
            {page.whyMessages.map((item: string, index: number) => (
              <RevealAnimation key={item} delay={0.22 + index * 0.05}>
                <div className="flex items-start gap-3 border-t border-stroke-3 py-4 dark:border-stroke-7">
                  <ReceiptText className="mt-1 size-5 shrink-0 text-primary-500" />
                  <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">{item}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.12}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                {page.stakeholdersEyebrow}
              </span>
            </RevealAnimation>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {page.stakeholderBenefits.map((item: { title: string; text: string }, index: number) => (
              <RevealAnimation key={item.title} delay={0.2 + index * 0.05}>
                <div className="border-t border-stroke-3 pt-4 dark:border-stroke-7">
                  <h3 className="text-xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-secondary/72 dark:text-accent/70">
                    {item.text}
                  </p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.12}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                {page.useCasesEyebrow}
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <div className="rounded-[28px] bg-white p-8 dark:bg-background-6 lg:p-10">
                <ul className="grid gap-4">
                  {page.useCases.map((item: string) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary-500" />
                      <span className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.24}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-6 lg:p-10">
              <div className="flex items-center gap-3 text-secondary dark:text-accent">
                <ScanSearch className="size-5 text-primary-500" />
                <span className="text-tagline-1">{page.faqEyebrow}</span>
              </div>
              <Accordion className="mt-6 space-y-4" defaultValue="ap-faq-1" animationDelay={0.08}>
                {page.faqs.map((faq: { question: string; answer: string }, index: number) => (
                  <AccordionItem
                    key={faq.question}
                    value={`ap-faq-${index + 1}`}
                    className="rounded-[22px] border border-stroke-3 bg-background-3 px-6 dark:border-stroke-7 dark:bg-background-5">
                    <AccordionTrigger
                      value={`ap-faq-${index + 1}`}
                      className="flex w-full cursor-pointer items-center justify-between py-6"
                      titleClassName="flex-1 text-left text-lg font-normal text-secondary dark:text-accent"
                      iconType="arrow">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent
                      value={`ap-faq-${index + 1}`}
                      className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
        <div className="main-container">
          <RevealAnimation delay={0.12}>
            <div className="overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#0f172a_0%,#153b4a_55%,#0b1020_100%)] p-8 text-white md:p-12 xl:p-14">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-3xl">
                  <span className="text-tagline-1 inline-block text-white/65">
                    {page.finalEyebrow}
                  </span>
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                    {page.finalTitle}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <LinkButton href={localizeHref('/contact-us', locale)} className="btn btn-primary btn-md">
                    {page.primaryCta}
                  </LinkButton>
                  <LinkButton
                    href={localizeHref('/contact-us', locale)}
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    {page.finalSecondaryCta}
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
