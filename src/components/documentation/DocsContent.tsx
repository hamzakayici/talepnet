import gradientImg from '@public/images/ns-img-515.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const DocsContent = () => {
  return (
    <section className="pt-32 pb-[200px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container mb-[70px]">
        <RevealAnimation delay={0.1}>
          <div className="space-y-3 text-center">
            <h2>TalepNET dokümantasyonuna hoş geldiniz</h2>
            <p>Platformunuzu kurmak, özelleştirmek ve en verimli şekilde kullanmak için ihtiyacınız olan her şeyi burada bulabilirsiniz.</p>
          </div>
        </RevealAnimation>
      </div>
      <div className="main-container">
        <div className="documentation space-y-[70px]">
          <div className="space-y-8">
            <RevealAnimation delay={0.3}>
              <h4>Dokümantasyon bölümleri (ana kategoriler)</h4>
            </RevealAnimation>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <RevealAnimation delay={0.4}>
                <div className="bg-background-2 dark:bg-background-6 relative z-10 space-y-3 overflow-hidden rounded-[20px] px-[42px] py-14">
                  <div className="md:[1060px] pointer-events-none absolute -top-[110%] -right-[107%] -z-100 size-[650px] -rotate-[138deg] -skew-[10deg] select-none sm:-top-[105%] sm:-right-[65%] md:-top-[112%] md:-right-[99%] lg:-top-[108%] lg:-right-[79%] xl:-top-[107%] xl:-right-[62%]">
                    <Image src={gradientImg} alt="gradient" />
                  </div>
                  <h5>Başlangıç rehberi</h5>
                  <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside list-disc space-y-3 font-normal">
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        TalepNET&apos;e giriş
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        Sistem gereksinimleri
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        Hesap oluşturma
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        Kontrol paneline genel bakış
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        Kayıt sonrası ilk adımlar
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        İlk satın alma talebinizi oluşturun
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <div className="bg-background-2 dark:bg-background-6 relative z-10 space-y-3 overflow-hidden rounded-[20px] px-[42px] py-14">
                  <div className="md:[1060px] pointer-events-none absolute -top-[110%] -right-[107%] -z-100 size-[650px] -rotate-[138deg] -skew-[10deg] select-none sm:-top-[105%] sm:-right-[65%] md:-top-[112%] md:-right-[99%] lg:-top-[108%] lg:-right-[79%] xl:-top-[107%] xl:-right-[62%]">
                    <Image src={gradientImg} alt="gradient" />
                  </div>
                  <h5>Kullanıcı yönetimi</h5>
                  <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside list-disc space-y-3 font-normal">
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        Kullanıcı ekleme ve yönetme
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        Rol tabanlı erişim kontrolü
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        İzin ayarları
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        Ekip ve departman yönetimi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        Onay hiyerarşisi oluşturma
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        Kullanıcı aktivite logları
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
          </div>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>Abonelik ve faturalandırma</h4>
                <p>Aboneliğinizi, ödeme yöntemlerinizi ve faturalarınızı kolayca yönetin.</p>
              </div>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Abonelik nasıl başlatılır
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Abonelik planınızı yönetme
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Ödeme yöntemleri
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Fatura görüntüleme ve indirme
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Plan yükseltme veya iptal etme
                  </Link>
                </li>
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.7}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>Ayarlar &amp; özelleştirme</h4>
                <p>TalepNET&apos;i işletmenizin ihtiyaçlarına göre uyarlayın.</p>
              </div>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Genel ayarlara bakış
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Şirket markalamanızı özelleştirin
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Bildirim ayarları
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Dil ve yerelleştirme seçenekleri
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Özel alanlar ve filtreler
                  </Link>
                </li>
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.8}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>Raporlama ve analitik</h4>
                <p>Detaylı raporlarla içgörüler elde edin ve satın alma performansınızı artırın.</p>
              </div>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Analitik kontrol panelini anlama
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Raporları dışa aktarma
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Özel rapor oluşturma
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    KPI ve metrikler rehberi
                  </Link>
                </li>
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.9}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>Sorun giderme &amp; SSS</h4>
                <p>Yaygın sorunlar ve sık sorulan sorular için çözümler.</p>
              </div>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Giriş sorunları
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Hata mesajları ve çözümleri
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Veri senkronizasyon sorunları
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Genel SSS
                  </Link>
                </li>
              </ul>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default DocsContent;
