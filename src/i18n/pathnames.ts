import { Locale, defaultLocale, isLocale } from './config';

const LOCALE_PREFIX = /^\/(en|tr)(?=\/|$)/;

export const isExternalHref = (href: string) =>
  /^(https?:\/\/|mailto:|tel:|#)/.test(href);

export const getLocaleFromPathname = (pathname: string): Locale | null => {
  const match = pathname.match(LOCALE_PREFIX);
  return match && isLocale(match[1]) ? match[1] : null;
};

export const stripLocalePrefix = (pathname: string) => {
  const stripped = pathname.replace(LOCALE_PREFIX, '');
  return stripped || '/';
};

export const localizeHref = (href: string, locale: Locale = defaultLocale) => {
  if (!href || isExternalHref(href)) {
    return href;
  }

  const normalized = href.startsWith('/') ? href : `/${href}`;
  const stripped = stripLocalePrefix(normalized);

  return stripped === '/' ? `/${locale}` : `/${locale}${stripped}`;
};

export const switchLocalePathname = (pathname: string, locale: Locale) => {
  const stripped = stripLocalePrefix(pathname || '/');
  return stripped === '/' ? `/${locale}` : `/${locale}${stripped}`;
};
