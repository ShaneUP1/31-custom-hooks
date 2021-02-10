/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';

describe('CharacterList component', () => {
  afterEach(() => cleanup());
  it('renders a list of characters', () => {
    const { asFragment } = render(<CharacterList characters={[{ name: 'Ari', image: 'www.url.com', id: '2' }]}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
