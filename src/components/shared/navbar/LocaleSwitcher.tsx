'use client';

import { Locale, locales } from '@/i18n/config';
import { switchLocalePathname } from '@/i18n/pathnames';
import { cn } from '@/utils/cn';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useLocale } from '@/i18n/I18nProvider';

const LocaleSwitcher = ({ className }: { className?: string }) => {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'border-stroke-2 dark:border-stroke-7 bg-background-2 dark:bg-background-6 inline-flex items-center gap-1 rounded-full border p-1',
        className,
      )}>
      {locales.map((targetLocale) => {
        const isActive = targetLocale === locale;

        return (
          <Link
            key={targetLocale}
            href={switchLocalePathname(pathname, targetLocale as Locale)}
            className={cn(
              'text-tagline-2 rounded-full px-2.5 py-1.5 font-medium uppercase transition-all duration-200',
              isActive
                ? 'bg-primary-500 text-white'
                : 'text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent',
            )}>
            {targetLocale}
          </Link>
        );
      })}
    </div>
  );
};

export default LocaleSwitcher;
