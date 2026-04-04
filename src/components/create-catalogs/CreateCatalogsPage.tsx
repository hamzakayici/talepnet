import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LinkButton from '@/components/ui/button/LinkButton';
import {
  ArrowRight,
  Check,
  ClipboardList,
  FileText,
  ListChecks,
  Percent,
  Search,
  Send,
  ShieldCheck,
  Store,
  Tags,
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
  'Turn supplier offerings into structured digital content',
  'Keep catalog details current instead of resending files repeatedly',
  'Support buyer discovery with cleaner item visibility',
  'Connect catalogs to agreements and procurement reuse',
];

const painPoints = [
  'Product information is shared repeatedly through files and email',
  'Buyers may work from outdated supplier content',
  'Supplier offerings are harder to discover across the organization',
  'Agreement-backed items are not always visible where they should be',
  'Catalog maintenance becomes manual and inconsistent',
  'Commercial presentation depends too much on ad hoc communication',
];

const features = [
  {
    title: 'Supplier Catalog Creation',
    description: 'Build a structured digital catalog instead of sharing product information through disconnected documents.',
    icon: Store,
  },
  {
    title: 'Catalog Item Maintenance',
    description: 'Keep item records current over time so buyers work from more reliable supplier content.',
    icon: ClipboardList,
  },
  {
    title: 'Better Item Presentation',
    description: 'Give offerings a cleaner structure with names, descriptions, and commercial context that are easier for buyers to review.',
    icon: FileText,
  },
  {
    title: 'Discoverability in Buyer Workflows',
    description: 'Help supplier offerings surface in a more searchable and usable buyer environment rather than staying buried in email history.',
    icon: Search,
  },
  {
    title: 'Catalog and Agreement Alignment',
    description: 'Agreement-backed items can connect to catalog visibility so contracted offerings are easier to identify.',
    icon: ShieldCheck,
  },
  {
    title: 'Catalog Price Visibility Control',
    description: 'Commercial presentation can be shaped based on how pricing should appear in the buyer-facing experience.',
    icon: Percent,
  },
  {
    title: 'Supplier-Owned Content Freshness',
    description: 'Suppliers can maintain their own offering details more directly instead of waiting for buyers to manually update item records.',
    icon: ListChecks,
  },
  {
    title: 'Cleaner Reuse Across Procurement',
    description: 'Once catalog content is in place, it becomes easier for buyers to reuse supplier offerings across requests, sourcing, and purchasing.',
    icon: Tags,
  },
  {
    title: 'Stronger Supplier Presence',
    description: 'Catalogs complement supplier profile and branding by making the company’s offering easier to understand in context.',
    icon: Store,
  },
  {
    title: 'Better Collaboration Around Offered Items',
    description: 'Catalog content helps anchor commercial discussions around clear item records rather than loosely described products or services.',
    icon: Send,
  },
];

const steps = [
  {
    title: 'Structure the offering',
    text: 'Suppliers define the items and supporting content they want buyers to discover in the platform.',
  },
  {
    title: 'Keep the catalog current',
    text: 'Catalog content can be maintained over time so item data does not drift away from commercial reality.',
  },
  {
    title: 'Connect content to the relationship',
    text: 'Catalog visibility can sit alongside agreements, supplier records, and broader procurement activity.',
  },
  {
    title: 'Support buyer discovery',
    text: 'Buyers can work from a cleaner and more reusable supplier offering environment instead of relying on repeated manual sharing.',
  },
];

const benefits = [
  {
    title: 'Stronger supplier discoverability',
    text: 'Buyers can find relevant supplier offerings more easily when catalog content is structured and current.',
  },
  {
    title: 'Less repeated item sharing',
    text: 'Suppliers spend less time resending the same product information through manual channels.',
  },
  {
    title: 'Clearer commercial consistency',
    text: 'Item descriptions and presentation stay more aligned with the supplier’s intended offering.',
  },
  {
    title: 'Better agreement-backed visibility',
    text: 'Catalogs can work alongside agreements to make covered offerings easier to surface.',
  },
  {
    title: 'More reusable procurement content',
    text: 'Buyers can return to supplier offerings more easily across future demand and sourcing activity.',
  },
];

const useCases = [
  'Suppliers that want buyers to discover offerings more easily',
  'Organizations trying to reduce manual product-sheet exchange',
  'Procurement teams using catalog-backed purchasing workflows',
  'Commercial relationships where agreement-linked items should stay visible',
  'Suppliers that want stronger control over item presentation',
  'Businesses scaling repeat buying across known supplier offerings',
];

const faqs = [
  {
    question: 'What does Create Catalogs mean in Talepnet?',
    answer:
      'It means giving suppliers a structured way to publish and maintain their offerings inside the platform so buyers can discover and reuse them more easily.',
  },
  {
    question: 'Why is a supplier catalog useful?',
    answer:
      'It reduces repeated manual sharing, improves buyer visibility into supplier offerings, and creates a more scalable digital supplier presence.',
  },
  {
    question: 'Can catalogs connect with agreements?',
    answer:
      'Yes. Agreement-backed items can align with catalog visibility so negotiated offerings are easier to surface.',
  },
  {
    question: 'Does catalog creation help buyers too?',
    answer:
      'Yes. Buyers benefit from cleaner supplier item data, easier discovery, and better reuse across procurement workflows.',
  },
  {
    question: 'How is this better than sending product lists by email?',
    answer:
      'Talepnet keeps supplier offerings in a structured, reusable environment instead of relying on repeated file exchange and disconnected updates.',
  },
];

export default function CreateCatalogsPage() {
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
                  Create supplier catalogs that stay easier to publish, maintain, and reuse
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  Talepnet helps suppliers turn their offerings into structured digital catalog
                  content so buyers can discover items more easily, procurement teams can work
                  from cleaner supplier data, and commercial relationships can scale with less
                  manual exchange.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#catalog-flow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See the Catalog Flow
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                  <ImagePlaceholder label="Catalog creation workspace placeholder" className="min-h-[320px] sm:min-h-[390px]" />
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
                Catalog workspace
              </span>
              <h2 className="mt-5 max-w-[13ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                A catalog should do more than store item names
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Supplier catalogs are most useful when they make offerings easier to discover,
                easier to understand, and easier to use inside procurement workflows. Talepnet
                gives suppliers a structured way to maintain catalog content as part of the wider
                supplier relationship.
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
                    Item information loses value when it depends on manual sharing
                  </h3>
                  <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                    Many supplier relationships still rely on spreadsheets, PDFs, or repeated
                    email exchanges to share product and service information. Talepnet improves
                    that by giving suppliers a more structured catalog layer inside the platform.
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
              <span className="badge badge-green mb-5">Catalog creation</span>
              <h2 className="max-w-[13ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                A supplier-facing layer for discoverable offerings
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Talepnet extends supplier collaboration beyond RFQs and orders into catalog
                creation and maintenance. Suppliers can shape how their offerings appear in the
                buyer environment, keep descriptions and commercial presentation current, and
                support a more scalable discovery experience.
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

      <section id="catalog-flow" className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container">
          <div className="max-w-3xl">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-5">Catalog flow</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-3xl font-normal text-secondary dark:text-accent sm:text-4xl">
                From supplier offering to usable catalog content
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
                Offerings should be easier to find and easier to trust
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                For suppliers, catalog creation is not only about visibility. It is also about
                control over how offerings are represented. Talepnet helps suppliers maintain a
                more consistent commercial presence inside the procurement ecosystem.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-5 lg:p-10">
              <span className="badge badge-green mb-5">Buyer-side impact</span>
              <h2 className="max-w-[13ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                Better catalogs lead to better procurement behavior
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Buyers benefit when supplier offerings are already structured, visible, and easier
                to evaluate. Talepnet connects catalog content to supplier management, agreements,
                and procurement workflows so catalog-backed items become more useful in day-to-day
                purchasing.
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
                What improves with better supplier catalogs
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
                Where catalog creation creates the most value
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
                Common questions about supplier catalogs
              </h2>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="space-y-5 p-8 lg:p-10">
                <Accordion className="space-y-4" defaultValue="create-catalogs-faq-1" animationDelay={0.08}>
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={faq.question}
                      value={`create-catalogs-faq-${index + 1}`}
                      className="rounded-[22px] border border-stroke-3 bg-background-3 px-6 dark:border-stroke-7 dark:bg-background-5">
                      <AccordionTrigger
                        value={`create-catalogs-faq-${index + 1}`}
                        className="flex w-full cursor-pointer items-center justify-between py-6"
                        titleClassName="flex-1 text-left text-lg font-normal text-secondary dark:text-accent"
                        iconType="arrow">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent
                        value={`create-catalogs-faq-${index + 1}`}
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
                    Make supplier offerings easier to publish and easier to discover
                  </p>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
                    Talepnet helps suppliers create catalogs that strengthen buyer visibility,
                    reduce manual sharing, and make digital procurement relationships more scalable.
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
