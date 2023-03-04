import React from "react"

function HappyBanner({ countOfGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{countOfGuesses === 1 ? '1 guess' : `${countOfGuesses} guesses`}</strong>.
      </p>
    </div>
  )
}

export default HappyBanner
