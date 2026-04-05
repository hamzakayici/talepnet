'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { localizeHref } from '@/i18n/pathnames';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LinkButton from '@/components/ui/button/LinkButton';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import {
  CheckCircle2,
  ClipboardList,
  CreditCard,
  FileCheck2,
  FileSearch,
  GitBranch,
  Mail,
  PackageCheck,
  Receipt,
  ShoppingCart,
  ShieldCheck,
  Users,
  Wallet,
} from 'lucide-react';

function ImagePlaceholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`flex min-h-[220px] items-center justify-center bg-[linear-gradient(135deg,#f2f5fb_0%,#fbfcfe_100%)] dark:bg-[linear-gradient(135deg,#171d2a_0%,#0f141c_100%)] ${className}`}
    >
      <div className="rounded-full border border-dashed border-secondary/20 px-4 py-2 text-sm tracking-[0.14em] uppercase text-secondary/45 dark:border-accent/15 dark:text-accent/40">
        {label}
      </div>
    </div>
  );
}

const pillars = [
  {
    title: 'Demand enters with structure',
    text: 'Requests, approvals, and cost center context start the process before spending turns into downstream cleanup. Teams do not need to rely on informal channels or partial information to begin procurement activity.',
    icon: ClipboardList,
  },
  {
    title: 'Purchasing stays traceable',
    text: 'Sourcing, supplier decisions, quotations, purchase orders, and receiving all stay connected to the same procurement chain. This creates a stronger operational record and reduces the number of blind spots between departments.',
    icon: GitBranch,
  },
  {
    title: 'Finance gets cleaner inputs',
    text: 'Budgets, supplier visibility, execution records, and spend tracking create stronger conditions for reconciliation, review, and payment control. Finance works from a more complete process history rather than an isolated payable event.',
    icon: CreditCard,
  },
];

const features = [
  {
    title: 'Purchase Requests',
    description:
      'Standardize demand capture so procurement begins from structured, reviewable requests rather than fragmented emails or spreadsheets.',
    icon: ClipboardList,
  },
  {
    title: 'Approval Workflow',
    description:
      'Route requests and purchases through configurable approval paths shaped by roles, departments, thresholds, and organizational logic.',
    icon: ShieldCheck,
  },
  {
    title: 'Cost Center and Budget Context',
    description:
      'Tie financial ownership to requests and purchases early so spend can be understood in relation to cost centers, budgets, and fiscal periods.',
    icon: Wallet,
  },
  {
    title: 'Purchase Forms and Sourcing',
    description:
      'Convert approved demand into purchase forms where buyers can manage quotations, compare suppliers, and make sourcing decisions with stronger context.',
    icon: FileSearch,
  },
  {
    title: 'Supplier Management',
    description:
      'Keep suppliers, contacts, contracts, quotation activity, and commercial history connected to the same procurement system.',
    icon: Users,
  },
  {
    title: 'RFQ and Quote Collaboration',
    description:
      'Send RFQs, collect supplier responses, monitor portal activity, and manage quotations inside a more traceable sourcing workflow.',
    icon: Mail,
  },
  {
    title: 'Contracted Supplier Visibility',
    description:
      'Surface negotiated supplier relationships during sourcing so contract-backed purchasing decisions are easier to apply in practice.',
    icon: ShieldCheck,
  },
  {
    title: 'Purchase Approvals',
    description:
      'Add an additional governance layer before order placement where the process design requires more financial or managerial control.',
    icon: FileCheck2,
  },
  {
    title: 'Purchase Orders',
    description:
      'Move from sourcing and approval into supplier-facing order workflows that keep execution tied to the procurement chain.',
    icon: ShoppingCart,
  },
  {
    title: 'Receiving',
    description:
      'Record what was actually delivered so procurement and finance can work from operational proof rather than assumptions about fulfillment.',
    icon: PackageCheck,
  },
  {
    title: 'Spend Visibility',
    description:
      'Use dashboards and spend insights to understand supplier concentration, category movement, budget pressure, and contract utilization while the process is still active.',
    icon: Receipt,
  },
  {
    title: 'AP-Ready Procurement Traceability',
    description:
      'Strengthen downstream payable control by ensuring that requests, approvals, supplier decisions, orders, and receipt records remain connected and reviewable.',
    icon: CreditCard,
  },
];

export default function ProcureToPayPage() {
  const { locale, messages } = useI18n();
  const page = messages.solutions.procureToPay;

  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0f172a_0%,#11283c_42%,#183b52_100%)] pt-32 text-white dark:bg-[linear-gradient(135deg,#09111c_0%,#102135_46%,#163a4d_100%)] md:pt-40 xl:pt-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.16),transparent_24%)]" />
        <div className="main-container relative z-10 pb-18 md:pb-22 xl:pb-24">
          <div className="grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
            <div className="flex max-w-2xl flex-col items-start justify-center">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6">{page.badge}</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[11ch] text-4xl font-normal leading-tight text-white sm:text-5xl xl:text-6xl">
                  {page.title}
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-7 text-white/74 sm:text-lg">
                  {page.description}
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href={localizeHref('/contact-us', locale)} className="btn btn-primary btn-md">
                    {page.primaryCta}
                  </LinkButton>
                  <LinkButton
                    href="#ptp-flow"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent"
                  >
                    {page.secondaryCta}
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <div className="h-full relative">
              <style>{`
                @keyframes ptp-marquee-up {
                  from { transform: translateY(0); }
                  to { transform: translateY(-50%); }
                }
                @keyframes ptp-marquee-down {
                  from { transform: translateY(-50%); }
                  to { transform: translateY(0); }
                }
                .ptp-animate-marquee-up {
                  animation: ptp-marquee-up 35s linear infinite;
                }
                .ptp-animate-marquee-down {
                  animation: ptp-marquee-down 40s linear infinite;
                }
              `}</style>
              
              <RevealAnimation className="w-full lg:h-full" delay={0.35} direction="right">
                <div className="relative h-[340px] w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] sm:h-[400px] md:h-[450px] lg:absolute lg:inset-y-0 lg:-right-6 lg:h-full lg:w-[calc(100%+1.5rem)]">
                  <div className="grid h-full grid-cols-2 gap-4 lg:grid-cols-3">
                  
                  {/* Sütun 1 - Yukarı */}
                  <div className="flex ptp-animate-marquee-up flex-col pt-12">
                    {[page.features.slice(0, 4), page.features.slice(0, 4)].map((group: any[], gIdx: number) => (
                      <div key={`col1-${gIdx}`} className="flex flex-col gap-4 pb-4">
                        {group.map((item: any, i: number) => (
                          <div key={i} className="rounded-[22px] border border-white/10 bg-white/5 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md">
                            <h4 className="text-sm font-medium text-white xl:text-base">{item.title}</h4>
                            <p className="mt-2 text-xs leading-relaxed text-white/50 2xl:text-sm">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Sütun 2 - Aşağı */}
                  <div className="flex ptp-animate-marquee-down flex-col">
                    {[page.features.slice(4, 8), page.features.slice(4, 8)].map((group: any[], gIdx: number) => (
                      <div key={`col2-${gIdx}`} className="flex flex-col gap-4 pb-4">
                        {group.map((item: any, i: number) => (
                          <div key={i} className="rounded-[22px] border border-white/10 bg-white/5 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md">
                            <h4 className="text-sm font-medium text-white xl:text-base">{item.title}</h4>
                            <p className="mt-2 text-xs leading-relaxed text-white/50 2xl:text-sm">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Sütun 3 - Yukarı (büyük ekranlar) */}
                  <div className="hidden ptp-animate-marquee-up flex-col pt-24 lg:flex">
                    {[page.features.slice(8, 12), page.features.slice(8, 12)].map((group: any[], gIdx: number) => (
                      <div key={`col3-${gIdx}`} className="flex flex-col gap-4 pb-4">
                        {group.map((item: any, i: number) => (
                          <div key={i} className="rounded-[22px] border border-white/10 bg-white/5 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md">
                            <h4 className="text-sm font-medium text-white xl:text-base">{item.title}</h4>
                            <p className="mt-2 text-xs leading-relaxed text-white/50 2xl:text-sm">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-18 dark:bg-background-6 md:py-22 xl:py-24">
        <div className="main-container grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.12}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                {page.introEyebrow}
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                {page.introTitle}
              </h2>
            </RevealAnimation>
          </div>

          <div className="relative">
            <style>{`
              @keyframes ptp-shooting-star {
                0% { top: -8rem; opacity: 1; }
                40% { top: 100%; opacity: 0; }
                100% { top: 100%; opacity: 0; }
              }
            `}</style>
            
            <RevealAnimation className="relative" delay={0.24}>
              <div className="relative pl-6 md:pl-8">
                {/* Animasyonlu Çizgi Yolu */}
                <div className="absolute bottom-0 left-0 top-0 w-[2px] overflow-hidden rounded-full bg-stroke-3 dark:bg-stroke-7">
                  {/* Kayan Yıldız Efekti */}
                  <div className="absolute -top-32 left-0 h-32 w-full animate-[ptp-shooting-star_3s_ease-out_infinite] bg-gradient-to-t from-purple-600 to-transparent opacity-0 dark:from-purple-400" />
                </div>

                {/* Paragraflar */}
                <div className="space-y-5">
                  {page.introParagraphs.map((paragraph: string) => (
                    <p key={paragraph} className="text-base leading-7 text-secondary/72 dark:text-accent/70">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[28px] bg-white p-8 dark:bg-background-6 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                {page.coreEyebrow}
              </span>
              <p className="mt-5 text-base leading-8 text-secondary/72 dark:text-accent/70">
                {page.coreText}
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18} className="h-full">
            <div className="relative flex h-full min-h-[380px] w-full flex-col items-center justify-center p-6 lg:min-h-[460px] lg:p-10">
              
              <style>{`
                @keyframes ptp-float-1 {
                  0%, 100% { transform: translateY(0px) rotate(-2deg); }
                  50% { transform: translateY(-12px) rotate(-1deg); }
                }
                @keyframes ptp-float-2 {
                  0%, 100% { transform: translateY(0px) rotate(3deg); }
                  50% { transform: translateY(-15px) rotate(2deg); }
                }
                @keyframes ptp-float-3 {
                  0%, 100% { transform: translateY(0px) rotate(-1deg); }
                  50% { transform: translateY(-8px) rotate(0deg); }
                }
              `}</style>
              
              {/* Arkada dönen yumuşak neon yansıma */}
              <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-[spin_12s_linear_infinite] rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-green-500/10 opacity-70 blur-3xl dark:from-blue-500/20 dark:to-green-500/20" />

              <div className="relative flex w-full max-w-sm flex-col pl-4 md:max-w-md md:pl-0">
                 
                 {/* Kart 1: Talep */}
                 <div className="z-10 flex w-[85%] animate-[ptp-float-1_7s_ease-in-out_infinite] items-center gap-4 self-start rounded-[22px] border border-white/60 bg-white/70 p-5 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-black/50">
                   <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                     <ClipboardList className="h-6 w-6" />
                   </div>
                   <div className="flex-1">
                     <div className="text-[15px] font-semibold text-secondary dark:text-white">{locale === 'tr' ? 'Satın Alma Talebi #4021' : 'Purchase Request #4021'}</div>
                     <div className="mt-1 text-xs font-medium text-secondary/60 dark:text-white/60">{locale === 'tr' ? 'Maliyet merkezi onaylandı' : 'Cost center approved'}</div>
                   </div>
                   <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-50 text-green-600 dark:bg-green-500/20 dark:text-green-400">
                     <CheckCircle2 className="h-4 w-4" />
                   </div>
                 </div>
                 
                 {/* Kart 2: Sipariş */}
                 <div className="z-20 mt-2 flex w-[88%] animate-[ptp-float-2_6s_ease-in-out_infinite_1s] items-center gap-4 self-end rounded-[22px] border border-white/80 bg-white/80 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.12)] backdrop-blur-md dark:border-white/10 dark:bg-background-6/80">
                   <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
                     <ShoppingCart className="h-6 w-6" />
                   </div>
                   <div className="flex-1">
                     <div className="text-[15px] font-semibold text-secondary dark:text-white">{locale === 'tr' ? 'Otomatik Sipariş İletildi' : 'Auto-PO Dispatched'}</div>
                     <div className="mt-1 text-xs font-medium text-secondary/60 dark:text-white/60">{locale === 'tr' ? 'Tedarikçi: TechFlow A.Ş.' : 'Supplier: TechFlow Inc.'}</div>
                   </div>
                   <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-50 text-green-600 dark:bg-green-500/20 dark:text-green-400">
                     <CheckCircle2 className="h-4 w-4" />
                   </div>
                 </div>

                 {/* Kart 3: Fatura */}
                 <div className="z-30 mt-4 flex w-[95%] animate-[ptp-float-3_8s_ease-in-out_infinite_2s] items-center gap-4 self-center rounded-[22px] border border-primary-500/30 bg-white p-6 shadow-[0_20px_50px_rgba(59,130,246,0.18)] ring-1 ring-primary-500/20 backdrop-blur-md dark:border-primary-500/50 dark:bg-[#0c141f]">
                   <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-lg shadow-primary-500/30">
                     <Receipt className="h-6 w-6" />
                   </div>
                   <div className="flex-1">
                     <div className="text-[15px] font-semibold text-secondary dark:text-white">{locale === 'tr' ? 'Fatura & Seçilen GRN Eşleşti' : 'Invoice & Selected GRN Matched'}</div>
                     <div className="mt-1 text-xs font-medium text-primary-600 dark:text-primary-400">{locale === 'tr' ? 'Ödemeye Hazır - Çakışma Yok' : 'Ready for Payment - No Mismatch'}</div>
                   </div>
                 </div>

              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container space-y-12">
          <div className="max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                {page.pillarsEyebrow}
              </span>
            </RevealAnimation>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            {page.pillars.map((item: { title: string; text: string }, index: number) => {
              const Icon = pillars[index]?.icon ?? ClipboardList;
              return (
                <RevealAnimation key={item.title} delay={0.18 + index * 0.06}>
                  <article className="space-y-5">
                    <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-500/15 dark:text-primary-300">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-2xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                      <p className="mt-3 text-base leading-7 text-secondary/72 dark:text-accent/70">
                        {item.text}
                      </p>
                    </div>
                  </article>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="max-w-xl">
              <span className="text-tagline-1 text-primary-500">{page.summaryEyebrow}</span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                {page.summaryTitle}
              </h2>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.18}>
            <div className="space-y-5 rounded-[30px] bg-white p-8 dark:bg-background-6 lg:p-10">
              {page.summaryParagraphs.map((paragraph: string) => (
                <p key={paragraph} className="text-base leading-8 text-secondary/72 dark:text-accent/70">
                  {paragraph}
                </p>
              ))}
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section id="ptp-flow" className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
        <div className="main-container">
          <div className="mb-12 max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="text-tagline-1 inline-block text-white/62">{page.flowEyebrow}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-white lg:text-heading-3">
                {page.flowTitle}
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {page.steps.map((item: { title: string; text: string }, index: number) => (
              <RevealAnimation key={item.title} delay={0.24 + index * 0.08}>
                <SpotlightCard className="h-full rounded-[24px] border border-white/10 bg-white/5 p-7">
                  <span className="mb-5 inline-flex h-8 items-center rounded-full border border-white/10 px-3 text-sm text-white/70">
                    {locale === 'tr' ? 'Adım' : 'Step'} {index + 1}
                  </span>
                  <h3 className="mb-3 text-2xl font-normal text-white">{item.title}</h3>
                  <p className="text-base leading-7 text-white/70">{item.text}</p>
                </SpotlightCard>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container space-y-12">
          <div className="max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                {page.featuresEyebrow}
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                {page.featuresTitle}
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {page.features.map((feature: { title: string; description: string }, index: number) => {
              const Icon = features[index]?.icon ?? ClipboardList;
              return (
                <RevealAnimation key={feature.title} delay={0.2 + index * 0.03}>
                  <article className="rounded-[26px] border border-stroke-3 bg-background-3 p-7 dark:border-stroke-7 dark:bg-background-5">
                    <span className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl bg-primary-100 text-primary-600 dark:bg-primary-500/15 dark:text-primary-300">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mb-3 text-2xl font-normal text-secondary dark:text-accent">{feature.title}</h3>
                    <p className="text-base leading-7 text-secondary/72 dark:text-accent/70">{feature.description}</p>
                  </article>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[28px] bg-white p-8 dark:bg-background-6 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                {page.areasEyebrow}
              </span>
              <ul className="mt-6 grid gap-4 md:grid-cols-2">
                {page.areas.map((item: string) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary-500" />
                    <span className="text-base leading-7 text-secondary/72 dark:text-accent/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-6 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                {page.mattersEyebrow}
              </span>
              {page.mattersParagraphs.map((paragraph: string) => (
                <p key={paragraph} className="mt-4 text-base leading-8 text-secondary/72 dark:text-accent/70">
                  {paragraph}
                </p>
              ))}
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-2">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[28px] bg-background-3 p-8 dark:bg-background-5 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                {page.procurementEyebrow}
              </span>
              <h2 className="mt-5 text-3xl font-normal leading-tight text-secondary dark:text-accent">
                {page.procurementTitle}
              </h2>
              <p className="mt-5 text-base leading-8 text-secondary/72 dark:text-accent/70">
                {page.procurementText}
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-6 lg:p-10">
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                {page.financeEyebrow}
              </span>
              <h2 className="mt-5 text-3xl font-normal leading-tight text-secondary dark:text-accent">
                {page.financeTitle}
              </h2>
              <p className="mt-5 text-base leading-8 text-secondary/72 dark:text-accent/70">
                {page.financeText}
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="max-w-xl">
              <span className="text-tagline-1 text-primary-500">{page.apFoundationEyebrow}</span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                {page.apFoundationTitle}
              </h2>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.18}>
            <div className="space-y-5 rounded-[30px] bg-white p-8 dark:bg-background-6 lg:p-10">
              {page.apFoundationParagraphs.map((paragraph: string) => (
                <p key={paragraph} className="text-base leading-8 text-secondary/72 dark:text-accent/70">
                  {paragraph}
                </p>
              ))}
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container">
          <div className="max-w-3xl space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                {page.outcomesEyebrow}
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                {page.outcomesTitle}
              </h2>
            </RevealAnimation>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {page.outcomes.map((item: { title: string; text: string }, index: number) => (
              <RevealAnimation key={item.title} delay={0.22 + index * 0.05}>
                <div className="rounded-[22px] bg-background-3 p-6 dark:bg-background-5">
                  <h3 className="text-xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-secondary/72 dark:text-accent/70">{item.text}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="max-w-xl">
              <span className="text-tagline-1 text-primary-500">{page.seoEyebrow}</span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                {page.seoTitle}
              </h2>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.18}>
            <div className="rounded-[30px] bg-white p-8 dark:bg-background-6 lg:p-10">
              <p className="text-base leading-8 text-secondary/72 dark:text-accent/70">
                {page.seoText}
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">{page.faqEyebrow}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                {page.faqTitle}
              </h2>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.24}>
            <Accordion className="space-y-4" defaultValue="procure-to-pay-faq-1" animationDelay={0.08}>
              {page.faqs.map((faq: { question: string; answer: string }, index: number) => (
                <AccordionItem
                  key={faq.question}
                  value={`procure-to-pay-faq-${index + 1}`}
                  className="rounded-[22px] border border-stroke-3 bg-background-3 px-6 dark:border-stroke-7 dark:bg-background-5"
                >
                  <AccordionTrigger
                    value={`procure-to-pay-faq-${index + 1}`}
                    className="flex w-full cursor-pointer items-center justify-between py-6"
                    titleClassName="flex-1 text-left text-lg font-normal text-secondary dark:text-accent"
                    iconType="arrow"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    value={`procure-to-pay-faq-${index + 1}`}
                    className="text-base leading-7 text-secondary/72 dark:text-accent/70"
                  >
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
                    {page.finalEyebrow}
                  </span>
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                    {page.finalTitle}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <LinkButton href={localizeHref('/contact-us', locale)} className="btn btn-primary btn-md">
                    {page.primaryCta}
                  </LinkButton>
                  <LinkButton
                    href={localizeHref('/contact-us', locale)}
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent"
                  >
                    {page.finalSecondaryCta}
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
