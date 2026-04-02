'use client';

import { useState } from 'react';

const chapters = [
  {
    id: 'intake',
    label: 'Request',
    title: 'Every purchase need, captured and routed from day one',
    img: '/images/product/info-request.webp',
    items: [
      { title: 'Material and service requests in one place', body: 'Requesters create structured material or service requests through guided forms. Each request is automatically directed to the responsible person based on your workflow rules.' },
      { title: 'No more informal requests via email or chat', body: 'Replace scattered messages and manual approvals with a single intake process. Every need is tracked, visible, and auditable from the moment it is submitted.' },
      { title: 'Assign material and service responsibles', body: 'Define who is responsible for each material or service category. Requests are routed to the right person automatically — no manual assignment needed.' },
    ],
  },
  {
    id: 'approve',
    label: 'Approve',
    title: 'Approval workflows designed around your organisation',
    img: '/images/product/info-approve.webp',
    items: [
      { title: 'Design simple or advanced workflows without IT', body: 'Configure multi-step approval chains by amount, department, location, or category. Build the exact process your organisation needs — no developer required.' },
      { title: 'Authorise purchasing by role and parameter', body: 'Grant purchasing authority to specific users based on different parameters. Each person sees only what they are authorised to act on.' },
      { title: 'Every approval decision logged permanently', body: 'Who approved, rejected, or escalated — every action is recorded with a timestamp. Full audit trail available at any time.' },
    ],
  },
  {
    id: 'rfq',
    label: 'RFQ',
    title: 'Send RFQs online and collect supplier bids in one place',
    img: '/images/product/info-collaborate.webp',
    items: [
      { title: 'Create and send RFQs with a few clicks', body: 'Generate request for quotation documents directly from approved requests and send them to selected suppliers online — no email attachments needed.' },
      { title: 'Purchasing portal for competitive bids', body: 'Share your request on the TalepNET purchasing portal and let suppliers compete for your business. Evaluate bids side by side and make informed decisions.' },
      { title: 'Track RFQ email delivery and responses', body: 'See exactly when your RFQ was delivered and opened by each supplier. Follow up on pending responses from the same screen.' },
    ],
  },
  {
    id: 'purchase',
    label: 'Purchase',
    title: 'From approved request to sent order in a single click',
    img: '/images/product/info-purchase.webp',
    items: [
      { title: 'One-click purchase order from approved request', body: 'Approved requests convert directly into purchase orders — supplier details, line items, and budget coding all carried over automatically.' },
      { title: 'Send orders to suppliers online', body: 'Purchase orders are delivered to suppliers directly through TalepNET. Track their confirmation and questions without switching tools.' },
      { title: 'Online order confirmation for suppliers', body: 'Suppliers confirm orders through the portal with a single click. Both sides stay aligned on what was ordered and when.' },
    ],
  },
  {
    id: 'receive',
    label: 'Receive',
    title: 'Close the loop between order and delivery',
    img: '/images/product/info-receive.webp',
    items: [
      { title: 'Receive goods against purchase orders', body: 'Log received items against the original purchase order. Partial deliveries are tracked and outstanding quantities stay visible until fully fulfilled.' },
      { title: 'Assign and manage receiving responsibles', body: 'Define who is responsible for receiving each material or service. Accountability is built into every delivery step.' },
    ],
  },
  {
    id: 'invoice',
    label: 'Invoice',
    title: 'Manage supplier invoices and payments without the paperwork',
    img: '/images/product/info-invoice.webp',
    items: [
      { title: 'Record supplier invoices against purchase orders', body: 'Create invoice records directly linked to the relevant PO and receiving document. Discrepancies between ordered, received, and billed quantities are flagged automatically.' },
      { title: 'Track payments and outstanding balances', body: 'Log payments against invoices and monitor what is still due. Finance gets a clear picture of committed spend and pending obligations at any time.' },
      { title: 'Supplier management and evaluation', body: 'Maintain your supplier network, record performance data, and analyse supplier metrics over time. Make sourcing decisions based on actual history.' },
    ],
  },
  {
    id: 'analyze',
    label: 'Analyze',
    title: 'Turn procurement data into better decisions',
    img: '/images/product/info-analyze.webp',
    items: [
      { title: 'Budget management and spend control', body: 'Define budgets per department, project, or category. Add budget control directly into your approval workflows so overspend is prevented before it happens.' },
      { title: 'Purchasing reports and graphs', body: 'Analyse all purchasing processes with clear reports and visualisations. Track spend by supplier, category, period, or department — and share results with stakeholders.' },
      { title: 'Contract management', body: 'Create and manage purchase agreements with suppliers. Link contracts to purchase orders and track compliance over the agreement lifecycle.' },
    ],
  },
];

function AccordionItem({
  id, title, body, openItem, setOpenItem,
}: {
  id: string; title: string; body: string;
  openItem: string | null; setOpenItem: (k: string | null) => void;
}) {
  const isOpen = openItem === id;
  return (
    <div className="overflow-hidden rounded-[20px] border border-white/10 bg-white/5">
      <button
        type="button"
        onClick={() => setOpenItem(isOpen ? null : id)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-base font-medium text-accent lg:text-sm">{title}</span>
        <span className={['shrink-0 text-accent/50 transition-transform duration-300', isOpen ? 'rotate-45' : ''].join(' ')}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div className={['grid transition-[grid-template-rows] duration-300 ease-in-out', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'].join(' ')}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-base leading-7 text-accent/65 lg:text-sm">{body}</p>
        </div>
      </div>
    </div>
  );
}

export default function ProductInfoSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [openItem, setOpenItem] = useState<string | null>(null);
  const ch = chapters[activeIdx];

  return (
    <section className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
      <div className="main-container">

        {/* Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <span className="hero-badge text-tagline-1 inline-block text-accent/60">End-to-end procurement</span>
          <h2 className="text-4xl font-normal leading-tight text-accent lg:text-heading-3">
            One system for requests, approvals, orders, and payments
          </h2>
          <p className="max-w-2xl text-base leading-7 text-accent/70">
            TalepNET replaces scattered emails, spreadsheets, and manual handoffs with a single connected workflow — so your team always knows what was requested, approved, ordered, and received.
          </p>
        </div>

        {/* ── DESKTOP tab layout (lg+) ── */}
        <div className="hidden lg:block">
          {/* Horizontal pill tabs */}
          <div className="mb-10 flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
            {chapters.map((c, i) => (
              <button
                key={c.id}
                type="button"
                onClick={() => { setActiveIdx(i); setOpenItem(null); }}
                className={[
                  'shrink-0 cursor-pointer rounded-full border px-5 py-2.5 text-sm transition-colors',
                  activeIdx === i
                    ? 'border-white/60 bg-white/10 text-white'
                    : 'border-white/20 text-accent/70 hover:border-white/40 hover:text-accent',
                ].join(' ')}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Panel — swaps in place */}
          <div key={ch.id}>
            <h3 className="mb-8 text-xl font-normal leading-tight text-accent lg:text-2xl">
              {ch.title}
            </h3>
            <div className="grid grid-cols-[1fr_1.15fr] items-start gap-8">
              <div className="space-y-3">
                {ch.items.map((item) => (
                  <AccordionItem
                    key={item.title}
                    id={`${ch.id}-${item.title}`}
                    title={item.title}
                    body={item.body}
                    openItem={openItem}
                    setOpenItem={setOpenItem}
                  />
                ))}
              </div>
              <div className="overflow-hidden rounded-[20px] border border-white/10">
                <img
                  src={ch.img}
                  alt={ch.label}
                  className="w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE stacked (< lg) ── */}
        <div className="space-y-16 lg:hidden">
          {/* horizontal pill tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
            {chapters.map((c, i) => (
              <button
                key={c.id}
                type="button"
                onClick={() => { setActiveIdx(i); setOpenItem(null); }}
                className={[
                  'shrink-0 cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors',
                  activeIdx === i
                    ? 'border-white/60 bg-white/10 text-white'
                    : 'border-white/20 text-accent/70 hover:border-white/40 hover:text-accent',
                ].join(' ')}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div key={ch.id} className="space-y-6">
            <h3 className="text-2xl font-normal leading-tight text-accent">{ch.title}</h3>
            <div className="overflow-hidden rounded-[20px] border border-white/10">
              <img src={ch.img} alt={ch.label} className="w-full" loading="lazy" />
            </div>
            <div className="space-y-3">
              {ch.items.map((item) => (
                <AccordionItem
                  key={item.title}
                  id={`mob-${ch.id}-${item.title}`}
                  title={item.title}
                  body={item.body}
                  openItem={openItem}
                  setOpenItem={setOpenItem}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
