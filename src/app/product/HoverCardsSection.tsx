'use client';

import { useState } from 'react';

const roles = [
  {
    title: 'Requesters',
    desc: 'Create material or service requests in seconds. Your request is automatically routed to the right approver — no chasing, no manual follow-up.',
    img: '/images/product/hover-requesters.webp',
  },
  {
    title: 'Procurement',
    desc: 'Send RFQs online, collect supplier bids through the purchasing portal, confirm orders with a single click, and manage your entire supplier network in one place.',
    img: '/images/product/hover-procurement.webp',
  },
  {
    title: 'Approvers',
    desc: 'Approve requests and purchase orders at the right step in the workflow. Confirm received goods, assign responsibilities per department, and keep every process on track.',
    img: '/images/product/hover-legal.webp',
  },
  {
    title: 'Management',
    desc: 'Design simple or advanced workflows without IT. Track purchasing performance with reports and graphs, manage contracts, and get full visibility across all procurement activity.',
    img: '/images/product/hover-operations.webp',
  },
  {
    title: 'Finance',
    desc: 'Define budgets and enforce spend limits directly in workflows. Record supplier invoices and payments, run 3-way matching, and maintain complete audit trails across every transaction.',
    img: '/images/product/hover-finance.webp',
  },
];

export default function HoverCardsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-background-3 py-20 dark:bg-background-5 md:py-24 xl:py-32">
      <div className="main-container space-y-14">
        <div className="max-w-3xl space-y-4">
          <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
            Built for every team, every role
          </span>
          <h2 className="text-4xl leading-tight font-normal lg:text-heading-3">
            One platform, every stakeholder covered
          </h2>
          <p className="max-w-2xl text-base leading-7 text-secondary/75 dark:text-accent/70">
            Whether you manage the budget, raise requests, or approve purchases — TalepNET gives each team exactly the visibility and control they need.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-stretch">
          {/* Cards */}
          <div className="flex flex-col gap-4">
            {roles.map((role, i) => (
              <button
                key={role.title}
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={[
                  'w-full rounded-[26px] border p-7 text-left transition-all duration-500 cursor-pointer',
                  active === i
                    ? 'border-primary-400 bg-white shadow-md dark:border-primary-500 dark:bg-background-6'
                    : 'border-stroke-3 bg-background-1 hover:border-primary-300 dark:border-stroke-7 dark:bg-background-7 dark:hover:border-primary-700',
                ].join(' ')}
              >
                <h3
                  className={[
                    'text-xl font-normal transition-colors duration-500',
                    active === i
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-secondary dark:text-accent',
                  ].join(' ')}
                >
                  {role.title}
                </h3>
                <div
                  className="grid transition-[grid-template-rows,opacity] duration-500 ease-in-out"
                  style={{
                    gridTemplateRows: active === i ? '1fr' : '0fr',
                    opacity: active === i ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="mt-3 text-base leading-7 text-secondary/70 dark:text-accent/70">
                      {role.desc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Screenshot — height locked to left col, images cross-fade */}
          <div className="relative overflow-hidden rounded-[28px] border border-stroke-3 dark:border-stroke-7">
            {roles.map((role, i) => (
              <img
                key={role.title}
                src={role.img}
                alt={role.title}
                className={[
                  'absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ease-in-out',
                  active === i ? 'opacity-100' : 'opacity-0',
                ].join(' ')}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
