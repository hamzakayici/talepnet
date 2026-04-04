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

const planCards: PlanCard[] = [
  {
    name: 'Free',
    subtitle: 'Start with 1 user',
    summary: 'A simple entry point for teams that want to explore TalepNET before expanding access.',
    ctaLabel: 'Get Started Free',
    ctaHref: 'https://app.talepnet.com/sign-up',
    featured: true,
  },
  {
    name: 'Team',
    subtitle: 'For growing teams',
    summary: 'Structured procurement workflows for teams that need control without heavy rollout complexity.',
    ctaLabel: 'Get Started',
    ctaHref: 'https://app.talepnet.com/sign-up',
  },
  {
    name: 'Business',
    subtitle: 'For broader operational scale',
    summary: 'More workflow depth, higher limits, and stronger reporting for organizations with wider purchasing activity.',
    ctaLabel: 'Get Started',
    ctaHref: 'https://app.talepnet.com/sign-up',
  },
  {
    name: 'Enterprise',
    subtitle: 'For advanced rollout needs',
    summary: 'Advanced security, integration, and support options for larger organizations and more complex procurement models.',
    ctaLabel: 'Get Started',
    ctaHref: 'https://app.talepnet.com/sign-up',
  },
];

const coreLimits: LimitRow[] = [
  { feature: 'Procurement contracts', team: '100', business: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Cost centers', team: '100', business: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'RFQ per month', team: '200', business: '1000', enterprise: 'Unlimited' },
  { feature: 'Purchase orders per month', team: '200', business: '1000', enterprise: 'Unlimited' },
  { feature: 'Storage', team: '100 GB', business: '500 GB', enterprise: 'Unlimited' },
];

const workflowAndOperations: CapabilityRow[] = [
  { feature: 'Workflow: Request', team: true, business: true, enterprise: true },
  { feature: 'Workflow: Approvals', team: true, business: true, enterprise: true },
  { feature: 'Workflow: Purchase', team: true, business: true, enterprise: true },
  { feature: 'Workflow: Warehouse', team: false, business: true, enterprise: true },
  { feature: 'Workflow: Receiving', team: true, business: true, enterprise: true },
  { feature: 'Workflow: Advanced rules', team: false, business: true, enterprise: true },
  { feature: 'Proxy approval', team: false, business: true, enterprise: true },
  { feature: 'Approval reminder / escalation', team: false, business: true, enterprise: true },
  { feature: 'Budget control', team: true, business: true, enterprise: true },
  { feature: 'Supplier onboarding', team: true, business: true, enterprise: true },
  { feature: 'Supplier performance', team: false, business: true, enterprise: true },
];

const reports: CapabilityRow[] = [
  { feature: 'Dashboard', team: 'Standard', business: 'Advanced', enterprise: 'Advanced' },
  { feature: 'Analytics', team: 'Standard', business: 'Operational + spend basics', enterprise: 'Advanced' },
  { feature: 'Scheduled reports', team: false, business: true, enterprise: true },
  { feature: 'Excel/CSV export', team: false, business: true, enterprise: true },
];

const securityAndSupport: CapabilityRow[] = [
  { feature: '2FA support', team: false, business: true, enterprise: true },
  { feature: 'Webhooks / API', team: false, business: false, enterprise: true },
  { feature: 'SSO / SAML', team: false, business: false, enterprise: true },
  { feature: 'IP allowlist + session management', team: false, business: false, enterprise: true },
  { feature: 'Support', team: 'Standard', business: 'Priority', enterprise: 'Dedicated' },
];

const columns: { key: PlanKey; label: string }[] = [
  { key: 'team', label: 'Team' },
  { key: 'business', label: 'Business' },
  { key: 'enterprise', label: 'Enterprise' },
];

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
}: {
  title: string;
  rows: LimitRow[] | CapabilityRow[];
}) => {
  return (
    <div className="mt-12">
      <h3 className="mb-6 text-2xl font-normal text-secondary dark:text-accent">{title}</h3>
      <div className="overflow-hidden rounded-[28px] border border-stroke-3 bg-white dark:border-stroke-7 dark:bg-background-6">
        <div className="grid grid-cols-[1.6fr_repeat(3,minmax(120px,1fr))] gap-4 border-b border-stroke-3 bg-background-3 px-7 py-5 text-left dark:border-stroke-7 dark:bg-background-5">
          <div className="text-lg font-medium text-secondary dark:text-accent">Feature</div>
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
  return (
    <section className="bg-background-1 pt-32 pb-20 dark:bg-background-6 sm:pt-36 md:pt-40 md:pb-24 xl:pt-[180px] xl:pb-28">
      <div className="main-container">
        <div className="mx-auto max-w-3xl text-center">
          <RevealAnimation delay={0.12}>
            <span className="badge badge-green !normal-case">Pricing</span>
          </RevealAnimation>
          <RevealAnimation delay={0.18}>
            <h1 className="mt-5 text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
              Plans built for teams growing procurement with more structure
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.24}>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-secondary/72 dark:text-accent/70 sm:text-lg">
              Start free with 1 user, then move into Team, Business, or Enterprise as purchasing volume,
              workflow depth, reporting, and control needs grow.
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
                <p className="mt-4 text-base leading-7 text-secondary/72 dark:text-accent/70">
                  {plan.summary}
                </p>
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
              <h2 className="text-3xl font-normal text-secondary dark:text-accent">Compare plans in detail</h2>
              <p className="mt-3 text-base leading-7 text-secondary/72 dark:text-accent/70">
                Review key limits and capabilities side by side.
              </p>
            </div>

            <ComparisonTable title="Core limits" rows={coreLimits} />
            <ComparisonTable title="Workflow and operations" rows={workflowAndOperations} />
            <ComparisonTable title="Reports" rows={reports} />
            <ComparisonTable title="Security and support" rows={securityAndSupport} />

            <div className="mt-12 rounded-[28px] border border-stroke-3 bg-background-3 p-7 dark:border-stroke-7 dark:bg-background-6">
              <h3 className="text-3xl font-normal text-secondary dark:text-accent">Need a custom quote?</h3>
              <p className="mt-4 max-w-3xl text-base leading-7 text-secondary/72 dark:text-accent/70">
                For tailored pricing, custom integrations, or specialized rollout needs, request a quote from our team.
              </p>
              <LinkButton
                href="/contact-us"
                className="btn btn-md btn-white mt-7 hover:btn-secondary dark:btn-transparent dark:hover:btn-accent"
              >
                Request a Quote
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
