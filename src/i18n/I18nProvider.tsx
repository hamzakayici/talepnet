'use client';

import { createContext, ReactNode, useContext } from 'react';
import { Locale, defaultLocale } from './config';
import { I18nMessages } from './getMessages';

type I18nContextValue = {
  locale: Locale;
  messages: I18nMessages;
};

const I18nContext = createContext<I18nContextValue>({
  locale: defaultLocale,
  messages: {} as I18nMessages,
});

export const I18nProvider = ({
  children,
  locale,
  messages,
}: {
  children: ReactNode;
  locale: Locale;
  messages: I18nMessages;
}) => {
  return <I18nContext.Provider value={{ locale, messages }}>{children}</I18nContext.Provider>;
};

export const useI18n = () => useContext(I18nContext);
export const useLocale = () => useI18n().locale;
