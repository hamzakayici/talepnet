import ContactInfo from '@/components/contact-page/ContactInfo';
import LocationsSection from '@/components/shared/LocationsSection';
import { defaultLocale, Locale } from '@/i18n/config';
import { getMessages } from '@/i18n/getMessages';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { headers } from 'next/headers';

export const metadata: Metadata = {
  ...generateMetadata(
    'İletişim | TalepNET',
    'Demo talepleri, ürün soruları, iş ortaklıkları veya genel ticari konular için TalepNET ekibiyle iletişime geçin.',
    'https://www.talepnet.com/contact-us',
  ),
};

const ContactUs = async ({ locale: localeProp }: { locale?: Locale } = {}) => {
  const headerList = await headers();
  const locale = localeProp ?? ((headerList.get('x-locale') as Locale | null) ?? defaultLocale);
  const { contact } = await getMessages(locale);

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <ContactInfo />
      <LocationsSection
        className="bg-white dark:bg-background-6"
        eyebrow={contact.locations.eyebrow}
        title={contact.locations.title}
        description={contact.locations.description}
        locations={[
          {
            city: 'İstanbul',
            place: 'Bilgiyi Ticarileştirme Merkezi',
            address: 'Fulya, Yeşilçimen Sok. Polat Tower Residence No:12/430, 34394 Şişli/İstanbul',
          },
          {
            city: 'Antalya',
            place: 'Antalya Teknokent',
            address:
              'Pınarbaşı Mah. Hürriyet Cad. Akdeniz Üniversitesi Antalya Teknokent Ar-Ge 2 Uluğbey Binası No:3A/31, Konyaaltı/Antalya',
          },
        ]}
      />
    </main>
  );
};

export default ContactUs;
