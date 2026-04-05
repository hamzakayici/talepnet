'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { localizeHref } from '@/i18n/pathnames';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  ClipboardList,
  FileCheck2,
  FileSearch,
  GitBranch,
  Mail,
  PackageCheck,
  Receipt,
  Route,
  ShieldCheck,
  ShoppingCart,
  Wallet,
} from 'lucide-react';

const capabilities = [
  {
    title: 'Structured Request Creation',
    description:
      'Capture internal demand through controlled request workflows instead of fragmented emails, spreadsheets, or informal follow-up.',
    icon: ClipboardList,
  },
  {
    title: 'Cost Center-Aware Requests',
    description:
      'Bring financial ownership into the process early by attaching cost center context at request stage.',
    icon: Wallet,
  },
  {
    title: 'Role-Based Approval Routing',
    description:
      'Route requests through the right approvers based on organizational structure, responsibility, and workflow design.',
    icon: GitBranch,
  },
  {
    title: 'Multi-Level Request Approvals',
    description:
      'Support approval processes that can reflect real organizational governance before demand moves into purchasing.',
    icon: ShieldCheck,
  },
  {
    title: 'Workflow Designer Flexibility',
    description:
      'Configure request, approval, purchasing, warehouse, purchase approval, purchase order, and receiving paths through a visual workflow model.',
    icon: Route,
  },
  {
    title: 'Purchasing Queue Continuity',
    description:
      'Carry approved demand directly into purchasing instead of forcing teams to recreate the requirement manually.',
    icon: ShoppingCart,
  },
  {
    title: 'Purchase Form Workspace',
    description:
      'Convert approved requests into purchase forms where buyers can manage quotations, sourcing notes, supplier comparisons, and commercial decisions.',
    icon: FileSearch,
  },
  {
    title: 'Supplier Quotation Handling',
    description:
      'Collect and compare multiple quotations across suppliers to improve sourcing discipline and commercial evaluation.',
    icon: FileCheck2,
  },
  {
    title: 'Contracted Supplier Visibility',
    description:
      'Surface contracted suppliers and previous order intelligence during sourcing so procurement teams can make better-informed supplier decisions.',
    icon: ShieldCheck,
  },
  {
    title: 'RFQ and Supplier Collaboration',
    description:
      'Send RFQs by email, monitor supplier responses, and support portal-enabled quote participation within the same sourcing flow.',
    icon: Mail,
  },
  {
    title: 'Purchase Approval Where Needed',
    description:
      'Route sourced purchases into purchase approval before order placement when the workflow requires additional governance.',
    icon: FileCheck2,
  },
  {
    title: 'Purchase Order Execution',
    description:
      'Move from sourcing and approval into supplier-facing purchase order workflows without breaking the process chain.',
    icon: ShoppingCart,
  },
  {
    title: 'Supplier Communication Connected to Orders',
    description:
      'Keep order communication tied to the workflow through structured email, secure links, and portal-linked collaboration.',
    icon: Mail,
  },
  {
    title: 'Receiving from Placed Orders',
    description:
      'Start receiving directly from placed-order context so delivery recording reflects real purchasing commitments.',
    icon: PackageCheck,
  },
  {
    title: 'Partial and Complete Receipt Handling',
    description:
      'Record actual delivered quantities with clearer visibility into remaining quantities and completion status.',
    icon: Receipt,
  },
  {
    title: 'Receipt Traceability',
    description:
      'Preserve receiving references, receipt numbering, and workflow history so operational closure remains auditable and easy to review.',
    icon: PackageCheck,
  },
];

export default function RequestToReceiptPage() {
  const { locale, messages } = useI18n();
  const page = messages.solutions.requestToReceipt;

  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_28%),linear-gradient(180deg,#f8fff8_0%,#ffffff_52%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container pb-16 md:pb-20 xl:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
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
                <p className="mt-6 max-w-2xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  {page.description}
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href={localizeHref('/contact-us', locale)} className="btn btn-primary btn-md">
                    {page.primaryCta}
                  </LinkButton>
                  <LinkButton
                    href={localizeHref('/purchase-requests', locale)}
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent"
                  >
                    {page.secondaryCta}
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.35} direction="right">
              <div className="rounded-[30px] border border-stroke-3 bg-background-3 p-8 dark:border-stroke-7 dark:bg-background-5 lg:p-10">
                <Route className="size-10 text-primary-500" />
                <p className="mt-6 text-2xl font-normal leading-tight text-secondary dark:text-accent">
                  {page.heroPanelTitle}
                </p>
                <p className="mt-4 text-base leading-7 text-secondary/72 dark:text-accent/70">
                  {page.heroPanelText}
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-6 lg:grid-cols-3">
          {page.valueStatements.map((item: { title: string; text: string }, index: number) => (
            <RevealAnimation key={item.title} delay={0.14 + index * 0.06}>
              <article className="rounded-[28px] border border-stroke-3 bg-white p-7 dark:border-stroke-7 dark:bg-background-6">
                <h2 className="text-2xl font-normal text-secondary dark:text-accent">{item.title}</h2>
                <p className="mt-4 text-base leading-7 text-secondary/72 dark:text-accent/70">{item.text}</p>
              </article>
            </RevealAnimation>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="max-w-xl">
              <span className="text-tagline-1 text-primary-500">{page.summaryEyebrow}</span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                {page.summaryTitle}
              </h2>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.18}>
            <div className="rounded-[30px] bg-background-3 p-8 dark:bg-background-5 lg:p-10">
              <p className="text-base leading-8 text-secondary/72 dark:text-accent/70">
                {page.summaryText}
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container">
          <RevealAnimation delay={0.12}>
            <div className="max-w-3xl">
              <span className="text-tagline-1 text-primary-500">{page.featuresEyebrow}</span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                {page.featuresTitle}
              </h2>
            </div>
          </RevealAnimation>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {page.capabilities.map((item: { title: string; description: string }, index: number) => {
              const Icon = capabilities[index]?.icon ?? ClipboardList;
              return (
                <RevealAnimation key={item.title} delay={0.16 + index * 0.03}>
                  <article className="h-full rounded-[28px] border border-stroke-3 bg-white p-6 dark:border-stroke-7 dark:bg-background-6">
                    <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-500/15 dark:text-primary-300">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-5 text-xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-secondary/72 dark:text-accent/70">
                      {item.description}
                    </p>
                  </article>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#11263a_0%,#194156_52%,#0d1824_100%)] p-8 text-white lg:p-10">
              <span className="text-tagline-1 inline-block text-white/62">{page.flowEyebrow}</span>
              <p className="mt-5 max-w-xl text-2xl font-normal leading-tight text-white lg:text-4xl">
                {page.flowTitle}
              </p>
            </div>
          </RevealAnimation>
          <div className="grid gap-4">
            {page.steps.map((item: { title: string; text: string }, index: number) => (
              <RevealAnimation key={item.title} delay={0.18 + index * 0.06}>
                <div className="grid gap-4 rounded-[24px] border border-stroke-3 bg-background-3 p-6 dark:border-stroke-7 dark:bg-background-5 md:grid-cols-[auto_1fr]">
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-white text-sm text-secondary dark:bg-background-6 dark:text-accent">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-normal text-secondary dark:text-accent">{item.title}</h3>
                    <p className="mt-2 text-base leading-7 text-secondary/72 dark:text-accent/70">{item.text}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="max-w-xl">
              <span className="text-tagline-1 text-primary-300 dark:text-primary-400">
                {page.whyEyebrow}
              </span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-white sm:text-4xl">
                {page.whyTitle}
              </h2>
              <p className="mt-5 text-base leading-8 text-white/78">
                {page.whyText}
              </p>
            </div>
          </RevealAnimation>
          <div className="grid gap-4 sm:grid-cols-2">
            {page.whyMessages.map((item: string, index: number) => (
              <RevealAnimation key={item} delay={0.18 + index * 0.05}>
                <div className="rounded-[24px] border border-stroke-7 bg-white/70 p-5 dark:bg-background-5">
                  <p className="text-base leading-7 text-secondary/80 dark:text-accent/80">{item}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container">
          <RevealAnimation delay={0.12}>
            <div className="max-w-3xl">
              <span className="text-tagline-1 text-primary-500">{page.benefitsEyebrow}</span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                {page.benefitsTitle}
              </h2>
            </div>
          </RevealAnimation>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {page.benefits.map((item: { title: string; text: string }, index: number) => (
              <RevealAnimation key={item.title} delay={0.16 + index * 0.04}>
                <article className="rounded-[26px] border border-stroke-3 bg-background-3 p-6 dark:border-stroke-7 dark:bg-background-5">
                  <h3 className="text-xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-secondary/72 dark:text-accent/70">{item.text}</p>
                </article>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="max-w-xl">
              <span className="text-tagline-1 text-primary-500">{page.useCasesEyebrow}</span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                {page.useCasesTitle}
              </h2>
              <p className="mt-5 text-base leading-8 text-secondary/72 dark:text-accent/70">
                {page.useCasesText}
              </p>
            </div>
          </RevealAnimation>
          <div className="grid gap-4">
            {page.useCases.map((item: string, index: number) => (
              <RevealAnimation key={item} delay={0.18 + index * 0.05}>
                <div className="rounded-[24px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-6">
                  <p className="text-base leading-7 text-secondary/80 dark:text-accent/80">{item}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <RevealAnimation delay={0.12}>
            <div className="max-w-xl">
              <span className="text-tagline-1 text-primary-500">{page.faqEyebrow}</span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                {page.faqTitle}
              </h2>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.18}>
            <Accordion className="space-y-4" defaultValue="request-to-receipt-faq-1" animationDelay={0.08}>
              {page.faqs.map((item: { question: string; answer: string }, index: number) => (
                <AccordionItem
                  key={item.question}
                  value={`request-to-receipt-faq-${index + 1}`}
                  className="rounded-[24px] border border-stroke-3 bg-background-3 px-6 dark:border-stroke-7 dark:bg-background-5"
                >
                  <AccordionTrigger
                    value={`request-to-receipt-faq-${index + 1}`}
                    className="flex w-full cursor-pointer items-center justify-between py-5"
                    titleClassName="flex-1 text-left text-lg font-normal text-secondary dark:text-accent"
                    iconType="arrow"
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent
                    value={`request-to-receipt-faq-${index + 1}`}
                    className="pb-6 text-base leading-7 text-secondary/72 dark:text-accent/70"
                  >
                    {item.answer}
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
                  <span className="text-tagline-1 inline-block text-white/65">{page.finalEyebrow}</span>
                  <h2 className="mt-4 text-3xl font-normal leading-tight text-white sm:text-4xl">{page.finalTitle}</h2>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <LinkButton href={localizeHref('/contact-us', locale)} className="btn btn-primary btn-md">
                    {page.primaryCta}
                  </LinkButton>
                  <LinkButton
                    href={localizeHref('/contact-us', locale)}
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent"
                  >
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
