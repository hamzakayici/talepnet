import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LinkButton from '@/components/ui/button/LinkButton';
import {
  ArrowRight,
  Check,
  ClipboardList,
  FileCheck2,
  FileText,
  LayoutDashboard,
  ListOrdered,
  MessageSquareMore,
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
  'Respond to RFQs through one supplier-facing workspace',
  'Keep quotations, agreements, and orders in the same flow',
  'Maintain catalogs and company profile information more easily',
  'Reduce fragmented communication across sourcing and execution',
];

const painPoints = [
  'RFQs arrive through fragmented channels',
  'Quote and agreement history are hard to track',
  'Order response actions are inconsistent',
  'Catalog updates depend on manual follow-up',
  'Buyer and supplier teams work from different records',
  'Supplier profile and commercial information become outdated over time',
];

const features = [
  {
    title: 'Supplier Workspace Dashboard',
    description: 'Start from a supplier-facing workspace with visibility into RFQ activity, order volume, commercial trends, and profile strength.',
    icon: LayoutDashboard,
  },
  {
    title: 'New RFQ Inbox',
    description: 'View incoming RFQs in a dedicated queue with clear deadlines and item-level detail.',
    icon: ClipboardList,
  },
  {
    title: 'Online Quote Submission',
    description: 'Submit structured quotations with line-level pricing, notes, validity dates, and delivery commitments directly through the portal.',
    icon: Quote,
  },
  {
    title: 'Submitted Quote History',
    description: 'Review previously submitted quotations and keep commercial responses easier to track over time.',
    icon: FileText,
  },
  {
    title: 'Active and Completed Orders',
    description: 'Track active and completed purchase orders in separate views so execution status stays clear.',
    icon: ListOrdered,
  },
  {
    title: 'Order Actions',
    description: 'Acknowledge, decline, or mark orders as fulfilled directly in the portal.',
    icon: PackageCheck,
  },
  {
    title: 'Agreement Visibility',
    description: 'Access supplier agreements in one place, review commercial coverage, and stay aligned with active buying relationships.',
    icon: FileCheck2,
  },
  {
    title: 'Agreement Management',
    description: 'Manage agreement-related records and keep negotiated terms easier to follow across active buyer relationships.',
    icon: ShieldCheck,
  },
  {
    title: 'Supplier Catalog Creation',
    description: 'Create and maintain supplier catalog content so buyers can discover offered items through a more structured digital experience.',
    icon: Store,
  },
  {
    title: 'Catalog Content Management',
    description: 'Keep catalog items, descriptions, and commercial presentation up to date instead of relying on manual file exchange.',
    icon: Store,
  },
  {
    title: 'Company Profile Management',
    description: 'Maintain supplier company data such as organization details, website, location, categories, and contact information.',
    icon: UserRoundCog,
  },
  {
    title: 'Branding and Visual Identity',
    description: 'Upload and manage supplier logo and cover image to strengthen company presentation inside the buyer ecosystem.',
    icon: UserRoundCog,
  },
  {
    title: 'Profile Strength Guidance',
    description: 'Improve supplier discoverability with profile completeness scoring that highlights missing information.',
    icon: Check,
  },
  {
    title: 'Collaboration Workspace',
    description: 'Keep buyer-supplier interaction more organized by connecting RFQs, orders, agreements, catalogs, and profile data in one environment.',
    icon: MessageSquareMore,
  },
];

const steps = [
  {
    title: 'Receive and respond',
    text: 'Suppliers access RFQs and submit structured quotes through a dedicated portal workspace.',
  },
  {
    title: 'Stay aligned on commercial terms',
    text: 'Agreements remain visible inside the same environment so supplier relationships are easier to manage operationally.',
  },
  {
    title: 'Track and act on orders',
    text: 'Suppliers review active orders, respond to order events, and keep execution status visible.',
  },
  {
    title: 'Maintain digital presence',
    text: 'Catalog content, company profile, and branding stay current inside the same supplier-facing system.',
  },
];

const keyMessages = [
  'RFQs and quotes stay structured',
  'Agreements remain visible and actionable',
  'Orders continue the same supplier journey',
  'Buyer-supplier interaction stays connected',
  'Commercial context is easier to preserve over time',
];

const benefits = [
  {
    title: 'Faster responses to active RFQs',
    text: 'RFQs are easier to review and answer when the workflow is structured and always accessible.',
  },
  {
    title: 'Stronger continuity across commercial activity',
    text: 'Quotes, agreements, and orders remain part of the same supplier journey instead of becoming isolated records.',
  },
  {
    title: 'More reliable catalog content',
    text: 'Supplier-managed catalog content helps keep offered items more current and easier to discover.',
  },
  {
    title: 'A clearer working model with buyers',
    text: 'Both sides work from a shared digital environment across sourcing, agreements, and execution.',
  },
  {
    title: 'A stronger supplier presence',
    text: 'Profile strength, branding, and structured commercial activity help suppliers present themselves more effectively.',
  },
];

const useCases = [
  'Responding to RFQs through a structured portal workflow',
  'Tracking active and completed purchase orders',
  'Managing agreement visibility with buyers',
  'Maintaining supplier catalog content for easier item discovery',
  'Keeping company profile and branding current',
  'Reducing fragmented communication across sourcing and execution',
  'Supporting longer-term buyer-supplier collaboration in one system',
];

const faqs = [
  {
    question: 'What is the Talepnet Supplier Portal?',
    answer:
      'Talepnet Supplier Portal is a supplier-facing workspace where vendors can manage RFQs, quotations, orders, agreements, catalogs, and profile information in one connected environment.',
  },
  {
    question: 'Can suppliers submit quotations directly through the portal?',
    answer:
      'Yes. Suppliers can submit structured quotes with pricing, validity, delivery context, and notes directly through the portal.',
  },
  {
    question: 'Does the portal support order tracking and response actions?',
    answer:
      'Yes. Suppliers can review active and completed orders and respond with acknowledgement, decline, or fulfillment actions.',
  },
  {
    question: 'Can suppliers manage agreements in the portal?',
    answer:
      'Yes. Talepnet Supplier Portal gives suppliers visibility into agreement-related records and helps keep commercial relationships easier to manage.',
  },
  {
    question: 'Can suppliers create and maintain catalogs?',
    answer:
      'Yes. Suppliers can manage catalog content so buyers can access more current item information through a structured digital channel.',
  },
  {
    question: 'How does Talepnet improve supplier collaboration?',
    answer:
      'Talepnet connects RFQs, agreements, catalogs, orders, and profile management in one supplier-facing system, reducing fragmented communication and making collaboration more operational.',
  },
];

export default function SupplierPortalPage() {
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
                <h1 className="max-w-[13ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                  One supplier portal for RFQs, orders, agreements, and catalogs
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  Talepnet Supplier Portal gives suppliers a structured workspace to respond to
                  RFQs, manage orders, maintain agreements, create catalogs, and collaborate with
                  buyers through one connected procurement experience.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#supplier-flow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See the Supplier Flow
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                  <ImagePlaceholder
                    label="Supplier portal workspace placeholder"
                    className="min-h-[320px] sm:min-h-[390px]"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                    <p className="text-sm tracking-[0.14em] text-secondary/45 dark:text-accent/45">Respond</p>
                    <p className="mt-3 text-lg font-normal text-secondary dark:text-accent">RFQs and quotes in one queue</p>
                  </div>
                  <div className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                    <p className="text-sm tracking-[0.14em] text-secondary/45 dark:text-accent/45">Track</p>
                    <p className="mt-3 text-lg font-normal text-secondary dark:text-accent">Orders and agreements with more clarity</p>
                  </div>
                  <div className="rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                    <p className="text-sm tracking-[0.14em] text-secondary/45 dark:text-accent/45">Maintain</p>
                    <p className="mt-3 text-lg font-normal text-secondary dark:text-accent">Catalogs, profile, and brand presence</p>
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
                Supplier relationships work better when RFQs, quotations, agreements, orders,
                catalog content, and communication do not live across disconnected channels.
                Talepnet Supplier Portal brings them together in one supplier-facing environment
                that keeps commercial interaction clearer, faster, and easier to manage.
              </p>
            </RevealAnimation>
            <div className="grid gap-4 md:grid-cols-2">
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
                Supplier portals, in practical terms
              </span>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                A supplier portal is a digital workspace where suppliers can interact with buyers
                through structured procurement workflows instead of fragmented email threads and
                manual follow-up. Talepnet Supplier Portal helps suppliers receive RFQs, submit
                quotes, track orders, manage agreements, maintain catalog content, and keep
                company information up to date in one connected platform.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.22}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="space-y-4 p-8 lg:p-10">
                  <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                    Why supplier collaboration often breaks down
                  </span>
                  <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                    In many organizations, supplier interaction is still split across separate
                    documents, inboxes, calls, and spreadsheets. That slows response time and
                    weakens visibility for both buyers and suppliers.
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
                  label="Supplier collaboration placeholder"
                  className="h-full min-h-[280px] border-t border-stroke-3 dark:border-stroke-7 lg:border-t-0 lg:border-l"
                />
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <RevealAnimation delay={0.12}>
            <div className="sticky top-28 rounded-[30px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-5 lg:p-10">
              <span className="badge badge-green mb-5">Supplier workspace</span>
              <h2 className="max-w-[12ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                A structured supplier workspace, not just a portal login
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Talepnet Supplier Portal is designed as a supplier operating layer inside
                procurement. It brings together RFQs, quotations, orders, agreements, catalogs,
                company profile management, and collaboration signals in one environment.
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

      <section id="supplier-flow" className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container">
          <div className="max-w-3xl">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-5">Portal workflow</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-3xl font-normal text-secondary dark:text-accent sm:text-4xl">
                How the supplier portal works in Talepnet
              </h2>
            </RevealAnimation>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {steps.map((step, index) => (
              <RevealAnimation key={step.title} delay={0.18 + index * 0.06}>
                <div className="flex h-full flex-col rounded-[24px] border border-stroke-3 bg-white p-6 dark:border-stroke-7 dark:bg-background-6">
                  <span className="text-sm tracking-[0.16em] text-primary-500">Step {index + 1}</span>
                  <h3 className="mt-5 text-2xl font-normal text-secondary dark:text-accent">{step.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-secondary/72 dark:text-accent/70">{step.text}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-5 lg:p-10">
              <span className="badge badge-green mb-5">Sourcing and execution</span>
              <h2 className="max-w-[14ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                One portal across sourcing, agreements, and order execution
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Talepnet Supplier Portal is designed to support more than one transaction point.
                Suppliers can respond to sourcing events, stay aligned on agreements, and continue
                into order tracking without switching between disconnected processes.
              </p>
            </div>
          </RevealAnimation>

          <div className="grid gap-4">
            {keyMessages.map((message, index) => (
              <RevealAnimation key={message} delay={0.18 + index * 0.05}>
                <div className="flex items-start gap-3 rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                  <Check className="mt-1 size-5 shrink-0 text-primary-500" />
                  <p className="text-sm leading-6 text-secondary/72 dark:text-accent/70">{message}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <RevealAnimation delay={0.12}>
            <ImagePlaceholder label="Supplier catalog placeholder" className="rounded-[30px] min-h-[320px] border border-stroke-3 dark:border-stroke-7" />
          </RevealAnimation>

          <RevealAnimation delay={0.22}>
            <div className="rounded-[30px] bg-white p-8 dark:bg-background-6 lg:p-10">
              <span className="badge badge-green mb-5">Supplier catalogs</span>
              <h2 className="max-w-[13ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                Keep supplier offerings current and easier to discover
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Talepnet extends the supplier experience into catalog creation and maintenance.
                Suppliers can shape how their offerings are presented, keep item information
                current, and contribute to a more scalable buyer discovery experience.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container">
          <div className="max-w-3xl">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-5">Outcomes</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-3xl font-normal text-secondary dark:text-accent sm:text-4xl">
                What changes when suppliers work in one connected portal
              </h2>
            </RevealAnimation>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {benefits.map((benefit, index) => (
              <RevealAnimation key={benefit.title} delay={0.18 + index * 0.05}>
                <div className="rounded-[24px] border border-stroke-3 bg-white p-6 dark:border-stroke-7 dark:bg-background-5">
                  <h3 className="text-xl font-normal text-secondary dark:text-accent">{benefit.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-secondary/72 dark:text-accent/70">{benefit.text}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <RevealAnimation delay={0.14}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-6 lg:p-10">
              <span className="badge badge-green mb-5">Where it fits</span>
              <h2 className="max-w-[12ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                Where the Talepnet Supplier Portal delivers the most value
              </h2>
            </div>
          </RevealAnimation>

          <div className="grid gap-4">
            {useCases.map((item, index) => (
              <RevealAnimation key={item} delay={0.18 + index * 0.05}>
                <div className="flex items-start gap-3 rounded-[20px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-6">
                  <Send className="mt-1 size-4 shrink-0 text-primary-500" />
                  <p className="text-sm leading-6 text-secondary/72 dark:text-accent/70">{item}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <RevealAnimation delay={0.1}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-5 lg:p-10">
              <span className="badge badge-green mb-5">FAQ</span>
              <h2 className="max-w-[12ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                Common questions about the supplier portal
              </h2>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="space-y-5 p-8 lg:p-10">
                <Accordion className="space-y-4" defaultValue="supplier-portal-faq-1" animationDelay={0.08}>
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.question}
                    value={`supplier-portal-faq-${index + 1}`}
                    className="rounded-[22px] border border-stroke-3 bg-background-3 px-6 dark:border-stroke-7 dark:bg-background-5">
                    <AccordionTrigger
                      value={`supplier-portal-faq-${index + 1}`}
                      className="flex w-full cursor-pointer items-center justify-between py-6"
                      titleClassName="flex-1 text-left text-lg font-normal text-secondary dark:text-accent"
                      iconType="arrow">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent
                      value={`supplier-portal-faq-${index + 1}`}
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

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container">
          <RevealAnimation delay={0.12}>
            <div className="overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#0f172a_0%,#153b4a_55%,#0b1020_100%)] p-8 text-white md:p-12 xl:p-14">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-3xl">
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                    Give suppliers one place to respond, manage, and collaborate
                  </p>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
                    Talepnet Supplier Portal helps suppliers stay closer to RFQs, agreements,
                    catalogs, and orders while giving buyers a cleaner and more connected
                    collaboration model.
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
