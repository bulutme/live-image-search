import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ScrollToTopButton from 'src/components/ScrollToTopButton';

describe('ScrollToTopButton', () => {
  it('scrolls to top when button is clicked', () => {
    window.scrollTo = jest.fn();

    render(<ScrollToTopButton />);
    window.scrollTo(0, 1000);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
