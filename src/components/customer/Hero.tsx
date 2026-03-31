//Customer Hero
import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="xl:pt-[180px] md:pt-42 sm:pt-36 pt-32" aria-label="customer hero section">
      <div className="main-container">
        {/* Hero content */}
        <div className="text-center space-y-4 pb-20 lg:pb-28">
          <RevealAnimation delay={0.1}>
            <h1 className="font-normal lg:text-heading-2">Müşteri Hikayeleri</h1>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="text-secondary/60 dark:text-accent/60 lg:max-w-[518px] lg:mx-auto">
              TalepNET'in dünya genelinde kurumsal satın alma süreçlerini nasıl dönüştürdüğünü keşfedin.
              Müşterilerimizin başarı hikayelerini ve sektör standartlarını nasıl belirlediğini okuyun.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
