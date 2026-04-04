import IndustriesPage from '@/components/industries/IndustriesPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Industries | TalepNET',
  'Explore Talepnet industry solutions for automotive, construction, education, healthcare, hospitality, nonprofit, and technology procurement workflows.',
  'https://www.talepnet.com/industries',
);

const page = () => {
  return <IndustriesPage />;
};

export default page;
