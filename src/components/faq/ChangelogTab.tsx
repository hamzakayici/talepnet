'use client';

import { getFaqCategories } from '@/data/json/faq/faq';
import { useI18n } from '@/i18n/I18nProvider';
import FaqCategoryTab from './FaqCategoryTab';

const ChangelogTab = () => {
  const { messages } = useI18n();
  return <FaqCategoryTab items={getFaqCategories(messages.faq).pricing} />;
};

export default ChangelogTab;
