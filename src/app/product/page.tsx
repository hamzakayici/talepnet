import { generateMetadata } from '@/utils/generateMetaData';
import { BadgeCheck, Check } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import CaseStudiesSlider from './CaseStudiesSlider';
import HoverCardsSection from './HoverCardsSection';
import IntegrationsSection from './IntegrationsSection';
import ProductInfoSection from './ProductInfoSection';
import RequestDemoForm from './RequestDemoForm';

export const metadata: Metadata = generateMetadata(
  'Product | TalepNET — Procurement Centralization Platform',
  'AI-powered procurement platform. Manage requests, approvals, purchase orders, invoices and supplier communications in one place.',
  'https://www.talepnet.com/product',
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

const ProductPage = () => {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">

      {/* ── 1. HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-0 bg-[radial-gradient(ellipse_at_top_left,rgba(134,79,254,0.35),transparent_50%),linear-gradient(135deg,#2d1b69_0%,#4c1d95_45%,#1e3a8a_100%)] pt-32 text-white md:pt-40 xl:pt-48">
        <div className="main-container relative z-10 pb-16 lg:pb-20">
          <span className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs tracking-[0.18em] uppercase text-white/65 mb-6">
            TalepNET Product Overview
          </span>
          <h1 className="max-w-4xl text-4xl leading-tight font-normal text-white sm:text-5xl xl:text-6xl xl:tracking-[-0.02em] mb-6">
            AI-Powered Procurement Centralization Platform, Every Team Aligned
          </h1>
          <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg mb-10">
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
        <img
          src="https://supreme-family-a40cb1f433.media.strapiapp.com/desktop_Composite_4aa74f7937.webp"
          alt="TalepNET dashboard"
          className="w-full hidden md:block"
          loading="eager"
        />
        <img
          src="https://supreme-family-a40cb1f433.media.strapiapp.com/lgMobile_Composite_1_e6aff4ec9f.webp"
          alt="TalepNET dashboard"
          className="w-full md:hidden"
          loading="eager"
        />
      </section>

      {/* ── 2. LOGO MARQUEE ──────────────────────────────────────── */}
      <section className="border-y border-stroke-3 bg-background-12 py-6 dark:border-stroke-7 dark:bg-background-7 overflow-hidden">
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
                  className="w-32 h-11 mr-16 lg:mr-20 object-contain opacity-60 dark:invert dark:opacity-40"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. HOVER CARDS ─── client component ─────────────────── */}
      <HoverCardsSection />

      {/* ── 4. AI SINGLE IMAGE SECTION ───────────────────────────── */}
      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32">
        <div className="main-container space-y-10">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
              AI-Powered Procurement
            </span>
            <h2 className="text-4xl leading-tight font-normal lg:text-heading-3 text-secondary dark:text-accent">
              Let AI handle the repetitive — your team focuses on decisions
            </h2>
            <p className="text-base leading-7 text-secondary/70 dark:text-accent/70">
              TalepNET is building AI into the core of procurement — automating the routine so your team spends time on what actually matters.
            </p>
          </div>
          <img
            src="/images/product/ai-dashboard.webp"
            alt="AI-powered procurement"
            className="hidden w-full rounded-[28px] md:block"
            loading="lazy"
          />
          <img
            src="/images/product/ai-dashboard-mobile.webp"
            alt="AI-powered procurement"
            className="w-full rounded-[20px] md:hidden"
            loading="lazy"
          />
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

      {/* ── 5. PRODUCT INFO TABS ─── client component ────────────── */}
      <ProductInfoSection />

      {/* ── 6. INTEGRATIONS ─── client component ─────────────────── */}
      <IntegrationsSection />

      {/* ── 7. IMPLEMENTATIONS ───────────────────────────────────── */}
      <section className="overflow-hidden py-16 md:py-20 xl:py-28" style={{ background: 'linear-gradient(160deg, #ece8ff 0%, #f4f2fe 50%, #eef1ff 100%)' }}>
        <div className="main-container space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="hero-badge text-tagline-1 inline-block text-slate-500">Getting Started</span>
            <h2 className="text-4xl leading-tight font-normal text-slate-900 lg:text-heading-3">
              Get started quickly with a simple onboarding process
            </h2>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              TalepNET is designed to be adopted fast. No lengthy onboarding, no IT dependency — your team can start submitting requests and approving orders from day one.
            </p>
          </div>
        </div>
        <img
          src="/images/product/implementation-team.webp"
          alt="TalepNET team"
          className="my-12 w-full object-cover"
          style={{ maxHeight: '50vh', objectPosition: 'top' }}
          loading="lazy"
        />
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

      {/* ── 8. CASE STUDIES SLIDER ─── client component ──────────── */}
      <CaseStudiesSlider />

      {/* ── 9. PROMO BANNER ──────────────────────────────────────── */}
      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
        <div className="main-container">
          <div className="grid grid-cols-1 overflow-hidden rounded-[34px] lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5 bg-background-3 p-10 dark:bg-background-7 lg:p-14">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">Product Roadmap</span>
              <h2 className="text-4xl leading-tight font-normal lg:text-heading-3 text-secondary dark:text-accent">
                Procurement platform that truly listens to your needs
              </h2>
              <p className="text-base leading-7 text-secondary/70 dark:text-accent/70">
                Your voice matters. From feature ideas to new integrations, your input directly shapes the product. Vote on existing requests and submit new ideas.
              </p>
              <Link href="/changelog" className="btn btn-md btn-primary inline-flex">
                <span>Explore the Roadmap</span>
              </Link>
            </div>
            <img
              src="https://supreme-family-a40cb1f433.media.strapiapp.com/desktop_roadmap_89e2c88863.webp"
              alt="Product roadmap"
              className="min-h-64 w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── 10. FEATURES BENTO GRID ──────────────────────────────── */}
      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32">
        <div className="main-container space-y-14">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-4xl leading-tight font-normal lg:text-heading-3 text-secondary dark:text-accent">
              Grounded in what procurement actually needs
            </h2>
            <p className="text-base leading-7 text-secondary/70 dark:text-accent/70">
              Not built to look impressive in a demo. Built to work reliably every day, for every team, in every location.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-6">
            <div className="grid grid-cols-1 overflow-hidden rounded-[28px] border border-stroke-3 dark:border-stroke-7 lg:col-span-6 lg:grid-cols-[0.4fr_0.6fr]">
              <div className="space-y-4 bg-background-3 p-8 dark:bg-background-5 lg:p-10">
                <h3 className="text-2xl font-normal text-secondary dark:text-accent">Workflow-driven design</h3>
                <p className="text-base leading-7 text-secondary/70 dark:text-accent/70">Design and manage your procurement processes with TalepNET&apos;s flexible workflow designer. Create simple or advanced flows, define approval steps, and assign responsibilities based on your organization&apos;s needs. Adapt quickly as your processes evolve without complex setup or development.</p>
              </div>
              <div className="hidden bg-background-3 p-6 dark:bg-background-5 lg:block">
                <img src="/images/product/desktop-po.webp" alt="Purchase Order UI" className="w-full rounded-xl object-cover" loading="lazy" />
              </div>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 dark:border-stroke-7 lg:col-span-3" style={{ backgroundColor: "#d9e3e9" }}>
              <div className="space-y-4 p-8">
                <h3 className="text-2xl font-normal text-secondary dark:text-accent">Full process visibility</h3>
                <p className="text-base leading-7 text-secondary/70 dark:text-accent/70">Track every step with a clear workflow history. See what has already happened, what is waiting next, and how each request continues through the process.</p>
              </div>
              <div className="hidden px-10 pb-10 lg:block">
                <img src="/images/product/desktop-workflow-history.webp" alt="Workflow History" className="mx-auto w-4/5 rounded-xl object-cover" loading="lazy" />
              </div>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-stroke-3 dark:border-stroke-7 lg:col-span-3" style={{ backgroundColor: "#E8E3EA" }}>
              <div className="space-y-4 p-8 lg:p-10">
                <h3 className="text-2xl font-normal text-secondary dark:text-accent">Track supplier communication</h3>
                <p className="text-base leading-7 text-secondary/70 dark:text-accent/70">See when RFQs and purchase order emails are sent to suppliers, delivered, opened, and acted on. Keep communication visible and follow up with confidence.</p>
              </div>
              <div className="hidden px-10 pb-10 lg:block">
                <img src="/images/product/desktop-rfq-email-delivery.webp" alt="RFQ Email Delivery Tracking" className="mx-auto w-4/5 rounded-xl object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. REVIEWS MARQUEE ──────────────────────────────────── */}
      {showConfidenceSection && (
        <section className="overflow-hidden bg-background-3 py-20 dark:bg-background-5 md:py-24 xl:py-32">
          <div className="main-container mb-12 space-y-4">
            <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">CONFIDENCE IN NUMBERS</span>
            <h2 className="text-4xl leading-tight font-normal max-w-2xl lg:text-heading-3 text-secondary dark:text-accent">
              Designed around real procurement workflows
            </h2>
            <p className="text-base leading-7 text-secondary/70 dark:text-accent/70 max-w-xl">
              TalepNET is shaped by practical purchasing and approval needs, with a product approach focused on clarity, control, and day-to-day usability.
            </p>
          </div>
          <div className="flex w-max animate-marquee-left" style={{ animationDuration: '42s' }}>
            {[...Array(2)].map((_, pass) => (
              <div key={pass} className="flex gap-5 mr-5">
                {reviewItems.map((r, ri) => (
                  <div key={ri} className={`flex w-80 xl:w-96 shrink-0 flex-col gap-5 rounded-[26px] border border-stroke-3 bg-gradient-to-br ${r.color} to-transparent bg-white p-6 dark:border-stroke-7 dark:bg-background-6`}>
                    <div className="flex items-start gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-base font-semibold text-secondary dark:bg-accent/10 dark:text-accent">{r.initials}</div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-secondary dark:text-accent">{r.name}</p>
                        <p className="text-xs leading-5 text-secondary/55 dark:text-accent/55">{r.role}<br />{r.size}</p>
                      </div>
                      <span className="shrink-0 rounded bg-[#FF492C] px-2 py-0.5 text-xs font-bold text-white">G2</span>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, si) => (
                        <svg key={si} className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm leading-6 text-secondary/70 dark:text-accent/70">{r.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 12. REQUEST DEMO ─────────────────────────────────────── */}
      <section id="request-demo" className="relative overflow-hidden py-20 md:py-24 xl:py-32" style={{ background: 'linear-gradient(135deg, #0c0828 0%, #1a0b42 50%, #0e1535 100%)' }}>
        {/* glow decorations */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #864ffe 0%, transparent 70%)' }} />
          <div className="absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }} />
        </div>

        <div className="main-container relative z-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-primary-400/30 bg-primary-500/10 px-4 py-2 text-sm text-primary-300">
                Get started
              </span>
              <h2 className="text-4xl leading-tight font-normal text-white lg:text-heading-3">
                See how TalepNET fits into your team&apos;s workflows
              </h2>
              <p className="text-base leading-7 text-white/65">
                A personalized demo built around your team&apos;s challenges, led by experts who understand what matters in procurement.
              </p>
              <div className="space-y-4 pt-2">
                {['No long-term commitment required', 'Setup in as little as 2 weeks', 'Dedicated onboarding specialist', 'Free data migration assistance'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-white/75">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-500/20">
                      <Check className="h-3 w-3 text-primary-300" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              {/* trust badges */}
              <div className="flex flex-wrap gap-4 pt-4">
                {[
                  { label: 'SOC 2 Type II' },
                  { label: 'GDPR Compliant' },
                  { label: '99.9% Uptime' },
                ].map((b) => (
                  <span key={b.label} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50">
                    {b.label}
                  </span>
                ))}
              </div>
            </div>
            <RequestDemoForm />
          </div>
        </div>
      </section>

    </main>
  );
};

export default ProductPage;
