import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Construction | TalepNET',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <section className="pt-32 pb-24 sm:pt-36 md:pt-42 xl:pt-[180px]">
        <div className="main-container">
          <h1>Construction</h1>
        </div>
      </section>
    </main>
  );
};

export default page;
