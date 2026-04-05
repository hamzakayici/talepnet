'use client';
import { useLocale } from '@/i18n/I18nProvider';
import { localizeHref } from '@/i18n/pathnames';
import { useTranslations } from '@/i18n/useTranslations';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import HoverBgTransform from '../hover-bg-transform';

type ExploreItem = {
  label: string;
  href: string;
  dividerBefore?: boolean;
};

type ExploreSection = {
  title: string;
  items: ExploreItem[];
  footerLink?: ExploreItem;
};

const ExploreMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) => {
  const locale = useLocale();
  const t = useTranslations('navbar');
  const handleClose = () => setMenuDropdownId(null);

  const exploreSections: ExploreSection[] = [
    {
      title: t('explore.company'),
      items: [
        { label: t('explore.about'), href: localizeHref('/about', locale) },
        { label: t('explore.solutions'), href: localizeHref('/solutions', locale) },
        { label: t('explore.industries'), href: localizeHref('/industries', locale) },
        { label: t('explore.partnerships'), href: localizeHref('/partnerships', locale) },
        { label: t('explore.contactUs'), href: localizeHref('/contact-us', locale), dividerBefore: true },
        { label: t('explore.careers'), href: localizeHref('/career', locale) },
      ],
    },
    {
      title: t('explore.productOverview'),
      items: [
        { label: t('explore.purchaseRequests'), href: localizeHref('/purchase-requests', locale) },
        { label: t('explore.approvals'), href: localizeHref('/approvals', locale) },
        { label: t('explore.purchaseForms'), href: localizeHref('/purchase-forms', locale) },
        { label: t('explore.purchaseOrders'), href: localizeHref('/purchase-orders', locale) },
        { label: t('explore.contractManagement'), href: localizeHref('/contract-management', locale) },
        { label: t('explore.supplierManagement'), href: localizeHref('/supplier-management', locale) },
        { label: t('explore.budgetManagement'), href: localizeHref('/budget-management', locale) },
      ],
      footerLink: { label: t('explore.viewAllFeatures'), href: localizeHref('/product-features', locale) },
    },
    {
      title: t('explore.forSuppliers'),
      items: [
        { label: t('explore.supplierPortal'), href: localizeHref('/supplier-portal', locale) },
        { label: t('explore.respondToRfqs'), href: localizeHref('/respond-to-rfqs', locale) },
        { label: t('explore.trackOrders'), href: localizeHref('/track-orders', locale) },
        { label: t('explore.manageAgreements'), href: localizeHref('/manage-agreements', locale) },
        { label: t('explore.createCatalogs'), href: localizeHref('/create-catalogs', locale) },
        { label: t('explore.collaborate'), href: localizeHref('/collaborate', locale) },
      ],
    },
    {
      title: t('explore.access'),
      items: [
        { label: t('explore.logIn'), href: 'https://app.talepnet.com/sign-in' },
        { label: t('explore.signUp'), href: 'https://app.talepnet.com/sign-up' },
        { label: t('explore.joinAsSupplier'), href: 'https://portal.talepnet.com/sign-up', dividerBefore: true },
      ],
    },
  ];

  return (
    <div>
      <div
        className={cn(
          'pointer-events-none fixed top-full left-1/2 z-40 h-3 w-full -translate-x-1/2 bg-transparent opacity-0 lg:w-[1240px]',
          menuDropdownId === 'explore-mega-menu' ? '!pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="explore-mega-menu"
        className={cn(
          'dark:bg-background-6 border-stroke-1/50 dark:border-background-7 pointer-events-none fixed top-full left-1/2 z-50 mt-2 w-full -translate-x-1/2 rounded-[20px] border bg-white px-6 pt-3 pb-6 opacity-0 transition-all duration-300 lg:w-[1240px]',
          menuDropdownId === 'explore-mega-menu'
            ? '!pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        <div className="grid grid-cols-4 gap-x-6 gap-y-6">
          {exploreSections.map(({ title, items, footerLink }) => (
            <div key={title}>
              <div className="flex h-full flex-col">
                <div className="border-stroke-1/50 dark:border-background-7 border-b px-3 pb-3">
                  <p className="text-tagline-2 text-secondary/40 dark:text-accent/45 font-medium">{title}</p>
                </div>
                <ul className="my-4 flex-1">
                  {items.map(({ label, href, dividerBefore }) => (
                    <li key={label} className={dividerBefore ? 'border-stroke-1/50 dark:border-background-7 mt-3 border-t pt-3' : ''}>
                      <Link href={href} onClick={handleClose} className="group relative block p-3">
                        <HoverBgTransform className="group-hover:opacity-100" />
                        <span className="text-tagline-1 text-secondary dark:text-accent relative z-10 font-normal">
                          {label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                {footerLink ? (
                  <div className="mt-auto border-t border-stroke-1/50 pt-4 dark:border-background-7">
                    <Link href={footerLink.href} onClick={handleClose} className="group relative block p-3">
                      <HoverBgTransform className="group-hover:opacity-100" />
                      <span className="text-tagline-1 relative z-10 font-normal text-primary-600 dark:text-primary-300">
                        {footerLink.label}
                      </span>
                    </Link>
                  </div>
                ) : null}
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
