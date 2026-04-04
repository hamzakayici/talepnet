import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LinkButton from '@/components/ui/button/LinkButton';
import {
  ArrowRight,
  BarChart3,
  Building2,
  CalendarClock,
  Check,
  CircleDollarSign,
  ClipboardList,
  GitBranchPlus,
  Lock,
  Network,
  PieChart,
  ShieldCheck,
  Users,
  Wallet,
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
      className={`flex min-h-[220px] items-center justify-center bg-[linear-gradient(135deg,#f4f8fb_0%,#fbfcfe_100%)] dark:bg-[linear-gradient(135deg,#171d24_0%,#0f141a_100%)] ${className}`}>
      <div className="rounded-full border border-dashed border-secondary/20 px-4 py-2 text-sm tracking-[0.14em] uppercase text-secondary/45 dark:border-accent/15 dark:text-accent/40">
        {label}
      </div>
    </div>
  );
}

const heroHighlights = [
  'Manage budget structures through cost centers and fiscal years',
  'Bring cost center ownership into request and approval flows',
  'Track spend against budget with live operational context',
  'Use budget signals in approval design and workflow policy',
  'Keep budget visibility connected to procurement activity, not only reporting',
];

const corePoints = [
  'Structure budget ownership through cost centers',
  'Control planning periods through fiscal years',
  'Carry budget context from request creation into downstream procurement',
  'Expose spend and utilization through operational dashboards',
  'Support workflow logic shaped by department, thresholds, and organizational structure',
];

const features = [
  {
    title: 'Cost Center Management',
    description:
      'Build a structured cost center model for procurement ownership, spend tracking, and budget control rather than treating departmental responsibility as informal metadata.',
    icon: Building2,
  },
  {
    title: 'Hierarchical Cost Center Structure',
    description:
      'Organize cost centers as expandable groups and leaf-level spending entities, allowing budget control to reflect real organizational structures instead of flat accounting lists.',
    icon: Network,
  },
  {
    title: 'Leaf-Level Budget Definition',
    description:
      'Assign budgets at the actual cost center level where spend should be controlled, while higher-level groups roll up budget and spend visibility across the hierarchy.',
    icon: Wallet,
  },
  {
    title: 'Cost Center Ownership',
    description:
      'Attach operational ownership to cost centers through organizational positions, creating a clearer accountability model around purchasing responsibility.',
    icon: Users,
  },
  {
    title: 'Fiscal Year Management',
    description:
      'Define the time boundary for budget control through managed fiscal years, giving procurement and finance a shared operational period for spend governance.',
    icon: CalendarClock,
  },
  {
    title: 'Fiscal Year Locking',
    description:
      'Lock fiscal years to prevent new spending or budget entries in closed periods, turning historical budget windows into controlled, read-only records.',
    icon: Lock,
  },
  {
    title: 'Budget-Enabled System Controls',
    description:
      'Enable budget management at the system level to unlock budget-related controls across finance and purchasing workflows.',
    icon: ShieldCheck,
  },
  {
    title: 'Cost Center Capture at Request Level',
    description:
      'Assign cost centers directly during request creation so budget ownership starts at intake rather than being reconstructed later in the process.',
    icon: ClipboardList,
  },
  {
    title: 'Default Cost Center by Position',
    description:
      'Pre-fill request lines with a position’s default cost center, reducing manual input while keeping budget ownership aligned with organizational roles.',
    icon: GitBranchPlus,
  },
  {
    title: 'Cost Center Snapshots Across the Flow',
    description:
      'Preserve cost center data on requests, purchases, and purchase-order items so budget context remains intact as procurement moves from intake to execution.',
    icon: CircleDollarSign,
  },
  {
    title: 'Budget-Aware Procurement Foundations',
    description:
      'Use cost centers and fiscal years as prerequisites for budget-aware procurement, ensuring spend control is built on governed financial structures.',
    icon: ShieldCheck,
  },
  {
    title: 'Workflow Rule Alignment',
    description:
      'Support procurement workflows that reflect real approval logic, including departments, amount thresholds, and organizational ownership patterns that often sit behind budget-sensitive decisions.',
    icon: GitBranchPlus,
  },
  {
    title: 'Approval Context with Budget Signals',
    description:
      'Give approvers better context by keeping department and cost-center ownership visible where purchasing decisions require stronger financial discipline.',
    icon: Check,
  },
  {
    title: 'Budget Overview Dashboarding',
    description:
      'Surface budget status through dedicated dashboard widgets that show used, remaining, and over-budget conditions in an operational format.',
    icon: PieChart,
  },
  {
    title: 'Managed Cost Center Spend Visibility',
    description:
      'Give responsible users a view of spend across the cost centers they manage, making budget control more actionable and less abstract.',
    icon: BarChart3,
  },
  {
    title: 'Spend by Cost Center and Department',
    description:
      'Extend budget visibility into procurement analytics through cost-center- and department-oriented spend views, helping teams understand where budget pressure is forming.',
    icon: BarChart3,
  },
];

const steps = [
  {
    title: 'Define the financial structure',
    text: 'Finance and operations teams create fiscal years and cost center hierarchies that reflect real responsibility and planning boundaries.',
  },
  {
    title: 'Attach budget ownership to procurement',
    text: 'Requests capture cost center context from the start, with default organizational assignments reducing friction and improving consistency.',
  },
  {
    title: 'Carry budget context through workflow',
    text: 'Cost center information remains attached as requests become purchases and purchase-order activity, preserving financial ownership across the flow.',
  },
  {
    title: 'Monitor spend and budget status',
    text: 'Dashboards and operational views show budget utilization, managed cost center spend, and over-budget pressure while procurement is still in motion.',
  },
];

const supportBlocks = [
  'Department-aware workflow design',
  'Threshold-based approval logic',
  'Cost center ownership in request context',
  'Better financial clarity for approvers',
  'Stronger continuity between policy and execution',
];

const insightBlocks = [
  'Budget overview widgets',
  'Managed cost center spend views',
  'Spend by cost center visibility',
  'Department-oriented spend analysis',
  'Over-budget and remaining-budget signals',
  'Budget variance context for management review',
];

const benefits = [
  {
    title: 'Better financial ownership',
    text: 'Purchasing activity is tied more clearly to who owns the spend and which cost center should carry it.',
  },
  {
    title: 'Better approval quality',
    text: 'Approvers can evaluate requests with stronger financial context instead of reviewing demand in isolation.',
  },
  {
    title: 'Better control before commitment',
    text: 'Budget signals appear earlier in the workflow, where they can influence decisions rather than merely explain them afterward.',
  },
  {
    title: 'Better period governance',
    text: 'Fiscal-year controls help teams separate active planning windows from locked historical periods.',
  },
  {
    title: 'Better spend visibility',
    text: 'Budget status becomes easier to monitor across departments, cost centers, and managed procurement responsibility.',
  },
];

const useCases = [
  'Assigning annual budgets to operational cost centers',
  'Structuring cost center groups for roll-up visibility',
  'Prefilling requests with default departmental cost center ownership',
  'Keeping cost center identity attached through request, purchase, and PO flows',
  'Supporting approval logic shaped by budget-sensitive thresholds and ownership',
  'Monitoring managed spend against available budget',
  'Locking closed fiscal periods to protect budget integrity',
  'Understanding over-budget pressure before procurement activity drifts too far',
];

const modules = [
  'Cost Centers',
  'Fiscal Years',
  'Purchase Requests',
  'Approvals',
  'Purchase Orders',
  'Spend Insights',
];

const metrics = [
  'Better spend visibility by cost center',
  'Stronger alignment between approvals and financial ownership',
  'Earlier detection of over-budget pressure',
  'Better managed cost center oversight',
  'Cleaner continuity from request to financial control',
  'Stronger fiscal-period discipline',
];

const faqs = [
  {
    question: 'How does Talepnet make budget management operational instead of purely financial?',
    answer:
      'Talepnet connects budget structures to procurement execution by tying cost centers, fiscal years, request context, workflow ownership, and spend visibility into the same operating model.',
  },
  {
    question: 'What sits at the core of budget management in Talepnet?',
    answer:
      'The foundation is built on cost centers and fiscal years. Together, they define who owns spend, where it should be tracked, and which planning period governs budget activity.',
  },
  {
    question: 'How does budget context enter the procurement workflow?',
    answer:
      'Budget context begins at request creation through cost center assignment, can be prefilled from organizational positions, and remains attached through downstream purchasing records.',
  },
  {
    question: 'Does budget management affect approvals and workflow design?',
    answer:
      'Indirectly, yes. Talepnet’s workflow model supports rules shaped by departments, organizational ownership, and amount thresholds, which are central to how budget-sensitive approval logic is usually enforced.',
  },
  {
    question: 'How does Talepnet support budget visibility after setup?',
    answer:
      'Through dashboard widgets and spend views such as budget overview, managed cost center spend, and cost-center-oriented spend visibility that help teams monitor utilization while procurement is active.',
  },
  {
    question: 'Why do fiscal year locks matter?',
    answer:
      'Because they prevent new spending or budget entries in closed periods, helping organizations maintain stronger period control and cleaner financial governance.',
  },
];

export default function BudgetManagementPage() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_28%),linear-gradient(180deg,#f6fbf7_0%,#ffffff_52%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container relative z-10 pb-16 md:pb-20 xl:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">Finance-Aligned Procurement</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[13ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                  Bring budget control into the procurement workflow, not after it
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  Talepnet connects budget management to cost centers, fiscal years, request
                  creation, approval logic, and spend visibility, helping organizations control
                  purchasing before commitments turn into financial surprises.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#budget-workflow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See Budget Workflow
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                  <ImagePlaceholder
                    label="Budget control workspace placeholder"
                    className="min-h-[320px] sm:min-h-[390px]"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                    <p className="text-sm tracking-[0.14em] uppercase text-secondary/45 dark:text-accent/45">
                      Structure
                    </p>
                    <p className="mt-3 text-lg font-normal text-secondary dark:text-accent">
                      Cost centers and fiscal years
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                    <p className="text-sm tracking-[0.14em] uppercase text-secondary/45 dark:text-accent/45">
                      Workflow
                    </p>
                    <p className="mt-3 text-lg font-normal text-secondary dark:text-accent">
                      Ownership, thresholds, approvals
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                    <p className="text-sm tracking-[0.14em] uppercase text-secondary/45 dark:text-accent/45">
                      Visibility
                    </p>
                    <p className="mt-3 text-lg font-normal text-secondary dark:text-accent">
                      Used, remaining, over-budget
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>

        <div className="border-y border-stroke-3 bg-white/70 backdrop-blur-sm dark:border-stroke-7 dark:bg-background-6/80">
          <div className="main-container grid gap-4 py-6 md:grid-cols-2 xl:grid-cols-5">
            {heroHighlights.map((item, index) => (
              <RevealAnimation key={item} delay={0.15 + index * 0.06}>
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
                Budget management only works when it is connected to procurement behavior
              </span>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                In many organizations, budgets live in finance files while procurement decisions
                happen elsewhere. That disconnect weakens control. Talepnet closes the gap by
                connecting budget structures to the operating flow of requests, approvals,
                purchases, and spend visibility, so budget control becomes part of decision-making
                rather than a retrospective exercise.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.22}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="space-y-4 p-8 lg:p-10">
                  <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                    From budget definition to budget-aware procurement
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
                  label="Budget-aware procurement placeholder"
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
                How Talepnet operationalizes budget management
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Budget structures become live procurement signals, not background accounting fields
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

      <section id="budget-workflow" className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
        <div className="main-container">
          <div className="mb-12 max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-accent/65">
                How Budget Management works in Talepnet
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-accent lg:text-heading-3">
                From financial structure to live spend visibility
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
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#10222d_0%,#163f39_52%,#0d1720_100%)] p-8 text-white lg:p-10">
              <span className="text-tagline-1 inline-block text-white/62">
                Budget discipline is also a workflow design problem
              </span>
              <p className="mt-5 max-w-2xl text-2xl font-normal leading-tight text-white lg:text-4xl">
                Financial control becomes stronger when approvals reflect ownership, thresholds,
                and real organizational logic.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
                Talepnet’s workflow model is designed to reflect how organizations actually govern
                purchasing. Approval flows can be shaped by organizational structure, department
                logic, and amount thresholds, which is exactly where budget-sensitive control
                usually lives. Budget management is therefore not isolated from approvals. It
                informs how financial responsibility is represented inside the process.
              </p>
            </div>
          </RevealAnimation>

          <div className="grid gap-4">
            {supportBlocks.map((item, index) => (
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
        <div className="main-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-6 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Operational budget visibility, not just accounting hindsight
              </span>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Talepnet does not position budget management as a passive finance module. It
                connects budget structures to procurement activity and dashboard visibility,
                helping teams understand how spend is accumulating against owned cost centers and
                planned periods before control is lost.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-6 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Budget visibility section
              </span>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {insightBlocks.map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] border border-stroke-3 bg-background-3 px-4 py-3 text-sm text-secondary/75 dark:border-stroke-7 dark:bg-background-5 dark:text-accent/70">
                    {item}
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
                What changes when budget control is connected to procurement
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Better ownership, better approval quality, earlier control
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
                  Where Budget Management creates real value
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
                  Connected across procurement and finance
                </span>
                <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                  Budget Management in Talepnet is connected to Cost Centers, Fiscal Years, Request
                  Creation, Approval Workflows, Purchasing data, and dashboard-level spend
                  visibility. It acts as a financial control layer across the full procurement
                  operating model.
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

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32">
        <div className="main-container">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#16344f_0%,#245772_52%,#102033_100%)] p-8 text-white lg:p-10">
              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <span className="text-tagline-1 inline-block text-white/65">
                    Built to strengthen budget-aware procurement
                  </span>
                  <h2 className="mt-4 text-3xl font-normal leading-tight text-white lg:text-4xl">
                    Budget control should influence procurement while the process is still moving
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
                Common questions about budget management
              </h2>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.24}>
            <Accordion className="space-y-4" defaultValue="budget-management-faq-1" animationDelay={0.08}>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`budget-management-faq-${index + 1}`}
                  className="rounded-[22px] border border-stroke-3 bg-white px-6 dark:border-stroke-7 dark:bg-background-6">
                  <AccordionTrigger
                    value={`budget-management-faq-${index + 1}`}
                    className="flex w-full cursor-pointer items-center justify-between py-6"
                    titleClassName="flex-1 text-left text-lg font-normal text-secondary dark:text-accent"
                    iconType="arrow">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    value={`budget-management-faq-${index + 1}`}
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
                    Make budget control part of procurement execution
                  </span>
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                    Connect cost centers, fiscal years, approvals, and spend visibility in one
                    procurement model that keeps financial control close to operational decisions.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#budget-workflow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See Budget Controls
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
