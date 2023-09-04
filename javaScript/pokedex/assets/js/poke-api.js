const pokeApi = {}

function convertPokeApiDetailsToPokemon(pokeDetail) {
    const pokemon = new Pokemon();
    pokemon.name = pokeDetail.name;
    pokemon.number = pokeDetail.id;
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;
    pokemon.types = types;
    pokemon.type = type;
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;
    pokemon.height = (pokeDetail.height / 10).toFixed(2);
    pokemon.weight = (pokeDetail.weight / 10).toFixed(2);
    const abilities = pokeDetail.abilities.map((abilityType) => abilityType.ability.name);
    const [ability] = abilities;
    pokemon.abilities = abilities;
    pokemon.ability = ability;
    const stats = pokeDetail.stats.map((typeStat) => typeStat);
    pokemon.stats = stats;

    return pokemon;
}

pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailsToPokemon)
        .catch((error) => console.error(error))
}

pokeApi.getPokemons = (offset = 0, limit = 50) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json())
        .then((jsonbody) => jsonbody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => pokemonDetails)
        .catch((error) => console.error(error))
}