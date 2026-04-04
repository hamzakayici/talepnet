import { Fragment } from 'react';
import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';

const FaqTabList = () => {
  return (
    <Fragment>
      <TabList variant="desktop">
        <Tab index={0} variant="desktop">
          Product
        </Tab>
        <Tab index={1} variant="desktop">
          Pricing
        </Tab>
        <Tab index={2} variant="desktop">
          Security
        </Tab>
        <Tab index={3} variant="desktop">
          Supplier Portal
        </Tab>
      </TabList>
      <TabList variant="mobile">
        <Tab index={0} variant="mobile">
          Product
        </Tab>
        <Tab index={1} variant="mobile">
          Pricing
        </Tab>
        <Tab index={2} variant="mobile">
          Security
        </Tab>
        <Tab index={3} variant="mobile" className="text-nowrap">
          Supplier Portal
        </Tab>
      </TabList>
    </Fragment>
  );
};

export default FaqTabList;
