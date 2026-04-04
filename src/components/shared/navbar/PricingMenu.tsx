'use client';
import { cn } from '@/utils/cn';
import { Euro, Rocket } from 'lucide-react';
import Link from 'next/link';
import HoverBgTransform from '../hover-bg-transform';

const PricingMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) => {
  return (
    <div>
      <div
        className={cn(
          'dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[320px] -translate-x-1/2 bg-transparent opacity-0',
          menuDropdownId === 'pricing-mega-menu' ? '!pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <ul
        id="pricing-dropdown-menu"
        className={cn(
          'dropdown-menu dark:bg-background-6 shadow-14 border-stroke-1/50 dark:border-background-7 pointer-events-none absolute top-full left-1/2 z-50 mt-2 w-[320px] -translate-x-1/2 rounded-[20px] border bg-white p-3 opacity-0 transition-all duration-300',
          menuDropdownId === 'pricing-mega-menu'
            ? '!pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        <li>
          <Link
            href="/pricing"
            onClick={() => setMenuDropdownId(null)}
            className="group relative flex items-start gap-3 rounded-2xl p-3 transition-all duration-300">
            <HoverBgTransform className="group-hover:opacity-100" />
            <div className="dark:bg-background-6 shadow-14 border-stroke-1 dark:border-background-7 relative z-10 flex size-11 items-center justify-center rounded-[10px] border bg-white p-3">
              <Euro className="size-5 text-secondary dark:text-accent" />
            </div>
            <div className="relative z-10">
              <p className="text-tagline-1 text-secondary dark:text-accent font-normal">View Plans</p>
              <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-normal">
                Choose the best plan for your team
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="https://app.talepnet.com/sign-up"
            onClick={() => setMenuDropdownId(null)}
            className="group relative flex items-start gap-3 rounded-2xl p-3 transition-all duration-300">
            <HoverBgTransform className="group-hover:opacity-100" />
            <div className="dark:bg-background-6 shadow-14 border-stroke-1 dark:border-background-7 relative z-10 flex size-11 items-center justify-center rounded-[10px] border bg-white p-3">
              <Rocket className="size-5 text-secondary dark:text-accent" />
            </div>
            <div className="relative z-10">
              <p className="text-tagline-1 text-secondary dark:text-accent font-normal">Get Started Free</p>
              <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-normal">
                Start with one user at no cost
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

PricingMenu.displayName = 'PricingMenu';
export default PricingMenu;
