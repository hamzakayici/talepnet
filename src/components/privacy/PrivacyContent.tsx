import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
const sections = [
  {
    title: '1. Overview',
    body: 'TalepNET is committed to protecting your privacy. This Policy applies to personal data we process about visitors, customers, and users of the Services. Additional terms may apply for specific features (e.g., a Data Processing Agreement for enterprise customers).',
  },
  {
    title: '2. Information We Collect',
    list: [
      'Account & Contact Data: name, company, email, phone, role, billing details.',
      'Usage Data: product interactions, feature usage, settings, device information, pages viewed.',
      'Log & Diagnostic Data: IP address, browser type, ISP, timestamps, referrer/exit pages, and request IDs for security and reliability.',
      'Cookies & Similar Technologies: identifiers to remember preferences, maintain sessions, and measure performance.',
      'Support Content: messages, attachments, and feedback you provide to our support channels.',
    ],
  },
  {
    title: '3. How We Use Information',
    list: [
      'Provide, operate, and maintain the Services.',
      'Authenticate users, prevent fraud, and ensure security.',
      'Process transactions, invoicing, and account administration.',
      'Improve performance, develop new features, and conduct analytics.',
      'Respond to inquiries and provide customer support.',
      'Send important notices, updates, and service-related communications.',
      'Comply with legal obligations and enforce our Terms of Service.',
    ],
  },
  {
    title: '4. Cookies & Analytics',
    body: 'We use cookies and similar technologies to remember preferences, maintain sessions, and measure effectiveness of our content. Cookie Policy. You can manage cookie settings in your browser for more control.',
  },
  {
    title: '5. Data Sharing & Processors',
    body: 'We may share information with trusted service providers who process data on our behalf (e.g., hosting, customer support, analytics, email delivery, payment processing). These processors are bound by contractual obligations and may only process data per our instructions. We do not sell personal data.',
  },
  {
    title: '6. International Transfers',
    body: 'Where data is transferred internationally, we implement appropriate safeguards (such as Standard Contractual Clauses) to protect your information in accordance with applicable laws.',
  },
  {
    title: '7. Data Retention',
    body: 'We retain personal data for as long as necessary to fulfill the purposes described in this Policy, comply with legal obligations, resolve disputes, and enforce agreements. After retention periods end, data is deleted or anonymized in the ordinary course.',
  },
  {
    title: '8. Security',
    body: 'We apply administrative, technical, and physical safeguards to protect information. No method of transmission or storage is 100% secure; we cannot guarantee absolute security. If we become aware of a security incident affecting personal data, we will notify affected parties as required by law.',
  },
  {
    title: '9. Your Rights',
    body: 'Subject to applicable law, you may have rights to access, correct, delete, or restrict processing of your personal data, and to object or request portability. To exercise these rights, please visit our Contact page. We may require identity verification and may be unable to comply with requests that conflict with legal obligations or legitimate interests.',
  },
  {
    title: '10. Children’s Privacy',
    body: 'The Services are not directed to children under the age of 16 and we do not knowingly collect personal data from them. If you believe a child has provided personal data to us, contact us and we will take appropriate steps.',
  },
  {
    title: '11. Do Not Track',
    body: 'Our Services do not currently respond to Do Not Track signals. You can manage cookies through your browser settings.',
  },
  {
    title: '12. Third-Party Links',
    body: 'The Services may contain links to third-party websites or services. We are not responsible for their privacy practices. Review their policies for details on how they handle your information.',
  },
  {
    title: '13. Changes to This Policy',
    body: 'We may update this Policy from time to time. Material changes will be notified via the Services or email. Continued use after the effective date constitutes acceptance of the updated Policy.',
  },
];

const PrivacyContent = () => {
  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        <div className="privacy-policy space-y-[75px]">
          <div className="space-y-3">
            <RevealAnimation delay={0.1}>
              <h2>Privacy Policy</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                This Privacy Policy explains how TalepNET collects, uses, discloses, and safeguards information in
                connection with our websites, products, and services (the &ldquo;Services&rdquo;). By using the Services, you
                acknowledge that you have read and understood this Policy.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>Last updated: October 25, 2025</p>
            </RevealAnimation>
          </div>

          {sections.map((section, index) => (
            <RevealAnimation key={section.title} delay={0.4 + index * 0.05}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4>{section.title}</h4>
                  {section.body ? <p>{section.body}</p> : null}
                  {section.list ? (
                    <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </RevealAnimation>
          ))}

          <RevealAnimation delay={1.1}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>14. Contact</h4>
                <p>
                  For questions about this Policy or our data practices, please visit our{' '}
                  <Link href="/contact-us" className="text-secondary dark:text-accent">
                    Contact page
                  </Link>
                  .
                </p>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;
