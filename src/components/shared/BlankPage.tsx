type BlankPageProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

const BlankPage = ({ eyebrow, title, description }: BlankPageProps) => {
  return (
    <main className="bg-background-3 dark:bg-background-5">
      <section className="py-24 md:py-32 xl:py-40">
        <div className="main-container">
          <div className="mx-auto max-w-3xl text-center">
            {eyebrow ? (
              <p className="mb-4 text-tagline-1 text-secondary/60 dark:text-accent/60">{eyebrow}</p>
            ) : null}
            <h1 className="mb-6">{title}</h1>
            <p className="text-lg text-secondary/70 dark:text-accent/70">{description}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlankPage;
