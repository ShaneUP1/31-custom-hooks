import React from 'react';
import PropTypes from 'prop-types';
import CharacterDetail from '../detail/CharacterDetail';
import { useCharacterById } from '../state/characters';
import { useTheme } from '../state/themeContext';
import styles from './CharacterById.css';

const CharacterById = ({ match }) => {
  const { loading, character } = useCharacterById(match.params.id);
  const { theme, setTheme } = useTheme();

  if(loading) return <h2>Still Loading</h2>;
  return (
    <div className={`${styles.CharacterById} ${styles[theme]}`}>
      <CharacterDetail {...character} />
    </div>
  );
};

CharacterById.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default CharacterById;
