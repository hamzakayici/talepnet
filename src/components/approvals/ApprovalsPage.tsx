import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import {
  ArrowRight,
  Check,
  CircleDot,
  FileSearch,
  History,
  Route,
  Settings2,
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
  'Route approvals to the right people automatically',
  'Reduce delays with structured, trackable workflows',
  'Give approvers full context before they decide',
  'Maintain control with complete approval history',
];

const painPoints = [
  'Approval requests are sent through scattered channels',
  'Decision-makers do not have enough context to act quickly',
  'Teams cannot see who is blocking the next step',
  'Manual follow-up creates delays and frustration',
  'There is no reliable record of approval actions and timing',
];

const features = [
  {
    title: 'Configurable Approval Flows',
    description:
      'Build approval workflows based on department, request type, amount, budget ownership, or internal policy requirements.',
    icon: Settings2,
  },
  {
    title: 'Automatic Routing',
    description:
      'Send requests directly to the correct approvers without relying on manual forwarding or email chains.',
    icon: Route,
  },
  {
    title: 'Full Request Context',
    description:
      'Give approvers access to request details, documents, budgets, comments, and related records before making a decision.',
    icon: FileSearch,
  },
  {
    title: 'Status Visibility',
    description:
      'Track every approval stage in real time so requesters, managers, and procurement teams can see where things stand.',
    icon: CircleDot,
  },
  {
    title: 'Approval History',
    description:
      'Keep a clear, auditable record of who approved, rejected, reviewed, or sent back each request.',
    icon: History,
  },
  {
    title: 'Exception Handling',
    description:
      'Manage rejections, revisions, escalations, and special approval scenarios without breaking the workflow.',
    icon: ShieldCheck,
  },
];

const steps = [
  {
    title: 'Trigger',
    text: 'A purchase request, form, or related workflow enters the approval process based on predefined rules.',
  },
  {
    title: 'Route',
    text: 'Talepnet assigns the request to the right approver or approval chain automatically.',
  },
  {
    title: 'Decide',
    text: 'Approvers review the request with full context and approve, reject, or request revision.',
  },
  {
    title: 'Continue',
    text: 'Once approved, the request moves forward to the next workflow stage such as purchasing, vendor action, or budget follow-up.',
  },
];

const benefits = [
  {
    title: 'Faster decisions',
    text: 'Clear ownership and complete request data reduce waiting time and back-and-forth.',
  },
  {
    title: 'Better governance',
    text: 'Approval rules are applied consistently across teams, departments, and spending categories.',
  },
  {
    title: 'Stronger accountability',
    text: 'Every decision is timestamped and traceable for internal control and audit readiness.',
  },
  {
    title: 'Less operational friction',
    text: 'Teams spend less time chasing approvals and more time moving work forward.',
  },
];

const useCases = [
  'Purchase request approvals',
  'Budget-related approval steps',
  'Department manager approvals',
  'Multi-level financial approvals',
  'Procurement review and sign-off',
  'Exception and escalation approvals',
];

const metrics = [
  'Shorter approval turnaround times',
  'Fewer stalled requests',
  'Better process transparency',
  'More consistent policy enforcement',
  'Reduced manual coordination across teams',
];

const modules = [
  'Purchase Requests',
  'Purchase Forms',
  'Purchase Orders',
  'Budget Management',
  'Supplier Management',
  'Spend Insights',
];

const roles = [
  {
    title: 'Requester',
    text: 'Submit requests and follow approval progress without chasing updates.',
  },
  {
    title: 'Manager',
    text: 'Review requests with business context and make timely, informed decisions.',
  },
  {
    title: 'Procurement Team',
    text: 'Receive approved requests in a more organized, actionable format.',
  },
  {
    title: 'Finance Team',
    text: 'Gain visibility into financial commitments before purchasing moves ahead.',
  },
];

const faqs = [
  {
    question: 'What can be approved in Talepnet?',
    answer:
      'Talepnet supports approvals for purchase requests, forms, budget-related workflows, and other procurement-driven processes.',
  },
  {
    question: 'Can approval workflows be customized?',
    answer:
      'Yes. Approval flows can be configured based on organizational rules, departments, spending limits, and workflow conditions.',
  },
  {
    question: 'Can multiple approvers be involved?',
    answer: 'Yes. Talepnet supports multi-step and multi-role approval processes.',
  },
  {
    question: 'Can approvers reject or request changes?',
    answer:
      'Yes. Approvers can approve, reject, or return requests for revision depending on your workflow design.',
  },
  {
    question: 'Is the approval history recorded?',
    answer: 'Yes. Every approval action is logged with clear visibility into decisions and timing.',
  },
];

export default function ApprovalsPage() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_30%),linear-gradient(180deg,#f5faff_0%,#ffffff_52%,#f7f8fc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container relative z-10 pb-16 md:pb-20 xl:pb-24">
          <div className="grid items-end gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">Procurement Workflow</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[14ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                  Keep approvals moving without losing control
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  Talepnet helps organizations manage approval workflows with clarity, speed, and
                  accountability, so every request reaches the right decision-makers on time.
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
                    See the Workflow
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                <ImagePlaceholder
                  label="Approval workflow placeholder"
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
                Why approval processes slow teams down
              </span>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Approval workflows often break when decisions depend on email chains, chat
                messages, or disconnected tools. Requests get stuck, ownership becomes unclear, and
                teams lose time following up manually.
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
                  A clear approval flow for every request
                </span>
                <h2 className="text-3xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-4">
                  Centralize decisions without creating more friction
                </h2>
                <p className="max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70">
                  Talepnet centralizes approvals into a structured workflow where each step is
                  visible, rules are defined, and every decision is recorded. Approvers see the
                  right information at the right time, and teams always know what comes next.
                </p>
              </div>
              <ImagePlaceholder
                label="Approval stage preview placeholder"
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
                Everything needed to manage approvals with confidence
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Structured approvals built for real operational use
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
                How approvals move through Talepnet
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-accent lg:text-heading-3">
                One decision flow, visible from trigger to outcome
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
                  What better approvals change
                </span>
              </RevealAnimation>
              <RevealAnimation delay={0.18}>
                <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                  Less waiting, more forward motion
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
                    Common approval scenarios
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
                  Built to improve approval performance
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
                Connected to the full procurement lifecycle
              </span>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Approvals that connect directly to what happens next
              </h2>
              <p className="max-w-2xl text-base leading-7 text-secondary/72 dark:text-accent/70">
                Approvals in Talepnet are not isolated steps. They connect directly with purchase
                requests, forms, purchase orders, budget management, vendor workflows, and
                reporting, helping your organization move from request to execution in one
                continuous process.
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
        <div className="main-container grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <RevealAnimation delay={0.12}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <ImagePlaceholder
                label="Role workflow placeholder"
                className="min-h-[280px] sm:min-h-[360px]"
              />
            </div>
          </RevealAnimation>

          <div className="space-y-5">
            <RevealAnimation delay={0.18}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Built for every stakeholder in the process
              </span>
            </RevealAnimation>
            <div className="grid gap-4">
              {roles.map((role, index) => (
                <RevealAnimation key={role.title} delay={0.22 + index * 0.07}>
                  <div className="rounded-[22px] bg-white p-6 dark:bg-background-6">
                    <h3 className="text-xl font-normal text-secondary dark:text-accent">
                      {role.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-secondary/72 dark:text-accent/70">
                      {role.text}
                    </p>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32">
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
                    “Talepnet gave us a much more structured approval process. We can see exactly
                    where requests are waiting, who needs to act, and how decisions are being
                    made.”
                  </blockquote>
                  <p className="mt-6 text-sm tracking-[0.16em] uppercase text-secondary/55 dark:text-accent/55">
                    Operations or Procurement Lead
                  </p>
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
                Common questions about approvals
              </h2>
            </RevealAnimation>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <RevealAnimation key={faq.question} delay={0.22 + index * 0.06}>
                <details className="group rounded-[22px] border border-stroke-3 bg-white p-6 dark:border-stroke-7 dark:bg-background-6">
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
                    Turn approvals into a process, not a bottleneck
                  </span>
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                    Give every approval the structure, visibility, and control it needs to keep
                    procurement moving smoothly.
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
