import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useNavigate } from 'react-router-dom';
import TurnBackButton from 'src/components/TurnBackButton';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('TurnBackButton', () => {
  it('navigates to the home page when clicked', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(<TurnBackButton />);

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
