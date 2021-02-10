/* eslint-disable no-var */
import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ character }) => {
  let characterAllies;
  let characterEnemies;

  if(character.allies.length > 1) {
    characterAllies = character.allies.map((ally) => (
      <li key={character.id}>{ally}</li>
    ));
  }

  if(character.enemies.length > 1) {
    characterEnemies = character.enemies.map((enemy) => (
      <li key={character.id + 574}>{enemy}</li>
    ));
  }

  return (
    <dev>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>{character.affiliation}</p>
      {characterAllies?.length && <ul>{characterAllies}</ul>}
      {characterEnemies?.length && <ul>{characterEnemies}</ul>}
    </dev>
  );
};

CharacterDetail.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired,
    allies: PropTypes.arrayOf(PropTypes.string.isRequired),
    enemies: PropTypes.arrayOf(PropTypes.string.isRequired)
  })
};

export default CharacterDetail;
