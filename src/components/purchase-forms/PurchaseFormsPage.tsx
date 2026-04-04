import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LinkButton from '@/components/ui/button/LinkButton';
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  FileInput,
  GitCompareArrows,
  History,
  Mail,
  NotebookPen,
  PackageSearch,
  Route,
  ScanSearch,
  ShieldCheck,
  TrendingUp,
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
      className={`flex min-h-[220px] items-center justify-center bg-[linear-gradient(135deg,#eef4f2_0%,#fbfcfb_100%)] dark:bg-[linear-gradient(135deg,#1a2421_0%,#101715_100%)] ${className}`}>
      <div className="rounded-full border border-dashed border-secondary/20 px-4 py-2 text-sm tracking-[0.14em] uppercase text-secondary/45 dark:border-accent/15 dark:text-accent/40">
        {label}
      </div>
    </div>
  );
}

const heroHighlights = [
  'Generate purchase forms directly from selected requests',
  'Collect and compare multiple supplier quotations in one workspace',
  'Reuse contracted suppliers and previous order intelligence',
  'Send RFQs by email or supplier portal link',
  'Submit selected quotations into the next approval or execution step',
];

const corePoints = [
  'Convert selected requests into a new purchase form',
  'Group required items into one purchasing workspace',
  'Keep every line tied to the original request context',
  'Prepare sourcing decisions before purchase approval, order placement, and receiving',
];

const features = [
  {
    title: 'Generate Forms from Requests',
    description:
      'Create purchase forms from selected pending requests so purchasing starts from live operational demand instead of manual re-entry.',
    icon: FileInput,
  },
  {
    title: 'Multi-Quotation Comparison',
    description:
      'Add multiple quotation forms per purchase form and compare supplier responses line by line across the same purchasing need.',
    icon: GitCompareArrows,
  },
  {
    title: 'Manual and Portal Quote Sources',
    description:
      'Manage quotations entered manually by the team or imported from supplier portal responses inside the same sourcing workspace.',
    icon: ClipboardCheck,
  },
  {
    title: 'RFQ Email Sending',
    description:
      'Send RFQs directly to suppliers from the purchase form, including PDF support and optional supplier portal access for online quote submission.',
    icon: Mail,
  },
  {
    title: 'RFQ Monitor',
    description:
      'Track RFQ outreach and portal activity in a dedicated monitor so buyers can follow response progress and import portal quotes back into the form.',
    icon: ScanSearch,
  },
  {
    title: 'Contracted Supplier Suggestions',
    description:
      'Surface matching contracts for purchase items and quickly bring contracted suppliers into the sourcing decision process.',
    icon: ShieldCheck,
  },
  {
    title: 'Previous Order Intelligence',
    description:
      'Review previous supplier orders for the same items to reuse pricing history and compare current sourcing decisions against past buying behavior.',
    icon: History,
  },
  {
    title: 'Lowest-Price Selection',
    description:
      'Automatically select the lowest available quotation lines when speed matters, while still keeping buyer control over final supplier choice.',
    icon: Check,
  },
  {
    title: 'Best vs Selected Total Visibility',
    description:
      'See the best available total and the final selected total side by side to understand sourcing quality before submission.',
    icon: TrendingUp,
  },
  {
    title: 'Item-Level Trends and History',
    description:
      'Open purchasing trends and inventory history for each item directly from the form to support better commercial decisions.',
    icon: PackageSearch,
  },
  {
    title: 'Purchase Notes and Line Control',
    description:
      'Add internal notes, remove items when needed, and keep the form aligned with the real sourcing scenario.',
    icon: NotebookPen,
  },
  {
    title: 'Workflow Submission',
    description:
      'Submit the purchase form into the configured workflow so selected quotations move into the next approval or purchasing execution step.',
    icon: Route,
  },
];

const steps = [
  {
    title: 'Create from demand',
    text: 'Buyers generate a purchase form from selected requests waiting in the purchasing queue.',
  },
  {
    title: 'Collect quotations',
    text: 'The team adds supplier quotations manually or receives them through RFQ email and supplier portal responses.',
  },
  {
    title: 'Compare and decide',
    text: 'Buyers review contract matches, previous orders, item trends, supplier options, and total comparisons before selecting the winning quotes.',
  },
  {
    title: 'Submit forward',
    text: 'Once every line has a selected quotation, the purchase form is submitted and moves into the next workflow step such as purchase approval or order preparation.',
  },
];

const supportBlocks = [
  'Contract context from matched supplier agreements',
  'Commercial context from previous orders',
  'Market context from multiple quotations',
  'Operational context from request-linked demand',
  'Workflow context from the next configured process step',
];

const benefits = [
  {
    title: 'Faster sourcing cycles',
    text: 'Buyers work from a single sourcing surface instead of rebuilding demand and quote data manually.',
  },
  {
    title: 'Better supplier decisions',
    text: 'Teams compare quotations with contract and order history context, not price in isolation.',
  },
  {
    title: 'Stronger process continuity',
    text: 'Purchase forms connect request intake, sourcing, approvals, and downstream execution in one workflow.',
  },
  {
    title: 'Better commercial visibility',
    text: 'Best-available and selected totals make tradeoffs visible before the process moves forward.',
  },
  {
    title: 'Less fragmented supplier communication',
    text: 'RFQ emails, portal responses, and quote imports stay tied to the same purchasing record.',
  },
];

const useCases = [
  'Running competitive quotes for a group of requested items',
  'Building a sourcing package from multiple approved requests',
  'Reusing contracted suppliers for recurring purchases',
  'Checking previous supplier pricing before selecting a new quote',
  'Sending RFQs to suppliers and tracking responses in one place',
  'Preparing selected lines for purchase approval and order placement',
];

const modules = [
  'Purchase Requests',
  'Approvals',
  'Purchase Approvals',
  'Purchase Orders',
  'Contract Management',
  'Supplier Management',
  'Receiving',
  'Spend Insights',
];

const metrics = [
  'Shorter sourcing cycle time',
  'Better quote coverage per purchase form',
  'Higher reuse of contracted suppliers',
  'More informed supplier selection',
  'Less manual quote consolidation',
  'Better transition from sourcing to execution',
];

const faqs = [
  {
    question: 'What is a purchase form in Talepnet?',
    answer:
      'It is the sourcing workspace created from selected requests where buyers collect quotations, compare supplier options, and prepare purchases for the next workflow step.',
  },
  {
    question: 'Can one purchase form include multiple suppliers?',
    answer:
      'Yes. Purchase forms support multiple quotation forms and multi-supplier comparison across the same purchasing need.',
  },
  {
    question: 'Can suppliers respond online?',
    answer:
      'Yes. RFQs can be sent with supplier portal access, and portal quotes can be monitored and imported back into the purchase form.',
  },
  {
    question: 'Can buyers use past purchasing data while sourcing?',
    answer:
      'Yes. Buyers can review previous orders, matched contracts, and item-level purchasing insights directly from the form.',
  },
  {
    question: 'What happens after submission?',
    answer:
      'The purchase form moves into the next configured workflow step, such as purchase approval or purchasing execution.',
  },
];

export default function PurchaseFormsPage() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_28%),linear-gradient(180deg,#f4fcf7_0%,#ffffff_52%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container relative z-10 pb-16 md:pb-20 xl:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">Purchasing Execution</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[13ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                  Build purchase forms from real demand, then source with control
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  Talepnet turns approved demand into structured purchase forms where purchasing
                  teams can collect quotations, compare suppliers, reuse contract intelligence, and
                  move selected lines into the next workflow step.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#purchasing-flow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See Purchasing Flow
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                  <ImagePlaceholder
                    label="Purchase form workspace placeholder"
                    className="min-h-[320px] sm:min-h-[390px]"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                    <p className="text-sm tracking-[0.14em] uppercase text-secondary/45 dark:text-accent/45">
                      RFQ Flow
                    </p>
                    <p className="mt-3 text-lg font-normal text-secondary dark:text-accent">
                      Email, portal, monitor, compare, select
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                    <p className="text-sm tracking-[0.14em] uppercase text-secondary/45 dark:text-accent/45">
                      Buying Context
                    </p>
                    <p className="mt-3 text-lg font-normal text-secondary dark:text-accent">
                      Contracts, prior orders, totals, line history
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
                Where sourcing decisions actually happen
              </span>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Purchase Forms are the working surface for procurement teams after request intake
                and request approvals. Instead of jumping between spreadsheets, inboxes, and
                supplier chats, buyers manage item lines, quotations, totals, and supplier outreach
                in one connected view.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.22}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="space-y-4 p-8 lg:p-10">
                  <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                    From pending requests to sourcing-ready purchase forms
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
                  label="Demand-to-sourcing placeholder"
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
                What teams can do inside Purchase Forms
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                A sourcing workspace, not just another procurement document
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <RevealAnimation key={feature.title} delay={0.2 + index * 0.04}>
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

      <section
        id="purchasing-flow"
        className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
        <div className="main-container">
          <div className="mb-12 max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-accent/65">
                How Purchase Forms work in Talepnet
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-accent lg:text-heading-3">
                From approved demand to sourcing decision to next-step execution
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
        <div className="main-container grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#10222d_0%,#163645_52%,#0d1720_100%)] p-8 text-white lg:p-10">
              <span className="text-tagline-1 inline-block text-white/62">
                More than a form, a sourcing decision workspace
              </span>
              <p className="mt-5 max-w-2xl text-2xl font-normal leading-tight text-white lg:text-4xl">
                Talepnet keeps commercial, operational, and workflow context together before your
                team commits to a supplier decision.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
                Talepnet does not treat purchase forms as static documents. The form is an active
                buying workspace where procurement teams can validate supplier options, compare
                totals, check historical context, and decide with better visibility before
                committing to orders.
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
        <div className="main-container grid gap-8 xl:grid-cols-[0.96fr_1.04fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                What improves with better purchase forms
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Better sourcing decisions with less fragmentation
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <RevealAnimation key={benefit.title} delay={0.22 + index * 0.06}>
                <div className="rounded-[22px] bg-background-3 p-6 dark:bg-background-5">
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

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <RevealAnimation delay={0.12}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="space-y-4 p-8 lg:p-10">
                <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                  Typical Purchase Form scenarios
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
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="space-y-5 p-8 lg:p-10">
                <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                  Connected to the next steps, not isolated from them
                </span>
                <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                  Purchase Forms sit in the middle of Talepnet’s procurement lifecycle. They start
                  from request demand, connect to request approvals and purchasing queues, and feed
                  the next stages such as purchase approvals, order placement, supplier
                  communication, and receiving.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {modules.map((module) => (
                    <div
                      key={module}
                      className="rounded-[18px] border border-stroke-3 bg-background-3 px-4 py-3 text-sm text-secondary/75 dark:border-stroke-7 dark:bg-background-5 dark:text-accent/70">
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
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#173b2d_0%,#23543f_52%,#10251b_100%)] p-8 text-white lg:p-10">
              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <span className="text-tagline-1 inline-block text-white/65">
                    Built to improve sourcing quality
                  </span>
                  <h2 className="mt-4 text-3xl font-normal leading-tight text-white lg:text-4xl">
                    Purchase forms should improve the decision, not just document it
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
                Common questions about purchase forms
              </h2>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.24}>
            <Accordion className="space-y-4" defaultValue="purchase-forms-faq-1" animationDelay={0.08}>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`purchase-forms-faq-${index + 1}`}
                  className="rounded-[22px] border border-stroke-3 bg-white px-6 dark:border-stroke-7 dark:bg-background-6">
                  <AccordionTrigger
                    value={`purchase-forms-faq-${index + 1}`}
                    className="flex w-full cursor-pointer items-center justify-between py-6"
                    titleClassName="flex-1 text-left text-lg font-normal text-secondary dark:text-accent"
                    iconType="arrow">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    value={`purchase-forms-faq-${index + 1}`}
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
                    Turn purchase forms into a real sourcing workspace
                  </span>
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                    Collect quotations, compare suppliers, reuse purchasing intelligence, and move
                    every selected line forward with more speed and control.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#purchasing-flow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See the Purchasing Workflow
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
