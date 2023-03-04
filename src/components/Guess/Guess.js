import React from "react"

import {range} from '../../utils/utils'

function Guess({ guess }) {
  const letters = guess ? guess.split('') : range(5).map(() => undefined)

  return (
    <p className="guess">
      {letters?.map((letter, index) => {
        // eslint-disable-next-line react/no-array-index-key
        return <span className="cell" key={`${index}-${letter}`}>{letter}</span>
      })}
    </p>
  )
}

export default Guess
