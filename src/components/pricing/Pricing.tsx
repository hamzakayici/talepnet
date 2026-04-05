'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { localizeHref } from '@/i18n/pathnames';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

type PlanKey = 'team' | 'business' | 'enterprise';

type PlanCard = {
  name: string;
  subtitle: string;
  summary: string;
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
};

type LimitRow = {
  feature: string;
  team: string;
  business: string;
  enterprise: string;
};

type MixedValue = string | boolean;

type CapabilityRow = {
  feature: string;
  team: MixedValue;
  business: MixedValue;
  enterprise: MixedValue;
};

const renderValue = (value: MixedValue) => {
  if (typeof value === 'boolean') {
    return value ? (
      <span className="inline-flex size-7 items-center justify-center rounded-full bg-[#16a34a] text-white">✓</span>
    ) : (
      <span className="text-secondary/35 dark:text-accent/35">-</span>
    );
  }

  return <span className="text-secondary/80 dark:text-accent/80">{value}</span>;
};

const ComparisonTable = ({
  title,
  rows,
  featureColumn,
  columns,
}: {
  title: string;
  rows: LimitRow[] | CapabilityRow[];
  featureColumn: string;
  columns: { key: PlanKey; label: string }[];
}) => {
  return (
    <div className="mt-12">
      <h3 className="mb-6 text-2xl font-normal text-secondary dark:text-accent">{title}</h3>
      <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
        <div className="grid grid-cols-[1.6fr_repeat(3,minmax(120px,1fr))] gap-4 border-b border-stroke-3 bg-background-3 px-7 py-5 text-left dark:border-stroke-7 dark:bg-background-5">
          <div className="text-lg font-medium text-secondary dark:text-accent">{featureColumn}</div>
          {columns.map((column) => (
            <div key={column.key} className="text-lg font-medium text-secondary dark:text-accent">
              {column.label}
            </div>
          ))}
        </div>
        {rows.map((row) => (
          <div
            key={row.feature}
            className="grid grid-cols-[1.6fr_repeat(3,minmax(120px,1fr))] gap-4 border-b border-stroke-3 px-7 py-5 last:border-b-0 dark:border-stroke-7"
          >
            <div className="text-lg font-medium text-secondary/85 dark:text-accent/85">{row.feature}</div>
            <div className="text-lg">{renderValue(row.team)}</div>
            <div className="text-lg">{renderValue(row.business)}</div>
            <div className="text-lg">{renderValue(row.enterprise)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Pricing = () => {
  const { locale, messages } = useI18n();
  const pricing = messages.pricing;
  const planCards = pricing.plans as PlanCard[];
  const coreLimits = pricing.coreLimits as LimitRow[];
  const workflowAndOperations = pricing.workflowAndOperations as CapabilityRow[];
  const reports = pricing.reports as CapabilityRow[];
  const securityAndSupport = pricing.securityAndSupport as CapabilityRow[];
  const columns: { key: PlanKey; label: string }[] = [
    { key: 'team', label: pricing.comparison.columns.team },
    { key: 'business', label: pricing.comparison.columns.business },
    { key: 'enterprise', label: pricing.comparison.columns.enterprise },
  ];

  return (
    <section className="bg-background-1 pt-32 pb-20 dark:bg-background-6 sm:pt-36 md:pt-40 md:pb-24 xl:pt-[180px] xl:pb-28">
      <div className="main-container">
        <div className="mx-auto max-w-3xl text-center">
          <RevealAnimation delay={0.12}>
            <span className="badge badge-green !normal-case">{pricing.badge}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.18}>
            <h1 className="mt-5 text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
              {pricing.title}
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.24}>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-secondary/72 dark:text-accent/70 sm:text-lg">
              {pricing.description}
            </p>
          </RevealAnimation>
        </div>

        <div className="mt-14 grid gap-5 xl:grid-cols-4">
          {planCards.map((plan, index) => (
            <RevealAnimation key={plan.name} delay={0.28 + index * 0.05}>
              <article
                className={`flex h-full flex-col rounded-[28px] border p-7 ${
                  plan.featured
                    ? 'border-primary-300 bg-[linear-gradient(180deg,#f7ffeb_0%,#ffffff_100%)] dark:border-primary-500/30 dark:bg-[linear-gradient(180deg,rgba(166,255,0,0.08)_0%,rgba(17,24,39,0.96)_100%)]'
                    : 'border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-5'
                }`}
              >
                <p className="text-tagline-1 text-primary-600 dark:text-primary-300">{plan.subtitle}</p>
                <h2 className="mt-4 text-3xl font-normal text-secondary dark:text-accent">{plan.name}</h2>
                <p className="mt-4 text-base leading-7 text-secondary/72 dark:text-accent/70">{plan.summary}</p>
                <div className="mt-10" />
                <LinkButton
                  href={plan.ctaHref}
                  className={`btn btn-md mt-auto w-full ${
                    plan.name === 'Free' || plan.featured
                      ? 'btn-primary hover:btn-secondary dark:hover:btn-accent'
                      : 'btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent'
                  }`}
                >
                  {plan.ctaLabel}
                </LinkButton>
              </article>
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation delay={0.34}>
          <section className="mt-16 rounded-[32px] border border-stroke-3 bg-white p-6 dark:border-stroke-7 dark:bg-background-5 md:p-8 xl:p-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-normal text-secondary dark:text-accent">{pricing.comparison.title}</h2>
              <p className="mt-3 text-base leading-7 text-secondary/72 dark:text-accent/70">
                {pricing.comparison.description}
              </p>
            </div>

            <ComparisonTable
              title={pricing.comparison.sections.coreLimits}
              rows={coreLimits}
              featureColumn={pricing.comparison.featureColumn}
              columns={columns}
            />
            <ComparisonTable
              title={pricing.comparison.sections.workflowAndOperations}
              rows={workflowAndOperations}
              featureColumn={pricing.comparison.featureColumn}
              columns={columns}
            />
            <ComparisonTable
              title={pricing.comparison.sections.reports}
              rows={reports}
              featureColumn={pricing.comparison.featureColumn}
              columns={columns}
            />
            <ComparisonTable
              title={pricing.comparison.sections.securityAndSupport}
              rows={securityAndSupport}
              featureColumn={pricing.comparison.featureColumn}
              columns={columns}
            />

            <div className="mt-12 rounded-[28px] border border-stroke-3 bg-background-3 p-7 dark:border-stroke-7 dark:bg-background-6">
              <h3 className="text-3xl font-normal text-secondary dark:text-accent">
                {pricing.comparison.customQuote.title}
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-7 text-secondary/72 dark:text-accent/70">
                {pricing.comparison.customQuote.description}
              </p>
              <LinkButton
                href={localizeHref('/contact-us', locale)}
                className="btn btn-md btn-white mt-7 hover:btn-secondary dark:btn-transparent dark:hover:btn-accent"
              >
                {pricing.comparison.customQuote.cta}
              </LinkButton>
            </div>
          </section>
        </RevealAnimation>
      </div>
    </section>
  );
};

Pricing.displayName = 'Pricing';
export default Pricing;
