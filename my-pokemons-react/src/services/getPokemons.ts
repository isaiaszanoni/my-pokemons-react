import axios from "axios";
import { randomPokemon } from "../hooks/usePokemon";

async function getRandomPokemon(pokemonNumber: string) {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`
  );

  if (response.status === 200) {
    const randomPokemon: randomPokemon = {
      name: response.data.name,
      number: response.data.order,
      sprite: response.data.sprites.front_default,
      type: response.data.types[0].name,
    };
    return randomPokemon;
  }
  return;
}

export default getRandomPokemon;
