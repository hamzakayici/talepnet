import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const pricingFaqs = [
  {
    question: 'Can I start using TalepNET for free?',
    answer:
      'Yes. TalepNET supports a free starting point for 1 user, so teams can begin without committing to a paid rollout immediately.',
  },
  {
    question: 'When should a team move beyond the free starting point?',
    answer:
      'Teams usually move into Team or Business plans when more users, higher transaction limits, stronger reporting, or additional workflow depth become necessary.',
  },
  {
    question: 'What is the difference between Business and Enterprise?',
    answer:
      'Business adds broader workflow depth, reporting, and operational scale. Enterprise is designed for advanced security, integration, support, and larger rollout needs.',
  },
  {
    question: 'How do I request custom pricing?',
    answer:
      'If your team needs a tailored rollout, custom integrations, or enterprise-specific requirements, use the Request a Quote path and our team will follow up.',
  },
];

const Faq = () => {
  return (
    <section className="bg-white py-20 dark:bg-background-5 md:py-24 xl:py-28">
      <div className="main-container">
        <div className="mx-auto max-w-3xl text-center">
          <RevealAnimation delay={0.12}>
            <span className="badge badge-green !normal-case">Pricing FAQ</span>
          </RevealAnimation>
          <RevealAnimation delay={0.18}>
            <h2 className="mt-5 text-3xl font-normal text-secondary dark:text-accent sm:text-4xl">
              Common questions about plans and rollout
            </h2>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.24}>
          <Accordion className="mx-auto mt-12 w-full max-w-4xl" defaultValue="0">
            {pricingFaqs.map((item, index) => (
              <AccordionItem key={item.question} value={String(index)} className="rounded-[24px] border border-stroke-3 px-6 dark:border-stroke-7">
                <AccordionTrigger
                  className="flex w-full cursor-pointer items-center justify-between py-6"
                  titleClassName="flex-1 text-left text-tagline-1 font-normal text-secondary dark:text-accent xl:text-heading-6"
                  value={String(index)}
                  iconType="arrow"
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent value={String(index)}>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Faq;
