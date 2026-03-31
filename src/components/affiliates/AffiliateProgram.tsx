// affiliate-program section
import affiliatesCover from '@public/images/ns-img-371.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const AffiliateProgram = () => {
  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container">
        <div className="space-y-14 md:space-y-[70px]">
          <RevealAnimation delay={0.1}>
            <div className="mx-auto max-w-[602px] space-y-1.5 md:space-y-3 md:text-center">
              <h2>TalepNET iş ortaklığı programı</h2>
              <h3 className="text-heading-4">Her yönlendirme başına 200$'a kadar kazanın!</h3>
              <p>
                TalepNET ailesinin bir parçası olun! İş ortaklığı programımıza katılarak işletmelerin büyümesine yardımcı olurken
                cömert komisyonlar kazanın — herkes kazanır!
              </p>
              <div className="mt-7 md:mt-14">
                <LinkButton
                  href="/affiliate-policy"
                  className="btn btn-primary btn-xl hover:btn-secondary dark:hover:btn-accent block w-full md:inline-block md:w-auto">
                  Hemen katılın
                </LinkButton>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2} instant>
            <figure className="max-w-full overflow-hidden rounded-[20px]">
              <Image
                src={affiliatesCover}
                className="h-full w-full object-cover object-center"
                alt="blog-details-cover"
              />
            </figure>
          </RevealAnimation>
          <div className="max-w-[830px] space-y-3">
            <RevealAnimation delay={0.3}>
              <h4>TalepNET iş ortaklığı programına neden katılmalısınız?</h4>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p>
                Hızla büyüyen platformumuz, yüksek müşteri memnuniyetimiz ve güçlü yenileme oranlarımız, TalepNET'i <br />
                tanıtmayı kolay ve kârlı hale getiriyor.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <ul className="space-y-2">
                <li className="text-tagline-1 text-secondary/60 dark:text-accent/60 before:bg-secondary dark:before:bg-accent font-normal before:relative before:left-0 before:mr-1 before:inline-block before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:content-['']">
                  <strong className="text-secondary dark:text-accent font-medium">
                    Sevdiğiniz işi yaparak kazanın:{' '}
                  </strong>
                  <span>
                    İster SEO uzmanı, ister içerik üreticisi, topluluk lideri veya reklam uzmanı olun — sizin için bir
                    fırsat var.
                  </span>
                </li>
                <li className="text-tagline-1 text-secondary/60 dark:text-accent/60 before:bg-secondary dark:before:bg-accent font-normal before:relative before:left-0 before:mr-1 before:inline-block before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:content-['']">
                  <strong className="text-secondary dark:text-accent font-medium">
                    Dünya genelinde güvenilen marka:{' '}
                  </strong>
                  <span>
                    Çözümlerimiz ölçeklenebilir şekilde tasarlanmıştır ve çeşitli müşteriler için cazip hale gelir.
                  </span>
                </li>
                <li className="text-tagline-1 text-secondary/60 dark:text-accent/60 before:bg-secondary dark:before:bg-accent font-normal before:relative before:left-0 before:mr-1 before:inline-block before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:content-['']">
                  <strong className="text-secondary dark:text-accent font-medium">Cazip ömür boyu fırsatlar: </strong>
                  <span> Hedef kitlenizin TalepNET ile yatırım yapmasını ve büyümesini kolaylaştırın. </span>
                </li>
              </ul>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

AffiliateProgram.displayName = 'AffiliateProgram';
export default AffiliateProgram;
