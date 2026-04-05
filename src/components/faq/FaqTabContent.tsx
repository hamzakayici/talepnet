'use client';

import { useTranslations } from '@/i18n/useTranslations';
import TabContent from '../ui/tab/TabContent';
import ChangelogTab from './ChangelogTab';
import GeneralTab from './GeneralTab';
import PrivacyTab from './PrivacyTab';
import TermsConditionsTab from './TermsConditionsTab';

const FaqTabContent = () => {
  const t = useTranslations('faq');
  const data = [
    {
      id: 1,
      tabTitle: t('tabs.product'),
      tabContent: <GeneralTab />,
    },
    {
      id: 2,
      tabTitle: t('tabs.pricing'),
      tabContent: <ChangelogTab />,
    },
    {
      id: 3,
      tabTitle: t('tabs.security'),
      tabContent: <PrivacyTab />,
    },
    {
      id: 4,
      tabTitle: t('tabs.supplierPortal'),
      tabContent: <TermsConditionsTab />,
    },
  ];

  return (
    <>
      {data.map((item, index) => (
        <TabContent key={item.id} index={index}>
          {item.tabContent}
        </TabContent>
      ))}
    </>
  );
};

export default FaqTabContent;
