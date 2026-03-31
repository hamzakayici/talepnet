import CaseStudyDetails from '@/components/case-study/CaseStudyDetails';
import CTAV1 from '@/components/shared/cta/CTAV1';
import { defaultMetadata } from '@/utils/generateMetaData';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const caseStudies = getMarkDownData('src/data/case-study');
  return caseStudies.map((post) => ({
    slug: post.slug,
  }));
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Başarı Hikayesi Detay | TalepNET',
};

interface CaseStudyDetailsPageProps {
  params: Promise<{ slug: string }>;
}

const CaseStudyDetailsPage = async ({ params }: CaseStudyDetailsPageProps) => {
  const slug = (await params).slug;

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <CaseStudyDetails slug={slug} />
      <CTAV1
        className="dark:bg-background-5 bg-white"
        badgeClass="badge-yellow-v2"
        badgeText="Hemen Başlayın"
        ctaHeading="TalepNET ile satın alma süreçlerinizi dijitalleştirin"
        description="Ücretsiz denemenizi bugün başlatın ve satın alma süreçlerinizi kolayca dijitalleştirin."
        ctaBtnText="Ücretsiz Başlayın"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};
CaseStudyDetailsPage.displayName = 'CaseStudyDetailsPage';
export default CaseStudyDetailsPage;
