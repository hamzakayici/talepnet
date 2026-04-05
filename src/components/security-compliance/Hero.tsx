'use client';

import { useI18n } from '@/i18n/I18nProvider';
import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  const { messages } = useI18n();

  return (
    <section className="xl:pt-[200px] pt-[140px] xl:pb-28 lg:pb-20 pb-16">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <h1 className="font-normal text-center">{messages.legal.security.hero}</h1>
        </RevealAnimation>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
