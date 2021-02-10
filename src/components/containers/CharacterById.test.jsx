/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import detailApiResponse from '../../fixtures/characterDetail.json';
import CharacterById from './CharacterById';

const server = setupServer(
  rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters/', (req, res, ctx) => {
    return res(ctx.json(detailApiResponse));
  })
);

describe('AllCharacters container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches and displays a character detail', async() => {
    render(
      <MemoryRouter>
        <CharacterById match={{ params: { id: '5cf5679a915ecad153ab68d1' } }}/>
      </MemoryRouter>
    );

    screen.getByText('Still Loading');

    const characterDetail = await screen.findByTestId('character-detail');

    return waitFor(() => {
      expect(characterDetail).not.toBeEmptyDOMElement();
    });
  });
});

