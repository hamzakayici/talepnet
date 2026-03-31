import whyUsImageDesktop from '@public/images/feature-man-pointer.png';
import whyUsImageMobile from '@public/images/feature-man-pointer-mobile.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

interface FeatureItem {
  id: number;
  icon: string;
  title: string;
}

const featureItems: FeatureItem[] = [
  {
    id: 1,
    icon: 'ns-shape-7',
    title: 'Kurulum ve teknik bilgi gerektirmez',
  },
  {
    id: 2,
    icon: 'ns-shape-9',
    title: 'Otomatik onay iş akışları',
  },
  {
    id: 3,
    icon: 'ns-shape-12',
    title: 'Web ve mobil uyumlu platform',
  },
  {
    id: 4,
    icon: 'ns-shape-8',
    title: 'Gerçek zamanlı raporlama ve analiz',
  },
];

const FeatureV3 = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="py-20 md:py-[100px] lg:py-[200px]">
        <div className="main-container">
          <div className="lp:gap-[100px] grid grid-cols-12 items-center gap-y-10 md:gap-y-18 lg:gap-y-20">
            <div className="lp:col-span-5 col-span-12 lg:col-span-6">
              <div className="flex flex-col justify-between gap-10 md:flex-row lg:flex-col lg:gap-y-14">
                <div className="space-y-7">
                  <div className="space-y-3 md:max-w-[450px] lg:max-w-[521px]">
                    <RevealAnimation delay={0.1}>
                      <h2>Neden TalepNET&apos;i tercih etmelisiniz?</h2>
                    </RevealAnimation>
                    <RevealAnimation delay={0.2}>
                      <p>
                        Kurumsal satın alma süreçleriniz benzersizdir — yönetim aracınız da öyle olmalı.
                        TalepNET ile ihtiyaçlarınıza özel çözümler üretin.
                      </p>
                    </RevealAnimation>
                  </div>
                </div>
                <div>
                  <ul className="sm:space-y-2">
                    {featureItems.map((feature, index) => (
                      <RevealAnimation key={feature.id} delay={0.3 + index * 0.1}>
                        <li className="flex items-center gap-3 py-2">
                          <div className="inline-block">
                            <span
                              className={`${feature.icon} text-secondary dark:text-accent text-[24px] sm:text-[36px]`}></span>
                          </div>
                          <span className="xl:text-heading-6 sm:text-tagline-1 text-tagline-2 text-secondary dark:text-accent font-normal">
                            {feature.title}
                          </span>
                        </li>
                      </RevealAnimation>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="lp:col-span-7 col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.3} direction="left">
                <figure className="relative w-full max-w-[400px] mx-auto sm:max-w-[500px] lg:max-w-[850px] scale-125 sm:scale-[1.35] lg:scale-[1.65] origin-bottom lg:-translate-x-10">
                  <Image
                    src={whyUsImageDesktop}
                    alt="Neden TalepNET'i tercih etmelisiniz"
                    className="hidden md:block h-auto w-full object-contain"
                  />
                  <Image
                    src={whyUsImageMobile}
                    alt="Neden TalepNET'i tercih etmelisiniz (Mobil)"
                    className="block md:hidden h-auto w-full object-contain mt-12 translate-y-4"
                  />
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default FeatureV3;
