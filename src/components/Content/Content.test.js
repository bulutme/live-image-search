import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { AppProvider } from 'src/context';
import Content from 'src/components/Content';

describe('Content', () => {
  it('renders no content message when there are no images', () => {
    const contextValue = {
      getImagesByQuery: jest.fn(),
      searchQuery: '',
      images: { results: [] },
      loading: false,
      getDefaultImages: jest.fn(),
    };

    render(
      <MemoryRouter>
        <AppProvider value={contextValue}>
          <Content />
        </AppProvider>
      </MemoryRouter>
    );

    const noContentElement = screen.getByText('NO IMAGES FOUND');
    expect(noContentElement).toBeInTheDocument();
  });
});
