import LinkButton from '@/components/ui/button/LinkButton';
import { localizeHref } from '@/i18n/pathnames';
import RevealAnimation from '../animation/RevealAnimation';

type Props = {
  positions: {
    slug: string;
    title: string;
    employmentType: string[];
    shortDescription: string;
  }[];
  badge: string;
  title: string;
  viewRoleLabel: string;
  emptyMessage?: string;
  locale: 'en' | 'tr';
};

const Positions = ({ positions, badge, title, viewRoleLabel, emptyMessage, locale }: Props) => {

  return (
    <section id="current-openings" className="pt-10 pb-20 xl:pt-14 xl:pb-28">
      <div className="main-container">
        <div className="mb-14 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-5">{badge}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>{title}</h2>
          </RevealAnimation>
        </div>
        {positions && positions.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {positions?.map((singlePost) => (
              <RevealAnimation delay={0.3} key={singlePost?.slug}>
                <div>
                  <div className="bg-background-1 dark:bg-background-6 space-y-8 rounded-[20px] p-11 transition-all duration-[400ms] hover:scale-[100.5%] hover:shadow-md">
                    <div className="flex items-center gap-2">
                      {singlePost?.employmentType?.map((type) => (
                        <span className="badge badge-gray-light" key={type}>
                          {type}
                        </span>
                      ))}
                    </div>
                    <div>
                      <h3 className="text-heading-5 mb-3 font-normal">{singlePost?.title}</h3>
                      <p>{singlePost?.shortDescription}</p>
                    </div>
                    <div>
                      <LinkButton
                        href={localizeHref(`/career/${singlePost?.slug}`, locale)}
                        className="btn hover:btn-secondary dark:btn-transparent dark:hover:btn-accent btn-md btn-white">
                        {viewRoleLabel}
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        ) : (
          <RevealAnimation delay={0.3}>
            <div className="mx-auto mt-4 max-w-3xl rounded-[20px] bg-background-1 p-8 text-center dark:bg-background-6 sm:p-12">
              <p className="mx-auto max-w-2xl text-[17px] font-medium leading-relaxed text-secondary opacity-80 dark:text-accent">
                {emptyMessage}
              </p>
            </div>
          </RevealAnimation>
        )}
      </div>
    </section>
  );
};

export default Positions;
