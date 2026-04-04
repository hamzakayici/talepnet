import RevealAnimation from '../animation/RevealAnimation';

const CareerDetailsHeading = ({ title }: { title?: string }) => {
  return (
    <div className="text-center space-y-3 mb-[70px]">
      <RevealAnimation delay={0.3}>
        <h2>{title}</h2>
      </RevealAnimation>
    </div>
  );
};
CareerDetailsHeading.displayName = 'CareerDetailsHeading';
export default CareerDetailsHeading;
