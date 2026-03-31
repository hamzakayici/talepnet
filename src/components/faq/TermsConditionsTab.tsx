import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const faqData = [
  {
    id: 1,
    question: 'Hizmet şartları nedir?',
    answer:
      'Hizmet şartları, TalepNET platformunu kullanırken uymanız gereken kuralları ve koşulları belirleyen yasal bir belgedir. Hem sizin hem de platformun haklarını korur.',
  },
  {
    id: 2,
    question: 'Hizmet şartlarını neden kabul etmem gerekiyor?',
    answer:
      'Hizmet şartlarını kabul etmek, hizmetlerimizi kullanırken haklarınızı, sorumluluklarınızı ve politikalarımızı anladığınızdan emin olmanızı sağlar. Bu, hem sizi hem de platformumuzu korur.',
  },
  {
    id: 3,
    question: 'Hizmet şartları değişebilir mi?',
    answer:
      'Evet, TalepNET hizmet şartlarını zaman zaman güncelleyebilir. Önemli değişiklikler e-posta veya platform üzerinden bildirilecektir. Güncellemelerden sonra hizmeti kullanmaya devam etmeniz, yeni şartları kabul ettiğiniz anlamına gelir.',
  },
  {
    id: 4,
    question: 'Hizmet şartlarını ihlal edersem ne olur?',
    answer:
      'TalepNET, hizmet şartlarının ihlali durumunda hesabınızı askıya alma veya feshetme hakkını saklı tutar. Kötüye kullanım, yetkisiz dağıtım veya yasa dışı faaliyetler bu kapsamda değerlendirilir.',
  },
  {
    id: 5,
    question: 'Tam hizmet şartlarını nerede okuyabilirim?',
    answer:
      'Tam hizmet şartlarımıza web sitemizden /terms-conditions sayfasından veya hesap ayarlarınızdan erişebilirsiniz. Herhangi bir sorunuz varsa info@talepnet.com adresinden bize ulaşabilirsiniz.',
  },
  {
    id: 6,
    question: 'Hangi faaliyetler hizmet şartlarına göre yasaktır?',
    answer:
      'TalepNET personeline veya müşterilerine yönelik kötü niyetli davranış, yetkisiz yeniden satış, bilgisayar korsanlığı, spam, korsan yazılım ve yasa dışı faaliyetler yasaktır. Detaylar için hizmet şartlarımızı inceleyebilirsiniz.',
  },
];

const TermsConditionsTab = () => {
  return (
    <Accordion
      className="mx-auto w-full max-w-[850px] space-y-4"
      defaultValue="1"
      enableScrollAnimation={true}
      animationDelay={0.1}>
      {faqData.map((item) => (
        <AccordionItem
          className="dark:bg-background-7 rounded-[20px] bg-white px-6 sm:px-8"
          key={item.id}
          value={item.id.toString()}>
          <AccordionTrigger
            titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
            className="flex w-full cursor-pointer items-center justify-between pt-5 pb-5 sm:pt-8 sm:pb-8"
            value={item.id.toString()}
            iconType="arrow">
            {item.question}
          </AccordionTrigger>
          <AccordionContent value={item.id.toString()}>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default TermsConditionsTab;
