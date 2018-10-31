import React from 'react'

const Counter2 = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    // Update the document title using the browser API
    document.title = `Counter = ${count}`;
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(0)}>
        Clear
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  )
}

export default Counter2

