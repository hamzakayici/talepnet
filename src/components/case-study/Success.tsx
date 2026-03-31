import { ICaseStudy } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import CaseStudyPaginationWrapper from './CaseStudyPaginationWrapper';

const Success = () => {
  const caseStudies = getMarkDownData<ICaseStudy & { [key: string]: unknown }>('src/data/case-study');
  return (
    <section className="py-[50px] lg:py-[100px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* heading  */}
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <h2 className="text-heading-3">Daha fazla başarı hikayesi</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="mx-auto max-w-[738px]">
                Son haberlerimiz ve içgörülerimiz, yolculuğumuzu şekillendiren en son gelişmeleri, başarıları ve
                düşünce liderliğini öne çıkarıyor. Ürün yeniliklerinden stratejik ortaklıklara kadar.
              </p>
            </RevealAnimation>
          </div>
          {/* success blog   */}
          <div className="space-y-14">
            {/*  pagination  */}
            <CaseStudyPaginationWrapper caseStudies={caseStudies} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
