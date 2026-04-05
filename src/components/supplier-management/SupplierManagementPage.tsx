'use client';

import { useI18n } from '@/i18n/I18nProvider';
import ProductManagementPage from '@/components/product/ProductManagementPage';
import {
  Building2,
  Check,
  CircleGauge,
  ClipboardCheck,
  FileSpreadsheet,
  LayoutGrid,
  Mail,
  MessageSquareShare,
  PackageCheck,
  PackageSearch,
  RadioTower,
  Search,
  ShieldCheck,
  ShoppingCart,
  UserRound,
  Users,
  Network
} from 'lucide-react';

const featureIcons = [
  Building2,
  ShieldCheck,
  UserRound,
  FileSpreadsheet,
  ShoppingCart,
  Mail,
  RadioTower,
  ClipboardCheck,
  Users,
  PackageSearch,
  PackageCheck,
  MessageSquareShare,
  Check,
  Search,
  CircleGauge,
  LayoutGrid,
];

const SupplierHeroVisual = () => (
  <div className="group relative flex h-full min-h-[320px] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-teal-500/10 via-background to-teal-500/5 sm:min-h-[390px]">
    {/* Grid Background */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
    
    {/* Intersecting SVG connecting lines */}
    <svg className="absolute inset-0 size-full opacity-30 pointer-events-none stroke-teal-500 dark:stroke-teal-400" preserveAspectRatio="none">
       <line x1="25%" y1="33%" x2="50%" y2="50%" strokeWidth="1" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
       <line x1="50%" y1="50%" x2="75%" y2="25%" strokeWidth="1" strokeDasharray="4 4" />
       <line x1="50%" y1="50%" x2="30%" y2="80%" strokeWidth="1" strokeDasharray="4 4" />
       <line x1="50%" y1="50%" x2="80%" y2="70%" strokeWidth="1" strokeDasharray="4 4" />
    </svg>

    {/* Core Network Node (TalepNET Procurement OS) */}
    <div className="relative z-10 flex size-24 items-center justify-center rounded-full border border-teal-500/30 bg-white shadow-[0_0_40px_-10px_rgba(20,184,166,0.4)] transition-transform duration-700 group-hover:scale-110 dark:border-teal-500/20 dark:bg-background-5">
      <div className="absolute inset-2 animate-[spin_10s_linear_infinite] rounded-full border border-dashed border-teal-500/50" />
      <div className="flex size-14 items-center justify-center rounded-full bg-teal-500/10 text-teal-500">
        <Building2 size={28} />
      </div>
    </div>

    {/* Floating Supplier Card 1 (Top Left) */}
    <div className="absolute left-2 top-8 z-20 w-[180px] animate-[floating_5s_ease-in-out_infinite] rounded-xl border border-gray-200/60 bg-white/80 p-3 shadow-xl backdrop-blur-md transition-all duration-700 ease-out group-hover:-translate-y-4 group-hover:-rotate-3 dark:border-white/10 dark:bg-background-5/80 sm:left-10 sm:top-12">
      <div className="flex items-center gap-3">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-500">
          <ShieldCheck size={16} />
        </div>
        <div>
          <p className="text-xs font-bold text-heading">A Sınıfı Tedarikçi</p>
          <p className="mt-0.5 text-[10px] text-text">Doğrulanmış Üretici</p>
        </div>
      </div>
    </div>

    {/* Floating Supplier Card 2 (Bottom Right) */}
    <div className="absolute bottom-8 right-2 z-20 w-[190px] animate-[floating_6s_ease-in-out_infinite_reverse] rounded-xl border border-gray-200/60 bg-white/80 p-3 shadow-xl backdrop-blur-md transition-all duration-700 ease-out group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:rotate-6 dark:border-white/10 dark:bg-background-5/80 sm:bottom-12 sm:right-10">
      <div className="flex items-center gap-3">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-teal-500">
          <Network size={16} />
        </div>
        <div>
          <p className="text-xs font-bold text-heading">Tedarikçi Ağı</p>
          <p className="mt-0.5 text-[10px] text-text">245 Aktif Bağlantı</p>
        </div>
      </div>
    </div>

    {/* Connecting Dots */}
    <div className="absolute left-1/4 top-1/3 size-3 animate-[pulse_3s_ease-in-out_infinite] rounded-full bg-teal-500/50 shadow-[0_0_15px_rgba(20,184,166,0.6)]" />
    <div className="absolute bottom-[20%] left-[30%] size-2 rounded-full bg-teal-500/30" />
    <div className="absolute right-1/4 top-1/4 size-4 animate-[pulse_4s_ease-in-out_infinite] rounded-full bg-teal-500/40 shadow-[0_0_15px_rgba(20,184,166,0.5)]" />
    <div className="absolute bottom-[30%] right-[20%] size-2.5 rounded-full bg-teal-500/50" />
  </div>
);

export default function SupplierManagementPage() {
  const { messages } = useI18n();

  return (
    <ProductManagementPage
      page={messages.product.supplierManagement}
      flowId="supplier-workflows"
      featureIcons={featureIcons}
      theme="teal"
      heroVisual={<SupplierHeroVisual />}
    />
  );
}
