import { localizeHref } from '@/i18n/pathnames';
import LinkButton from '@/components/ui/button/LinkButton';
import bannerImage from '@public/images/ns-img-379.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

type Props = {
  title: string;
  introTitle: string;
  paragraphs: string[];
  locale: 'en' | 'tr';
  openRolesLabel: string;
};

const CareerContent = ({ title, introTitle, paragraphs, locale, openRolesLabel }: Props) => {
  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-3 text-center">
          <RevealAnimation delay={0.3}>
            <h2>{title}</h2>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.4}>
          <figure className="mb-18">
            <Image src={bannerImage} alt="banner-image" className="rounded-2xl" />
          </figure>
        </RevealAnimation>
        <RevealAnimation delay={0.5}>
          <div className="mx-auto max-w-[840px] space-y-8">
            <h4>{introTitle}</h4>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <LinkButton href={localizeHref('#current-openings', locale)} className="btn btn-primary btn-md">
              {openRolesLabel}
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CareerContent;
