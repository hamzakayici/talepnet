import type { Metadata } from 'next';
import { Locale, defaultLocale, locales } from '@/i18n/config';

export const DEFAULT_URL = 'https://www.talepnet.com';
export const DEFAULT_TITLE = 'TalepNET | Organizasyonlar İçin Akıllı Satın Alma Yönetimi';
export const DEFAULT_DESCRIPTION =
  'Satın alma süreçlerinizi yapay zeka destekli iş akışları, izlenebilirlik ve tedarikçi ağı ile otomatikleştirin ve tedarik yönetimini dijitale dönüştürün.';
export const DEFAULT_IMAGE_URL = 'https://images.prismic.io/staticmania/aPD-K55xUNkB2D2X_og-image.jpg';

const defaultMetadata: Metadata = {
  metadataBase: new URL(DEFAULT_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'TalepNET',
    url: DEFAULT_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: DEFAULT_IMAGE_URL, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_IMAGE_URL],
  },
};

const generateMetadata = (title?: string, description?: string, canonicaUrl?: string, imageUrl?: string): Metadata => {
  return {
    ...defaultMetadata,
    title: title ?? defaultMetadata.title,
    description: description ?? defaultMetadata.description,
    alternates: {
      canonical: canonicaUrl,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title ?? defaultMetadata.openGraph?.title,
      description: description ?? defaultMetadata.openGraph?.description,
      url: canonicaUrl ?? defaultMetadata.openGraph?.url,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630 }] : defaultMetadata.openGraph?.images,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: title ?? defaultMetadata.twitter?.title,
      description: description ?? defaultMetadata.twitter?.description,
      images: imageUrl ? [imageUrl] : defaultMetadata.twitter?.images,
    },
  };
};

const normalizePathname = (pathname?: string) => {
  if (!pathname || pathname === '/') {
    return '/';
  }

  return pathname.startsWith('/') ? pathname : `/${pathname}`;
};

export const buildLocalizedUrl = (pathname: string = '/', locale: Locale = defaultLocale) => {
  const normalized = normalizePathname(pathname);
  return normalized === '/' ? `${DEFAULT_URL}/${locale}` : `${DEFAULT_URL}/${locale}${normalized}`;
};

export const buildLocaleAlternates = (pathname: string = '/', locale: Locale = defaultLocale) => {
  const normalized = normalizePathname(pathname);

  return {
    canonical: buildLocalizedUrl(normalized, locale),
    languages: {
      'x-default': buildLocalizedUrl(normalized, defaultLocale),
      ...Object.fromEntries(locales.map((item) => [item, buildLocalizedUrl(normalized, item)])),
    },
  };
};

export const localizeMetadata = (
  metadata: Metadata = defaultMetadata,
  pathname: string = '/',
  locale: Locale = defaultLocale,
): Metadata => {
  const alternates = buildLocaleAlternates(pathname, locale);

  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
    openGraph: {
      ...metadata.openGraph,
      url: alternates.canonical,
    },
  };
};

export { defaultMetadata, generateMetadata };
