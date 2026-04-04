import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const resources = [
  {
    title: 'FAQ',
    text: 'Find answers about product scope, pricing, security, and supplier portal workflows.',
    href: '/faq',
    cta: 'Go to FAQ',
  },
  {
    title: 'Tutorials',
    text: 'Explore guided tutorials for key workflows and day-to-day usage.',
    href: '/tutorial',
    cta: 'Open Tutorials',
  },
  {
    title: 'Blog',
    text: 'Read product updates, procurement insights, and practical best practices.',
    href: '/blog',
    cta: 'Read the Blog',
  },
  {
    title: 'Contact Us',
    text: 'Reach the team directly when you need help, guidance, or a follow-up conversation.',
    href: '/contact-us',
    cta: 'Open Contact',
  },
];

const Services = () => {
  return (
    <section className="py-12 md:py-16 xl:py-20">
      <div className="main-container">
        <div className="mb-14 max-w-3xl">
          <RevealAnimation delay={0.12}>
            <span className="text-tagline-1 text-primary-500">Resources</span>
          </RevealAnimation>
          <RevealAnimation delay={0.18}>
            <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
              Start from the resource that fits what you need
            </h2>
          </RevealAnimation>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {resources.map((item, index) => (
            <RevealAnimation key={item.title} delay={0.22 + index * 0.05}>
              <article className="flex h-full flex-col rounded-[28px] border border-stroke-3 bg-white p-7 dark:border-stroke-7 dark:bg-background-6">
                <h3 className="text-2xl font-normal text-secondary dark:text-accent">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-secondary/72 dark:text-accent/70">{item.text}</p>
                <div className="mt-7">
                  <LinkButton
                    href={item.href}
                    className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent"
                  >
                    {item.cta}
                  </LinkButton>
                </div>
              </article>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
