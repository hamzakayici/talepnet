import { generateMetadata } from '@/utils/generateMetaData';
import { BadgeCheck, Check } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import CaseStudiesSlider from '../product/CaseStudiesSlider';
import HoverCardsSection from '../product/HoverCardsSection';
import IntegrationsSection from '../product/IntegrationsSection';
import ProductInfoSection from '../product/ProductInfoSection';
import RequestDemoForm from '../product/RequestDemoForm';

export const metadata: Metadata = generateMetadata(
  'Product Features | TalepNET — Procurement Centralization Platform',
  'AI-powered procurement platform. Manage requests, approvals, purchase orders, invoices and supplier communications in one place.',
  'https://www.talepnet.com/product-features',
);

const logos = [
  { src: 'https://supreme-family-a40cb1f433.media.strapiapp.com/japan_tobacco_international_4x_def3f3f6e7.webp', alt: 'Japan Tobacco International' },
  { src: 'https://supreme-family-a40cb1f433.media.strapiapp.com/paul_smith_Night_4x_bb53780ba1.webp', alt: 'Paul Smith' },
  { src: 'https://supreme-family-a40cb1f433.media.strapiapp.com/skyzone_4x_32a20f85c8.webp', alt: 'Sky Zone' },
  { src: 'https://supreme-family-a40cb1f433.media.strapiapp.com/bollore_4x_6b76893226.webp', alt: 'Bolloré' },
  { src: 'https://supreme-family-a40cb1f433.media.strapiapp.com/Collabera_4x_a7ff17a230.webp', alt: 'Collabera' },
  { src: 'https://supreme-family-a40cb1f433.media.strapiapp.com/exp_reality_4x_b27863e33e.webp', alt: 'EXP Realty' },
  { src: 'https://supreme-family-a40cb1f433.media.strapiapp.com/Four_Hands_4x_f48e4d66bb.webp', alt: 'Four Hands' },
  { src: 'https://supreme-family-a40cb1f433.media.strapiapp.com/Artera_4x_d0755bdd68.webp', alt: 'Artera' },
  { src: 'https://supreme-family-a40cb1f433.media.strapiapp.com/I_and_M_Bank_Tanzania_4x_678f3d132c.webp', alt: 'I&M Bank' },
  { src: 'https://supreme-family-a40cb1f433.media.strapiapp.com/carwow_4x_27167c49e9.webp', alt: 'Carwow' },
  { src: 'https://supreme-family-a40cb1f433.media.strapiapp.com/Broadridge_4x_d3be704fe2.webp', alt: 'Broadridge' },
];

const reviewItems = [
  { initials: 'RP', name: 'Rohan P.', role: 'Senior Executive, Student Recruitment', size: '1000+ employees', color: 'from-purple-300/30', text: "It's so simple to use, and the interface is very easy. We can easily find any invoice. It's one of the best software programs I have used to date." },
  { initials: 'LB', name: 'Luan B.', role: 'Head of Finance', size: '50 or fewer employees', color: 'from-yellow-300/30', text: 'Precoro has been a game-changer for our small team. The approval workflows are intuitive, and having everything in one place has drastically reduced the time we spend on procurement.' },
  { initials: 'MK', name: 'Mark K.', role: 'Procurement Manager', size: '201-500 employees', color: 'from-emerald-300/30', text: 'The visibility into our spend has been invaluable. We can now track every dollar and ensure compliance across all departments.' },
  { initials: 'AS', name: 'Anna S.', role: 'CFO', size: '51-200 employees', color: 'from-blue-300/30', text: 'Our month-end close used to take two weeks. With Precoro it is down to three days. The 3-way matching and automated approvals eliminated so many manual steps.' },
  { initials: 'JT', name: 'James T.', role: 'Operations Director', size: '501-1000 employees', color: 'from-amber-300/30', text: 'Managing procurement across 15 locations used to be a nightmare. Now every branch follows the same process and I have full visibility company-wide.' },
  { initials: 'EC', name: 'Elena C.', role: 'Finance Controller', size: '201-500 employees', color: 'from-rose-300/30', text: 'The supplier portal feature alone saved us countless hours. Vendors submit invoices directly and we no longer chase anyone for documentation.' },
];

const showConfidenceSection = false;

const ProductFeaturesPage = () => {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden pb-0 bg-[radial-gradient(ellipse_at_top_left,rgba(134,79,254,0.35),transparent_50%),linear-gradient(135deg,#2d1b69_0%,#4c1d95_45%,#1e3a8a_100%)] pt-32 text-white md:pt-40 xl:pt-48">
        <div className="main-container relative z-10 pb-16 lg:pb-20">
          <span className="mb-6 inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs tracking-[0.18em] uppercase text-white/65">
            TalepNET Product Overview
          </span>
          <h1 className="mb-6 max-w-4xl text-4xl font-normal leading-tight text-white sm:text-5xl xl:text-6xl xl:tracking-[-0.02em]">
            AI-Powered Procurement Centralization Platform, Every Team Aligned
          </h1>
          <p className="mb-10 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
            TalepNET brings your entire procurement process into one place — from purchase requests to approvals and orders — so your team can move faster with full control.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/65">
            {['Multi-level approval workflows', 'End-to-end procurement lifecycle', 'AI-powered procurement assistance'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2">
                <BadgeCheck className="h-4 w-4 text-emerald-400" />
                {item}
              </span>
            ))}
          </div>
        </div>
        <img src="https://supreme-family-a40cb1f433.media.strapiapp.com/desktop_Composite_4aa74f7937.webp" alt="TalepNET dashboard" className="hidden w-full md:block" loading="eager" />
        <img src="https://supreme-family-a40cb1f433.media.strapiapp.com/lgMobile_Composite_1_e6aff4ec9f.webp" alt="TalepNET dashboard" className="w-full md:hidden" loading="eager" />
      </section>

      <section className="overflow-hidden border-y border-stroke-3 bg-background-12 py-6 dark:border-stroke-7 dark:bg-background-7">
        <div className="flex w-max animate-marquee-left" style={{ animationDuration: '38s' }}>
          {[...Array(2)].map((_, pass) => (
            <div key={pass} className="flex items-center">
              {logos.map((logo, idx) => (
                <img
                  key={idx}
                  src={logo.src}
                  alt={logo.alt}
                  width={130}
                  height={44}
                  className="mr-16 h-11 w-32 object-contain opacity-60 dark:invert dark:opacity-40 lg:mr-20"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      <HoverCardsSection />

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32">
        <div className="main-container space-y-10">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
              AI-Powered Procurement
            </span>
            <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
              Let AI handle the repetitive — your team focuses on decisions
            </h2>
            <p className="text-base leading-7 text-secondary/70 dark:text-accent/70">
              TalepNET is building AI into the core of procurement — automating the routine so your team spends time on what actually matters.
            </p>
          </div>
          <img src="/images/product/ai-dashboard.webp" alt="AI-powered procurement" className="hidden w-full rounded-[28px] md:block" loading="lazy" />
          <img src="/images/product/ai-dashboard-mobile.webp" alt="AI-powered procurement" className="w-full rounded-[20px] md:hidden" loading="lazy" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { title: 'AI Supplier Matching', desc: 'Describe what you need and let AI surface the most relevant suppliers from your network — or suggest new ones based on category, location, and past performance. Cut sourcing time from days to minutes.' },
              { title: 'AI Spend Analysis', desc: 'Get instant insights into where your budget is going. Identify top suppliers, spot anomalies, and uncover savings opportunities with AI-generated reports.' },
              { title: 'Automated Workflow Suggestions', desc: 'TalepNET learns from your approval patterns and suggests workflow optimizations — so your processes get smarter over time.' },
            ].map((card) => (
              <article key={card.title} className="rounded-[26px] border border-stroke-3 bg-background-3 p-7 dark:border-stroke-7 dark:bg-background-5">
                <h3 className="mb-3 text-xl font-normal text-secondary dark:text-accent">{card.title}</h3>
                <p className="text-base leading-7 text-secondary/70 dark:text-accent/70">{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProductInfoSection />
      <IntegrationsSection />

      <section className="overflow-hidden py-16 md:py-20 xl:py-28" style={{ background: 'linear-gradient(160deg, #ece8ff 0%, #f4f2fe 50%, #eef1ff 100%)' }}>
        <div className="main-container space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="hero-badge text-tagline-1 inline-block text-slate-500">Getting Started</span>
            <h2 className="text-4xl font-normal leading-tight text-slate-900 lg:text-heading-3">
              Get started quickly with a simple onboarding process
            </h2>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              TalepNET is designed to be adopted fast. No lengthy onboarding, no IT dependency — your team can start submitting requests and approving orders from day one.
            </p>
          </div>
        </div>
        <img src="/images/product/implementation-team.webp" alt="TalepNET team" className="my-12 w-full object-cover" style={{ maxHeight: '50vh', objectPosition: 'top' }} loading="lazy" />
        <div className="main-container">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { time: 'Day 1', title: 'Start using TalepNET from day one', bullets: ['Create workflows easily with a self-service setup', 'Submit requests and start approvals immediately', 'Reach suppliers quickly and keep processes moving', 'Get expert support from our team whenever needed'] },
              { time: 'Guided rollout', title: 'Go live with guided onboarding', bullets: ['Dedicated implementation specialist', 'Structured onboarding guidance', 'Data migration and system configuration', 'Team training tailored to each role'] },
              { time: 'Any time', title: 'Continuous improvements', bullets: ['New features shipped every two weeks', 'No downtime for updates', 'User community and roadmap voting', 'SOC 2 Type II compliant infrastructure'] },
            ].map((card) => (
              <div key={card.time} className="rounded-[26px] border border-primary-200/60 bg-white p-7 shadow-sm">
                <span className="mb-5 inline-block rounded-full border border-primary-300/50 bg-primary-100 px-3 py-1 text-sm text-primary-700">{card.time}</span>
                <h3 className="mb-5 text-xl font-normal text-slate-900">{card.title}</h3>
                <ul className="space-y-3">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-slate-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudiesSlider />

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
        <div className="main-container">
          <div className="grid grid-cols-1 overflow-hidden rounded-[34px] lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5 bg-background-3 p-10 dark:bg-background-7 lg:p-14">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">Product Roadmap</span>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                Procurement platform that truly listens to your needs
              </h2>
              <p className="text-base leading-7 text-secondary/70 dark:text-accent/70">
                Your voice matters. From feature ideas to new integrations, your input directly shapes the product. Vote on existing requests and submit new ideas.
              </p>
              <Link href="/changelog" className="btn btn-md btn-primary inline-flex">
                <span>Explore the Roadmap</span>
              </Link>
            </div>
            <img src="https://supreme-family-a40cb1f433.media.strapiapp.com/desktop_roadmap_89e2c88863.webp" alt="Product roadmap" className="min-h-64 w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {showConfidenceSection ? (
        <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32">
          <div className="main-container grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {reviewItems.map((item) => (
              <article key={item.name} className="rounded-[28px] border border-stroke-3 bg-background-3 p-7 dark:border-stroke-7 dark:bg-background-5">
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${item.color} to-transparent text-secondary dark:text-accent`}>
                  {item.initials}
                </div>
                <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">{item.text}</p>
                <div className="mt-6">
                  <p className="text-base font-medium text-secondary dark:text-accent">{item.name}</p>
                  <p className="text-sm text-secondary/60 dark:text-accent/60">{item.role}</p>
                  <p className="text-sm text-secondary/50 dark:text-accent/50">{item.size}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <RequestDemoForm />
    </main>
  );
};

export default ProductFeaturesPage;
