import RevealAnimation from '@/components/animation/RevealAnimation';
import LocationsSection from '@/components/shared/LocationsSection';
import LinkButton from '@/components/ui/button/LinkButton';
import { generateMetadata } from '@/utils/generateMetaData';
import { CheckCircle2, GitBranch, ShieldCheck, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Why TalepNET | About',
  'Learn why TalepNET exists, what we are building, and how we think about connected procurement workflows.',
  'https://www.talepnet.com/about',
);

const beliefs = [
  {
    title: 'It should reflect how organizations actually work',
    text: 'Real procurement does not move in a straight line. It involves departments, thresholds, suppliers, approvals, exceptions, and operational follow-through. Software should support that reality instead of forcing teams into disconnected workarounds.',
    icon: GitBranch,
  },
  {
    title: 'It should connect operations and control',
    text: 'Procurement teams need speed. Finance teams need visibility. Managers need accountability. A good system should support all three without pushing the burden back into manual coordination.',
    icon: ShieldCheck,
  },
  {
    title: 'It should stay usable for real teams',
    text: 'Procurement software should not feel like a process burden. It should help requesters, approvers, buyers, and finance teams work from the same logic with less confusion and less repetition.',
    icon: Sparkles,
  },
];

const focusAreas = [
  'Between request and approval',
  'Between approval and purchasing',
  'Between sourcing and order execution',
  'Between order placement and receiving',
  'Between procurement activity and finance visibility',
];

const audiences = [
  'Procurement teams that need better sourcing and supplier control',
  'Finance teams that need better spend and budget visibility',
  'Operations teams that need purchases to move without chaos',
  'Growing organizations that want structure before complexity becomes harder to manage',
];

const expectations = [
  {
    title: 'Clarity',
    text: 'We care about making the procurement process easier to understand for every stakeholder involved.',
  },
  {
    title: 'Practicality',
    text: 'We focus on workflow improvements that make a real difference in day-to-day procurement operations.',
  },
  {
    title: 'Continuity',
    text: 'We design TalepNET so that requests, approvals, suppliers, orders, receiving, and spend visibility stay connected instead of becoming isolated records.',
  },
];

const AboutPage = () => {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-background-6">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_26%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_30%),linear-gradient(180deg,#f7fffb_0%,#ffffff_56%,#f8fafc_100%)] pt-32 dark:bg-background-7 md:pt-40 xl:pt-48">
        <div className="main-container pb-16 md:pb-20 xl:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div className="max-w-2xl">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green mb-6 !normal-case">About TalepNET</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[14ch] text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                  Built to make procurement easier to control, easier to follow, and easier to trust
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mt-6 max-w-2xl text-base leading-7 text-secondary/72 dark:text-accent/70 sm:text-lg">
                  TalepNET is designed for teams that want more than disconnected requests, approvals, supplier emails, and spreadsheets. We are building a procurement system that connects demand, decisions, suppliers, execution, and spend visibility in one operational flow.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="/product-features"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent"
                  >
                    Explore the Product
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35} direction="right">
              <div className="rounded-[30px] border border-stroke-3 bg-background-3 p-8 dark:border-stroke-7 dark:bg-background-5 lg:p-10">
                <p className="text-tagline-1 text-primary-500">Why we started TalepNET</p>
                <p className="mt-5 text-base leading-8 text-secondary/72 dark:text-accent/70">
                  Procurement is still managed manually in too many organizations. Requests come in through scattered channels, approvals slow down in email chains, supplier communication gets fragmented, and visibility only appears after the process has already gone off track. TalepNET exists to help teams replace that fragmentation with a more connected and manageable procurement workflow.
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container">
          <RevealAnimation delay={0.12}>
            <div className="max-w-3xl">
              <span className="text-tagline-1 text-primary-500">What we believe procurement software should do</span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                Software should fit procurement reality, not create more workaround behavior
              </h2>
            </div>
          </RevealAnimation>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {beliefs.map((item, index) => {
              const Icon = item.icon;
              return (
                <RevealAnimation key={item.title} delay={0.16 + index * 0.05}>
                  <article className="rounded-[28px] border border-stroke-3 bg-white p-7 dark:border-stroke-7 dark:bg-background-6">
                    <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-500/15 dark:text-primary-300">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-5 text-2xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-secondary/72 dark:text-accent/70">{item.text}</p>
                  </article>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <RevealAnimation delay={0.12}>
            <div className="max-w-xl">
              <span className="text-tagline-1 text-primary-500">What we are building</span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                One procurement system across the stages where teams usually lose continuity
              </h2>
              <p className="mt-5 text-base leading-8 text-secondary/72 dark:text-accent/70">
                TalepNET is focused on connecting the core stages of modern procurement into one system. That includes request workflows, approvals, supplier management, sourcing, purchase forms, purchase orders, receiving, budget-aware structures, and spend visibility.
              </p>
            </div>
          </RevealAnimation>

          <div className="grid gap-4">
            {focusAreas.map((item, index) => (
              <RevealAnimation key={item} delay={0.18 + index * 0.05}>
                <div className="rounded-[22px] border border-stroke-3 bg-background-3 p-5 dark:border-stroke-7 dark:bg-background-5">
                  <p className="text-base leading-7 text-secondary/80 dark:text-accent/80">{item}</p>
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
              <span className="text-tagline-1 text-primary-500">Who we are building for</span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                Teams that have outgrown informal purchasing but still need flexibility
              </h2>
              <p className="mt-5 text-base leading-8 text-secondary/72 dark:text-accent/70">
                TalepNET is built for organizations that have outgrown informal purchasing habits but still need flexibility in how procurement operates across teams, departments, branches, and workflows.
              </p>
            </div>
          </RevealAnimation>

          <div className="grid gap-4">
            {audiences.map((item, index) => (
              <RevealAnimation key={item} delay={0.18 + index * 0.05}>
                <div className="flex items-start gap-3 rounded-[22px] border border-stroke-3 bg-white p-5 dark:border-stroke-7 dark:bg-background-6">
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary-500" />
                  <p className="text-base leading-7 text-secondary/80 dark:text-accent/80">{item}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-2">
          <RevealAnimation delay={0.12}>
            <div className="rounded-[28px] bg-background-3 p-8 dark:bg-background-5 lg:p-10">
              <span className="text-tagline-1 text-primary-500">How we think about product</span>
              <p className="mt-5 text-2xl font-normal leading-tight text-secondary dark:text-accent lg:text-4xl">
                Solve real workflow friction. Keep the system usable. Improve control without making teams slower.
              </p>
              <p className="mt-5 text-base leading-8 text-secondary/72 dark:text-accent/70">
                We are not trying to build another surface-level tool that only digitizes forms. We are building TalepNET as an operational procurement system, where each step in the process stays connected to the next.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.18}>
            <div className="rounded-[28px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-6 lg:p-10">
              <span className="text-tagline-1 text-primary-500">Where we are today</span>
              <p className="mt-5 text-base leading-8 text-secondary/72 dark:text-accent/70">
                TalepNET is evolving with a clear product direction: connect procurement workflows end to end and make them more visible, measurable, and operationally useful. We are still growing the product, but the foundation is already centered on real procurement structure rather than disconnected point solutions.
              </p>
              <p className="mt-4 text-base leading-8 text-secondary/72 dark:text-accent/70">
                We would rather be clear about what we are building than pretend to be a finished enterprise platform in every direction. Our focus is on solving meaningful workflow problems with a product that keeps getting stronger over time.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <LocationsSection
        title="Where TalepNET operates"
        description="TalepNET is building a more connected procurement system around practical workflows, clearer visibility, and stronger day-to-day control."
      />

      <section className="bg-background-12 py-20 dark:bg-background-5 md:py-24 xl:py-28">
        <div className="main-container">
          <RevealAnimation delay={0.12}>
            <div className="max-w-3xl">
              <span className="text-tagline-1 text-primary-500">What you can expect from us</span>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
                A product approach centered on clarity, practicality, and continuity
              </h2>
            </div>
          </RevealAnimation>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {expectations.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.16 + index * 0.05}>
                <article className="rounded-[26px] border border-stroke-3 bg-white p-7 dark:border-stroke-7 dark:bg-background-6">
                  <h3 className="text-2xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-secondary/72 dark:text-accent/70">{item.text}</p>
                </article>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-6 py-20 dark:bg-background-8 md:py-24 xl:py-32">
        <div className="main-container">
          <RevealAnimation delay={0.12}>
            <div className="overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#0f172a_0%,#153b4a_55%,#0b1020_100%)] p-8 text-white md:p-12 xl:p-14">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-3xl">
                  <span className="text-tagline-1 inline-block text-white/65">
                    We are building TalepNET for teams that want procurement to actually work better
                  </span>
                  <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                    If your organization is trying to move beyond fragmented requests, scattered approvals, and disconnected purchasing records, TalepNET is built for that next step.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                    Request a Demo
                  </LinkButton>
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent"
                  >
                    Contact Us
                  </LinkButton>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
