import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NoContent from 'src/components/NoContent';

describe('NoContent', () => {
  it('renders correctly', () => {
    render(<NoContent />);

    const noContentElement = screen.getByText('NO IMAGES FOUND');
    expect(noContentElement).toBeInTheDocument();
  });
});
