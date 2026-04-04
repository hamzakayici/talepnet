import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LinkButton from '@/components/ui/button/LinkButton';
import {
  ArrowRight,
  Building2,
  Check,
  CircleGauge,
  ClipboardCheck,
  FileSpreadsheet,
  LayoutGrid,
  Mail,
  MessageSquareShare,
  PackageCheck,
  PackageSearch,
  RadioTower,
  Search,
  ShieldCheck,
  ShoppingCart,
  UserRound,
  Users,
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
      className={`flex min-h-[220px] items-center justify-center bg-[linear-gradient(135deg,#f3f8f7_0%,#fbfcfc_100%)] dark:bg-[linear-gradient(135deg,#16211e_0%,#101715_100%)] ${className}`}>
      <div className="rounded-full border border-dashed border-secondary/20 px-4 py-2 text-sm tracking-[0.14em] uppercase text-secondary/45 dark:border-accent/15 dark:text-accent/40">
        {label}
      </div>
    </div>
  );
}

const heroHighlights = [
  'Build a structured supplier master with approval and control signals',
  'Connect suppliers directly to RFQ, quotation, and order workflows',
  'Bring contracts and contracted items into sourcing decisions',
  'Manage supplier contacts for operational outreach',
  'Extend collaboration through the supplier portal',
  'Track supplier activity through purchasing and receiving workflows',
];

const corePoints = [
  'Maintain supplier records as operational master data',
  'Carry supplier context into purchase forms, RFQs, and purchase orders',
  'Reuse contracts and historical order context during sourcing',
  'Support both direct material and indirect purchasing scenarios',
  'Keep buyer-supplier interaction tied to the process record',
];

const features = [
  {
    title: 'Structured Supplier Master',
    description:
      'Maintain supplier records with code, status, tier, company information, tax data, location, communication details, and operational identity in one managed profile.',
    icon: Building2,
  },
  {
    title: 'Supplier Status and Tiering',
    description:
      'Distinguish suppliers by operational state and commercial positioning, including status control and tier-based segmentation such as standard and preferred suppliers.',
    icon: ShieldCheck,
  },
  {
    title: 'Supplier Contact Management',
    description:
      'Keep supplier contacts attached to the supplier record so RFQ and order communication can use the right operational recipients instead of relying on personal inbox memory.',
    icon: UserRound,
  },
  {
    title: 'Supplier Contracts',
    description:
      'Connect suppliers to structured purchase contracts with item-level terms, negotiated pricing logic, and lifecycle control so agreements remain usable in real procurement workflows.',
    icon: FileSpreadsheet,
  },
  {
    title: 'Contract-Aware Sourcing',
    description:
      'Surface contracted suppliers during Purchase Form workflows so buyers can bring negotiated coverage directly into supplier selection and quote comparison.',
    icon: ShoppingCart,
  },
  {
    title: 'RFQ Email Collaboration',
    description:
      'Send RFQs to suppliers directly from the purchasing workflow, with document support and structured communication tied to the sourcing record.',
    icon: Mail,
  },
  {
    title: 'Supplier Portal RFQ Participation',
    description:
      'Let suppliers receive RFQ access through portal-enabled flows, submit quotes online, and contribute to a more structured sourcing process.',
    icon: RadioTower,
  },
  {
    title: 'RFQ Monitoring and Quote Import',
    description:
      'Track RFQ response activity and import supplier portal quotes back into Purchase Forms for clearer comparison and faster sourcing progression.',
    icon: ClipboardCheck,
  },
  {
    title: 'Multi-Supplier Quotation Workflows',
    description:
      'Support side-by-side quotation handling across multiple suppliers so procurement teams can compare commercial options in a more disciplined way.',
    icon: Users,
  },
  {
    title: 'Purchase Form Integration',
    description:
      'Carry supplier context directly into Purchase Forms, where buyers can compare offers, reuse contracts, review previous orders, and prepare purchases for approval or execution.',
    icon: PackageSearch,
  },
  {
    title: 'Purchase Order Execution',
    description:
      'Move from selected supplier quotations into structured purchase order workflows with supplier-specific order placement, communication, and follow-through.',
    icon: PackageCheck,
  },
  {
    title: 'Supplier Portal Order Collaboration',
    description:
      'Link purchase orders to the supplier portal to support more structured buyer-supplier interaction after sourcing, not just before it.',
    icon: MessageSquareShare,
  },
  {
    title: 'Receiving and Fulfillment Continuity',
    description:
      'Keep supplier-linked purchases visible through placed-order and receiving flows so supplier execution remains connected to operational closure.',
    icon: Check,
  },
  {
    title: 'Supplier Discovery and Expansion',
    description:
      'Support supplier discovery surfaces and searchable supplier experiences to help teams evaluate and expand the supplier base in a more organized way.',
    icon: Search,
  },
  {
    title: 'Supplier-Facing Intelligence Signals',
    description:
      'Surface supplier-related performance context across the platform, including response-oriented and delivery-oriented metrics used in dashboards and discovery experiences.',
    icon: CircleGauge,
  },
  {
    title: 'Procurement Visibility by Supplier',
    description:
      'Connect suppliers to spend, order, delivery, and sourcing visibility so teams can understand not just who suppliers are, but how they perform inside the procurement system.',
    icon: LayoutGrid,
  },
];

const steps = [
  {
    title: 'Build the supplier base',
    text: 'Procurement teams create supplier records, define status and tier, and maintain the contact structure needed for operational communication.',
  },
  {
    title: 'Connect commercial coverage',
    text: 'Contracts, contracted items, and supplier-specific sourcing context are attached to the supplier layer so negotiated value is usable during procurement.',
  },
  {
    title: 'Engage suppliers in sourcing and ordering',
    text: 'Suppliers participate through RFQ emails, portal-enabled quote submission, order communication, and downstream execution workflows.',
  },
  {
    title: 'Track supplier impact across procurement',
    text: 'Supplier activity stays visible across sourcing, ordering, receiving, and dashboard-level procurement visibility.',
  },
];

const supportBlocks = [
  'RFQ email workflows',
  'Portal-enabled quote submission',
  'Quote comparison across suppliers',
  'Public or secure supplier-facing document sharing',
  'Portal-linked purchase order collaboration',
];

const insightBlocks = [
  'Top supplier spend visibility',
  'Supplier delivery trend views',
  'Supplier performance widgets',
  'Supplier vs target dashboards',
  'Contracted vs non-contracted spend context',
  'RFQ response and participation visibility',
];

const benefits = [
  {
    title: 'Better sourcing continuity',
    text: 'Supplier records, outreach, quotes, and selection logic stay tied to the same procurement chain.',
  },
  {
    title: 'Better commercial reuse',
    text: 'Buyers can act on contracts, contacts, and prior supplier knowledge without rebuilding context every time.',
  },
  {
    title: 'Better execution visibility',
    text: 'Supplier involvement remains visible after sourcing, through orders, receiving, and operational follow-up.',
  },
  {
    title: 'Better control over supplier communication',
    text: 'RFQ and PO communication becomes structured, traceable, and less dependent on informal channels.',
  },
  {
    title: 'Better supplier intelligence',
    text: 'Procurement teams gain a clearer picture of supplier contribution, responsiveness, and operational relevance across the platform.',
  },
];

const useCases = [
  'Managing approved, blocked, preferred, and operational supplier records',
  'Running RFQs across multiple suppliers from the same purchase need',
  'Reusing contracted suppliers during sourcing',
  'Selecting the right supplier contacts for RFQ and order communication',
  'Moving from supplier quotation to purchase order without process fragmentation',
  'Tracking supplier-linked purchases into receiving',
  'Understanding supplier performance through procurement dashboards and discovery surfaces',
  'Supporting both direct and indirect purchasing relationships in one system',
];

const modules = [
  'Contract Management',
  'Purchase Forms',
  'RFQ / Quotations',
  'Purchase Orders',
  'Receiving',
  'Catalog & Discover',
  'Spend Insights',
];

const metrics = [
  'Stronger supplier response visibility',
  'Better supplier participation in sourcing',
  'Better contract-backed supplier utilization',
  'Clearer supplier-linked spend visibility',
  'Better continuity from quote to order to receipt',
  'Less fragmented supplier communication',
];

const faqs = [
  {
    question: 'How does TalepNET define supplier management differently from a standard vendor list?',
    answer:
      'TalepNET treats suppliers as active participants in procurement execution, connecting supplier records to contracts, RFQs, quotations, purchase forms, orders, receiving, and procurement visibility rather than limiting them to static profile data.',
  },
  {
    question: 'How do suppliers participate in sourcing inside TalepNET?',
    answer:
      'Suppliers can be engaged through RFQ email workflows, portal-enabled quote submission, and quotation comparison flows that keep supplier responses tied to the sourcing process record.',
  },
  {
    question: 'How does supplier management connect to contracts and purchase forms?',
    answer:
      'Supplier records connect directly to purchase contracts and contract-backed sourcing inputs, allowing buyers to surface contracted suppliers and negotiated terms while working inside Purchase Forms.',
  },
  {
    question: 'Does TalepNET support supplier interaction after the quote stage?',
    answer:
      'Yes. Supplier involvement continues into purchase order communication, portal-linked order collaboration, and downstream receiving-related execution.',
  },
  {
    question: 'Can TalepNET support both direct and indirect supplier relationships?',
    answer:
      'Yes. The supplier model is designed to support operational complexity across both direct and indirect procurement scenarios.',
  },
  {
    question: 'What kind of supplier insights does TalepNET support?',
    answer:
      'TalepNET supports supplier-related visibility across spend, sourcing participation, delivery-oriented views, contracted usage, and dashboard-level supplier performance signals.',
  },
];

export default function SupplierManagementPage() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_28%),linear-gradient(180deg,#f4fcf8_0%,#ffffff_52%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container relative z-10 pb-16 md:pb-20 xl:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">Supplier Management</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[13ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                  Manage suppliers as part of the procurement operating system
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  TalepNET turns supplier management into a connected procurement capability,
                  linking supplier records, contacts, contracts, RFQ participation, purchase forms,
                  purchase orders, receiving activity, and supplier-facing insights in one
                  structured environment.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#supplier-workflows"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See Supplier Workflows
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                  <ImagePlaceholder
                    label="Supplier workspace placeholder"
                    className="min-h-[320px] sm:min-h-[390px]"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                    <p className="text-sm tracking-[0.14em] uppercase text-secondary/45 dark:text-accent/45">
                      RELATIONSHIPS
                    </p>
                    <p className="mt-3 text-lg font-normal text-secondary dark:text-accent">
                      Records, contacts, status, tier
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                    <p className="text-sm tracking-[0.14em] uppercase text-secondary/45 dark:text-accent/45">
                      COLLABORATION
                    </p>
                    <p className="mt-3 text-lg font-normal text-secondary dark:text-accent">
                      RFQs, quotes, portal, orders
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                    <p className="text-sm tracking-[0.14em] uppercase text-secondary/45 dark:text-accent/45">
                      VISIBILITY
                    </p>
                    <p className="mt-3 text-lg font-normal text-secondary dark:text-accent">
                      Spend, delivery, participation
                    </p>
                  </div>
                </div>
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

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <RevealAnimation delay={0.14}>
            <div className="rounded-[28px] bg-background-3 p-8 dark:bg-background-7 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Supplier management should not stop at the vendor card
              </span>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                In most systems, supplier management means storing company details and maybe a few
                contacts. In TalepNET, suppliers are not passive records. They are active
                participants in sourcing, ordering, fulfillment, and procurement visibility. That
                makes supplier management part of execution, not just administration.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.22}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="space-y-4 p-8 lg:p-10">
                  <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                    A supplier layer connected to direct and indirect procurement
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
                  label="Supplier layer placeholder"
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
                How TalepNET handles supplier management end to end
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Supplier records become active procurement actors, not static directory entries
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

      <section
        id="supplier-workflows"
        className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
        <div className="main-container">
          <div className="mb-12 max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-accent/65">
                How Supplier Management works in TalepNET
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-accent lg:text-heading-3">
                From supplier setup to sourcing, ordering, and visibility
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
        <div className="main-container grid gap-8 lg:grid-cols-[0.94fr_1.06fr]">
          <RevealAnimation delay={0.12}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <ImagePlaceholder
                label="Direct and indirect procurement placeholder"
                className="min-h-[280px] sm:min-h-[360px]"
              />
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="space-y-5">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Built for both direct and indirect supplier workflows
              </span>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                One supplier foundation across different purchasing realities
              </h2>
              <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                TalepNET’s supplier model is not limited to one procurement style. It supports the
                operational reality of organizations managing recurring indirect purchasing as well
                as more structured, item- and delivery-sensitive direct procurement. The same
                supplier foundation can support quoting, contracted sourcing, ordering, and receipt
                handling across both environments.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#10222d_0%,#153c4a_52%,#0d1720_100%)] p-8 text-white lg:p-10">
              <span className="text-tagline-1 inline-block text-white/62">
                A supplier layer that continues into collaboration
              </span>
              <p className="mt-5 max-w-2xl text-2xl font-normal leading-tight text-white lg:text-4xl">
                RFQ outreach, quote import, orders, and portal interactions all stay tied to the
                supplier layer.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
                TalepNET connects suppliers to the full collaboration path, not just the
                master-data layer. That includes RFQ outreach, supplier quote participation, quote
                import, order communication, and portal-linked interactions that reduce
                fragmentation between procurement decisions and supplier response.
              </p>
            </div>
          </RevealAnimation>

          <div className="grid gap-4">
            {supportBlocks.map((item, index) => (
              <RevealAnimation key={item} delay={0.18 + index * 0.06}>
                <div className="rounded-[22px] border border-stroke-3 bg-background-3 p-6 dark:border-stroke-7 dark:bg-background-5">
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
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-6 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Where supplier data becomes procurement action
              </span>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                The real value of supplier management appears when supplier records influence live
                purchasing work. In TalepNET, supplier context flows into Purchase Forms, contract
                matching, quotation handling, purchase orders, and receiving. That creates
                continuity between supplier setup and actual procurement execution.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-6 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Supplier visibility beyond record keeping
              </span>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                TalepNET supports a wider supplier view through dashboards, discovery surfaces, and
                procurement metrics tied to supplier behavior. This includes supplier spend
                concentration, supplier delivery-oriented views, contracted versus non-contracted
                patterns, and sourcing-related visibility such as response activity.
              </p>
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

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 xl:grid-cols-[0.96fr_1.04fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                What changes when supplier management is connected
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Better continuity across supplier records, collaboration, and execution
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
                  Where Supplier Management creates the most value
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
                  Connected to every major procurement stage
                </span>
                <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                  Supplier Management in TalepNET connects directly to Contracts, Purchase Forms,
                  RFQ flows, Purchase Orders, Receiving, Catalog and Discover, and Spend Insights.
                  It is the supplier spine of the procurement operating model.
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
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#1a3440_0%,#1f5a64_52%,#11252a_100%)] p-8 text-white lg:p-10">
              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <span className="text-tagline-1 inline-block text-white/65">
                    Built to improve supplier-side procurement control
                  </span>
                  <h2 className="mt-4 text-3xl font-normal leading-tight text-white lg:text-4xl">
                    Supplier management should improve participation, visibility, and execution
                    continuity
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
                Common questions about supplier management
              </h2>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.24}>
            <Accordion className="space-y-4" defaultValue="supplier-management-faq-1" animationDelay={0.08}>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`supplier-management-faq-${index + 1}`}
                  className="rounded-[22px] border border-stroke-3 bg-white px-6 dark:border-stroke-7 dark:bg-background-6">
                  <AccordionTrigger
                    value={`supplier-management-faq-${index + 1}`}
                    className="flex w-full cursor-pointer items-center justify-between py-6"
                    titleClassName="flex-1 text-left text-lg font-normal text-secondary dark:text-accent"
                    iconType="arrow">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    value={`supplier-management-faq-${index + 1}`}
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
                    Build supplier management into the procurement flow itself
                  </span>
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                    Unify supplier records, contracts, sourcing, orders, and insights in one
                    operational system that keeps supplier relationships connected to real
                    procurement work.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#supplier-workflows"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See Supplier Workflows
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
