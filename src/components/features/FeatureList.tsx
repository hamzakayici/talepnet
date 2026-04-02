import { CheckIcon } from '@/icons';
import { cn } from '@/utils/cn';
import aboutBg from '@public/images/ns-img-14.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface FeatureListItem {
  id: string;
  text: string;
}

const FeatureList = ({ className, btnClassName }: { className?: string; btnClassName?: string }) => {
  const featuresListData: FeatureListItem[] = [
    {
      id: 'innovative-startups',
      text: 'Yenilikçi girişimler ve büyüme odaklı şirketler sektörlerini yeniden tanımlıyor',
    },
    {
      id: 'enterprise-teams',
      text: 'Kurumsal ekipler büyük organizasyonların bel kemiğini oluşturuyor',
    },
    {
      id: 'agencies-consultants',
      text: 'Ajanslar ve danışmanlar işletmelere büyümelerinde yardımcı oluyor',
    },
    {
      id: 'finance-marketing',
      text: 'Finans, pazarlama ve ürün ekipleri değer yaratmak için iş birliği yapıyor',
    },
  ];

  return (
    <section className={className}>
      <RevealAnimation delay={0.2}>
        <div className="main-container">
          <div className="relative z-10">
            <div className="absolute top-0 right-0 bottom-0 left-0 -z-10 overflow-hidden rounded-[20px]">
              <Image src={aboutBg} alt="about bg" className="h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-5 px-6 py-14 max-lg:grid-cols-1 max-sm:gap-10 lg:px-11">
              <div className="max-w-[500px]">
                <h2 className="text-accent sm:text-heading-5 text-heading-6 mb-8">
                  Değerli müşterilerimize en iyi hizmeti sunmak için çalışıyoruz.
                </h2>
                <LinkButton href="/procurement-software" className={cn('btn btn-primary', btnClassName)}>
                  Ücretsiz Başlayın
                </LinkButton>
              </div>
              <div>
                <ul className="space-y-4">
                  {featuresListData.map((feature) => (
                    <li key={feature.id} className="flex items-center gap-2">
                      <span className="bg-accent/17 dark:bg-accent/10 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <CheckIcon className="dark:fill-accent" />
                      </span>
                      <span className="text-accent">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

FeatureList.displayName = 'FeatureList';
export default FeatureList;
