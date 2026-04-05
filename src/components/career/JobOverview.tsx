import { IPosition } from '@/interface';
import { localizeHref } from '@/i18n/pathnames';
import gradient45 from '@public/images/ns-img-533.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
type Labels = {
  jobOverview: string;
  datePosted: string;
  expirationDate: string;
  location: string;
  offeredSalary: string;
  experience: string;
  qualification: string;
  jobSkills: string;
  applyNow: string;
};

const JobOverview = ({ data, labels, locale }: { data: Partial<IPosition>; labels: Labels; locale: 'en' | 'tr' }) => {
  return (
    <RevealAnimation delay={0.4}>
      <div className="bg-background-1 dark:bg-background-5 relative col-span-12 overflow-hidden rounded-[20px] p-11 md:col-span-6">
        {/* bg gradient img  */}
        <RevealAnimation delay={0.4} duration={1.2} direction="right" offset={90}>
          <figure className="pointer-events-none absolute top-[-27%] right-[-77%] size-[500px] overflow-hidden select-none max-[377px]:right-[-90%] md:top-[-27%] md:right-[-83%] lg:top-[-49%] lg:right-[-102%] lg:size-[800px] xl:top-[-60%] xl:right-[-99%] xl:size-[1000px]">
            <Image src={gradient45} alt="career-details-bg-gradient-img" className="size-full object-cover" />
          </figure>
        </RevealAnimation>
        <div className="space-y-8">
          <div>
            <h5 className="mb-8">{labels.jobOverview}</h5>
            <div className="border-stroke-4 dark:border-stroke-7 border-b py-4">
              <p className="text-secondary dark:text-accent text-xl leading-[150%]">{labels.datePosted}</p>
              <p className="text-lg leading-[150%]">{data?.datePosted}</p>
            </div>
            <div className="border-stroke-4 dark:border-stroke-7 border-b py-4">
              <p className="text-secondary dark:text-accent text-xl leading-[150%]">{labels.expirationDate}</p>
              <p className="text-lg leading-[150%]">{data?.expirationDate}</p>
            </div>
            <div className="border-stroke-4 dark:border-stroke-7 border-b py-4">
              <p className="text-secondary dark:text-accent text-xl leading-[150%]">{labels.location}</p>
              <p className="text-lg leading-[150%]">{data?.location}</p>
            </div>
            <div className="border-stroke-4 dark:border-stroke-7 border-b py-4">
              <p className="text-secondary dark:text-accent text-xl leading-[150%]">{labels.offeredSalary}</p>
              <p className="text-lg leading-[150%]">{data?.offeredSalary}</p>
            </div>
            <div className="border-stroke-4 dark:border-stroke-7 border-b py-4">
              <p className="text-secondary dark:text-accent text-xl leading-[150%]">{labels.experience}</p>
              <p className="text-lg leading-[150%]">{data?.experience}</p>
            </div>
            <div className="border-stroke-4 dark:border-stroke-7 border-b py-4">
              <p className="text-secondary dark:text-accent text-xl leading-[150%]">{labels.qualification}</p>
              <p className="text-lg leading-[150%]">{data?.qualification}</p>
            </div>
          </div>
          <div>
            <h5 className="mb-8">{labels.jobSkills}</h5>
            <div className="flex flex-wrap items-center gap-3">
              {data?.jobSkills?.map((skill) => (
                <span
                  key={skill}
                  className="bg-background-1 hover:bg-secondary dark:bg-background-6 border-stroke-4 dark:border-stroke-7 dark:hover:bg-accent dark:hover:text-secondary dark:text- text-secondary dark:text-accent font-base inline-block rounded-full border p-[9px] px-[18px] leading-[150%] font-medium transition-colors duration-500 ease-in-out hover:text-white">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full">
            <Link
              href={localizeHref('/contact-us', locale)}
              className="hover:btn-secondary dark:hover:btn-accent btn btn-primary btn-md w-full first-letter:uppercase before:content-none">
              {labels.applyNow}
            </Link>
          </div>
        </div>
      </div>
    </RevealAnimation>
  );
};

JobOverview.displayName = 'JobOverview';
export default JobOverview;
