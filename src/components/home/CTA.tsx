'use client';

import { useTranslations } from '@/i18n/useTranslations';
import { CheckCircle2, TrendingUp } from 'lucide-react';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface CTAFeature {
  id: number;
  text: string;
}

const CTA = () => {
  const t = useTranslations('home');
  const ctaFeatures: CTAFeature[] = [
    {
      id: 1,
      text: t('cta.items.0'),
    },
    {
      id: 2,
      text: t('cta.items.1'),
    },
    {
      id: 3,
      text: t('cta.items.2'),
    },
  ];

  return (
    <RevealAnimation delay={0.1}>
      <section className="py-20 md:py-[100px] lg:py-[150px]">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-16 md:gap-16">
            <div className="col-span-12 md:col-span-6">
              <div className="mb-11 space-y-8 md:mb-14">
                <RevealAnimation delay={0.1}>
                  <h2 className="max-w-[400px] lg:max-w-[595px]">{t('cta.title')}</h2>
                </RevealAnimation>
                <ul className="space-y-2">
                  {ctaFeatures.map((feature, index) => (
                    <RevealAnimation key={feature.id} delay={0.2 + index * 0.1}>
                      <li className="flex items-center gap-3">
                        <span className="bg-secondary dark:bg-accent flex size-[18px] shrink-0 items-center justify-center rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={8}
                            viewBox="0 0 10 8"
                            fill="none"
                            className="shrink-0">
                            <path
                              d="M4.31661 7.00605L9.74905 1.67144C10.0836 1.3459 10.0836 0.819702 9.74905 0.494158C9.41446 0.168614 8.87363 0.168614 8.53904 0.494158L3.7116 5.24012L1.46096 3.03807C1.12636 2.71253 0.585538 2.71253 0.250945 3.03807C-0.0836483 3.36362 -0.0836483 3.88982 0.250945 4.21536L3.1066 7.00605C3.27347 7.16841 3.49253 7.25 3.7116 7.25C3.93067 7.25 4.14974 7.16841 4.31661 7.00605Z"
                              className="dark:fill-secondary fill-white"
                            />
                          </svg>
                        </span>
                        <span className="sm:text-tagline-1 text-tagline-2 text-secondary/60 dark:text-accent/60 font-normal">
                          {feature.text}
                        </span>
                      </li>
                    </RevealAnimation>
                  ))}
                </ul>
              </div>
              <RevealAnimation delay={0.5}>
                <div>
                  <LinkButton
                    href="https://app.talepnet.com/sign-up"
                    className="btn btn-secondary dark:btn-accent md:btn-xl btn-lg hover:btn-primary mx-auto w-[90%] md:mx-0 md:w-auto">
                    {t('cta.button')}
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 md:col-span-6">
              <RevealAnimation delay={0.3} direction="left">
                <div className="perspective-[1000px] w-full max-w-[597px] lg:ml-auto">
                  
                  {/* Animasyonlu ve Etkileşimli Kutu */}
                  <div className="group relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-3xl border border-gray-200/60 bg-gradient-to-br from-primary-500/5 via-white/50 to-white shadow-[0_0_50px_-15px_rgba(99,102,241,0.2)] transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(99,102,241,0.3)] dark:border-white/10 dark:bg-background-6 dark:from-primary-500/10 dark:via-background-6 dark:to-background">
                    
                    {/* Arka Plan Izgarası (Grid) */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-background dark:via-transparent" />

                    {/* Merkezdeki Marka İkonu */}
                    <div className="relative z-10 flex size-28 items-center justify-center rounded-full border border-primary-500/20 bg-white shadow-2xl transition-transform duration-700 group-hover:scale-110 dark:border-white/10 dark:bg-background-5">
                      <div className="absolute inset-2 rounded-full border border-dashed border-primary-500/40 animate-[spin_20s_linear_infinite]" />
                      <div className="flex size-14 items-center justify-center rounded-full bg-primary-500/10 text-primary-500">
                        <svg className="size-8 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                      </div>
                    </div>

                    {/* Yüzen Kart 1: Satın Alma Onayı */}
                    <div className="absolute left-4 top-10 z-20 w-[240px] rounded-2xl border border-gray-200/50 bg-white/80 p-4 shadow-xl backdrop-blur-md transition-all duration-1000 ease-out group-hover:-translate-y-6 group-hover:-rotate-3 dark:border-white/10 dark:bg-background-5/80 sm:left-10">
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                          <CheckCircle2 size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-heading">Sipariş Onaylandı</p>
                          <p className="mt-0.5 text-xs text-text">Tedarikçi: OfficePro</p>
                        </div>
                      </div>
                    </div>

                    {/* Yüzen Kart 2: İstatistikler */}
                    <div className="absolute bottom-12 right-4 z-30 w-[200px] rounded-2xl border border-gray-200/50 bg-white/80 p-4 shadow-xl backdrop-blur-md transition-all duration-1000 ease-out group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:rotate-6 dark:border-white/10 dark:bg-background-5/80 sm:right-10">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <div className="flex size-8 items-center justify-center rounded-full bg-primary-500/10 text-primary-500">
                            <TrendingUp size={16} />
                          </div>
                          <span className="text-xs font-bold text-green-500">+14% Tasarruf</span>
                        </div>
                        <div>
                          <p className="text-xs text-text">Bütçe Verimliliği</p>
                          <p className="text-base font-extrabold text-heading">₺ 142.000</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default CTA;
