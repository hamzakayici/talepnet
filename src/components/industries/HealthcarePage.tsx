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
  'Support urgent demand without losing procurement structure',
  'Connect approvals, sourcing, suppliers, and receiving in one flow',
  'Bring cost centers and budget signals into purchasing decisions',
  'Reuse supplier, contract, and previous-order context more effectively',
  'Keep execution and spend visibility connected while operations are moving',
];

const painPoints = [
  'Different departments and facilities request through inconsistent channels',
  'Procurement teams struggle to balance urgency with control',
  'Supplier communication is spread across email, calls, and local follow-up',
  'Contracted suppliers and prior purchasing context are not always visible',
  'Orders may be issued quickly, but receiving and completion remain unclear',
  'Budget visibility often arrives after the purchasing decision is already made',
];

const capabilities = [
  {
    title: 'Make request intake usable for clinical and operational teams',
    text: 'Talepnet standardizes purchase requests and forms so departments can submit demand through a structured workflow rather than relying on fragmented manual channels.',
  },
  {
    title: 'Keep approvals fast without losing accountability',
    text: 'Approval workflows can be configured around real organizational roles, thresholds, and departmental logic, helping healthcare teams move critical requests forward with clearer ownership and traceability.',
  },
  {
    title: 'Bring sourcing discipline into urgent purchasing environments',
    text: 'Buyers can turn approved demand into purchase forms, collect multiple quotations, compare supplier responses, reuse previous orders, and surface contracted suppliers before committing spend.',
  },
  {
    title: 'Improve supplier collaboration without disconnected follow-up',
    text: 'RFQs can be sent by email, supported with supplier portal participation, tracked through RFQ monitoring, and brought back into the purchase workflow with better visibility.',
  },
  {
    title: 'Keep supplier decisions connected to execution',
    text: 'Purchase orders are generated and managed as part of the procurement chain, linking supplier communication, delivery context, and downstream receiving to the same workflow record.',
  },
  {
    title: 'Treat receiving as part of operational control',
    text: 'Receiving flows help teams record delivered quantities, handle partial receipt, manage receipt references, and close the loop between what was ordered and what actually arrived.',
  },
  {
    title: 'Give finance and management live spend visibility',
    text: 'Cost centers, fiscal years, budget overview, supplier spend, category visibility, and contracted-vs-non-contracted patterns help healthcare organizations manage procurement with stronger financial awareness.',
  },
];

const useCases = [
  {
    title: 'Multi-facility purchasing oversight',
    text: 'Standardize procurement across hospitals, clinics, laboratories, care units, and support functions while preserving the speed required at the local level.',
  },
  {
    title: 'Clinical and non-clinical demand in one model',
    text: 'Manage supplies, services, equipment support, maintenance, and administrative purchasing through the same connected procurement structure.',
  },
  {
    title: 'Supplier-heavy operational sourcing',
    text: 'Improve quote comparison, contracted supplier reuse, and RFQ coordination where supplier responsiveness and fulfillment reliability matter alongside commercial value.',
  },
  {
    title: 'Budget-sensitive procurement control',
    text: 'Tie demand, approvals, and spend visibility to cost center ownership so healthcare organizations can preserve financial discipline while still supporting urgent operations.',
  },
];

const flow = [
  'Departments submit requests with operational and cost-center context.',
  'Approval workflows route requests to the right decision-makers.',
  'Purchasing converts approved demand into purchase forms.',
  'Buyers collect quotations, compare suppliers, and use contracts or previous-order insight.',
  'Purchase orders are issued through structured supplier workflows.',
  'Receiving records what was actually delivered.',
  'Dashboards and spend views help leadership monitor suppliers, budgets, and procurement performance across the organization.',
];

const benefits = [
  {
    title: 'Better continuity between care operations and procurement',
    text: 'Teams can move urgent demand through a structured process without reducing procurement control to an afterthought.',
  },
  {
    title: 'Better supplier visibility',
    text: 'RFQ, quote, order, and receiving activity stay tied to the same supplier and process history, improving coordination and follow-up.',
  },
  {
    title: 'Better budget discipline',
    text: 'Cost center and budget-aware controls help organizations evaluate procurement impact before spending gets too far ahead of plan.',
  },
  {
    title: 'Better execution traceability',
    text: 'Approvals, sourcing decisions, orders, and receipt history remain visible end to end, strengthening auditability and operational confidence.',
  },
  {
    title: 'Better management insight',
    text: 'Leaders gain a clearer view into supplier concentration, category pressure, contract usage, and procurement performance while activity is still in motion.',
  },
];

export default function HealthcarePage() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_28%),linear-gradient(180deg,#f3fbf8_0%,#ffffff_52%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container relative z-10 pb-16 md:pb-20 xl:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">Industry Solutions</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[13ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                  Built for healthcare purchasing where speed and control both matter
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  Talepnet helps hospitals, clinics, care providers, laboratories, and healthcare
                  groups manage requests, approvals, suppliers, sourcing, orders, receiving,
                  budgets, and spend visibility in one connected procurement workflow.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#healthcare-flow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See the Healthcare Flow
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                <ImagePlaceholder
                  label="Healthcare procurement placeholder"
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
                Healthcare procurement has to support uninterrupted care, controlled spending, and
                reliable supplier execution at the same time. Talepnet helps organizations bring
                structure to that complexity without slowing down critical operational decisions.
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
                Why healthcare procurement breaks down so easily
              </span>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Healthcare organizations buy under constant operational pressure. Clinical units,
                support teams, facilities, labs, and administrative functions all need supplies,
                services, and equipment on time, but procurement still has to preserve approval
                discipline, supplier accountability, and budget control. When requests, supplier
                communication, and downstream execution are fragmented, the result is slower
                purchasing, weaker visibility, and harder financial governance.
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
                  Why Talepnet fits healthcare environments
                </span>
                <h2 className="text-3xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-4">
                  Operational urgency and procurement discipline can run in the same system
                </h2>
                <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                  Talepnet is built for organizations that need operational procurement structure
                  across multiple teams, locations, and approval layers. Its configurable workflow
                  model, supplier collaboration capabilities, sourcing tools, receiving controls,
                  cost-center-aware budget structures, and spend insights make it well suited for
                  healthcare organizations that cannot afford either purchasing chaos or
                  administrative drag.
                </p>
                <ImagePlaceholder
                  label="Healthcare workflow placeholder"
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
                How Talepnet supports healthcare procurement
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                One connected process for departments, suppliers, execution, and spend control
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
                Built for real healthcare procurement scenarios
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Adapted for clinical urgency, supplier dependence, and budget-sensitive operations
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

      <section id="healthcare-flow" className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#10222d_0%,#17384b_52%,#0d1720_100%)] p-8 text-white lg:p-10">
              <span className="text-tagline-1 inline-block text-white/62">A connected healthcare procurement flow</span>
              <p className="mt-5 max-w-2xl text-2xl font-normal leading-tight text-white lg:text-4xl">
                The system keeps urgent operational demand, commercial control, and execution outcomes connected while care operations continue.
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
                What healthcare teams gain with Talepnet
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Better continuity between care operations, procurement, and financial control
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
                    Bring healthcare procurement into one connected operating system
                  </span>
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                    Talepnet helps healthcare organizations connect departmental demand, approvals,
                    suppliers, sourcing, orders, receiving, budgets, and spend visibility in one
                    structured procurement model.
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
