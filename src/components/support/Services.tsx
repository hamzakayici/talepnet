import gradient16 from '@public/images/ns-img-495.png';
import gradient3 from '@public/images/ns-img-508.png';
import gradient27 from '@public/images/ns-img-515.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Services = () => {
  return (
    <section className="py-[100px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Hizmetlerimiz</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 className="mx-auto max-w-[810px]">Dünya genelindeki lider şirketler TalepNET'e güveniyor.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[542px]">
                Satın alma süreçlerinizi dijitalleştirmek ve tedarik yönetiminizi optimize etmek için
                ihtiyacınız olan tüm araçları sunuyoruz.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 max-md:gap-y-8 md:gap-8">
          <RevealAnimation delay={0.4}>
            <div className="col-span-12 md:col-span-4">
              <div className="bg-background-2 dark:bg-background-6 relative z-10 space-y-6 overflow-hidden rounded-[20px] px-6 py-8">
                {/* bg gradient */}
                <figure className="pointer-events-none absolute -top-[66%] -left-[60%] -z-10 size-[410px] rotate-[304deg] select-none">
                  <Image src={gradient3} className="size-full object-contain" alt="gradient-16" />
                </figure>
                <div>
                  <div className="flex items-center justify-center">
                    <span className="ns-shape-9 text-secondary dark:text-accent text-[52px]"> </span>
                  </div>
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-heading-5">Canlı Sohbet</h3>
                  <p className="line-clamp-2">
                    Satış öncesi sorularınız için anlık yardım alın. Canlı sohbetimiz üzerinden her türlü
                    sorunuzu iletebilirsiniz.
                  </p>
                </div>
                <div className="text-center">
                  <LinkButton
                    href="/procurement-software"
                    className="btn btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent btn-md">
                    Sohbeti Başlatın
                  </LinkButton>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="col-span-12 md:col-span-4">
              <div className="bg-background-2 dark:bg-background-6 relative z-10 space-y-6 overflow-hidden rounded-[20px] px-6 py-8">
                <figure className="pointer-events-none absolute -top-[74%] -right-[70%] -z-10 size-[410px] rotate-[175deg] select-none">
                  <Image src={gradient27} className="size-full object-contain" alt="gradient-16" />
                </figure>
                <div>
                  <div className="flex items-center justify-center">
                    <span className="ns-shape-3 text-secondary dark:text-accent text-[52px]"> </span>
                  </div>
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-heading-5">Destek Talebi</h3>
                  <p className="line-clamp-2">
                    Detaylı teknik destek için bir talep oluşturun. Kişiye özel ve ayrıntılı bir
                    çözüm sunacağız.
                  </p>
                </div>
                <div className="text-center">
                  <LinkButton
                    href="/procurement-software"
                    className="btn btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent btn-md">
                    Talep Oluşturun
                  </LinkButton>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="col-span-12 md:col-span-4">
              <div className="bg-background-2 dark:bg-background-6 relative z-10 space-y-6 overflow-hidden rounded-[20px] px-6 py-8">
                <figure className="pointer-events-none absolute -top-[74%] -right-[35%] -z-10 size-[410px] rotate-[175deg] select-none">
                  <Image src={gradient16} className="size-full object-contain" alt="gradient-16" />
                </figure>
                <div>
                  <div className="flex items-center justify-center">
                    <span className="ns-shape-12 text-secondary dark:text-accent text-[52px]"> </span>
                  </div>
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-heading-5">Bilgi Tabanı</h3>
                  <p className="line-clamp-2">
                    Kapsamlı kılavuzlar ve dokümantasyon. En yaygın konular için adım adım talimatlar
                    ve çözümler bulun.
                  </p>
                </div>
                <div className="text-center">
                  <LinkButton
                    href="/procurement-software"
                    className="btn btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent btn-md">
                    Bilgi Tabanını Ziyaret Edin
                  </LinkButton>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Services;
