import { useState } from 'react';
import banner from '../../assets/shop/banner2.jpg'
import Cover from '../shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hook/useMenu';
import OrderTabs from './orderTabs/OrderTabs';
import { useParams } from 'react-router-dom';

const OrderFood = () => {
    const categories = ['salad','dessert','soups','pizza','drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
const [tabIndex,setTabIndex]= useState(initialIndex)
const [menu] = useMenu();

const dessert = menu.filter(item => item.category === 'dessert');
const soups = menu.filter(item => item.category === 'soup');
const salads = menu.filter(item => item.category === 'salad');
const pizza = menu.filter(item => item.category === 'pizza');
const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Cover img={banner} title={"Order Food"}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salads</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
    <OrderTabs items={salads}></OrderTabs>
  </TabPanel>
  <TabPanel>
  <OrderTabs items={dessert}></OrderTabs>
  </TabPanel>
  <TabPanel>
  <OrderTabs items={soups}></OrderTabs>
  </TabPanel>
  <TabPanel>
  <OrderTabs items={pizza}></OrderTabs>
  </TabPanel>
  <TabPanel>
  <OrderTabs items={drinks}></OrderTabs>
  </TabPanel>
</Tabs>
            
        </div>
    );
};

export default OrderFood;