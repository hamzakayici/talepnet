'use client';

import { useTranslations } from '@/i18n/useTranslations';
import { ReactBitsFolder } from '../ui/ReactBitsFolder';
import { FileText, CheckCircle2, TrendingUp, ShoppingCart, Truck, ShieldCheck, Settings, Check } from 'lucide-react';
import RevealAnimation from '../animation/RevealAnimation';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
}

const FeatureV2 = () => {
  const t = useTranslations('home');
  const featuresData: FeatureItem[] = [
    {
      id: 1,
      title: t('featureV2.items.0.title'),
      description: t('featureV2.items.0.description'),
    },
    {
      id: 2,
      title: t('featureV2.items.1.title'),
      description: t('featureV2.items.1.description'),
    },
    {
      id: 3,
      title: t('featureV2.items.2.title'),
      description: t('featureV2.items.2.description'),
    },
  ];

  return (
    <RevealAnimation delay={0.1}>
      <section className="bg-background-1 dark:bg-background-6 py-[100px]">
        <div className="main-container">
          <div className="mb-10 space-y-3 text-center md:mb-[70px]">
            <RevealAnimation delay={0.1}>
              <h2>{t('featureV2.title')}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>{t('featureV2.description')}</p>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-12 items-center justify-items-center gap-y-14 md:gap-10 lg:gap-14">
            {featuresData.map((feature, index) => {
              const colSpanClass = 'col-span-12 md:col-span-6 lg:col-span-4';
              const maxWidthClass =
                index === 0 ? 'md:max-w-[227px]' : index === 1 ? 'md:max-w-[245px]' : 'md:max-w-[261px]';

              return (
                <RevealAnimation key={feature.id} delay={0.3 + index * 0.1}>
                  <div className={colSpanClass}>
                    <div className="space-y-6 md:space-y-8 lg:space-y-11">
                      <div className="mx-auto flex w-full justify-center pb-2 pt-24 sm:mx-0 sm:max-w-[393px]">
                        <ReactBitsFolder 
                           color={index === 0 ? '#9875f7' : index === 1 ? '#ff9a70' : '#4dc4ff'} 
                           size={2.5} 
                           items={[
                             // Kağıt 1 (Sola Açılan): Premium Döküman ve Form Temsili
                             <div key="1" className="flex h-full w-full flex-col justify-between overflow-hidden rounded-[4px] bg-gradient-to-b from-white to-[#fafafa] p-2 ring-1 ring-black/5 flex-col shadow-sm dark:from-gray-800 dark:to-gray-900 dark:ring-white/10">
                               {index === 0 && (
                                 <>
                                   <div className="flex items-center gap-1.5 border-b border-gray-100 pb-1.5 dark:border-gray-700">
                                     <FileText className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                                     <span className="text-[6px] font-black tracking-wider text-gray-800 dark:text-gray-200">TALEP FORMU</span>
                                   </div>
                                   <div className="mt-1.5 space-y-1">
                                     <div className="flex items-center justify-between rounded-[3px] bg-gray-50 p-1 dark:bg-gray-700/50">
                                        <div className="h-1 w-10 rounded-full bg-gray-200 dark:bg-gray-600" />
                                        <div className="h-1 w-4 rounded-full bg-gray-300 dark:bg-gray-500" />
                                     </div>
                                     <div className="flex items-center justify-between rounded-[3px] bg-gray-50 p-1 dark:bg-gray-700/50">
                                        <div className="h-1 w-12 rounded-full bg-gray-200 dark:bg-gray-600" />
                                        <div className="h-1 w-5 rounded-full bg-gray-300 dark:bg-gray-500" />
                                     </div>
                                   </div>
                                   <div className="mt-auto h-1.5 w-full rounded-full bg-purple-100 dark:bg-purple-900/30" />
                                 </>
                               )}
                               {index === 1 && (
                                 <>
                                   <div className="flex items-center justify-between border-b border-orange-100 pb-1.5 dark:border-orange-900/30">
                                     <div className="flex items-center gap-1">
                                       <ShoppingCart className="h-3 w-3 text-orange-500" />
                                       <span className="text-[6px] font-black tracking-wider text-orange-900 dark:text-orange-400">PO #4029</span>
                                     </div>
                                     <span className="rounded-[2px] bg-orange-100 px-1 py-0.5 text-[5px] font-bold text-orange-600 dark:bg-orange-500/20">SENT</span>
                                   </div>
                                   <div className="mt-2 flex flex-col gap-1.5">
                                      <div className="h-1.5 w-full rounded-sm bg-orange-50 dark:bg-orange-500/10" />
                                      <div className="h-1.5 w-5/6 rounded-sm bg-orange-50 dark:bg-orange-500/10" />
                                      <div className="h-1.5 w-3/4 rounded-sm bg-orange-50 dark:bg-orange-500/10" />
                                   </div>
                                 </>
                               )}
                               {index === 2 && (
                                 <div className="flex h-full flex-col items-center justify-center gap-1.5 bg-blue-50/50 dark:bg-blue-900/10 p-1">
                                   <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-500/20">
                                     <ShieldCheck className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                                   </div>
                                   <div className="h-1 w-12 rounded-full bg-blue-200 dark:bg-blue-800/50" />
                                   <div className="h-1 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30" />
                                 </div>
                               )}
                             </div>,

                             // Kağıt 2 (Sağa Açılan): Özet Grafikler ve Metrikler
                             <div key="2" className="flex h-full w-full flex-col justify-between overflow-hidden rounded-[4px] bg-white/95 p-2 shadow-sm drop-shadow-sm backdrop-blur-md dark:bg-gray-800/95 ring-1 ring-black/5 dark:ring-white/10">
                               {index === 0 && (
                                 <>
                                   <div className="flex flex-col gap-0.5">
                                     <p className="text-[6px] font-bold text-gray-500 dark:text-gray-400">AKTİF TALEPLER</p>
                                     <p className="text-sm font-black text-purple-600 dark:text-purple-400">124</p>
                                   </div>
                                   <div className="flex flex-col gap-1 mt-1">
                                      <div className="flex items-center gap-1.5">
                                        <div className="h-1 w-1 rounded-full bg-green-500" />
                                        <div className="h-1 w-full rounded-full bg-gray-100 dark:bg-gray-700">
                                          <div className="h-full w-[70%] rounded-full bg-green-500" />
                                        </div>
                                      </div>
                                      <div className="flex items-center gap-1.5">
                                        <div className="h-1 w-1 rounded-full bg-yellow-500" />
                                        <div className="h-1 w-full rounded-full bg-gray-100 dark:bg-gray-700">
                                          <div className="h-full w-[20%] rounded-full bg-yellow-500" />
                                        </div>
                                      </div>
                                   </div>
                                 </>
                               )}
                               {index === 1 && (
                                 <div className="flex h-full flex-col justify-end">
                                   <div className="flex items-center gap-1 mb-2">
                                     <TrendingUp className="h-3 w-3 text-orange-500" />
                                     <p className="text-[6px] font-bold text-gray-600 dark:text-gray-300">AYLIK HARCAMA</p>
                                   </div>
                                   <div className="flex flex-1 items-end gap-1 border-b border-gray-100 dark:border-gray-700 pb-0.5">
                                     <div className="w-1/4 rounded-t-[1px] bg-gray-200 dark:bg-gray-600" style={{ height: '30%' }} />
                                     <div className="w-1/4 rounded-t-[1px] bg-orange-300 dark:bg-orange-700" style={{ height: '60%' }} />
                                     <div className="w-1/4 rounded-t-[1px] bg-gray-200 dark:bg-gray-600" style={{ height: '40%' }} />
                                     <div className="w-1/4 rounded-t-[1px] bg-orange-500" style={{ height: '85%' }} />
                                   </div>
                                 </div>
                               )}
                               {index === 2 && (
                                 <div className="flex h-full flex-col items-center justify-center gap-1.5">
                                   <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-blue-50 dark:border-blue-900/30">
                                     <div className="absolute inset-0 rounded-full border-[3px] border-blue-500 border-l-transparent border-b-transparent transform rotate-45" />
                                     <span className="text-[7px] font-bold text-blue-600 dark:text-blue-400">%92</span>
                                   </div>
                                   <p className="text-[6px] font-bold text-center text-gray-500 dark:text-gray-400">ONAY HIZI</p>
                                 </div>
                               )}
                             </div>,

                             // Kağıt 3 (Yukarı Açılan): Lojistik ve Alt İşlemler
                             <div key="3" className="flex h-full w-full flex-col justify-between overflow-hidden rounded-[4px] bg-[#f8f9fa] p-2 ring-1 ring-black/5 dark:bg-gray-900 dark:ring-white/10">
                               {index === 0 && (
                                 <div className="space-y-2">
                                    <div className="flex items-center gap-1.5 bg-white p-1 rounded-[3px] shadow-sm dark:bg-gray-800">
                                      <div className="h-4 w-4 bg-purple-100 dark:bg-purple-500/20 rounded flex items-center justify-center">
                                        <Settings className="w-2.5 h-2.5 text-purple-600 dark:text-purple-400" />
                                      </div>
                                      <div className="space-y-0.5 w-full">
                                        <div className="h-1 w-[80%] bg-gray-200 dark:bg-gray-600 rounded-full" />
                                        <div className="h-[3px] w-[50%] bg-gray-100 dark:bg-gray-700 rounded-full" />
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-white p-1 rounded-[3px] shadow-sm dark:bg-gray-800 opacity-60">
                                      <div className="h-4 w-4 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center" />
                                      <div className="space-y-0.5 w-full">
                                        <div className="h-1 w-[70%] bg-gray-200 dark:bg-gray-600 rounded-full" />
                                      </div>
                                    </div>
                                 </div>
                               )}
                               {index === 1 && (
                                 <div className="flex h-full flex-col justify-center gap-1.5">
                                   <div className="flex items-center justify-between border-b border-gray-200 pb-1 dark:border-gray-700">
                                      <div className="flex items-center gap-1">
                                        <Truck className="w-3 h-3 text-gray-600 dark:text-gray-300" />
                                        <div className="h-1 w-8 bg-gray-300 dark:bg-gray-600 rounded-full" />
                                      </div>
                                      <CheckCircle2 className="w-2.5 h-2.5 text-green-500" />
                                   </div>
                                   <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-1">
                                        <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-gray-700" />
                                        <div className="h-1 w-10 bg-gray-200 dark:bg-gray-700 rounded-full" />
                                      </div>
                                   </div>
                                 </div>
                               )}
                               {index === 2 && (
                                 <div className="flex flex-col gap-1.5 justify-center h-full">
                                    <div className="flex items-center gap-1.5">
                                      <div className="w-3 h-3 rounded bg-blue-500 flex items-center justify-center">
                                        <Check className="w-2 h-2 text-white" />
                                      </div>
                                      <div className="h-1.5 w-12 bg-gray-200 dark:bg-gray-700 rounded-full" />
                                    </div>
                                    <div className="ml-1.5 h-2 w-[1px] bg-gray-300 dark:bg-gray-600" />
                                    <div className="flex items-center gap-1.5">
                                      <div className="w-3 h-3 rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center" />
                                      <div className="h-1.5 w-16 bg-gray-100 dark:bg-gray-800 rounded-full" />
                                    </div>
                                 </div>
                               )}
                             </div>
                           ]}
                        />
                      </div>
                      <div className="space-y-2 text-left">
                        <h3 className="md:text-heading-5 text-heading-6">{feature.title}</h3>
                        <p className={maxWidthClass}>{feature.description}</p>
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

export default FeatureV2;
