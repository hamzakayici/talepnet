import Contact from '@/components/faq/Contact';
import FaqTab from '@/components/faq/FaqTab';
import CTAV1 from '@/components/shared/cta/CTAV1';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'SSS | TalepNET',
};

const FAQ = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <FaqTab />
      <Contact />
      <CTAV1
        className="dark:bg-background-6 bg-white"
        badgeClass="!badge-cyan"
        badgeText="Hemen Başlayın"
        ctaHeading="TalepNET ile hemen başlamaya hazır mısınız?"
        description="Herhangi bir sorunuz varsa ekibimize ulaşmaktan çekinmeyin."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Ücretsiz Başlayın"
      />
    </main>
  );
};

export default FAQ;
