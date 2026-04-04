import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import Link from 'next/link';

const solutions = [
  {
    title: 'Procure-to-Pay',
    href: '/solutions/procure-to-pay',
    text: 'Connect request, sourcing, ordering, receiving, and finance control in one spend workflow.',
  },
  {
    title: 'Request-to-Receipt',
    href: '/solutions/request-to-receipt',
    text: 'Move from structured request intake to verified receipt without losing visibility in between.',
  },
  {
    title: 'Source-to-Order',
    href: '/solutions/source-to-order',
    text: 'Run sourcing, supplier selection, and order execution through one connected path.',
  },
  {
    title: 'Approval Workflow',
    href: '/solutions/approval-workflow',
    text: 'Route decisions with better context, policy control, and end-to-end traceability.',
  },
  {
    title: 'Spend Management',
    href: '/solutions/spend-management',
    text: 'Turn procurement activity into budget, supplier, and category visibility you can act on.',
  },
  {
    title: 'Budget Control',
    href: '/solutions/budget-control',
    text: 'Bring cost centers, fiscal years, and approval logic closer to purchasing decisions.',
  },
  {
    title: 'Accounts Payable',
    href: '/solutions/accounts-payable',
    text: 'Build AP automation on top of cleaner purchasing records, receiving data, and supplier context.',
  },
];

export default function SolutionsPage() {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_26%),linear-gradient(180deg,#f7fbff_0%,#ffffff_55%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container relative z-10 pb-16 md:pb-20 xl:pb-24">
          <div className="max-w-3xl">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-6">Solutions</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="max-w-[12ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                Procurement and finance solutions built on the same operational backbone
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mt-6 max-w-2xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                Talepnet groups purchasing control, supplier visibility, budget discipline, and
                AP readiness into connected solution areas that share the same workflow model.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                  Request a Demo
                </LinkButton>
                <LinkButton
                  href="#solution-list"
                  className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                  Explore Solutions
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section id="solution-list" className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-32">
        <div className="main-container space-y-10">
          <div className="max-w-3xl space-y-4">
            <RevealAnimation delay={0.12}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                Solution library
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-4xl font-normal leading-tight text-secondary dark:text-accent lg:text-heading-3">
                A cleaner structure for solution-focused pages
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.22 + index * 0.05}>
                <Link
                  href={item.href}
                  className="group rounded-[26px] border border-stroke-3 bg-white p-7 transition-colors hover:border-primary-200 hover:bg-primary-50/40 dark:border-stroke-7 dark:bg-background-6 dark:hover:border-primary-500/20 dark:hover:bg-background-5">
                  <h3 className="text-2xl font-normal text-secondary dark:text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-secondary/72 dark:text-accent/70">
                    {item.text}
                  </p>
                  <span className="mt-6 inline-block text-sm font-medium text-primary-600 dark:text-primary-300">
                    View Solution
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
