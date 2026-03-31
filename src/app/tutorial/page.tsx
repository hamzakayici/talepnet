import CTAV1 from '@/components/shared/cta/CTAV1';
import Banner from '@/components/tutorial/Banner';
import Blog from '@/components/tutorial/Blog';
import Community from '@/components/tutorial/Community';
import Features from '@/components/tutorial/Features';
import Integration from '@/components/tutorial/Integration';
import Services from '@/components/tutorial/Services';
import Tutorials from '@/components/tutorial/Tutorials';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Eğitimler | TalepNET',
};

const Tutorial = () => {
  return (
    <main className="bg-background-3 dark:bg-background-5 overflow-x-hidden">
      <Banner />
      <Blog />
      <Features />
      <Tutorials />
      <Services />
      <Integration />
      <Community />
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

export default Tutorial;
