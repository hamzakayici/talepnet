import RevealAnimation from '../animation/RevealAnimation';
import Link from 'next/link';

const sections = [
  {
    title: '1. Overview',
    body: 'Cookies are small text files placed on your device when you visit a website. We use cookies and similar technologies to make our Services work, remember your preferences, analyze performance, and personalize your experience where permitted.',
  },
  {
    title: '2. Types of Cookies We Use',
    list: [
      'Strictly Necessary: Required for core functionality such as page navigation, secure login, load balancing, and fraud prevention. These cannot be disabled.',
      'Functional (Preferences): Remember your settings (e.g., language, region) and improve usability.',
      'Analytics & Performance: Help us understand usage, debug issues, and improve services.',
      'Marketing: Used to deliver and measure ads or social media content. We use these only where legally permitted.',
    ],
  },
  {
    title: '3. Cookies We Set',
    list: [
      'Session cookies (essential): Maintain your session and login state during navigation.',
      'Preference cookies: Save language, region, and cookie consent settings.',
      'Analytics cookies: Collect anonymized usage data to improve site performance and usability.',
    ],
  },
  {
    title: '4. Third-Party Cookies',
    body: 'We may allow trusted third parties to set cookies to provide analytics, embedded media, or social integrations. Examples include:',
    list: [
      'Analytics: Google Analytics (audience measurement, performance tracking).',
      'Social & Video: LinkedIn, YouTube (embeds, sharing, engagement metrics).',
      'These cookies are managed under the providers’ own privacy and cookie policies. You can manage them via browser settings or the providers’ control pages.',
    ],
  },
  {
    title: '5. Managing Cookies',
    body: 'Most browsers allow you to control cookies, block, delete, or limit them. Note that disabling certain cookies may affect core functionality. Refer to your browser’s help pages for instructions.',
  },
  {
    title: '6. Do Not Track',
    body: 'Our Services currently do not respond to Do Not Track signals. You can manage cookies through your browser and privacy settings.',
  },
  {
    title: '7. Updates to This Policy',
    body: 'We may revise this Cookie Policy from time to time. Material updates will be communicated via the Services or by email. Continued use after changes take effect indicates acceptance of the revised Policy.',
  },
];

const GdprContent = () => {
  return (
    <section className="pt-32 pb-[200px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          <RevealAnimation delay={0.3}>
            <div className="space-y-3">
              <h2>Cookie Policy</h2>
              <p>
                This Cookie Policy explains how TalepNET uses cookies and similar technologies on our websites and
                Services. It should be read together with our Privacy Policy.
              </p>
              <p>Last updated: October 25, 2025</p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.35}>
            <p>
              For more information about how we handle personal data, please review our{' '}
              <Link href="/privacy" className="text-secondary dark:text-accent">
                Privacy Policy
              </Link>
              .
            </p>
          </RevealAnimation>

          {sections.map((section, index) => (
            <RevealAnimation key={section.title} delay={0.4 + index * 0.08}>
              <div className="space-y-6">
                <h3 className="text-heading-4">{section.title}</h3>
                {section.body ? <p>{section.body}</p> : null}
                {section.list ? (
                  <ul className="space-y-3">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start justify-start gap-2">
                        <span className="bg-secondary dark:bg-accent mt-2 inline-block size-1.5 rounded-full" />
                        <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </RevealAnimation>
          ))}

          <RevealAnimation delay={1}>
            <div className="space-y-6">
              <h3 className="text-heading-4">8. Contact</h3>
              <p>
                For questions regarding this Cookie Policy, please visit our{' '}
                <Link href="/contact-us" className="text-secondary dark:text-accent">
                  Contact page
                </Link>
                .
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default GdprContent;
