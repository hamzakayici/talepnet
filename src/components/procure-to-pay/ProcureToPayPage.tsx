import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LinkButton from '@/components/ui/button/LinkButton';
import {
  CheckCircle2,
  ClipboardList,
  CreditCard,
  FileCheck2,
  FileSearch,
  GitBranch,
  Mail,
  PackageCheck,
  Receipt,
  ShoppingCart,
  ShieldCheck,
  Users,
  Wallet,
} from 'lucide-react';

function ImagePlaceholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`flex min-h-[220px] items-center justify-center bg-[linear-gradient(135deg,#f2f5fb_0%,#fbfcfe_100%)] dark:bg-[linear-gradient(135deg,#171d2a_0%,#0f141c_100%)] ${className}`}
    >
      <div className="rounded-full border border-dashed border-secondary/20 px-4 py-2 text-sm tracking-[0.14em] uppercase text-secondary/45 dark:border-accent/15 dark:text-accent/40">
        {label}
      </div>
    </div>
  );
}

const pillars = [
  {
    title: 'Demand enters with structure',
    text: 'Requests, approvals, and cost center context start the process before spending turns into downstream cleanup. Teams do not need to rely on informal channels or partial information to begin procurement activity.',
    icon: ClipboardList,
  },
  {
    title: 'Purchasing stays traceable',
    text: 'Sourcing, supplier decisions, quotations, purchase orders, and receiving all stay connected to the same procurement chain. This creates a stronger operational record and reduces the number of blind spots between departments.',
    icon: GitBranch,
  },
  {
    title: 'Finance gets cleaner inputs',
    text: 'Budgets, supplier visibility, execution records, and spend tracking create stronger conditions for reconciliation, review, and payment control. Finance works from a more complete process history rather than an isolated payable event.',
    icon: CreditCard,
  },
];

const flow = [
  {
    title: 'Requests enter with context',
    text: 'Employees and teams submit requests with organizational and cost-center context.',
  },
  {
    title: 'Approvals validate demand',
    text: 'Approvals route requests through the right stakeholders before commitments move forward.',
  },
  {
    title: 'Purchasing selects the commercial path',
    text: 'Purchasing teams source demand, compare suppliers, and select the right commercial path.',
  },
  {
    title: 'Orders and receipts support payment control',
    text: 'Purchase orders and receiving records create operational proof before AP and finance close the loop.',
  },
];

const features = [
  {
    title: 'Purchase Requests',
    description:
      'Standardize demand capture so procurement begins from structured, reviewable requests rather than fragmented emails or spreadsheets.',
    icon: ClipboardList,
  },
  {
    title: 'Approval Workflow',
    description:
      'Route requests and purchases through configurable approval paths shaped by roles, departments, thresholds, and organizational logic.',
    icon: ShieldCheck,
  },
  {
    title: 'Cost Center and Budget Context',
    description:
      'Tie financial ownership to requests and purchases early so spend can be understood in relation to cost centers, budgets, and fiscal periods.',
    icon: Wallet,
  },
  {
    title: 'Purchase Forms and Sourcing',
    description:
      'Convert approved demand into purchase forms where buyers can manage quotations, compare suppliers, and make sourcing decisions with stronger context.',
    icon: FileSearch,
  },
  {
    title: 'Supplier Management',
    description:
      'Keep suppliers, contacts, contracts, quotation activity, and commercial history connected to the same procurement system.',
    icon: Users,
  },
  {
    title: 'RFQ and Quote Collaboration',
    description:
      'Send RFQs, collect supplier responses, monitor portal activity, and manage quotations inside a more traceable sourcing workflow.',
    icon: Mail,
  },
  {
    title: 'Contracted Supplier Visibility',
    description:
      'Surface negotiated supplier relationships during sourcing so contract-backed purchasing decisions are easier to apply in practice.',
    icon: ShieldCheck,
  },
  {
    title: 'Purchase Approvals',
    description:
      'Add an additional governance layer before order placement where the process design requires more financial or managerial control.',
    icon: FileCheck2,
  },
  {
    title: 'Purchase Orders',
    description:
      'Move from sourcing and approval into supplier-facing order workflows that keep execution tied to the procurement chain.',
    icon: ShoppingCart,
  },
  {
    title: 'Receiving',
    description:
      'Record what was actually delivered so procurement and finance can work from operational proof rather than assumptions about fulfillment.',
    icon: PackageCheck,
  },
  {
    title: 'Spend Visibility',
    description:
      'Use dashboards and spend insights to understand supplier concentration, category movement, budget pressure, and contract utilization while the process is still active.',
    icon: Receipt,
  },
  {
    title: 'AP-Ready Procurement Traceability',
    description:
      'Strengthen downstream payable control by ensuring that requests, approvals, supplier decisions, orders, and receipt records remain connected and reviewable.',
    icon: CreditCard,
  },
];

const solutionAreas = [
  'Purchase Requests',
  'Approval Workflow',
  'Source-to-Order',
  'Supplier Management',
  'Budget Control',
  'Accounts Payable Foundation',
];

const outcomes = [
  {
    title: 'Less fragmented coordination between procurement and finance',
    text: 'Both teams work from a more connected chain of decisions, reducing manual clarification and cross-functional friction.',
  },
  {
    title: 'Better approval discipline before commitments become liabilities',
    text: 'Requests and purchases are governed earlier, making it easier to control spending before it reaches the final payable stage.',
  },
  {
    title: 'Stronger visibility from intake to payment preparation',
    text: 'Leadership can understand how procurement commitments were formed, not just what eventually appeared in reporting.',
  },
  {
    title: 'Cleaner spend control across suppliers, budgets, and execution records',
    text: 'Spend becomes easier to interpret when it remains tied to suppliers, contracts, approvals, orders, and receipts.',
  },
  {
    title: 'Better readiness for AP review and reconciliation',
    text: 'Finance works from better procurement inputs, which reduces uncertainty and improves downstream control conditions.',
  },
];

const faqs = [
  {
    question: 'What does procure-to-pay mean in Talepnet?',
    answer:
      'In Talepnet, procure-to-pay refers to the connected chain from request intake and approval through sourcing, supplier selection, purchase orders, receiving, and the procurement traceability finance needs before payment review.',
  },
  {
    question: 'Does Talepnet support the full procure-to-pay process?',
    answer:
      'Talepnet strongly supports the procurement side of P2P, including requests, approvals, sourcing, suppliers, purchase orders, receiving, budgets, and spend visibility. It creates an AP-ready procurement foundation, even if invoice-side automation is not yet the strongest part of the product.',
  },
  {
    question: 'How is Talepnet different from a standalone AP tool?',
    answer:
      'Talepnet improves the upstream side of procure-to-pay by reducing uncertainty before invoices reach finance. It helps teams create cleaner purchasing conditions rather than asking AP to resolve fragmented procurement history later.',
  },
  {
    question: 'How does Talepnet support finance control?',
    answer:
      'Through cost centers, fiscal years, budget visibility, approval discipline, supplier traceability, purchase orders, and receiving records that keep financial ownership and operational evidence visible across the process.',
  },
  {
    question: 'Why is receiving important in procure-to-pay?',
    answer:
      'Because payment control is much stronger when finance can see what was actually delivered, not only what was requested or ordered.',
  },
  {
    question: 'Can Talepnet evolve toward deeper AP automation?',
    answer:
      'Yes. The existing procurement structure provides a strong base for future invoice workflows, matching logic, exception handling, and broader accounts payable automation.',
  },
];

export default function ProcureToPayPage() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0f172a_0%,#11283c_42%,#183b52_100%)] pt-32 text-white dark:bg-[linear-gradient(135deg,#09111c_0%,#102135_46%,#163a4d_100%)] md:pt-40 xl:pt-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.16),transparent_24%)]" />
        <div className="main-container relative z-10 pb-18 md:pb-22 xl:pb-24">
          <div className="grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">Strategic Solution</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[11ch] text-4xl font-normal leading-tight text-white sm:text-5xl xl:text-6xl">
                  Procure-to-pay works best when every step stays connected
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-white/74 sm:text-lg">
                  Talepnet helps teams connect request intake, approvals, sourcing, supplier coordination, orders, receiving, budget visibility, and AP control in one procurement system designed to reduce uncertainty across the full spend cycle.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#ptp-flow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent"
                  >
                    See the P2P Flow
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/6 backdrop-blur-sm">
                <ImagePlaceholder label="Procure-to-pay placeholder" className="min-h-[320px] sm:min-h-[390px]" />
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="bg-white py-18 dark:bg-background-6 md:py-22 xl:py-24">
        <div className="main-container grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.12}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                One operational chain from demand to payable readiness
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Procurement control should be in place before AP inherits the process
              </h2>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.24}>
            <div className="space-y-5 border-l border-stroke-3 pl-6 dark:border-stroke-7 md:pl-8">
              <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                Procure-to-pay is often described as a finance process, but in practice it breaks down much earlier. By the time an invoice reaches accounts payable, the most important controls should already be in place. The need should be clearly requested, properly approved, financially owned, commercially sourced, supplier-aligned, ordered, and, where relevant, received. Talepnet strengthens procure-to-pay by connecting those upstream decisions instead of leaving finance to reconstruct them later.
              </p>
              <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                A stronger P2P model is not only about faster processing. It is about reducing ambiguity across teams. Procurement needs traceability. Finance needs confidence. Approvers need context. Requesters need visibility. Suppliers need structured engagement. Talepnet brings those conditions together in one system so the process feels usable for operations while remaining visible to finance and leadership.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[28px] bg-white p-8 dark:bg-background-6 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                P2P discipline starts long before the invoice lands in finance
              </span>
              <p className="mt-5 text-base leading-8 text-secondary/72 dark:text-accent/70">
                Talepnet connects the operational side of procurement with the control side of finance. That means requests are governed earlier, supplier decisions stay visible, orders and receipts support downstream review, and spend is easier to understand while commitments are still moving. Instead of treating procure-to-pay as a series of disconnected handoffs, Talepnet helps organizations manage it as one continuous chain.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <ImagePlaceholder label="P2P chain placeholder" className="min-h-[280px]" />
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container space-y-12">
          <div className="max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                How Talepnet strengthens procure-to-pay
              </span>
            </RevealAnimation>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            {pillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <RevealAnimation key={item.title} delay={0.18 + index * 0.06}>
                  <article className="space-y-5">
                    <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-500/15 dark:text-primary-300">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-2xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                      <p className="mt-3 text-base leading-7 text-secondary/72 dark:text-accent/70">
                        {item.text}
                      </p>
                    </div>
                  </article>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="max-w-xl">
              <span className="text-tagline-1 text-primary-500">From internal demand to payment preparation</span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                A connected process from request creation to AP-ready records
              </h2>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.18}>
            <div className="space-y-5 rounded-[30px] bg-white p-8 dark:bg-background-6 lg:p-10">
              <p className="text-base leading-8 text-secondary/72 dark:text-accent/70">
                In Talepnet, procure-to-pay begins with request creation and approval discipline, moves through sourcing and purchasing execution, continues into purchase orders and receiving, and creates a cleaner operational basis for downstream AP handling. The platform&apos;s value is not that it replaces every finance system. Its value is that it improves the quality and traceability of the procurement record before payment decisions are finalized.
              </p>
              <p className="text-base leading-8 text-secondary/72 dark:text-accent/70">
                That matters because AP teams do not want more documents. They want fewer unknowns. Procurement leaders do not want more dashboards. They want a process they can trust. Talepnet supports both goals by connecting the procurement side of the chain to the financial side more coherently.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section id="ptp-flow" className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
        <div className="main-container">
          <div className="mb-12 max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="text-tagline-1 inline-block text-white/62">How the flow moves from request to payment control</span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-white lg:text-heading-3">
                One visible chain from demand validation to execution proof
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {flow.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.24 + index * 0.08}>
                <article className="rounded-[24px] border border-white/10 bg-white/5 p-7">
                  <span className="mb-5 inline-flex h-8 items-center rounded-full border border-white/10 px-3 text-sm text-white/70">
                    Step {index + 1}
                  </span>
                  <h3 className="mb-3 text-2xl font-normal text-white">{item.title}</h3>
                  <p className="text-base leading-7 text-white/70">{item.text}</p>
                </article>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container space-y-12">
          <div className="max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                What Talepnet brings into the procure-to-pay flow
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                The connected controls behind request, purchasing, receiving, and payment readiness
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[28px] bg-white p-8 dark:bg-background-6 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                The connected capabilities that make P2P work
              </span>
              <ul className="mt-6 grid gap-4 md:grid-cols-2">
                {solutionAreas.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary-500" />
                    <span className="text-base leading-7 text-secondary/72 dark:text-accent/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-6 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Procure-to-pay fails when teams inherit uncertainty
              </span>
              <p className="mt-6 text-base leading-8 text-secondary/72 dark:text-accent/70">
                The biggest weakness in many P2P environments is not missing software. It is missing continuity. Procurement may approve demand, but AP cannot see why the purchase happened. Finance may see the invoice, but not the sourcing decision behind it. Suppliers may be selected, but receiving data remains incomplete. The problem is rarely one broken step. It is the lack of connection between steps.
              </p>
              <p className="mt-4 text-base leading-8 text-secondary/72 dark:text-accent/70">
                Talepnet addresses that by bringing operational continuity into the procurement chain. Requests do not disappear after approval. Supplier decisions do not become disconnected from purchase execution. Receiving does not sit outside the record. Cost center context does not vanish after intake. This is what makes procure-to-pay more governable and more useful for both procurement and finance.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-2">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[28px] bg-background-3 p-8 dark:bg-background-5 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                For procurement leaders
              </span>
              <h2 className="mt-5 text-3xl font-normal leading-tight text-secondary dark:text-accent">
                Create stronger purchasing discipline without slowing the business
              </h2>
              <p className="mt-5 text-base leading-8 text-secondary/72 dark:text-accent/70">
                Procurement leaders need a system that helps teams move faster while preserving control. Talepnet supports that by giving buyers a structured sourcing workspace, by keeping approvals and supplier decisions visible, and by reducing workflow breaks between demand intake and order execution. That makes the commercial side of P2P more resilient and easier to manage at scale.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-6 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                For finance and AP teams
              </span>
              <h2 className="mt-5 text-3xl font-normal leading-tight text-secondary dark:text-accent">
                Give finance cleaner records and fewer surprises
              </h2>
              <p className="mt-5 text-base leading-8 text-secondary/72 dark:text-accent/70">
                Finance teams do not want to spend time decoding incomplete procurement decisions. They want clarity around who requested something, who approved it, what was sourced, what was ordered, what was received, and where the cost belongs. Talepnet improves those conditions by preserving procurement context across the chain. While Talepnet is not yet a full invoice automation suite, it creates a much stronger foundation for downstream AP review, matching logic, and payment preparation.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="max-w-xl">
              <span className="text-tagline-1 text-primary-500">Why Talepnet is a strong foundation for AP control</span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                Stronger procure-to-pay depends on better upstream procurement data
              </h2>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.18}>
            <div className="space-y-5 rounded-[30px] bg-white p-8 dark:bg-background-6 lg:p-10">
              <p className="text-base leading-8 text-secondary/72 dark:text-accent/70">
                A mature AP process depends on good upstream procurement data. That is why Talepnet fits naturally into procure-to-pay positioning even before full invoice automation is expanded. The platform already supports the process evidence that finance depends on: approved demand, supplier identity, quotation history, purchase approvals, purchase orders, receiving records, cost centers, and spend visibility.
              </p>
              <p className="text-base leading-8 text-secondary/72 dark:text-accent/70">
                Over time, this foundation can support deeper finance-side extensions such as invoice capture, invoice approval workflows, matching against PO and receiving data, exception handling, and payment preparation logic. But even today, Talepnet improves the part of procure-to-pay that most often creates the downstream problem: fragmented procurement execution.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container">
          <div className="max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Business outcomes across procurement and finance
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                What teams gain when the chain stays connected
              </h2>
            </RevealAnimation>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {outcomes.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.22 + index * 0.05}>
                <div className="rounded-[22px] bg-background-3 p-6 dark:bg-background-5">
                  <h3 className="text-xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-secondary/72 dark:text-accent/70">{item.text}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="max-w-xl">
              <span className="text-tagline-1 text-primary-500">What is procure-to-pay software?</span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                P2P software should improve both procurement efficiency and finance control
              </h2>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.18}>
            <div className="rounded-[30px] bg-white p-8 dark:bg-background-6 lg:p-10">
              <p className="text-base leading-8 text-secondary/72 dark:text-accent/70">
                Procure-to-pay software helps organizations manage the process from internal purchasing need through approval, supplier selection, order execution, receipt, and financial follow-through. A strong P2P system should improve both procurement efficiency and finance control. Talepnet supports this by connecting request workflows, sourcing, supplier management, purchase orders, receiving, budget control, and AP-ready traceability in one platform.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">FAQ</span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Common questions about Procure-to-Pay
              </h2>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.24}>
            <Accordion className="space-y-4" defaultValue="procure-to-pay-faq-1" animationDelay={0.08}>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`procure-to-pay-faq-${index + 1}`}
                  className="rounded-[22px] border border-stroke-3 bg-background-3 px-6 dark:border-stroke-7 dark:bg-background-5"
                >
                  <AccordionTrigger
                    value={`procure-to-pay-faq-${index + 1}`}
                    className="flex w-full cursor-pointer items-center justify-between py-6"
                    titleClassName="flex-1 text-left text-lg font-normal text-secondary dark:text-accent"
                    iconType="arrow"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    value={`procure-to-pay-faq-${index + 1}`}
                    className="text-base leading-7 text-secondary/72 dark:text-accent/70"
                  >
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
                    Build procure-to-pay on top of connected decisions, not disconnected handoffs
                  </span>
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                    Talepnet helps organizations improve procurement discipline, strengthen finance visibility, and create cleaner payment conditions by connecting every step from request to receipt.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent"
                  >
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
