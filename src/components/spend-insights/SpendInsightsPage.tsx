import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LinkButton from '@/components/ui/button/LinkButton';
import {
  ArrowRight,
  Check,
  CircleDollarSign,
  CircleGauge,
  ClipboardList,
  FileSearch,
  Gauge,
  LayoutDashboard,
  LineChart,
  Network,
  PieChart,
  ShieldCheck,
  TrendingUp,
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
      className={`flex min-h-[220px] items-center justify-center bg-[linear-gradient(135deg,#f5f8fc_0%,#fbfcfe_100%)] dark:bg-[linear-gradient(135deg,#171d24_0%,#0f141a_100%)] ${className}`}>
      <div className="rounded-full border border-dashed border-secondary/20 px-4 py-2 text-sm tracking-[0.14em] uppercase text-secondary/45 dark:border-accent/15 dark:text-accent/40">
        {label}
      </div>
    </div>
  );
}

const heroHighlights = [
  'Analyze spend across suppliers, categories, cost centers, and departments',
  'Monitor contracted versus non-contracted spend patterns',
  'Track budget and spend behavior together inside procurement workflows',
  'See where spend is concentrating before control weakens',
  'Connect supplier performance and delivery visibility to purchasing outcomes',
  'Use dashboards to spot concentration, drift, and control gaps earlier',
];

const painPoints = [
  'Spend is visible only after purchases are already committed',
  'Supplier concentration is hard to identify early',
  'Budget pressure is disconnected from day-to-day procurement activity',
  'Cost center ownership is not clear across the workflow',
  'Contracted and non-contracted spend are hard to compare',
  'Leadership sees totals, but not the behaviors creating them',
];

const features = [
  { title: 'Total Spend Visibility', description: 'Surface core spend KPIs directly in the workspace so teams can monitor procurement activity at a summary level without leaving the operating environment.', icon: CircleDollarSign },
  { title: 'Monthly Spend Trend Tracking', description: 'Analyze spend movement over time to identify seasonal patterns, demand shifts, and emerging cost pressure before they become harder to manage.', icon: LineChart },
  { title: 'Budget Overview', description: 'View used budget, remaining budget, and over-budget conditions in a clear operational format rather than relying on delayed finance-only reporting.', icon: Gauge },
  { title: 'Budget vs Actual Spend Context', description: 'Compare procurement activity against budget targets to understand whether spending is tracking within expected financial boundaries.', icon: Wallet },
  { title: 'Spend by Cost Center', description: 'Connect spend visibility to cost center ownership so financial accountability remains aligned with procurement activity.', icon: Network },
  { title: 'Managed Cost Center Spend', description: 'Give users visibility into the spend they are responsible for managing, turning budget ownership into something operationally actionable.', icon: ClipboardList },
  { title: 'Spend by Department', description: 'Show how purchasing activity is distributed across departments, helping organizations identify where demand and spend concentration are forming.', icon: Users },
  { title: 'Spend by Category', description: 'Understand which categories are driving procurement value, volatility, or commercial dependency across the business.', icon: PieChart },
  { title: 'Category Spend Trend Analysis', description: 'Track category-level spend movement over time to support better planning, sourcing focus, and procurement optimization.', icon: TrendingUp },
  { title: 'Top Supplier Spend Visibility', description: 'Identify which suppliers capture the largest share of procurement spend so teams can manage commercial dependence more intentionally.', icon: Users },
  { title: 'Top Supplier Spend by Category', description: 'See which suppliers dominate specific categories to assess supplier concentration and category-level risk more effectively.', icon: FileSearch },
  { title: 'Spend Pareto View', description: 'Highlight which suppliers or categories account for the majority of spend so teams can focus attention where procurement leverage is highest.', icon: LayoutDashboard },
  { title: 'Contracted vs Non-Contracted Spend', description: 'Show how much procurement activity is benefiting from negotiated coverage and how much is happening outside contract-backed control.', icon: ShieldCheck },
  { title: 'Maverick Spend Ratio', description: 'Monitor signals of purchasing behavior that may be happening outside preferred procurement discipline or contracted sourcing paths.', icon: Gauge },
  { title: 'Supplier Performance Context', description: 'Extend spend insight into supplier performance views so supplier spend can be considered alongside responsiveness and operational outcomes.', icon: CircleGauge },
  { title: 'Supplier Delivery Trend Visibility', description: 'Connect spend to supplier delivery execution, giving teams a better view of whether spend concentration is backed by reliable fulfillment.', icon: LineChart },
  { title: 'Supplier vs Target Visibility', description: 'Compare supplier outcomes against target views to support stronger supplier strategy and management decision-making.', icon: Gauge },
  { title: 'Active Contract KPI Context', description: 'Keep active contract coverage visible within the broader intelligence environment so spend and commercial structure can be reviewed together.', icon: ShieldCheck },
  { title: 'Recent Activity and Workflow Signals', description: 'Combine spend visibility with operational activity so users can connect financial trends to what is happening in requests, approvals, purchasing, and orders.', icon: ClipboardList },
  { title: 'Personalized Dashboard Layouts', description: 'Allow teams to shape the dashboard around the metrics most relevant to their role, responsibility, and procurement priorities.', icon: LayoutDashboard },
];

const steps = [
  { title: 'Capture spend through the workflow', text: 'Talepnet records procurement activity across requests, purchases, orders, suppliers, contracts, and receiving-related execution.' },
  { title: 'Connect spend to ownership and structure', text: 'Spend is tied to dimensions such as cost center, department, supplier, category, and budget context.' },
  { title: 'Surface the right management views', text: 'Dashboard widgets and insight views expose the patterns that matter most for operational and strategic procurement control.' },
  { title: 'Act before drift becomes a problem', text: 'Procurement and finance teams can respond earlier to budget pressure, supplier concentration, weak contract usage, or spend behavior that needs intervention.' },
];

const budgetMessages = [
  'Cost center-aware spend visibility',
  'Budget overview with used and remaining context',
  'Better ownership alignment across procurement and finance',
  'Stronger over-budget signal detection',
  'Better visibility into where spend pressure is forming',
];

const supplierMessages = [
  'Better supplier concentration visibility',
  'Better contract utilization visibility',
  'Better category-to-supplier mapping',
  'Better negotiation and sourcing prioritization',
  'Better understanding of commercial dependency',
];

const benefits = [
  { title: 'Better procurement control', text: 'Teams can identify spend behavior earlier and respond before weak discipline becomes embedded in the process.' },
  { title: 'Better budget governance', text: 'Budget and spend can be reviewed in the same operating model, helping finance and procurement stay aligned.' },
  { title: 'Better supplier strategy', text: 'Supplier spend and supplier performance can be assessed together, supporting stronger commercial decisions.' },
  { title: 'Better contract compliance', text: 'Contracted and non-contracted spend visibility helps organizations understand whether negotiated agreements are actually being used.' },
  { title: 'Better leadership visibility', text: 'Procurement leaders gain a clearer line of sight into where money is going, why it is moving that way, and where intervention would have the highest impact.' },
];

const useCases = [
  'Monitoring procurement spend across suppliers and categories',
  'Understanding spend by department, cost center, and category',
  'Tracking budget usage and over-budget risk in real time',
  'Identifying top suppliers and spend concentration patterns',
  'Reviewing contract utilization across actual purchasing activity',
  'Detecting maverick or weakly governed spend behavior',
  'Supporting sourcing and supplier strategy with better spend evidence',
  'Giving procurement leadership a stronger basis for planning and intervention',
];

const faqs = [
  { question: 'How is Talepnet’s spend visibility different from a basic spend report?', answer: 'Talepnet connects spend to procurement workflow context, showing how requests, approvals, suppliers, contracts, budgets, and execution activity are shaping spend behavior rather than presenting spend as an isolated finance output.' },
  { question: 'What dimensions can teams analyze in Spend Insights?', answer: 'Spend can be viewed across supplier, category, cost center, department, budget context, contract coverage, and time-based trend structures that support both operational and strategic analysis.' },
  { question: 'How does Talepnet connect spend visibility to budget control?', answer: 'By linking spend to cost centers, budget overview signals, managed spend views, and budget-versus-actual context, Talepnet helps teams understand financial pressure while procurement activity is still unfolding.' },
  { question: 'How does Spend Insights support supplier strategy?', answer: 'Talepnet combines supplier spend visibility with supplier-oriented performance and delivery context, helping teams see not only who receives spend, but how those suppliers are performing operationally.' },
  { question: 'Can Talepnet help identify spend outside negotiated coverage?', answer: 'Yes. Contracted versus non-contracted spend visibility helps procurement teams understand whether negotiated commercial structures are being used effectively.' },
  { question: 'Why does workflow context matter in spend analysis?', answer: 'Because spend quality depends on the process that created it. Without workflow context, organizations can see totals, but not the approval, sourcing, supplier, or contract behaviors that caused those totals.' },
];

export default function SpendInsightsPage() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_28%),linear-gradient(180deg,#f6faff_0%,#ffffff_52%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container relative z-10 pb-16 md:pb-20 xl:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">Product Overview</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[13ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                  Turn procurement activity into spend visibility you can act on
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  Talepnet connects requests, approvals, purchasing, suppliers, contracts, cost
                  centers, and execution data into a more operational view of spend, helping teams
                  understand not only how much is being spent, but how procurement decisions are
                  shaping that spend.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#spend-visibility"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See Spend Visibility in Action
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                  <ImagePlaceholder
                    label="Spend dashboard placeholder"
                    className="min-h-[320px] sm:min-h-[390px]"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                    <p className="text-sm tracking-[0.14em] uppercase text-secondary/45 dark:text-accent/45">Coverage</p>
                    <p className="mt-3 text-lg font-normal text-secondary dark:text-accent">Budget, contract, supplier context</p>
                  </div>
                  <div className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                    <p className="text-sm tracking-[0.14em] uppercase text-secondary/45 dark:text-accent/45">Patterns</p>
                    <p className="mt-3 text-lg font-normal text-secondary dark:text-accent">Concentration, drift, category pressure</p>
                  </div>
                  <div className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                    <p className="text-sm tracking-[0.14em] uppercase text-secondary/45 dark:text-accent/45">Action</p>
                    <p className="mt-3 text-lg font-normal text-secondary dark:text-accent">Intervene before control is lost</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>

        <div className="border-y border-stroke-3 bg-white/70 backdrop-blur-sm dark:border-stroke-7 dark:bg-background-6/80">
          <div className="main-container grid gap-8 py-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
            <RevealAnimation delay={0.12}>
              <p className="max-w-xl text-base leading-7 text-secondary/75 dark:text-accent/70">
                Spend visibility is most valuable when it is connected to the process that created
                it. Talepnet brings together request data, approval activity, sourcing decisions,
                supplier performance context, budget structures, purchase orders, and receiving
                outcomes to give procurement and finance teams a more complete picture of organizational spend.
              </p>
            </RevealAnimation>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <RevealAnimation delay={0.14}>
            <div className="rounded-[28px] bg-background-3 p-8 dark:bg-background-7 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                What is spend visibility in procurement?
              </span>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Spend visibility in procurement means understanding where money is going, why it
                is being spent, which suppliers and categories are driving it, and how that spend
                relates to budgets, approvals, and operational execution. Talepnet supports this
                by connecting spend insights directly to procurement workflows, so organizations
                can improve control, reduce blind spots, and make better purchasing decisions with
                stronger context.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.22}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="space-y-4 p-8 lg:p-10">
                  <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                    Why spend insights are hard to trust in disconnected systems
                  </span>
                  <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                    Many organizations can see what was spent in finance systems after the fact,
                    but that is not the same as procurement visibility. When requests, approvals,
                    supplier decisions, purchase orders, and receiving are handled across separate
                    tools, it becomes harder to understand how spend developed and where control
                    was lost.
                  </p>
                  <ul className="space-y-4">
                    {painPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <ArrowRight className="mt-1 size-4 shrink-0 text-primary-500" />
                        <span className="text-sm leading-6 text-secondary/72 dark:text-accent/70">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <ImagePlaceholder
                  label="Spend intelligence placeholder"
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
                A procurement intelligence layer, not just a reporting layer
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Spend insight is more useful when it stays connected to requests, suppliers, contracts, and execution
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.22}>
              <p className="max-w-3xl text-base leading-7 text-secondary/72 dark:text-accent/70">
                Talepnet approaches spend insights as part of procurement control. Instead of
                showing isolated summaries, the platform connects spend to requests, approvals,
                sourcing, contracts, suppliers, purchase orders, and receiving. This gives teams
                a stronger operational basis for understanding spend patterns and acting on them earlier.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <RevealAnimation key={feature.title} delay={0.2 + index * 0.03}>
                  <article className="rounded-[26px] border border-stroke-3 bg-background-3 p-7 dark:border-stroke-7 dark:bg-background-5">
                    <span className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl bg-primary-100 text-primary-600 dark:bg-primary-500/15 dark:text-primary-300">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mb-3 text-2xl font-normal text-secondary dark:text-accent">{feature.title}</h3>
                    <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">{feature.description}</p>
                  </article>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>

      <section id="spend-visibility" className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
        <div className="main-container">
          <div className="mb-12 max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
                <span className="hero-badge text-tagline-1 inline-block text-accent/65">
                  How Spend Insights work in Talepnet
                </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-accent lg:text-heading-3">
                See how spend forms across the workflow before weak control becomes expensive
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {steps.map((step, index) => (
              <RevealAnimation key={step.title} delay={0.24 + index * 0.08}>
                <article className="rounded-[24px] border border-white/10 bg-white/5 p-7">
                  <span className="mb-5 inline-flex h-8 items-center rounded-full border border-white/10 px-3 text-sm text-accent/70">Step {index + 1}</span>
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
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#10222d_0%,#17384b_52%,#0d1720_100%)] p-8 text-white lg:p-10">
              <span className="text-tagline-1 inline-block text-white/62">
                Spend insights connected to budget control
              </span>
              <p className="mt-5 max-w-2xl text-2xl font-normal leading-tight text-white lg:text-4xl">
                Budget status becomes more useful when it is reviewed with live procurement activity
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
                Talepnet’s spend insight model is strengthened by its finance-aligned structure.
                Cost centers and fiscal years are not isolated records. They are part of how spend
                is captured, grouped, and evaluated. This allows budget status, managed cost center
                spend, and procurement activity to be reviewed together instead of through separate
                systems and delayed reconciliation.
              </p>
            </div>
          </RevealAnimation>

          <div className="grid gap-4">
            {budgetMessages.map((item, index) => (
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
        <div className="main-container grid gap-8 xl:grid-cols-[0.96fr_1.04fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                See spend in the context of suppliers and contracts
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Spend visibility becomes more useful when supplier and contract context stay attached
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.22}>
              <p className="max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70">
                Talepnet helps teams understand where supplier concentration exists, which vendors
                dominate critical categories, and whether procurement activity is flowing through
                contracted commercial structures or outside them.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid gap-4">
            {supplierMessages.map((item, index) => (
              <RevealAnimation key={item} delay={0.22 + index * 0.06}>
                <div className="rounded-[22px] bg-background-3 p-6 dark:bg-background-5">
                  <p className="text-lg font-normal text-secondary dark:text-accent">{item}</p>
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
                  What better spend insight changes
                </span>
                <div className="grid gap-4 md:grid-cols-2">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="rounded-[18px] bg-background-3 p-5 dark:bg-background-5">
                      <h3 className="text-xl font-normal text-secondary dark:text-accent">{benefit.title}</h3>
                      <p className="mt-2 text-base leading-7 text-secondary/72 dark:text-accent/70">{benefit.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="space-y-5 p-8 lg:p-10">
                <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                  Where Spend Insights deliver the most value
                </span>
                <ul className="grid gap-4">
                  {useCases.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ArrowRight className="mt-1 size-4 shrink-0 text-primary-500" />
                      <span className="text-sm leading-6 text-secondary/72 dark:text-accent/70">{item}</span>
                    </li>
                  ))}
                </ul>
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
                    More than spend reporting
                  </span>
                  <h2 className="mt-4 text-3xl font-normal leading-tight text-white lg:text-4xl">
                    Traditional reporting shows totals. Talepnet helps explain the procurement behavior behind them.
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-7 text-white/75">
                    That difference matters because spend quality depends on the process behind it,
                    not just the final number.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'Not just finance totals, but procurement-linked spend context',
                    'Not just historical visibility, but live operational signals',
                    'Not just supplier names, but supplier concentration and performance context',
                    'Not just budgets, but budget behavior inside purchasing workflows',
                    'Not just category totals, but sourcing and contract implications',
                  ].map((metric) => (
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
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">FAQ</span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Common questions about Spend Insights
              </h2>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.24}>
            <Accordion className="space-y-4" defaultValue="spend-insights-faq-1" animationDelay={0.08}>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`spend-insights-faq-${index + 1}`}
                  className="rounded-[22px] border border-stroke-3 bg-white px-6 dark:border-stroke-7 dark:bg-background-6">
                  <AccordionTrigger
                    value={`spend-insights-faq-${index + 1}`}
                    className="flex w-full cursor-pointer items-center justify-between py-6"
                    titleClassName="flex-1 text-left text-lg font-normal text-secondary dark:text-accent"
                    iconType="arrow">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    value={`spend-insights-faq-${index + 1}`}
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
                    Make spend visibility part of procurement control
                  </span>
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                    Talepnet helps organizations move beyond static reporting with spend insights
                    connected to budgets, suppliers, contracts, approvals, and procurement execution.
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
