import cursor from '@public/images/ns-img-156.svg';
import featureImage1 from '@public/images/ns-img-158.png';
import profitChart from '@public/images/ns-img-159.png';
import cursorDark from '@public/images/ns-img-dark-110.svg';
import featureImage1Dark from '@public/images/ns-img-dark-112.png';
import profitChartDark from '@public/images/ns-img-dark-113.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import { ClipboardCheck, Scale, BellRing, FileSignature } from 'lucide-react';

const featureList = [
  {
    icon: (
      <div className="flex size-[52px] shrink-0 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
        <ClipboardCheck className="size-[26px]" strokeWidth={1.75} />
      </div>
    ),
    text: 'Tedarikçi performans puanlama ve değerlendirme',
  },
  {
    icon: (
      <div className="flex size-[52px] shrink-0 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
        <Scale className="size-[26px]" strokeWidth={1.75} />
      </div>
    ),
    text: 'Otomatik teklif toplama ve karşılaştırma',
  },
  {
    icon: (
      <div className="flex size-[52px] shrink-0 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
        <BellRing className="size-[26px]" strokeWidth={1.75} />
      </div>
    ),
    text: 'Gerçek zamanlı sipariş takibi ve bildirimler',
  },
  {
    icon: (
      <div className="flex size-[52px] shrink-0 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
        <FileSignature className="size-[26px]" strokeWidth={1.75} />
      </div>
    ),
    text: 'Güvenli belge paylaşımı ve sözleşme yönetimi',
  },
];

const SupplierPortal = () => {
  return (
    <section className="dark:bg-background-7 pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="grid grid-cols-12 items-center md:gap-y-18 lg:gap-x-[60px] xl:gap-x-[100px]">
          <div className="col-span-12 max-md:mb-18 lg:col-span-7">
            <div>
              <div className="relative w-full max-w-[300px] md:ms-16 md:max-w-[400px] lg:ms-0 lg:max-w-[500px]">
                <RevealAnimation delay={0.5} duration={1.5} useSpring>
                  <figure className="absolute top-[12%] -right-[20px] w-[100px] md:top-[20%] md:-right-[130px] lg:top-[17%] lg:-right-[15px] xl:top-[20%] xl:-right-[130px]">
                    <Image src={cursor} alt="Tedarikçi portalı" className="h-full w-full dark:hidden" />
                    <Image src={cursorDark} alt="Tedarikçi portalı" className="hidden h-full w-full dark:block" />
                  </figure>
                </RevealAnimation>
                <RevealAnimation delay={0.6}>
                  <figure className="w-full md:max-w-[500px] lg:max-w-[400px] xl:max-w-[500px]">
                    <Image src={featureImage1} alt="Tedarikçi portalı paneli" className="w-full dark:hidden" />
                    <Image
                      src={featureImage1Dark}
                      alt="Tedarikçi portalı paneli"
                      className="hidden w-full dark:block"
                    />
                  </figure>
                </RevealAnimation>
                <RevealAnimation delay={0.7} duration={1.5} useSpring>
                  <figure className="absolute bottom-0 left-[40%] w-full max-w-[200px] overflow-hidden rounded-[10px] md:bottom-1/12 md:left-[62%] md:max-w-[265px] lg:max-w-[250px] xl:max-w-[333px]">
                    <Image src={profitChart} alt="Performans grafiği" className="size-full dark:hidden" />
                    <Image
                      src={profitChartDark}
                      alt="Performans grafiği"
                      className="hidden size-full dark:block"
                    />
                  </figure>
                </RevealAnimation>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="space-y-8">
              <div className="space-y-5">
                <RevealAnimation delay={0.2}>
                  <span className="badge badge-green">Tedarikçi Portalı</span>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <div className="space-y-3">
                    <h2>
                      Tedarikçilerinizi <span className="text-primary-500 font-bold">tek platformdan </span>yönetin
                    </h2>
                  </div>
                </RevealAnimation>
                <RevealAnimation delay={0.35}>
                  <p className="max-w-[480px]">
                    TalepNET Tedarikçi Portalı ile tedarikçi ilişkilerinizi güçlendirin, teklif süreçlerinizi
                    hızlandırın ve tedarik zincirinizi uçtan uca kontrol altına alın.
                  </p>
                </RevealAnimation>
              </div>
              <div>
                <ul className="space-y-2">
                  {featureList.map((feature, index) => (
                    <RevealAnimation key={index} delay={0.4 + index * 0.1}>
                      <li className="flex items-center gap-4 p-2">
                        {feature.icon}
                        <span className="text-tagline-1 text-secondary dark:text-accent font-medium">
                          {feature.text}
                        </span>
                      </li>
                    </RevealAnimation>
                  ))}
                </ul>
              </div>
              <RevealAnimation delay={0.8}>
                <div>
                  <LinkButton
                    href="/procurement-software"
                    className="btn btn-secondary hover:btn-white btn-md dark:btn-transparent dark:hover:btn-accent w-[85%] md:w-auto">
                    Tedarikçi Portalını Keşfet
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplierPortal;
