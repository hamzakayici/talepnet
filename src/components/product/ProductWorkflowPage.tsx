'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { localizeHref } from '@/i18n/pathnames';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { ArrowRight, Check, LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

type ProductWorkflowContent = {
  badge: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  heroPlaceholder: string;
  heroHighlights: string[];
  problemEyebrow: string;
  problemText: string;
  painPoints: string[];
  introEyebrow: string;
  introTitle: string;
  introText: string;
  introPlaceholder: string;
  featuresEyebrow: string;
  featuresTitle: string;
  features: { title: string; description: string }[];
  flowEyebrow: string;
  flowTitle: string;
  steps: { title: string; text: string }[];
  benefitsEyebrow: string;
  benefitsTitle: string;
  benefits: { title: string; text: string }[];
  useCasesEyebrow: string;
  useCases: string[];
  metricsEyebrow: string;
  metrics: string[];
  modulesEyebrow: string;
  modulesTitle: string;
  modulesText: string;
  modules: string[];
  faqEyebrow: string;
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  finalEyebrow: string;
  finalTitle: string;
  finalText: string;
  testimonialEyebrow?: string;
  testimonialQuote?: string;
  testimonialRole?: string;
  testimonialPlaceholder?: string;
  rolesEyebrow?: string;
  rolesTitle?: string;
  roles?: { title: string; text: string }[];
  heroImage?: string;
  introImage?: string;
  testimonialImage?: string;
};

function ImagePlaceholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`flex min-h-[220px] items-center justify-center bg-[linear-gradient(135deg,#edf4f7_0%,#f8fbfc_100%)] dark:bg-[linear-gradient(135deg,#1b2530_0%,#10161d_100%)] ${className}`}>
      <div className="rounded-full border border-dashed border-secondary/20 px-4 py-2 text-sm tracking-[0.14em] text-secondary/45 dark:border-accent/15 dark:text-accent/40">
        {label}
      </div>
    </div>
  );
}

type Props = {
  page: ProductWorkflowContent;
  featureIcons: LucideIcon[];
  heroVisual?: React.ReactNode;
  introVisual?: React.ReactNode;
};

export default function ProductWorkflowPage({ page, featureIcons, heroVisual, introVisual }: Props) {
  const { locale } = useI18n();

  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(24,138,141,0.24),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_30%),linear-gradient(180deg,#f4fbfb_0%,#ffffff_52%,#f7f8fc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container relative z-10 pb-16 md:pb-20 xl:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">{page.badge}</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[14ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
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
                    href="#how-it-works"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    {page.secondaryCta}
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div
                className={
                  page.heroImage || heroVisual
                    ? 'overflow-hidden rounded-[28px]'
                    : 'overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5'
                }>
                {heroVisual ? (
                  heroVisual
                ) : page.heroImage ? (
                  <Image src={page.heroImage} alt="Dashboard Overview" width={1200} height={800} className="h-full w-full object-cover" />
                ) : (
                  <ImagePlaceholder label={page.heroPlaceholder} className="min-h-[320px] sm:min-h-[420px]" />
                )}
              </div>
            </RevealAnimation>
          </div>
        </div>

        <div className="border-y border-stroke-3 bg-white/70 backdrop-blur-sm dark:border-stroke-7 dark:bg-background-6/80">
          <div className="main-container grid gap-4 py-6 md:grid-cols-2 xl:grid-cols-4">
            {page.heroHighlights.map((item, index) => (
              <RevealAnimation key={item} delay={0.15 + index * 0.08}>
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
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 lg:grid-cols-[1fr_1.08fr]">
          <RevealAnimation delay={0.15}>
            <div className="rounded-[28px] bg-background-3 p-8 dark:bg-background-7 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                {page.problemEyebrow}
              </span>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">{page.problemText}</p>
              <ul className="mt-8 space-y-4">
                {page.painPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary-500" />
                    <span className="text-sm leading-6 text-secondary/72 dark:text-accent/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.25}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[28px]">
              {/* Masked Background & Border */}
              <div 
                className="pointer-events-none absolute inset-0 z-0 rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6"
                style={{
                  maskImage: 'linear-gradient(to top, transparent, black 45%, black)',
                  WebkitMaskImage: 'linear-gradient(to top, transparent, black 45%, black)'
                }}
              />
              
              <div className="relative z-10 space-y-5 p-8 lg:p-10">
                <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                  {page.introEyebrow}
                </span>
                <h2 className="text-3xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-4">
                  {page.introTitle}
                </h2>
                <p className="max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70">{page.introText}</p>
              </div>
              
              <div className="relative z-10 w-full">
                {introVisual ? (
                  introVisual
                ) : page.introImage ? (
                  <Image src={page.introImage} alt="Workflow Diagram" width={800} height={600} className="h-full w-full object-cover" />
                ) : (
                  <ImagePlaceholder label={page.introPlaceholder} className="min-h-[260px] sm:min-h-[320px]" />
                )}
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32">
        <div className="main-container space-y-12">
          <div className="max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                {page.featuresEyebrow}
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                {page.featuresTitle}
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {page.features.map((feature, index) => {
              const Icon = featureIcons[index] ?? featureIcons[0];
              return (
                <RevealAnimation key={feature.title} delay={0.22 + index * 0.06}>
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

      <section id="how-it-works" className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
        <div className="main-container">
          <div className="mb-12 max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-accent/65">{page.flowEyebrow}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-accent lg:text-heading-3">{page.flowTitle}</h2>
            </RevealAnimation>
          </div>
          <div className="grid gap-5 lg:grid-cols-4">
            {page.steps.map((step, index) => (
              <RevealAnimation key={step.title} delay={0.24 + index * 0.08}>
                <SpotlightCard
                  as="article"
                  spotlightColor="rgba(255, 255, 255, 0.05)"
                  className="rounded-[24px] border border-white/10 bg-white/5 p-7 transition-colors hover:border-white/20 hover:bg-white/10"
                >
                  <span className="mb-5 inline-flex h-8 items-center rounded-full border border-white/10 px-3 text-sm text-accent/70">Adım {index + 1}</span>
                  <h3 className="mb-3 text-2xl font-normal text-accent">{step.title}</h3>
                  <p className="text-base leading-7 text-accent/70">{step.text}</p>
                </SpotlightCard>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <RevealAnimation delay={0.1}>
                <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">{page.benefitsEyebrow}</span>
              </RevealAnimation>
              <RevealAnimation delay={0.18}>
                <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">{page.benefitsTitle}</h2>
              </RevealAnimation>
            </div>
            <div className="grid gap-4">
              {page.benefits.map((benefit, index) => (
                <RevealAnimation key={benefit.title} delay={0.24 + index * 0.07}>
                  <div className="rounded-[22px] bg-white p-6 dark:bg-background-6">
                    <h3 className="text-xl font-normal text-secondary dark:text-accent">{benefit.title}</h3>
                    <p className="mt-2 text-base leading-7 text-secondary/72 dark:text-accent/70">{benefit.text}</p>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            <RevealAnimation delay={0.2}>
              <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
                <div className="space-y-4 p-8 lg:p-10">
                  <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">{page.useCasesEyebrow}</span>
                  <ul className="grid gap-4 md:grid-cols-2">
                    {page.useCases.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <ArrowRight className="mt-1 size-4 shrink-0 text-primary-500" />
                        <span className="text-sm leading-6 text-secondary/72 dark:text-accent/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.28}>
              <div className="rounded-[28px] bg-[linear-gradient(135deg,#12393a_0%,#18595b_50%,#10292f_100%)] p-8 text-white lg:p-10">
                <span className="text-tagline-1 inline-block text-white/65">{page.metricsEyebrow}</span>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {page.metrics.map((metric) => (
                    <div key={metric} className="rounded-[18px] border border-white/10 bg-white/5 p-4">
                      <p className="text-sm leading-6 text-white/82">{metric}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <RevealAnimation delay={0.12}>
            <div className="space-y-5">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">{page.modulesEyebrow}</span>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">{page.modulesTitle}</h2>
              <p className="max-w-2xl text-base leading-7 text-secondary/72 dark:text-accent/70">{page.modulesText}</p>
            </div>
          </RevealAnimation>
          <div className="grid gap-4 sm:grid-cols-2">
            {page.modules.map((module, index) => (
              <RevealAnimation key={module} delay={0.2 + index * 0.07}>
                <div className="rounded-[24px] border border-stroke-3 bg-background-3 p-6 dark:border-stroke-7 dark:bg-background-5">
                  <p className="text-lg font-normal text-secondary dark:text-accent">{module}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {page.testimonialQuote ? (
        <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
          <div className="main-container">
            <RevealAnimation delay={0.12}>
              <div className="overflow-hidden rounded-[32px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
                <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
                  {page.testimonialImage ? (
                    <div className="relative min-h-[280px] w-full lg:min-h-full">
                      <Image src={page.testimonialImage} alt="User Testimonial" fill className="object-cover" />
                    </div>
                  ) : (
                    <ImagePlaceholder label={page.testimonialPlaceholder || 'Testimonial placeholder'} className="min-h-[280px] lg:min-h-full" />
                  )}
                  <div className="flex flex-col justify-center p-8 lg:p-12">
                    <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">{page.testimonialEyebrow}</span>
                    <blockquote className="mt-5 text-2xl font-normal leading-tight text-secondary dark:text-accent lg:text-3xl">“{page.testimonialQuote}”</blockquote>
                    <p className="mt-6 text-sm tracking-[0.16em] uppercase text-secondary/55 dark:text-accent/55">{page.testimonialRole}</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </section>
      ) : null}

      {page.roles ? (
        <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
          <div className="main-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <RevealAnimation delay={0.12}>
              <div className="space-y-5">
                <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">{page.rolesEyebrow}</span>
                <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">{page.rolesTitle}</h2>
              </div>
            </RevealAnimation>
            <div className="grid gap-4 md:grid-cols-2">
              {page.roles.map((role, index) => (
                <RevealAnimation key={role.title} delay={0.2 + index * 0.07}>
                  <div className="rounded-[22px] bg-white p-6 dark:bg-background-6">
                    <h3 className="text-xl font-normal text-secondary dark:text-accent">{role.title}</h3>
                    <p className="mt-2 text-base leading-7 text-secondary/72 dark:text-accent/70">{role.text}</p>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32">
        <div className="main-container grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">{page.faqEyebrow}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">{page.faqTitle}</h2>
            </RevealAnimation>
          </div>
          <div className="space-y-4">
            {page.faqs.map((faq, index) => (
              <RevealAnimation key={faq.question} delay={0.22 + index * 0.06}>
                <details className="group rounded-[22px] border border-stroke-3 bg-background-3 p-6 dark:border-stroke-7 dark:bg-background-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-normal text-secondary dark:text-accent">
                    <span>{faq.question}</span>
                    <span className="text-secondary/45 transition-transform group-open:rotate-45 dark:text-accent/45">+</span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-secondary/72 dark:text-accent/70">{faq.answer}</p>
                </details>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
        <div className="main-container">
          <RevealAnimation delay={0.12}>
            <div className="overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,#10222d_0%,#17354a_48%,#0c1823_100%)] px-8 py-10 text-white lg:px-12 lg:py-14">
              <span className="text-tagline-1 inline-block text-white/62">{page.finalEyebrow}</span>
              <div className="mt-6 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
                <div>
                  <h2 className="max-w-[13ch] text-4xl font-normal leading-tight text-white lg:text-heading-3">{page.finalTitle}</h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-white/72">{page.finalText}</p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <LinkButton href={localizeHref('/contact-us', locale)} className="btn btn-primary btn-md">
                    {page.primaryCta}
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
