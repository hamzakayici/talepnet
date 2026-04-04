import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LinkButton from '@/components/ui/button/LinkButton';
import {
  ArrowRight,
  Check,
  ClipboardList,
  FileClock,
  FileText,
  ListChecks,
  PackageSearch,
  Percent,
  ShieldCheck,
  Store,
  Tag,
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
  'Keep agreement terms and covered items easier to follow',
  'See lifecycle status and validity periods more clearly',
  'Connect agreements to catalogs, sourcing, and supplier records',
  'Reduce drift between agreed terms and day-to-day procurement activity',
];

const painPoints = [
  'Agreement details are hard to track after signature',
  'Covered items and commercial scope are not always clear',
  'Expiry risk is easier to miss than it should be',
  'Contract-backed buying can drift outside agreed terms',
  'Suppliers and buyers may work from different versions of the relationship',
  'Agreement knowledge often lives in documents instead of workflows',
];

const features = [
  {
    title: 'Agreement Visibility',
    description: 'Suppliers can access agreement-related records through the same portal environment used for RFQs, orders, and collaboration.',
    icon: ClipboardList,
  },
  {
    title: 'Active Agreement Tracking',
    description: 'Keep active commercial relationships easier to follow instead of relying on separate files and scattered reminders.',
    icon: ShieldCheck,
  },
  {
    title: 'Agreement Lifecycle Awareness',
    description: 'Track whether agreements are active, expiring, expired, or no longer in use so commercial status stays clearer.',
    icon: FileClock,
  },
  {
    title: 'Validity and Date Context',
    description: 'Agreement start and end periods remain visible so suppliers can stay aligned with the actual commercial window.',
    icon: FileClock,
  },
  {
    title: 'Covered Item Visibility',
    description: 'Suppliers can understand which items are part of the agreement instead of treating the relationship as a broad, undefined commercial arrangement.',
    icon: PackageSearch,
  },
  {
    title: 'Unit-Level Commercial Structure',
    description: 'Agreement-backed item terms can stay tied to units, pricing logic, and negotiated structure in a more operational format.',
    icon: Tag,
  },
  {
    title: 'Discount Logic Awareness',
    description: 'Talepnet supports item-level discount structures that can be reflected in agreement-backed supplier collaboration.',
    icon: Percent,
  },
  {
    title: 'Agreement and Catalog Connection',
    description: 'Agreements can connect to catalog visibility so contracted offerings are easier to surface in a structured buyer-supplier environment.',
    icon: Store,
  },
  {
    title: 'Agreement and Sourcing Continuity',
    description: 'Buyer-side sourcing workflows can surface contracted suppliers and agreement-backed commercial context during procurement decisions.',
    icon: ListChecks,
  },
  {
    title: 'Agreement Notes and Context',
    description: 'Commercial notes and agreement-level context remain attached to the same relationship record rather than being lost in side communication.',
    icon: FileText,
  },
  {
    title: 'Supplier-Linked Commercial Records',
    description: 'Agreements remain tied directly to the supplier profile, making the relationship easier to manage over time.',
    icon: ShieldCheck,
  },
  {
    title: 'Better Renewal Awareness',
    description: 'Expiring agreements are easier to identify before they quietly fall out of operational use.',
    icon: FileClock,
  },
];

const steps = [
  {
    title: 'Establish the agreement',
    text: 'Buyers define the agreement with supplier, validity period, covered items, pricing logic, and relationship context.',
  },
  {
    title: 'Keep the agreement visible',
    text: 'Agreement information stays connected to the supplier record and broader procurement activity.',
  },
  {
    title: 'Reuse it in operational processes',
    text: 'Contract-backed context can influence sourcing, catalog visibility, and supplier selection instead of staying passive.',
  },
  {
    title: 'Monitor status over time',
    text: 'Agreement lifecycle and expiry remain visible so both sides can manage continuity more proactively.',
  },
];

const benefits = [
  {
    title: 'Stronger commercial continuity',
    text: 'Agreements remain part of the active buyer-supplier relationship instead of becoming static reference documents.',
  },
  {
    title: 'Clearer coverage visibility',
    text: 'Suppliers and buyers can stay clearer on which items and terms are actually in scope.',
  },
  {
    title: 'Earlier renewal awareness',
    text: 'Expiring agreements are easier to spot before they create gaps in commercial alignment.',
  },
  {
    title: 'More disciplined sourcing',
    text: 'Agreement-backed supplier context is easier to reuse during procurement decisions.',
  },
  {
    title: 'Cleaner relationship transparency',
    text: 'Supplier records, agreements, sourcing, and catalog visibility remain more closely connected.',
  },
];

const useCases = [
  'Suppliers working under recurring commercial agreements with buyers',
  'Organizations that want covered items and terms easier to follow',
  'Procurement teams trying to increase agreement-backed purchasing',
  'Supplier relationships that require renewal visibility',
  'Businesses connecting agreements to catalogs and sourcing flows',
  'Teams that want a cleaner commercial record across supplier collaboration',
];

const faqs = [
  {
    question: 'What does Manage Agreements mean in Talepnet?',
    answer:
      'It means keeping supplier agreements visible as part of the active procurement relationship, with clearer access to terms, coverage, validity, and lifecycle context.',
  },
  {
    question: 'Can agreements be linked to specific items?',
    answer:
      'Yes. Talepnet’s agreement structure supports item-level coverage and commercial logic rather than only broad supplier-level records.',
  },
  {
    question: 'How do agreements connect to procurement workflows?',
    answer:
      'Agreement-backed supplier context can influence sourcing, supplier selection, and catalog visibility so negotiated terms remain operational.',
  },
  {
    question: 'Can Talepnet help with expiring agreements?',
    answer:
      'Yes. Agreement lifecycle visibility helps teams identify active, expiring, expired, and inactive records more clearly.',
  },
  {
    question: 'Why is this valuable for suppliers too?',
    answer:
      'Suppliers benefit when the commercial relationship is clearer, easier to follow, and better connected to actual procurement activity.',
  },
];

export default function ManageAgreementsPage() {
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
                  Keep supplier agreements visible, usable, and easier to manage
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  Talepnet helps suppliers stay aligned with buyer agreements by bringing
                  commercial terms, covered items, agreement status, and related collaboration into
                  one connected supplier experience.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#agreement-flow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See the Agreement Flow
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                  <ImagePlaceholder label="Agreement workspace placeholder" className="min-h-[320px] sm:min-h-[390px]" />
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
                Agreement workspace
              </span>
              <h2 className="mt-5 max-w-[13ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                Agreements should stay active after they are signed
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Too often, supplier agreements become static documents that are hard to follow
                once day-to-day procurement begins. Talepnet gives suppliers a clearer way to stay
                aligned with active agreements by making terms, coverage, and agreement context
                visible inside the wider procurement relationship.
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
                    Commercial alignment weakens when agreements sit outside the workflow
                  </h3>
                  <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                    A supplier may know an agreement exists, but that does not always mean the
                    commercial relationship stays easy to manage. Talepnet improves that by
                    connecting agreement visibility to sourcing, catalog, supplier records, and
                    ongoing buyer collaboration.
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
              <span className="badge badge-green mb-5">Commercial relationships</span>
              <h2 className="max-w-[13ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                A supplier-facing view of commercial relationships
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Talepnet’s agreement model connects supplier relationships to structured commercial
                records rather than leaving them as detached files. On the supplier side, that can
                extend into a clearer portal experience where agreements remain visible as part of
                the ongoing business relationship.
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

      <section id="agreement-flow" className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container">
          <div className="max-w-3xl">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-5">Agreement flow</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-3xl font-normal text-secondary dark:text-accent sm:text-4xl">
                From commercial agreement to active supplier relationship
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
              <span className="badge badge-green mb-5">Supplier perspective</span>
              <h2 className="max-w-[13ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                Commercial relationships are easier to maintain when they stay visible
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                From the supplier side, agreements matter most when they help clarify what the
                buyer relationship actually covers. Talepnet creates the conditions for that by
                keeping supplier-linked commercial structure closer to the procurement workflow.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-5 lg:p-10">
              <span className="badge badge-green mb-5">Buyer-side impact</span>
              <h2 className="max-w-[13ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                Agreements matter more when suppliers are part of the picture
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Buyer-side agreement management is stronger when suppliers can operate with better
                visibility into the relationship. Talepnet connects agreements to supplier
                records, item coverage, sourcing behavior, and catalog logic.
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
                What improves when agreements stay operational
              </h2>
            </RevealAnimation>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
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
                Where agreement management creates the most value
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
                Common questions about agreements
              </h2>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="space-y-5 p-8 lg:p-10">
                <Accordion className="space-y-4" defaultValue="manage-agreements-faq-1" animationDelay={0.08}>
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={faq.question}
                      value={`manage-agreements-faq-${index + 1}`}
                      className="rounded-[22px] border border-stroke-3 bg-background-3 px-6 dark:border-stroke-7 dark:bg-background-5">
                      <AccordionTrigger
                        value={`manage-agreements-faq-${index + 1}`}
                        className="flex w-full cursor-pointer items-center justify-between py-6"
                        titleClassName="flex-1 text-left text-lg font-normal text-secondary dark:text-accent"
                        iconType="arrow">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent
                        value={`manage-agreements-faq-${index + 1}`}
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
                    Make agreements easier to manage after they go live
                  </p>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
                    Talepnet helps buyers and suppliers keep commercial relationships visible,
                    structured, and connected to real procurement activity instead of leaving them
                    trapped in static documents.
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
