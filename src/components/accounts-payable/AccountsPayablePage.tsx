import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LinkButton from '@/components/ui/button/LinkButton';
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  FileSearch,
  Landmark,
  Radar,
  ReceiptText,
  ScanSearch,
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
      className={`flex min-h-[220px] items-center justify-center bg-[linear-gradient(135deg,#f2f5fb_0%,#fbfcfe_100%)] dark:bg-[linear-gradient(135deg,#171d2a_0%,#0f141c_100%)] ${className}`}>
      <div className="rounded-full border border-dashed border-white/20 px-4 py-2 text-sm tracking-[0.14em] uppercase text-white/55 dark:border-accent/15 dark:text-accent/40">
        {label}
      </div>
    </div>
  );
}

const heroHighlights = [
  'Purchasing context stays visible before invoice review starts',
  'Approvals, supplier choices, POs, and receiving remain connected',
  'Cost center and budget ownership carry into finance control',
  'AP teams spend less time reconstructing payable history',
];

const pillars = [
  {
    title: 'Verified purchasing context',
    text: 'Every invoice should point back to a real purchasing decision. Talepnet connects requests, approvals, quotations, purchase orders, and receiving history in one operational record.',
    icon: ClipboardCheck,
  },
  {
    title: 'Audit-ready process visibility',
    text: 'Workflow actions, approval steps, supplier decisions, and execution history stay tied together, making it easier to understand why a payable exists and how it moved through the organization.',
    icon: FileSearch,
  },
  {
    title: 'Unified finance and procurement control',
    text: 'Cost centers, fiscal years, budget visibility, supplier records, and procurement activity contribute to a cleaner AP environment where finance does not need to rebuild context manually.',
    icon: Landmark,
  },
];

const steps = [
  {
    title: 'Control spend before it becomes payable',
    text: 'Requests are captured with approval logic, organizational routing, and cost-center context before purchasing commitments are made.',
  },
  {
    title: 'Connect sourcing and supplier decisions',
    text: 'Purchase forms, quotations, contracted suppliers, and previous order context keep the commercial side of the transaction visible and traceable.',
  },
  {
    title: 'Tie orders to real execution',
    text: 'Purchase orders and receiving records create a stronger operational basis for invoice validation and downstream finance review.',
  },
  {
    title: 'Give AP cleaner reconciliation conditions',
    text: 'Finance teams work from procurement-backed records rather than isolated invoice documents, reducing uncertainty, follow-up effort, and approval ambiguity.',
  },
];

const features = [
  {
    title: 'Procurement-to-AP visibility',
    text: 'Talepnet connects invoice-relevant context to the full purchasing chain, from request intake and approvals to sourcing, ordering, and receiving.',
  },
  {
    title: 'Approval workflows with policy logic',
    text: 'Approval workflows can reflect real business rules such as departments, thresholds, and organizational roles, giving finance better confidence that payable commitments were properly authorized.',
  },
  {
    title: 'Purchase order and receiving continuity',
    text: 'Orders and receipts remain visible in the system, giving AP teams stronger evidence of what was committed and what was actually delivered.',
  },
  {
    title: 'Supplier clarity in one place',
    text: 'Supplier records, contacts, contracts, quotations, RFQ activity, and order communication remain connected, making vendor-side invoice review easier to validate and follow.',
  },
  {
    title: 'Budget and cost center control',
    text: 'Cost centers, fiscal years, and budget visibility help finance teams understand where payables belong and how they relate to budget ownership.',
  },
  {
    title: 'Spend visibility for finance leadership',
    text: 'Budget overview, managed cost center spend, supplier spend, and contracted versus non-contracted patterns support a more informed AP and finance control model.',
  },
];

const currentStrengths = [
  'Request and approval workflows before purchasing commitments are made',
  'Purchase forms with quotation comparison and supplier decision traceability',
  'Purchase approvals before execution where configured',
  'Purchase order generation and supplier communication',
  'Receiving records with quantity and document context',
  'Supplier master data, contacts, and contract visibility',
  'Cost center and fiscal year structures for budget-aware procurement',
  'Workflow history and operational traceability across purchasing stages',
];

const futureReady = [
  'Invoice intake inbox with document capture',
  'OCR-assisted invoice extraction',
  'Invoice-specific approval flows',
  'Two-way and three-way matching against PO and receiving data',
  'Duplicate invoice detection',
  'Payment scheduling and status tracking',
  'ERP or accounting sync for approved payable records',
  'Exception queues for mismatches, deposits, and prepayments',
];

const stakeholderBenefits = [
  {
    title: 'Finance Leadership',
    text: 'Gain better visibility into unpaid commitments, budget pressure, and supplier-related spend with stronger confidence in the underlying process.',
  },
  {
    title: 'Accounts Payable Team',
    text: 'Spend less time chasing requesters, buyers, and approvers to understand what an invoice refers to and whether it should move forward.',
  },
  {
    title: 'Procurement Team',
    text: 'Create a cleaner purchasing record that supports reconciliation later, while maintaining stronger supplier, contract, and sourcing discipline.',
  },
  {
    title: 'Approvers and Budget Owners',
    text: 'Review requests and purchases earlier in the lifecycle so financial control happens before invoices become a problem.',
  },
  {
    title: 'IT and Systems Teams',
    text: 'Build AP automation on top of a structured procurement backbone instead of stitching together fragmented process data.',
  },
];

const useCases = [
  'Organizations that already want stronger procure-to-pay discipline',
  'Finance teams struggling with weak PO and receiving visibility',
  'Procurement-heavy businesses where invoice context is frequently unclear',
  'Companies needing better cost center and budget alignment before payment',
  'Teams that want to reduce manual reconciliation effort by cleaning up upstream purchasing behavior',
];

const faqs = [
  {
    question: 'How is Talepnet’s AP automation approach different from a traditional AP tool?',
    answer:
      'Talepnet improves AP control by strengthening the procurement chain before invoice processing begins, connecting requests, approvals, supplier decisions, purchase orders, and receiving context to the payable record.',
  },
  {
    question: 'Does Talepnet already support invoice-side automation end to end?',
    answer:
      'Today, Talepnet’s strongest AP value comes from procurement-side control, traceability, supplier visibility, and execution context. It creates a stronger foundation for AP automation and can naturally be extended into deeper invoice automation workflows.',
  },
  {
    question: 'Why does procurement visibility matter so much for AP?',
    answer:
      'Invoice validation is far easier when finance can clearly see what was requested, approved, ordered, and received instead of working from disconnected invoice documents alone.',
  },
  {
    question: 'How does Talepnet support budget-aware AP control?',
    answer:
      'Cost centers, fiscal years, budget visibility, and managed spend views help finance teams understand how payable activity relates to ownership and financial limits.',
  },
  {
    question: 'Can Talepnet support three-way matching in the future?',
    answer:
      'Yes. The existing structure around purchase orders and receiving already creates the core process data needed for future PO-receipt-invoice matching workflows.',
  },
];

export default function AccountsPayablePage() {
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
                <h1 className="max-w-[12ch] text-4xl font-normal leading-tight text-white sm:text-5xl xl:text-6xl">
                  Accounts payable automation starts with procurement control, not at the invoice
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-white/74 sm:text-lg">
                  Talepnet helps finance and procurement teams centralize purchasing context,
                  approvals, supplier records, order history, receiving data, and spend visibility
                  so invoice processing becomes faster, more accurate, and easier to trust.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#ap-workflow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See the AP Workflow
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/6 backdrop-blur-sm">
                  <ImagePlaceholder
                    label="AP workflow placeholder"
                    className="min-h-[320px] sm:min-h-[390px]"
                  />
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {heroHighlights.map((item) => (
                    <div key={item} className="border-t border-white/12 py-3 text-sm leading-6 text-white/72">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="bg-white py-18 dark:bg-background-6 md:py-22 xl:py-24">
        <div className="main-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <RevealAnimation delay={0.12}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Centralize invoice control and trust every payment decision
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                AP moves faster when invoice review starts with real purchasing history
              </h2>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.24}>
            <div className="space-y-5 border-l border-stroke-3 pl-6 dark:border-stroke-7 md:pl-8">
              <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                Most AP tools enter the process too late. By the time an invoice arrives, the hard
                questions should already be answered: what was requested, who approved it, which
                supplier was selected, what was ordered, and what was actually received.
              </p>
              <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                Talepnet strengthens accounts payable automation by connecting AP control to the
                full procurement lifecycle before invoices become payment risk.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container space-y-12">
          <div className="max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                What finance teams need before AP can really move faster
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
                      <h3 className="text-2xl font-normal text-secondary dark:text-accent">
                        {item.title}
                      </h3>
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

      <section id="ap-workflow" className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <RevealAnimation delay={0.12}>
            <div className="sticky top-28 rounded-[30px] bg-[linear-gradient(135deg,#11263a_0%,#194156_52%,#0d1824_100%)] p-8 text-white lg:p-10">
              <span className="text-tagline-1 inline-block text-white/62">
                How the process gets cleaner before AP review
              </span>
              <p className="mt-5 max-w-xl text-2xl font-normal leading-tight text-white lg:text-4xl">
                The payable record becomes easier to trust because the procurement record is
                already clean.
              </p>
            </div>
          </RevealAnimation>

          <div className="grid gap-4">
            {steps.map((step, index) => (
              <RevealAnimation key={step.title} delay={0.18 + index * 0.06}>
                <div className="grid gap-4 rounded-[24px] border border-stroke-3 bg-background-3 p-6 dark:border-stroke-7 dark:bg-background-5 md:grid-cols-[auto_1fr] md:items-start">
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-white text-sm text-secondary dark:bg-background-6 dark:text-accent">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-normal text-secondary dark:text-accent">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-secondary/72 dark:text-accent/70">
                      {step.text}
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-x-10 gap-y-8 lg:grid-cols-2">
          <div className="space-y-4 lg:col-span-2">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                The AP automation foundation your finance team actually needs
              </span>
            </RevealAnimation>
          </div>

          {features.map((item, index) => (
            <RevealAnimation key={item.title} delay={0.18 + index * 0.05}>
              <div className="border-t border-stroke-3 pt-5 dark:border-stroke-7">
                <h3 className="text-2xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70">
                  {item.text}
                </p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 xl:grid-cols-[1fr_1fr]">
          <RevealAnimation delay={0.12}>
            <div className="h-full rounded-[28px] border border-stroke-3 bg-background-3 p-8 dark:border-stroke-7 dark:bg-background-5 lg:p-10">
              <div className="flex items-center gap-3 text-secondary dark:text-accent">
                <BadgeCheck className="size-5 text-primary-500" />
                <span className="text-tagline-1">Current strengths that directly support AP automation</span>
              </div>
              <ul className="mt-6 grid gap-4">
                {currentStrengths.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary-500" />
                    <span className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="h-full rounded-[28px] bg-[linear-gradient(135deg,#0f172a_0%,#17384b_52%,#0d1720_100%)] p-8 text-white lg:p-10">
              <div className="flex items-center gap-3 text-white">
                <Radar className="size-5 text-primary-300" />
                <span className="text-tagline-1 text-white/74">Natural extensions for a fuller AP automation layer</span>
              </div>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/74">
                If Talepnet expands this solution area further, the next logical capabilities
                would sit on top of the procurement foundation that already exists.
              </p>
              <ul className="mt-6 grid gap-4 md:grid-cols-2">
                {futureReady.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ArrowRight className="mt-1 size-4 shrink-0 text-primary-300" />
                    <span className="text-sm leading-6 text-white/72">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.12}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Why settle for half the process?
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Talepnet can shift AP control upstream instead of asking finance to fix ambiguity later
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-4">
            {[
              'Not just invoice visibility, but procurement visibility',
              'Not just approval of bills, but approval of demand and supplier commitment',
              'Not just reconciliation support, but operational context for reconciliation',
              'Not just finance reporting, but workflow-linked spend control',
            ].map((item, index) => (
              <RevealAnimation key={item} delay={0.22 + index * 0.05}>
                <div className="flex items-start gap-3 border-t border-stroke-3 py-4 dark:border-stroke-7">
                  <ReceiptText className="mt-1 size-5 shrink-0 text-primary-500" />
                  <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">{item}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.12}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                What this means for each team
              </span>
            </RevealAnimation>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {stakeholderBenefits.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.2 + index * 0.05}>
                <div className="border-t border-stroke-3 pt-4 dark:border-stroke-7">
                  <h3 className="text-xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-secondary/72 dark:text-accent/70">
                    {item.text}
                  </p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.12}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Where Talepnet supports AP automation best
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <div className="rounded-[28px] bg-white p-8 dark:bg-background-6 lg:p-10">
                <ul className="grid gap-4">
                  {useCases.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary-500" />
                      <span className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.24}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-6 lg:p-10">
              <div className="flex items-center gap-3 text-secondary dark:text-accent">
                <ScanSearch className="size-5 text-primary-500" />
                <span className="text-tagline-1">Common questions about AP automation</span>
              </div>
              <Accordion className="mt-6 space-y-4" defaultValue="ap-faq-1" animationDelay={0.08}>
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.question}
                    value={`ap-faq-${index + 1}`}
                    className="rounded-[22px] border border-stroke-3 bg-background-3 px-6 dark:border-stroke-7 dark:bg-background-5">
                    <AccordionTrigger
                      value={`ap-faq-${index + 1}`}
                      className="flex w-full cursor-pointer items-center justify-between py-6"
                      titleClassName="flex-1 text-left text-lg font-normal text-secondary dark:text-accent"
                      iconType="arrow">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent
                      value={`ap-faq-${index + 1}`}
                      className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
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
                    Build accounts payable automation on top of cleaner procurement control
                  </span>
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                    Talepnet helps finance and procurement teams reduce uncertainty, improve
                    traceability, and create stronger payable conditions before invoices ever
                    reach the final approval stage.
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
