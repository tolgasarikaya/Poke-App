const FetchAllPokemons = (props) => {
  const getPokemons = async function () {
    let callForPokemons = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
    );
    let jsonPokemons = await callForPokemons.json();
    let pokemonList = jsonPokemons.results;
    props.updatePokemons(pokemonList);
    console.log(pokemonList);
  };

  getPokemons();
  return;
};

export default FetchAllPokemons;

//905 e kadar image alabiliyor
