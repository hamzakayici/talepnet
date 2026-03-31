import CareerContent from '@/components/career/CareerContent';
import Features from '@/components/career/Features';
import Positions from '@/components/career/Positions';
import CTAV1 from '@/components/shared/cta/CTAV1';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Kariyer | TalepNET',
};

const Career = () => {
  return (
    <main className="bg-background-3 dark:bg-background-5">
      <CareerContent />
      <Features className="py-[100px] xl:py-[200px]" />
      <Positions />
      <CTAV1
        className="dark:bg-background-6 bg-white"
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

export default Career;
