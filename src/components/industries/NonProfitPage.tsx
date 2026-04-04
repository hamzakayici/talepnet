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
  'Centralize requests, suppliers, orders, and budget visibility',
  'Keep every approval and purchase tied to a clear workflow record',
  'Reduce paper-heavy coordination and disconnected follow-up',
  'Strengthen accountability without adding process friction',
  'Track spend and budget pressure while decisions are still moving',
];

const valueSections = [
  {
    title: 'Transparent spend management and stronger reporting',
    text: 'Talepnet helps nonprofits bring spending into a more structured control model. Cost centers, fiscal years, budget-aware request flows, managed spend views, supplier spend visibility, and category-level insights give teams a clearer picture of how resources are being used. Instead of waiting for fragmented reports after the fact, leadership can see spend behavior while decisions are still moving through the process.',
  },
  {
    title: 'Keep every approval and purchase accountable',
    text: 'Mission-driven organizations often need strong internal accountability without adding more administrative friction. Talepnet supports configurable workflows for requests, approvals, purchasing, purchase approvals, orders, and receiving. Each action stays tied to the workflow record, helping teams understand what was requested, who approved it, what was sourced, and how execution progressed.',
  },
  {
    title: 'Centralize supplier and contract coordination',
    text: 'Talepnet gives nonprofits one place to manage supplier records, contacts, contracts, RFQ activity, quotations, purchase orders, and receiving history. Buyers can surface contracted suppliers, compare quotations, reuse previous order context, and keep supplier communication connected to the procurement chain instead of spreading it across separate inboxes and files.',
  },
  {
    title: 'Reduce manual work and paper-heavy processes',
    text: 'Requesting, approving, sourcing, ordering, and receiving can all be handled digitally inside Talepnet. That helps organizations reduce repetitive manual coordination, improve traceability, and keep documentation easier to review when internal governance or external oversight requires clear records.',
  },
];

const budgetHighlights = [
  'Set up budget-aware cost center structures',
  'Track spend against the responsible area of the organization',
  'Keep budget context attached from request to purchase',
  'Use budget visibility to support better approval decisions',
  'Monitor managed spend and over-budget pressure in real time',
];

const useCases = [
  'Managing requests and approvals across distributed teams or programs',
  'Bringing supplier, contract, and quotation activity into one system',
  'Keeping mission-critical purchasing visible without increasing admin overhead',
  'Strengthening budget discipline across departments and cost centers',
  'Building a cleaner audit trail across requests, approvals, orders, and receiving',
  'Improving spend visibility so leadership can protect limited resources',
];

const benefits = [
  {
    title: 'Ease of use',
    text: 'Talepnet is designed to be usable by operational teams, approvers, procurement, and finance without requiring a heavy technical rollout.',
  },
  {
    title: 'Better use of limited resources',
    text: 'With stronger spend visibility, cleaner workflows, and less fragmented purchasing activity, organizations can direct more attention toward mission delivery instead of administrative recovery.',
  },
  {
    title: 'Long-term process clarity',
    text: 'Talepnet helps nonprofits move away from disconnected approvals and scattered records toward a procurement model that is easier to govern, explain, and improve over time.',
  },
];

export default function NonProfitPage() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(245,158,11,0.12),transparent_28%),linear-gradient(180deg,#f8fcf8_0%,#ffffff_52%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container relative z-10 pb-16 md:pb-20 xl:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">Industry Fit</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[12ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                  Give nonprofit teams a clearer system for purchasing and budget control
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  Focus on your mission while Talepnet helps you organize requests, approvals,
                  suppliers, orders, receiving, budgets, and spend visibility in one easy-to-manage
                  procurement environment.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#nonprofit-flow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See the Nonprofit Flow
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                <ImagePlaceholder
                  label="Nonprofit procurement placeholder"
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
                  A digital home for your requests, suppliers, orders, and budget controls
                </span>
                <p className="max-w-5xl text-base leading-7 text-secondary/75 dark:text-accent/70">
                  Whether your organization works from one office, multiple programs, or
                  distributed field operations, Talepnet is designed to keep purchasing activity
                  visible in one unified environment. Teams can request the resources they need,
                  managers can approve with context, procurement can coordinate suppliers and
                  sourcing, and finance can stay closer to budgets and spend without chasing
                  disconnected records.
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
                Procurement structure built for accountable operations
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                One system for transparency, supplier control, and cleaner execution
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
                See how spend affects budgets before money is committed
              </span>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Nonprofits need to know not only what has been spent, but what a new request or
                purchase will mean for the budget structure behind it. Talepnet connects cost
                centers, budget controls, approval logic, and spend visibility so teams can
                evaluate purchasing decisions before commitments move too far forward.
              </p>
              <ul className="mt-8 space-y-4">
                {budgetHighlights.map((item) => (
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
                  Stay prepared with clear workflow history and cleaner records
                </span>
                <h2 className="text-3xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-4">
                  Audit-ready visibility without rebuilding the history later
                </h2>
                <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                  Accountability matters more when every dollar has to be justified. Talepnet
                  keeps requests, approvals, comments, supplier decisions, purchase actions, order
                  steps, and receiving activity tied to the same operational history. This makes
                  it easier to review how a purchasing decision was made, who acted on it, and how
                  the process concluded.
                </p>
                <ImagePlaceholder
                  label="Audit and budget placeholder"
                  className="min-h-[220px] rounded-[22px]"
                />
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section id="nonprofit-flow" className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#10222d_0%,#17384b_52%,#0d1720_100%)] p-8 text-white lg:p-10">
              <span className="text-tagline-1 inline-block text-white/62">
                Build workflows around your organization&apos;s reality
              </span>
              <p className="mt-5 max-w-2xl text-2xl font-normal leading-tight text-white lg:text-4xl">
                Departments, programs, locations, and thresholds can all fit into the same
                governed process model.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div className="rounded-[28px] border border-stroke-3 bg-background-3 p-8 dark:border-stroke-7 dark:bg-background-5 lg:p-10">
              <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                Nonprofits often operate across programs, departments, locations, and funding
                constraints. Talepnet&apos;s workflow model can reflect that complexity through
                configurable approval and execution steps shaped by department structure, role
                ownership, and decision thresholds. The goal is not just automation. It is a
                process that stays aligned with how your organization actually governs spending.
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
                Where Talepnet fits nonprofit procurement best
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Practical use cases for distributed, mission-driven organizations
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
                Why nonprofits choose Talepnet
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Benefits that go beyond features
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
                    Help your team focus on impact, not procurement chaos
                  </span>
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                    Talepnet gives nonprofits a more structured way to manage requests, approvals,
                    suppliers, budgets, and spend visibility while keeping every purchasing
                    decision connected to the mission it supports.
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
