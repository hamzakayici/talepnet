import CareerDetailsBody from '@/components/career/CareerDetailsBody';
import PageHero from '@/components/shared/PageHero';
import { defaultLocale, Locale } from '@/i18n/config';
import { getMessages } from '@/i18n/getMessages';
import { localizeHref } from '@/i18n/pathnames';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return [
    { slug: 'growth-marketing-partnerships-lead' },
    { slug: 'product-manager' },
  ];
}

export const metadata: Metadata = generateMetadata(
  'Kariyer Rolü | TalepNET',
  'TalepNET’teki açık rolleri inceleyin ve her pozisyonun B2B satın alma platformumuza nasıl katkı sağladığını görün.',
  'https://www.talepnet.com/career',
);

const CareerDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const headerList = await headers();
  const locale = (headerList.get('x-locale') as Locale | null) ?? defaultLocale;
  const { career } = await getMessages(locale);
  const role = career.roles.find((item: any) => item.slug === slug);

  if (!role) {
    notFound();
  }

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <PageHero
        title={career.detailsPage.breadcrumbTitle}
        heading={career.detailsPage.heading}
        link={localizeHref('/career', locale)}
        homeLabel={locale === 'tr' ? 'Ana Sayfa' : 'Home'}
        homeHref={localizeHref('/', locale)}
        className="bg-background-3 dark:bg-background-7"
      />
      <CareerDetailsBody role={role as never} labels={career.detailsPage} locale={locale} />
    </main>
  );
};

export default CareerDetails;
