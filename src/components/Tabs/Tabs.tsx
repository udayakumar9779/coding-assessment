import React from 'react';
import Tab from '../Tab/Tab';
import './Tabs.css';

interface TabData {
  title: string;
}

interface TabsProps {
  tabs: TabData[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="tabs-container">
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          title={tab.title}
          isActive={activeTab === index}
          onClick={() => setActiveTab(index)}
          index={index}
        />
      ))}
    </div>
  );
};

export default Tabs;
