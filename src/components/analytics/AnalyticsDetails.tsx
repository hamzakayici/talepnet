import analytics1 from '@public/images/ns-img-367.png';
import analytics2 from '@public/images/ns-img-368.png';
import analytics3 from '@public/images/ns-img-369.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import SocialLinkV3 from '../shared/SocialLinkV3';

const AnalyticsDetails = () => {
  const social = {
    facebook: 'https://www.facebook.com',
    dribble: 'https://dribbble.com',
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com',
  };
  return (
    <section className="analytics pt-[70px] pb-[100px]">
      <div className="mx-auto flex w-[95%] max-w-[950px] flex-col space-y-18">
        <div className="space-y-6">
          <div className="space-y-1">
            <RevealAnimation delay={0.1}>
              <h5>Görünürlük için tasarlandı</h5>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                Gerçek zamanlı kontrol panelimiz, operasyonlarınıza, performansınıza ve büyümenize tek bakışta
                kapsamlı bir genel bakış sunar.
              </p>
            </RevealAnimation>
          </div>
          <ul className="space-y-2">
            <RevealAnimation delay={0.1}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">Canlı KPI takibi</span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">Görselleştirilmiş trendler ve karşılaştırmalar</span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">Özelleştirilebilir widget ve modüller</span>
              </li>
            </RevealAnimation>
          </ul>
        </div>
        <div className="space-y-6">
          <div className="space-y-1">
            <RevealAnimation delay={0.2}>
              <h5>Her ekip için özelleştirilebilir</h5>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                Her ekibin farklı hedefleri vardır. TalepNET ile kontrol panellerini departmana, role veya 
                bireysel ihtiyaçlara göre özelleştirebilirsiniz.
              </p>
            </RevealAnimation>
          </div>
          <ul className="space-y-2">
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">
                  <strong className="text-secondary dark:text-accent">Finans:</strong>
                  Gelir, gider ve nakit akışını izleyin
                </span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">
                  <strong className="text-secondary dark:text-accent">Pazarlama:</strong>
                  Dönüşümleri, ROAS ve kampanya erişimini takip edin
                </span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">
                  <strong className="text-secondary dark:text-accent">Satış:</strong>
                  Pipeline sağlığını ve anlaşma hızını izleyin
                </span>
              </li>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">
                  <strong className="text-secondary dark:text-accent">Ürün:</strong>
                  Özellik kullanımını, tutma oranını ve kayıp oranını görüntüleyin
                </span>
              </li>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">
                  <strong className="text-secondary dark:text-accent">Destek:</strong>
                  Destek talebi trendlerini ve çözüm sürelerini analiz edin
                </span>
              </li>
            </RevealAnimation>
          </ul>
        </div>
        <div className="space-y-6">
          <div className="space-y-1">
            <RevealAnimation delay={0.2}>
              <h5>Detaylara inin, büyük resmi görün</h5>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                Büyük resimle başlayın, ardından detaylara dalın. Anlamlı içgörüleri ortaya çıkarmak için verileri
                filtreleyin, segmentleyin ve zaman içinde karşılaştırın.
              </p>
            </RevealAnimation>
          </div>
          <ul className="space-y-2">
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">Özel tarih aralıkları </span>
              </li>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">Segmentasyon ve filtreleme </span>
              </li>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">
                  Karşılaştırma modları (haftalık, aylık)
                </span>
              </li>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60"> Paylaşım için CSV/PDF dışa aktarma</span>
              </li>
            </RevealAnimation>
          </ul>
        </div>
        <div className="grid-column-12 grid gap-y-[50px]">
          <RevealAnimation delay={0.2}>
            <div className="cols-span-12">
              <figure>
                <Image src={analytics1} alt="analytics" className="rounded-[20px]" />
              </figure>
            </div>
          </RevealAnimation>
          <div className="cols-span-12 flex flex-col gap-[50px] md:col-span-6 md:flex-row">
            <RevealAnimation delay={0.2}>
              <figure>
                <Image src={analytics2} alt="analytics" className="rounded-[24px]" />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <figure>
                <Image src={analytics3} alt="analytics" className="rounded-[24px]" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-1">
            <RevealAnimation delay={0.2}>
              <h5>Veri kaynaklarınızı entegre edin</h5>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-secondary/60">
                TalepNET, zaten kullandığınız araçlarla sorunsuz bir şekilde bağlanır, böylece tüm içgörüleriniz tek bir yerde yaşar.
              </p>
            </RevealAnimation>
          </div>
          <ul className="space-y-2">
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">Stripe, QuickBooks, Xero </span>
              </li>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">Google Analytics, Facebook Ads</span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60"> HubSpot, Salesforce</span>
              </li>
            </RevealAnimation>
          </ul>
        </div>
        <div className="space-y-6">
          <div className="space-y-1">
            <RevealAnimation delay={0.2}>
              <h5>Güvenlik &amp; kontrol</h5>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                Tüm kontrol panelleri gizlilik ön planda tutularak tasarlanmıştır. Kişisel görünümlerden kuruluş
                genelindeki raporlara kadar her düzeyde erişimi kontrol edin.
              </p>
            </RevealAnimation>
          </div>
          <ul className="space-y-2">
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">Rol tabanlı izinler</span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">Şifrelenmiş veri depolama</span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60"> KVKK &amp; SOC 2 uyumlu</span>
              </li>
            </RevealAnimation>
          </ul>
        </div>
        <div className="space-y-4">
          <RevealAnimation delay={0.2}>
            <h5>Bu yazıyı paylaşın</h5>
          </RevealAnimation>
          {/*Social links*/}
          <RevealAnimation delay={0.2}>
            <div className="flex items-center justify-start">
              <SocialLinkV3 social={social} />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

AnalyticsDetails.displayName = 'AnalyticsDetails';
export default AnalyticsDetails;
