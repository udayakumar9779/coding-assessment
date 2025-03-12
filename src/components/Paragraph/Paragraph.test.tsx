import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Paragraph from '../Paragraph/Paragraph';

describe('Paragraph Component', () => {
  test('renders the paragraph with correct text', () => {
    render(<Paragraph text="This is a test paragraph." />);

    const paragraphElement = screen.getByText('This is a test paragraph.');

    expect(paragraphElement).toBeInTheDocument();

    expect(paragraphElement).toHaveClass('paragraph');
  });

  test('renders different text correctly', () => {
    render(<Paragraph text="Another test case." />);

    const paragraphElement = screen.getByText('Another test case.');

    expect(paragraphElement).toBeInTheDocument();
  });
});
