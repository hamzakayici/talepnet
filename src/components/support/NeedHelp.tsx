import RevealAnimation from '../animation/RevealAnimation';
const NeedHelp = () => {
  return (
    <section className="pt-32 pb-12 sm:pt-36 md:pt-40 md:pb-16 xl:pt-[180px] xl:pb-20">
      <div className="main-container">
        <div className="mx-auto max-w-3xl text-center">
          <RevealAnimation delay={0.12}>
            <span className="badge badge-green !normal-case">Help Center</span>
          </RevealAnimation>
          <RevealAnimation delay={0.18}>
            <h1 className="mt-5 text-4xl font-normal leading-tight text-secondary dark:text-accent sm:text-5xl xl:text-6xl">
              Support resources for getting more out of TalepNET
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.24}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-secondary/72 dark:text-accent/70 sm:text-lg">
              Use this page as a starting point for product guidance, tutorials, blog content, and common questions.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default NeedHelp;
