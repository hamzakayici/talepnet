'use client';

import { useTranslations } from '@/i18n/useTranslations';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import { ReactNode } from 'react';
import { Workflow, ShoppingCart, Users } from 'lucide-react';

interface ServiceCard {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
}

const Services = () => {
  const t = useTranslations('home');
  const servicesData: ServiceCard[] = [
    {
      id: 1,
      icon: <Workflow className="text-secondary dark:text-accent size-10 sm:size-[52px]" strokeWidth={1.25} />,
      title: t('services.items.0.title'),
      description: t('services.items.0.description'),
    },
    {
      id: 2,
      icon: <ShoppingCart className="text-secondary dark:text-accent size-10 sm:size-[52px]" strokeWidth={1.25} />,
      title: t('services.items.1.title'),
      description: t('services.items.1.description'),
    },
    {
      id: 3,
      icon: <Users className="text-secondary dark:text-accent size-10 sm:size-[52px]" strokeWidth={1.25} />,
      title: t('services.items.2.title'),
      description: t('services.items.2.description'),
    },
  ];

  return (
    <RevealAnimation delay={0.1}>
      <section className="pt-[90px] pb-[50px] sm:pt-[100px] md:pt-[130px] md:pb-[100px] xl:pt-[200px]">
        <div className="main-container">
          <div className="mb-11 space-y-3 text-center md:mb-[70px]">
            <RevealAnimation delay={0.1}>
              <h2 className="mx-auto max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[828px]">
                {t('services.title')}
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="mx-auto max-w-[390px] sm:max-w-[450px] md:max-w-[600px]">
                {t('services.description')}
              </p>
            </RevealAnimation>
          </div>
          <div className="mb-10 grid grid-cols-12 gap-y-6 md:gap-8 lg:mb-14 lg:gap-9">
            {servicesData.map((service, index) => {
              const colSpanClass =
                index === 2 ? 'col-span-12 lg:col-span-4 md:col-span-12' : 'col-span-12 lg:col-span-4 md:col-span-6';

              return (
                <RevealAnimation key={service.id} delay={0.3 + index * 0.1}>
                  <div className={colSpanClass}>
                    <div className="group bg-background-2 dark:bg-background-5 space-y-4 rounded-[20px] p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:space-y-6 sm:p-8">
                      <div className="origin-bottom transform transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:scale-110">
                        {service.icon}
                      </div>
                      <div className="space-y-2">
                        <h3 className="sm:text-heading-5 text-heading-6 line-clamp-1">{service.title}</h3>
                        <p className="max-w-[273px]">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
          <RevealAnimation delay={0.6}>
            <div className="flex items-center justify-center">
              <LinkButton
                href="https://app.talepnet.com/sign-up"
                className="btn btn-secondary dark:btn-transparent hover:btn-primary btn-md mx-auto w-[90%] md:mx-0 md:w-auto">
                {t('services.cta')}
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Services;
