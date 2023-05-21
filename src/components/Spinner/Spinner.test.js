import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Spinner from 'src/components/Spinner';

describe('Spinner', () => {
  it('renders when loading is true', () => {
    render(<Spinner loading={true} />);
    const spinnerContainer = screen.getByTestId('spinner-container');
    const spinner = screen.getByTestId('spinner');

    expect(spinnerContainer).toBeInTheDocument();
    expect(spinner).toBeInTheDocument();
  });

  it('does not render when loading is false', () => {
    render(<Spinner loading={false} />);
    const spinnerContainer = screen.queryByTestId('spinner-container');
    const spinner = screen.queryByTestId('spinner');

    expect(spinnerContainer).not.toBeInTheDocument();
    expect(spinner).not.toBeInTheDocument();
  });
});
