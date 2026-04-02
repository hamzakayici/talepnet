'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const metricCards = [
  {
    title: 'Approval cycle time',
    img: 'https://supreme-family-a40cb1f433.media.strapiapp.com/desktop_bollore_case_study_3x_16d16d9ee2.webp',
    stat: 'Metric',
    statLabel: 'approval speed',
    detail: 'Measure how long requests stay in approval and identify the steps that slow decisions down.',
  },
  {
    title: 'Budget vs actual spend',
    img: 'https://supreme-family-a40cb1f433.media.strapiapp.com/desktop_I_M_Bank_case_study_3x_9e24f0ba30.webp',
    stat: 'Metric',
    statLabel: 'budget control',
    detail: 'Compare planned budgets with actual purchasing activity and spot overspend risk earlier.',
  },
  {
    title: 'Request volume',
    img: 'https://supreme-family-a40cb1f433.media.strapiapp.com/desktop_green_cell_case_study_3x_c1fce3a4e1.webp',
    stat: 'Metric',
    statLabel: 'request tracking',
    detail: 'Track request volume over time and monitor how requests move across different statuses.',
  },
  {
    title: 'Total spend',
    img: 'https://supreme-family-a40cb1f433.media.strapiapp.com/desktop_testex_case_study_3x_00f97a1437.webp',
    stat: 'Metric',
    statLabel: 'spend visibility',
    detail: 'Track total purchasing volume from one place and understand the full scale of company spend.',
  },
  {
    title: 'Spend by category',
    img: 'https://supreme-family-a40cb1f433.media.strapiapp.com/desktop_tymit_case_study_3x_a81bada6db.webp',
    stat: 'Metric',
    statLabel: 'category visibility',
    detail: 'Break down spend by purchasing category to understand where budget is being used most.',
  },
  {
    title: 'Spend by supplier',
    img: 'https://supreme-family-a40cb1f433.media.strapiapp.com/desktop_ridgeline_case_study_3x_c64be38555.webp',
    stat: 'Metric',
    statLabel: 'supplier visibility',
    detail: 'Compare total spend across suppliers and see which vendors account for the largest share.',
  },
  {
    title: 'Request-to-order time',
    img: 'https://supreme-family-a40cb1f433.media.strapiapp.com/desktop_bollore_case_study_3x_16d16d9ee2.webp',
    stat: 'Metric',
    statLabel: 'process speed',
    detail: 'See how long it takes to move from request creation to approved purchase order.',
  },
  {
    title: 'Monthly spend trend',
    img: 'https://supreme-family-a40cb1f433.media.strapiapp.com/desktop_I_M_Bank_case_study_3x_9e24f0ba30.webp',
    stat: 'Metric',
    statLabel: 'spend movement',
    detail: 'Measure how total spend changes month by month and spot unusual increases or slowdowns early.',
  },
  {
    title: 'Supplier count',
    img: 'https://supreme-family-a40cb1f433.media.strapiapp.com/desktop_green_cell_case_study_3x_c1fce3a4e1.webp',
    stat: 'Metric',
    statLabel: 'supplier visibility',
    detail: 'Track how many suppliers are in your network and how your supplier base evolves over time.',
  },
  {
    title: 'Purchase order volume',
    img: 'https://supreme-family-a40cb1f433.media.strapiapp.com/desktop_testex_case_study_3x_00f97a1437.webp',
    stat: 'Metric',
    statLabel: 'order activity',
    detail: 'Measure purchase order volume over time to understand operational workload and demand.',
  },
  {
    title: 'Spend by cost center',
    img: 'https://supreme-family-a40cb1f433.media.strapiapp.com/desktop_tymit_case_study_3x_a81bada6db.webp',
    stat: 'Metric',
    statLabel: 'cost center visibility',
    detail: 'Compare spend across cost centers to understand where budgets are used and where control is needed.',
  },
  {
    title: 'Spend by department',
    img: 'https://supreme-family-a40cb1f433.media.strapiapp.com/desktop_bollore_case_study_3x_16d16d9ee2.webp',
    stat: 'Metric',
    statLabel: 'department visibility',
    detail: 'Compare purchasing activity across teams and understand which departments drive spend.',
  },
];

export default function CaseStudiesSlider() {
  return (
    <section className="bg-white py-20 dark:bg-background-6 md:py-24 xl:py-32 overflow-hidden">
      <div className="main-container mb-12">
        <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent mb-4">
          Metric visibility
        </span>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl leading-tight font-normal max-w-xl lg:text-heading-3 text-secondary dark:text-accent">
            Track the metrics that show how operations improve
          </h2>
          <p className="max-w-md text-base leading-7 text-secondary/70 dark:text-accent/70">
            Monitor the operational metrics that matter across requests, approvals, suppliers, branches, and spend so teams can spot progress and act faster.
          </p>
        </div>
      </div>

      <div className="pl-[max(1.25rem,calc((100vw-1290px)/2+1.25rem))]">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1.1}
          autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true, el: '.case-studies-pagination' }}
          breakpoints={{
            640: { slidesPerView: 1.4, spaceBetween: 24 },
            1024: { slidesPerView: 2.4, spaceBetween: 24 },
            1280: { slidesPerView: 2.8, spaceBetween: 28 },
          }}
          className="!overflow-visible pb-12"
        >
          {metricCards.map((card) => (
            <SwiperSlide key={card.title}>
              <div className="group relative overflow-hidden rounded-[28px] border border-stroke-3 dark:border-stroke-7 bg-background-3 dark:bg-background-5 h-full min-h-80">
                {/* Background image */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/0" />

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 p-6 space-y-4">
                  <div className="flex items-center justify-end gap-3">
                    <span className="text-xs uppercase tracking-[0.14em] text-white/60">Metric</span>
                  </div>
                  <h3 className="text-2xl leading-tight font-normal text-white">
                    {card.title}
                  </h3>
                  {/* Stat bubble */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-semibold text-white">{card.stat}</span>
                    <span className="text-sm text-white/70">{card.statLabel}</span>
                  </div>
                  {/* Quote — slides up on hover */}
                  <p className="text-sm leading-6 text-white/0 group-hover:text-white/90 max-h-0 group-hover:max-h-28 overflow-hidden transition-all duration-500 ease-out">
                    {card.detail}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="case-studies-pagination main-container mt-6 flex gap-2" />
      </div>
    </section>
  );
}
