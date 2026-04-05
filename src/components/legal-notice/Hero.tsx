 'use client';

import { useI18n } from '@/i18n/I18nProvider';
import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  const { messages } = useI18n();

  return (
    <section className="pt-[140px] pb-14 xl:pt-[170px]">
      <div className="main-container">
        <div className="text-center">
          <RevealAnimation delay={0.1} instant>
            <h1 className="font-normal">{messages.legal.notice.hero}</h1>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
