import RevealAnimation from '../animation/RevealAnimation';

interface ListItem {
  id: string;
  text: string;
}

interface DataCollectionItem {
  id: string;
  label: string;
  description: string;
}

interface ThirdPartyService {
  id: string;
  name: string;
  description: string;
}

interface DataRight {
  id: string;
  action: string;
  description: string;
}

const GdprContent = () => {
  // Belge amacı öğeleri
  const purposeItems: ListItem[] = [
    { id: 'who-we-are', text: 'Biz kimiz' },
    { id: 'data-types', text: 'Ne tür veriler topluyoruz?' },
    { id: 'why-collect', text: 'Verileri neden topluyoruz?' },
    { id: 'retention', text: 'Verilerinizi ne kadar süre saklıyoruz?' },
    { id: 'third-party', text: 'Kullandığımız üçüncü taraf hizmetler' },
    { id: 'data-rights', text: 'Verileriniz üzerindeki haklarınız' },
    { id: 'manage-data', text: 'Bilgilerinizi nasıl yönetebilir, güncelleyebilir veya silebilirsiniz' },
    { id: 'contact', text: 'Verileriniz hakkında bize nasıl ulaşabilirsiniz' },
  ];

  // Güncellenen belgeler
  const updatedItems: ListItem[] = [
    { id: 'terms', text: 'Hizmet şartları' },
    { id: 'privacy', text: 'Gizlilik politikası' },
    { id: 'cookies', text: 'Çerez politikası' },
  ];

  // Veri toplama öğeleri
  const dataCollectionItems: DataCollectionItem[] = [
    {
      id: 'account-info',
      label: 'Hesap Bilgileri:',
      description: 'Hesap kaydı sırasında adınız, e-posta adresiniz, telefon numaranız ve fatura adresiniz.',
    },
    {
      id: 'order-data',
      label: 'Kullanım Verileri:',
      description:
        'IP adresi, web tarayıcı bilgileri, ürün etkileşimleri, özellik kullanımı, görüntülenen sayfalar ve cihaz bilgileri.',
    },
    {
      id: 'browsing-behavior',
      label: 'Tarama Davranışı:',
      description:
        'Ziyaret ettiğiniz sayfalar, görüntülediğiniz ürünler, sitede geçirdiğiniz süre ve pazarlama kampanyalarımızla etkileşiminiz.',
    },
    {
      id: 'support-content',
      label: 'Destek İçeriği:',
      description: 'Destek kanallarımıza ilettiğiniz mesajlar, ekler ve geri bildirimler.',
    },
  ];

  // Veri toplama amaçları
  const dataPurposes: ListItem[] = [
    { id: 'account-management', text: 'TalepNET hesabınızı oluşturmak ve yönetmek' },
    { id: 'order-processing', text: 'Siparişleri işlemek, faturaları oluşturmak ve dolandırıcı işlemleri önlemek' },
    { id: 'personalization', text: 'Kişiselleştirilmiş içerik aracılığıyla sitemizde deneyiminizi iyileştirmek' },
    { id: 'analytics', text: 'Site trafiğini analiz etmek ve pazarlama çalışmalarını optimize etmek' },
    { id: 'support', text: 'Taleplere yanıt vermek ve müşteri desteği sunmak' },
    { id: 'legal', text: 'Yasal yükümlülüklere uymak ve Hizmet Şartlarımızı uygulamak' },
  ];

  // Üçüncü taraf hizmetler
  const thirdPartyServices: ThirdPartyService[] = [
    {
      id: 'hosting',
      name: 'Barındırma Sağlayıcıları:',
      description: 'Platform altyapısı ve güvenli veri depolama için.',
    },
    {
      id: 'google-analytics',
      name: 'Google Analytics:',
      description: 'Trafik analizi ve kullanıcı davranışını anlamak için.',
    },
    {
      id: 'payment',
      name: 'Ödeme İşlemcileri:',
      description: 'Güvenli online işlemler için.',
    },
    {
      id: 'email',
      name: 'E-posta Hizmetleri:',
      description: 'Bildirimler ve iletişim için.',
    },
  ];

  // Veri hakları
  const dataRights: DataRight[] = [
    { id: 'access', action: 'Erişim', description: 'kişisel bilgilerinize erişme hakkı' },
    { id: 'modify', action: 'Düzeltme', description: 'hesap bilgilerinizi güncelleme hakkı' },
    { id: 'delete', action: 'Silme', description: 'verilerinizin silinmesini talep etme hakkı' },
    { id: 'withdraw', action: 'Geri Çekme', description: 'kişisel bilgi işleme onayını geri çekme hakkı' },
    { id: 'download', action: 'İndirme', description: 'saklanan verilerinizin bir kopyasını alma hakkı' },
    { id: 'restrict', action: 'Kısıtlama', description: 'veri işlemeyi kısıtlama veya itiraz etme hakkı' },
  ];

  // Veri yönetimi öğeleri
  const dataManagementItems: ListItem[] = [
    { id: 'update-profile', text: 'Profil bilgilerinizi hesap panelinizden istediğiniz zaman güncelleyebilirsiniz.' },
    {
      id: 'data-deletion',
      text: 'Tam veri silme veya veri dışa aktarma talebinde bulunmak için info@talepnet.com adresine e-posta gönderin.',
    },
  ];

  return (
    <section className="pt-32 pb-[200px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* KVKK */}
          <RevealAnimation delay={0.3}>
            <div className="space-y-3">
              <h2>TalepNET Çerez Politikası ve KVKK Uyumu</h2>
              <p>
                6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK), bireylerin kişisel verilerinin korunmasını
                düzenleyen Türkiye yasasıdır. Avrupa Birliği&apos;nin Genel Veri Koruma Yönetmeliği (GDPR) ile uyumlu
                olarak, TalepNET verilerinizi şeffaf, güvenli ve saygılı bir şekilde işlemektedir.
                <br />
                <br />
                Bu sayfa, TalepNET&apos;in çerez politikasını ve kişisel verilerin korunmasına ilişkin ilkelerini
                açıklamaktadır.
              </p>
            </div>
          </RevealAnimation>
          {/* Belge amacı */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-heading-4">Bu belgenin amacı</h3>
                <p>
                  TalepNET olarak gizliliğinize saygı göstermeye tamamen bağlıyız. Bu sayfa aşağıdaki konularda
                  net bir genel bakış sunar:
                </p>
              </div>
              <ul className="space-y-3">
                {purposeItems.map((item) => (
                  <li key={item.id} className="flex items-center justify-start gap-2">
                    <span className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full" />
                    <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
          {/* Çerez Politikası */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-3">
              <h3 className="text-heading-4">Çerez Politikası</h3>
              <p>
                Çerezler, web sitemizi ziyaret ettiğinizde cihazınıza yerleştirilen küçük veri dosyalarıdır.
                Tercihleri hatırlamak, oturumları sürdürmek ve içerik etkinliğini ölçmek için çerezler ve
                benzeri teknolojiler kullanırız. Tarayıcı ayarlarınızdan çerezleri yönetebilirsiniz.
                <br />
                <br />
                Zorunlu çerezler site işlevselliği için gereklidir ve devre dışı bırakılamaz. Analitik ve
                performans çerezleri ise siteyi nasıl kullandığınızı anlamamıza yardımcı olur.
              </p>
            </div>
          </RevealAnimation>
          {/* TalepNET KVKK Uyumu */}
          <RevealAnimation delay={0.3}>
            <div className="space-y-3">
              <h3 className="text-heading-4">TalepNET KVKK ve GDPR Uyumu</h3>
              <p>
                TalepNET, GDPR yürürlüğe girmeden önce bile kullanıcı veri gizliliğini her zaman önceliklendirmiştir.
                Temel uygulamalarımız KVKK ve GDPR ilkeleriyle doğal olarak uyumlu olup tam uyum sağlamak için
                sürekli iyileştirmeler yapılmaktadır.
              </p>
              <div className="space-y-3">
                <h4 className="text-tagline-1 text-secondary dark:text-accent">Güncellenen belgelerimiz:</h4>
                <ul className="space-y-1">
                  {updatedItems.map((item) => (
                    <li key={item.id} className="flex items-center justify-start gap-2">
                      <span className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full" />
                      <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealAnimation>
          {/* Topladığımız veriler */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3 className="text-heading-4">Topladığımız veriler</h3>
              <ul className="space-y-3">
                {dataCollectionItems.map((item) => (
                  <li key={item.id} className="flex items-center justify-start gap-2">
                    <span className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full" />
                    <p>
                      <span className="text-secondary dark:text-accent">{item.label} </span>
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
          {/* Verileri neden topluyoruz */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3 className="text-heading-4" id="data-purpose">
                Verileri neden topluyoruz
              </h3>
              <ul className="space-y-3">
                {dataPurposes.map((purpose) => (
                  <li key={purpose.id} className="flex items-center justify-start gap-2">
                    <span className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full" />
                    <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">{purpose.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
          {/* Üçüncü taraf hizmetler */}
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3 className="text-heading-4" id="third-party">
                Kullandığımız üçüncü taraf hizmetler
              </h3>
              <ul className="space-y-3">
                {thirdPartyServices.map((service) => (
                  <li key={service.id} className="flex items-center justify-start gap-2">
                    <span className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full" />
                    <p>
                      <span className="text-secondary dark:text-accent">{service.name} </span>
                      {service.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
          {/* Veri haklarınız */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-heading-4" id="data-rights">
                Verileriniz üzerindeki haklarınız
              </h3>
              <ul className="space-y-3">
                {dataRights.map((right) => (
                  <li key={right.id} className="flex items-center justify-start gap-2">
                    <span className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full" />
                    <p>
                      <span className="text-secondary dark:text-accent">{right.action}:</span> {right.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
          {/* Verilerinizi nasıl yönetir veya silersiniz */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3 className="text-heading-4" id="data-management">
                Verilerinizi nasıl yönetir veya silersiniz
              </h3>
              <ul className="space-y-3">
                {dataManagementItems.map((item) => (
                  <li key={item.id} className="flex items-center justify-start gap-2">
                    <span className="bg-secondary dark:bg-accent inline-block size-1.5 rounded-full" />
                    <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">
                      {item.id === 'data-deletion' ? (
                        <>
                          Tam veri silme veya veri dışa aktarma talebinde bulunmak için:{' '}
                          <span className="text-secondary dark:text-accent">info@talepnet.com</span>
                        </>
                      ) : (
                        item.text
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default GdprContent;
