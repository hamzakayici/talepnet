'use client';

const col1 = [
  { title: 'Workflow Design', description: 'Simple or advanced, easily design the appropriate workflow.' },
  { title: 'Material / Service Request', description: 'Requests are automatically directed to the relevant user according to the workflow.' },
  { title: 'Material / Service Responsible', description: 'Material / service responsible can be created according to different parameters.' },
  { title: 'Responsibles For Purchasing', description: 'Users can be authorized to purchase according to different parameters.' },
  { title: 'Request For Quotation', description: "RFQ's are easily created and sent online." },
  { title: 'Process Approvals', description: 'Authorized users approve the form in certain process steps.' },
  { title: 'Purchase Order', description: 'Orders are sent to the selected supplier with a single click.' },
  { title: 'Receiving', description: 'After the order, the process of accepting goods from suppliers is carried out.' },
  { title: 'Billing And Payment', description: 'Invoice and payment records of suppliers are created and managed.' },
];

const col2 = [
  { title: 'Supplier Search', description: 'Find suppliers that offer the product / service you are looking for.' },
  { title: 'Purchasing Portal', description: 'Share your request on the portal and let suppliers bid for your request.' },
  { title: 'Budget Management', description: 'Define your budget and add budget control to your workflows.' },
  { title: 'Integrations', description: 'Integrate your enterprise solutions with our API services.' },
  { title: 'Purchasing Analysis', description: 'Analyze all purchasing processes with reports and graphs.' },
  { title: 'Supplier Management', description: 'Add to your supplier network, evaluate and review analysis.' },
  { title: 'Contract Management', description: 'Create and manage purchase agreements with suppliers.' },
  { title: 'Online RFQ and Purchase Order', description: 'Submit RFQs and order confirmations with just one click.' },
];

const col3 = [
  { title: 'Share on Portal', description: 'Share your request on the portal and let suppliers bid for your request.' },
  { title: 'Get Quotations Online', description: 'Get online quotations from suppliers and make your choice.' },
  { title: 'Submit Purchase Order Online', description: 'Submit your purchase orders to suppliers online.' },
  { title: 'Make An Offer', description: 'You can also make a sale offer for your products / services.' },
  { title: 'Evaluate Your Suppliers', description: 'Evaluate your supplier according to different parameters.' },
];

const SPEED = 32;

function ScrollColumn({ items, reverse = false }: { items: { title: string; description: string }[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex flex-col gap-4 overflow-hidden" style={{ height: '460px' }}>
      <div
        className="flex flex-col gap-4 animate-scroll-up"
        style={{
          animationDuration: `${SPEED}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-1.5 rounded-[20px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-7"
          >
            <span className="text-sm font-medium text-secondary dark:text-accent">{item.title}</span>
            <span className="text-xs leading-5 text-secondary/60 dark:text-accent/60">{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function IntegrationsSection() {
  return (
    <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32 overflow-hidden">
      <div className="main-container">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* Left content */}
          <div className="space-y-6">
            <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
              Features
            </span>
            <h2 className="text-4xl leading-tight font-normal lg:text-heading-3 text-secondary dark:text-accent">
              Streamline Your Entire Procurement Workflow
            </h2>
            <p className="text-base leading-7 text-secondary/70 dark:text-accent/70 max-w-md">
              Manage your entire procurement lifecycle from request to payment in a single, unified system. Design flexible workflows, automate approvals, and collaborate seamlessly with suppliers through integrated RFQ and purchasing tools. Gain full visibility and control with analytics, budgeting, and supplier management in one place.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Approval Workflows', 'Online RFQ', 'Order Tracking', 'Email Delivery Tracking', 'Supplier Portal', 'Budget Control', 'Advanced Analytics'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-stroke-3 px-4 py-2 text-sm text-secondary/70 dark:border-stroke-7 dark:text-accent/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: scrolling columns */}
          <div className="grid grid-cols-3 gap-4" style={{ maxHeight: '460px', overflow: 'hidden' }}>
            <ScrollColumn items={col1} />
            <ScrollColumn items={col2} reverse />
            <ScrollColumn items={col3} />
          </div>
        </div>
      </div>
    </section>
  );
}

