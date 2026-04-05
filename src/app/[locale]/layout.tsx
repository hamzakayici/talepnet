import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';
import { I18nProvider } from '@/i18n/I18nProvider';
import { defaultLocale, isLocale } from '@/i18n/config';
import { getMessages } from '@/i18n/getMessages';
import { ReactNode } from 'react';

type Params = Promise<{
  locale: string;
}>;

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Params;
}>) {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : defaultLocale;
  const messages = await getMessages(locale);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang = ${JSON.stringify(locale)};`,
        }}
      />
      <I18nProvider locale={locale} messages={messages}>
        <Navbar />
        {children}
        <Footer />
      </I18nProvider>
    </>
  );
}
