import RevealAnimation from '@/components/animation/RevealAnimation';
import { footerLinks } from '@/data/footer-data';
import { cn } from '@/utils/cn';
import bgGradientImg from '@public/images/ns-img-524.png';
import footerLogo from '@public/images/shared/talepnet-logo-v2.png';
import Image from 'next/image';
import Link from 'next/link';
import FooterDivider from './FooterDivider';

const Footer = () => {
  return (
    <footer className="dark:bg-background-8 relative overflow-hidden bg-white">
      <div className="main-container">
        <RevealAnimation delay={0.7} offset={100} direction="right">
          <figure
            className={cn(
              'pointer-events-none absolute top-[-237px] right-[-321px] !block size-[600px] rotate-[-38deg] overflow-hidden select-none md:top-[-485px] md:right-[-693px] md:size-[1220px]',
            )}>
            <Image src={bgGradientImg} alt="gradient-img" className="h-full w-full object-cover" />
          </figure>
        </RevealAnimation>

        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-16 pt-16 pb-16 lg:gap-x-8 xl:gap-x-0 xl:pt-[100px]">
          <div className="col-span-12 lg:col-span-4">
            <RevealAnimation delay={0.3}>
              <div className="xl:max-w-[306px]">
                <figure>
                  <Image src={footerLogo} alt="TalepNET" className="h-[30px] w-auto" />
                </figure>
                <p className="text-secondary dark:text-accent mt-4 mb-7">
                  Kurumlar İçin Akıllı Satın Alma Yönetimi. Satın alma süreçlerinizi yapay zeka destekli iş akışları ile otomatikleştirin.
                </p>
                <div className="flex items-center gap-3">
                  <Link target="_blank" href="https://x.com/TalepNET" className="footer-social-link">
                    <span className="sr-only">X (Twitter)</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                        className="fill-secondary dark:fill-accent"
                      />
                    </svg>
                  </Link>
                  <div className="bg-stroke-1 dark:bg-stroke-8 h-5 w-px"></div>
                  <Link target="_blank" href="https://www.linkedin.com/showcase/talepnet" className="footer-social-link">
                    <span className="sr-only">LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
                      <path
                        d="M2.25 4C2.25 3.58579 1.91421 3.25 1.5 3.25C1.08579 3.25 0.75 3.58579 0.75 4H2.25ZM0.75 10C0.75 10.4142 1.08579 10.75 1.5 10.75C1.91421 10.75 2.25 10.4142 2.25 10H0.75ZM10.75 10C10.75 10.4142 11.0858 10.75 11.5 10.75C11.9142 10.75 12.25 10.4142 12.25 10H10.75ZM5.5 7H4.75H5.5ZM4.75 10C4.75 10.4142 5.08579 10.75 5.5 10.75C5.91421 10.75 6.25 10.4142 6.25 10H4.75ZM2.25 1C2.25 0.585786 1.91421 0.25 1.5 0.25C1.08579 0.25 0.75 0.585786 0.75 1H2.25ZM0.75 2C0.75 2.41421 1.08579 2.75 1.5 2.75C1.91421 2.75 2.25 2.41421 2.25 2H0.75ZM1.5 4H0.75V10H1.5H2.25V4H1.5ZM11.5 10H12.25V7H11.5H10.75V10H11.5ZM11.5 7H12.25C12.25 4.92893 10.5711 3.25 8.5 3.25V4V4.75C9.74264 4.75 10.75 5.75736 10.75 7H11.5ZM8.5 4V3.25C6.42893 3.25 4.75 4.92893 4.75 7H5.5H6.25C6.25 5.75736 7.25736 4.75 8.5 4.75V4ZM5.5 7H4.75V10H5.5H6.25V7H5.5ZM1.5 1H0.75V2H1.5H2.25V1H1.5Z"
                        className="fill-secondary dark:fill-accent"
                      />
                    </svg>
                  </Link>
                  <div className="bg-stroke-1 dark:bg-stroke-8 h-5 w-px"></div>
                  <Link target="_blank" href="https://www.youtube.com/@talepnet" className="footer-social-link">
                    <span className="sr-only">YouTube</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.668 15.0028C18.9724 15.0867 20.91 13.29 21 10.9858V5.01982C20.91 2.71569 18.9724 0.918929 16.668 1.00282H5.332C3.02763 0.918929 1.08998 2.71569 1 5.01982V10.9858C1.08998 13.29 3.02763 15.0867 5.332 15.0028H16.668Z"
                        className="stroke-secondary dark:stroke-accent"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.508 5.17711L13.669 7.32511C13.8738 7.44468 13.9997 7.66398 13.9997 7.90111C13.9997 8.13824 13.8738 8.35754 13.669 8.47711L10.508 10.8271C9.908 11.2341 9 10.8871 9 10.2511V5.75111C9 5.11811 9.909 4.77011 10.508 5.17711Z"
                        className="stroke-secondary dark:stroke-accent"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 grid grid-cols-12 gap-x-0 gap-y-8 lg:col-span-8">
            {footerLinks.map(({ title, links }, index) => (
              <div className="col-span-12 md:col-span-4" key={title}>
                <RevealAnimation delay={0.4 + index * 0.1}>
                  <div className="space-y-8">
                    <p className="sm:text-heading-6 text-tagline-1 text-secondary dark:text-accent font-normal">
                      {title}
                    </p>
                    <ul className="space-y-5">
                      {links.map(({ label, href }) => (
                        <li key={label}>
                          <Link href={href} className="footer-link-v2">
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealAnimation>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden pt-6 pb-[60px] text-center">
          <FooterDivider className="bg-stroke-2 dark:bg-accent/5" />
          <RevealAnimation delay={0.7} offset={10} start="top 105%">
            <p className="text-secondary dark:text-accent/60">
              Telif Hakkı &copy; 2026 TalepNET. Tüm hakları saklıdır.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </footer>
  );
};
Footer.displayName = 'Footer';
export default Footer;
