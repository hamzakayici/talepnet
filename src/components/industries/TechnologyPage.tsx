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
  'Run software, services, equipment, and operational spend through one workflow',
  'Scale approval logic as teams, thresholds, and departments grow',
  'Keep suppliers, contracts, sourcing, and orders connected',
  'Bring live budget and spend visibility closer to decision-making',
  'Keep every action traceable from request to receipt',
];

const valueSections = [
  {
    title: 'Flexible approval workflows for smart decision-makers',
    text: 'Eliminate approval bottlenecks, reduce uncontrolled spending, and give managers more confidence with configurable workflows. Talepnet routes requests, purchase forms, purchase approvals, and purchase orders through the right people based on thresholds, departments, positions, and organizational logic. The result is faster decisions with better control.',
  },
  {
    title: 'Budget compliance and spend visibility for finance teams',
    text: 'Technology companies often need tighter control over project budgets, departmental spend, and fast-changing purchasing demand. Talepnet connects cost centers, fiscal years, budget-aware controls, managed spend views, and spend insights so finance and procurement teams can see what is being requested, approved, sourced, and ordered before reporting surprises appear.',
  },
  {
    title: 'Centralized supplier and sourcing coordination',
    text: 'Talepnet helps technology teams manage suppliers, contacts, contracts, RFQ activity, quotations, purchase forms, and orders in one connected system. Buyers can compare multiple supplier quotations, surface contracted suppliers, reuse previous order context, and keep supplier communication tied to the workflow instead of spreading it across inboxes and side conversations.',
  },
  {
    title: 'Procurement execution that keeps up with growth',
    text: 'As technology companies scale, procurement complexity grows with them. Talepnet supports structured request intake, sourcing, purchase approvals, purchase orders, and receiving so growing teams can maintain visibility and consistency across departments, branches, and operating units without rebuilding the process every quarter.',
  },
];

const growthHighlights = [
  'Improve purchasing autonomy through structured request flows',
  'Scale approval logic as teams, departments, and spend levels grow',
  'Use live supplier and sourcing context to support better decisions',
  'Tie spend visibility back to budget and procurement strategy',
  'Keep every action traceable from request to receipt',
];

const useCases = [
  'Managing software, services, equipment, and operational spend through one process',
  'Supporting fast-growing teams with scalable approval logic',
  'Running quotation and supplier comparison across recurring purchasing needs',
  'Reusing contracts and supplier history to improve sourcing quality',
  'Improving budget discipline across departments, projects, or cost centers',
  'Keeping order execution and receiving visible after purchasing decisions are made',
];

const benefits = [
  {
    title: 'Full spending visibility',
    text: 'Gain a clearer view of supplier spend, category trends, cost center behavior, budget pressure, and procurement activity across the business.',
  },
  {
    title: 'Ease of use',
    text: 'Talepnet is designed to be usable by requesters, approvers, procurement, and finance teams from day one, without creating unnecessary operational friction.',
  },
  {
    title: 'Built around your processes',
    text: 'Workflows can reflect how your company actually makes decisions, whether that means multi-level approvals, cost-center-aware governance, or different routing paths across teams and branches.',
  },
];

export default function TechnologyPage() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.12),transparent_28%),linear-gradient(180deg,#f5faff_0%,#ffffff_52%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container relative z-10 pb-16 md:pb-20 xl:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">Industry Fit</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[12ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                  Technology teams need spend control that does not slow decisions down
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  Drive efficiency, gain full visibility into your spending, and help teams
                  collaborate more effectively across software, services, equipment, and
                  operational purchasing. Talepnet gives technology companies agile approval
                  workflows, stronger supplier control, and real-time budget visibility in one
                  connected procurement space.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#technology-flow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See the Technology Flow
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                <ImagePlaceholder
                  label="Technology procurement placeholder"
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
              <div className="space-y-4">
                <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                  Requesting power for all employees. Easy to adopt. Easy to control
                </span>
                <p className="max-w-5xl text-base leading-7 text-secondary/75 dark:text-accent/70">
                  Technology companies move fast, and purchasing cannot become the bottleneck.
                  Talepnet gives teams a collaborative procurement space where employees can raise
                  requests, managers can approve with context, procurement can run sourcing and
                  supplier workflows, and finance can stay close to budget and spend behavior
                  without relying on fragmented records.
                </p>
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
                Procurement structure for fast-growing technology teams
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Stronger approval control, supplier discipline, and spend visibility in one place
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {valueSections.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.2 + index * 0.06}>
                <article className="rounded-[26px] border border-stroke-3 bg-background-3 p-7 dark:border-stroke-7 dark:bg-background-5">
                  <h3 className="mb-3 text-2xl font-normal text-secondary dark:text-accent">
                    {item.title}
                  </h3>
                  <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                    {item.text}
                  </p>
                </article>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <RevealAnimation delay={0.14}>
            <div className="rounded-[28px] bg-white p-8 dark:bg-background-6 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Build procurement discipline without slowing down innovation
              </span>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Technology organizations need systems that can support autonomy and control at the
                same time. Talepnet helps teams purchase what they need through a governed process
                while leadership keeps visibility into suppliers, contracts, budget pressure, and
                spend behavior. That makes it easier to scale operations without letting
                procurement drift into reactive firefighting.
              </p>
              <ul className="mt-8 space-y-4">
                {growthHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary-500" />
                    <span className="text-sm leading-6 text-secondary/72 dark:text-accent/70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.22}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="space-y-5 p-8 lg:p-10">
                <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                  Control spend before, not after, it happens
                </span>
                <h2 className="text-3xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-4">
                  Approval and workflow logic that keeps pace with growth
                </h2>
                <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                  Talepnet is built to bring decision-making closer to the point of commitment.
                  Requests can be approved before purchasing moves forward, purchase forms can move
                  through sourcing and approval logic, and purchase orders remain tied to the
                  workflow record. This helps technology companies prevent maverick spend, improve
                  turnaround time, and make approvals easier to govern as the organization evolves.
                </p>
                <ImagePlaceholder
                  label="Technology workflow placeholder"
                  className="min-h-[220px] rounded-[22px]"
                />
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section id="technology-flow" className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#10222d_0%,#17384b_52%,#0d1720_100%)] p-8 text-white lg:p-10">
              <span className="text-tagline-1 inline-block text-white/62">
                Make better decisions with better context
              </span>
              <p className="mt-5 max-w-2xl text-2xl font-normal leading-tight text-white lg:text-4xl">
                Supplier history, contracts, quotation context, orders, and receiving all stay
                visible in the same procurement chain.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div className="rounded-[28px] border border-stroke-3 bg-background-3 p-8 dark:border-stroke-7 dark:bg-background-5 lg:p-10">
              <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                Talepnet gives procurement and finance teams a clearer picture of how purchasing
                decisions are being made. Supplier records, contracts, quotation history,
                previous orders, order execution, and receiving activity all contribute to a more
                complete view of spend behavior. That makes cost control more practical and
                supplier decisions more defensible.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 xl:grid-cols-[0.96fr_1.04fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Where Talepnet fits technology procurement best
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Practical use cases for teams scaling across tools, vendors, and budgets
              </h2>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.24}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-6 lg:p-10">
              <ul className="grid gap-4">
                {useCases.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary-500" />
                    <span className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Why technology companies choose Talepnet
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Benefits that go beyond functions
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.22 + index * 0.06}>
                <div className="rounded-[22px] bg-background-3 p-6 dark:bg-background-5">
                  <h3 className="text-xl font-normal text-secondary dark:text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-secondary/72 dark:text-accent/70">
                    {item.text}
                  </p>
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
                    Give your technology teams the freedom to move fast with better spend control
                  </span>
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                    Talepnet helps technology companies centralize requests, approvals, suppliers,
                    sourcing, orders, budgets, and spend visibility in one procurement system
                    designed for growth.
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
