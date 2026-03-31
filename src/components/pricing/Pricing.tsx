import { CheckIcon } from '@/icons';
import { cn } from '@/utils/cn';
import gradientImg from '@public/images/ns-img-496.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

type PlanId = 'essential' | 'advanced' | 'enterprise';
type FeatureId =
  | 'users'
  | 'purchaseRequests'
  | 'supplierManagement'
  | 'quoteCollection'
  | 'orderTracking'
  | 'approvalWorkflow'
  | 'budgetControl'
  | 'reporting'
  | 'apiAccess'
  | 'erpIntegration'
  | 'customRoles'
  | 'prioritySupport'
  | 'dataExport'
  | 'auditLog'
  | 'sla'
  | 'dedicatedManager';

type PricingPlan = {
  id: PlanId;
  title: string;
  priceLabel: string;
  description: string;
  limit: string;
  delay: number;
  variant: 'standard' | 'highlight';
};

type FeatureRow = {
  id: FeatureId;
  label: string;
  availability: Record<PlanId, boolean>;
};

const featureMatrix: FeatureRow[] = [
  {
    id: 'users',
    label: 'Kullanıcı sayısı',
    availability: { essential: true, advanced: true, enterprise: true },
  },
  {
    id: 'purchaseRequests',
    label: 'Satın alma talepleri',
    availability: { essential: true, advanced: true, enterprise: true },
  },
  {
    id: 'supplierManagement',
    label: 'Tedarikçi yönetimi',
    availability: { essential: true, advanced: true, enterprise: true },
  },
  {
    id: 'quoteCollection',
    label: 'Online teklif toplama',
    availability: { essential: false, advanced: true, enterprise: true },
  },
  {
    id: 'orderTracking',
    label: 'Sipariş takibi',
    availability: { essential: true, advanced: true, enterprise: true },
  },
  {
    id: 'approvalWorkflow',
    label: 'Özel onay iş akışları',
    availability: { essential: false, advanced: true, enterprise: true },
  },
  {
    id: 'budgetControl',
    label: 'Bütçe kontrolü',
    availability: { essential: false, advanced: true, enterprise: true },
  },
  {
    id: 'reporting',
    label: 'Detaylı raporlama',
    availability: { essential: false, advanced: true, enterprise: true },
  },
  {
    id: 'apiAccess',
    label: 'API erişimi',
    availability: { essential: false, advanced: false, enterprise: true },
  },
  {
    id: 'erpIntegration',
    label: 'ERP / muhasebe entegrasyonu',
    availability: { essential: false, advanced: false, enterprise: true },
  },
  {
    id: 'customRoles',
    label: 'Özel kullanıcı rolleri',
    availability: { essential: false, advanced: true, enterprise: true },
  },
  {
    id: 'prioritySupport',
    label: 'Öncelikli destek',
    availability: { essential: false, advanced: true, enterprise: true },
  },
  {
    id: 'dataExport',
    label: 'Veri dışa aktarma',
    availability: { essential: true, advanced: true, enterprise: true },
  },
  {
    id: 'auditLog',
    label: 'Denetim günlüğü',
    availability: { essential: false, advanced: false, enterprise: true },
  },
  {
    id: 'sla',
    label: 'SLA garantisi',
    availability: { essential: false, advanced: false, enterprise: true },
  },
  {
    id: 'dedicatedManager',
    label: 'Özel hesap yöneticisi',
    availability: { essential: false, advanced: false, enterprise: true },
  },
];

const pricingPlans: PricingPlan[] = [
  {
    id: 'essential',
    title: 'Başlangıç',
    priceLabel: 'Ücretsiz',
    description: 'Küçük ekipler için ücretsiz plan',
    limit: '5 kullanıcıya kadar',
    delay: 0.5,
    variant: 'standard',
  },
  {
    id: 'advanced',
    title: 'Profesyonel',
    priceLabel: '₺1.499',
    description: 'Büyüyen işletmeler için gelişmiş plan',
    limit: '25 kullanıcıya kadar',
    delay: 0.6,
    variant: 'highlight',
  },
  {
    id: 'enterprise',
    title: 'Kurumsal',
    priceLabel: 'Özel Teklif',
    description: 'Büyük kurumlara özel çözümler',
    limit: 'Sınırsız',
    delay: 0.7,
    variant: 'standard',
  },
];

const Pricing = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="pt-32 pb-20 sm:pt-36 md:pt-42 md:pb-[100px] lg:pb-[150px] xl:pt-[180px] xl:pb-[200px]">
        <div className="bg-background-1 mx-auto w-full max-w-[1440px] space-y-[70px] rounded-2xl px-5 py-[100px] md:px-6 lg:px-10 xl:px-16 dark:bg-black">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-cyan-v2">Fiyatlandırma</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2>İhtiyaçlarınıza en uygun planı seçin.</h2>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-12 gap-y-8">
            <RevealAnimation delay={0.4}>
              <div className="col-span-12 md:col-span-6 xl:col-span-3">
                <div>
                  <div className="hidden h-[201px] w-[290px] md:block" />
                  <div className="space-y-[10px]">
                    <h3 className="text-heading-6">Neler dahil</h3>
                    <ul>
                      {featureMatrix.map((feature) => (
                        <li key={feature.id} className="border-b-stroke-4 dark:border-stroke-7 h-14 border-b px-0 py-4">
                          <p className="text-secondary/60 dark:text-accent/60 text-tagline-1 font-normal">
                            {feature.label}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </RevealAnimation>

            {pricingPlans.map((plan) => {
              const isHighlight = plan.variant === 'highlight';
              const isAdvanced = plan.id === 'advanced';

              return (
                <RevealAnimation key={plan.id} delay={plan.delay}>
                  <div className="col-span-12 md:col-span-6 xl:col-span-3">
                    <div>
                      {isHighlight ? (
                        <div className="relative z-10 px-4">
                          <div className="bg-secondary relative overflow-hidden rounded-[20px] px-6 py-8">
                            <div className="absolute -top-28 -right-20 z-20 h-full w-full">
                              <Image src={gradientImg} alt="pricing bg" priority />
                            </div>
                            <div className="relative z-30 space-y-8">
                              <div>
                                <p
                                  className={cn(
                                    'text-tagline-1 mb-3 font-medium',
                                    isHighlight ? 'text-accent/60' : 'text-secondary/60 dark:text-accent/60',
                                  )}>
                                  {plan.title}
                                </p>
                                <h3
                                  className={cn(
                                    'text-heading-5 font-normal',
                                    isHighlight ? 'text-accent' : 'text-secondary dark:text-accent/60',
                                  )}>
                                  {plan.priceLabel}
                                  {plan.id === 'advanced' && <span className="text-tagline-1 font-normal"> /ay</span>}
                                </h3>
                                <p
                                  className={cn(
                                    isHighlight ? 'text-accent/60' : 'text-secondary/60 dark:text-accent/60',
                                  )}>
                                  {plan.description}
                                </p>
                              </div>
                              <Link
                                href="/contact-us"
                                className={cn(
                                  'btn btn-md w-full first-letter:uppercase before:content-none',
                                  isAdvanced
                                    ? 'btn-primary hover:btn-white dark:hover:btn-accent'
                                    : 'btn-white hover:btn-primary dark:btn-white-dark',
                                )}>
                                Ücretsiz Başlayın
                              </Link>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="px-4">
                          <div className="bg-background-3 dark:bg-background-8 space-y-8 rounded-[20px] px-6 py-8">
                            <div>
                              <p
                                className={cn(
                                  'text-tagline-1 mb-3 font-medium',
                                  isHighlight ? 'text-accent/60' : 'text-secondary/60 dark:text-accent/60',
                                )}>
                                {plan.title}
                              </p>
                              <h3
                                className={cn(
                                  'text-heading-5 font-normal',
                                  isHighlight ? 'text-accent' : 'text-secondary dark:text-accent/60',
                                )}>
                                {plan.priceLabel}
                              </h3>
                              <p
                                className={cn(
                                  isHighlight ? 'text-accent/60' : 'text-secondary/60 dark:text-accent/60',
                                )}>
                                {plan.description}
                              </p>
                            </div>
                            <Link
                              href="/contact-us"
                              className={cn(
                                'btn btn-md w-full first-letter:uppercase before:content-none',
                                isAdvanced
                                  ? 'btn-primary hover:btn-white dark:hover:btn-accent'
                                  : 'btn-white hover:btn-primary dark:btn-white-dark',
                              )}>
                              {plan.id === 'enterprise' ? 'İletişime Geçin' : 'Ücretsiz Başlayın'}
                            </Link>
                          </div>
                        </div>
                      )}
                      <div className="flex flex-col space-y-8 rounded-[20px]">
                        <ul>
                          <li className="border-b-stroke-4 dark:border-stroke-7 h-14 border-b px-6 py-4 text-center">
                            <p className="text-secondary/60 dark:text-accent/60 font-medium">{plan.limit}</p>
                          </li>
                          {featureMatrix.map((feature) => {
                            const isAvailable = feature.availability[plan.id];
                            return (
                              <li
                                key={`${plan.id}-${feature.id}`}
                                className="border-b-stroke-4 dark:border-stroke-7 flex h-14 items-center justify-center border-b px-6 py-4 text-center">
                                <span
                                  className={cn(
                                    'flex size-5 items-center justify-center rounded-full transition-colors',
                                    isAvailable ? 'bg-secondary dark:bg-accent' : 'bg-secondary/30 dark:bg-accent/40',
                                  )}>
                                  <CheckIcon className={cn(!isAvailable && 'opacity-50')} />
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                        <div
                          className={cn(
                            'btn btn-primary hover:btn-white-dark dark:hover:btn-accent btn-md mx-auto w-fit',
                            isHighlight && 'text-center',
                          )}>
                          <Link href="/contact-us">
                            <span>{plan.id === 'enterprise' ? 'İletişime Geçin' : 'Ücretsiz Başlayın'} </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

Pricing.displayName = 'Pricing';
export default Pricing;
