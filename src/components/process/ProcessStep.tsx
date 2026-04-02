import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';

interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}
const ProcessStep = () => {
  const processSteps: ProcessStep[] = [
    {
      id: 'create-account',
      stepNumber: 'Adım 1',
      title: 'Hesabınızı oluşturun',
      description: 'İhtiyaçlarınıza uygun bir plan seçin ve ücretsiz denemeyle platformu keşfetmeye başlayın.',
      icon: 'ns-shape-36',
      features: ['Hızlı kayıt süreci', 'Kurulum ücreti yok', 'Kontrol panelinize anında erişim'],
    },
    {
      id: 'customize-workspace',
      stepNumber: 'Adım 2',
      title: 'Çalışma alanınızı özelleştirin',
      description: 'Şablonları kullanarak ekibinizi, iş akışlarınızı, entegrasyonlarınızı ve markanızı ayarlayın.',
      icon: 'ns-shape-8',
      features: ['Neyi takip edeceğinizi seçin', 'Kullanıcı ekleyin ve izinleri ayarlayın', 'Favori araçlarınızı bağlayın'],
    },
    {
      id: 'automate-collaborate',
      stepNumber: 'Adım 3',
      title: 'Otomatikleştirin ve iş birliği yapın',
      description: 'Süreçlerinizi otomatikleştirerek ekibinizle sorunsuz bir şekilde iş birliği yapın.',
      icon: 'ns-shape-2',
      features: ['Sürükle-bırak otomasyon', 'Görev yönlendirme ve onaylar', 'Bildirimler ve gerçek zamanlı senkronizasyon'],
    },
    {
      id: 'create-account-2',
      stepNumber: 'Adım 4',
      title: 'Performansı analiz edin',
      description: 'Gerçek zamanlı veriler ve analizlerle süreçlerinizin performansını izleyin.',
      icon: 'ns-shape-36',
      features: ['Gerçek zamanlı raporlama', 'Özelleştirilebilir paneller', 'KPI takibi ve trend analizi'],
    },
    {
      id: 'customize-workspace-2',
      stepNumber: 'Adım 5',
      title: 'Ölçeklendirin ve büyütün',
      description: 'İşletmeniz büyüdükçe TalepNET ile süreçlerinizi ölçeklendirin.',
      icon: 'ns-shape-8',
      features: ['Sınırsız ölçeklenebilirlik', 'Gelişmiş entegrasyonlar', 'Kurumsal düzeyde güvenlik'],
    },
  ];

  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        <div className="mb-[72px] space-y-3 text-center">
          <RevealAnimation delay={0.3}>
            <h2 className="mx-auto max-w-[552px]">Approvals made clear at every step</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mx-auto max-w-[692px]">
              Başlamak kolay, ölçeklendirmek basit ve başarılı olmak sorunsuz. İster tek bir
              özellik ister tam paket olsun, TalepNET her adımda yanınızda.
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 gap-y-5 md:gap-8">
          {processSteps.map((step, index) => {
            return (
              <div
                key={step.id}
                className={cn('col-span-12 md:col-span-6 lg:col-span-4', index === 3 && 'lg:col-start-3')}>
                <RevealAnimation delay={0.3 + index * 0.1}>
                  <div className="bg-background-1 dark:bg-background-6 flex h-full flex-col space-y-8 rounded-[20px] p-5 sm:p-8">
                    <div className="flex items-center justify-between">
                      <p className="text-tagline-2 text-secondary dark:text-accent">{step.stepNumber}</p>
                      <span className={`${step.icon} text-secondary dark:text-accent text-[52px]`} />
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="sm:text-heading-5 text-heading-6 font-normal">{step.title}</h3>
                      <p>{step.description}</p>
                      <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside list-disc space-y-2 font-normal">
                        {step.features.map((feature, featureIndex: number) => (
                          <li key={featureIndex + 1}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </RevealAnimation>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessStep;
