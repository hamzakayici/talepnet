import bannerImage from '@public/images/ns-img-379.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const CareerContent = () => {
  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-3 text-center">
          <RevealAnimation delay={0.3}>
            <h2>
              TalepNET’ın geleceğini inşa ediyoruz— <br className="hidden md:block" />
              siz de bize katılın.
            </h2>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.4}>
          <figure className="mb-18">
            <Image src={bannerImage} alt="banner-image" className="rounded-2xl" />
          </figure>
        </RevealAnimation>
        <RevealAnimation delay={0.5}>
          <div className="mx-auto max-w-[840px] space-y-8">
            <h4>Ortak ilgi alanları ve tutku ile beslenen bir topluluğun parçası olun.</h4>
            <p>
              TalepNET olarak, satın alma süreçlerinin geleceğini şekillendiriyoruz. Ekibimiz, teknoloji
              tutkusuyla dolu, yenilikçi fikirlerle dolu ve müşterilerimize en iyi çözümleri sunma
              konusunda kararlı kişilerden oluşuyor.
            </p>
            <p>
              Dinamik, hızlı tempolu ve sürekli öğrenen bir ortamda çalışmak istiyorsanız,
              doğru yerdesiniz. Her takım üyesi, projelere doğrudan katkı sağlama ve gerçek
              etkiler yaratma fırsatına sahiptir.
            </p>
            <p>
              Açık iletişim, şeffaf yönetim ve esnek çalışma modüllerimizle ekip üyelerimizin
              hem profesyonel hem de kişisel gelişimlerine yatırım yapıyoruz. Uzaktan çalışma
              imkânı, rekabetçi ücret paketleri ve sürekli eğitim olanakları sunuyoruz.
            </p>
            <p>
              TalepNET’ta her gün yeni bir şey öğreniyoruz, birlikte büyüyoruz ve kurumsal
              satın alma dünyasında fark yaratıyoruz. Sektörün en iyi çözümünü
              geliştirmek için en iyi yetenekleri arıyoruz.
            </p>
            <p>
              Eğer teknolojiyi kullanarak iş süreçlerini dönüştürmeye ilgi duyuyorsanız,
              yenilikçi çözümler üretmeyi seviyorsanız ve küresel bir ekibin parçası olmak
              istiyorsanız, açık pozisyonlarımıza göz atın.
            </p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CareerContent;
