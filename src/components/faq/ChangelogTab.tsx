import { faqCategories } from '@/data/json/faq/faq';
import FaqCategoryTab from './FaqCategoryTab';

const ChangelogTab = () => {
  return <FaqCategoryTab items={faqCategories.pricing} />;
};

export default ChangelogTab;
