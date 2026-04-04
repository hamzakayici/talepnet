import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LinkButton from '@/components/ui/button/LinkButton';
import {
  ArrowRight,
  Check,
  ClipboardList,
  Clock3,
  FileText,
  ListChecks,
  Mail,
  MapPinned,
  Quote,
  Send,
  Timer,
  Wallet,
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
  'Review RFQs in one dedicated supplier workspace',
  'See item details, notes, deadlines, and delivery context together',
  'Submit structured pricing online instead of rebuilding email replies',
  'Keep submitted quotes visible for later reference',
];

const painPoints = [
  'RFQs arrive through disconnected communication channels',
  'Item details are harder to review than they should be',
  'Quote responses are rebuilt manually each time',
  'Delivery expectations and deadlines are easy to miss',
  'Suppliers cannot easily track what has already been submitted',
  'Buyers receive inconsistent quotation formats from different vendors',
];

const features = [
  {
    title: 'New RFQ Workspace',
    description: 'Suppliers can access a dedicated list of incoming RFQs instead of relying on inbox search and manual document handling.',
    icon: ClipboardList,
  },
  {
    title: 'Clear Buyer Context',
    description: 'Each RFQ can include buyer company, buyer contact, reference number, creation date, and deadline in one view.',
    icon: Mail,
  },
  {
    title: 'Delivery and Note Visibility',
    description: 'Delivery location and buyer notes remain visible alongside the RFQ so suppliers can price with better context.',
    icon: MapPinned,
  },
  {
    title: 'Line-Level Quote Entry',
    description: 'Suppliers can enter unit prices per item directly in the portal, making responses more structured and easier to compare.',
    icon: Quote,
  },
  {
    title: 'Multi-Currency Quotation Support',
    description: 'Quotes can be submitted with the selected currency so the commercial response reflects the right pricing basis.',
    icon: Wallet,
  },
  {
    title: 'Quote Validity Dates',
    description: 'Suppliers can define how long the quoted pricing remains valid instead of leaving that condition outside the response.',
    icon: Clock3,
  },
  {
    title: 'Delivery Lead Time Input',
    description: 'Delivery timing can be included as part of the quotation, helping buyers assess both price and operational fit.',
    icon: Timer,
  },
  {
    title: 'Notes to Buyer',
    description: 'Suppliers can attach commercial or operational notes directly to the quote instead of sending separate clarifications outside the record.',
    icon: FileText,
  },
  {
    title: 'Submitted Quote History',
    description: 'Previously quoted RFQs remain visible in a separate view so suppliers can track what was already sent.',
    icon: ListChecks,
  },
  {
    title: 'Structured Digital Submission',
    description: 'Quotes are submitted through the portal in a cleaner format, reducing ambiguity for both supplier and buyer teams.',
    icon: Send,
  },
];

const steps = [
  {
    title: 'Receive the RFQ',
    text: 'Suppliers access incoming quotation requests through the portal with reference, buyer, deadline, and item overview already attached.',
  },
  {
    title: 'Review the request in context',
    text: 'Buyers’ notes, delivery location, and item descriptions help suppliers understand what they are pricing before they respond.',
  },
  {
    title: 'Build the quote',
    text: 'Suppliers enter unit prices, choose currency, define delivery lead time, set quote validity, and add notes where needed.',
  },
  {
    title: 'Submit and keep it visible',
    text: 'The quote is submitted through the same portal workflow and remains available in quoted RFQ history for later reference.',
  },
];

const benefits = [
  {
    title: 'Faster supplier response cycles',
    text: 'Suppliers spend less time decoding requests and more time preparing usable offers.',
  },
  {
    title: 'More consistent quote submissions',
    text: 'Buyers receive structured pricing responses instead of mismatched formats from different vendors.',
  },
  {
    title: 'Clearer commercial detail',
    text: 'Delivery timing, quote validity, and notes stay attached to the quotation itself.',
  },
  {
    title: 'Cleaner traceability',
    text: 'Submitted quotes remain visible in the portal instead of disappearing into email history.',
  },
  {
    title: 'Less manual follow-up',
    text: 'Both buyers and suppliers work from the same RFQ context, reducing avoidable clarification loops.',
  },
];

const useCases = [
  'Suppliers responding to recurring quotation requests from procurement teams',
  'Vendors pricing multi-line RFQs that need item-level clarity',
  'Organizations that want online quote submission instead of attachment-based replies',
  'Procurement teams trying to improve quote comparability across suppliers',
  'Supplier relationships where delivery timing and quote validity matter alongside price',
  'Businesses that want a cleaner record of quoted RFQs over time',
];

const faqs = [
  {
    question: 'How do suppliers receive RFQs in Talepnet?',
    answer:
      'Suppliers access incoming RFQs through the portal in a dedicated new-RFQ workspace, with buyer details, deadline, and request context visible in one place.',
  },
  {
    question: 'Can suppliers submit prices line by line?',
    answer:
      'Yes. Talepnet allows suppliers to enter unit prices at item level so the quote is more structured and easier for buyers to evaluate.',
  },
  {
    question: 'Can delivery timing and validity period be included in the quote?',
    answer:
      'Yes. Suppliers can define delivery lead time and quote validity as part of the RFQ response.',
  },
  {
    question: 'Are submitted quotes visible afterward?',
    answer:
      'Yes. Quoted RFQs remain available in a separate history view so suppliers can review what has already been submitted.',
  },
  {
    question: 'Why is this better than email-based RFQ handling?',
    answer:
      'Talepnet keeps the RFQ, item details, quote data, and submission history inside one workflow, reducing ambiguity and manual follow-up for both sides.',
  },
];

export default function RespondToRFQsPage() {
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
                  Respond to RFQs without chasing emails, attachments, or missing context
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  Talepnet gives suppliers a cleaner way to review quotation requests, understand
                  what the buyer needs, submit structured pricing online, and keep every response
                  visible inside the same portal workflow.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#rfq-flow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See the RFQ Flow
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                  <ImagePlaceholder label="RFQ response workspace placeholder" className="min-h-[320px] sm:min-h-[390px]" />
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
                RFQ workspace
              </span>
              <h2 className="mt-5 max-w-[13ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                A better RFQ experience for suppliers and buyers
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Responding to RFQs should not feel like reconstructing the request from scattered
                documents and email threads. Talepnet gives suppliers a dedicated portal space
                where new RFQs, item details, deadlines, delivery context, and submitted quotes
                all stay connected.
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
                    When quotation workflows stay fragmented, everyone loses time
                  </h3>
                  <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                    Suppliers are often expected to respond quickly, but the information they need
                    is not always delivered in a usable way. Talepnet turns RFQ response into a
                    structured digital workflow rather than a loosely managed exchange.
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
              <span className="badge badge-green mb-5">RFQ response</span>
              <h2 className="max-w-[12ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                Built for the way suppliers actually respond
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Talepnet’s RFQ experience is designed around practical supplier work. Suppliers can
                open incoming RFQs, review buyer information, inspect line items, enter pricing at
                item level, define delivery timing, set quote validity, add commercial notes, and
                submit everything through the portal in one structured response.
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

      <section id="rfq-flow" className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container">
          <div className="max-w-3xl">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-5">RFQ flow</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-3xl font-normal text-secondary dark:text-accent sm:text-4xl">
                From incoming request to submitted quote
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
              <span className="badge badge-green mb-5">Supplier experience</span>
              <h2 className="max-w-[13ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                Less back-and-forth, more usable commercial detail
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Talepnet reduces the manual work suppliers often face when responding to quotation
                requests. Instead of interpreting files, rewriting pricing into email replies, or
                managing separate records for each buyer, suppliers can respond through a more
                controlled digital process.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-5 lg:p-10">
              <span className="badge badge-green mb-5">Buyer-side impact</span>
              <h2 className="max-w-[13ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                Cleaner quotes on the buyer side too
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                A strong supplier RFQ experience improves procurement outcomes for buyers as well.
                When suppliers respond through a structured workflow, quotations are easier to
                compare, easier to import into purchasing decisions, and easier to trace later.
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
                What improves with a better RFQ flow
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
                Where this RFQ experience creates the most value
              </h2>
            </div>
          </RevealAnimation>

          <div className="grid gap-4">
            {useCases.map((item, index) => (
              <RevealAnimation key={item} delay={0.18 + index * 0.05}>
                <div className="flex items-start gap-3 rounded-[20px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-5">
                  <Send className="mt-1 size-4 shrink-0 text-primary-500" />
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
                Common questions about RFQ responses
              </h2>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="space-y-5 p-8 lg:p-10">
                <Accordion className="space-y-4" defaultValue="respond-to-rfqs-faq-1" animationDelay={0.08}>
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={faq.question}
                      value={`respond-to-rfqs-faq-${index + 1}`}
                      className="rounded-[22px] border border-stroke-3 bg-background-3 px-6 dark:border-stroke-7 dark:bg-background-5">
                      <AccordionTrigger
                        value={`respond-to-rfqs-faq-${index + 1}`}
                        className="flex w-full cursor-pointer items-center justify-between py-6"
                        titleClassName="flex-1 text-left text-lg font-normal text-secondary dark:text-accent"
                        iconType="arrow">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent
                        value={`respond-to-rfqs-faq-${index + 1}`}
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
                    Make supplier quotations easier to submit and easier to evaluate
                  </p>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
                    Talepnet helps suppliers respond faster and helps buyers receive cleaner, more
                    comparable RFQ responses through one connected portal workflow.
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
