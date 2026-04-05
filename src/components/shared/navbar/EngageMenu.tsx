'use client';
import { useLocale } from '@/i18n/I18nProvider';
import { localizeHref } from '@/i18n/pathnames';
import { useTranslations } from '@/i18n/useTranslations';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import HoverBgTransform from '../hover-bg-transform';

type EngageItem = {
  label: string;
  href: string;
};

type EngageSection = {
  ctaHref: string;
  ctaLabel: string;
  title: string;
  items: EngageItem[];
};

const EngageMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) => {
  const locale = useLocale();
  const t = useTranslations('navbar');
  const handleClose = () => setMenuDropdownId(null);

  const engageSections: EngageSection[] = [
    {
      ctaHref: localizeHref('/solutions', locale),
      ctaLabel: t('engage.viewAllSolutions'),
      title: t('engage.solutions'),
      items: [
        { label: t('engage.procureToPay'), href: localizeHref('/solutions/procure-to-pay', locale) },
        { label: t('engage.requestToReceipt'), href: localizeHref('/solutions/request-to-receipt', locale) },
        { label: t('engage.sourceToOrder'), href: localizeHref('/solutions/source-to-order', locale) },
        { label: t('engage.approvalWorkflow'), href: localizeHref('/solutions/approval-workflow', locale) },
        { label: t('engage.spendManagement'), href: localizeHref('/solutions/spend-management', locale) },
        { label: t('engage.budgetControl'), href: localizeHref('/solutions/budget-control', locale) },
        { label: t('engage.accountsPayable'), href: localizeHref('/solutions/accounts-payable', locale) },
      ],
    },
    {
      ctaHref: localizeHref('/industries', locale),
      ctaLabel: t('engage.viewAllIndustries'),
      title: t('engage.industry'),
      items: [
        { label: t('engage.automotive'), href: localizeHref('/industries/automotive', locale) },
        { label: t('engage.construction'), href: localizeHref('/industries/construction', locale) },
        { label: t('engage.education'), href: localizeHref('/industries/education', locale) },
        { label: t('engage.healthcare'), href: localizeHref('/industries/healthcare', locale) },
        { label: t('engage.hospitality'), href: localizeHref('/industries/hospitality', locale) },
        { label: t('engage.nonProfit'), href: localizeHref('/industries/non-profit', locale) },
        { label: t('engage.technology'), href: localizeHref('/industries/technology', locale) },
      ],
    },
  ];

  return (
    <div>
      <div
        className={cn(
          'pointer-events-none fixed top-full left-1/2 z-40 h-3 w-full -translate-x-1/2 bg-transparent opacity-0 lg:w-[640px]',
          menuDropdownId === 'engage-mega-menu' ? '!pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="engage-dropdown-menu"
        className={cn(
          'dropdown-menu dark:bg-background-6 shadow-14 border-stroke-1/50 dark:border-background-7 pointer-events-none fixed top-full left-1/2 z-50 mt-2 w-full -translate-x-1/2 rounded-[20px] border bg-white px-6 pt-3 pb-6 opacity-0 transition-all duration-300 lg:w-[640px]',
          menuDropdownId === 'engage-mega-menu'
            ? '!pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        <div className="grid grid-cols-2 gap-x-6 gap-y-6">
          {engageSections.map(({ title, items, ctaHref, ctaLabel }) => (
            <div key={title}>
              <div className="flex h-full flex-col">
                <div className="border-stroke-1/50 dark:border-background-7 border-b px-3 pb-3">
                  <p className="text-tagline-2 text-secondary/40 dark:text-accent/45 font-medium">{title}</p>
                </div>
                <ul className="my-4 flex-1">
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
                <div className="mt-auto border-t border-stroke-1/50 pt-4 dark:border-background-7">
                  <Link href={ctaHref} onClick={handleClose} className="group relative block p-3">
                    <HoverBgTransform className="group-hover:opacity-100" />
                    <span className="text-tagline-1 relative z-10 font-normal text-primary-600 dark:text-primary-300">
                      {ctaLabel}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

EngageMenu.displayName = 'EngageMenu';
export default EngageMenu;
