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
              Build the next stage of TalepNET <br className="hidden md:block" />
              with us.
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
            <h4>Join a small team building practical software for real procurement problems.</h4>
            <p>
              TalepNET is building a B2B SaaS product for companies that have outgrown fragmented purchasing processes. We care about workflows, clarity, and execution quality more than startup theatre.
            </p>
            <p>
              We are still early, which means the team is small, decisions are direct, and each role has visible impact. The work is hands-on and cross-functional, with room to shape how the company grows.
            </p>
            <p>
              If you are looking for a polished enterprise machine with layers of process, this is probably not the right fit. If you want to help build a disciplined product and company from an early stage, it probably is.
            </p>
            <p>
              We are looking for people who can work with ownership, communicate clearly, and improve how TalepNET goes to market and how the product evolves.
            </p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CareerContent;
