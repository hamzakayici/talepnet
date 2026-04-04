import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LinkButton from '@/components/ui/button/LinkButton';
import {
  ArrowRight,
  Check,
  FileCheck2,
  FileOutput,
  Files,
  Globe2,
  Mail,
  MapPinned,
  MessageCircleMore,
  PackageCheck,
  PackageOpen,
  RotateCcw,
  Send,
  Truck,
  UserRound,
  XCircle,
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
      <div className="rounded-full border border-dashed border-secondary/20 px-4 py-2 text-sm tracking-[0.14em] uppercase text-secondary/45 dark:border-accent/15 dark:text-accent/40">
        {label}
      </div>
    </div>
  );
}

const heroHighlights = [
  'Convert approved purchases into purchase orders',
  'Generate preview and final order PDFs',
  'Assign delivery branch before issuing the order',
  'Notify suppliers by email, portal link, or WhatsApp sharing',
  'Track orders through placed, receiving, and completion stages',
  'Cancel orders with controlled workflow options when needed',
];

const corePoints = [
  'Place orders directly from ready-to-order purchases',
  'Generate formal PO documents with item lines and delivery branch details',
  'Use structured supplier communication instead of disconnected email threads',
  'Move seamlessly from order placement into receiving and completion',
];

const features = [
  {
    title: 'Order Placement from Approved Purchases',
    description:
      'Buyers place orders directly from the ready-to-order queue once purchasing decisions are complete and workflow permissions allow execution.',
    icon: PackageOpen,
  },
  {
    title: 'Preview and Final Order PDFs',
    description:
      'Generate separate preview and final purchase order PDFs so teams can review draft documents before issuing the official order.',
    icon: FileOutput,
  },
  {
    title: 'Delivery Branch Selection',
    description:
      'Set the delivery branch during order placement so each order reflects the correct receiving location and branch-level execution context.',
    icon: MapPinned,
  },
  {
    title: 'Supplier Contact Selection',
    description:
      'Choose supplier contacts directly during order communication to keep outreach structured and tied to real vendor records.',
    icon: UserRound,
  },
  {
    title: 'Email-Based Order Communication',
    description:
      'Send purchase orders through the platform with controlled messaging and supplier-facing document delivery.',
    icon: Mail,
  },
  {
    title: 'WhatsApp Order Sharing',
    description:
      'Share purchase orders through WhatsApp with formatted links and document access for faster supplier communication when needed.',
    icon: MessageCircleMore,
  },
  {
    title: 'Secure Share Links',
    description:
      'Generate secure public order links so suppliers can view or download the purchase order through a controlled access flow.',
    icon: Globe2,
  },
  {
    title: 'Supplier Portal-Linked Orders',
    description:
      'Link purchase orders to the supplier portal so vendors can interact through a more structured collaboration channel instead of relying only on manual communication.',
    icon: Send,
  },
  {
    title: 'Placed Order Tracking',
    description:
      'Manage issued orders inside the placed-orders workflow, where teams can follow open execution and prepare the next operational action.',
    icon: Truck,
  },
  {
    title: 'Receiving Integration',
    description:
      'Move directly from placed orders into receiving, with receipt handling tied to actual ordered quantities and workflow progress.',
    icon: PackageCheck,
  },
  {
    title: 'Receiving Controls',
    description:
      'Support operational receiving with receipt numbering, document references, and over-receipt tolerance handling where configured.',
    icon: FileCheck2,
  },
  {
    title: 'Controlled Cancellation Flow',
    description:
      'Cancel purchases and orders with workflow-aware options, including returning requisitions back to purchasing instead of forcing full cancellation.',
    icon: RotateCcw,
  },
  {
    title: 'Cancellation Notes and Reason Rules',
    description:
      'Require cancellation reasons based on system settings and keep cancellation actions more auditable and operationally clear.',
    icon: XCircle,
  },
  {
    title: 'Order List Documents',
    description:
      'Generate grouped order list documents with richer metadata for workspace review and execution follow-up.',
    icon: Files,
  },
];

const steps = [
  {
    title: 'Select approved purchases',
    text: 'Buyers work from ready-to-order purchases that have already completed the required sourcing and approval steps.',
  },
  {
    title: 'Prepare the order',
    text: 'The team chooses the delivery branch, reviews the order document, and generates a preview before final placement.',
  },
  {
    title: 'Notify the supplier',
    text: 'Purchase orders are shared with the supplier through email, portal-linked access, or WhatsApp-supported document sharing.',
  },
  {
    title: 'Track and receive',
    text: 'Once placed, orders move into active execution and then into receiving, where teams record delivered quantities and close the loop.',
  },
];

const communicationBlocks = [
  'Supplier contact selection from vendor records',
  'Purchase order email delivery',
  'Secure share-link generation',
  'WhatsApp sharing for faster outreach',
  'Supplier portal-linked order collaboration',
];

const benefits = [
  {
    title: 'Faster supplier handoff',
    text: 'Buyers can move from approved purchases to supplier-ready orders without rebuilding documents outside the workflow.',
  },
  {
    title: 'Better communication discipline',
    text: 'Orders, contacts, links, and notifications stay inside one structured process.',
  },
  {
    title: 'Stronger execution visibility',
    text: 'Teams can follow orders after placement instead of losing visibility once the document is sent.',
  },
  {
    title: 'Better branch-level coordination',
    text: 'Delivery branch assignment makes downstream receiving and local execution clearer.',
  },
  {
    title: 'Cleaner operational recovery',
    text: 'Cancellation paths and return-to-purchasing options help teams fix issues without breaking the whole procurement chain.',
  },
];

const useCases = [
  'Issuing supplier orders after purchase approval',
  'Sending official PO documents to selected vendor contacts',
  'Sharing orders through secure links or WhatsApp',
  'Managing branch-specific delivery destinations',
  'Tracking open orders before receiving',
  'Recording receipts against placed orders',
  'Cancelling or rerouting purchases when execution changes',
];

const modules = [
  'Purchase Forms',
  'Purchase Approvals',
  'Supplier Portal',
  'Supplier Management',
  'Receiving',
  'Spend Insights',
];

const metrics = [
  'Faster order placement after approval',
  'Better supplier communication traceability',
  'Stronger order-to-receipt visibility',
  'Fewer disconnected PO follow-ups',
  'Better control over cancellations and exceptions',
  'Smoother transition from purchasing to receiving',
];

const faqs = [
  {
    question: 'How are purchase orders created in Talepnet?',
    answer:
      'Purchase orders are placed from approved purchases in the ready-to-order workflow after sourcing and approval steps are complete.',
  },
  {
    question: 'Can teams preview the order before sending it?',
    answer: 'Yes. Talepnet supports separate preview and final PDF modes for purchase orders.',
  },
  {
    question: 'Can suppliers receive orders through different channels?',
    answer:
      'Yes. Orders can be handled through email, secure share links, WhatsApp sharing, and supplier portal-linked collaboration.',
  },
  {
    question: 'Does the order include delivery branch information?',
    answer:
      'Yes. Delivery branch selection is part of the order flow and is reflected in the order details and documents.',
  },
  {
    question: 'What happens after the order is placed?',
    answer:
      'The order moves into placed-order tracking and can then continue into receiving and completion workflows.',
  },
  {
    question: 'Can orders be cancelled in a controlled way?',
    answer:
      'Yes. Talepnet supports cancellation notes, configurable reason rules, and options such as returning requisitions back to purchasing.',
  },
];

export default function PurchaseOrdersPage() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.14),transparent_28%),linear-gradient(180deg,#f5f9ff_0%,#ffffff_52%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container relative z-10 pb-16 md:pb-20 xl:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">Purchasing Execution</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[14ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                  Place purchase orders with full workflow control and supplier-ready communication
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  Talepnet helps purchasing teams turn approved purchases into structured purchase
                  orders, notify suppliers through the right channels, track downstream progress,
                  and connect ordering directly to receiving.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#order-workflow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See Order Workflow
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                  <ImagePlaceholder
                    label="Purchase order workspace placeholder"
                    className="min-h-[320px] sm:min-h-[390px]"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                    <p className="text-sm tracking-[0.14em] uppercase text-secondary/45 dark:text-accent/45">
                      Documents
                    </p>
                    <p className="mt-3 text-lg font-normal text-secondary dark:text-accent">
                      Preview and final PO PDFs
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                    <p className="text-sm tracking-[0.14em] uppercase text-secondary/45 dark:text-accent/45">
                      Delivery
                    </p>
                    <p className="mt-3 text-lg font-normal text-secondary dark:text-accent">
                      Branch-based execution context
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                    <p className="text-sm tracking-[0.14em] uppercase text-secondary/45 dark:text-accent/45">
                      Follow-through
                    </p>
                    <p className="mt-3 text-lg font-normal text-secondary dark:text-accent">
                      Placed, received, completed
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>

        <div className="border-y border-stroke-3 bg-white/70 backdrop-blur-sm dark:border-stroke-7 dark:bg-background-6/80">
          <div className="main-container grid gap-4 py-6 md:grid-cols-2 xl:grid-cols-3">
            {heroHighlights.map((item, index) => (
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
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <RevealAnimation delay={0.14}>
            <div className="rounded-[28px] bg-background-3 p-8 dark:bg-background-7 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Where approved purchasing turns into supplier action
              </span>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Purchase Orders in Talepnet are the execution step after sourcing and purchase
                approval. This is where selected purchases become formal order documents, supplier
                communication starts, delivery branch details are locked in, and the process moves
                toward receipt and fulfillment.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.22}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="space-y-4 p-8 lg:p-10">
                  <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                    From approved purchase to traceable supplier execution
                  </span>
                  <ul className="space-y-4">
                    {corePoints.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <ArrowRight className="mt-1 size-4 shrink-0 text-primary-500" />
                        <span className="text-sm leading-6 text-secondary/72 dark:text-accent/70">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <ImagePlaceholder
                  label="Order execution placeholder"
                  className="min-h-[280px] lg:min-h-full"
                />
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
                What teams can do with Purchase Orders
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Built for supplier communication, downstream execution, and operational control
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <RevealAnimation key={feature.title} delay={0.2 + index * 0.035}>
                  <article className="rounded-[26px] border border-stroke-3 bg-background-3 p-7 dark:border-stroke-7 dark:bg-background-5">
                    <span className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl bg-primary-100 text-primary-600 dark:bg-primary-500/15 dark:text-primary-300">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mb-3 text-2xl font-normal text-secondary dark:text-accent">
                      {feature.title}
                    </h3>
                    <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                      {feature.description}
                    </p>
                  </article>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="order-workflow"
        className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
        <div className="main-container">
          <div className="mb-12 max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-accent/65">
                How Purchase Orders move through Talepnet
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-accent lg:text-heading-3">
                From ready-to-order approval to receipt and closure
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

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#10222d_0%,#17354a_52%,#0d1720_100%)] p-8 text-white lg:p-10">
              <span className="text-tagline-1 inline-block text-white/62">
                Supplier communication built into the order flow
              </span>
              <p className="mt-5 max-w-2xl text-2xl font-normal leading-tight text-white lg:text-4xl">
                Talepnet keeps contact handling, document sharing, and supplier-facing outreach
                inside the PO step.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
                Talepnet does not treat the PO as just a static PDF. The order step includes
                supplier contact handling, secure document sharing, portal-linked collaboration, and
                alternate channels like WhatsApp when buyers need a faster operational path.
              </p>
            </div>
          </RevealAnimation>

          <div className="grid gap-4">
            {communicationBlocks.map((item, index) => (
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
        <div className="main-container grid gap-8 lg:grid-cols-[0.94fr_1.06fr]">
          <RevealAnimation delay={0.12}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-5">
              <ImagePlaceholder
                label="Execution controls placeholder"
                className="min-h-[280px] sm:min-h-[360px]"
              />
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="space-y-5">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Built for execution, not just document creation
              </span>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                The PO stays connected to the real operational path after issue
              </h2>
              <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                A purchase order only matters if the operational follow-through is clear. Talepnet
                connects order placement to delivery branch context, receiving actions, workflow
                history, and cancellation controls so procurement teams can manage the full
                execution path after the PO is issued.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  'Delivery branch context stays attached to the order',
                  'Receiving actions continue from placed orders',
                  'Workflow history stays tied to the same record',
                  'Cancellation paths remain controlled and auditable',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[20px] bg-background-3 p-5 dark:bg-background-5">
                    <p className="text-sm leading-6 text-secondary/75 dark:text-accent/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 xl:grid-cols-[0.96fr_1.04fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                What improves with better purchase order management
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Better supplier handoff and cleaner execution follow-through
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <RevealAnimation key={benefit.title} delay={0.22 + index * 0.06}>
                <div className="rounded-[22px] bg-white p-6 dark:bg-background-6">
                  <h3 className="text-xl font-normal text-secondary dark:text-accent">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-secondary/72 dark:text-accent/70">
                    {benefit.text}
                  </p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <RevealAnimation delay={0.12}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-background-3 dark:border-stroke-7 dark:bg-background-5">
              <div className="space-y-4 p-8 lg:p-10">
                <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                  Typical Purchase Order scenarios
                </span>
                <ul className="grid gap-4">
                  {useCases.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ArrowRight className="mt-1 size-4 shrink-0 text-primary-500" />
                      <span className="text-sm leading-6 text-secondary/72 dark:text-accent/70">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-background-3 dark:border-stroke-7 dark:bg-background-5">
              <div className="space-y-5 p-8 lg:p-10">
                <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                  Connected to the full downstream process
                </span>
                <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                  Purchase Orders in Talepnet are connected to the earlier sourcing and approval
                  stages as well as the later operational stages. They sit between purchase
                  approvals and receiving, while keeping supplier communication and workflow history
                  tied to the same procurement record.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {modules.map((module) => (
                    <div
                      key={module}
                      className="rounded-[18px] border border-stroke-3 bg-white px-4 py-3 text-sm text-secondary/75 dark:border-stroke-7 dark:bg-background-6 dark:text-accent/70">
                      {module}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
        <div className="main-container">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#17304d_0%,#1f4b73_52%,#102033_100%)] p-8 text-white lg:p-10">
              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <span className="text-tagline-1 inline-block text-white/65">
                    Built to improve order execution quality
                  </span>
                  <h2 className="mt-4 text-3xl font-normal leading-tight text-white lg:text-4xl">
                    Purchase orders should keep execution visible after the document is sent
                  </h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {metrics.map((metric) => (
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

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32">
        <div className="main-container grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                FAQ
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Common questions about purchase orders
              </h2>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.24}>
            <Accordion className="space-y-4" defaultValue="purchase-orders-faq-1" animationDelay={0.08}>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`purchase-orders-faq-${index + 1}`}
                  className="rounded-[22px] border border-stroke-3 bg-background-3 px-6 dark:border-stroke-7 dark:bg-background-5">
                  <AccordionTrigger
                    value={`purchase-orders-faq-${index + 1}`}
                    className="flex w-full cursor-pointer items-center justify-between py-6"
                    titleClassName="flex-1 text-left text-lg font-normal text-secondary dark:text-accent"
                    iconType="arrow">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    value={`purchase-orders-faq-${index + 1}`}
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
                  <span className="text-tagline-1 inline-block text-white/65">
                    Turn purchase orders into a controlled execution workflow
                  </span>
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                    Issue supplier-ready orders, manage communication in one place, and connect
                    every order directly to receiving and downstream execution.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#order-workflow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See the Order Flow
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
