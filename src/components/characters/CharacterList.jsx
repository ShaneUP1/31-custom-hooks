import React from 'react';
import PropTypes from 'prop-types';
import SingleCharacter from './SingleCharacter';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
  const CharacterElements = characters.map(character => {
    if(character.image){
      return (
        <li key={character.id}>
          <Link to={`/characters/${character.id}`} >
            <SingleCharacter name={character.name} image={character.image} />
          </Link>
        </li>
      );
    }
    return;
  });
   
  return (
    <ul data-testid="characters">
      {CharacterElements}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string
  })).isRequired
};

export default CharacterList;
