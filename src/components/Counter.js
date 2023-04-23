import React from 'react'
import "../stylesheet/Counter.css"

export default function Counter({ numClicks }) {
  return (
    <div className='counter'>
    { numClicks }
    </div>
  )
}
