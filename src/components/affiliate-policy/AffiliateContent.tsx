import RevealAnimation from '../animation/RevealAnimation';

interface ContentSection {
  id: string;
  title: string;
  description?: string;
  listItems?: string[];
}

interface PaymentInfo {
  id: string;
  text: string;
}

interface PayoutInfo {
  id: string;
  text: string;
}

const AffiliateContent = () => {
  // Main content sections with simple descriptions
  const contentSections: ContentSection[] = [
    {
      id: 'how-it-works',
      title: 'Nasıl çalışır?',
      description:
        "TalepNET iş ortağı olarak, genişletilmiş satış ekibimizin bir parçasısınız.\nYönlendirdiğiniz her müşteri bir satın alma tamamladığında komisyon kazanırsınız. Ne kadar çok yönlendirirseniz, o kadar çok kazanırsınız — sınır yok!",
    },
    {
      id: 'track-sales',
      title: 'Satış yaptığımı nasıl anlarım?',
      description:
        'Yönlendirdiğiniz bir müşteri satın alma yaptığında bildirim alırsınız. Ayrıca satışlarınızı ve komisyonlarınızı iş ortağı panelinizden gerçek zamanlı olarak takip edebilirsiniz.',
    },
    {
      id: 'cookie-duration',
      title: 'Çerez süresi',
      description:
        "Bir ziyaretçi bağlantınıza tıkladığında 30 günlük bir çerez ayarlanır. Bu süre içinde satın alma tamamlarsa komisyonu siz alırsınız — başka bir iş ortağının bağlantısı sizinkini geçersiz kılmadıkça.",
    },
  ];

  // Payment information items
  const paymentItems: PaymentInfo[] = [
    { id: 'paypal', text: 'Tüm ödemeler PayPal üzerinden işlenir.' },
    { id: 'account-info', text: 'PayPal hesap bilgilerinizin iş ortağı profilinizde doğru şekilde ayarlandığından emin olun.' },
  ];

  // Payout information items
  const payoutItems: PayoutInfo[] = [
    { id: 'monthly', text: 'Ödemeler her ayın sonunda yapılır.' },
    { id: 'minimum', text: 'Minimum ödeme eşiği: 100$.' },
    { id: 'verification', text: 'Komisyonlar ödenmeden önce manuel olarak doğrulanmalıdır.' },
    { id: 'example', text: 'Örneğin, Mayıs ayında kazanılan komisyonlar en geç 30 Hazirana kadar ödenir.' },
  ];

  return (
    <section className="bg-background-1 dark:bg-background-6 py-28 md:py-36 lg:py-44 2xl:py-[200px]">
      <div className="main-container">
        <div className="mx-auto max-w-[848px] space-y-[70px]">
          {/* Simple content sections */}
          {contentSections.map((section, index) => (
            <RevealAnimation key={section.id} delay={0.1 + index * 0.1}>
              <div className="mt-10 space-y-3">
                <h2 className="text-heading-4">{section.title}</h2>
                <p className="">
                  {section.description?.split('\n').map((line, lineIndex) => (
                    <span key={lineIndex}>
                      {line}
                      {lineIndex < section.description!.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </RevealAnimation>
          ))}

          {/* Payment information section */}
          <RevealAnimation delay={0.3}>
            <div className="mt-10 space-y-3">
              <h2 className="text-heading-4">Ödememi nasıl alırım?</h2>
              <ul className="space-y-2">
                {paymentItems.map((item) => (
                  <li
                    key={item.id}
                    className="text-tagline-1 text-secondary/60 dark:text-accent/60 before:bg-secondary dark:before:bg-accent font-normal before:relative before:left-0 before:mr-1 before:inline-block before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:content-['']">
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Payout information section */}
          <RevealAnimation delay={0.4}>
            <div className="mt-10 space-y-3">
              <h2 className="text-heading-4">Ödemeler ne zaman yapılır?</h2>
              <ul className="space-y-2">
                {payoutItems.map((item) => (
                  <li
                    key={item.id}
                    className="text-tagline-1 text-secondary/60 dark:text-accent/60 before:bg-secondary dark:before:bg-accent font-normal before:relative before:left-0 before:mr-1 before:inline-block before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:content-['']">
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AffiliateContent;
