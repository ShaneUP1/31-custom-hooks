/* eslint-disable max-len */
export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(characters => characters.map(character => ({
      id: character._id,
      name: character.name,
      image: character.photoUrl
    })));
};

export const findCharacterById = id => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`)
    .then(res => res.json());
};
