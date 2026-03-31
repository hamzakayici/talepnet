'use client';
import {
  ExploreCompanyIcon,
  ExplorePricingAndAccountIcon,
  ExploreProductIcon,
  ExploreResourcesIcon,
} from '@/icons/menu-icon';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import type { ComponentType } from 'react';
import HoverBgTransform from '../hover-bg-transform';

type ExploreItem = {
  label: string;
  href: string;
};

type ExploreSection = {
  title: string;
  items: ExploreItem[];
  cta: {
    href: string;
    icon: ComponentType;
    title: string;
    description: string;
  };
};

const exploreSections: ExploreSection[] = [
  {
    title: 'Şirket',
    items: [
      { label: 'Hakkımızda', href: '/about' },
      { label: 'Ekibimiz', href: '/team' },
      { label: 'Kariyer', href: '/career' },
      { label: 'Başarı Hikayeleri', href: '/case-study' },
    ],
    cta: {
      href: '/about',
      icon: ExploreCompanyIcon,
      title: 'Şirket',
      description: 'Misyonumuzu keşfedin',
    },
  },
  {
    title: 'Ürün',
    items: [
      { label: 'Özellikler', href: '/features' },
      { label: 'Entegrasyonlar', href: '/integration' },
      { label: 'Süreç', href: '/process' },
      { label: 'Basın', href: '/press' },
    ],
    cta: {
      href: '/services',
      icon: ExploreProductIcon,
      title: 'Ürün',
      description: 'Neler yapabileceğinizi keşfedin',
    },
  },
  {
    title: 'Kaynaklar',
    items: [
      { label: 'Blog', href: '/blog' },
      { label: 'Dokümantasyon', href: '/documentation' },
      { label: 'SSS', href: '/faq' },
      { label: 'Eğitimler', href: '/tutorial' },
    ],
    cta: {
      href: '/blog',
      icon: ExploreResourcesIcon,
      title: 'Kaynaklar',
      description: 'Faydalı içeriklere göz atın',
    },
  },
  {
    title: 'Fiyatlandırma & Hesap',
    items: [
      { label: 'Planlar', href: '/pricing' },
      { label: 'Giriş Yap', href: '/login' },
      { label: 'Kayıt Ol', href: '/signup' },
    ],
    cta: {
      href: '/pricing',
      icon: ExplorePricingAndAccountIcon,
      title: 'Fiyatlandırma & Hesap',
      description: 'Abonelik planlarını görüntüleyin',
    },
  },
];

const ExploreMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) => {
  const handleClose = () => setMenuDropdownId(null);

  return (
    <div>
      <div
        className={cn(
          'pointer-events-none fixed top-full left-1/2 z-40 h-3 w-full -translate-x-1/2 bg-transparent opacity-0 lg:w-[1290px]',
          menuDropdownId === 'explore-mega-menu' ? '!pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="explore-mega-menu"
        className={cn(
          'dark:bg-background-6 border-stroke-1/50 dark:border-background-7 pointer-events-none fixed top-full left-1/2 z-50 mt-2 w-full -translate-x-1/2 rounded-[20px] border bg-white px-6 pt-3 pb-6 opacity-0 transition-all duration-300 lg:w-[1290px]',
          menuDropdownId === 'explore-mega-menu'
            ? '!pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        <div className="grid grid-cols-12 gap-x-6 gap-y-6">
          {exploreSections.map(({ title, items, cta }) => (
            <div className="col-span-3" key={title}>
              <div className="flex h-full flex-col">
                <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 p-3 font-medium">{title}</p>
                <ul className="my-8">
                  {items.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} onClick={handleClose} className="group relative block p-3">
                        <HoverBgTransform className="group-hover:opacity-100" />
                        <span className="text-tagline-1 text-secondary dark:text-accent relative z-10 font-normal">
                          {label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={cta.href}
                  className="border-stroke-1 dark:border-stroke-7 hover:border-secondary/30 dark:hover:border-stroke-8 shadow-14 mt-auto flex items-start gap-2 rounded-xl border p-3 transition-all duration-300">
                  <div className="border-stroke-1 dark:border-stroke-7 mt-1 flex size-7 shrink-0 items-center justify-center rounded-lg border p-1">
                    <cta.icon />
                  </div>
                  <div>
                    <p className="text-tagline-1 text-secondary dark:text-accent font-normal">{cta.title}</p>
                    <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 font-normal">
                      {cta.description}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ExploreMenu.displayName = 'ExploreMenu';
export default ExploreMenu;
