import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Search from 'src/components/Search';
import { AppProvider } from 'src/context';

describe('Search', () => {
  it('renders correctly', () => {
    render(
      <AppProvider value={{ searchQuery: '' }}>
        <Search callback={() => {}} />
      </AppProvider>
    );

    const inputElement = screen.getByPlaceholderText('Search images');
    expect(inputElement).toBeInTheDocument();
  });

  it('calls the callback function with the input value', () => {
    const callbackMock = jest.fn();
    render(
      <AppProvider value={{ searchQuery: '' }}>
        <Search callback={callbackMock} />
      </AppProvider>
    );

    const inputElement = screen.getByPlaceholderText('Search images');
    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(callbackMock).toHaveBeenCalledTimes(1);
    expect(callbackMock).toHaveBeenCalledWith('test');
  });
});
