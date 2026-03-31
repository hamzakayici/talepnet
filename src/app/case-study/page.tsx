import CaseStudy from '@/components/case-study/CaseStudy';
import Feature from '@/components/case-study/Feature';
import Success from '@/components/case-study/Success';
import CTAV1 from '@/components/shared/cta/CTAV1';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Başarı Hikayeleri | TalepNET',
};

const CaseStudyPage = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <CaseStudy />
      <Success />
      <Feature />
      <CTAV1
        className="dark:bg-background-5 bg-white"
        badgeClass="!badge-yellow-v2"
        badgeText="Hemen Başlayın"
        ctaHeading="TalepNET ile satın alma süreçlerinizi dijitalleştirin"
        description="Ücretsiz denemenizi bugün başlatın ve satın alma süreçlerinizi kolayca dijitalleştirin."
        ctaBtnText="Ücretsiz Başlayın"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};
CaseStudyPage.displayName = 'CaseStudyPage';
export default CaseStudyPage;
