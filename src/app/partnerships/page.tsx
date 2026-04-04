import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { generateMetadata } from '@/utils/generateMetaData';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Partnerships | TalepNET',
  'Explore partnership opportunities with TalepNET across referrals, implementation support, and ecosystem collaboration.',
  'https://www.talepnet.com/partnerships',
);

const partnershipAreas = [
  {
    title: 'Referral partnerships',
    text: 'For consultants, operators, and advisors who want to introduce TalepNET to teams with procurement workflow needs and create new revenue opportunities around qualified demand.',
  },
  {
    title: 'Implementation support',
    text: 'For partners who can expand their service offering through rollout, configuration, onboarding, and change management support.',
  },
  {
    title: 'Ecosystem collaboration',
    text: 'For organizations exploring complementary integration, co-sell, or channel opportunities around modern procurement operations.',
  },
];

const PartnershipsPage = () => {
  return (
    <main className="bg-white dark:bg-background-6">
      <section className="pt-32 pb-20 sm:pt-36 md:pt-40 md:pb-24 xl:pt-[180px] xl:pb-28">
        <div className="main-container">
          <div className="mx-auto max-w-3xl text-center">
            <RevealAnimation delay={0.12}>
              <span className="badge badge-green !normal-case">Partnerships</span>
            </RevealAnimation>
            <RevealAnimation delay={0.18}>
              <h1 className="mt-5 text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
                Partner with TalepNET to help teams modernize procurement
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.24}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-secondary/72 dark:text-accent/70 sm:text-lg">
                We are open to selective partnerships that can help customers adopt stronger procurement workflows while
                creating commercial value for the right partner model.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.28}>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-secondary/56 dark:text-accent/55 sm:text-base">
                Best fit for consultants, implementation partners, and procurement-focused ecosystem collaborations.
              </p>
            </RevealAnimation>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {partnershipAreas.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.28 + index * 0.05}>
                <article className="rounded-[28px] border border-stroke-3 bg-background-3 p-7 dark:border-stroke-7 dark:bg-background-5">
                  <h2 className="text-2xl font-normal text-secondary dark:text-accent">{item.title}</h2>
                  <p className="mt-4 text-base leading-7 text-secondary/72 dark:text-accent/70">{item.text}</p>
                </article>
              </RevealAnimation>
            ))}
          </div>

          <RevealAnimation delay={0.42}>
            <div className="mt-12 rounded-[30px] border border-stroke-3 bg-white p-8 dark:border-stroke-7 dark:bg-background-5 lg:p-10">
              <h2 className="text-3xl font-normal text-secondary dark:text-accent">Interested in partnering?</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-secondary/72 dark:text-accent/70">
                If you see a fit around referrals, implementation, or broader collaboration, reach out and we can
                discuss the right model.
              </p>
              <div className="mt-7">
                <LinkButton href="/contact-us" className="btn btn-primary btn-md">
                  Talk About Partnership
                </LinkButton>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </main>
  );
};

export default PartnershipsPage;
