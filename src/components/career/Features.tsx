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
    title: 'Esnek çalışma modeli',
    description: 'Uzaktan veya hibrit çalışma imkânı ile iş-yaşam dengenizi koruyun.',
    lightImage: featureAsset1,
    darkImage: featureAssetDark1,
  },
  {
    id: 2,
    title: 'Sürekli öğrenme fırsatları',
    description: 'Konferanslar, eğitimler ve sertifika programlarıyla kendinizi geliştirin.',
    lightImage: featureAsset2,
    darkImage: featureAssetDark2,
  },
  {
    id: 3,
    title: 'Rekabetçi ücret paketi',
    description: 'Sektör standardının üzerinde maaş ve yan haklar sunuyoruz.',
    lightImage: featureAsset3,
    darkImage: featureAssetDark3,
  },
  {
    id: 4,
    title: 'Kariyer gelişimi',
    description: 'Net kariyer yolları ve mentorluk programlarıyla büyüyün.',
    lightImage: featureAsset4,
    darkImage: featureAssetDark4,
  },
  {
    id: 5,
    title: 'Küresel ekip',
    description: 'Farklı ülkelerden yetenekli insanlarla birlikte çalışın.',
    lightImage: featureAsset5,
    darkImage: featureAssetDark5,
  },
  {
    id: 6,
    title: 'Yenilikçi projeler',
    description: 'Kurumsal satın alma dünyasını dönüştüren projelerde yer alın.',
    lightImage: featureAsset6,
    darkImage: featureAssetDark6,
  },
];

const Features: FC<FeaturesProps> = ({ className }) => {
  return (
    <section className={cn('dark:bg-background-6 bg-white', className)}>
      <div className="main-container">
        <div className="mb-8 text-center md:mb-[52px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-5">Avantajlarımız</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>
              TalepNET’ta çalışmanın
              <br className="hidden md:block" />
              avantajları
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>Ekibimize katılın ve kariyer yolculuğunuzu bizimle şekillendirin.</p>
          </RevealAnimation>
        </div>
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
