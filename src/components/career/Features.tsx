import { cn } from '@/utils/cn';
import featureAsset1 from '@public/images/ns-img-67.png';
import featureAsset2 from '@public/images/ns-img-68.png';
import featureAsset3 from '@public/images/ns-img-69.png';
import featureAsset4 from '@public/images/ns-img-70.png';
import featureAsset5 from '@public/images/ns-img-71.png';
import featureAsset6 from '@public/images/ns-img-72.png';
import featureAssetDark1 from '@public/images/ns-img-dark-44.png';
import featureAssetDark2 from '@public/images/ns-img-dark-45.png';
import featureAssetDark3 from '@public/images/ns-img-dark-46.png';
import featureAssetDark4 from '@public/images/ns-img-dark-47.png';
import featureAssetDark5 from '@public/images/ns-img-dark-48.png';
import featureAssetDark6 from '@public/images/ns-img-dark-49.png';
import Image from 'next/image';
import { FC } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

interface FeaturesProps {
  className?: string;
}

const data = [
  {
    id: 1,
    title: 'Focused work',
    description: 'A small team, direct communication, and less internal noise around the work that matters.',
    lightImage: featureAsset1,
    darkImage: featureAssetDark1,
  },
  {
    id: 2,
    title: 'Real ownership',
    description: 'Roles are not boxed in. You help shape decisions, priorities, and execution across the company.',
    lightImage: featureAsset2,
    darkImage: featureAssetDark2,
  },
  {
    id: 3,
    title: 'Product proximity',
    description: 'You stay close to the product, the customer problem, and the impact of your work.',
    lightImage: featureAsset3,
    darkImage: featureAssetDark3,
  },
  {
    id: 4,
    title: 'Early-stage momentum',
    description: 'We are still building the foundation, which means the work is meaningful and the pace is real.',
    lightImage: featureAsset4,
    darkImage: featureAssetDark4,
  },
  {
    id: 5,
    title: 'Clear communication',
    description: 'We value direct thinking, good judgment, and people who can move work forward without drama.',
    lightImage: featureAsset5,
    darkImage: featureAssetDark5,
  },
  {
    id: 6,
    title: 'B2B SaaS context',
    description: 'You will work on a real operating problem for procurement, finance, and operations teams.',
    lightImage: featureAsset6,
    darkImage: featureAssetDark6,
  },
];

const Features: FC<FeaturesProps> = ({ className }) => {
  return (
    <section className={cn('dark:bg-background-6 bg-white', className)}>
      <div className="main-container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <RevealAnimation key={item.id} delay={0.3 + index * 0.1}>
              <div className="bg-background-2 dark:bg-background-5 space-y-6 rounded-[20px] p-6">
                <figure>
                  <Image
                    src={item.lightImage}
                    alt="feature"
                    className="block h-full w-full rounded-2xl object-cover dark:hidden"
                  />
                  <Image
                    src={item.darkImage}
                    alt="feature"
                    className="hidden h-full w-full rounded-2xl object-cover dark:block"
                  />
                </figure>
                <div>
                  <h3 className="text-heading-6 sm:text-heading-5 mb-1 font-normal sm:mb-3">{item.title}</h3>
                  <p className="mb-2">{item.description}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
