import BlogListWrapper from '@/components/blog/BlogListWrapper';
import CTAV1 from '@/components/shared/cta/CTAV1';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Blog | TalepNET',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-5">
      <BlogListWrapper />
      <CTAV1
        className="dark:bg-background-7 bg-white"
        badgeClass="!badge-yellow-v2"
        badgeText="Hemen Başlayın"
        ctaHeading="TalepNET ile satın alma süreçlerinizi dijitalleştirin"
        description="Ücretsiz denemenizi bugün başlatın ve satın alma süreçlerinizi kolayca dijitalleştirin."
        ctaBtnText="Ücretsiz Başlayın"
      />
    </main>
  );
};

export default page;
