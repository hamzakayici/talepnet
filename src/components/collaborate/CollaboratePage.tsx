import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LinkButton from '@/components/ui/button/LinkButton';
import {
  ArrowRight,
  BellRing,
  Check,
  FileCheck2,
  FileText,
  LayoutDashboard,
  ListChecks,
  Mail,
  MessageSquareText,
  PackageCheck,
  Quote,
  Send,
  ShieldCheck,
  Store,
  UserRoundCog,
} from 'lucide-react';

function ImagePlaceholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`flex min-h-[220px] items-center justify-center bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_100%)] dark:bg-[linear-gradient(135deg,#151b24_0%,#0f141c_100%)] ${className}`}>
      <div className="rounded-full border border-dashed border-secondary/20 px-4 py-2 text-sm tracking-[0.14em] text-secondary/45 dark:border-accent/15 dark:text-accent/40">
        {label}
      </div>
    </div>
  );
}

const heroHighlights = [
  'Keep RFQs, orders, agreements, and catalogs in one supplier workspace',
  'Reduce fragmented communication across email, files, and side channels',
  'Keep buyer-supplier interactions tied to the right procurement record',
  'Support ongoing collaboration beyond a single transaction',
];

const painPoints = [
  'RFQ responses happen across fragmented channels',
  'Clarifications are separated from the quote or order they belong to',
  'Agreement context is hard to preserve during day-to-day procurement',
  'Supplier catalogs and company details become outdated over time',
  'Order follow-up depends too much on email and calls',
  'Buyers and suppliers often work from different versions of the same process',
];

const features = [
  {
    title: 'Portal-Based RFQ Collaboration',
    description: 'Buyers can send RFQs through supplier-facing workflows, and suppliers can review and answer them inside the portal instead of reconstructing requests from attachments.',
    icon: Quote,
  },
  {
    title: 'Online Quote Submission',
    description: 'Suppliers can respond with line-level pricing, currency, validity date, delivery lead time, and commercial notes in a structured response format.',
    icon: Send,
  },
  {
    title: 'Quotation History',
    description: 'Submitted quotations remain visible in the portal, making commercial history easier to track over time.',
    icon: FileText,
  },
  {
    title: 'Buyer Context Inside RFQs',
    description: 'Buyer company, buyer contact, request reference, notes, deadlines, and delivery location stay attached to the quotation workflow.',
    icon: Mail,
  },
  {
    title: 'Supplier-Side Order Workspace',
    description: 'Suppliers can review active and completed purchase orders from a dedicated portal area instead of relying only on inbox search.',
    icon: LayoutDashboard,
  },
  {
    title: 'Order Response Actions',
    description: 'Suppliers can acknowledge, decline, or mark orders as fulfilled directly through the portal, giving buyers clearer execution signals.',
    icon: PackageCheck,
  },
  {
    title: 'Secure Order and RFQ Sharing',
    description: 'Buyers can share RFQs and purchase orders through secure links and supplier-friendly digital delivery options, reducing friction in external communication.',
    icon: FileCheck2,
  },
  {
    title: 'Portal-Linked Supplier Accounts',
    description: 'Supplier relationships can be connected to dedicated portal accounts so external collaboration stays tied to the right supplier identity.',
    icon: ShieldCheck,
  },
  {
    title: 'Agreement-Aware Collaboration',
    description: 'Supplier agreements can remain visible as part of the relationship, helping commercial terms stay closer to sourcing and execution activities.',
    icon: FileCheck2,
  },
  {
    title: 'Catalog Collaboration',
    description: 'Suppliers can create and maintain catalog content so buyers work from cleaner, more current offering data inside the platform.',
    icon: Store,
  },
  {
    title: 'Supplier Profile Management',
    description: 'Company information, categories, website, location, legal details, and contact data can be maintained inside the same supplier-facing environment.',
    icon: UserRoundCog,
  },
  {
    title: 'Branding and Presentation',
    description: 'Suppliers can manage logo and cover assets to create a stronger and more complete company presence in the buyer ecosystem.',
    icon: UserRoundCog,
  },
  {
    title: 'Profile Strength Guidance',
    description: 'The portal highlights profile completeness so suppliers can improve how they appear in discovery and supplier-facing evaluations.',
    icon: Check,
  },
  {
    title: 'Shared Process Visibility',
    description: 'RFQs, agreements, catalogs, orders, and profile data remain part of one connected supplier relationship instead of separate process islands.',
    icon: ListChecks,
  },
  {
    title: 'Message-Centered Collaboration Threads',
    description: 'Buyer and supplier communication can be anchored to RFQs, orders, and agreement records so key updates and clarifications remain easier to follow in context.',
    icon: MessageSquareText,
  },
  {
    title: 'Contextual Notifications and Follow-Ups',
    description: 'Suppliers can stay aligned with new RFQs, order updates, agreement changes, and buyer messages through a more structured notification experience tied to active workflow events.',
    icon: BellRing,
  },
  {
    title: 'Activity Timeline By Commercial Record',
    description: 'Collaboration history can stay connected to the relevant RFQ, order, or agreement, making it easier to understand what happened, when it happened, and what still needs action.',
    icon: ListChecks,
  },
  {
    title: 'Procurement-to-Receiving Continuity',
    description: 'On the buyer side, supplier collaboration does not stop at order placement. Orders continue into receiving, helping the execution record stay aligned with what suppliers communicated and delivered.',
    icon: PackageCheck,
  },
];

const journeys = [
  {
    title: 'During sourcing',
    text: 'Buyers send RFQs, suppliers review request details, submit quotes online, and keep commercial responses tied to the sourcing record.',
  },
  {
    title: 'Around commercial alignment',
    text: 'Agreement-backed supplier relationships remain visible, helping both sides operate with clearer awareness of commercial coverage and active terms.',
  },
  {
    title: 'During order execution',
    text: 'Orders move into supplier-facing review, acknowledgement, decline, fulfillment signaling, and execution follow-up inside the same relationship space.',
  },
  {
    title: 'Around supplier presence and discovery',
    text: 'Suppliers can maintain catalogs, company profile data, branding, and offering visibility so collaboration is not limited to one transaction at a time.',
  },
];

const steps = [
  {
    title: 'The buyer initiates the workflow',
    text: 'A buyer shares an RFQ, order, or agreement-linked process through Talepnet’s structured procurement environment.',
  },
  {
    title: 'The supplier works inside the portal',
    text: 'The supplier reviews the commercial record, responds with pricing or order action, and maintains related company or catalog information when needed.',
  },
  {
    title: 'Communication stays tied to context',
    text: 'Notes, updates, and message-like exchanges remain attached to the relevant RFQ, order, or agreement instead of drifting into disconnected threads.',
  },
  {
    title: 'Execution remains visible',
    text: 'Buyer-side procurement history, supplier response, and downstream receiving continue to reflect the same commercial interaction.',
  },
];

const benefits = [
  {
    title: 'Faster commercial response',
    text: 'Suppliers can move from RFQ review to structured quote submission with less manual handling and fewer lost details.',
  },
  {
    title: 'Better procurement traceability',
    text: 'Buyers can see supplier response, order action, and collaboration history in the context of the same workflow.',
  },
  {
    title: 'Cleaner buyer-supplier communication',
    text: 'Notes, updates, and message-centered interactions stay tied to RFQs, agreements, and orders instead of drifting into separate channels.',
  },
  {
    title: 'Better supplier data quality',
    text: 'Profiles, branding, catalogs, and company details remain more current when suppliers maintain them directly.',
  },
  {
    title: 'Better execution visibility',
    text: 'Order acknowledgement, decline, fulfillment, and downstream receiving connect collaboration to actual operational outcomes.',
  },
  {
    title: 'Stronger long-term supplier relationships',
    text: 'The relationship becomes easier to manage when sourcing, agreements, communication, and execution all happen in one connected environment.',
  },
];

const useCases = [
  'Procurement teams that want suppliers to respond through structured digital workflows',
  'Supplier relationships that span RFQs, agreements, catalogs, and orders',
  'Organizations reducing fragmented email-based supplier coordination',
  'Buyers that want clearer order acknowledgement and execution signals',
  'Suppliers that want a stronger digital presence inside the customer relationship',
  'Teams that need message-like collaboration tied to actual procurement records',
  'Businesses scaling repeat supplier interaction across many active workflows',
];

const faqs = [
  {
    question: 'What does Collaborate mean in the Talepnet Supplier Portal?',
    answer:
      'It means buyers and suppliers can interact through a shared digital workspace across RFQs, quotations, agreements, catalogs, orders, and communication flows instead of relying on disconnected external channels.',
  },
  {
    question: 'How does Talepnet improve supplier collaboration during RFQs?',
    answer:
      'Suppliers can review RFQs, price items line by line, submit quotes online, and keep commercial notes and response history tied to the same sourcing workflow.',
  },
  {
    question: 'Does collaboration continue after the supplier is selected?',
    answer:
      'Yes. Talepnet extends collaboration into order tracking, order response actions, agreement visibility, and buyer-supplier execution follow-up.',
  },
  {
    question: 'Can communication stay attached to specific RFQs or orders?',
    answer:
      'Yes. Talepnet’s collaboration model supports contextual communication and message-oriented updates tied to the relevant procurement record.',
  },
  {
    question: 'Does supplier collaboration include catalogs and company profile management?',
    answer:
      'Yes. Suppliers can maintain catalogs, branding, and company information as part of the broader relationship, not only during a single transaction.',
  },
  {
    question: 'Why is this better than email-based supplier communication?',
    answer:
      'Talepnet keeps interaction tied to the RFQ, order, or agreement it belongs to, creating better traceability, less ambiguity, and cleaner buyer-supplier coordination.',
  },
];

export default function CollaboratePage() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_28%),linear-gradient(180deg,#f4fbf8_0%,#ffffff_52%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container relative z-10 pb-16 md:pb-20 xl:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">For Suppliers</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[12ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                  Collaborate with buyers in one connected supplier workspace
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  Talepnet helps suppliers work with buyers through a more structured digital
                  relationship by bringing RFQs, quotations, agreements, catalog content, purchase
                  orders, delivery expectations, profile data, and supplier communication into one
                  connected portal experience.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#collaboration-flow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See Collaboration in Action
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                  <ImagePlaceholder label="Supplier collaboration workspace placeholder" className="min-h-[320px] sm:min-h-[390px]" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {heroHighlights.map((item) => (
                    <div key={item} className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                      <p className="text-sm leading-6 text-secondary/75 dark:text-accent/70">
                        <span className="mr-2 inline-flex size-5 items-center justify-center rounded-full bg-primary-100 text-primary-600 align-middle dark:bg-primary-500/15 dark:text-primary-300">
                          <Check className="size-3.5" />
                        </span>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="border-y border-stroke-3 bg-background-12 py-20 dark:border-stroke-7 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[28px] bg-white p-8 dark:bg-background-6 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Collaboration workspace
              </span>
              <h2 className="mt-5 max-w-[13ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                Supplier collaboration works better when the relationship is not scattered across channels
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Most buyer-supplier collaboration still happens across disconnected messages,
                attachments, calls, and manual follow-up. Talepnet is built to reduce that
                fragmentation by giving suppliers and buyers a more structured way to interact
                across the full commercial workflow.
              </p>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Suppliers need to respond to RFQs, clarify commercial details, track order status,
                maintain catalogs, stay aligned on agreements, and keep company information
                current. Buyers need those same interactions to remain visible, traceable, and
                easier to manage.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="space-y-4 p-8 lg:p-10">
                  <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                    Why this matters
                  </span>
                  <h3 className="text-3xl font-normal leading-tight text-secondary dark:text-accent">
                    The real problem is not lack of communication. It is lack of shared context.
                  </h3>
                  <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                    Suppliers and buyers already communicate. The issue is that they often do it
                    without one reliable system of record. Talepnet improves collaboration by
                    keeping those interactions tied to the procurement object they belong to.
                  </p>
                </div>
                <div className="space-y-4 border-t border-stroke-3 p-8 dark:border-stroke-7 lg:border-t-0 lg:border-l lg:p-10">
                  {painPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <ArrowRight className="mt-1 size-4 shrink-0 text-primary-500" />
                      <p className="text-sm leading-6 text-secondary/72 dark:text-accent/70">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <RevealAnimation delay={0.12}>
            <div className="sticky top-28 rounded-[30px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-5 lg:p-10">
              <span className="badge badge-green mb-5">Shared context</span>
              <h2 className="max-w-[13ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                A supplier-facing collaboration layer built into procurement
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Talepnet’s supplier collaboration model is not limited to a login page or a
                document viewer. It is designed as a shared operational environment where
                suppliers can receive RFQs, submit quotes, review quoted history, track active
                and completed orders, follow agreement-backed relationships, create catalogs,
                maintain company branding and profile data, and communicate with buyers with
                stronger process visibility.
              </p>
            </div>
          </RevealAnimation>

          <div className="grid gap-5 md:grid-cols-2">
            {features.map(({ title, description, icon: Icon }, index) => (
              <RevealAnimation key={title} delay={0.14 + index * 0.04}>
                <div className="rounded-[24px] border border-stroke-3 bg-white p-6 dark:border-stroke-7 dark:bg-background-5">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-primary-100 text-primary-600 dark:bg-primary-500/10 dark:text-primary-300">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-2xl font-normal text-secondary dark:text-accent">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-secondary/72 dark:text-accent/70">{description}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container">
          <div className="max-w-3xl">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-5">Collaboration journeys</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-3xl font-normal text-secondary dark:text-accent sm:text-4xl">
                Where collaboration happens inside Talepnet
              </h2>
            </RevealAnimation>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {journeys.map((journey, index) => (
              <RevealAnimation key={journey.title} delay={0.18 + index * 0.06}>
                <div className="flex h-full flex-col rounded-[24px] border border-stroke-3 bg-white p-6 dark:border-stroke-7 dark:bg-background-6">
                  <h3 className="text-2xl font-normal text-secondary dark:text-accent">{journey.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-secondary/72 dark:text-accent/70">{journey.text}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section id="collaboration-flow" className="py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container">
          <div className="max-w-3xl">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-5">Collaboration flow</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-3xl font-normal text-secondary dark:text-accent sm:text-4xl">
                From buyer outreach to ongoing supplier interaction
              </h2>
            </RevealAnimation>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {steps.map((step, index) => (
              <RevealAnimation key={step.title} delay={0.18 + index * 0.06}>
                <div className="flex h-full flex-col rounded-[24px] border border-stroke-3 bg-white p-6 dark:border-stroke-7 dark:bg-background-5">
                  <span className="text-sm tracking-[0.16em] text-primary-500">Step {index + 1}</span>
                  <h3 className="mt-5 text-2xl font-normal text-secondary dark:text-accent">{step.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-secondary/72 dark:text-accent/70">{step.text}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-6 lg:p-10">
              <span className="badge badge-green mb-5">Supplier perspective</span>
              <h2 className="max-w-[13ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                A portal that feels like a working environment, not a dead-end page
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Supplier collaboration only works when the portal gives suppliers a reason to
                return. Talepnet does that by making the portal a practical workspace. Suppliers
                can see new RFQs, review what they already quoted, track active and completed
                orders, manage company profile quality, maintain catalog content, and stay aligned
                on agreements from one place.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-6 lg:p-10">
              <span className="badge badge-green mb-5">Buyer-side impact</span>
              <h2 className="max-w-[13ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                A stronger supplier experience improves procurement discipline too
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                When suppliers can respond in a structured way, buyers receive cleaner quote data,
                clearer order status, more current supplier information, and stronger continuity
                across sourcing and execution. Talepnet connects supplier-facing workflows directly
                to the internal procurement record.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <RevealAnimation delay={0.12}>
            <ImagePlaceholder label="Collaboration threads placeholder" className="rounded-[30px] min-h-[320px] border border-stroke-3 dark:border-stroke-7" />
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div className="rounded-[30px] bg-white p-8 dark:bg-background-5 lg:p-10">
              <span className="badge badge-green mb-5">Messages and updates</span>
              <h2 className="max-w-[13ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                Keep commercial conversations where the work already is
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                One of the biggest gaps in buyer-supplier relationships is that communication
                rarely stays attached to the transaction it refers to. Talepnet closes that gap
                by supporting message-oriented collaboration around RFQs, orders, and agreements.
              </p>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                A pricing clarification can live with the quote. An order update can stay with the
                PO. An agreement-related question can remain tied to the agreement context. The
                result is better communication quality because both sides stay grounded in the same
                operational object.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container">
          <div className="max-w-3xl">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-5">Outcomes</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-3xl font-normal text-secondary dark:text-accent sm:text-4xl">
                What improves when supplier collaboration is connected
              </h2>
            </RevealAnimation>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit, index) => (
              <RevealAnimation key={benefit.title} delay={0.18 + index * 0.05}>
                <div className="rounded-[24px] border border-stroke-3 bg-white p-6 dark:border-stroke-7 dark:bg-background-6">
                  <h3 className="text-xl font-normal text-secondary dark:text-accent">{benefit.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-secondary/72 dark:text-accent/70">{benefit.text}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <RevealAnimation delay={0.14}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-5 lg:p-10">
              <span className="badge badge-green mb-5">Where it fits</span>
              <h2 className="max-w-[12ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                Where Talepnet’s collaboration model creates the most value
              </h2>
            </div>
          </RevealAnimation>

          <div className="grid gap-4">
            {useCases.map((item, index) => (
              <RevealAnimation key={item} delay={0.18 + index * 0.05}>
                <div className="flex items-start gap-3 rounded-[20px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                  <ArrowRight className="mt-1 size-4 shrink-0 text-primary-500" />
                  <p className="text-sm leading-6 text-secondary/72 dark:text-accent/70">{item}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <RevealAnimation delay={0.1}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-6 lg:p-10">
              <span className="badge badge-green mb-5">FAQ</span>
              <h2 className="max-w-[12ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                Common questions about supplier collaboration
              </h2>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="space-y-5 p-8 lg:p-10">
                <Accordion className="space-y-4" defaultValue="collaborate-faq-1" animationDelay={0.08}>
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={faq.question}
                      value={`collaborate-faq-${index + 1}`}
                      className="rounded-[22px] border border-stroke-3 bg-background-3 px-6 dark:border-stroke-7 dark:bg-background-5">
                      <AccordionTrigger
                        value={`collaborate-faq-${index + 1}`}
                        className="flex w-full cursor-pointer items-center justify-between py-6"
                        titleClassName="flex-1 text-left text-lg font-normal text-secondary dark:text-accent"
                        iconType="arrow">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent
                        value={`collaborate-faq-${index + 1}`}
                        className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
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
                  <p className="text-3xl font-normal leading-tight text-white lg:text-5xl">
                    Make supplier collaboration part of the procurement system itself
                  </p>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
                    Talepnet helps buyers and suppliers work from the same commercial context
                    across RFQs, agreements, catalogs, orders, and communication, creating a
                    stronger digital relationship from first response to final execution.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="https://portal.talepnet.com/sign-up"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    Join Portal
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
