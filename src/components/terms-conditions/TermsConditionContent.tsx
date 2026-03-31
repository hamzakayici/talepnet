import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const TermsConditionContent = () => {
  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[200px]">
      <div className="main-container">
        <RevealAnimation delay={0.3}>
          <div className="space-y-3">
            <h2>Hizmet Şartları</h2>
            <div className="space-y-7">
              <p>
                Bu site, talepnet.com (bundan sonra TalepNET, site veya web sitesi olarak anılacaktır) TalepNET
                Teknoloji A.Ş. (bundan sonra TalepNET, biz veya şirket olarak anılacaktır) tarafından işletilmektedir.
              </p>
              <p>
                Lütfen talepnet.com&apos;dan herhangi bir hizmeti veya ürünü kullanmadan önce Hizmet Şartlarımızı
                dikkatlice okuyun, inceleyin ve anlayın. Bu web sitesine ve ürünlerine erişiminiz ve kullanımınız,
                bu hüküm ve koşulları kabul ettiğinizi ve bunlara bağlı kalmayı kabul ettiğinizi gösterir.
              </p>
              <p>
                Bu koşulları kabul etmiyorsanız, siteyi derhal terk etmeli ve burada mevcut olan hiçbir materyali
                veya hizmeti kullanmamalısınız.
              </p>
            </div>
          </div>
        </RevealAnimation>
        <article className="terms-conditions-body">
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>1. Kabul ve Sözleşme</h3>
              <p>
                TalepNET hizmetlerini kullanarak veya hesap oluşturarak bu Hizmet Şartlarını, Gizlilik Politikasını
                ve ilgili tüm ek politikaları kabul etmiş olursunuz. Bu şartlara katılmıyorsanız hizmetlerimizi
                kullanmamalısınız.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>2. Hesap Uygunluğu ve Güvenlik</h3>
              <p>
                TalepNET hizmetlerini kullanmak için 18 yaşından büyük olmanız gerekmektedir. Hesap bilgilerinizin
                gizliliği ve güvenliği sizin sorumluluğunuzdadır. Hesabınız üzerinden gerçekleştirilen tüm
                faaliyetlerden siz sorumlusunuz.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>3. Abonelikler, Ücretler ve İptaller</h3>
              <p>
                TalepNET hizmetleri abonelik modeliyle sunulmaktadır. Her abonelik satın alımında, sipariş
                tamamlanmasından itibaren 365 gün boyunca güncellemelere ve desteğe erişim dahildir.
                Abonelik iptali durumunda mevcut dönem sonuna kadar hizmet kullanılmaya devam eder.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>4. İzin Verilen ve Yasak Kullanım</h3>
              <p>
                TalepNET platformunu yalnızca yasal ve bu şartlara uygun amaçlarla kullanabilirsiniz.
                Aşağıdaki davranışlar kesinlikle yasaktır:
              </p>
              <ul>
                <li>TalepNET personeline veya müşterilerine yönelik kötüye kullanım, hakaret veya kötü niyetli davranış</li>
                <li>Yanlış bilgi yayma veya yanıltıcı değerlendirmeler</li>
                <li>Yetkisiz yeniden satış, dağıtım veya rakip ürün tanıtımı</li>
                <li>Bilgisayar korsanlığı, spam, korsan yazılım veya yasa dışı faaliyetlerde bulunma</li>
                <li>Hesap güvenliğinin tehlikeye girmesi veya yetkisiz paylaşım</li>
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>5. API Kullanımı ve Adil Kullanım</h3>
              <p>
                TalepNET API hizmetlerini kurumsal çözümlerinizle entegre edebilirsiniz. API kullanımı adil kullanım
                politikasına tabidir ve aşırı kullanım durumunda TalepNET erişimi kısıtlama hakkını saklı tutar.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>6. İçerik ve Fikri Mülkiyet</h3>
              <p>
                Tüm TalepNET ürünleri, çözümleri ve materyalleri TalepNET Teknoloji A.Ş.&apos;nin fikri mülkiyetidir.
                Hizmetlerimizin sahipliğini, değiştirilmiş veya değiştirilmemiş olarak, iddia edemezsiniz.
                Kullanıcı hesapları ve ürün lisansları{' '}
                <strong className="!text-secondary dark:!text-accent font-bold">devredilemez</strong>.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>7. Veri Gizliliği ve Güvenlik</h3>
              <p>
                Gizliliğinize önem veriyoruz. TalepNET, kişisel bilgilerinizi üçüncü taraflara satmaz, kiralamaz
                veya paylaşmaz. Verileriniz yalnızca şu amaçlarla kullanılır:
              </p>
              <ul>
                <li>Sipariş işleme</li>
                <li>Hesap yönetimi</li>
                <li>Fatura uyuşmazlıkları</li>
                <li>Dolandırıcılık önleme</li>
                <li>Yasal uyumluluk</li>
              </ul>
              <p>
                TalepNET hizmetlerini kullanarak, Gizlilik Politikamız doğrultusunda verilerinizin toplanmasına
                ve kullanılmasına onay vermiş olursunuz.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <Link
              href="/privacy-policy"
              className="section-button btn btn-xl dark:btn-accent hover:btn-primary btn-secondary">
              <span>Detaylı gizlilik politikamızı okuyun</span>
            </Link>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>8. Fesih ve Askıya Alma</h3>
              <p>
                TalepNET, bu şartların ihlali durumunda herhangi bir kullanıcı hesabını önceden bildirimde
                bulunmaksızın askıya alma veya feshetme hakkını saklı tutar. Fesih durumunda verileriniz
                yasal yükümlülükler çerçevesinde saklanabilir.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>9. Sorumluluk Sınırlandırması</h3>
              <p>
                Hiçbir koşulda TalepNET, bu sitedeki materyallerin kullanımından veya kullanılamamasından kaynaklanan
                veri kaybı, kâr kaybı veya iş kesintisi dahil ancak bunlarla sınırlı olmamak üzere doğrudan, dolaylı,
                tesadüfi, özel veya sonuç olarak ortaya çıkan zararlardan sorumlu tutulamaz.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>10. Uygulanacak Hukuk</h3>
              <p>
                Bu şartlar Türkiye Cumhuriyeti yasalarına tabidir. Herhangi bir uyuşmazlık durumunda İstanbul
                mahkemeleri yetkili olacaktır.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>11. İletişim</h3>
              <p>
                Bu Hizmet Şartları hakkında sorularınız için lütfen{' '}
                <Link href="mailto:info@talepnet.com" className="text-secondary dark:text-accent">
                  info@talepnet.com
                </Link>
                {' '}adresinden bize ulaşın.
              </p>
            </div>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

export default TermsConditionContent;
