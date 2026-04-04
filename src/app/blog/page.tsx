import BlogListWrapper from '@/components/blog/BlogListWrapper';
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
    </main>
  );
};

export default page;
