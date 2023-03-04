import React from 'react'

function Input() {
  const [guess, setGuess] = React.useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log({ guess })
    setGuess('')
  }

  return (
    <form onSubmit={onSubmitHandler} className="guess-input-wrapper">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="\w{5,5}"
        title="5 letter word required"
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase())
        }}
      />
    </form>
  )
}

export default Input
