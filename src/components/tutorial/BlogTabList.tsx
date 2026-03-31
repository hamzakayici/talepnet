import { Fragment } from 'react';
import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';

const BlogTabList = () => {
  return (
    <Fragment>
      <TabList variant="desktop">
        <Tab index={0} variant="desktop">
          Tümü
        </Tab>
        <Tab index={1} variant="desktop">
          Satın Alma
        </Tab>
        <Tab index={2} variant="desktop">
          Tedarik Zinciri
        </Tab>
        <Tab index={3} variant="desktop">
          Otomasyon
        </Tab>
        <Tab index={4} variant="desktop">
          Entegrasyon
        </Tab>
        <Tab index={5} variant="desktop">
          Raporlama
        </Tab>
      </TabList>
      <TabList variant="mobile">
        <Tab index={0} variant="mobile">
          Tümü
        </Tab>
        <Tab index={1} variant="mobile">
          Satın Alma
        </Tab>
        <Tab index={2} variant="mobile">
          Tedarik Zinciri
        </Tab>
        <Tab index={3} variant="mobile" className="text-nowrap">
          Otomasyon
        </Tab>
        <Tab index={4} variant="mobile">
          Entegrasyon
        </Tab>
        <Tab index={5} variant="mobile">
          Raporlama
        </Tab>
      </TabList>
    </Fragment>
  );
};

export default BlogTabList;
