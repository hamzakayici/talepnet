import learnBanner from '@public/images/ns-img-385.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Banner = () => {
  return (
    <section className="pt-[170px] pb-[100px] md:pb-[200px] xl:pt-[200px]">
      <div className="main-container">
        <div className="flex flex-col items-center gap-y-14 lg:flex-row lg:gap-[100px]">
          <div className="mx-auto max-w-[540px] flex-1 space-y-14 text-center lg:mx-0 lg:max-w-full lg:text-left">
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <h2>İşletmeniz için tasarlandı. İş akışınıza uyarlandı.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p>
                  TalepNET, geniş bir yelpazedeki ekip ve sektörlere hizmet vermek üzere tasarlanmıştır.
                  Satın alma süreçlerinizi yönetin, tedarikçi ağınızı genişletin, bütçenizi kontrol altında
                  tutun veya iş akışlarınızı otomatikleştirin — TalepNET sizinle birlikte büyüyen platformdur.
                </p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.3} instant>
              <div>
                <LinkButton
                  href="/procurement-software"
                  className="btn btn-primary btn-xl hover:btn-secondary dark:hover:btn-accent">
                  Platformu keşfedin
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          <div className="flex-1">
            <RevealAnimation delay={0.3} instant>
              <figure className="w-full max-w-[596px] overflow-hidden rounded-[20px] opacity-0">
                <Image src={learnBanner} className="h-full w-full object-cover" alt="TalepNET eğitim" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
