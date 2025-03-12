import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import tabData from '../constants/data/tabData';
import TabPage from './TabPage';

describe('TabPage Component', () => {
  test('renders TabPage correctly with default content', () => {
    render(<TabPage />);

    // Log all headings to check which one is being selected
    const headings = screen.getAllByRole('heading');
    headings.forEach((heading, index) =>
      console.log(`Heading ${index + 1}:`, heading.textContent),
    );

    // Find the correct heading
    const headingElement = screen.getByText(tabData[0].heading);

    console.log('Expected Heading:', tabData[0].heading);
    console.log('Rendered Heading:', headingElement.textContent);

    expect(headingElement).toBeInTheDocument();
  });

  test('changes content when a tab is clicked', async () => {
    render(<TabPage />);

    const secondTab = screen.getByRole('button', { name: tabData[1].title });

    // Click the second tab
    fireEvent.click(secondTab);

    // Wait for the content to update
    await waitFor(() => {
      const updatedHeading = screen.getByText(tabData[1].heading);

      console.log('Expected Heading After Click:', tabData[1].heading);
      console.log('Rendered Heading After Click:', updatedHeading.textContent);

      expect(updatedHeading).toBeInTheDocument();
    });
  });
});
