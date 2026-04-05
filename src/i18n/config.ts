export const locales = ['en', 'tr'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';
export const localeCookieName = 'talepnet-locale';

export const isLocale = (value?: string | null): value is Locale =>
  Boolean(value && locales.includes(value as Locale));

export const detectPreferredLocale = (value?: string | null): Locale => {
  if (!value) {
    return defaultLocale;
  }

  const candidates = value
    .split(',')
    .map((part) => part.trim().split(';')[0]?.toLowerCase())
    .filter(Boolean);

  for (const candidate of candidates) {
    if (isLocale(candidate)) {
      return candidate;
    }

    const baseLocale = candidate.split('-')[0];
    if (isLocale(baseLocale)) {
      return baseLocale;
    }
  }

  return defaultLocale;
};
