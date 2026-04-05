'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { localizeHref } from '@/i18n/pathnames';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Image from 'next/image';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LinkButton from '@/components/ui/button/LinkButton';
import {
  ArrowRight,
  FileCheck2,
  FileSearch,
  FileText,
  Globe2,
  History,
  Mail,
  MapPinned,
  PackageCheck,
  Send,
  ShoppingCart,
  ShieldCheck,
  Wallet,
} from 'lucide-react';



const features = [
  {
    title: 'Approved Demand as the Starting Point',
    description: 'Source from real, workflow-approved purchasing demand instead of rebuilding requirements manually before every sourcing event.',
    icon: ShieldCheck,
  },
  {
    title: 'Purchase Form Workspace',
    description: 'Convert selected requests into purchase forms where buyers can manage sourcing activity, quotations, notes, totals, and supplier decisions in one place.',
    icon: FileText,
  },
  {
    title: 'Multi-Quotation Handling',
    description: 'Collect and compare multiple supplier quotations across the same purchase need to improve commercial evaluation and sourcing discipline.',
    icon: FileSearch,
  },
  {
    title: 'Manual and Portal-Based Quote Intake',
    description: 'Combine manually entered quotations with supplier portal responses inside the same sourcing flow.',
    icon: Globe2,
  },
  {
    title: 'RFQ Email Workflows',
    description: 'Send RFQs directly to suppliers from Talepnet, reducing fragmented outreach and keeping quote activity tied to the purchase record.',
    icon: Mail,
  },
  {
    title: 'RFQ Monitor',
    description: 'Track supplier-facing RFQ activity and import supplier portal quotes back into the sourcing workflow.',
    icon: Send,
  },
  {
    title: 'Supplier Portal Collaboration',
    description: 'Extend sourcing into a more structured supplier collaboration model through portal-enabled RFQ participation and linked order experiences.',
    icon: Globe2,
  },
  {
    title: 'Contracted Supplier Visibility',
    description: 'Surface suppliers with active contract coverage directly inside the sourcing process so negotiated commercial structures are easier to reuse.',
    icon: ShieldCheck,
  },
  {
    title: 'Previous Order Intelligence',
    description: 'Review historical supplier pricing and order context while sourcing, helping teams make stronger commercial decisions with less guesswork.',
    icon: History,
  },
  {
    title: 'Lowest-Price Selection Support',
    description: 'Accelerate sourcing decisions by selecting the lowest available quote lines where speed matters, while preserving buyer control.',
    icon: Wallet,
  },
  {
    title: 'Best vs Selected Total Visibility',
    description: 'Compare best available total against final selected total to make sourcing quality more visible before the process moves forward.',
    icon: FileCheck2,
  },
  {
    title: 'Purchase Approval Continuity',
    description: 'Route sourced purchases into purchase approval when the workflow design requires financial or managerial review before order placement.',
    icon: ShieldCheck,
  },
  {
    title: 'Purchase Order Execution',
    description: 'Move cleanly from sourced and approved purchases into purchase order creation and supplier-facing execution.',
    icon: ShoppingCart,
  },
  {
    title: 'Supplier Communication at Order Stage',
    description: 'Communicate purchase orders through structured email, secure links, and portal-linked collaboration instead of disconnected follow-up.',
    icon: Mail,
  },
  {
    title: 'Delivery and Branch Context',
    description: 'Include delivery branch details in purchase order execution so downstream fulfillment and receiving remain aligned with the actual operational destination.',
    icon: MapPinned,
  },
  {
    title: 'Receiving Continuity',
    description: 'Carry the order through to receiving so procurement teams can see not only what was sourced and ordered, but what was actually received.',
    icon: PackageCheck,
  },
];

const chainItems = [
  { title: 'İç Talep', icon: FileText, color: 'text-blue-500', bg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400' },
  { title: 'Tedarikçi Seçimi', icon: Globe2, color: 'text-indigo-500', bg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400' },
  { title: 'Teklif Yönetimi', icon: FileSearch, color: 'text-violet-500', bg: 'bg-violet-500/10 text-violet-600 dark:text-violet-400' },
  { title: 'Satın Alma Onayı', icon: ShieldCheck, color: 'text-emerald-500', bg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' },
  { title: 'Sipariş Oluşturma', icon: ShoppingCart, color: 'text-amber-500', bg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400' },
];

export default function SourceToOrderPage() {
  const { locale, messages } = useI18n();
  const page = messages.solutions.sourceToOrder;

  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_28%),linear-gradient(180deg,#f3fbf8_0%,#ffffff_52%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container pb-16 md:pb-20 xl:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
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
                    href="#source-to-order-flow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    {page.secondaryCta}
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="grid gap-4">
                <style>{`
                  @property --glow-angle {
                    syntax: '<angle>';
                    initial-value: 0deg;
                    inherits: false;
                  }
                  @keyframes revolve-border {
                    100% { --glow-angle: 360deg; }
                  }
                  .animate-border-glow {
                    animation: revolve-border 3.5s linear infinite;
                    background: conic-gradient(from var(--glow-angle) at 50% 50%, transparent 0%, transparent 80%, rgba(168,85,247,0.8) 96%, rgba(255,255,255,1) 100%);
                  }
                `}</style>
                <div className="relative overflow-hidden rounded-[30px] p-[2px] bg-stroke-3/50 dark:bg-white/5">
                  {/* Shooting Star Trace Layer */}
                  <div className="absolute inset-0 animate-border-glow pointer-events-none" />
                  
                  {/* Inner Image (Masked) */}
                  <div className="relative z-10 h-full w-full overflow-hidden rounded-[28px] bg-white dark:bg-background-6">
                    <Image src="/images/source-to-order-hero.jpg" alt="Source to Order Overview" width={1200} height={800} className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.heroHighlights.map((item: string) => (
                    <div key={item} className="border-t border-stroke-3 py-3 text-sm leading-6 text-secondary/72 dark:border-stroke-7 dark:text-accent/70">
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
        <div className="main-container grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
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
              <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                {page.introText}
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-10 lg:grid-cols-3">
          {page.valueStatements.map((item: { title: string; text: string }, index: number) => {
            // Konuya göre ikon eşleşmesi
            const icons = [Globe2, ShoppingCart, ShieldCheck];
            const DynamicIcon = icons[index] || ShoppingCart;
            
            return (
              <RevealAnimation key={item.title} delay={0.18 + index * 0.06}>
                <article className="space-y-5">
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-500/15 dark:text-primary-300">
                    <DynamicIcon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-secondary/72 dark:text-accent/70">{item.text}</p>
                  </div>
                </article>
              </RevealAnimation>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[28px] bg-background-3 p-8 dark:bg-background-5 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                {page.summaryEyebrow}
              </span>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                {page.summaryText}
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="relative flex h-[400px] overflow-hidden rounded-[28px]">
              {/* Fade masks blending smoothly with the page background */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-white to-transparent dark:from-background-6" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-white to-transparent dark:from-background-6" />

              <style>{`
                @keyframes verticalMarquee {
                  from { transform: translateY(0); }
                  to { transform: translateY(-50%); }
                }
                .animate-vertical-marquee {
                  animation: verticalMarquee 15s linear infinite;
                }
              `}</style>

              <div className="flex w-full animate-vertical-marquee flex-col px-2 lg:px-4">
                <div className="flex flex-col gap-4 pb-4">
                  {chainItems.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={`og-${i}`}
                        className="flex flex-row items-center gap-5 rounded-[22px] border border-stroke-3 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] dark:border-stroke-7 dark:bg-background-5">
                        <div className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${item.bg}`}>
                          <Icon className="size-6" />
                        </div>
                        <div className="flex flex-col">
                          <span className="mb-0.5 text-xs font-semibold tracking-wider text-secondary/50 dark:text-accent/40 uppercase">
                            ADIM 0{(i % 5) + 1}
                          </span>
                          <span className="text-lg font-medium text-secondary dark:text-accent">{item.title}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-4 pb-4">
                  {chainItems.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={`clone-${i}`}
                        className="flex flex-row items-center gap-5 rounded-[22px] border border-stroke-3 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] dark:border-stroke-7 dark:bg-background-5">
                        <div className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${item.bg}`}>
                          <Icon className="size-6" />
                        </div>
                        <div className="flex flex-col">
                          <span className="mb-0.5 text-xs font-semibold tracking-wider text-secondary/50 dark:text-accent/40 uppercase">
                            ADIM 0{(i % 5) + 1}
                          </span>
                          <span className="text-lg font-medium text-secondary dark:text-accent">{item.title}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
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

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {page.features.map((feature: { title: string; description: string }, index: number) => {
              const Icon = features[index]?.icon ?? ShieldCheck;
              return (
                <RevealAnimation key={feature.title} delay={0.2 + index * 0.03}>
                  <article className="rounded-[26px] border border-stroke-3 bg-white p-7 dark:border-stroke-7 dark:bg-background-6">
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

      <section id="source-to-order-flow" className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
        <div className="main-container">
          <div className="mb-12 max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-accent/65">
                {page.flowEyebrow}
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-accent lg:text-heading-3">
                {page.flowTitle}
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {page.steps.map((step: { title: string; text: string }, index: number) => (
              <RevealAnimation key={step.title} delay={0.24 + index * 0.08}>
                <SpotlightCard
                  as="article"
                  spotlightColor="rgba(255, 255, 255, 0.08)"
                  className="rounded-[24px] border border-white/10 bg-white/5 p-7"
                >
                  <span className="mb-5 inline-flex h-8 items-center rounded-full border border-white/10 px-3 text-sm text-accent/70">
                    {locale === 'tr' ? 'Adım' : 'Step'} {index + 1}
                  </span>
                  <h3 className="mb-3 text-2xl font-normal text-accent">{step.title}</h3>
                  <p className="text-base leading-7 text-accent/70">{step.text}</p>
                </SpotlightCard>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <SpotlightCard
              as="div"
              spotlightColor="rgba(255, 255, 255, 0.08)"
              className="rounded-[30px] bg-[linear-gradient(135deg,#10222d_0%,#17384b_52%,#0d1720_100%)] p-8 text-white lg:p-10"
            >
              <span className="text-tagline-1 inline-block text-white/62">
                {page.whyEyebrow}
              </span>
              <p className="mt-5 max-w-2xl text-2xl font-normal leading-tight text-white lg:text-4xl">
                {page.whyTitle}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
                {page.whyText}
              </p>
            </SpotlightCard>
          </RevealAnimation>

          <div className="grid gap-4">
            {page.whyMessages.map((item: string, index: number) => (
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
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                {page.benefitsEyebrow}
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                {page.benefitsTitle}
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {page.benefits.map((benefit: { title: string; text: string }, index: number) => (
              <RevealAnimation key={benefit.title} delay={0.22 + index * 0.06}>
                <div className="rounded-[22px] bg-background-3 p-6 dark:bg-background-5">
                  <h3 className="text-xl font-normal text-secondary dark:text-accent">{benefit.title}</h3>
                  <p className="mt-2 text-base leading-7 text-secondary/72 dark:text-accent/70">{benefit.text}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <RevealAnimation delay={0.12}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="space-y-4 p-8 lg:p-10">
                <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                  {page.useCasesEyebrow}
                </span>
                <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                  {page.useCasesText}
                </p>
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

          <RevealAnimation delay={0.18}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="space-y-5 p-8 lg:p-10">
                <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                  {page.faqEyebrow}
                </span>
                <Accordion className="space-y-4" defaultValue="source-to-order-faq-1" animationDelay={0.08}>
                  {page.faqs.map((faq: { question: string; answer: string }, index: number) => (
                    <AccordionItem
                      key={faq.question}
                      value={`source-to-order-faq-${index + 1}`}
                      className="rounded-[22px] border border-stroke-3 bg-background-3 px-6 dark:border-stroke-7 dark:bg-background-5">
                      <AccordionTrigger
                        value={`source-to-order-faq-${index + 1}`}
                        className="flex w-full cursor-pointer items-center justify-between py-6"
                        titleClassName="flex-1 text-left text-lg font-normal text-secondary dark:text-accent"
                        iconType="arrow">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent
                        value={`source-to-order-faq-${index + 1}`}
                        className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
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
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">{page.finalTitle}</p>
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
