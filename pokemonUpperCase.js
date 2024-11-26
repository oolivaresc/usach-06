//2.- Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.
let pokemon = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"];

const pokemonUpperCase = pokemon.map(poke => {
  return poke.toUpperCase();
});

console.log("Convertir a mayuscula:", pokemonUpperCase);