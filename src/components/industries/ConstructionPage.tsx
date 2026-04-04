import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';

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

const intro =
  'Construction procurement is shaped by site urgency, supplier dependency, budget pressure, and multi-location execution. Talepnet gives teams a more structured way to control that complexity without slowing the field down.';

const painPoints = [
  'Project and site demand arrives through fragmented channels',
  'Urgent purchasing bypasses approval and budget discipline',
  'Supplier communication becomes hard to track across RFQs and orders',
  'Different locations follow different procurement habits',
  'Receiving and order follow-up are difficult to manage centrally',
  'Spend becomes visible too late, after cost drift has already happened',
];

const capabilities = [
  {
    title: 'Centralize project and site demand',
    text: 'Requests can be captured through structured forms and request workflows, helping field teams, project managers, and central procurement start from the same process record.',
  },
  {
    title: 'Keep approvals aligned with real project authority',
    text: 'Approval and workflow design can reflect departments, thresholds, and operational structures, helping construction businesses enforce accountability without forcing every site into the exact same manual routine.',
  },
  {
    title: 'Source faster without losing commercial discipline',
    text: 'Buyers can generate purchase forms from approved demand, collect multiple quotations, compare suppliers, reuse previous orders, and surface contracted suppliers before making a sourcing decision.',
  },
  {
    title: 'Improve supplier coordination across active projects',
    text: 'RFQs can be sent by email, supported through supplier portal flows, tracked through RFQ monitoring, and kept connected to the purchase form instead of getting lost across fragmented supplier follow-up.',
  },
  {
    title: 'Move cleanly from sourcing to execution',
    text: 'Once supplier decisions are made, purchase orders can be placed through controlled workflows that keep document generation, supplier communication, and delivery context tied to the same procurement chain.',
  },
  {
    title: 'Manage receipt and execution at the project level',
    text: 'Receiving flows help teams record actual delivered quantities, handle partial receipt, and maintain visibility into what has really arrived on site or into the operation.',
  },
  {
    title: 'Keep budget and spend visible while work is moving',
    text: 'Cost centers, budget-aware structures, supplier spend, category trends, and managed cost center views help construction teams understand cost pressure while projects are still active, not only after reporting cycles close.',
  },
];

const useCases = [
  {
    title: 'Multi-site procurement control',
    text: 'Standardize purchasing across projects, branches, and sites while preserving local operational speed where execution cannot wait.',
  },
  {
    title: 'Materials, services, and operational buying',
    text: 'Manage both direct and indirect procurement needs, from site materials and equipment support to service vendors and recurring operational purchases.',
  },
  {
    title: 'Supplier-heavy project environments',
    text: 'Improve supplier comparison, RFQ handling, and order follow-through in categories where vendor availability, timing, and quality matter as much as price.',
  },
  {
    title: 'Budget-sensitive project execution',
    text: 'Keep project and departmental spend tied to cost center structures and approval logic so site activity does not drift too far from financial control.',
  },
];

const flow = [
  'Site or project teams submit requests with operational and cost-center context.',
  'Approval logic routes the demand through the right managers or functions.',
  'Purchasing converts approved demand into purchase forms for sourcing.',
  'Buyers collect quotations, compare suppliers, and reuse contract or order history.',
  'Purchase orders are placed through structured supplier-facing workflows.',
  'Receiving records what was actually delivered.',
  'Dashboards and spend views help management monitor supplier activity, budget pressure, and procurement performance across active work.',
];

const benefits = [
  {
    title: 'Better control across active projects',
    text: 'Procurement becomes more consistent across sites and business units without disconnecting field reality from central oversight.',
  },
  {
    title: 'Better supplier execution visibility',
    text: 'RFQ, quote, order, and receiving activity stay tied to the same operational chain, making supplier coordination easier to manage.',
  },
  {
    title: 'Better cost discipline under time pressure',
    text: 'Approval workflows, sourcing comparisons, contracted suppliers, and budget-linked structures help teams move fast without buying blindly.',
  },
  {
    title: 'Better alignment between site teams and procurement',
    text: 'Everyone works from the same process record, reducing ambiguity, repeated clarification, and avoidable delays.',
  },
  {
    title: 'Better spend visibility while projects are live',
    text: 'Management can see how purchasing activity is evolving across cost centers, suppliers, and categories before commercial drift becomes a bigger issue.',
  },
];

export default function ConstructionPage() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_28%),linear-gradient(180deg,#fff9f2_0%,#ffffff_52%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container relative z-10 pb-16 md:pb-20 xl:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">Industry Solutions</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[13ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                  A better way to manage purchasing across construction projects and sites
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  Talepnet helps construction companies manage requests, approvals, suppliers,
                  sourcing, purchase orders, receiving, and spend visibility in one connected
                  workflow, so project speed does not come at the expense of commercial control.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#construction-flow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See the Construction Flow
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                <ImagePlaceholder
                  label="Construction procurement placeholder"
                  className="min-h-[320px] sm:min-h-[390px]"
                />
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-10 dark:bg-background-5 md:py-12">
        <div className="main-container">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[24px] border border-stroke-3 bg-white px-6 py-6 dark:border-stroke-7 dark:bg-background-6 lg:px-8">
              <p className="max-w-5xl text-base leading-7 text-secondary/75 dark:text-accent/70">{intro}</p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <RevealAnimation delay={0.14}>
            <div className="rounded-[28px] bg-background-3 p-8 dark:bg-background-5 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Why construction procurement is hard to keep under control
              </span>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Construction organizations often buy under pressure. Site teams need materials,
                services, and operational support quickly, but the business still needs approval
                discipline, supplier coordination, and cost visibility. When demand starts on
                calls, WhatsApp messages, or spreadsheets, procurement loses consistency and
                finance loses timing.
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
                  Why Talepnet fits construction environments
                </span>
                <h2 className="text-3xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-4">
                  Operational flexibility and procurement structure can coexist
                </h2>
                <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                  Talepnet is built for organizations that need operational flexibility without
                  sacrificing procurement structure. Its workflow-based model, multi-role
                  execution, supplier collaboration, receiving flows, and cost-center-aware spend
                  visibility make it well suited for construction businesses managing multiple
                  projects, branches, warehouses, and purchasing teams at once.
                </p>
                <ImagePlaceholder
                  label="Project and site workflow placeholder"
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
                How Talepnet supports construction procurement
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                One process chain across sites, suppliers, execution, and cost control
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
                Built for real construction purchasing scenarios
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Adapted for site-level urgency, supplier-heavy buying, and project cost pressure
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

      <section id="construction-flow" className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#10222d_0%,#17384b_52%,#0d1720_100%)] p-8 text-white lg:p-10">
              <span className="text-tagline-1 inline-block text-white/62">A connected construction procurement flow</span>
              <p className="mt-5 max-w-2xl text-2xl font-normal leading-tight text-white lg:text-4xl">
                The system keeps field demand, commercial decisions, and execution outcomes connected while projects stay active.
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
                What construction teams gain with Talepnet
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Better project control without slowing site execution down
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
                    Bring construction procurement into one operational system
                  </span>
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                    Talepnet helps construction companies connect project demand, approvals,
                    suppliers, sourcing, orders, receiving, and spend visibility in one structured
                    procurement model.
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
