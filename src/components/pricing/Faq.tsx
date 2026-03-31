import faqImg from '@public/images/ns-img-52.png';
import faqImgDark from '@public/images/ns-img-dark-31.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const Faq = () => {
  return (
    <section
      className="py-[50px] md:py-[70px] lg:py-[85px] xl:pt-[200px] xl:pb-[100px]"
      aria-label="Sık Sorulan Sorular">
      <div className="main-container">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0">
          <div className="flex-1 space-y-14 text-center lg:text-left">
            <div className="space-y-5">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-cyan">SSS</span>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h2 className="mx-auto lg:mx-0 lg:max-w-[439px]" id="faq-heading">
                  Fiyatlandırma hakkında sık sorulan sorular
                </h2>
              </RevealAnimation>
            </div>

            {/* faq accordion  */}
            <RevealAnimation delay={0.4}>
              <Accordion className="mx-auto w-full max-w-[576px] lg:mx-0" defaultValue="1">
                <AccordionItem value="1">
                  <AccordionTrigger
                    className="flex w-full cursor-pointer items-center justify-between pt-6 pb-6"
                    titleClassName="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                    value="1"
                    iconType="arrow">
                    TalepNET&apos;i ücretsiz deneyebilir miyim?
                  </AccordionTrigger>

                  <AccordionContent value="1">
                    Evet, TalepNET 14 gün boyunca ücretsiz deneme imkânı sunmaktadır. Deneme süresinde platformun
                    tüm özelliklerine tam erişim sağlayabilirsiniz. Kredi kartı bilgisi gerekmez ve deneme süresi
                    sonunda otomatik ücretlendirme yapılmaz.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="2">
                  <AccordionTrigger
                    className="flex w-full cursor-pointer items-center justify-between pt-6 pb-6"
                    titleClassName="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                    value="2"
                    iconType="arrow">
                    Planlar arasında geçiş yapabilir miyim?
                  </AccordionTrigger>

                  <AccordionContent value="2">
                    Evet, istediğiniz zaman planınızı yükseltebilir veya düşürebilirsiniz. Plan değişiklikleri
                    bir sonraki fatura döneminden itibaren geçerli olur. Yükseltme durumunda fark ücreti
                    orantılı olarak hesaplanır.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="3">
                  <AccordionTrigger
                    className="flex w-full cursor-pointer items-center justify-between pt-6 pb-6"
                    titleClassName="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                    value="3"
                    iconType="arrow">
                    Kurumsal plan için minimum kullanıcı sayısı var mı?
                  </AccordionTrigger>

                  <AccordionContent value="3">
                    Kurumsal plan, genellikle 25 ve üzeri kullanıcı ihtiyacı olan organizasyonlar için tasarlanmıştır.
                    Ancak özel ihtiyaçlarınıza göre esnek çözümler sunuyoruz. Detaylı bilgi için satış ekibimizle
                    iletişime geçebilirsiniz.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="4">
                  <AccordionTrigger
                    className="flex w-full cursor-pointer items-center justify-between pt-6 pb-6"
                    titleClassName="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                    value="4"
                    iconType="arrow">
                    Hangi ödeme yöntemlerini kabul ediyorsunuz?
                  </AccordionTrigger>

                  <AccordionContent value="4">
                    Kredi kartı, banka kartı ve havale/EFT ile ödeme kabul ediyoruz. Kurumsal müşteriler için
                    fatura bazlı ödeme seçenekleri de mevcuttur. Tüm ödemeler SSL şifrelemesi ile güvence altındadır.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </RevealAnimation>
          </div>

          {/* <!-- faq image --> */}
          <RevealAnimation delay={0.3}>
            <figure className="relative w-full max-w-[684px] flex-1 overflow-hidden">
              <Image
                className="size-full object-cover dark:hidden"
                src={faqImg}
                alt="TalepNET fiyatlandırma SSS"
                loading="lazy"
              />
              <Image
                className="hidden size-full object-cover dark:inline-block"
                src={faqImgDark}
                alt="TalepNET fiyatlandırma SSS"
                loading="lazy"
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Faq;
