import RevealAnimation from '../animation/RevealAnimation';
import CareerDetailsHeading from './CareerDetailsHeading';
import JobOverview from './JobOverview';
import { IPosition } from '@/interface';

type Role = IPosition & {
  slug: string;
  overview: string[];
  workOn: string[];
  lookingFor: string[];
  whyMatters: string;
};

type Labels = {
  detailsPage: {
    jobOverview: string;
    datePosted: string;
    expirationDate: string;
    location: string;
    offeredSalary: string;
    experience: string;
    qualification: string;
    jobSkills: string;
    applyNow: string;
    sectionOverview: string;
    sectionWorkOn: string;
    sectionLookingFor: string;
    sectionWhyMatters: string;
  };
};

const CareerDetailsBody = ({ role, labels, locale }: { role: Role; labels: Labels['detailsPage']; locale: 'en' | 'tr' }) => {

  return (
    <section className="pt-[100px] pb-[200px]">
      <div className="main-container">
        <CareerDetailsHeading title={role.title} />
        <div className="grid grid-cols-12 items-start gap-y-[70px] md:gap-x-8 md:gap-y-0 lg:gap-x-[70px] xl:gap-[100px]">
          <JobOverview data={role} labels={labels} locale={locale} />
          <div className="col-span-12 md:col-span-6">
            <RevealAnimation delay={0.5}>
              <article className="career-details-body">
                <h4>{labels.sectionOverview}</h4>
                {role.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <h5>{labels.sectionWorkOn}</h5>
                <ul>
                  {role.workOn.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h5>{labels.sectionLookingFor}</h5>
                <ul>
                  {role.lookingFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h5>{labels.sectionWhyMatters}</h5>
                <p>{role.whyMatters}</p>
              </article>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerDetailsBody;
