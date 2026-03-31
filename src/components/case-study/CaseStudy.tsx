import caseStudyImg from '@public/images/ns-img-380.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const CaseStudy = () => {
  return (
    <section className="pt-32 pb-[20px] sm:pt-36 md:pt-42 lg:pb-[100px] xl:pt-[180px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          <div className="max-w-[900px] space-y-3">
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-3 md:text-heading-2 font-normal">Lider ekipler TalepNET ile nasıl büyüyor</h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
               <p>
                Hızlı büyüyen girişimlerden köklü kuruluşlara kadar dünya genelindeki işletmeler, operasyonlarını
                düzenleme, görünürlüğü artırma ve büyümeyi hızlandırma amacıyla TalepNET'i kullanıyor. Platformumuzun
                gerçek dünyada nasıl etki yarattığını keşfedin.
              </p>
            </RevealAnimation>
          </div>
          <div className="space-y-4">
            <RevealAnimation delay={0.4}>
              <h2 className="text-heading-4">Öne çıkan başarı hikayesi</h2>
            </RevealAnimation>
            <ul className="max-w-[435px] space-y-2">
              <RevealAnimation delay={0.5}>
                <li className="text-secondary dark:text-accent text-lg leading-[150%] font-medium">
                  Müşteri:
                  <span className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal">
                    Global Lojistik A.Ş.
                  </span>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <li className="text-secondary dark:text-accent text-lg leading-[150%] font-medium">
                  Sektör:
                  <span className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal">Lojistik & Tedarik</span>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.7}>
                <li className="text-secondary dark:text-accent text-lg leading-[150%] font-medium">
                  Kullanım alanı:
                  <span className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal">
                    Satın alma süreçlerinin dijitalleştirilmesi &amp; tedarikçi yönetimi
                  </span>
                </li>
              </RevealAnimation>
            </ul>
          </div>
          <RevealAnimation delay={0.8}>
            <figure className="max-w-[1288px] overflow-hidden rounded-4xl">
              <Image
                src={caseStudyImg}
                alt="VelocityFinance case study dashboard showing financial reporting interface"
                width={1290}
                height={800}
                className="h-full w-full object-cover"
              />
            </figure>
          </RevealAnimation>
          <div className="space-y-1">
            <RevealAnimation delay={0.1}>
              <h3 className="text-heading-4">Karşılaşılan zorluk</h3>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="max-w-[705px]">
                Global Lojistik, satın alma operasyonlarını manuel olarak yönetiyor, Excel tabloları ve birbirinden
                bağımsız araçlar kullanıyordu. Süreçleri yavaş, hataya açık ve ölçeklenmesi zordu.
              </p>
            </RevealAnimation>
          </div>
          <div className="flex flex-col items-center justify-between gap-16 md:flex-row">
            <div className="space-y-6">
              <div>
                <RevealAnimation delay={0.3}>
                  <h4 className="text-heading-4">Çözüm</h4>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>TalepNET onlara yardımcı oldu:</p>
                </RevealAnimation>
              </div>
              <ul className="space-y-2">
                <RevealAnimation delay={0.3}>
                  <li>
                    <p className="before:bg-secondary dark:before:bg-accent before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      İş akışı sihirbazı ile özel satın alma süreçleri oluşturuldu
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <li>
                    <p className="before:bg-secondary dark:before:bg-accent before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      Online teklif toplama ve sipariş yönetimi otomatikleştirildi
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <li>
                    <p className="before:bg-secondary dark:before:bg-accent before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      Tedarikçi ağı tek bir platformda birleştirildi
                    </p>
                  </li>
                </RevealAnimation>
              </ul>
            </div>
            <div className="space-y-6">
              <div>
                <RevealAnimation delay={0.3}>
                  <h4 className="text-heading-4">Sonuçlar</h4>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>TalepNET onlara yardımcı oldu:</p>
                </RevealAnimation>
              </div>
              <ul className="space-y-2">
                <RevealAnimation delay={0.3}>
                  <li>
                    <p className="before:bg-secondary dark:before:bg-accent before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      Satın alma süreçlerinde %82 zaman tasarrufu
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <li>
                    <p className="before:bg-secondary dark:before:bg-accent before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      Tedarikçi yönetiminde %95 doğruluk artışı
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <li>
                    <p className="before:bg-secondary dark:before:bg-accent before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      Stratejik incelemelerde 4 kat daha hızlı karar alma
                    </p>
                  </li>
                </RevealAnimation>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
