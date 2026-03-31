import CTAV1 from '@/components/shared/cta/CTAV1';
import Contact from '@/components/support/Contact';
import NeedHelp from '@/components/support/NeedHelp';
import Services from '@/components/support/Services';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Destek | TalepNET',
};

const Support = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <NeedHelp />
      <Services />
      <Contact />
      <CTAV1
        className="dark:bg-background-5 bg-white"
        badgeClass="badge-green"
        badgeText="Hemen Başlayın"
        ctaHeading="TalepNET ile hemen başlamaya hazır mısınız?"
        description="Herhangi bir sorunuz varsa ekibimize ulaşmaktan çekinmeyin."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Ücretsiz Başlayın"
      />
    </main>
  );
};

export default Support;
