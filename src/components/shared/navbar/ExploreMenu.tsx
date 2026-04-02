'use client';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import HoverBgTransform from '../hover-bg-transform';

type ExploreItem = {
  label: string;
  href: string;
};

type ExploreSection = {
  title: string;
  items: ExploreItem[];
};

const exploreSections: ExploreSection[] = [
  {
    title: 'Company',
    items: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact-us' },
      { label: 'Careers', href: '/career' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
  {
    title: 'Product Overview',
    items: [
      { label: 'Features', href: '/product' },
      { label: 'Supplier Portal', href: '/features' },
      { label: 'Purchase Requests', href: '/integration' },
      { label: 'Approvals', href: '/process' },
      { label: 'Purchase Forms', href: '/procurement-software' },
      { label: 'Purchase Orders', href: '/purchase-orders' },
      { label: 'Supplier Contracts', href: '/supplier-contracts' },
      { label: 'Vendor Management', href: '/vendor-management' },
      { label: 'Receiving', href: '/receiving' },
      { label: 'Budget Management', href: '/budget-management' },
      { label: 'Spend Insights', href: '/spend-insights' },
    ],
  },
  {
    title: 'Account',
    items: [
      { label: 'Pricing', href: '/pricing' },
      { label: 'Log In', href: '/login' },
      { label: 'Sign Up', href: '/signup' },
    ],
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
          {exploreSections.map(({ title, items }) => (
            <div className="col-span-4" key={title}>
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
