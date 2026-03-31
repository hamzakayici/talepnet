import RevealAnimation from '../animation/RevealAnimation';

interface AffiliateStep {
  id: string;
  stepNumber: string;
  icon: string;
  title: string;
  description: string;
}

const affiliateStepsData: AffiliateStep[] = [
  {
    id: '1',
    stepNumber: 'Adım 1',
    icon: 'ns-shape-35',
    title: 'İş ortağı olarak kaydolun',
    description:
      'İş ortaklığı programımıza katılarak bugün kazanmaya başlayın! İş ortağı olarak, ürünlerimizi ve hizmetlerimizi tanıtma fırsatına sahip olacaksınız.',
  },
  {
    id: '2',
    stepNumber: 'Adım 2',
    icon: 'ns-shape-12',
    title: 'Ürünlerimizi tanıyın',
    description:
      'Hedef kitlenize etkili bir şekilde tanıtmak için ürünlerimiz ve hizmetlerimiz hakkında bilgi edinin. Kapsamlı kaynaklar ve eğitim materyalleri sunuyoruz.',
  },
  {
    id: '3',
    stepNumber: 'Adım 3',
    icon: 'ns-shape-3',
    title: 'Her satıştan komisyon kazanın',
    description:
      'Her başarılı yönlendirme için cömert komisyonlar kazanmaya başlayın. Performansınızı ve kazançlarınızı iş ortağı panelinizden takip edin.',
  },
];

const AffiliatesStep = () => {
  return (
    <div className="grid grid-cols-12 gap-8">
      {affiliateStepsData.map((step, index) => (
        <RevealAnimation key={step.id} delay={0.4 + index * 0.1}>
          <article className="space-y-3.5 p-8 col-span-12 md:col-span-6 lg:col-span-4 bg-white dark:bg-background-6 rounded-[20px]">
            <div className="space-y-11">
              <span className="text-tagline-2 inline-block dark:text-accent/60">{step.stepNumber}</span>
              <div>
                <span className={`${step.icon} text-[52px] text-secondary dark:text-accent`} />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-heading-6 md:text-heading-5">{step.title}</h3>
              <p className="max-w-[345px]">{step.description}</p>
            </div>
          </article>
        </RevealAnimation>
      ))}
    </div>
  );
};

AffiliatesStep.displayName = 'AffiliatesStep';
export default AffiliatesStep;
