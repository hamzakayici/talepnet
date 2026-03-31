import RevealAnimation from '../animation/RevealAnimation';

const Heading = () => {
  return (
    <div className="text-center space-y-3 mb-14 md:mb-[70px]">
      <RevealAnimation delay={0.2}>
        <h2>
          En güncel <span className="text-primary-500 inline-block">haberler & içgörüler</span>
        </h2>
      </RevealAnimation>
      <RevealAnimation delay={0.3}>
        <p className="max-w-[738px] mx-auto">
          Satın alma süreçlerindeki en son gelişmeler, dijital dönüşüm trendleri ve TalepNET ile
          iş süreçlerinizi nasıl optimize edebileceğinize dair içgörüler.
        </p>
      </RevealAnimation>
    </div>
  );
};

export default Heading;
