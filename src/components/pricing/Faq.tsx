import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const pricingFaqs = [
  {
    question: 'TalepNET’i ücretsiz kullanmaya başlayabilir miyim?',
    answer:
      'Evet. TalepNET, 1 kullanıcı için ücretsiz bir başlangıç sunar; böylece ekipler ücretli bir devreye alma planına hemen geçmeden başlayabilir.',
  },
  {
    question: 'Bir ekip ücretsiz başlangıç noktasının ötesine ne zaman geçmeli?',
    answer:
      'Ekipler genellikle daha fazla kullanıcıya, daha yüksek işlem limitlerine, daha güçlü raporlamaya veya daha derin iş akışlarına ihtiyaç duyduğunda Team ya da Business planına geçer.',
  },
  {
    question: 'Business ve Enterprise plan arasındaki fark nedir?',
    answer:
      'Business planı daha geniş iş akışı derinliği, raporlama ve operasyonel ölçek sunar. Enterprise plan ise gelişmiş güvenlik, entegrasyon, destek ve daha büyük devreye alma ihtiyaçları için tasarlanmıştır.',
  },
  {
    question: 'Özel fiyat teklifi nasıl alabilirim?',
    answer:
      'Ekibinizin özel bir devreye alma planına, özel entegrasyonlara veya kurumsal gereksinimlere ihtiyacı varsa Teklif İste seçeneğini kullanın; ekibimiz sizinle iletişime geçecektir.',
  },
];

const Faq = () => {
  return (
    <section className="bg-white py-20 dark:bg-background-5 md:py-24 xl:py-28">
      <div className="main-container">
        <div className="mx-auto max-w-3xl text-center">
          <RevealAnimation delay={0.12}>
            <span className="badge badge-green !normal-case">Fiyatlandırma SSS</span>
          </RevealAnimation>
          <RevealAnimation delay={0.18}>
            <h2 className="mt-5 text-3xl font-normal text-secondary dark:text-accent sm:text-4xl">
              Planlar ve devreye alma hakkında sık sorulan sorular
            </h2>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.24}>
          <Accordion className="mx-auto mt-12 w-full max-w-4xl" defaultValue="0">
            {pricingFaqs.map((item, index) => (
              <AccordionItem key={item.question} value={String(index)} className="rounded-[24px] border border-stroke-3 px-6 dark:border-stroke-7">
                <AccordionTrigger
                  className="flex w-full cursor-pointer items-center justify-between py-6"
                  titleClassName="flex-1 text-left text-tagline-1 font-normal text-secondary dark:text-accent xl:text-heading-6"
                  value={String(index)}
                  iconType="arrow"
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent value={String(index)}>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Faq;
