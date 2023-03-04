import React from 'react'

import { WORDS } from '../../data'
import {NUM_OF_GUESSES_ALLOWED} from '../../utils/constants'
import { sample } from '../../utils/utils'
import HappyBanner from '../HappyBanner'
import Input from '../Input'
import Results from '../Results'
import SadBanner from '../SadBanner'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState('running')

  const handleGuess = (guess) => {
    const nextGuesses = [...guesses, guess]
    setGuesses(nextGuesses)

    if (guess.toUpperCase() === answer) {
      setGameStatus('won')
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }

  const isUserWin = gameStatus === 'won'
  const isUserLost = gameStatus === 'lost'

  return (
    <>
      {isUserWin && <HappyBanner countOfGuesses={guesses.length} />}
      {isUserLost && <SadBanner correctAnswer={answer} />}
      <Results guesses={guesses} answer={answer} />
      <Input handleGuess={handleGuess} disabledInput={isUserWin || isUserLost} />
    </>
)
}

export default Game
