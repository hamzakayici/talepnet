'use client';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import HoverBgTransform from '../hover-bg-transform';

type EngageItem = {
  label: string;
  href: string;
};

type EngageSection = {
  title: string;
  items: EngageItem[];
};

const engageSections: EngageSection[] = [
  {
    title: 'Solutions',
    items: [
      { label: 'Accounts Payable', href: '/accounts-payable' },
      { label: 'Expense Management', href: '/expense-management' },
      { label: 'Procure-to-Pay', href: '/procure-to-pay' },
      { label: 'Procurement', href: '/procurement-software' },
      { label: 'Supplier Management', href: '/supplier-management' },
    ],
  },
  {
    title: 'Industry',
    items: [
      { label: 'Automotive', href: '/automotive' },
      { label: 'Construction', href: '/construction' },
      { label: 'Education', href: '/education' },
      { label: 'Healthcare', href: '/healthcare' },
      { label: 'Hospitality', href: '/hospitality' },
      { label: 'Logistics', href: '/logistics' },
      { label: 'Non-Profit', href: '/non-profit' },
      { label: 'Technology', href: '/technology' },
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
          {engageSections.map(({ title, items }) => (
            <div key={title}>
              <div className="flex h-full flex-col">
                <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 p-3 font-medium">{title}</p>
                <ul className="my-4">
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
