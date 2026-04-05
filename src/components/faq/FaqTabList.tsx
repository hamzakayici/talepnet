'use client';

import { useTranslations } from '@/i18n/useTranslations';
import { Fragment } from 'react';
import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';

const FaqTabList = () => {
  const t = useTranslations('faq');

  return (
    <Fragment>
      <TabList variant="desktop">
        <Tab index={0} variant="desktop">
          {t('tabs.product')}
        </Tab>
        <Tab index={1} variant="desktop">
          {t('tabs.pricing')}
        </Tab>
        <Tab index={2} variant="desktop">
          {t('tabs.security')}
        </Tab>
        <Tab index={3} variant="desktop">
          {t('tabs.supplierPortal')}
        </Tab>
      </TabList>
      <TabList variant="mobile">
        <Tab index={0} variant="mobile">
          {t('tabs.product')}
        </Tab>
        <Tab index={1} variant="mobile">
          {t('tabs.pricing')}
        </Tab>
        <Tab index={2} variant="mobile">
          {t('tabs.security')}
        </Tab>
        <Tab index={3} variant="mobile" className="text-nowrap">
          {t('tabs.supplierPortal')}
        </Tab>
      </TabList>
    </Fragment>
  );
};

export default FaqTabList;
