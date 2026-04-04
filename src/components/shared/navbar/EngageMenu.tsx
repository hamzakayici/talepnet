'use client';
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

const engageSections: EngageSection[] = [
  {
    ctaHref: '/solutions',
    ctaLabel: 'View all solutions',
    title: 'Solutions',
    items: [
      { label: 'Procure-to-Pay', href: '/solutions/procure-to-pay' },
      { label: 'Request-to-Receipt', href: '/solutions/request-to-receipt' },
      { label: 'Source-to-Order', href: '/solutions/source-to-order' },
      { label: 'Approval Workflow', href: '/solutions/approval-workflow' },
      { label: 'Spend Management', href: '/solutions/spend-management' },
      { label: 'Budget Control', href: '/solutions/budget-control' },
      { label: 'Accounts Payable', href: '/solutions/accounts-payable' },
    ],
  },
  {
    ctaHref: '/industries',
    ctaLabel: 'View all industries',
    title: 'Industry',
    items: [
      { label: 'Automotive', href: '/industries/automotive' },
      { label: 'Construction', href: '/industries/construction' },
      { label: 'Education', href: '/industries/education' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Hospitality', href: '/industries/hospitality' },
      { label: 'Non-Profit', href: '/industries/non-profit' },
      { label: 'Technology', href: '/industries/technology' },
    ],
  },
];

const EngageMenu = ({
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
