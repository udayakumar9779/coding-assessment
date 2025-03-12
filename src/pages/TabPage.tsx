import React, { useState } from 'react';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
import Tabs from '../components/Tabs/Tabs';
import pageContent from '../constants/data/data';
import tabData from '../constants/data/tabData';
import './TabPage.css';

const TabPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="tab-panel-container">
      <h3 className="tab-panel-subtitle">{pageContent.h3}</h3>
      <h1 className="tab-panel-title">{pageContent.h1}</h1>
      <p className="tab-panel-description">{pageContent.p}</p>
      <Tabs tabs={tabData} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="tab-panel-content">
        <Heading text={tabData[activeTab].heading} />
        <Paragraph text={tabData[activeTab].content} />
      </div>
    </div>
  );
};

export default TabPage;
