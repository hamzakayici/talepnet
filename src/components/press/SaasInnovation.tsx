//press saas innovation
import saasInnovationImage from '@public/images/ns-img-390.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
const SaasInnovation = () => {
  return (
    <section className="py-16 lg:py-20 xl:py-28">
      <div className="main-container">
        <div className="mb-10.5 space-y-5 sm:px-8">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2">Basın</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 className="text-heading-3">SaaS inovasyonunda güvenilir bir isim</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                TalepNET, yapay zeka destekli araçları ve sorunsuz entegrasyonları ile ekiplerin ve kurumların
                satın alma süreçlerini daha akıllıca ölçeklendirmesini sağlar.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.4}>
          <figure className="w-full max-w-full">
            <Image src={saasInnovationImage} alt="saas-innovation" className="h-full w-full rounded-3xl object-cover" />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

SaasInnovation.displayName = 'SaasInnovation';
export default SaasInnovation;
