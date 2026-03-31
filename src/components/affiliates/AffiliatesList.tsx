import RevealAnimation from '../animation/RevealAnimation';

interface AffiliateSection {
  id: string;
  title: string;
  description: string;
  items: string[];
}

const affiliateSectionsData: AffiliateSection[] = [
  {
    id: '1',
    title: 'İş ortağı avantajları',
    description:
      'İş ortaklığı programımıza katılmak, çabalarınızı ödüllendirmek ve başarınızla birlikte büyümek için tasarlanmış pek çok değerli ayrıcalıkla gelir. İş ortağı olarak, yönlendirdiğiniz her satış için rekabetçi komisyonlar kazanırsınız — kazanç potansiyelinizde sınır yoktur.',
    items: [
      'Tek bir satıştan 200$\'a kadar kazanç',
      'Kullanıma hazır görseller (banner, sosyal medya kitleri, şablonlar)',
      'İş ortaklığı pazarlama uzmanlarından mentorluk',
      'E-posta ile haftalık ipuçları ve güncellemeler',
      'Özel teklifler ve promosyon kampanyaları',
      'Gerçek zamanlı satış takip paneli',
      'İş ortaklarına özel destek',
    ],
  },
  {
    id: '2',
    title: 'Neler yapabilirsiniz',
    description:
      'Nerede olursanız olun veya geçmişiniz ne olursa olsun, fark yaratmanın anlamlı yolları vardır. Sizin için önemli olan konularda kendinizi eğiterek başlayın. Bilgi sahibi olun, sesini yükseltin ve başkalarını bilinçlendirin.',
    items: [
      'İş ve teknoloji topluluklarıyla etkileşim kurun ve değerli çözümler önerin',
      'Blog, eğitim veya ürün incelemeleri paylaşın (sosyal medya/podcast)',
      'Ürün karşılaştırmaları, demolar ve videolar paylaşın',
      'Kanallarınızda topluluk ve kullanım senaryoları rehberinizi oluşturun',
    ],
  },
  {
    id: '3',
    title: 'Neler yapamazsınız',
    description:
      'Tanıtım konusunda esneklik sunsak da, sınırlarımızı bilmek de en az o kadar önemlidir. Yapamayacaklarınızı anlamak bir zayıflık değil — büyüme, sorumluluk ve netliğe doğru bir adımdır.',
    items: [
      'İlgisiz tartışmalara spam bağlantılar göndermek',
      'Yanlış URL\'ler veya süresi dolmuş promosyon yöntemleri kullanmak',
      'TalepNET hakkında yanlış veya abartılı bilgi yaymak',
      'TalepNET\'i doğrudan rakiplerle birlikte tanıtmak',
      'Fırsatlarımızı sadece kupon/indirim sitelerinde listelemek',
    ],
  },
];

const AffiliatesList = () => {
  return (
    <article className="space-y-10 pt-14 md:space-y-[70px] md:pt-16 lg:pt-[88px] xl:pt-[100px]">
      {affiliateSectionsData.map((section, index) => (
        <RevealAnimation key={section.id} delay={0.1 + index * 0.1}>
          <div>
            <h3 className="text-heading-6 md:text-heading-5 mb-3 font-normal">{section.title}</h3>
            <p className="mb-8">{section.description}</p>
            <ul className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <li
                  key={itemIndex + 1}
                  className={`text-tagline-1 text-secondary/60 dark:text-accent/60 before:relative before:left-0 before:mr-3 before:h-5 before:w-5 before:content-[url('/images/icons/checkmark-white.svg')] before:max-md:top-0 dark:before:content-[url('/images/icons/checkmark-white.svg')] before:md:top-1${
                    itemIndex === 0 ? 'before:inline-block' : ''
                  }`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </RevealAnimation>
      ))}
    </article>
  );
};

AffiliatesList.displayName = 'AffiliatesList';
export default AffiliatesList;
