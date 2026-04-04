import { faqCategories } from '@/data/json/faq/faq';
import FaqCategoryTab from './FaqCategoryTab';

const PrivacyTab = () => {
  return <FaqCategoryTab items={faqCategories.security} />;
};

export default PrivacyTab;
