import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
  const [ counter, setCounter ] = useState(0);

  useEffect(()=>{
    document.title = `Counter: ${counter}`
  }, [counter])

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => {setCounter(counter+ 1)}}>Count</button>
    </div>
  )
}

export default CounterEffect