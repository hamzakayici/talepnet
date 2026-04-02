import ContactInfo from '@/components/contact-page/ContactInfo';
import CTAV1 from '@/components/shared/cta/CTAV1';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'İletişim | TalepNET',
};

const ContactUs = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <ContactInfo />
      <CTAV1
        className="dark:bg-background-5 bg-white"
        badgeClass="badge-yellow-v2"
        badgeText="Hemen Başlayın"
        ctaBtnText="Bize Ulaşın"
        ctaHeading="Bize ulaşın"
        description="Sorularınız ve ihtiyaçlarınız için buradayız. Aşağıdaki iletişim formunu kullanarak bize ulaşın, en kısa sürede size dönüş yapacağız."
      />
    </main>
  );
};

export default ContactUs;
