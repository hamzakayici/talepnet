import CTAV1 from '@/components/shared/cta/CTAV1';
import TermsConditionContent from '@/components/terms-conditions/TermsConditionContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Hizmet Şartları | TalepNET',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <TermsConditionContent />
      <CTAV1
        className="dark:bg-background-5 bg-white"
        badgeClass="badge-yellow-v2"
        badgeText="Hemen Başlayın"
        ctaHeading="TalepNET ile hemen başlamaya hazır mısınız?"
        description="Herhangi bir sorunuz varsa ekibimize ulaşmaktan çekinmeyin."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Ücretsiz Başlayın"
      />
    </main>
  );
};

export default page;
