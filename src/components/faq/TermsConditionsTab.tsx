import { faqCategories } from '@/data/json/faq/faq';
import FaqCategoryTab from './FaqCategoryTab';

const TermsConditionsTab = () => {
  return <FaqCategoryTab items={faqCategories.marketplace} />;
};

export default TermsConditionsTab;
