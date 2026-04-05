import { Locale, defaultLocale } from './config';

const messageLoaders = {
  en: {
    navbar: () => import('../../messages/en/navbar.json').then((module) => module.default),
    footer: () => import('../../messages/en/footer.json').then((module) => module.default),
    support: () => import('../../messages/en/support.json').then((module) => module.default),
    home: () => import('../../messages/en/home.json').then((module) => module.default),
    pricing: () => import('../../messages/en/pricing.json').then((module) => module.default),
    about: () => import('../../messages/en/about.json').then((module) => module.default),
    contact: () => import('../../messages/en/contact.json').then((module) => module.default),
    career: () => import('../../messages/en/career.json').then((module) => module.default),
    faq: () => import('../../messages/en/faq.json').then((module) => module.default),
    industries: () => import('../../messages/en/industries.json').then((module) => module.default),
    industryDetails: () => import('../../messages/en/industry-details.json').then((module) => module.default),
    supplier: () => import('../../messages/en/supplier.json').then((module) => module.default),
    product: () => import('../../messages/en/product.json').then((module) => module.default),
    solutions: () => import('../../messages/en/solutions.json').then((module) => module.default),
    legal: () => import('../../messages/en/legal.json').then((module) => module.default),
    secondary: () => import('../../messages/en/secondary.json').then((module) => module.default),
  },
  tr: {
    navbar: () => import('../../messages/tr/navbar.json').then((module) => module.default),
    footer: () => import('../../messages/tr/footer.json').then((module) => module.default),
    support: () => import('../../messages/tr/support.json').then((module) => module.default),
    home: () => import('../../messages/tr/home.json').then((module) => module.default),
    pricing: () => import('../../messages/tr/pricing.json').then((module) => module.default),
    about: () => import('../../messages/tr/about.json').then((module) => module.default),
    contact: () => import('../../messages/tr/contact.json').then((module) => module.default),
    career: () => import('../../messages/tr/career.json').then((module) => module.default),
    faq: () => import('../../messages/tr/faq.json').then((module) => module.default),
    industries: () => import('../../messages/tr/industries.json').then((module) => module.default),
    industryDetails: () => import('../../messages/tr/industry-details.json').then((module) => module.default),
    supplier: () => import('../../messages/tr/supplier.json').then((module) => module.default),
    product: () => import('../../messages/tr/product.json').then((module) => module.default),
    solutions: () => import('../../messages/tr/solutions.json').then((module) => module.default),
    legal: () => import('../../messages/tr/legal.json').then((module) => module.default),
    secondary: () => import('../../messages/tr/secondary.json').then((module) => module.default),
  },
} as const;

export type I18nMessages = {
  navbar: Awaited<ReturnType<(typeof messageLoaders)[Locale]['navbar']>>;
  footer: Awaited<ReturnType<(typeof messageLoaders)[Locale]['footer']>>;
  support: Awaited<ReturnType<(typeof messageLoaders)[Locale]['support']>>;
  home: Awaited<ReturnType<(typeof messageLoaders)[Locale]['home']>>;
  pricing: Awaited<ReturnType<(typeof messageLoaders)[Locale]['pricing']>>;
  about: Awaited<ReturnType<(typeof messageLoaders)[Locale]['about']>>;
  contact: Awaited<ReturnType<(typeof messageLoaders)[Locale]['contact']>>;
  career: Awaited<ReturnType<(typeof messageLoaders)[Locale]['career']>>;
  faq: Awaited<ReturnType<(typeof messageLoaders)[Locale]['faq']>>;
  industries: Awaited<ReturnType<(typeof messageLoaders)[Locale]['industries']>>;
  industryDetails: Awaited<ReturnType<(typeof messageLoaders)[Locale]['industryDetails']>>;
  supplier: Awaited<ReturnType<(typeof messageLoaders)[Locale]['supplier']>>;
  product: Awaited<ReturnType<(typeof messageLoaders)[Locale]['product']>>;
  solutions: Awaited<ReturnType<(typeof messageLoaders)[Locale]['solutions']>>;
  legal: Awaited<ReturnType<(typeof messageLoaders)[Locale]['legal']>>;
  secondary: Awaited<ReturnType<(typeof messageLoaders)[Locale]['secondary']>>;
};

export const getMessages = async (locale: Locale = defaultLocale): Promise<I18nMessages> => {
  const loaders = messageLoaders[locale] ?? messageLoaders[defaultLocale];

  const [navbar, footer, support, home, pricing, about, contact, career, faq, industries, industryDetails, supplier, product, solutions, legal, secondary] = await Promise.all([
    loaders.navbar(),
    loaders.footer(),
    loaders.support(),
    loaders.home(),
    loaders.pricing(),
    loaders.about(),
    loaders.contact(),
    loaders.career(),
    loaders.faq(),
    loaders.industries(),
    loaders.industryDetails(),
    loaders.supplier(),
    loaders.product(),
    loaders.solutions(),
    loaders.legal(),
    loaders.secondary(),
  ]);

  return {
    navbar,
    footer,
    support,
    home,
    pricing,
    about,
    contact,
    career,
    faq,
    industries,
    industryDetails,
    supplier,
    product,
    solutions,
    legal,
    secondary,
  };
};
