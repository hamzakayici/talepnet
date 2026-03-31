import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="xl:pt-[170px] pt-[140px] xl:pb-28 lg:pb-20 pb-16">
      <div className="main-container">
        <div className="space-y-4 text-center lg:text-left">
          <RevealAnimation delay={0.1}>
            <h1 className="font-normal">Değişiklik Günlüğü</h1>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="lg:max-w-full sm:max-w-[550px] max-w-full mx-auto lg:mx-0">
              Ürün güncellemelerini, hata düzeltmelerini ve sürüm notlarını otomatik olarak takip edin;
              <br className="hidden lg:block" />
              ekibiniz ve müşterileriniz her zaman bilgilendirilsin.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
