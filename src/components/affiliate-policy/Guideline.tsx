'use client';

import { useI18n } from '@/i18n/I18nProvider';
import affiliateCover from '@public/images/ns-img-370.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const Guideline = () => {
  const { messages } = useI18n();
  const affiliate = messages.legal.affiliate;

  return (
    <section className="pt-32 pb-28 sm:pt-36 md:pt-42 md:pb-36 lg:pb-44 xl:pt-[180px] 2xl:pb-[200px]">
      <div className="main-container">
        <div className="space-y-14 md:space-y-20 lg:space-y-[100px]">
          <div className="mx-auto max-w-[780px] space-y-3 text-center">
            <RevealAnimation delay={0.3}>
              <span className="badge badge-cyan mb-5">{affiliate.heroBadge}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <h2>{affiliate.heroTitle}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <p>{affiliate.heroDescription}</p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.6} instant={true}>
            <figure className="max-w-full overflow-hidden rounded-[20px]">
              <Image
                src={affiliateCover}
                quality={100}
                className="h-full w-full object-cover object-center"
                alt="blog-details-cover"
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Guideline;
