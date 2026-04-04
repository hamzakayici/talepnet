import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { Check } from 'lucide-react';

function ImagePlaceholder({
  label,
  className = '',
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex min-h-[220px] items-center justify-center bg-[linear-gradient(135deg,#f4f8fb_0%,#fbfcfe_100%)] dark:bg-[linear-gradient(135deg,#171d24_0%,#0f141a_100%)] ${className}`}>
      <div className="rounded-full border border-dashed border-secondary/20 px-4 py-2 text-sm tracking-[0.14em] uppercase text-secondary/45 dark:border-accent/15 dark:text-accent/40">
        {label}
      </div>
    </div>
  );
}

const heroHighlights = [
  'Build a structured supplier master with approval and control signals',
  'Connect suppliers directly to RFQ, quotation, and order workflows',
  'Bring contracts and contracted items into sourcing decisions',
  'Manage supplier contacts for operational outreach',
  'Extend collaboration through the supplier portal',
  'Track supplier activity through purchasing and receiving workflows',
];

const painPoints = [
  'Different plants or branches follow different purchasing habits',
  'Urgent operational demand bypasses structured approval discipline',
  'Supplier communication becomes fragmented across inboxes and calls',
  'Contracted suppliers are not always visible at the point of purchase',
  'Orders may be placed, but receipt and follow-through remain unclear',
  'Spend is visible too late, after process control has already weakened',
];

const capabilities = [
  {
    title: 'Structured demand capture across locations',
    text: 'Talepnet standardizes purchase requests and forms so maintenance teams, plant users, service units, and central buyers can submit demand through a controlled process instead of ad hoc channels.',
  },
  {
    title: 'Approval workflows that reflect real authority structures',
    text: 'Approval and execution flows can be configured around departments, amount thresholds, organizational roles, and operational routing, helping automotive businesses adapt procurement control to real decision structures rather than forcing one rigid model.',
  },
  {
    title: 'Sourcing and quotation handling for operational buying',
    text: 'Buyers can generate purchase forms from approved demand, collect multiple quotations, compare supplier responses, use previous order history, and bring contracted suppliers into the decision process before moving into execution.',
  },
  {
    title: 'Supplier collaboration without fragmented follow-up',
    text: 'RFQs can be sent by email, supported with portal-enabled quote submission, monitored through RFQ tracking, and brought back into the purchase workflow with cleaner visibility.',
  },
  {
    title: 'Order execution tied to the workflow',
    text: 'Purchase orders are not treated as disconnected documents. Talepnet connects order placement, supplier communication, delivery branch context, and receiving so execution remains visible after the commercial decision is made.',
  },
  {
    title: 'Receiving as an operational control point',
    text: 'Receiving flows help teams record actual delivered quantities, manage partial receipt, handle document references, and keep supplier execution connected to procurement closure.',
  },
  {
    title: 'Financial and operational visibility in the same model',
    text: 'Cost centers, fiscal years, budget signals, supplier spend, category spend, contracted vs non-contracted behavior, and workflow-linked activity can all contribute to a stronger picture of procurement performance.',
  },
];

const useCases = [
  {
    title: 'Plant and branch purchasing',
    text: 'Standardize local demand capture while preserving workflow flexibility across plants, service centers, depots, and administrative units.',
  },
  {
    title: 'MRO and operational supply buying',
    text: 'Manage recurring purchases for maintenance, equipment support, consumables, and day-to-day operational continuity with stronger sourcing and approval discipline.',
  },
  {
    title: 'Supplier-heavy sourcing environments',
    text: 'Improve quote comparison, supplier response handling, and contracted supplier reuse where multiple vendors compete for recurring categories.',
  },
  {
    title: 'Multi-location spend control',
    text: 'Bring visibility across branches and cost centers so procurement teams can see where spend is accumulating, where pricing differs, and where process discipline is weakening.',
  },
];

const flow = [
  'Teams submit requests with cost center and operational context.',
  'Approvals follow the configured organizational logic.',
  'Purchasing converts approved demand into purchase forms.',
  'Buyers collect quotations, compare suppliers, and reuse contract intelligence.',
  'Orders are placed through structured supplier-facing workflows.',
  'Receiving records what actually arrived and closes the loop.',
  'Dashboards and spend views show what is happening across suppliers, categories, and cost centers.',
];

const benefits = [
  {
    title: 'Better control across distributed operations',
    text: 'Plants and branches can move through one connected procurement model without losing local execution speed.',
  },
  {
    title: 'Better supplier coordination',
    text: 'RFQ, quote, order, and receiving activity stay attached to the process instead of being scattered across channels.',
  },
  {
    title: 'Better commercial discipline',
    text: 'Contracted suppliers, previous orders, and quotation comparison give buyers stronger decision support before committing spend.',
  },
  {
    title: 'Better visibility from request to receipt',
    text: 'Management can see not just demand and approvals, but how sourcing, orders, and supplier execution are progressing.',
  },
  {
    title: 'Better financial control',
    text: 'Cost center, budget, and spend visibility help automotive organizations control procurement while operations are still moving, not only after the fact.',
  },
];

export default function AutomotivePage() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_28%),linear-gradient(180deg,#f6faff_0%,#ffffff_52%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container relative z-10 pb-16 md:pb-20 xl:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">Industry Solutions</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[13ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                  Automotive operations need procurement workflows that can keep up
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  Talepnet helps automotive companies manage procurement across plants, branches,
                  warehouses, service operations, and central teams with connected request,
                  approval, sourcing, supplier, order, receiving, and spend workflows.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#automotive-flow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See the Automotive Flow
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                <ImagePlaceholder
                  label="Automotive procurement placeholder"
                  className="min-h-[320px] sm:min-h-[390px]"
                />
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

      <section className="bg-background-12 py-10 dark:bg-background-5 md:py-12">
        <div className="main-container">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[24px] border border-stroke-3 bg-white px-6 py-6 dark:border-stroke-7 dark:bg-background-6 lg:px-8">
              <p className="max-w-5xl text-base leading-7 text-secondary/75 dark:text-accent/70">
                Automotive procurement is not just about buying parts. It is about keeping
                maintenance, production support, operations, tooling, indirect spend, and supplier
                coordination moving without losing cost control, approval discipline, or delivery
                visibility.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <RevealAnimation delay={0.14}>
            <div className="rounded-[28px] bg-background-3 p-8 dark:bg-background-5 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Why automotive procurement becomes hard to control
              </span>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Automotive organizations often operate across multiple locations, teams, and
                urgency levels. One site may be sourcing MRO items, another may be managing
                service-related purchases, while another is trying to keep supplier deliveries
                aligned with operational timelines. When requests, approvals, supplier
                communication, and receiving are spread across email, spreadsheets, and
                disconnected habits, procurement loses speed and management loses visibility.
              </p>
              <ul className="mt-8 space-y-4">
                {painPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary-500" />
                    <span className="text-sm leading-6 text-secondary/72 dark:text-accent/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.22}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="space-y-5 p-8 lg:p-10">
                <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                  Why Talepnet fits automotive environments
                </span>
                <h2 className="text-3xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-4">
                  Central control and site-level execution can live in the same system
                </h2>
                <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                  Talepnet is designed for organizations that need more than a simple requisition
                  tool. It supports multi-role, multi-branch procurement operations with
                  configurable workflows, purchasing execution, supplier collaboration, receiving,
                  and spend visibility in one connected system. That makes it especially relevant
                  for automotive companies balancing central control with site-level operational
                  realities.
                </p>
                <ImagePlaceholder
                  label="Plant and branch workflow placeholder"
                  className="min-h-[220px] rounded-[22px]"
                />
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
                How Talepnet supports automotive procurement
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                One operating model across demand, sourcing, execution, and spend control
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.2 + index * 0.05}>
                <article className="rounded-[26px] border border-stroke-3 bg-white p-7 dark:border-stroke-7 dark:bg-background-6">
                  <h3 className="mb-3 text-2xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                  <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">{item.text}</p>
                </article>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Built for real automotive procurement scenarios
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Flexible enough for plants, service operations, MRO, and central purchasing
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {useCases.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.22 + index * 0.06}>
                <div className="rounded-[22px] bg-background-3 p-6 dark:bg-background-5">
                  <h3 className="text-xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-secondary/72 dark:text-accent/70">{item.text}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section id="automotive-flow" className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#10222d_0%,#17384b_52%,#0d1720_100%)] p-8 text-white lg:p-10">
              <span className="text-tagline-1 inline-block text-white/62">A connected automotive procurement flow</span>
              <p className="mt-5 max-w-2xl text-2xl font-normal leading-tight text-white lg:text-4xl">
                The value comes from keeping the full chain connected while operations are moving.
              </p>
            </div>
          </RevealAnimation>

          <div className="grid gap-4">
            {flow.map((step, index) => (
              <RevealAnimation key={step} delay={0.18 + index * 0.05}>
                <div className="rounded-[22px] border border-stroke-3 bg-white p-6 dark:border-stroke-7 dark:bg-background-6">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm text-primary-600 dark:bg-primary-500/15 dark:text-primary-300">
                      {index + 1}
                    </span>
                    <p className="text-base leading-7 text-secondary/75 dark:text-accent/70">{step}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 xl:grid-cols-[0.96fr_1.04fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                What automotive teams gain with Talepnet
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Better coordination across distributed operations without losing control
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.22 + index * 0.06}>
                <div className="rounded-[22px] bg-white p-6 dark:bg-background-6">
                  <h3 className="text-xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-secondary/72 dark:text-accent/70">{item.text}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
        <div className="main-container">
          <RevealAnimation delay={0.12}>
            <div className="overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#0f172a_0%,#153b4a_55%,#0b1020_100%)] p-8 text-white md:p-12 xl:p-14">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-3xl">
                  <span className="text-tagline-1 inline-block text-white/65">
                    Modernize automotive procurement without disconnecting operations from control
                  </span>
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                    Talepnet helps automotive organizations connect plant demand, approvals,
                    sourcing, suppliers, orders, receiving, and spend visibility in one
                    operational system.
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
