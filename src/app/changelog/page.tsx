import Content from '@/components/change-log/Content';
import Hero from '@/components/change-log/Hero';
import { defaultLocale, Locale } from '@/i18n/config';
import { getMessages } from '@/i18n/getMessages';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { headers } from 'next/headers';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Değişiklik Günlüğü | TalepNET',
};

const Changelog = async ({ locale: localeProp }: { locale?: Locale } = {}) => {
  const headerList = await headers();
  const locale = localeProp ?? ((headerList.get('x-locale') as Locale | null) ?? defaultLocale);
  const { secondary } = await getMessages(locale);

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Hero title={secondary.changelog.title} description={secondary.changelog.description} />
      <Content />
    </main>
  );
};

export default Changelog;
