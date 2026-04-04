import { faqCategories } from '@/data/json/faq/faq';
import FaqCategoryTab from './FaqCategoryTab';

const GeneralTab = () => {
  return <FaqCategoryTab items={faqCategories.product} />;
};

export default GeneralTab;
