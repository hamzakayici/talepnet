import CareerContent from '@/components/career/CareerContent';
import Positions from '@/components/career/Positions';
import { defaultLocale, Locale } from '@/i18n/config';
import { getMessages } from '@/i18n/getMessages';
import { generateMetadata } from '@/utils/generateMetaData';
import { headers } from 'next/headers';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Kariyer | TalepNET',
  'TalepNET’te büyüme ve ürün ekiplerindeki açık rolleri keşfedin; modern bir B2B satın alma platformu geliştiriyoruz.',
  'https://www.talepnet.com/career',
);

const Career = async ({ locale: localeProp }: { locale?: Locale } = {}) => {
  const headerList = await headers();
  const locale = localeProp ?? ((headerList.get('x-locale') as Locale | null) ?? defaultLocale);
  const { career } = await getMessages(locale);
  const positions = career.roles;

  return (
    <main className="bg-background-3 dark:bg-background-5">
      <CareerContent
        title={career.listPage.heroTitle}
        introTitle={career.listPage.introTitle}
        paragraphs={career.listPage.paragraphs}
        locale={locale}
        openRolesLabel={career.listPage.openRolesBadge}
      />
      <Positions
        positions={positions}
        badge={career.listPage.openRolesBadge}
        title={career.listPage.openRolesTitle}
        viewRoleLabel={career.listPage.viewRole}
        locale={locale}
      />
      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container">
          <div className="overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#0f172a_0%,#153b4a_55%,#0b1020_100%)] p-8 text-white md:p-12 xl:p-14">
            <div className="max-w-3xl">
              <div className="max-w-3xl">
                <span className="text-tagline-1 inline-block text-white/65">{career.listPage.finalCtaEyebrow}</span>
                <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                  {career.listPage.finalCtaTitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Career;
