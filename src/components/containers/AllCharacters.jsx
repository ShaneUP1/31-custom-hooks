import React from 'react';
import { useCharacters } from '../hooks/characters';
import CharacterList from '../characters/CharacterList';


const AllCharacters = () => {
  const { loading, characters } = useCharacters();

  if(loading) return <h1>Still Loading</h1>;
  return <CharacterList characters={characters} />;
};

export default AllCharacters;
