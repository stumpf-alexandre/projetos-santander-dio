const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemon (pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    <li class="type">Grass</li>
                    <li class="type">Poison</li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Imagem ${pokemon.name}">
            </div>
        </li>
    `;
}

const pokemonList = document.getElementById('pokemonList');

//interface de comunicação de uma promice
//requisição assincrona
fetch(url)
    .then((response) => response.json())
    .then((jsonbody) => jsonbody.results)
    .then((pokemonsList) => {
        for (let i = 0; i < pokemonsList.length; i++) {
            const pokemons = pokemonsList[i];
            pokemonList.innerHTML += convertPokemon(pokemons);
        }
    })
    .catch((error) => console.log(error))