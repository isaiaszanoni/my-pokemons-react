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
    // const generations
    const randomPokemonNumber = Math.floor(Math.random() * (max - 0 + 1) + min)
    const randomPokemon = await getRandomPokemon(randomPokemonNumber.toString())
    setPokemon(randomPokemon)
  }

  function whoIsThatPokemon(guess: string): boolean{
    let guessIsCorrect = false
    guess = guess.toLocaleLowerCase()

    if (pokemon?.name.includes('nidoran')) {
      guessIsCorrect = true
    }
    guessIsCorrect = guess === pokemon?.name.toLocaleLowerCase() || guess === pokemon?.number.toString() 
    ? true
    : false
    
    console.log(`guess: ${guess}. Pokemon: ${pokemon?.name}. Correct: ${guessIsCorrect}`)
    return guessIsCorrect
  }

  function getPokemonNames() {
    // get all pokemons
    // salva os resultados em um estado aqui dentro do meu usePokemon

    // desafio
    // implemente o input com os complementos

    // Complementos:
    // existem libs que facilitam isso. 
    // tente fazer na mão, se der ruim, procura uma lib
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