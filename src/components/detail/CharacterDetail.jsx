/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ _id, name, photoUrl, affiliation, allies, enemies }) => {
  let characterAllies;
  let characterEnemies;

  if(allies.length > 1) {
    characterAllies = allies.map((ally) => (
      <li key={_id}>{ally}</li>
    ));
  }

  if(enemies.length > 1) {
    characterEnemies = enemies.map((enemy) => (
      <li key={_id + 574}>{enemy}</li>
    ));
  }

  return (
    <div data-testid="character-detail">
      <img src={photoUrl} alt={name} />
      <h2>{name}</h2>
      <p>{affiliation}</p>
      {characterAllies?.length && <ul>{characterAllies}</ul>}
      {characterEnemies?.length && <ul>{characterEnemies}</ul>}
    </div>
  );
};

CharacterDetail.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  allies: PropTypes.arrayOf(PropTypes.string.isRequired),
  enemies: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default CharacterDetail;
