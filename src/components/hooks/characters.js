import { useState, useEffect } from 'react';
import { getCharacters } from '../../services/airBenderApi';

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
