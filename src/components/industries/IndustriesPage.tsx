'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { useI18n } from '@/i18n/I18nProvider';
import { localizeHref } from '@/i18n/pathnames';
import Link from 'next/link';

export default function IndustriesPage() {
  const { messages, locale } = useI18n();
  const industries = messages.industries.hub.items;

  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_26%),linear-gradient(180deg,#f7fbff_0%,#ffffff_55%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container relative z-10 pb-16 md:pb-20 xl:pb-24">
          <div className="max-w-3xl">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-6">{messages.industries.hub.badge}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="max-w-[12ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                {messages.industries.hub.title}
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mt-6 max-w-2xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                {messages.industries.hub.description}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton href={localizeHref('/contact-us', locale)} className="btn btn-primary btn-md">
                  {messages.industries.hub.primaryCta}
                </LinkButton>
                <LinkButton
                  href="#industry-list"
                  className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                  {messages.industries.hub.secondaryCta}
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section id="industry-list" className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
        <div className="main-container space-y-10">
          <div className="max-w-3xl space-y-4">
            <RevealAnimation delay={0.12}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                {messages.industries.hub.sectionEyebrow}
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                {messages.industries.hub.sectionTitle}
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.22 + index * 0.05}>
                <Link
                  href={localizeHref(item.href, locale)}
                  className="group rounded-[26px] border border-stroke-3 bg-white p-7 transition-colors hover:border-primary-200 hover:bg-primary-50/40 dark:border-stroke-7 dark:bg-background-6 dark:hover:border-primary-500/20 dark:hover:bg-background-5">
                  <h3 className="text-2xl font-normal text-secondary dark:text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-secondary/72 dark:text-accent/70">
                    {item.text}
                  </p>
                  <span className="mt-6 inline-block text-sm font-medium text-primary-600 dark:text-primary-300">
                    {messages.industries.hub.viewIndustry}
                  </span>
                </Link>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
