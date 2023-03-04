import React from "react"

import { checkGuess } from '../../utils/game-helpers'
import { range } from '../../utils/utils'

function Guess({ guess, answer }) {
  const checked = checkGuess(guess, answer)

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className={checked ? `cell ${checked[num].status}` : 'cell'}>
          {checked ? checked[num].letter : undefined}
        </span>
      ))}
    </p>
  )
}

export default Guess
