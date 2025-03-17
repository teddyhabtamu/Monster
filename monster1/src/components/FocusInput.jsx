import React from 'react'
import { useRef } from 'react'

const FocusInput = () => {
  const inputElement = useRef(null)

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "Tewodros"
  }

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default FocusInput