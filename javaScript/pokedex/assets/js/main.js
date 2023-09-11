const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const limit = 12;
let offset = 0;

function loadPokemonsItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => 
            `
                <li class="pokemon ${pokemon.type}">
                    <span class="number">${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class = "type ${type}">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.photo}" alt="Imagem ${pokemon.name}">
                    </div>
                </li>
            `).join('');
        pokemonList.innerHTML += newHtml;
    })
}

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    loadPokemonsItens(offset, limit);
})

loadPokemonsItens(offset, limit);


//Pokémon: 151 na Geração I na região de Kanto; 100 na Geração II na região de Johto; 135 na Geração III na região de Hoenn; 107 na Geração IV na região de Sinnoh; 156 na Geração V na região de Unova; 72 na Geração VI na região de Kalos; 88 na Geração VII nas regiões de Alola e Kanto; 91 na Geração VIII na região de Galar e Hisui, e 103 na Geração IX na região de Paldea.