import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LinkButton from '@/components/ui/button/LinkButton';
import {
  ArrowRight,
  Check,
  ClipboardList,
  FileCheck2,
  FileClock,
  ListOrdered,
  Mail,
  MapPinned,
  MessageSquareText,
  PackageCheck,
  Send,
  ShieldCheck,
  Truck,
  XCircle,
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
  'Keep active and completed orders visible in one workspace',
  'Review delivery context, notes, dates, and totals in the same record',
  'Acknowledge, decline, or mark orders fulfilled through explicit actions',
  'Reduce follow-up loops after the PO is sent',
];

const painPoints = [
  'Orders are hard to track once they leave the buyer’s system',
  'Suppliers do not always have one reliable place to review active POs',
  'Acknowledgement and decline decisions happen outside the process record',
  'Order history becomes harder to follow over time',
  'Delivery expectations and notes are easy to lose in communication threads',
  'Buyers and suppliers work from different execution views',
];

const features = [
  {
    title: 'Active Order Workspace',
    description: 'Suppliers can access active purchase orders through a dedicated portal list instead of relying on inbox search or manual follow-up.',
    icon: ClipboardList,
  },
  {
    title: 'Completed Order History',
    description: 'Finished orders remain available in a separate completed view so past execution can still be reviewed when needed.',
    icon: FileClock,
  },
  {
    title: 'Order Detail View',
    description: 'Suppliers can open each order with PO number, buyer company, dates, delivery location, notes, item lines, and order total in one place.',
    icon: ListOrdered,
  },
  {
    title: 'Order Status Visibility',
    description: 'Active status information remains visible inside the order record, helping suppliers and buyers stay aligned on execution.',
    icon: ShieldCheck,
  },
  {
    title: 'Acknowledge Orders',
    description: 'Suppliers can confirm that an order has been received and recognized, giving buyers faster visibility into supplier-side response.',
    icon: Check,
  },
  {
    title: 'Decline Orders',
    description: 'If an order cannot be accepted, suppliers can explicitly decline it through the portal instead of leaving the buyer to infer the outcome.',
    icon: XCircle,
  },
  {
    title: 'Mark Orders Fulfilled',
    description: 'Suppliers can signal fulfillment directly in the portal, helping execution progress stay visible beyond simple order issuance.',
    icon: PackageCheck,
  },
  {
    title: 'Delivery Context',
    description: 'Delivery location and expected date remain attached to the order so suppliers can review execution expectations in context.',
    icon: MapPinned,
  },
  {
    title: 'Order Notes and Commercial Detail',
    description: 'Buyer notes, line descriptions, quantities, units, and total amount remain part of the same supplier-facing record.',
    icon: MessageSquareText,
  },
  {
    title: 'Structured Buyer-to-Supplier Order Delivery',
    description: 'On the buyer side, Talepnet supports sending purchase orders through email, secure links, WhatsApp sharing, and portal-linked communication.',
    icon: Mail,
  },
  {
    title: 'Secure Purchase Order Sharing',
    description: 'Orders can be shared through secure document links instead of being limited to static attachments and manual forwarding.',
    icon: FileCheck2,
  },
  {
    title: 'Order Communication Traceability',
    description: 'Buyer-side order communication logs remain visible, making it easier to understand how and when the order was sent.',
    icon: Send,
  },
  {
    title: 'Portal-Linked Supplier Experience',
    description: 'Suppliers with linked portal access move from quotation into order review without leaving the structured procurement environment.',
    icon: ShieldCheck,
  },
  {
    title: 'Downstream Receiving Continuity',
    description: 'Orders in Talepnet do not stop at placement. They continue into receiving on the buyer side, which helps connect supplier execution to actual receipt outcomes.',
    icon: Truck,
  },
];

const steps = [
  {
    title: 'The buyer places the order',
    text: 'Talepnet generates and shares the purchase order through structured supplier-facing channels, including portal-linked access where enabled.',
  },
  {
    title: 'The supplier reviews the order',
    text: 'Suppliers open the order in the portal with delivery context, notes, dates, item lines, and total amount already attached.',
  },
  {
    title: 'The supplier takes action',
    text: 'The order can be acknowledged, declined, or marked fulfilled directly in the portal depending on execution outcome.',
  },
  {
    title: 'Execution stays visible',
    text: 'Buyer-side receiving and order history continue the process, helping both sides work from clearer operational status.',
  },
];

const benefits = [
  {
    title: 'Faster acknowledgement cycles',
    text: 'Buyers get clearer confirmation when suppliers can respond directly inside the portal.',
  },
  {
    title: 'Clearer execution status',
    text: 'Order status becomes easier to interpret when acknowledgement, decline, and fulfillment are explicit actions.',
  },
  {
    title: 'A cleaner order history',
    text: 'Active and completed orders stay separated and easier to navigate over time.',
  },
  {
    title: 'Less manual chasing',
    text: 'Procurement teams spend less effort tracking basic order-state questions across multiple channels.',
  },
  {
    title: 'Stronger continuity into receiving',
    text: 'Supplier-side order tracking connects more cleanly to buyer-side goods receipt and procurement closure.',
  },
];

const useCases = [
  'Suppliers managing recurring purchase orders from procurement teams',
  'Buyers that want faster acknowledgement after PO placement',
  'Organizations trying to reduce fragmented post-award follow-up',
  'Supplier relationships where delivery expectations need to stay visible',
  'Procurement teams that want portal-linked order response actions',
  'Businesses that need cleaner order history across active and completed work',
  'Teams that want order execution connected to downstream receiving',
];

const faqs = [
  {
    question: 'How do suppliers track orders in Talepnet?',
    answer:
      'Suppliers access active and completed orders through the Supplier Portal, where they can open each order and review its status, details, and required actions.',
  },
  {
    question: 'Can suppliers acknowledge or decline orders directly in the portal?',
    answer:
      'Yes. Talepnet supports direct order acknowledgement and decline actions inside the supplier-facing workflow.',
  },
  {
    question: 'Can suppliers mark an order as fulfilled?',
    answer:
      'Yes. Suppliers can indicate fulfillment through the portal, helping order progress remain visible to the buyer.',
  },
  {
    question: 'What order details are visible to suppliers?',
    answer:
      'Suppliers can review PO number, buyer company, order and expected dates, delivery location, notes, item lines, quantities, and totals inside the order record.',
  },
  {
    question: 'How does Talepnet help buyers after the order is sent?',
    answer:
      'Talepnet keeps order communication, supplier response, secure document sharing, and receiving tied to the same procurement chain, so execution stays easier to follow.',
  },
  {
    question: 'Why is this better than tracking orders through email alone?',
    answer:
      'Talepnet gives both sides a structured order record with explicit status actions and clearer visibility instead of relying on fragmented communication.',
  },
];

export default function TrackOrdersPage() {
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
                  Track orders with clearer status, faster response, and less follow-up
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  Talepnet helps suppliers stay on top of purchase orders through a portal
                  experience that keeps active and completed orders visible, makes order actions
                  easier to manage, and gives both buyers and suppliers a cleaner view of execution.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#order-flow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See the Order Flow
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                  <ImagePlaceholder label="Order tracking workspace placeholder" className="min-h-[320px] sm:min-h-[390px]" />
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
                Order workspace
              </span>
              <h2 className="mt-5 max-w-[13ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                Order tracking should not start after something goes wrong
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Once a supplier is selected, the real operational work begins. Buyers need to know
                whether an order was seen, accepted, declined, or fulfilled. Suppliers need a
                clear place to review the order, check delivery expectations, and act without
                relying on scattered emails or phone calls.
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
                    When order communication stays fragmented, execution gets harder to trust
                  </h3>
                  <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                    In many procurement environments, suppliers receive purchase orders by email
                    and then the follow-up moves elsewhere. Talepnet improves that process by
                    giving suppliers a defined space to review orders and respond through explicit
                    actions instead of disconnected back-and-forth.
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
              <span className="badge badge-green mb-5">Order visibility</span>
              <h2 className="max-w-[13ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                A supplier-facing order workspace with real operational context
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Talepnet’s order experience is designed to continue the supplier journey after
                sourcing. Suppliers can review active and completed orders, open full order
                details, check buyer company, expected date, delivery location, notes, line items,
                and totals, and take action directly from the portal.
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

      <section id="order-flow" className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container">
          <div className="max-w-3xl">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-5">Order flow</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-3xl font-normal text-secondary dark:text-accent sm:text-4xl">
                From placed order to visible supplier response
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
                A cleaner way to manage order follow-through
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Suppliers should not have to reconstruct the state of an order from partial
                communication. Talepnet gives them a direct place to see what is active, what is
                complete, and what needs action.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-5 lg:p-10">
              <span className="badge badge-green mb-5">Buyer-side impact</span>
              <h2 className="max-w-[13ch] text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                Better order tracking on the buyer side too
              </h2>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                A supplier-friendly order workspace also strengthens buyer control. When suppliers
                can act on orders directly through the system, buyers get clearer response signals,
                better traceability, and less uncertainty after placement.
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
                What improves when orders stay visible
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
                Where Talepnet’s order tracking experience creates the most value
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
                Common questions about order tracking
              </h2>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="space-y-5 p-8 lg:p-10">
                <Accordion className="space-y-4" defaultValue="track-orders-faq-1" animationDelay={0.08}>
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={faq.question}
                      value={`track-orders-faq-${index + 1}`}
                      className="rounded-[22px] border border-stroke-3 bg-background-3 px-6 dark:border-stroke-7 dark:bg-background-5">
                      <AccordionTrigger
                        value={`track-orders-faq-${index + 1}`}
                        className="flex w-full cursor-pointer items-center justify-between py-6"
                        titleClassName="flex-1 text-left text-lg font-normal text-secondary dark:text-accent"
                        iconType="arrow">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent
                        value={`track-orders-faq-${index + 1}`}
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
                    Keep purchase orders visible after placement, not buried in follow-up
                  </p>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
                    Talepnet helps suppliers review orders, respond faster, and keep execution
                    status clearer while giving procurement teams stronger visibility from PO issue to receipt.
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
