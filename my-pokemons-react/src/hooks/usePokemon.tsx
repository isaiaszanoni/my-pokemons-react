import { useEffect, useState } from "react"
import getRandomPokemon from "../services/getPokemons"

export interface IUsePokemonProps {
  pokemonName: string,
  pokemonNumber: string,
  guess: string,
  correctGuess?: string
}

export type randomPokemon = {
  sprite: string;
  number: number;
  name: string;
  type: string;
};

function usePokemon() {
  const [pokemon, setPokemon] = useState<randomPokemon>()

  async function getPokemon() {
    const min = 0
    const max = 151
    const randomPokemonNumber = Math.floor(Math.random() * (max - 0 + 1) + min)
    const randomPokemon = await getRandomPokemon(randomPokemonNumber.toString())
    setPokemon(randomPokemon)
  }

  function whoIsThatPokemon(guess: string): boolean{
    const guessIsCorrect = guess === pokemon?.name || guess === pokemon?.number.toString() ? true : false
    console.log(`guess: ${guess}. Pokemon: ${pokemon?.name}. Correct: ${guessIsCorrect}`)
    return guessIsCorrect
  }

  function restartGame() {
    getPokemon()
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return { pokemon, whoIsThatPokemon, restartGame, getPokemon }
}

export default usePokemon