import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const TermsConditionContent = () => {
  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[200px]">
      <div className="main-container">
        <RevealAnimation delay={0.3}>
          <div className="space-y-3">
            <h2>Terms of Service</h2>
            <div className="space-y-7">
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of TalepNET&apos;s products, websites,
                and services (&ldquo;Services&rdquo;). By accessing or using our Services, you agree to be bound by these Terms.
                Please read carefully.
              </p>
              <p>Last updated: October 25, 2025</p>
            </div>
          </div>
        </RevealAnimation>
        <article className="terms-conditions-body">
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>1. Acceptance &amp; Contract</h3>
              <p>
                By creating an account, clicking &ldquo;I agree&rdquo;, or otherwise using the Services, you confirm that you have
                read, understood, and agree to these Terms and our Privacy Policy. If you use the Services on behalf
                of an organization, you represent that you have authority to bind that organization. If you do not
                agree, do not use the Services.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>2. Account Eligibility &amp; Security</h3>
              <p>
                You must be at least 18 years old or the age of majority in your jurisdiction to use the Services.
                You are responsible for safeguarding your account credentials and all activities under your account.
                Notify us immediately of any unauthorized use or security breach.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>3. Subscriptions, Fees &amp; Cancellations</h3>
              <p>
                Some features require a paid subscription. Fees, billing cycles, and renewal terms are disclosed at
                the point of purchase. Subscriptions renew automatically unless canceled before the renewal date.
                Applicable taxes may be added. Cancellations and refunds are subject to our Refund Policy. You may
                access invoices in your account settings.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>4. Permitted &amp; Prohibited Use</h3>
              <p>Use the Services in compliance with all applicable laws and regulations.</p>
              <ul>
                <li>Do not attempt to reverse engineer, access non-public areas, or disrupt Service integrity.</li>
                <li>Do not upload malicious code, infringe on third-party rights, or misuse confidential data.</li>
                <li>Do not use the Services for spam, fraud, or any illegal, deceptive, or abusive activities.</li>
                <li>Do not use bots, scraping, or other automated means without express permission.</li>
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>5. API Usage &amp; Fair Use</h3>
              <p>
                If API access is provided, usage may be rate-limited or subject to quotas. You agree not to
                circumvent technical limitations or exceed fair-use thresholds. We may suspend keys or throttle
                requests that negatively impact platform stability or security.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>6. Content &amp; Intellectual Property</h3>
              <p>
                You own the content you submit to the Services but grant TalepNET a worldwide, non-exclusive license
                to use, process, display, and distribute your content as necessary to provide the Services, in
                accordance with our Privacy Policy. We do not claim ownership of your data, but you are responsible
                for the legality and accuracy of your content. TalepNET and its licensors retain all rights in the
                platform, software, branding, and documentation.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>7. Data Privacy, DPA &amp; Security</h3>
              <p>
                TalepNET implements industry-standard administrative, technical, and physical safeguards to protect
                personal data. Use of the Services is subject to our Privacy Policy. Where applicable, a separate
                Data Processing Agreement (DPA) governs processing of personal data as a processor under GDPR. You are
                responsible for maintaining the confidentiality of confidential information you may access.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <Link
              href="/privacy"
              className="section-button btn btn-xl dark:btn-accent hover:btn-primary btn-secondary">
              <span>Read our Privacy Policy</span>
            </Link>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>8. Third-Party Services &amp; Integrations</h3>
              <p>
                The Services may integrate with third-party tools (e.g., payment providers, identity services).
                We are not responsible for third-party terms, privacy policies, or performance. Use of third-party
                services is at your own risk and discretion.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>9. Service Levels &amp; Support (SLA Disclaimer)</h3>
              <p>
                While we strive for high availability, we do not guarantee 100% uptime. Any service level targets or
                support response times apply only if separately documented in an executed order form or SLA. We may
                modify, suspend, or discontinue features from time to time.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>10. Termination &amp; Suspension</h3>
              <p>
                We may suspend or terminate your access if you violate these Terms or pose risk to the Service or
                others. You may close your account at any time; prepaid fees may be non-refundable unless required by
                law. Sections regarding intellectual property, limitation of liability, and indemnity survive
                termination.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>11. Indemnification</h3>
              <p>
                You agree to indemnify, defend, and hold harmless TalepNET, its affiliates, officers, and employees
                from any claims, damages, or expenses arising out of your misuse of the Services, your content, or
                your violation of these Terms or applicable law.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>12. Disclaimer &amp; Limitation of Liability</h3>
              <p>
                The Services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, express or
                implied. To the fullest extent permitted by law, TalepNET disclaims all liability and shall not be
                responsible for any damages of any kind, whether direct, indirect, incidental, special, consequential,
                exemplary or punitive, or for any loss of profits, revenues, business, goodwill or data, arising out
                of or in connection with the Services or these Terms, even if advised of the possibility of such
                damages. Nothing in these Terms excludes or limits liability that cannot be excluded or limited under
                applicable law.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>13. Export Controls &amp; Sanctions Compliance</h3>
              <p>
                You represent that you are not located in, under the control of, or a national or resident of any
                country or entity subject to embargoes or sanctions. You will not use the Services in violation of
                export control or sanctions laws and will not permit access by prohibited persons.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>14. Governing Law &amp; Disputes</h3>
              <p>
                These Terms are governed by the laws of the Republic of T&uuml;rkiye. The exclusive jurisdiction and
                venue shall be the courts of İstanbul, T&uuml;rkiye.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>15. Changes to These Terms</h3>
              <p>
                We may update these Terms from time to time. Material changes will be notified via the Services or
                email. Continued use after changes are effective means you accept the revised Terms.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>16. Contact</h3>
              <p>
                For questions or legal notices regarding these Terms, please visit our{' '}
                <Link href="/contact-us" className="text-secondary dark:text-accent">
                  Contact page
                </Link>
                .
              </p>
            </div>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

export default TermsConditionContent;
