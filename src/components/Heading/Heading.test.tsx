import { render, screen } from '@testing-library/react';
import Heading from '../Heading/Heading';
import '@testing-library/jest-dom';

test('renders the heading component with correct text', () => {
  render(<Heading text="Hello, World!" />);

  const headingElement = screen.getByText(/Hello, World!/i);
  expect(headingElement).toBeInTheDocument();
});
