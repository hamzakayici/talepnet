import privacy from '@public/images/ns-img-391.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

interface PrivacySection {
  title: string;
  content: string;
}

interface ListSection {
  title: string;
  description?: string;
  items: ListItem[];
}

interface ListItem {
  title?: string;
  content: string;
}

interface FormField {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type: string;
}

const personalInfoSection: PrivacySection = {
  title: 'Topladığımız kişisel bilgiler',
  content:
    'Siteyi ziyaret ettiğinizde, cihazınız hakkında web tarayıcınız, IP adresiniz, saat diliminiz ve cihazınıza yüklenen çerezler gibi belirli bilgileri otomatik olarak toplarız. Ayrıca siteye göz atarken görüntülediğiniz sayfalar, sizi siteye yönlendiren web siteleri veya arama terimleri ve site ile nasıl etkileşim kurduğunuz hakkında bilgi toplarız.',
};

const deviceInfoItems: ListItem[] = [
  {
    title: 'Hesap ve İletişim Verileri',
    content:
      'Ad, şirket, e-posta, telefon, görev, fatura bilgileri.',
  },
  {
    title: 'Kullanım Verileri',
    content:
      'Ürün etkileşimleri, özellik kullanımı, ayarlar, cihaz bilgisi, görüntülenen sayfalar.',
  },
  {
    title: 'Günlük ve Teşhis Verileri',
    content: 'IP adresi, tarayıcı türü, ISS, zaman damgaları, yönlendiren/çıkış sayfaları, güvenlik ve güvenilirlik için istek kimlikleri.',
  },
  {
    title: 'Çerezler ve Benzeri Teknolojiler',
    content: 'Tercihleri hatırlamak, oturumları sürdürmek ve performansı ölçmek için tanımlayıcılar.',
  },
  {
    title: 'Destek İçeriği',
    content: 'Destek kanallarımıza ilettiğiniz mesajlar, ekler ve geri bildirimler.',
  },
];

const orderInfoText =
  'TalepNET olarak gizliliğinizi korumayı taahhüt ediyoruz. Bu Politika, ziyaretçiler, müşteriler ve hizmet kullanıcılarına ilişkin işlediğimiz kişisel veriler için geçerlidir. Bazı özellikler için ek hükümler uygulanabilir (ör. kurumsal müşteriler için Veri İşleme Sözleşmesi).';

const formFields: FormField[] = [
  {
    id: 'name',
    name: 'name',
    label: 'Adınız',
    placeholder: 'Adınızı girin',
    type: 'text',
  },
  {
    id: 'company',
    name: 'company',
    label: 'Şirket adı',
    placeholder: 'Şirket adınızı girin',
    type: 'text',
  },
  {
    id: 'phone',
    name: 'phone',
    label: 'Telefon numarası',
    placeholder: '+90 (5XX) XXX XX XX',
    type: 'tel',
  },
  {
    id: 'email',
    name: 'email',
    label: 'E-posta adresi',
    placeholder: 'E-posta adresinizi girin',
    type: 'email',
  },
];

const useInfoSection: ListSection = {
  title: 'Bilgilerinizi nasıl kullanıyoruz',
  description: 'Toplanan bilgileri şu amaçlarla kullanırız:',
  items: [
    { content: 'Hizmetleri sağlamak, işletmek ve sürdürmek' },
    { content: 'Kullanıcıları doğrulamak, dolandırıcılığı önlemek ve güvenliği sağlamak' },
    { content: 'İşlemleri, faturalamayı ve hesap yönetimini gerçekleştirmek' },
    { content: 'Performansı iyileştirmek, yeni özellikler geliştirmek ve analiz yapmak' },
    { content: 'Taleplere yanıt vermek ve müşteri desteği sunmak' },
    { content: 'Yasal yükümlülüklere uymak ve Hizmet Şartlarımızı uygulamak' },
  ],
};

const deviceInfoUsage: ListItem[] = [
  { content: 'Site deneyimini iyileştirmek ve optimize etmek' },
  { content: 'Müşteri etkileşimlerini performans takibi için analiz etmek' },
  { content: 'Olası risk ve dolandırıcılığı taramak' },
];

const sharingInfoSection: ListSection = {
  title: 'Kişisel bilgilerinizin paylaşımı',
  description:
    'Verileri bizim adımıza işleyen güvenilir hizmet sağlayıcılarla paylaşabiliriz:',
  items: [
    {
      content:
        'Barındırma, müşteri desteği, analitik, e-posta teslimi, ödeme işlemleri sağlayıcıları',
    },
    { content: 'Bu sağlayıcılar sözleşmesel yükümlülüklere tabidir ve verileri yalnızca talimatlarımız doğrultusunda işler' },
    { content: 'Kişisel verileri satmayız' },
  ],
};

const rightsSection: ListSection = {
  title: 'Haklarınız',
  description: 'Yürürlükteki hukuk uyarınca aşağıdaki haklara sahip olabilirsiniz:',
  items: [
    { content: 'Kişisel verilerinize erişme, düzeltme, silme, işlemeyi kısıtlama, itiraz etme veya taşınabilirlik talep etme' },
    {
      content:
        'Bu hakları kullanmak için lütfen <a href="mailto:info@talepnet.com" class="text-secondary dark:text-accent">info@talepnet.com</a> adresinden bize ulaşın',
    },
  ],
};

const simpleSections: PrivacySection[] = [
  {
    title: 'Takip etme (Do Not Track)',
    content:
      'Hizmetlerimiz şu anda Do Not Track sinyallerine yanıt vermemektedir. Çerezleri tarayıcı ayarlarınızdan yönetebilirsiniz.',
  },
  {
    title: 'Veri saklama',
    content: 'Kişisel verileri, bu Politikada belirtilen amaçları yerine getirmek, yasal yükümlülüklere uymak, uyuşmazlıkları çözmek ve sözleşmeleri uygulamak için gerekli olduğu sürece saklarız.',
  },
  {
    title: 'Çocukların gizliliği',
    content: 'Hizmetler 16 yaşın altındaki çocuklara yönelik değildir ve bilerek kişisel veri toplamıyoruz.',
  },
  {
    title: 'Güvenlik',
    content:
      'Bilgileri korumak için idari, teknik ve fiziksel tedbirler uygularız. Kişisel verileri etkileyen bir güvenlik olayı tespit edilirse, yasaların gerektirdiği şekilde etkilenen taraflara bildirimde bulunuruz.',
  },
  {
    title: 'Bu politikadaki değişiklikler',
    content:
      'Bu Politika zaman zaman güncellenebilir. Önemli değişiklikler Hizmetler veya e-posta yoluyla bildirilecektir. Yürürlük tarihinden sonra kullanımı sürdürmeniz, güncellenmiş Politikayı kabul ettiğiniz anlamına gelir.',
  },
];

const PrivacyContent = () => {
  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        <div className="privacy-policy space-y-[75px]">
          {/* Header Section */}
          <div className="space-y-2">
            <RevealAnimation delay={0.1}>
              <h2>Gizlilik Politikası</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                <span className="text-secondary dark:text-accent">TalepNET</span>,{' '}
                <span className="text-secondary dark:text-accent">TalepNET Teknoloji A.Ş.</span> tarafından işletilen
                kurumsal satın alma yönetimi platformudur. Gizliliğinizi korumak ve bilgilerinizi şeffaf bir şekilde
                yönetmek en önemli önceliklerimizden biridir.
              </p>
            </RevealAnimation>
          </div>

          {/* Policy Intro */}
          <RevealAnimation delay={0.3}>
            <div className="space-y-2">
              <h4>TalepNET Gizlilik Politikası</h4>
              <p>
                Bu Gizlilik Politikası, kişisel bilgilerinizin{' '}
                <Link href="https://www.talepnet.com" className="text-secondary dark:text-accent">
                  talepnet.com
                </Link>
                {' '}ziyaret ettiğinizde, abone olduğunuzda, kayıt olduğunuzda veya satın alma yaptığınızda nasıl
                toplandığını, kullanıldığını ve paylaşıldığını açıklar.
              </p>
            </div>
          </RevealAnimation>
          {/* Personal Information Collection */}
          <div className="space-y-6">
            <RevealAnimation delay={0.4}>
              <div className="space-y-2">
                <h4>{personalInfoSection.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: personalInfoSection.content }} />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                {deviceInfoItems.map((item, index) => (
                  <li key={index + 1}>
                    <strong className="text-secondary dark:text-accent font-normal">{item.title} – </strong>
                    <span dangerouslySetInnerHTML={{ __html: item.content }} />
                  </li>
                ))}
              </ul>
            </RevealAnimation>
          </div>
          {/* Order Information Section with Form */}
          <div>
            <div className="grid grid-cols-12 gap-y-[100px] lg:gap-[100px]">
              <div className="col-span-12 lg:col-span-6">
                <RevealAnimation delay={0.6}>
                  <div className="mb-[70px] text-left">
                    <p className="max-w-[550px]">{orderInfoText}</p>
                  </div>
                </RevealAnimation>
                <RevealAnimation delay={0.7}>
                  <figure className="w-full max-w-[595px] self-end overflow-hidden rounded-[20px]">
                    <Image src={privacy} className="size-full object-cover" alt="gizlilik-politikası" />
                  </figure>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.8}>
                <div className="col-span-12 lg:col-span-6">
                  <form className="dark:bg-background-8 rounded-[20px] bg-white p-6 lg:p-[42px]">
                    {formFields.map((field, index) => (
                      <fieldset key={field.id} className={`space-y-2 ${index < formFields.length - 1 ? 'mb-8' : ''}`}>
                        <label
                          htmlFor={field.id}
                          className="text-tagline-1 text-secondary dark:text-accent block font-medium">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          id={field.id}
                          placeholder={field.placeholder}
                          className="dark:text-accent dark:bg-background-6 border-stroke-3 dark:border-stroke-7 bg-background-1 focus-visible:outline-primary-500 placeholder:text-tagline-1 placeholder:text-secondary/60 dark:placeholder:text-accent/60 shadow-1 block h-12 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                        />
                      </fieldset>
                    ))}
                    <fieldset className="mt-4 mb-4 flex items-center gap-2">
                      <label htmlFor="agree-terms" className="flex items-center gap-x-3">
                        <input id="agree-terms" type="checkbox" className="peer sr-only" required />
                        <span className="border-stroke-3 dark:border-stroke-7 after:bg-primary-500 peer-checked:border-primary-500 relative size-4 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:opacity-0 peer-checked:after:opacity-100" />
                      </label>
                      <label
                        htmlFor="agree-terms"
                        className="text-tagline-3 text-secondary/60 dark:text-accent/60 cursor-pointer">
                        {' '}
                        <Link href="/terms-conditions" className="text-primary-500 text-tagline-3 underline">
                          Hizmet şartlarını
                        </Link>
                        {' '}kabul ediyorum
                      </label>
                    </fieldset>
                    <button
                      type="submit"
                      className="btn dark:btn-accent btn-md btn-secondary hover:btn-primary w-full first-letter:uppercase before:content-none">
                      Gönder
                    </button>
                  </form>
                </div>
              </RevealAnimation>
            </div>
          </div>
          {/* How We Use Information */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>{useInfoSection.title}</h4>
                <p>{useInfoSection.description}</p>
              </div>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                {useInfoSection.items.map((item, index) => (
                  <li key={index + 1}>{item.content}</li>
                ))}
              </ul>
              <div>
                <p className="text-secondary dark:text-accent">Topladığımız cihaz bilgilerini şu amaçlarla kullanırız:</p>
                <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                  {deviceInfoUsage.map((item, index) => (
                    <li key={index + 1}>{item.content}</li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealAnimation>

          {/* Sharing Information */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>{sharingInfoSection.title}</h4>
                <p>{sharingInfoSection.description}</p>
              </div>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                {sharingInfoSection.items.map((item, index) => (
                  <li key={index + 1} dangerouslySetInnerHTML={{ __html: item.content }} />
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Your Rights */}
          <RevealAnimation delay={0.8}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>{rightsSection.title}</h4>
                <p>{rightsSection.description}</p>
              </div>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                {rightsSection.items.map((item, index) => (
                  <li key={index + 1} dangerouslySetInnerHTML={{ __html: item.content }} />
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Simple Sections */}
          {simpleSections.map((section, index) => (
            <RevealAnimation key={section.title} delay={0.7 + index * 0.1}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4>{section.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: section.content }} />
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;
