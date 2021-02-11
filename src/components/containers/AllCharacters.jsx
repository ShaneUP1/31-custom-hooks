/* eslint-disable max-len */
import React from 'react';
import { useCharacters } from '../state/characters';
import CharacterList from '../characters/CharacterList';
import { useTheme } from '../state/themeContext';
import styles from './AllCharacters.css';


const AllCharacters = () => {
  const { loading, characters } = useCharacters();
  const { theme } = useTheme();

  if(loading) return <h1>Still Loading</h1>;
  return (
    <div className={`${styles.AllCharacters} ${styles[theme]}`}>
      <CharacterList characters={characters} />
    </div>
  );
};

export default AllCharacters;
