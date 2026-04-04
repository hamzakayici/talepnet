import TabContent from '../ui/tab/TabContent';
import ChangelogTab from './ChangelogTab';
import GeneralTab from './GeneralTab';
import PrivacyTab from './PrivacyTab';
import TermsConditionsTab from './TermsConditionsTab';

const data = [
  {
    id: 1,
    tabTitle: 'Product',
    tabContent: <GeneralTab />,
  },
  {
    id: 2,
    tabTitle: 'Pricing',
    tabContent: <ChangelogTab />,
  },
  {
    id: 3,
    tabTitle: 'Security',
    tabContent: <PrivacyTab />,
  },
  {
    id: 4,
    tabTitle: 'Supplier Portal',
    tabContent: <TermsConditionsTab />,
  },
];

const FaqTabContent = () => {
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
