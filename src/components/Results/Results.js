import React from "react"

function Results({ guesses}) {
  return (
    <div className="guess-results">
      {guesses?.map((guess, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <p className="guess" key={index}>
            {guess}
          </p>
        )
      })}
    </div>
  )
}

export default Results
