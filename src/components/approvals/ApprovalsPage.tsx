'use client';

import { useI18n } from '@/i18n/I18nProvider';
import ProductWorkflowPage from '@/components/product/ProductWorkflowPage';
import { CircleDot, FileSearch, History, Route, Settings2, ShieldCheck, Check, X } from 'lucide-react';

const featureIcons = [Settings2, Route, FileSearch, CircleDot, History, ShieldCheck];

const workflowFeatures = [
  [
    {
      title: 'Esnek Onay Kuralları',
      desc: 'Tutar, departman veya kategori bazlı dinamik onay senaryoları tasarlayın.',
    },
    {
      title: 'Bütçe Kontrolü',
      desc: 'Onay aşamasında bütçe aşımını anlık olarak denetleyin ve limitleri koruyun.',
    },
    {
      title: 'Mobil Onaylar',
      desc: 'Yöneticiler nerede olursa olsun cep telefonundan tek tıkla onay verebilir.',
    },
  ],
  [
    {
      title: 'Süreç Analitiği',
      desc: 'Onayların hangi aşamada ne kadar beklediğini gösteren darboğaz analizleri.',
    },
    {
      title: 'Çok Kategorili Yapı',
      desc: 'Her talep kategorisi için bağımsız onay hiyerarşisi (Örn: IT, İdari, Üretim).',
    },
    {
      title: 'Geri Bildirimler',
      desc: 'Reddedilen taleplere zorunlu açıklama girilerek süreçleri şeffaflaştırın.',
    },
    {
      title: 'Vekalet Yönetimi',
      desc: 'İzinli olduğunuzda yetkilerinizi geçici olarak başka bir yöneticiye devredin.',
    },
  ],
  [
    {
      title: 'Limit Bazlı Rota',
      desc: 'Belli bir tutarı aşan talepler otomatik olarak CEO veya Finans onayına gider.',
    },
    {
      title: 'Denetim İzi (Audit)',
      desc: 'Süreçteki tüm adımlar, zaman damgasıyla değiştirilemez log kayıtlarında tutulur.',
    },
    {
      title: 'Mail Entegrasyonu',
      desc: 'Sisteme girmeden direkt e-posta üzerinden Gelen Kutusu ile Talepleri onaylayın.',
    },
  ]
];

const ApprovalsHeroVisual = () => {
  return (
    <div 
      className="relative h-full w-full min-h-[450px] lg:min-h-[600px] overflow-hidden flex items-center justify-center p-4"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
      }}
    >
      <style>{`
        @keyframes customFloatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-40px); }
        }
        @keyframes customFloatDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(40px); }
        }
      `}</style>
      
      {/* 3-Column Staggered Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto items-start transform md:-rotate-2 md:scale-105">
        
        {/* Column 1 */}
        <div 
          className="flex flex-col gap-4 md:gap-5 md:translate-y-12"
          style={{ animation: 'customFloatUp 12s ease-in-out infinite' }}
        >
          {workflowFeatures[0].map((card, i) => (
            <div key={i} className="bg-white/80 dark:bg-background-8/80 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-sm border border-stroke-2 dark:border-stroke-7 transition-all hover:shadow-md hover:-translate-y-1">
              <h3 className="font-semibold text-secondary dark:text-accent mb-2 text-sm md:text-base">{card.title}</h3>
              <p className="text-secondary/70 dark:text-accent/70 text-xs md:text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Column 2 (Middle is shifted up relative to others) */}
        <div 
          className="hidden md:flex flex-col gap-4 md:gap-5 md:-translate-y-8"
          style={{ animation: 'customFloatDown 14s ease-in-out infinite' }}
        >
          {workflowFeatures[1].map((card, i) => (
            <div key={i} className="bg-white/80 dark:bg-background-8/80 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-sm border border-stroke-2 dark:border-stroke-7 transition-all hover:shadow-md hover:-translate-y-1">
              <h3 className="font-semibold text-secondary dark:text-accent mb-2 text-sm md:text-base">{card.title}</h3>
              <p className="text-secondary/70 dark:text-accent/70 text-xs md:text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Column 3 */}
        <div 
          className="hidden lg:flex flex-col gap-4 md:gap-5 md:translate-y-20"
          style={{ animation: 'customFloatUp 16s ease-in-out infinite' }}
        >
          {workflowFeatures[2].map((card, i) => (
            <div key={i} className="bg-white/80 dark:bg-background-8/80 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-sm border border-stroke-2 dark:border-stroke-7 transition-all hover:shadow-md hover:-translate-y-1">
              <h3 className="font-semibold text-secondary dark:text-accent mb-2 text-sm md:text-base">{card.title}</h3>
              <p className="text-secondary/70 dark:text-accent/70 text-xs md:text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

const ApprovalsIntroVisual = () => {
  return (
    <div 
      className="relative w-full h-full min-h-[320px] md:min-h-[400px] overflow-hidden bg-transparent isolate flex items-end justify-center pb-8 p-4 rounded-b-[28px] md:rounded-r-[28px]"
    >

      {/* Floating Request Card */}
      <div className="relative z-10 w-full max-w-sm bg-white dark:bg-background-7 backdrop-blur-xl border border-stroke-2 dark:border-stroke-7 rounded-[24px] p-6 sm:p-8 animate-[customFloatUp_8s_ease-in-out_infinite]">
        
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold flex flex-shrink-0 items-center justify-center text-sm border border-emerald-500/20">
              MK
            </div>
            <div>
              <p className="text-sm font-semibold text-secondary dark:text-accent">Merve K.</p>
              <p className="text-[11px] text-secondary/60 dark:text-accent/60">Pazarlama Direktörü</p>
            </div>
          </div>
          <span className="bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-orange-100 dark:border-orange-500/20 flex-shrink-0 whitespace-nowrap">
            Bekliyor
          </span>
        </div>

        <div className="mb-6">
          <h4 className="text-[15px] font-semibold text-secondary dark:text-accent mb-1.5">Yeni Ajans Bütçesi</h4>
          <p className="text-xs text-secondary/70 dark:text-accent/70 mb-4 leading-relaxed">Q3 dönemi dijital pazarlama kampanyaları için harcama talebi.</p>
          <div className="bg-background-3 dark:bg-background-7 rounded-xl p-3 flex justify-between items-center border border-stroke-2 dark:border-stroke-7">
            <span className="text-xs font-medium text-secondary/80 dark:text-accent/80">Tutar</span>
            <span className="text-sm font-semibold text-secondary dark:text-accent tracking-tight">₺150.000,00</span>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 py-2.5 rounded-xl border border-stroke-3 dark:border-stroke-7 bg-white dark:bg-background-8 hover:bg-slate-50 dark:hover:bg-background-7 text-xs font-semibold text-secondary dark:text-accent transition-colors flex items-center justify-center gap-1.5 group cursor-default">
            <X className="size-3.5 text-secondary/50 group-hover:text-red-500 transition-colors" /> Reddet
          </button>
          <button className="flex-1 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold shadow-sm shadow-emerald-500/20 transition-all flex items-center justify-center gap-1.5 cursor-default">
            <Check className="size-3.5" /> Onayla
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default function ApprovalsPage() {
  const { messages } = useI18n();

  return (
    <ProductWorkflowPage 
      page={messages.product.approvals} 
      featureIcons={featureIcons} 
      heroVisual={<ApprovalsHeroVisual />}
      introVisual={<ApprovalsIntroVisual />}
    />
  );
}
