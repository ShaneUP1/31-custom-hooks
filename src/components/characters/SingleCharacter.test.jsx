/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SingleCharacter from './SingleCharacter';

describe('SingleCharacter component', () => {
  afterEach(() => cleanup());
  it('renders a single character', () => {
    const { asFragment } = render(<SingleCharacter name={'Ari'} image={'www.url.com'}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
