import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import tabData from '../src/constants/data/tabData';
import TabPage from '../src/pages/TabPage';

describe('TabPage Component', () => {
  test('renders TabPage correctly with default content', async () => {
    render(<TabPage />);

    const headingElement = await screen.findByText(tabData[0].heading);

    console.log('Expected Heading:', tabData[0].heading);
    console.log('Rendered Heading:', headingElement.textContent);

    expect(headingElement).toBeInTheDocument();
  });

  test('changes content when a tab is clicked', async () => {
    render(<TabPage />);

    const secondTab = screen.getByRole('button', { name: tabData[1].title });
    fireEvent.click(secondTab);

    const updatedHeading = await screen.findByText(tabData[1].heading);

    console.log('Expected Heading After Click:', tabData[1].heading);
    console.log('Rendered Heading After Click:', updatedHeading.textContent);

    expect(updatedHeading).toBeInTheDocument();
  });
});
