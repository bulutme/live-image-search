import { render, screen } from '@testing-library/react';
import LikeInfo from 'src/components/LikeInfo';
import '@testing-library/jest-dom/extend-expect';

describe('LikeInfo', () => {
  it('renders the count correctly', () => {
    const count = 5;
    render(<LikeInfo count={count} />);

    const countElement = screen.getByText(count.toString());
    expect(countElement).toBeInTheDocument();
  });

  it('renders with the correct className', () => {
    const className = 'custom-class';
    render(<LikeInfo className={className} count={0} />);

    const likeInfoElement = screen.getByTestId('like-info');
    expect(likeInfoElement).toHaveClass(className);
  });

});
