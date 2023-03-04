import React from "react"

import { NUM_OF_GUESSES_ALLOWED } from '../../utils/constants'
import { range } from '../../utils/utils'
import Guess from '../Guess'

function Results({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((el) => {
        return <Guess key={el} guess={guesses[el]} answer={answer} />
      })}
    </div>
  )
}

export default Results
