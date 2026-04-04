import CareerDetailsBody from '@/components/career/CareerDetailsBody';
import PageHero from '@/components/shared/PageHero';
import { generateMetadata } from '@/utils/generateMetaData';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const careers = getMarkDownData('src/data/career');
  return careers.map((career) => ({
    slug: career.slug,
  }));
}

export const metadata: Metadata = generateMetadata(
  'Career Role | TalepNET',
  'Explore open roles at TalepNET and learn how each position contributes to our B2B procurement platform.',
  'https://www.talepnet.com/career',
);

const CareerDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <PageHero title="Careers" heading="Open Role" link="/career" className="bg-background-3 dark:bg-background-7" />
      <CareerDetailsBody slug={slug} />
    </main>
  );
};

export default CareerDetails;
