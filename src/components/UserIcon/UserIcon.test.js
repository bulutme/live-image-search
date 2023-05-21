import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserIcon from 'src/components/UserIcon';

describe('UserIcon', () => {
  it('renders default user icon when url is not provided', () => {
    render(<UserIcon url="" />);
    const defaultIconElement = screen.getByAltText('User');
    expect(defaultIconElement).toBeInTheDocument();
  });

  it('renders user icon with provided url', () => {
    const url = 'https://example.com/user.png';
    render(<UserIcon url={url} />);
    const userIconElement = screen.getByAltText('User');
    expect(userIconElement).toBeInTheDocument();
    expect(userIconElement).toHaveAttribute('src', url);
  });

  it('renders with the correct className', () => {
    const className = 'custom-class';
    render(<UserIcon className={className} url="" />);
    const userIconElement = screen.getByTestId('user-icon');
    expect(userIconElement).toHaveClass(className);
  });
});
