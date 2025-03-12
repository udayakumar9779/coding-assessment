import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tabs from '../Tabs/Tabs';

describe('Tabs Component', () => {
  const mockSetActiveTab = jest.fn();
  const tabsData = [{ title: 'Tab 1' }, { title: 'Tab 2' }, { title: 'Tab 3' }];

  test('renders all tabs', () => {
    render(
      <Tabs tabs={tabsData} activeTab={0} setActiveTab={mockSetActiveTab} />,
    );

    tabsData.forEach((tab) => {
      expect(
        screen.getByRole('button', { name: tab.title }),
      ).toBeInTheDocument();
    });
  });

  test('applies active class to the selected tab', () => {
    render(
      <Tabs tabs={tabsData} activeTab={1} setActiveTab={mockSetActiveTab} />,
    );

    const activeTab = screen.getByRole('button', { name: /Tab 2/i });
    expect(activeTab).toHaveClass('active');
  });

  test('calls setActiveTab on tab click', () => {
    render(
      <Tabs tabs={tabsData} activeTab={0} setActiveTab={mockSetActiveTab} />,
    );

    const tabToClick = screen.getByRole('button', { name: /Tab 2/i });
    fireEvent.click(tabToClick);

    expect(mockSetActiveTab).toHaveBeenCalledWith(1);
  });
});
