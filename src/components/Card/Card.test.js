/* eslint-disable no-unused-vars */
import React from 'react';
import { render,screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Card from 'src/components/Card';

describe('Card', () => {
  it('renders correctly', () => {
    const user = {
      profile_image: {
        medium: 'user_medium.jpg'
      },
      name: 'John Doe'
    };
    const likeCount = 10;

    const { getByAltText, getByText } = render(
      <Card
        source="image.jpg"
        alt="Image Alt"
        user={user}
        like={likeCount}
      />
    );

    const imageElement = screen.getByAltText('Image Alt');
    const usernameElement = screen.getByText('John Doe');
    const likeCountElement = screen.getByText('10');

    expect(imageElement).toBeInTheDocument();
    expect(usernameElement).toBeInTheDocument();
    expect(likeCountElement).toBeInTheDocument();
  });
});
