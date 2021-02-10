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
    .then(res => res.json())
    .then(results => results.map(result => ({
      id: result._id,
      name: result.name,
      image: result.photoUrl,
      enemies: result.enemies,
      allies: result.allies
    })));
};
