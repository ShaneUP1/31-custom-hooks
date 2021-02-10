import React from 'react';
import PropTypes from 'prop-types';
import CharacterDetail from '../detail/CharacterDetail';
import { useCharacterById } from '../hooks/characters';

const CharacterById = ({ match }) => {
  const { loading, character } = useCharacterById(match.params.id);

  if(loading) return <h2>Still Loading</h2>;
  return <CharacterDetail {...character} />;
};

CharacterById.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default CharacterById;
