import { useState, useEffect } from 'react';
import { findCharacterById, getCharacters } from '../../services/airBenderApi';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(characters => {
        setCharacters(characters);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    characters
  };
};

export const useCharacterById = id => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    findCharacterById(id)
      .then(character => {
        setCharacter(character);
        setLoading(false);
      });
  }, [id]);

  return {
    loading,
    character
  };
};
