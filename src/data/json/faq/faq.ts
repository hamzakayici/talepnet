import { I18nMessages } from '@/i18n/getMessages';

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const getFaqCategories = (faq: I18nMessages['faq']) =>
  ({
    product: faq.categories.product,
    pricing: faq.categories.pricing,
    security: faq.categories.security,
    marketplace: faq.categories.supplierPortal,
  }) satisfies Record<string, FaqItem[]>;
