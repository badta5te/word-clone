import React from 'react'

import { WORDS } from '../../data'
import { sample } from '../../utils/utils'
import Input from '../Input'
import Results from '../Results'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])

  const handleGuess = (guess) => setGuesses([...guesses, guess])

  return (
    <>
      <Results guesses={guesses} answer={answer} />
      <Input handleGuess={handleGuess} />
    </>
)
}

export default Game
