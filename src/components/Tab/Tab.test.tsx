import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tab from '../Tab/Tab';

describe('Tab Component', () => {
  const mockOnClick = jest.fn();

  test('renders the tab with correct title', () => {
    render(
      <Tab title="Tab 1" isActive={false} onClick={mockOnClick} index={0} />,
    );

    const tabButton = screen.getByRole('button', { name: /tab 1/i });

    expect(tabButton).toBeInTheDocument();
    expect(tabButton).toHaveTextContent('Tab 1');
  });

  test('applies active class when isActive is true', () => {
    render(
      <Tab title="Tab 2" isActive={true} onClick={mockOnClick} index={1} />,
    );

    const tabButton = screen.getByRole('button', { name: /tab 2/i });

    expect(tabButton).toHaveClass('active');
  });

  test('applies inactive class when isActive is false', () => {
    render(
      <Tab title="Tab 3" isActive={false} onClick={mockOnClick} index={1} />,
    );

    const tabButton = screen.getByRole('button', { name: /tab 3/i });

    expect(tabButton).toHaveClass('inactive');
  });

  test('calls onClick when the tab is clicked', () => {
    render(
      <Tab
        title="Clickable Tab"
        isActive={false}
        onClick={mockOnClick}
        index={1}
      />,
    );

    const tabButton = screen.getByRole('button', { name: /clickable tab/i });

    fireEvent.click(tabButton);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('does not apply border-right style when index is 2', () => {
    render(
      <Tab title="Tab 4" isActive={false} onClick={mockOnClick} index={2} />,
    );

    const tabButton = screen.getByRole('button', { name: /tab 4/i });

    expect(tabButton.style.borderRight).toBe('');
  });
});
