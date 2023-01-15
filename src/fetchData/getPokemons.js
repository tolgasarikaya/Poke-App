export const getPokemons = async function () {
  let pokemons = {};
  const callForAllPokemons = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=905`
  );
  const jsonPokemons = await callForAllPokemons.json();
  const resultsPokemon = jsonPokemons.results;
  pokemons = resultsPokemon.map((item) => {
    return { name: item.name };
  });
  //////////////////////////images////////////////////777
  for (let i = 1; i <= 905; i++) {
    const pokemonUrls = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    pokemons[i - 1].img = pokemonUrls;
  }
  //////////////////////////////types and stats/////////////7

  for (let i = 1; i <= 905; i++) {
    const callForPokemonTypes = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${i}/`
    );
    const typesJson = await callForPokemonTypes.json();
    const pokeTypes = typesJson.types;

    for (let j = 0; j < pokeTypes.length; j++) {
      pokemons[i - 1].types = pokemons[i - 1].types
        ? [...pokemons[i - 1].types, pokeTypes[j].type.name]
        : [pokeTypes[j].type.name];
    }

    const pokeStats = typesJson.stats;

    pokemons[i - 1].stats = {
      hp: pokeStats[0].base_stat,
      attack: pokeStats[1].base_stat,
      defense: pokeStats[2].base_stat,
      special_attack: pokeStats[3].base_stat,
      special_defense: pokeStats[4].base_stat,
      speed: pokeStats[5].base_stat,
    };
  }

  return pokemons;
};
