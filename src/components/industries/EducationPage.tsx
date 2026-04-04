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
  'Support multi-campus and multi-department procurement control',
  'Connect budgets and cost centers to request and approval flows',
  'Reuse supplier and contract intelligence during sourcing',
  'Keep RFQ, order, and receiving activity visible end to end',
  'Track spend through procurement context, not only finance totals',
];

const painPoints = [
  'Departments and campuses submit requests through inconsistent channels',
  'Low-value but high-frequency purchasing creates approval bottlenecks',
  'Budget ownership is hard to track across units and cost centers',
  'Contracted suppliers are not always visible at the point of purchase',
  'Supplier communication becomes fragmented across RFQs and orders',
  'Institutions can see spend totals later, but not always the process that created them',
];

const capabilities = [
  {
    title: 'Standardize purchasing across departments and campuses',
    text: 'Talepnet captures demand through structured requests and purchase forms, helping faculty, administration, facilities, and operations teams submit needs through one governed process instead of scattered emails and spreadsheets.',
  },
  {
    title: 'Keep approvals moving with clearer accountability',
    text: 'Approval workflows can be configured around organizational roles, departments, thresholds, and operational routing so requests move to the right approvers without losing visibility or timing.',
  },
  {
    title: 'Connect budgets to procurement decisions',
    text: 'Cost centers and fiscal years bring budget ownership into the process early, while budget overview and managed spend visibility help institutions monitor financial pressure before commitments get too far ahead.',
  },
  {
    title: 'Improve supplier and contract reuse',
    text: 'Buyers can surface contracted suppliers, reuse previous order context, manage supplier records and contacts, and bring negotiated terms into sourcing workflows instead of relying on memory or offline files.',
  },
  {
    title: 'Run cleaner sourcing for recurring and specialized needs',
    text: 'Purchase forms let teams collect multiple quotations, compare suppliers, send RFQs by email or portal-enabled flows, and move selected sourcing outcomes into approval or order execution.',
  },
  {
    title: 'Keep order and receiving activity connected',
    text: 'Purchase orders, supplier communication, and receiving are tied into the same procurement chain, helping institutions maintain control from request through actual receipt.',
  },
  {
    title: 'Turn spend into management visibility',
    text: 'Talepnet links procurement data to supplier, category, department, cost center, and budget views so leadership can understand how institutional purchasing behavior is evolving, not only what was spent in hindsight.',
  },
];

const useCases = [
  {
    title: 'Multi-campus and multi-entity oversight',
    text: 'Bring procurement into one system while preserving operational structure across campuses, branches, or institutional units.',
  },
  {
    title: 'Departmental purchasing with financial discipline',
    text: 'Support academic, administrative, and facilities purchasing while keeping cost center ownership and approval control visible.',
  },
  {
    title: 'Recurring operational buying',
    text: 'Manage repeat demand for classroom supplies, lab materials, technology, maintenance, and service procurement through cleaner workflows and reusable supplier intelligence.',
  },
  {
    title: 'Budget-sensitive institutional purchasing',
    text: 'Give finance and procurement teams a better way to monitor budgets, overrun risk, and spend patterns across departments before control weakens.',
  },
];

const flow = [
  'Departments or campus teams submit requests with the right operational and cost-center context.',
  'Approval workflows route the request through the appropriate academic, operational, or finance authority.',
  'Purchasing converts approved demand into purchase forms for sourcing.',
  'Buyers collect quotations, compare suppliers, and reuse contracts or previous order knowledge.',
  'Purchase orders are issued through structured supplier workflows.',
  'Receiving records what was actually delivered.',
  'Dashboards and spend views help the institution monitor suppliers, budgets, and purchasing behavior across the organization.',
];

const benefits = [
  {
    title: 'Better institutional control',
    text: 'Procurement becomes more consistent across departments and campuses without forcing every team into disconnected local workarounds.',
  },
  {
    title: 'Better budget visibility',
    text: 'Budget ownership and cost-center tracking become part of the operational flow instead of something reconstructed after spending occurs.',
  },
  {
    title: 'Better supplier coordination',
    text: 'RFQ, quotation, order, and receiving activity remain tied to the same process record, reducing communication gaps and follow-up burden.',
  },
  {
    title: 'Better procurement speed with less ambiguity',
    text: 'Requests, notes, approvals, and sourcing decisions stay visible end to end, helping institutions reduce friction across academic and administrative stakeholders.',
  },
  {
    title: 'Better spend intelligence',
    text: 'Leadership gains a clearer view into supplier concentration, category spend, contract utilization, and budget pressure across the institution.',
  },
];

export default function EducationPage() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_28%),linear-gradient(180deg,#f6fbff_0%,#ffffff_52%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container relative z-10 pb-16 md:pb-20 xl:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">Industry Solutions</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[13ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                  Procurement visibility for schools, campuses, and education teams
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  Talepnet helps education organizations manage requests, approvals, suppliers,
                  contracts, orders, receiving, and spend visibility in one connected workflow, so
                  academic operations move faster without weakening budget discipline or procurement
                  control.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#education-flow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See the Education Flow
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                <ImagePlaceholder
                  label="Education procurement placeholder"
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
                Education procurement has to serve classrooms, labs, campuses, facilities, and
                administrative teams at the same time. Talepnet gives institutions a more
                structured way to support those needs without letting purchasing drift into
                fragmented approvals, hidden spend, or disconnected supplier follow-up.
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
                Why education procurement becomes difficult to govern
              </span>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Educational institutions buy across many functions at once: classroom needs,
                facility support, technology, lab materials, services, maintenance, and campus
                operations. The challenge is not just volume. It is coordination. Different
                departments raise demand, finance needs budget clarity, approvers are distributed,
                and suppliers often serve multiple units under different urgency levels. Without a
                connected procurement model, visibility breaks down quickly.
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
                  Why Talepnet fits education environments
                </span>
                <h2 className="text-3xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-4">
                  Decentralized demand and centralized control can run in the same workflow model
                </h2>
                <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                  Talepnet is designed for organizations that need procurement structure across
                  multiple teams, roles, and locations. Its workflow-driven architecture,
                  cost-center-aware budget controls, supplier collaboration model, sourcing tools,
                  receiving flows, and spend visibility make it especially suitable for
                  institutions balancing decentralized demand with centralized financial and
                  procurement discipline.
                </p>
                <ImagePlaceholder
                  label="Campus procurement workflow placeholder"
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
                How Talepnet supports education procurement
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                One process chain across departments, campuses, suppliers, and spend control
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
                Built for real education procurement scenarios
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Adapted for academic, administrative, and facilities purchasing realities
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

      <section id="education-flow" className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#10222d_0%,#17384b_52%,#0d1720_100%)] p-8 text-white lg:p-10">
              <span className="text-tagline-1 inline-block text-white/62">A connected education procurement flow</span>
              <p className="mt-5 max-w-2xl text-2xl font-normal leading-tight text-white lg:text-4xl">
                The system keeps departmental demand, financial control, and execution outcomes connected across the institution.
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
                What education teams gain with Talepnet
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Better institutional control without slowing operational support down
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
                    Bring education procurement into one connected operating model
                  </span>
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                    Talepnet helps schools, colleges, and universities connect departmental
                    demand, approvals, budgets, suppliers, sourcing, orders, receiving, and spend
                    visibility in one procurement system.
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
