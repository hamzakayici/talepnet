import AboutMap from '@/components/about/AboutMap';
import RevealAnimation from '@/components/animation/RevealAnimation';

const locations = [
  {
    city: 'Istanbul',
    place: 'Bilgiyi Ticarilestirme Merkezi',
    address: 'Fulya, Yesilcimen Sok. Polat Tower Residence No:12/430, 34394 Sisli/Istanbul',
    href: 'https://www.google.com/maps/place/Bilgiyi+Ticarile%C5%9Ftirme+Merkezi/@41.0567889,28.9957503,723m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14cab9ec0e422ee9:0xe48bbf2454159e09!8m2!3d41.0567889!4d28.9983252!16s%2Fg%2F11c6v8xrd4?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D',
    cta: 'View Istanbul location',
  },
  {
    city: 'Antalya',
    place: 'Antalya Teknokent',
    address: 'Pinarbasi Mah. Hurriyet Cad. Akdeniz Universitesi Antalya Teknokent Ar-Ge 2 Ulugbey Binasi No:3A/31, Konyaalti/Antalya',
    href: 'https://www.google.com/maps/place/Technopolis+Antalya/@40.9505179,29.1041687,2898m/data=!3m1!1e3!4m6!3m5!1s0x14c391d4afe6ac4b:0x8f9d88b2dd970272!8m2!3d36.9000113!4d30.6459509!16s%2Fg%2F113f0l_dt?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D',
    cta: 'View Antalya location',
  },
];

type LocationsSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
};

const LocationsSection = ({
  eyebrow = 'Our Locations',
  title,
  description,
  className = 'bg-white dark:bg-background-6',
}: LocationsSectionProps) => {
  return (
    <section className={className}>
      <div className="main-container grid gap-8 pb-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <RevealAnimation delay={0.12}>
          <div className="max-w-xl pt-6">
            <span className="text-tagline-1 text-primary-500">{eyebrow}</span>
            <h2 className="mt-4 text-3xl font-normal leading-tight text-secondary dark:text-accent sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-8 text-secondary/72 dark:text-accent/70">
              {description}
            </p>
            <div className="mt-8 space-y-5">
              {locations.map((location, index) => (
                <RevealAnimation key={location.city} delay={0.18 + index * 0.05}>
                  <div>
                    <p className="text-xl font-normal text-secondary dark:text-accent">
                      {location.city}
                    </p>
                    <p className="mt-2 text-base leading-7 text-secondary/72 dark:text-accent/70">
                      {location.place}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-secondary/56 dark:text-accent/55">
                      {location.address}
                    </p>
                    <a
                      href={location.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-block text-sm font-normal text-primary-600 transition-colors hover:text-primary-500 dark:text-primary-300 dark:hover:text-primary-200"
                    >
                      {location.cta}
                    </a>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.18}>
          <AboutMap />
        </RevealAnimation>
      </div>
    </section>
  );
};

export default LocationsSection;
