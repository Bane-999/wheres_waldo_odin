async function getCharactersAPI() {
    const charactersAPI = "http://localhost:3000/api/v1/characters";
    const response = await fetch(charactersAPI);
    const characters = await response.json();
    return characters;
};

export default getCharactersAPI;