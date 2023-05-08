import { ReactElement, useEffect, useState } from "react";
import * as Styles from './styles'
import { IPokemonContainerProps } from "./types";
import usePokemon from "../../hooks/usePokemon";
import Button from "../button";

const PokemonContainer = (props: IPokemonContainerProps): ReactElement => {
  const { pokemon, whoIsThatPokemon, restartGame } = usePokemon()
  const [ guess, setGuess ] = useState('')
  const [ correctGuess, setCorrectGuess] = useState(false)
  const [filter, setFilter] = useState('filter')
  const [gameButtonTittle, setGameButtonTittle] = useState('Enviar!')
  
  const handleChangeGuess = (event: any) => {
    setGuess(event.target.value)
  }

  const handleGuess = () => {
    setCorrectGuess(whoIsThatPokemon(guess))
  }

  const handleRestartGame = () => {
    setCorrectGuess(false)
    setFilter('filter')
    restartGame()
    setGuess('')

    console.log('Game Reset!')
  }

  const gameButtonFunc = () => {
    if (correctGuess) { 
      handleRestartGame()
      
    } else { 
      handleGuess() 
      setGameButtonTittle('Enviar!')
    }
    
  }

  useEffect(() => {
    if (correctGuess) {
      setFilter('')
      setGameButtonTittle('Recomeçar!')
    } else {
      setFilter('filter')
      setGameButtonTittle('Enviar!')
    }
    

  },[correctGuess])

  useEffect(() => {
    console.log('mudou')
  }, [correctGuess])

  return (
    <>
      <Styles.Container>
        <img className={`pokemon-image ${filter}`} src={pokemon?.sprite} alt="Quem é este pokemon?" />
      </Styles.Container>
      <Styles.Form>
        <input name='Quem é este pokémon?'
          type={'text'}
          onChange={handleChangeGuess}
          value={guess}
          className="poke-input"
        />
        <Button onClick={() => {gameButtonFunc()}} title={gameButtonTittle} maxWidth={280}></Button>
      </Styles.Form>
    </>
  )
}

export default PokemonContainer