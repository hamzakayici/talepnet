'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { localizeHref } from '@/i18n/pathnames';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LinkButton from '@/components/ui/button/LinkButton';
import {
  ArrowRight,
  Check,
  CircleDollarSign,
  CircleGauge,
  ClipboardList,
  FileSearch,
  Gauge,
  LayoutDashboard,
  LineChart,
  Network,
  PieChart,
  ShieldCheck,
  TrendingUp,
  Users,
  Wallet,
} from 'lucide-react';

function ImagePlaceholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`flex min-h-[220px] items-center justify-center bg-[linear-gradient(135deg,#f5f8fc_0%,#fbfcfe_100%)] dark:bg-[linear-gradient(135deg,#171d24_0%,#0f141a_100%)] ${className}`}>
      <div className="rounded-full border border-dashed border-secondary/20 px-4 py-2 text-sm tracking-[0.14em] text-secondary/45 dark:border-accent/15 dark:text-accent/40">
        {label}
      </div>
    </div>
  );
}

const featureIcons = [
  CircleDollarSign,
  LineChart,
  Gauge,
  Wallet,
  Network,
  ClipboardList,
  Users,
  PieChart,
  TrendingUp,
  Users,
  FileSearch,
  LayoutDashboard,
  ShieldCheck,
  Gauge,
  CircleGauge,
  LineChart,
  Gauge,
  ShieldCheck,
  ClipboardList,
  LayoutDashboard,
];

export default function SpendInsightsPage() {
  const { locale, messages } = useI18n();
  const page = messages.product.spendInsights;

  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_28%),linear-gradient(180deg,#f6faff_0%,#ffffff_52%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container relative z-10 pb-16 md:pb-20 xl:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">{page.badge}</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[13ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
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
                    href="#spend-visibility"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    {page.secondaryCta}
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                  <ImagePlaceholder label={page.heroPlaceholder} className="min-h-[320px] sm:min-h-[390px]" />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {page.heroCards.map((card) => (
                    <div
                      key={card.eyebrow}
                      className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                      <p className="text-sm tracking-[0.14em] text-secondary/45 dark:text-accent/45">{card.eyebrow}</p>
                      <p className="mt-3 text-lg font-normal text-secondary dark:text-accent">{card.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>

        <div className="border-y border-stroke-3 bg-white/70 backdrop-blur-sm dark:border-stroke-7 dark:bg-background-6/80">
          <div className="main-container grid gap-8 py-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
            <RevealAnimation delay={0.12}>
              <p className="max-w-xl text-base leading-7 text-secondary/75 dark:text-accent/70">
                {page.heroIntro}
              </p>
            </RevealAnimation>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {page.heroHighlights.map((item: string, index: number) => (
                <RevealAnimation key={item} delay={0.15 + index * 0.05}>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-500/15 dark:text-primary-300">
                      <Check className="size-4" />
                    </span>
                    <p className="text-sm leading-6 text-secondary/75 dark:text-accent/70">{item}</p>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <RevealAnimation delay={0.14}>
            <div className="rounded-[28px] bg-background-3 p-8 dark:bg-background-7 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">{page.sections.introEyebrow}</span>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">{page.sections.introText}</p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.22}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="space-y-4 p-8 lg:p-10">
                  <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">{page.sections.problemEyebrow}</span>
                  <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">{page.sections.problemText}</p>
                  <ul className="space-y-4">
                    {page.painPoints.map((point: string) => (
                      <li key={point} className="flex items-start gap-3">
                        <ArrowRight className="mt-1 size-4 shrink-0 text-primary-500" />
                        <span className="text-sm leading-6 text-secondary/72 dark:text-accent/70">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <ImagePlaceholder label={page.sections.problemPlaceholder} className="min-h-[280px] lg:min-h-full" />
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32">
        <div className="main-container space-y-12">
          <div className="max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">{page.sections.featuresEyebrow}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">{page.sections.featuresTitle}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.22}>
              <p className="max-w-3xl text-base leading-7 text-secondary/72 dark:text-accent/70">{page.sections.featuresText}</p>
            </RevealAnimation>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {page.features.map((feature: { title: string; description: string }, index: number) => {
              const Icon = featureIcons[index] ?? featureIcons[0];
              return (
                <RevealAnimation key={feature.title} delay={0.2 + index * 0.03}>
                  <article className="rounded-[26px] border border-stroke-3 bg-background-3 p-7 dark:border-stroke-7 dark:bg-background-5">
                    <span className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl bg-primary-100 text-primary-600 dark:bg-primary-500/15 dark:text-primary-300">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mb-3 text-2xl font-normal text-secondary dark:text-accent">{feature.title}</h3>
                    <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">{feature.description}</p>
                  </article>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>

      <section id="spend-visibility" className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
        <div className="main-container">
          <div className="mb-12 max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-accent/65">{page.sections.flowEyebrow}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-accent lg:text-heading-3">{page.sections.flowTitle}</h2>
            </RevealAnimation>
          </div>
          <div className="grid gap-5 lg:grid-cols-4">
            {page.steps.map((step: { title: string; text: string }, index: number) => (
              <RevealAnimation key={step.title} delay={0.24 + index * 0.08}>
                <article className="rounded-[24px] border border-white/10 bg-white/5 p-7">
                  <span className="mb-5 inline-flex h-8 items-center rounded-full border border-white/10 px-3 text-sm text-accent/70">
                    {page.sections.stepLabel} {index + 1}
                  </span>
                  <h3 className="mb-3 text-2xl font-normal text-accent">{step.title}</h3>
                  <p className="text-base leading-7 text-accent/70">{step.text}</p>
                </article>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#10222d_0%,#17384b_52%,#0d1720_100%)] p-8 text-white lg:p-10">
              <span className="text-tagline-1 inline-block text-white/62">{page.sections.budgetEyebrow}</span>
              <p className="mt-5 max-w-2xl text-2xl font-normal leading-tight text-white lg:text-4xl">{page.sections.budgetTitle}</p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">{page.sections.budgetText}</p>
            </div>
          </RevealAnimation>
          <div className="grid gap-4">
            {page.budgetMessages.map((item: string, index: number) => (
              <RevealAnimation key={item} delay={0.18 + index * 0.06}>
                <div className="rounded-[22px] border border-stroke-3 bg-white p-6 dark:border-stroke-7 dark:bg-background-6">
                  <p className="text-lg font-normal text-secondary dark:text-accent">{item}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 xl:grid-cols-[0.96fr_1.04fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">{page.sections.supplierEyebrow}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">{page.sections.supplierTitle}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.22}>
              <p className="max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70">{page.sections.supplierText}</p>
            </RevealAnimation>
          </div>
          <div className="grid gap-4">
            {page.supplierMessages.map((item: string, index: number) => (
              <RevealAnimation key={item} delay={0.22 + index * 0.06}>
                <div className="rounded-[22px] bg-background-3 p-6 dark:bg-background-5">
                  <p className="text-lg font-normal text-secondary dark:text-accent">{item}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <RevealAnimation delay={0.12}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="space-y-4 p-8 lg:p-10">
                <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">{page.sections.benefitsEyebrow}</span>
                <div className="grid gap-4 md:grid-cols-2">
                  {page.benefits.map((benefit: { title: string; text: string }) => (
                    <div key={benefit.title} className="rounded-[18px] bg-background-3 p-5 dark:bg-background-5">
                      <h3 className="text-xl font-normal text-secondary dark:text-accent">{benefit.title}</h3>
                      <p className="mt-2 text-base leading-7 text-secondary/72 dark:text-accent/70">{benefit.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="space-y-5 p-8 lg:p-10">
                <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">{page.sections.useCasesEyebrow}</span>
                <ul className="grid gap-4">
                  {page.useCases.map((item: string) => (
                    <li key={item} className="flex items-start gap-3">
                      <ArrowRight className="mt-1 size-4 shrink-0 text-primary-500" />
                      <span className="text-sm leading-6 text-secondary/72 dark:text-accent/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32">
        <div className="main-container">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#17324d_0%,#1f5473_52%,#102033_100%)] p-8 text-white lg:p-10">
              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <span className="text-tagline-1 inline-block text-white/65">{page.sections.metricsEyebrow}</span>
                  <h2 className="mt-4 text-3xl font-normal leading-tight text-white lg:text-4xl">{page.sections.metricsTitle}</h2>
                  <p className="mt-4 max-w-xl text-base leading-7 text-white/75">{page.sections.metricsText}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {page.metrics.map((metric: string) => (
                    <div key={metric} className="rounded-[18px] border border-white/10 bg-white/5 p-4">
                      <p className="text-sm leading-6 text-white/82">{metric}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
        <div className="main-container grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">{page.sections.faqEyebrow}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">{page.sections.faqTitle}</h2>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.24}>
            <Accordion className="space-y-4" defaultValue="spend-insights-faq-1" animationDelay={0.08}>
              {page.faqs.map((faq: { question: string; answer: string }, index: number) => (
                <AccordionItem
                  key={faq.question}
                  value={`spend-insights-faq-${index + 1}`}
                  className="rounded-[22px] border border-stroke-3 bg-white px-6 dark:border-stroke-7 dark:bg-background-6">
                  <AccordionTrigger
                    value={`spend-insights-faq-${index + 1}`}
                    className="flex w-full cursor-pointer items-center justify-between py-6"
                    titleClassName="flex-1 text-left text-lg font-normal text-secondary dark:text-accent"
                    iconType="arrow">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    value={`spend-insights-faq-${index + 1}`}
                    className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
        <div className="main-container">
          <RevealAnimation delay={0.12}>
            <div className="overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#0f172a_0%,#153b4a_55%,#0b1020_100%)] p-8 text-white md:p-12 xl:p-14">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-3xl">
                  <span className="text-tagline-1 inline-block text-white/65">{page.sections.finalEyebrow}</span>
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">{page.sections.finalTitle}</p>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">{page.sections.finalText}</p>
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
