import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LinkButton from '@/components/ui/button/LinkButton';
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  FileDigit,
  FileText,
  History,
  PackageCheck,
  PackageOpen,
  Scale,
  ShieldCheck,
  Truck,
  Warehouse,
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
      className={`flex min-h-[220px] items-center justify-center bg-[linear-gradient(135deg,#f6f8fb_0%,#fbfcfe_100%)] dark:bg-[linear-gradient(135deg,#171d24_0%,#0f141a_100%)] ${className}`}>
      <div className="rounded-full border border-dashed border-secondary/20 px-4 py-2 text-sm tracking-[0.14em] uppercase text-secondary/45 dark:border-accent/15 dark:text-accent/40">
        {label}
      </div>
    </div>
  );
}

const heroHighlights = [
  'Move directly from placed orders into receiving',
  'Record actual received quantities against ordered lines',
  'Support partial receipt and completion decisions',
  'Use receipt numbering and document references for traceability',
  'Apply over-receipt tolerance controls where configured',
  'Keep receiving connected to workflow history and downstream visibility',
];

const corePoints = [
  'Start receiving from real placed-order data',
  'Record delivered quantities at line level',
  'Distinguish open, partial, and complete receipt outcomes',
  'Keep receipt activity tied to supplier and order context',
  'Improve closure between purchasing execution and operational completion',
];

const features = [
  {
    title: 'Receiving from Placed Orders',
    description:
      'Launch receiving directly from active placed-order workflows so goods receipt starts from committed purchasing data, not from manual reconstruction.',
    icon: PackageOpen,
  },
  {
    title: 'Line-Level Receipt Recording',
    description:
      'Capture received quantities against each purchase line so teams can reflect actual delivery outcomes with precision.',
    icon: ClipboardCheck,
  },
  {
    title: 'Partial Receiving Support',
    description:
      'Record incomplete deliveries without forcing artificial closure, allowing the process to reflect operational reality instead of idealized assumptions.',
    icon: Truck,
  },
  {
    title: 'Completion Control',
    description:
      'Mark receipt completion when the remaining quantity has been satisfied, giving teams a clearer path from open order to closed execution.',
    icon: Check,
  },
  {
    title: 'Remaining Quantity Visibility',
    description:
      'Show ordered, remaining, and receive-now quantities together so receiving teams can act with better context and fewer mistakes.',
    icon: Scale,
  },
  {
    title: 'Receipt Numbering',
    description:
      'Generate clearer receipt records with numbering support, making receiving activity easier to track, reference, and audit later.',
    icon: FileDigit,
  },
  {
    title: 'Document References',
    description:
      'Attach document-level context to receiving flows so physical or supporting receipt records stay tied to the procurement process.',
    icon: FileText,
  },
  {
    title: 'Over-Receipt Tolerance Controls',
    description:
      'Apply configured tolerance rules to prevent uncontrolled receiving while still supporting real-world exceptions where needed.',
    icon: ShieldCheck,
  },
  {
    title: 'Supplier-Linked Receiving Context',
    description:
      'Keep receiving tied to supplier and order identity so operational closure remains connected to the commercial source of the purchase.',
    icon: Warehouse,
  },
  {
    title: 'Workflow-Aware Receiving',
    description:
      'Make receiving part of the configured procurement workflow rather than a disconnected warehouse-side activity.',
    icon: History,
  },
  {
    title: 'Receiving History and Traceability',
    description:
      'Keep receipt actions visible in workflow and purchase history so teams can understand how execution progressed after ordering.',
    icon: History,
  },
  {
    title: 'Inventory-Aware Behavior',
    description:
      'Support stock-sensitive receiving behavior, including environments where stock control settings affect how receipt activity is applied operationally.',
    icon: PackageCheck,
  },
];

const steps = [
  {
    title: 'Start from a placed order',
    text: 'Receiving begins from purchases that have already been ordered and are now waiting for operational completion.',
  },
  {
    title: 'Record delivered quantities',
    text: 'Teams enter received quantities line by line, with visibility into ordered and remaining amounts.',
  },
  {
    title: 'Apply controls and exceptions',
    text: 'Talepnet validates receipt behavior using the configured process logic, including over-receipt tolerance and completion handling.',
  },
  {
    title: 'Close the execution loop',
    text: 'Receipt activity updates the operational state of the purchase and keeps downstream workflow visibility aligned with what actually happened.',
  },
];

const supportBlocks = [
  'Starts from placed-order context',
  'Remains linked to supplier execution',
  'Preserves receipt-level traceability',
  'Feeds workflow and purchase history',
  'Strengthens order-to-completion visibility',
];

const benefits = [
  {
    title: 'Better execution accuracy',
    text: 'Procurement and receiving teams work against actual order lines instead of disconnected manual notes.',
  },
  {
    title: 'Better control over partial delivery',
    text: 'Teams can reflect what was really delivered without distorting the procurement record.',
  },
  {
    title: 'Better traceability',
    text: 'Receipt numbering, document references, and workflow history create a stronger operational record.',
  },
  {
    title: 'Better supplier accountability',
    text: 'The organization can see more clearly whether supplier commitments translated into actual receipt outcomes.',
  },
  {
    title: 'Better downstream visibility',
    text: 'Receiving brings clarity to the final stage of purchasing execution instead of leaving completion ambiguous.',
  },
];

const useCases = [
  'Recording goods received against placed purchase orders',
  'Handling partial deliveries without losing workflow continuity',
  'Applying tolerance controls for operational exceptions',
  'Closing open purchases only when receipt is actually complete',
  'Tracking receipt references for audit and follow-up',
  'Improving order-to-receipt visibility across suppliers and branches',
];

const modules = [
  'Purchase Orders',
  'Supplier Management',
  'Workflow History',
  'Warehouse / Fulfillment',
  'Spend Insights',
];

const metrics = [
  'Better order-to-receipt traceability',
  'Clearer partial vs complete delivery visibility',
  'Stronger receiving discipline',
  'Better supplier execution transparency',
  'Fewer ambiguous completion states',
  'Stronger operational closure across procurement',
];

const faqs = [
  {
    question: 'How does Talepnet handle receiving differently from a simple delivery confirmation?',
    answer:
      'Talepnet treats receiving as an operational control point, tying delivered quantities, completion status, receipt references, and workflow traceability back to the original purchase and supplier commitment.',
  },
  {
    question: 'Can Talepnet support partial receiving?',
    answer:
      'Yes. Receiving is designed to reflect real delivery outcomes, including partial receipt scenarios that should remain operationally open until completion.',
  },
  {
    question: 'How does Talepnet control receiving exceptions?',
    answer:
      'The receiving flow can enforce configured rules such as over-receipt tolerance, helping teams manage exceptions without losing process discipline.',
  },
  {
    question: 'Does receiving stay connected to the purchase history?',
    answer:
      'Yes. Receipt activity remains visible in workflow and purchase history so teams can follow execution after ordering.',
  },
  {
    question: 'Is receiving linked to supplier and order context?',
    answer:
      'Yes. Receiving starts from placed orders and remains tied to supplier-linked purchasing records rather than operating as a disconnected warehouse note.',
  },
  {
    question: 'Why does receiving matter in procurement visibility?',
    answer:
      'Because procurement performance is only fully visible when the organization can see not just what was ordered, but what was actually received and how the process concluded.',
  },
];

export default function ReceivingPage() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(20,184,166,0.12),transparent_28%),linear-gradient(180deg,#f6fbff_0%,#ffffff_52%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container relative z-10 pb-16 md:pb-20 xl:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">Execution & Control</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[13ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                  Turn purchase completion into a controlled receiving process
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  Talepnet connects receiving directly to placed orders, giving teams a structured
                  way to record delivered quantities, manage exceptions, create receipt records,
                  and close the loop between purchasing and operational fulfillment.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#receiving-flow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See Receiving Flow
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                  <ImagePlaceholder
                    label="Receiving workspace placeholder"
                    className="min-h-[320px] sm:min-h-[390px]"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                    <p className="text-sm tracking-[0.14em] uppercase text-secondary/45 dark:text-accent/45">
                      Quantities
                    </p>
                    <p className="mt-3 text-lg font-normal text-secondary dark:text-accent">
                      Ordered, remaining, receive-now
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                    <p className="text-sm tracking-[0.14em] uppercase text-secondary/45 dark:text-accent/45">
                      Controls
                    </p>
                    <p className="mt-3 text-lg font-normal text-secondary dark:text-accent">
                      Tolerance, completion, references
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                    <p className="text-sm tracking-[0.14em] uppercase text-secondary/45 dark:text-accent/45">
                      Traceability
                    </p>
                    <p className="mt-3 text-lg font-normal text-secondary dark:text-accent">
                      Order, supplier, workflow history
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
        <div className="main-container grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <RevealAnimation delay={0.14}>
            <div className="rounded-[28px] bg-background-3 p-8 dark:bg-background-7 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Receiving is where procurement becomes reality
              </span>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                A purchase is not complete when the order is sent. It is complete when the
                organization knows what was actually received, in what quantity, under which
                document, and against which supplier commitment. Talepnet makes receiving a
                structured operational control point rather than an afterthought outside the
                procurement workflow.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.22}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="space-y-4 p-8 lg:p-10">
                  <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                    From placed order to verified receipt
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
                  label="Order-to-receipt placeholder"
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
                How Talepnet structures receiving
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Receiving stays tied to real order data, controls, and execution truth
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <RevealAnimation key={feature.title} delay={0.2 + index * 0.04}>
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

      <section id="receiving-flow" className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
        <div className="main-container">
          <div className="mb-12 max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-accent/65">
                How Receiving works in Talepnet
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-accent lg:text-heading-3">
                From placed order to operational closure
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
        <div className="main-container grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#10222d_0%,#17384b_52%,#0d1720_100%)] p-8 text-white lg:p-10">
              <span className="text-tagline-1 inline-block text-white/62">
                Receiving as a control layer, not a checkbox
              </span>
              <p className="mt-5 max-w-2xl text-2xl font-normal leading-tight text-white lg:text-4xl">
                The receipt step validates what really arrived, not what should have arrived.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
                Talepnet treats receiving as the point where supplier commitment meets operational
                proof. That means the process is not just about confirming delivery. It is about
                validating quantities, managing partial outcomes, preserving traceability, and
                ensuring the purchasing record reflects execution truth.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="space-y-5 p-8 lg:p-10">
                <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                  Connected to the order before it and the insight after it
                </span>
                <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                  Receiving in Talepnet sits inside the broader procurement chain. It starts from
                  placed orders, reflects supplier execution, contributes to workflow history, and
                  supports clearer visibility into how procurement performance translates into real
                  delivery outcomes.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {supportBlocks.map((item) => (
                    <div
                      key={item}
                      className="rounded-[18px] border border-stroke-3 bg-background-3 px-4 py-3 text-sm text-secondary/75 dark:border-stroke-7 dark:bg-background-5 dark:text-accent/70">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 xl:grid-cols-[0.96fr_1.04fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                What improves with structured receiving
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Better closure, stronger traceability, clearer execution reality
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <RevealAnimation key={benefit.title} delay={0.22 + index * 0.06}>
                <div className="rounded-[22px] bg-background-3 p-6 dark:bg-background-5">
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

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <RevealAnimation delay={0.12}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="space-y-4 p-8 lg:p-10">
                <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                  Where Receiving creates real value
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
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="space-y-5 p-8 lg:p-10">
                <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                  Connected to the execution side of procurement
                </span>
                <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                  Receiving in Talepnet is connected to Purchase Orders, supplier execution,
                  workflow history, and procurement visibility. It gives the organization a
                  structured completion layer between ordering and final operational closure.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {modules.map((module) => (
                    <div
                      key={module}
                      className="rounded-[18px] border border-stroke-3 bg-background-3 px-4 py-3 text-sm text-secondary/75 dark:border-stroke-7 dark:bg-background-5 dark:text-accent/70">
                      {module}
                    </div>
                  ))}
                </div>
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
                  <span className="text-tagline-1 inline-block text-white/65">
                    Built to improve execution visibility
                  </span>
                  <h2 className="mt-4 text-3xl font-normal leading-tight text-white lg:text-4xl">
                    Receiving should make the final procurement outcome visible, not ambiguous
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

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
        <div className="main-container grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                FAQ
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Common questions about receiving
              </h2>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.24}>
            <Accordion className="space-y-4" defaultValue="receiving-faq-1" animationDelay={0.08}>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`receiving-faq-${index + 1}`}
                  className="rounded-[22px] border border-stroke-3 bg-white px-6 dark:border-stroke-7 dark:bg-background-6">
                  <AccordionTrigger
                    value={`receiving-faq-${index + 1}`}
                    className="flex w-full cursor-pointer items-center justify-between py-6"
                    titleClassName="flex-1 text-left text-lg font-normal text-secondary dark:text-accent"
                    iconType="arrow">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    value={`receiving-faq-${index + 1}`}
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
                    Make receiving the final control point in procurement execution
                  </span>
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                    Record what actually arrived, manage exceptions with discipline, and close the
                    gap between ordering and operational completion.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#receiving-flow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See Receiving Workflow
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
