import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  ClipboardList,
  FileCheck2,
  FileSearch,
  GitBranch,
  Mail,
  PackageCheck,
  Receipt,
  Route,
  ShieldCheck,
  ShoppingCart,
  Wallet,
} from 'lucide-react';

const valueStatements = [
  {
    title: 'Start with better request quality',
    text: 'Talepnet standardizes request intake through structured request workflows and purchase forms, helping organizations capture demand more clearly before it moves into approval and purchasing.',
  },
  {
    title: 'Keep every step connected',
    text: 'Approvals, sourcing, supplier decisions, purchase orders, and receiving stay tied to the same procurement chain, reducing manual handoff and making workflow progress easier to follow.',
  },
  {
    title: 'Close the loop with real execution visibility',
    text: 'Talepnet does not stop at approval or ordering. It carries the process through receiving so teams can see what was actually delivered and how the request concluded operationally.',
  },
];

const capabilities = [
  {
    title: 'Structured Request Creation',
    description:
      'Capture internal demand through controlled request workflows instead of fragmented emails, spreadsheets, or informal follow-up.',
    icon: ClipboardList,
  },
  {
    title: 'Cost Center-Aware Requests',
    description:
      'Bring financial ownership into the process early by attaching cost center context at request stage.',
    icon: Wallet,
  },
  {
    title: 'Role-Based Approval Routing',
    description:
      'Route requests through the right approvers based on organizational structure, responsibility, and workflow design.',
    icon: GitBranch,
  },
  {
    title: 'Multi-Level Request Approvals',
    description:
      'Support approval processes that can reflect real organizational governance before demand moves into purchasing.',
    icon: ShieldCheck,
  },
  {
    title: 'Workflow Designer Flexibility',
    description:
      'Configure request, approval, purchasing, warehouse, purchase approval, purchase order, and receiving paths through a visual workflow model.',
    icon: Route,
  },
  {
    title: 'Purchasing Queue Continuity',
    description:
      'Carry approved demand directly into purchasing instead of forcing teams to recreate the requirement manually.',
    icon: ShoppingCart,
  },
  {
    title: 'Purchase Form Workspace',
    description:
      'Convert approved requests into purchase forms where buyers can manage quotations, sourcing notes, supplier comparisons, and commercial decisions.',
    icon: FileSearch,
  },
  {
    title: 'Supplier Quotation Handling',
    description:
      'Collect and compare multiple quotations across suppliers to improve sourcing discipline and commercial evaluation.',
    icon: FileCheck2,
  },
  {
    title: 'Contracted Supplier Visibility',
    description:
      'Surface contracted suppliers and previous order intelligence during sourcing so procurement teams can make better-informed supplier decisions.',
    icon: ShieldCheck,
  },
  {
    title: 'RFQ and Supplier Collaboration',
    description:
      'Send RFQs by email, monitor supplier responses, and support portal-enabled quote participation within the same sourcing flow.',
    icon: Mail,
  },
  {
    title: 'Purchase Approval Where Needed',
    description:
      'Route sourced purchases into purchase approval before order placement when the workflow requires additional governance.',
    icon: FileCheck2,
  },
  {
    title: 'Purchase Order Execution',
    description:
      'Move from sourcing and approval into supplier-facing purchase order workflows without breaking the process chain.',
    icon: ShoppingCart,
  },
  {
    title: 'Supplier Communication Connected to Orders',
    description:
      'Keep order communication tied to the workflow through structured email, secure links, and portal-linked collaboration.',
    icon: Mail,
  },
  {
    title: 'Receiving from Placed Orders',
    description:
      'Start receiving directly from placed-order context so delivery recording reflects real purchasing commitments.',
    icon: PackageCheck,
  },
  {
    title: 'Partial and Complete Receipt Handling',
    description:
      'Record actual delivered quantities with clearer visibility into remaining quantities and completion status.',
    icon: Receipt,
  },
  {
    title: 'Receipt Traceability',
    description:
      'Preserve receiving references, receipt numbering, and workflow history so operational closure remains auditable and easy to review.',
    icon: PackageCheck,
  },
];

const steps = [
  {
    title: 'Submit the request',
    text: 'Employees or departments create procurement requests with the right operational and financial context.',
  },
  {
    title: 'Approve the demand',
    text: 'Requests move through the configured approval flow so the organization can validate demand before purchasing begins.',
  },
  {
    title: 'Source and execute',
    text: 'Approved demand enters purchasing, where teams manage quotations, suppliers, approvals, and purchase orders.',
  },
  {
    title: 'Record receipt and close the loop',
    text: 'Receiving records what actually arrived and completes the operational chain from internal request to confirmed delivery.',
  },
];

const keyMessages = [
  'Better continuity across procurement stages',
  'Better visibility into request progress and execution status',
  'Less duplication between teams',
  'Better traceability across approvals, sourcing, orders, and receipt',
  'Better confidence that requests are fully closed, not just approved',
];

const benefits = [
  {
    title: 'Faster process completion',
    text: 'Requests move forward with less manual handoff and fewer gaps between internal teams.',
  },
  {
    title: 'Better procurement accuracy',
    text: 'Demand, approvals, supplier decisions, and receipts stay connected to the same process record.',
  },
  {
    title: 'Better accountability',
    text: 'Teams can see who requested, who approved, who sourced, who ordered, and what was actually received.',
  },
  {
    title: 'Better supplier execution visibility',
    text: 'The organization gains a clearer view of how supplier decisions translated into real operational delivery.',
  },
  {
    title: 'Better budget and spend control',
    text: 'Financial ownership and purchasing activity remain visible throughout the process, not only at the end.',
  },
];

const useCases = [
  'Organizations with fragmented request and receiving processes',
  'Procurement teams needing stronger control across approvals and execution',
  'Businesses that want sourcing and order stages tied back to real demand',
  'Companies that need operational closure visibility after delivery',
  'Teams that want a more measurable procurement lifecycle from start to finish',
];

const faqs = [
  {
    question: 'What is Request-to-Receipt in Talepnet?',
    answer:
      'Request-to-Receipt in Talepnet is the connected procurement process that starts with internal request creation and continues through approvals, sourcing, purchase execution, and receiving.',
  },
  {
    question: 'How is Talepnet different from a basic requisition workflow?',
    answer:
      'Talepnet does not stop at request approval. It carries the process through purchasing, supplier decisions, order placement, and receipt confirmation so the organization can manage the full operational chain.',
  },
  {
    question: 'Can Talepnet support both request approvals and purchase approvals?',
    answer:
      'Yes. Talepnet supports request approvals and purchase approvals as separate but connected control points within the workflow.',
  },
  {
    question: 'How does Talepnet connect requests to purchasing?',
    answer:
      'Approved requests move directly into the purchasing flow, where they can be converted into purchase forms for sourcing and supplier evaluation.',
  },
  {
    question: 'Does Request-to-Receipt include receiving?',
    answer:
      'Yes. Receiving is part of the process, helping teams record what was actually delivered and close the workflow with real execution data.',
  },
];

export default function RequestToReceiptPage() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_28%),linear-gradient(180deg,#f8fff8_0%,#ffffff_52%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container pb-16 md:pb-20 xl:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">Solutions</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[13ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                  Turn internal demand into controlled procurement execution from request to receipt
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-2xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  Talepnet helps organizations manage the full flow from purchase request to receiving through connected request intake, approvals, sourcing, purchasing, order execution, and receipt tracking in one structured procurement workflow.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="/purchase-requests"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent"
                  >
                    See the Workflow
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.35} direction="right">
              <div className="rounded-[30px] border border-stroke-3 bg-background-3 p-8 dark:border-stroke-7 dark:bg-background-5 lg:p-10">
                <Route className="size-10 text-primary-500" />
                <p className="mt-6 text-2xl font-normal leading-tight text-secondary dark:text-accent">
                  One continuous process from request creation to operational closure.
                </p>
                <p className="mt-4 text-base leading-7 text-secondary/72 dark:text-accent/70">
                  In many organizations, requests, approvals, supplier decisions, purchase orders, and receiving happen in different tools or disconnected routines. That breaks visibility and creates unnecessary delays. Talepnet brings those stages together into one governed process so procurement teams can move faster without losing control.
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-6 lg:grid-cols-3">
          {valueStatements.map((item, index) => (
            <RevealAnimation key={item.title} delay={0.14 + index * 0.06}>
              <article className="rounded-[28px] border border-stroke-3 bg-white p-7 dark:border-stroke-7 dark:bg-background-6">
                <h2 className="text-2xl font-normal text-secondary dark:text-accent">{item.title}</h2>
                <p className="mt-4 text-base leading-7 text-secondary/72 dark:text-accent/70">{item.text}</p>
              </article>
            </RevealAnimation>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="max-w-xl">
              <span className="text-tagline-1 text-primary-500">From request to confirmed receipt</span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                A controlled flow from need recognition to confirmed receipt
              </h2>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.18}>
            <div className="rounded-[30px] bg-background-3 p-8 dark:bg-background-5 lg:p-10">
              <p className="text-base leading-8 text-secondary/72 dark:text-accent/70">
                Talepnet&apos;s Request-to-Receipt solution begins when an internal need is submitted and continues through request approvals, purchasing actions, sourcing decisions, purchase approvals where needed, purchase order execution, and receiving. This creates a clearer and more measurable procurement operating model from start to finish.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container">
          <RevealAnimation delay={0.12}>
            <div className="max-w-3xl">
              <span className="text-tagline-1 text-primary-500">What the flow includes</span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                The connected controls behind request, purchasing, and receipt
              </h2>
            </div>
          </RevealAnimation>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <RevealAnimation key={item.title} delay={0.16 + index * 0.03}>
                  <article className="h-full rounded-[28px] border border-stroke-3 bg-white p-6 dark:border-stroke-7 dark:bg-background-6">
                    <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-500/15 dark:text-primary-300">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-5 text-xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-secondary/72 dark:text-accent/70">
                      {item.description}
                    </p>
                  </article>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#11263a_0%,#194156_52%,#0d1824_100%)] p-8 text-white lg:p-10">
              <span className="text-tagline-1 inline-block text-white/62">How it works</span>
              <p className="mt-5 max-w-xl text-2xl font-normal leading-tight text-white lg:text-4xl">
                The flow stays visible from request submission to confirmed delivery.
              </p>
            </div>
          </RevealAnimation>
          <div className="grid gap-4">
            {steps.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.18 + index * 0.06}>
                <div className="grid gap-4 rounded-[24px] border border-stroke-3 bg-background-3 p-6 dark:border-stroke-7 dark:bg-background-5 md:grid-cols-[auto_1fr]">
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-white text-sm text-secondary dark:bg-background-6 dark:text-accent">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-normal text-secondary dark:text-accent">{item.title}</h3>
                    <p className="mt-2 text-base leading-7 text-secondary/72 dark:text-accent/70">{item.text}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="max-w-xl">
              <span className="text-tagline-1 text-primary-300 dark:text-primary-400">
                Why this flow matters for procurement control
              </span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                A connected process prevents demand and execution from drifting apart
              </h2>
              <p className="mt-5 text-base leading-8 text-secondary/72 dark:text-accent/70">
                Organizations lose control when demand and execution are disconnected. A request may be approved, but if sourcing, ordering, and receiving happen outside the same process, visibility drops and accountability weakens. Talepnet reduces those gaps by creating a continuous workflow from internal request to actual receipt.
              </p>
            </div>
          </RevealAnimation>
          <div className="grid gap-4 sm:grid-cols-2">
            {keyMessages.map((item, index) => (
              <RevealAnimation key={item} delay={0.18 + index * 0.05}>
                <div className="rounded-[24px] border border-stroke-7 bg-white/70 p-5 dark:bg-background-5">
                  <p className="text-base leading-7 text-secondary/80 dark:text-accent/80">{item}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container">
          <RevealAnimation delay={0.12}>
            <div className="max-w-3xl">
              <span className="text-tagline-1 text-primary-500">What teams gain with a connected Request-to-Receipt process</span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                Business outcomes that go beyond faster approvals
              </h2>
            </div>
          </RevealAnimation>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {benefits.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.16 + index * 0.04}>
                <article className="rounded-[26px] border border-stroke-3 bg-background-3 p-6 dark:border-stroke-7 dark:bg-background-5">
                  <h3 className="text-xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-secondary/72 dark:text-accent/70">{item.text}</p>
                </article>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="max-w-xl">
              <span className="text-tagline-1 text-primary-500">Who it&apos;s for</span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                Designed for organizations that need end-to-end procurement continuity
              </h2>
              <p className="mt-5 text-base leading-8 text-secondary/72 dark:text-accent/70">
                Talepnet&apos;s Request-to-Receipt solution is ideal for organizations that want one operational model from initial demand through supplier delivery.
              </p>
            </div>
          </RevealAnimation>
          <div className="grid gap-4">
            {useCases.map((item, index) => (
              <RevealAnimation key={item} delay={0.18 + index * 0.05}>
                <div className="rounded-[24px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-6">
                  <p className="text-base leading-7 text-secondary/80 dark:text-accent/80">{item}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <RevealAnimation delay={0.12}>
            <div className="max-w-xl">
              <span className="text-tagline-1 text-primary-500">FAQ</span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                Common questions about Request-to-Receipt
              </h2>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.18}>
            <Accordion className="space-y-4" defaultValue="request-to-receipt-faq-1" animationDelay={0.08}>
              {faqs.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`request-to-receipt-faq-${index + 1}`}
                  className="rounded-[24px] border border-stroke-3 bg-background-3 px-6 dark:border-stroke-7 dark:bg-background-5"
                >
                  <AccordionTrigger
                    value={`request-to-receipt-faq-${index + 1}`}
                    className="flex w-full cursor-pointer items-center justify-between py-5"
                    titleClassName="flex-1 text-left text-lg font-normal text-secondary dark:text-accent"
                    iconType="arrow"
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent
                    value={`request-to-receipt-faq-${index + 1}`}
                    className="pb-6 text-base leading-7 text-secondary/72 dark:text-accent/70"
                  >
                    {item.answer}
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
                  <span className="text-tagline-1 inline-block text-white/65">Final CTA</span>
                  <h2 className="mt-4 text-3xl font-normal leading-tight text-white sm:text-4xl">
                    Connect demand, purchasing, and delivery in one controlled flow
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                    Talepnet helps organizations manage procurement from request creation to actual receipt with stronger continuity, cleaner workflows, and better operational visibility.
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
