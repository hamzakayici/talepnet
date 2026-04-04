import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LinkButton from '@/components/ui/button/LinkButton';

function ImagePlaceholder({
  label,
  className = '',
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex min-h-[220px] items-center justify-center bg-[linear-gradient(135deg,#f4f8fb_0%,#fbfcfe_100%)] dark:bg-[linear-gradient(135deg,#171d24_0%,#0f141a_100%)] ${className}`}>
      <div className="rounded-full border border-dashed border-secondary/20 px-4 py-2 text-sm tracking-[0.14em] uppercase text-secondary/45 dark:border-accent/15 dark:text-accent/40">
        {label}
      </div>
    </div>
  );
}

const painPoints = [
  'Project and site demand arrives through fragmented channels',
  'Urgent purchasing bypasses approval and budget discipline',
  'Supplier communication becomes hard to track across RFQs and orders',
  'Different locations follow different procurement habits',
  'Receiving and order follow-up are difficult to manage centrally',
  'Spend becomes visible too late, after cost drift has already happened',
];

const capabilities = [
  {
    title: 'Speed up approvals and avoid service-impacting delays',
    text: 'When requests depend on paper, spreadsheets, or back-and-forth messages, approvals slow down and critical purchases lose momentum. Talepnet replaces that friction with centralized approval workflows, real-time request visibility, and configurable routing based on department, threshold, branch, or operational ownership. Whether the need is housekeeping supplies, kitchen equipment, maintenance support, or front-of-house items, teams can move faster with clearer accountability.',
  },
  {
    title: 'Take control of property-wide and company-wide purchasing',
    text: 'Talepnet gives hospitality businesses a clearer view of what each property, branch, or operating unit is buying and what that demand is costing. Purchase requests move into purchase forms, quotations can be compared across suppliers, and purchase orders stay connected to the workflow. This helps central teams consolidate buying where it makes sense, while still supporting local property-level execution.',
  },
  {
    title: 'Make purchasing transparent and keep everyone in the loop',
    text: 'Procurement becomes harder when hotels, restaurants, warehouses, and headquarters all work through separate channels. Talepnet brings requests, approvals, suppliers, contracts, orders, receiving, budget signals, and spend visibility into one operational environment. Teams can follow progress without chasing updates across email threads or phone calls, and management gets a more consistent view across the organization.',
  },
  {
    title: 'Simplify supplier and contract coordination',
    text: 'Hospitality operations depend on a wide supplier base, from food and beverage vendors to linen providers, cleaning suppliers, maintenance contractors, and service partners. Talepnet keeps supplier records, contacts, contracts, RFQ activity, and order communication connected to the same procurement chain. Buyers can also surface contracted suppliers, reuse previous order context, and compare quotations with better commercial visibility.',
  },
  {
    title: 'Stay on budget with real-time spend visibility',
    text: 'It is easy to lose track of spending when multiple properties and departments are buying at once. Talepnet helps hospitality teams connect cost centers, fiscal years, approvals, supplier spend, and category visibility into a more actionable view of procurement performance. Budget and spend signals become visible while operations are still moving, not only after the reporting cycle closes.',
  },
  {
    title: 'Keep execution visible after the order is placed',
    text: 'Procurement control should not end when the PO is sent. Talepnet connects purchase orders to supplier communication, delivery context, and receiving workflows so teams can record what was actually delivered, manage partial receipt, and keep order execution tied to operational closure.',
  },
];

const useCases = [
  'Standardizing procurement across hotels, resorts, restaurants, and support units',
  'Managing recurring operational buying for guest experience and facility continuity',
  'Running RFQs and quotation comparison across multiple suppliers',
  'Reusing contracted suppliers and previous order intelligence during sourcing',
  'Monitoring branch- or property-level spending through cost-center-aware controls',
  'Keeping receiving and supplier execution visible across active operations',
];

const flow = [
  'Property or department teams submit requests with the right operational context.',
  'Approval workflows route demand to the correct stakeholders.',
  'Purchasing converts approved demand into purchase forms for sourcing.',
  'Buyers collect quotations, compare suppliers, and use contract or order history.',
  'Purchase orders are issued through structured supplier workflows.',
  'Receiving records what arrived and closes the loop.',
  'Dashboards and spend views show what each property, supplier, and category is doing in real time.',
];

const benefits = [
  {
    title: 'Built around hospitality reality',
    text: 'Talepnet supports multi-property operations, distributed approvals, recurring supplier relationships, and fast-changing purchasing needs without reducing control to manual oversight.',
  },
  {
    title: 'Faster decisions, fewer blind spots',
    text: 'Requests, approvals, sourcing, orders, and receiving stay connected, helping teams make better decisions without losing time to fragmented follow-up.',
  },
  {
    title: 'Better buying discipline across properties',
    text: 'Contracted suppliers, quotation comparisons, and centralized spend visibility help reduce off-process purchasing and improve chain-wide consistency.',
  },
  {
    title: 'Easier for operational teams to use',
    text: 'Talepnet is designed to keep procurement usable for non-technical teams at the property level while still giving procurement, finance, and leadership the control they need.',
  },
  {
    title: 'Stronger financial visibility',
    text: 'Budget structures, supplier spend, category views, and procurement activity all come together in a clearer management view of where money is going and why.',
  },
];

const faqs = [
  {
    question: 'Can Talepnet support multi-property hospitality procurement with centralized oversight?',
    answer:
      'Yes. Talepnet works well for hospitality groups managing multiple properties, branches, or operating units. Central teams keep visibility while local teams still create demand and move it through structured workflows.',
  },
  {
    question: 'How does Talepnet help hospitality teams avoid delays?',
    answer:
      'Talepnet reduces delays by centralizing requests, routing approvals automatically, and keeping sourcing and order execution connected to the same workflow record.',
  },
  {
    question: 'Can Talepnet help control supplier and contract complexity in hospitality?',
    answer:
      'Yes. Supplier records, contacts, contracts, RFQs, quotations, orders, and receiving activity stay connected, making supplier coordination easier to manage across a broad vendor base.',
  },
  {
    question: 'How does Talepnet support hospitality budget control?',
    answer:
      'Talepnet connects cost centers, fiscal years, approval discipline, and spend visibility so hospitality businesses can track budget pressure across properties and departments more proactively.',
  },
  {
    question: 'Does Talepnet support hospitality purchasing after the PO stage?',
    answer:
      'Yes. Purchase orders continue into supplier communication and receiving workflows, helping teams keep execution visible through actual delivery and operational closure.',
  },
];

export default function HospitalityPage() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_28%),linear-gradient(180deg,#fff9f4_0%,#ffffff_52%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container relative z-10 pb-16 md:pb-20 xl:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">Industry Fit</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[13ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                  Hospitality procurement that stays organized across every property
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  Talepnet helps hotel groups, restaurant operations, resorts, and multi-property
                  hospitality businesses centralize requests, approvals, suppliers, sourcing,
                  purchase orders, receiving, budgets, and spend visibility in one connected
                  procurement flow.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="#hospitality-flow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    See the Hospitality Flow
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-5">
                <ImagePlaceholder
                  label="Hospitality procurement placeholder"
                  className="min-h-[320px] sm:min-h-[390px]"
                />
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-10 dark:bg-background-5 md:py-12">
        <div className="main-container">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[24px] border border-stroke-3 bg-white px-6 py-6 dark:border-stroke-7 dark:bg-background-6 lg:px-8">
              <div className="space-y-4">
                <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                  Talepnet is built for hospitality&apos;s fast-moving, guest-focused operations
                </span>
                <p className="max-w-5xl text-base leading-7 text-secondary/75 dark:text-accent/70">
                  In hospitality, procurement has to move quickly without creating supply gaps,
                  budget overruns, or service disruption. Talepnet helps teams source everything
                  from food, guest amenities, cleaning supplies, maintenance needs, and
                  operational services through structured workflows that keep every property and
                  central team aligned.
                </p>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <RevealAnimation delay={0.14}>
            <div className="rounded-[28px] bg-background-3 p-8 dark:bg-background-5 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Why hospitality procurement gets hard to control
              </span>
              <p className="mt-5 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Hospitality teams buy under constant operational pressure. Properties need food,
                amenities, cleaning supplies, maintenance support, and service vendors without
                delay, but the business still needs approval discipline, supplier coordination,
                and budget visibility. When requests and follow-up live across messages,
                spreadsheets, and separate inboxes, procurement speed improves at the cost of
                control.
              </p>
              <ul className="mt-8 space-y-4">
                {painPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary-500" />
                    <span className="text-sm leading-6 text-secondary/72 dark:text-accent/70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.22}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <div className="space-y-5 p-8 lg:p-10">
                <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                  Why Talepnet fits hospitality environments
                </span>
                <h2 className="text-3xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-4">
                  Property-level execution and central procurement control stay connected
                </h2>
                <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                  Talepnet is built for organizations that need operational flexibility without
                  sacrificing structure. Its workflow-based model, supplier collaboration,
                  receiving flows, budget-aware controls, and spend visibility make it well suited
                  for hospitality businesses managing hotels, resorts, restaurants, warehouses,
                  and support teams at once.
                </p>
                <ImagePlaceholder
                  label="Hospitality workflow placeholder"
                  className="min-h-[220px] rounded-[22px]"
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
                How Talepnet supports hospitality procurement
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                One connected operating model across properties, suppliers, approvals, and spend
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.2 + index * 0.05}>
                <article className="rounded-[26px] border border-stroke-3 bg-background-3 p-7 dark:border-stroke-7 dark:bg-background-5">
                  <h3 className="mb-3 text-2xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                  <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">{item.text}</p>
                </article>
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
                  Built for real hospitality purchasing scenarios
                </span>
                <ul className="grid gap-4">
                  {useCases.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary-500" />
                      <span className="text-sm leading-6 text-secondary/72 dark:text-accent/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
              <ImagePlaceholder
                label="Property procurement placeholder"
                className="min-h-[320px]"
              />
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section id="hospitality-flow" className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[30px] bg-[linear-gradient(135deg,#10222d_0%,#17384b_52%,#0d1720_100%)] p-8 text-white lg:p-10">
              <span className="text-tagline-1 inline-block text-white/62">One workflow from request to receipt</span>
              <p className="mt-5 max-w-2xl text-2xl font-normal leading-tight text-white lg:text-4xl">
                The system keeps every property’s procurement activity connected from intake to execution.
              </p>
            </div>
          </RevealAnimation>

          <div className="grid gap-4">
            {flow.map((step, index) => (
              <RevealAnimation key={step} delay={0.18 + index * 0.05}>
                <div className="rounded-[22px] border border-stroke-3 bg-white p-6 dark:border-stroke-7 dark:bg-background-6">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm text-primary-600 dark:bg-primary-500/15 dark:text-primary-300">
                      {index + 1}
                    </span>
                    <p className="text-base leading-7 text-secondary/75 dark:text-accent/70">{step}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
        <div className="main-container grid gap-8 xl:grid-cols-[0.96fr_1.04fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Why hospitality teams choose Talepnet
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Benefits that matter across properties, suppliers, and budgets
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.22 + index * 0.06}>
                <div className="rounded-[22px] bg-white p-6 dark:bg-background-6">
                  <h3 className="text-xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-secondary/72 dark:text-accent/70">{item.text}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32">
        <div className="main-container grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.12}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Answering your questions about hospitality procurement
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Common questions from hospitality teams
              </h2>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.24}>
            <Accordion className="space-y-4" defaultValue="hospitality-faq-1" animationDelay={0.08}>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`hospitality-faq-${index + 1}`}
                  className="rounded-[22px] border border-stroke-3 bg-background-3 px-6 dark:border-stroke-7 dark:bg-background-5">
                  <AccordionTrigger
                    value={`hospitality-faq-${index + 1}`}
                    className="flex w-full cursor-pointer items-center justify-between py-6"
                    titleClassName="flex-1 text-left text-lg font-normal text-secondary dark:text-accent"
                    iconType="arrow">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    value={`hospitality-faq-${index + 1}`}
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
                    Bring hospitality procurement into one connected operating model
                  </span>
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                    Talepnet helps hospitality businesses simplify purchasing across properties,
                    improve supplier coordination, stay on budget, and keep service-critical
                    procurement moving.
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
