import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LinkButton from '@/components/ui/button/LinkButton';
import {
  ArrowRight,
  BadgePercent,
  Check,
  CircleDollarSign,
  ClipboardList,
  Eye,
  FileText,
  LayoutGrid,
  ScanSearch,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  TriangleAlert,
  Waypoints,
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
      className={`flex min-h-[220px] items-center justify-center bg-[linear-gradient(135deg,#f4f7fb_0%,#fbfcfe_100%)] dark:bg-[linear-gradient(135deg,#181d27_0%,#10141c_100%)] ${className}`}>
      <div className="rounded-full border border-dashed border-secondary/20 px-4 py-2 text-sm tracking-[0.14em] uppercase text-secondary/45 dark:border-accent/15 dark:text-accent/40">
        {label}
      </div>
    </div>
  );
}

const heroHighlights = [
  'Make negotiated supplier terms usable inside daily procurement',
  'Connect contract coverage to sourcing and purchase execution',
  'Control which contracted items appear in Catalog',
  'Surface contract-backed suppliers during purchasing decisions',
  'Track active, expiring, expired, and terminated agreements with clarity',
];

const corePoints = [
  'Centralize supplier agreements in a structured operational record',
  'Translate negotiated item terms into usable purchasing context',
  'Make contract coverage visible during item discovery and sourcing',
  'Reduce dependence on tribal knowledge when selecting suppliers',
  'Create a clearer view of which spend is contract-backed and which is not',
];

const features = [
  {
    title: 'Structured Contract Records',
    description:
      'Capture each supplier agreement as a controlled procurement record with supplier ownership, commercial context, validity period, and operational notes.',
    icon: FileText,
  },
  {
    title: 'Lifecycle-Based Contract Control',
    description:
      'Manage contracts through draft, active, terminated, expired, and expiring states so teams always understand whether an agreement is commercially usable, nearing risk, or no longer valid.',
    icon: Waypoints,
  },
  {
    title: 'Activation and Termination Workflow',
    description:
      'Move contracts into operational use only when they are ready, and retire them deliberately when coverage should no longer influence procurement behavior.',
    icon: ShieldCheck,
  },
  {
    title: 'Item-Level Commercial Coverage',
    description:
      'Define which items are covered under each agreement so negotiated terms can be applied with more precision instead of relying on broad supplier assumptions.',
    icon: ClipboardList,
  },
  {
    title: 'Contract Pricing and Discount Logic',
    description:
      'Store item-level prices and discount structures in a format procurement teams can actually use during evaluation and sourcing.',
    icon: BadgePercent,
  },
  {
    title: 'Catalog Visibility Governance',
    description:
      'Decide whether contract-backed items should be discoverable in Catalog, giving organizations control over how broadly negotiated coverage is exposed internally.',
    icon: LayoutGrid,
  },
  {
    title: 'Optional Price Exposure in Catalog',
    description:
      'Separate discoverability from price transparency by choosing whether contract prices are shown to end users in Catalog results.',
    icon: Eye,
  },
  {
    title: 'Contract-Aware Sourcing Inputs',
    description:
      'Surface matching contracted suppliers inside Purchase Forms so procurement teams can start from negotiated coverage before expanding to wider supplier comparison.',
    icon: ShoppingCart,
  },
  {
    title: 'Contract-Backed Supplier Suggestions',
    description:
      'Help buyers pull relevant contracted suppliers directly into sourcing workflows instead of manually reconstructing commercial history.',
    icon: ScanSearch,
  },
  {
    title: 'Expiry Visibility and Follow-Up',
    description:
      'Make expiring agreements easier to identify so teams can renew, replace, or reassess coverage before procurement value is lost.',
    icon: TriangleAlert,
  },
  {
    title: 'Dashboard-Level Contract Visibility',
    description:
      'Support broader procurement oversight through active contract KPIs and contracted-versus-non-contracted spend visibility.',
    icon: TrendingUp,
  },
  {
    title: 'Integrated Supplier and Purchasing Context',
    description:
      'Keep contract data connected to supplier records, Catalog behavior, and purchasing workflows so commercial agreements remain part of the operating system, not a separate archive.',
    icon: CircleDollarSign,
  },
];

const steps = [
  {
    title: 'Define the agreement',
    text: 'Procurement teams create a contract record with supplier, currency, commercial timeframe, and policy-level visibility settings.',
  },
  {
    title: 'Add covered items and terms',
    text: 'Contract items are defined with unit-level pricing and discount logic so commercial coverage can be applied at the line level.',
  },
  {
    title: 'Activate the contract',
    text: 'Once the agreement is ready for use, it becomes active and enters the operational procurement environment.',
  },
  {
    title: 'Use it in procurement decisions',
    text: 'Active contracts can influence item discovery, contracted item visibility, and supplier selection during sourcing and purchasing.',
  },
];

const supportBlocks = [
  'Contracted items can be surfaced in Catalog',
  'Contract prices can be shown or intentionally hidden',
  'Contract status remains visible as part of item context',
  'Matching contracted suppliers appear during sourcing',
  'Buyers can import contract-backed supplier options into the form workflow',
];

const benefits = [
  {
    title: 'Higher contract utilization',
    text: 'Negotiated supplier agreements are more likely to shape actual procurement behavior when they appear inside sourcing and discovery workflows.',
  },
  {
    title: 'Stronger sourcing discipline',
    text: 'Buyers start from known commercial coverage instead of defaulting immediately to fragmented supplier outreach.',
  },
  {
    title: 'Better continuity across teams',
    text: 'Contract knowledge becomes institutional rather than dependent on individual buyers remembering past agreements.',
  },
  {
    title: 'Better visibility into coverage risk',
    text: 'Expiring and inactive agreements become easier to identify before they create procurement gaps.',
  },
  {
    title: 'Clearer spend intelligence',
    text: 'Contracted and non-contracted purchasing patterns can be understood with more confidence at the management layer.',
  },
];

const useCases = [
  'Managing negotiated item pricing with strategic suppliers',
  'Exposing contract-backed items in internal catalog discovery',
  'Guiding buyers toward preferred commercial coverage during sourcing',
  'Monitoring expiring agreements that require renewal or replacement',
  'Improving visibility into contracted versus non-contracted spend',
  'Reducing commercial leakage caused by disconnected contract knowledge',
];

const modules = [
  'Supplier Management',
  'Purchase Forms',
  'Catalog',
  'Spend Insights',
  'Dashboard KPIs',
];

const metrics = [
  'Better visibility into active contract coverage',
  'Stronger follow-up on expiring agreements',
  'Greater contract reuse in sourcing decisions',
  'Clearer contracted item discoverability',
  'Better understanding of contracted vs non-contracted spend',
  'Less commercial value loss from disconnected workflows',
];

const faqs = [
  {
    question: 'How does Talepnet make supplier contracts operational?',
    answer:
      'Talepnet turns supplier contracts into live procurement controls by connecting commercial terms, covered items, contract validity, catalog visibility, and sourcing workflows in one structured record.',
  },
  {
    question: 'Why manage supplier contracts inside Talepnet instead of offline files?',
    answer:
      'Because contract value is only realized when it shapes procurement behavior. Talepnet brings contract intelligence into the decision flow itself, helping teams reuse negotiated coverage instead of relying on memory, email trails, or disconnected documents.',
  },
  {
    question: 'How do contracts influence sourcing decisions?',
    answer:
      'Active matching contracts can surface contracted suppliers during Purchase Form workflows, giving buyers immediate visibility into existing commercial coverage before they widen supplier evaluation.',
  },
  {
    question: 'Can contract visibility be controlled across the organization?',
    answer:
      'Yes. Talepnet allows teams to decide whether contracted items appear in Catalog and whether contract prices should be visible to end users.',
  },
  {
    question: 'How does Talepnet help teams manage contract risk over time?',
    answer:
      'By separating active, expiring, expired, and terminated agreements more clearly, Talepnet helps procurement teams monitor contract coverage before it quietly falls out of use.',
  },
  {
    question: 'Does contract data contribute to broader procurement visibility?',
    answer:
      'Yes. Contract records support KPI-level visibility such as active contract tracking and contracted-versus-non-contracted spend analysis.',
  },
];

export default function ContractManagementPage() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_28%),linear-gradient(180deg,#f7f8ff_0%,#ffffff_52%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container relative z-10 pb-16 md:pb-20 xl:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">Purchasing Management</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[13ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                  Turn supplier contracts into active procurement control
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  Talepnet brings supplier contracts out of static files and into the operational
                  flow of procurement, connecting negotiated terms to sourcing decisions, catalog
                  visibility, and contract-aware purchasing behavior.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#contract-management-flow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See Contract Management
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                  <ImagePlaceholder
                    label="Contract workspace placeholder"
                    className="min-h-[320px] sm:min-h-[390px]"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                    <p className="text-sm tracking-[0.14em] uppercase text-secondary/45 dark:text-accent/45">
                      Coverage
                    </p>
                    <p className="mt-3 text-lg font-normal text-secondary dark:text-accent">
                      Items, pricing, discounts, visibility
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                    <p className="text-sm tracking-[0.14em] uppercase text-secondary/45 dark:text-accent/45">
                      Influence
                    </p>
                    <p className="mt-3 text-lg font-normal text-secondary dark:text-accent">
                      Catalog guidance and sourcing inputs
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
                Contracts should guide procurement, not sit outside it
              </span>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                In many organizations, supplier contracts exist as reference documents rather than
                operational tools. Buyers may know a contract exists, but that knowledge rarely
                appears at the moment sourcing decisions are made. Talepnet closes that gap by
                turning contracts into structured procurement signals that remain visible where
                teams actually work.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.22}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="space-y-4 p-8 lg:p-10">
                  <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                    From agreement management to procurement influence
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
                  label="Contract influence placeholder"
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
                How Talepnet operationalizes supplier contracts
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Contracts become procurement controls only when they influence actual behavior
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
        id="contract-management-flow"
        className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
        <div className="main-container">
          <div className="mb-12 max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-accent/65">
                How supplier contracts become operational in Talepnet
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-accent lg:text-heading-3">
                From contract record to sourcing influence
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
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#10222d_0%,#2b2f63_52%,#101723_100%)] p-8 text-white lg:p-10">
              <span className="text-tagline-1 inline-block text-white/62">
                Visible where decisions are made
              </span>
              <p className="mt-5 max-w-2xl text-2xl font-normal leading-tight text-white lg:text-4xl">
                Contract value appears at the point of discovery and sourcing, not only in stored
                records.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
                The value of a supplier contract is not in storing it. The value is in making it
                present at the point of action. Talepnet connects contracts to both Catalog
                discovery and Purchase Form sourcing flows, helping teams see negotiated supplier
                coverage at the exact moment they are deciding what to buy and from whom.
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
                What changes when contracts become operational
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Better commercial discipline with less reliance on memory
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
                  Where Supplier Contracts create real value
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
                  Connected to procurement, not isolated from it
                </span>
                <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                  Supplier Contracts in Talepnet connect directly to the wider procurement
                  operating model. They strengthen supplier records, improve Catalog guidance,
                  support Purchase Form decisions, and contribute to KPI-level visibility around
                  contract usage and spend behavior.
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
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#27315b_0%,#3a4580_52%,#151b35_100%)] p-8 text-white lg:p-10">
              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <span className="text-tagline-1 inline-block text-white/65">
                    Built to improve commercial control
                  </span>
                  <h2 className="mt-4 text-3xl font-normal leading-tight text-white lg:text-4xl">
                    Negotiated terms should keep influencing procurement after the deal is signed
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
                Common questions about contract management
              </h2>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.24}>
            <Accordion className="space-y-4" defaultValue="contract-management-faq-1" animationDelay={0.08}>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`contract-management-faq-${index + 1}`}
                  className="rounded-[22px] border border-stroke-3 bg-white px-6 dark:border-stroke-7 dark:bg-background-6">
                  <AccordionTrigger
                    value={`contract-management-faq-${index + 1}`}
                    className="flex w-full cursor-pointer items-center justify-between py-6"
                    titleClassName="flex-1 text-left text-lg font-normal text-secondary dark:text-accent"
                    iconType="arrow">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    value={`contract-management-faq-${index + 1}`}
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
                    Make supplier contracts part of procurement execution
                  </span>
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                    Keep negotiated terms visible at the point of decision, strengthen contract
                    utilization, and give procurement teams a more disciplined commercial
                    foundation.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#contract-management-flow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See Contract Management
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
