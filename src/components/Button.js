import React from 'react'
import "../stylesheet/Button.css"

export default function Button({ text, isButtonClick, handleClick }) {
  return (
    <button
    className={ isButtonClick ? "button-click" : "button-reset" }
    onClick={handleClick}>
       { text }
    </button>
  )
}
