export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(characters => characters.map(character => ({
      id: character.id,
      name: character.name,
      image: character.photoUrl
    })));
};