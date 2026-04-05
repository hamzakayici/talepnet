'use client';

import { useI18n } from './I18nProvider';
import { I18nMessages } from './getMessages';

const getValue = (source: unknown, path: string) =>
  path.split('.').reduce<unknown>((value, segment) => {
    if (value && typeof value === 'object' && segment in value) {
      return (value as Record<string, unknown>)[segment];
    }

    return undefined;
  }, source);

export const useTranslations = <TNamespace extends keyof I18nMessages>(namespace: TNamespace) => {
  const { messages } = useI18n();

  return (key: string) => {
    const value = getValue(messages[namespace], key);
    return typeof value === 'string' ? value : key;
  };
};
