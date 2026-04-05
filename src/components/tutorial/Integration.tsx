'use client';

import { useLocale } from '@/i18n/I18nProvider';
import { localizeHref } from '@/i18n/pathnames';
import { useTranslations } from '@/i18n/useTranslations';
import gradient16 from '@public/images/ns-img-508.png';
import logoImg from '@public/images/integrations/logo.svg';
import sapImg from '@public/images/integrations/sap.png';
import mikroImg from '@public/images/integrations/mikro.png';
import parasutImg from '@public/images/integrations/parasut.png';
import oracleImg from '@public/images/integrations/oracle.png';
import uyumsoftImg from '@public/images/integrations/uyumsoft.png';
import excelImg from '@public/images/integrations/excel.png';
import gsheetImg from '@public/images/integrations/gsheet.png';
import gdriveImg from '@public/images/integrations/gdrive.png';
import akbankImg from '@public/images/integrations/akbank.png';
import garantiImg from '@public/images/integrations/garanti.png';
import ziraatImg from '@public/images/integrations/ziraat.png';
import isbankImg from '@public/images/integrations/isbank.png';
import qnbImg from '@public/images/integrations/qnb.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const LogoSAP = () => <Image src={sapImg} alt="SAP" className="size-[80%] object-contain" />;
const LogoOracle = () => <Image src={oracleImg} alt="Oracle" className="size-[90%] object-contain scale-[1.3]" />;
const LogoLogo = () => <Image src={logoImg} alt="Logo Yazılım" className="size-[70%] object-contain" />;
const LogoMikro = () => <Image src={mikroImg} alt="Mikro" className="size-[85%] object-contain rounded-full" />;
const LogoParasut = () => <Image src={parasutImg} alt="Paraşüt" className="size-[85%] object-contain" />;
const LogoUyumsoft = () => <Image src={uyumsoftImg} alt="Uyumsoft" className="size-[80%] object-contain scale-[1.1]" />;
const LogoExcel = () => <Image src={excelImg} alt="Microsoft Excel" className="size-[60%] object-contain" />;
const LogoGSheet = () => <Image src={gsheetImg} alt="Google Sheets" className="size-[60%] object-contain" />;
const LogoGDrive = () => <Image src={gdriveImg} alt="Google Drive" className="size-[60%] object-contain" />;
const LogoZiraat = () => <Image src={ziraatImg} alt="Ziraat Bankası" className="size-[90%] object-contain scale-[1.05]" />;
const LogoGaranti = () => <Image src={garantiImg} alt="Garanti BBVA" className="size-[85%] object-contain" />;
const LogoAkbank = () => <Image src={akbankImg} alt="Akbank" className="size-[85%] object-contain" />;
const LogoIsbank = () => <Image src={isbankImg} alt="İş Bankası" className="size-[85%] object-contain scale-[1.1]" />;
const LogoQNB = () => <Image src={qnbImg} alt="QNB" className="size-[80%] object-contain scale-[1.1]" />;
const floatAnimationStyles = `
@keyframes float1 {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}
@keyframes float2 {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(12px) rotate(-2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}
@keyframes float3 {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(-3deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}
.animate-float-1 { animation: float1 6s ease-in-out infinite; }
.animate-float-2 { animation: float2 7s ease-in-out infinite; }
.animate-float-3 { animation: float3 8.5s ease-in-out infinite; }
`;

const Integration = () => {
  const locale = useLocale();
  const t = useTranslations('home');

  return (
    <section className="dark:bg-background-6 relative z-10 mx-auto my-14 w-[95%] overflow-hidden rounded-4xl bg-white px-10 py-[70px] md:my-20 md:min-h-[740px] md:px-[75px] lg:my-[100px] xl:my-[200px] 2xl:max-w-[1440px]">
      <style dangerouslySetInnerHTML={{ __html: floatAnimationStyles }} />
      {/* bottom gradient */}
      <RevealAnimation delay={0.7} offset={120}>
        <figure className="pointer-events-none absolute bottom-[-206px] left-[-17%] -z-10 h-full w-full -translate-x-1/2 -rotate-[96deg] select-none max-md:h-[500px] max-md:w-[400px] sm:-bottom-[150px] sm:left-[40%] sm:-rotate-[30deg] md:-bottom-[250px]">
          <Image src={gradient16} alt="bg" className="h-[224%] w-[115%]" />
        </figure>
      </RevealAnimation>

      {/* content  */}
      <div className="relative z-10 mx-auto w-fit space-y-[25px] text-center">
        <RevealAnimation delay={0.2}>
          <span className="badge badge-cyan mb-5">{t('integration.badge')}</span>
        </RevealAnimation>

        <RevealAnimation delay={0.3}>
          <h2 className="mb-3">{t('integration.title')}</h2>
        </RevealAnimation>
        <RevealAnimation delay={0.4}>
          <p className="mx-auto mb-14 max-w-[490px] px-5 md:px-0">{t('integration.description')}</p>
        </RevealAnimation>
        <RevealAnimation delay={0.5}>
          <div>
            <Link
              href={localizeHref('/pricing', locale)}
              className="btn btn-secondary btn-md dark:btn-accent hover:btn-primary mx-auto inline-block w-[90%] md:mx-0 md:w-auto">
              <span>{t('integration.cta')}</span>
            </Link>
          </div>
        </RevealAnimation>
      </div>

      <div className="hidden md:absolute md:top-0 md:left-0 md:block md:w-1/2 lg:max-w-[400px] xl:max-w-[520px] 2xl:max-w-[582px]">
        <div className="relative flex h-full flex-row flex-wrap gap-5 py-[70px] md:flex-col md:gap-[40px] 2xl:pl-[70px]">
          <div className="flex md:ml-5 lg:ml-[60px] xl:ml-[100px] animate-float-1">
            <RevealAnimation delay={0.1}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px] hover:scale-110 transition-transform">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-2 xl:size-[100px]">
                  <LogoSAP />
                </div>
              </figure>
            </RevealAnimation>
          </div>
          <div className="flex gap-5 md:ml-5 md:gap-8 md:self-start lg:ml-4 lg:gap-[50px] xl:ml-0 xl:gap-[75px] animate-float-2">
            <RevealAnimation delay={0.2}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px] hover:scale-110 transition-transform">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-2 xl:size-[100px]">
                  <LogoLogo />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px] hover:scale-110 transition-transform">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-2 xl:size-[100px]">
                  <LogoMikro />
                </div>
              </figure>
            </RevealAnimation>
          </div>
          <div className="flex gap-5 md:ml-5 md:gap-8 lg:ml-[60px] lg:gap-[50px] xl:ml-[100px] xl:gap-[75px] animate-float-3">
            <RevealAnimation delay={0.4}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px] hover:scale-110 transition-transform">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-2 xl:size-[100px]">
                  <LogoParasut />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px] hover:scale-110 transition-transform">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-2 xl:size-[100px]">
                  <LogoOracle />
                </div>
              </figure>
            </RevealAnimation>
          </div>
          <div className="flex gap-5 md:ml-5 md:gap-8 lg:ml-[100px] lg:gap-[50px] xl:ml-[185px] xl:gap-[75px] animate-float-1">
            <RevealAnimation delay={0.6}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px] hover:scale-110 transition-transform">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-2 xl:size-[100px]">
                  <LogoUyumsoft />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.7}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px] hover:scale-110 transition-transform">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-2 xl:size-[100px]">
                  <LogoExcel />
                </div>
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
      <div className="hidden md:absolute md:top-0 md:right-0 md:block md:w-1/2 lg:max-w-[400px] xl:max-w-[520px] 2xl:max-w-[582px]">
        <div className="relative flex h-full flex-row flex-wrap gap-5 py-[70px] md:flex-col md:gap-[40px] 2xl:pr-[70px]">
          <div className="flex md:mr-5 md:self-end lg:mr-[60px] xl:mr-[100px] animate-float-2">
            <RevealAnimation delay={0.1}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px] hover:scale-110 transition-transform">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-2 xl:size-[100px]">
                  <LogoGSheet />
                </div>
              </figure>
            </RevealAnimation>
          </div>
          <div className="mr-4 flex gap-8 md:self-end lg:gap-[50px] xl:mr-0 xl:gap-[75px] animate-float-3">
            <RevealAnimation delay={0.1}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px] hover:scale-110 transition-transform">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-2 xl:size-[100px]">
                  <LogoGDrive />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px] hover:scale-110 transition-transform">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-2 xl:size-[100px]">
                  <LogoQNB />
                </div>
              </figure>
            </RevealAnimation>
          </div>
          <div className="flex gap-8 md:mr-5 md:self-end lg:mr-[60px] lg:gap-[50px] xl:mr-[100px] xl:gap-[75px] animate-float-1">
            <RevealAnimation delay={0.3}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px] hover:scale-110 transition-transform">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-2 xl:size-[100px]">
                  <LogoAkbank />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px] hover:scale-110 transition-transform">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-2 xl:size-[100px]">
                  <LogoGaranti />
                </div>
              </figure>
            </RevealAnimation>
          </div>
          <div className="flex gap-8 self-end md:mr-5 lg:mr-[100px] lg:gap-[50px] xl:mr-[185px] xl:gap-[75px] animate-float-2">
            <RevealAnimation delay={0.5}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px] hover:scale-110 transition-transform">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-2 xl:size-[100px]">
                  <LogoZiraat />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full xl:size-[120px] hover:scale-110 transition-transform">
                <div className="dark:bg-background-6 flex size-[80px] items-center justify-center rounded-full bg-white p-2 xl:size-[100px]">
                  <LogoIsbank />
                </div>
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
