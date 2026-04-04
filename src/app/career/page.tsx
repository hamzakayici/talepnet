import CareerContent from '@/components/career/CareerContent';
import Positions from '@/components/career/Positions';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Careers | TalepNET',
  'Explore open roles at TalepNET across growth and product as we build a modern B2B procurement platform.',
  'https://www.talepnet.com/career',
);

const Career = () => {
  return (
    <main className="bg-background-3 dark:bg-background-5">
      <CareerContent />
      <Positions />
      <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-28">
        <div className="main-container">
          <div className="overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#0f172a_0%,#153b4a_55%,#0b1020_100%)] p-8 text-white md:p-12 xl:p-14">
            <div className="max-w-3xl">
              <div className="max-w-3xl">
                <span className="text-tagline-1 inline-block text-white/65">Join TalepNET</span>
                <p className="mt-5 text-3xl font-normal leading-tight text-white lg:text-5xl">
                  We are building AI-powered procurement software with better visibility, stronger control, and less friction across the workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Career;
