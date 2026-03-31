import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const faqData = [
  {
    id: 1,
    question: 'Dijital dünyada gizlilik nedir?',
    answer:
      'Dijital gizlilik, internet üzerindeki kişisel bilgilerinizin korunmasını ifade eder. TalepNET olarak, satın alma süreçlerinizde işlenen tüm verileri KVKK ve GDPR standartlarında güvende tutuyoruz.',
  },
  {
    id: 2,
    question: 'Çevrimiçi gizlilik neden önemlidir?',
    answer:
      'Çevrimiçi varlığınız alışkanlıklarınız, konumunuz ve kimliğiniz hakkında geniş kapsamlı kişisel bilgiler ortaya koyabilir. Gizliliğinizi korumak, kimlik hırsızlığını önlemek ve özel bilgilerinizin kötüye kullanılmasını engellemek için hayati önem taşır.',
  },
  {
    id: 3,
    question: 'TalepNET verilerimi nasıl koruyor?',
    answer:
      'TalepNET, verilerinizi korumak için idari, teknik ve fiziksel tedbirler uygulamaktadır. Şifreleme, erişim kontrolü ve düzenli güvenlik denetimleri ile verileriniz güvende tutulur.',
  },
  {
    id: 4,
    question: 'TalepNET hangi verileri topluyor?',
    answer:
      'Hesap bilgileri (ad, e-posta, telefon), kullanım verileri (sayfa görüntülemeleri, özellik kullanımı), günlük verileri (IP adresi, tarayıcı bilgisi) ve destek içerikleri (mesajlar, geri bildirimler) toplanmaktadır.',
  },
  {
    id: 5,
    question: 'Verilerimin silinmesini talep edebilir miyim?',
    answer:
      'Evet, KVKK ve GDPR kapsamında kişisel verilerinize erişme, düzeltme, silme, işlemeyi kısıtlama ve taşınabilirlik talep etme haklarınız bulunmaktadır. info@talepnet.com adresinden bize ulaşabilirsiniz.',
  },
  {
    id: 6,
    question: 'TalepNET çerez politikası nedir?',
    answer:
      'Tercihleri hatırlamak, oturumları sürdürmek ve içerik etkinliğini ölçmek için çerezler kullanırız. Zorunlu çerezler site işlevselliği için gereklidir. Analitik çerezleri tarayıcı ayarlarınızdan yönetebilirsiniz.',
  },
];

const PrivacyTab = () => {
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

export default PrivacyTab;
