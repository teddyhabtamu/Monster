import React from 'react'
import { useRef, useState, useEffect } from 'react'

const Timer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div>
      <h2>Timer: {count}</h2>
      <button onClick={() => clearInterval(intervalRef.current)}>Pause</button>
      <button onClick={() => {
        clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
          setCount((prevCount) => prevCount + 1);
        }, 1000);
      }}>Resume</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Timer