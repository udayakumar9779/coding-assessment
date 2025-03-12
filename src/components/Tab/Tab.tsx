import React from 'react';
import './Tab.css';

interface TabProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const Tab: React.FC<TabProps> = ({ title, isActive, onClick, index }) => {
  return (
    <div className="tab">
      <button
        className={`tab-button ${isActive ? 'active' : 'inactive'}`}
        style={{ borderRight: index === 2 ? 'none' : undefined }}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Tab;
