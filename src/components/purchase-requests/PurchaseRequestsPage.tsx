import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import {
  ArrowRight,
  Check,
  CircleDot,
  FileCheck2,
  FileText,
  Route,
  ShieldCheck,
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
      className={`flex min-h-[220px] items-center justify-center bg-[linear-gradient(135deg,#edf4f7_0%,#f8fbfc_100%)] dark:bg-[linear-gradient(135deg,#1b2530_0%,#10161d_100%)] ${className}`}>
      <div className="rounded-full border border-dashed border-secondary/20 px-4 py-2 text-sm tracking-[0.14em] uppercase text-secondary/45 dark:border-accent/15 dark:text-accent/40">
        {label}
      </div>
    </div>
  );
}

const heroHighlights = [
  'Standardize how employees request goods and services',
  'Reduce back-and-forth with complete, structured request forms',
  'Track request status from submission to approval and purchasing',
  'Improve visibility and control across teams and departments',
];

const painPoints = [
  'Requests are submitted in different formats with inconsistent information',
  'Teams waste time chasing missing details and approvals',
  'Employees do not know the status of their requests',
  'Procurement teams struggle to prioritize and manage incoming demand',
  'Finance lacks early visibility into upcoming spending',
];

const features = [
  {
    title: 'Guided Request Creation',
    description:
      'Help employees submit complete purchase requests with standardized fields, categories, quantities, delivery expectations, attachments, and business justification.',
    icon: FileText,
  },
  {
    title: 'Smart Request Routing',
    description:
      'Automatically direct requests to the right approvers, departments, or procurement teams based on rules, budget ownership, or request type.',
    icon: Route,
  },
  {
    title: 'Central Request Tracking',
    description:
      'Follow every request in one place with clear statuses, ownership, and timestamps from submission to final processing.',
    icon: CircleDot,
  },
  {
    title: 'Supporting Documents',
    description:
      'Attach specifications, quotes, technical files, and internal notes to keep all request context together.',
    icon: FileCheck2,
  },
  {
    title: 'Role-Based Visibility',
    description:
      'Give requesters, managers, procurement, and finance teams the exact visibility they need without exposing unnecessary information.',
    icon: ShieldCheck,
  },
  {
    title: 'Audit-Ready Records',
    description:
      'Maintain a clear history of who requested, reviewed, updated, and approved each purchase need.',
    icon: Check,
  },
];

const steps = [
  {
    title: 'Submit',
    text: 'Employees create a request using a structured form tailored to company policies and purchasing needs.',
  },
  {
    title: 'Review',
    text: 'Managers or designated approvers review the request with full business context and attached documents.',
  },
  {
    title: 'Process',
    text: 'Procurement teams receive validated requests and move forward with sourcing, ordering, or supplier coordination.',
  },
  {
    title: 'Track',
    text: 'Everyone involved can monitor progress, status changes, and next steps without relying on email follow-ups.',
  },
];

const benefits = [
  {
    title: 'Faster request cycles',
    text: 'Complete information at submission reduces delays and repeated clarification.',
  },
  {
    title: 'Better internal alignment',
    text: 'Requesters, approvers, procurement, and finance work from the same workflow and data.',
  },
  {
    title: 'More spending control',
    text: 'Requests become visible earlier, before purchasing decisions are finalized.',
  },
  {
    title: 'Less manual coordination',
    text: 'Standardization reduces emails, spreadsheets, and disconnected approval chains.',
  },
];

const useCases = [
  'Office equipment and IT hardware requests',
  'Operational supply requests from departments',
  'Service procurement requests',
  'Project-based purchasing needs',
  'Recurring internal purchase demands',
  'Multi-department purchasing workflows',
];

const metrics = [
  'Shorter request turnaround times',
  'Fewer incomplete submissions',
  'Better visibility into incoming demand',
  'Stronger policy and process compliance',
  'Reduced manual follow-up across teams',
];

const modules = [
  'Approvals',
  'Purchase Orders',
  'Supplier Management',
  'Budget Management',
  'Spend Insights',
];

const faqs = [
  {
    question: 'What is a purchase request?',
    answer:
      'A purchase request is the formal internal process of requesting goods or services before procurement or purchasing begins.',
  },
  {
    question: 'Who can create purchase requests in Talepnet?',
    answer:
      'Any authorized employee or department can submit requests based on your organization’s workflow and access rules.',
  },
  {
    question: 'Can purchase requests include documents and specifications?',
    answer:
      'Yes. Users can attach quotes, technical files, justifications, and other supporting documents.',
  },
  {
    question: 'Can requests be routed for approval automatically?',
    answer:
      'Yes. Talepnet can route requests based on approval rules, department structures, or request criteria.',
  },
  {
    question: 'Can requesters track status updates?',
    answer:
      'Yes. Requesters can see where their request stands and what step comes next.',
  },
];

export default function PurchaseRequestsPage() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(24,138,141,0.24),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_30%),linear-gradient(180deg,#f4fbfb_0%,#ffffff_52%,#f7f8fc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container relative z-10 pb-16 md:pb-20 xl:pb-24">
          <div className="grid items-end gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">Procurement Workflow</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[14ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                  Make every purchase request clear, fast, and controlled
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  Talepnet helps teams create, submit, track, and manage purchase requests in one
                  structured workflow, so nothing gets lost between need, approval, and procurement.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#how-it-works"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See How It Works
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                <ImagePlaceholder
                  label="Hero visual placeholder"
                  className="min-h-[320px] sm:min-h-[420px]"
                />
              </div>
            </RevealAnimation>
          </div>
        </div>

        <div className="border-y border-stroke-3 bg-white/70 backdrop-blur-sm dark:border-stroke-7 dark:bg-background-6/80">
          <div className="main-container grid gap-4 py-6 md:grid-cols-2 xl:grid-cols-4">
            {heroHighlights.map((item, index) => (
              <RevealAnimation key={item} delay={0.15 + index * 0.08}>
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

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 lg:grid-cols-[1fr_1.08fr]">
          <RevealAnimation delay={0.15}>
            <div className="rounded-[28px] bg-background-3 p-8 dark:bg-background-7 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Why purchase requests often become a bottleneck
              </span>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                In many organizations, purchase requests still arrive through emails, messages,
                spreadsheets, or incomplete forms. This creates delays, missing information, and
                limited visibility for procurement and finance teams.
              </p>
              <ul className="mt-8 space-y-4">
                {painPoints.map((item) => (
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

          <RevealAnimation delay={0.25}>
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="space-y-5 p-8 lg:p-10">
                <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                  A structured request flow from day one
                </span>
                <h2 className="text-3xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-4">
                  Give every team one reliable way to request what they need
                </h2>
                <p className="max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70">
                  Talepnet gives every department a consistent way to submit purchase needs.
                  Requesters provide the right details upfront, managers review with full context,
                  and procurement teams can move faster with fewer manual follow-ups.
                </p>
              </div>
              <ImagePlaceholder
                label="Workflow preview placeholder"
                className="min-h-[260px] sm:min-h-[320px]"
              />
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32">
        <div className="main-container space-y-12">
          <div className="max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Everything needed to manage purchase requests efficiently
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Built for requesters, approvers, procurement, and finance
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <RevealAnimation key={feature.title} delay={0.22 + index * 0.06}>
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

      <section id="how-it-works" className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
        <div className="main-container">
          <div className="mb-12 max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-accent/65">
                How purchase requests move through Talepnet
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-accent lg:text-heading-3">
                One request flow, clearly visible from start to finish
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
        <div className="main-container grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <RevealAnimation delay={0.1}>
                <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                  What teams gain
                </span>
              </RevealAnimation>
              <RevealAnimation delay={0.18}>
                <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                  Better control without slowing the business down
                </h2>
              </RevealAnimation>
            </div>

            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <RevealAnimation key={benefit.title} delay={0.24 + index * 0.07}>
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

          <div className="grid gap-5">
            <RevealAnimation delay={0.2}>
              <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
                <div className="space-y-4 p-8 lg:p-10">
                  <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                    Common purchase request scenarios
                  </span>
                  <ul className="grid gap-4 md:grid-cols-2">
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

            <RevealAnimation delay={0.28}>
              <div className="rounded-[28px] bg-[linear-gradient(135deg,#12393a_0%,#18595b_50%,#10292f_100%)] p-8 text-white lg:p-10">
                <span className="text-tagline-1 inline-block text-white/65">
                  Built to improve procurement efficiency
                </span>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {metrics.map((metric) => (
                    <div key={metric} className="rounded-[18px] border border-white/10 bg-white/5 p-4">
                      <p className="text-sm leading-6 text-white/82">{metric}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <RevealAnimation delay={0.12}>
            <div className="space-y-5">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Connected to the rest of the procurement process
              </span>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Purchase requests that connect cleanly with the next step
              </h2>
              <p className="max-w-2xl text-base leading-7 text-secondary/72 dark:text-accent/70">
                Purchase Requests work seamlessly with approvals, purchase orders, vendor
                workflows, budget controls, and reporting, helping your team manage the full
                purchasing lifecycle in one platform.
              </p>
            </div>
          </RevealAnimation>

          <div className="grid gap-4 sm:grid-cols-2">
            {modules.map((module, index) => (
              <RevealAnimation key={module} delay={0.2 + index * 0.07}>
                <div className="rounded-[24px] border border-stroke-3 bg-background-3 p-6 dark:border-stroke-7 dark:bg-background-5">
                  <p className="text-lg font-normal text-secondary dark:text-accent">{module}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
        <div className="main-container">
          <RevealAnimation delay={0.12}>
            <div className="overflow-hidden rounded-[32px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
                <ImagePlaceholder
                  label="Testimonial visual placeholder"
                  className="min-h-[280px] lg:min-h-full"
                />
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                    Customer perspective
                  </span>
                  <blockquote className="mt-5 text-2xl font-normal leading-tight text-secondary dark:text-accent lg:text-3xl">
                    “Before Talepnet, purchase requests were scattered across emails and
                    spreadsheets. Now every request follows a clear workflow, and our team has much
                    better visibility from the start.”
                  </blockquote>
                  <p className="mt-6 text-sm tracking-[0.16em] uppercase text-secondary/55 dark:text-accent/55">
                    Procurement Manager
                  </p>
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
                Common questions about purchase requests
              </h2>
            </RevealAnimation>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <RevealAnimation key={faq.question} delay={0.22 + index * 0.06}>
                <details className="group rounded-[22px] border border-stroke-3 bg-background-3 p-6 dark:border-stroke-7 dark:bg-background-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-normal text-secondary dark:text-accent">
                    <span>{faq.question}</span>
                    <span className="text-secondary/45 transition-transform group-open:rotate-45 dark:text-accent/45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-secondary/72 dark:text-accent/70">
                    {faq.answer}
                  </p>
                </details>
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
                    Bring structure to every purchase request
                  </span>
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                    Give employees an easy way to request what they need, while giving procurement
                    and finance the visibility and control they expect.
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
