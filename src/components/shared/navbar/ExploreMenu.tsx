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
  footerLink?: ExploreItem;
};

const exploreSections: ExploreSection[] = [
  {
    title: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Industries', href: '/industries' },
      { label: 'Partnerships', href: '/partnerships' },
      { label: 'Contact Us', href: '/contact-us' },
      { label: 'Careers', href: '/career' },
    ],
  },
  {
    title: 'Product Overview',
    items: [
      { label: 'Purchase Requests', href: '/purchase-requests' },
      { label: 'Approvals', href: '/approvals' },
      { label: 'Purchase Forms', href: '/purchase-forms' },
      { label: 'Purchase Orders', href: '/purchase-orders' },
      { label: 'Contract Management', href: '/contract-management' },
      { label: 'Supplier Management', href: '/supplier-management' },
      { label: 'Budget Management', href: '/budget-management' },
    ],
    footerLink: { label: 'View all features', href: '/product-features' },
  },
  {
    title: 'For Suppliers',
    items: [
      { label: 'Supplier Portal', href: '/supplier-portal' },
      { label: 'Respond to RFQs', href: '/respond-to-rfqs' },
      { label: 'Track Orders', href: '/track-orders' },
      { label: 'Manage Agreements', href: '/manage-agreements' },
      { label: 'Create Catalogs', href: '/create-catalogs' },
      { label: 'Collaborate', href: '/collaborate' },
    ],
  },
  {
    title: 'Access',
    items: [
      { label: 'Log In', href: 'https://app.talepnet.com/sign-in' },
      { label: 'Sign Up', href: 'https://app.talepnet.com/sign-up' },
      { label: 'Join as Supplier', href: 'https://portal.talepnet.com/sign-up' },
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
                  {items.map(({ label, href }) => (
                    <li
                      key={label}
                      className={
                        (title === 'Company' && label === 'Contact Us') ||
                        (title === 'Access' && label === 'Join as Supplier')
                          ? 'border-stroke-1/50 dark:border-background-7 mt-3 border-t pt-3'
                          : ''
                      }
                    >
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
