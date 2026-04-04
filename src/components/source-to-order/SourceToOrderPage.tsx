import RevealAnimation from '@/components/animation/RevealAnimation';
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

function ImagePlaceholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`flex min-h-[220px] items-center justify-center bg-[linear-gradient(135deg,#f2f5fb_0%,#fbfcfe_100%)] dark:bg-[linear-gradient(135deg,#171d2a_0%,#0f141c_100%)] ${className}`}>
      <div className="rounded-full border border-dashed border-secondary/20 px-4 py-2 text-sm tracking-[0.14em] uppercase text-secondary/45 dark:border-accent/15 dark:text-accent/40">
        {label}
      </div>
    </div>
  );
}

const heroHighlights = [
  'Move from approved demand to supplier selection in one chain',
  'Compare suppliers with stronger contract and history context',
  'Carry sourcing outcomes into purchase approvals and order execution',
  'Keep supplier collaboration and receiving visible after the sourcing event',
];

const valueStatements = [
  {
    title: 'Source with better context',
    text: 'Talepnet helps teams compare suppliers with stronger decision support. Buyers can work from approved demand, collect multiple quotations, reuse contracted suppliers, review previous order history, and evaluate the commercial picture in one sourcing workspace.',
  },
  {
    title: 'Order with more control',
    text: 'Once supplier selection is complete, Talepnet carries that decision forward into structured purchase order workflows. Supplier communication, delivery branch context, document generation, and downstream receiving remain connected to the same purchasing chain.',
  },
  {
    title: 'Reduce workflow breaks between teams',
    text: 'Procurement often slows down when requesters, approvers, buyers, and receiving teams work from different process records. Talepnet keeps each stage linked, helping teams move from source to order without rebuilding data or losing visibility.',
  },
];

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

const steps = [
  {
    title: 'Start from approved demand',
    text: 'Talepnet brings approved purchase needs into the purchasing workspace, creating a cleaner and more traceable starting point for sourcing.',
  },
  {
    title: 'Collect and compare supplier offers',
    text: 'Buyers manage quotations, RFQs, contracts, and supplier context inside the purchase form to build a better sourcing decision.',
  },
  {
    title: 'Move into controlled execution',
    text: 'Once sourcing is complete, the process continues into purchase approval where needed and then into purchase order execution.',
  },
  {
    title: 'Track what happens after the order',
    text: 'Purchase orders, supplier communication, and receiving remain connected so the organization has visibility beyond the sourcing event itself.',
  },
];

const keyMessages = [
  'Better supplier comparison',
  'Better continuity from sourcing to execution',
  'Less manual handoff between teams',
  'Better traceability across commercial decisions',
  'Better visibility into what happens after supplier selection',
];

const benefits = [
  {
    title: 'Faster sourcing cycles',
    text: 'Buyers spend less time rebuilding demand, reformatting supplier input, or chasing fragmented communication.',
  },
  {
    title: 'Better supplier decisions',
    text: 'Quotations, contracts, previous orders, and RFQ responses stay in one decision space, improving sourcing quality.',
  },
  {
    title: 'Better execution confidence',
    text: 'The selected sourcing outcome carries directly into order placement, reducing rework and process ambiguity.',
  },
  {
    title: 'Better procurement control',
    text: 'Approvals, supplier decisions, purchase orders, and receiving all remain part of the same process chain.',
  },
  {
    title: 'Better supplier collaboration',
    text: 'RFQ and order communication become more structured, trackable, and easier to manage across teams and suppliers.',
  },
];

const useCases = [
  'Teams running frequent quotation and supplier comparison processes',
  'Organizations with purchase approvals before ordering',
  'Businesses needing stronger continuity between sourcing and execution',
  'Procurement teams that want contract and supplier intelligence during sourcing',
  'Companies that need receiving visibility after the order is placed',
];

const faqs = [
  {
    question: 'What is Source-to-Order in Talepnet?',
    answer:
      'Source-to-Order in Talepnet is the connected process that takes approved demand through sourcing, quotation handling, supplier selection, purchase approval where needed, purchase order execution, and receiving continuity.',
  },
  {
    question: 'How is Talepnet different from a standalone sourcing tool?',
    answer:
      'Talepnet does not stop at supplier comparison. It connects sourcing to approvals, purchase orders, supplier communication, and downstream receiving so procurement teams can manage the full path from decision to execution.',
  },
  {
    question: 'Can Talepnet support multi-supplier quotation workflows?',
    answer:
      'Yes. Buyers can manage multiple quotations in the purchase form, compare offers, use previous order context, and bring contracted suppliers into the sourcing process.',
  },
  {
    question: 'How does Talepnet support supplier collaboration during sourcing?',
    answer:
      'Talepnet supports RFQ email workflows, supplier portal participation, RFQ monitoring, and structured quote import back into the sourcing flow.',
  },
  {
    question: 'Does Source-to-Order include order execution?',
    answer:
      'Yes. The process continues into purchase approval where applicable, purchase order placement, supplier communication, and receiving-linked follow-through.',
  },
];

export default function SourceToOrderPage() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_28%),linear-gradient(180deg,#f3fbf8_0%,#ffffff_52%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container pb-16 md:pb-20 xl:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">Solutions</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[12ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                  Bring sourcing and purchasing into one connected operating flow
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  Talepnet helps procurement teams move from approved demand to supplier
                  selection and purchase order execution with more structure, better visibility,
                  and less manual coordination across sourcing, approvals, supplier collaboration,
                  and order management.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#source-to-order-flow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See the Workflow
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                  <ImagePlaceholder label="Source-to-order placeholder" className="min-h-[320px] sm:min-h-[390px]" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {heroHighlights.map((item) => (
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
                One solution for sourcing decisions and purchasing execution
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Move from approved demand to supplier-facing execution without leaving the same record
              </h2>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.24}>
            <div className="space-y-5 border-l border-stroke-3 pl-6 dark:border-stroke-7 md:pl-8">
              <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                In many organizations, sourcing and ordering still happen across separate tools,
                disconnected spreadsheets, and fragmented supplier communication. Talepnet closes
                that gap by connecting purchase forms, quotations, RFQs, supplier records,
                contracts, purchase approvals, purchase orders, and receiving into one continuous
                procurement workflow.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-10 lg:grid-cols-3">
          {valueStatements.map((item, index) => (
            <RevealAnimation key={item.title} delay={0.18 + index * 0.06}>
              <article className="space-y-5">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-500/15 dark:text-primary-300">
                  <ShoppingCart className="size-5" />
                </span>
                <div>
                  <h3 className="text-2xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-secondary/72 dark:text-accent/70">{item.text}</p>
                </div>
              </article>
            </RevealAnimation>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[28px] bg-background-3 p-8 dark:bg-background-5 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                From approved demand to supplier-facing execution
              </span>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Talepnet’s Source-to-Order capability begins when purchasing demand is ready for
                sourcing and continues through quotation management, supplier comparison, purchase
                approval where needed, purchase order placement, and receipt-related follow-through.
                This gives procurement teams a more complete control layer between internal demand
                and external supplier commitment.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <ImagePlaceholder label="Purchasing chain placeholder" className="min-h-[280px]" />
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
        <div className="main-container space-y-12">
          <div className="max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                What buyers can do in this flow
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                The sourcing and order execution foundation buyers actually work inside
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
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
                How the process moves
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-accent lg:text-heading-3">
                From sourcing start to post-order visibility inside one governed flow
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {steps.map((step, index) => (
              <RevealAnimation key={step.title} delay={0.24 + index * 0.08}>
                <article className="rounded-[24px] border border-white/10 bg-white/5 p-7">
                  <span className="mb-5 inline-flex h-8 items-center rounded-full border border-white/10 px-3 text-sm text-accent/70">
                    Step {index + 1}
                  </span>
                  <h3 className="mb-3 text-2xl font-normal text-accent">{step.title}</h3>
                  <p className="text-base leading-7 text-accent/70">{step.text}</p>
                </article>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#10222d_0%,#17384b_52%,#0d1720_100%)] p-8 text-white lg:p-10">
              <span className="text-tagline-1 inline-block text-white/62">
                Why this matters for procurement performance
              </span>
              <p className="mt-5 max-w-2xl text-2xl font-normal leading-tight text-white lg:text-4xl">
                Procurement quality depends on whether sourcing and execution remain connected
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
                Sourcing quality does not depend only on supplier quotes. It depends on whether
                the process is connected. If requirements are unclear, approvals are fragmented,
                supplier context is missing, or orders are placed outside the same record,
                procurement teams lose both speed and confidence. Talepnet helps reduce those
                breaks by turning sourcing and ordering into one governed process.
              </p>
            </div>
          </RevealAnimation>

          <div className="grid gap-4">
            {keyMessages.map((item, index) => (
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
                What teams gain from a connected process
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Better sourcing quality, execution confidence, and supplier collaboration
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((benefit, index) => (
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
                  Designed for organizations that need more than standalone sourcing
                </span>
                <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                  Talepnet’s Source-to-Order solution is especially well suited for organizations
                  that want a stronger connection between internal procurement governance and
                  external supplier execution.
                </p>
                <ul className="grid gap-4">
                  {useCases.map((item) => (
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
                  FAQ
                </span>
                <Accordion className="space-y-4" defaultValue="source-to-order-faq-1" animationDelay={0.08}>
                  {faqs.map((faq, index) => (
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
                    Connect sourcing decisions to real purchasing execution
                  </span>
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                    Talepnet helps procurement teams move from supplier comparison to order
                    placement with stronger visibility, cleaner workflows, and more controlled supplier collaboration.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    Talk to Sales
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
