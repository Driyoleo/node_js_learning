import { useState } from 'react'                                
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>count = {count}</h1>
      <button onClick={()=>{setCount(count+1)}}>click</button>
    </>
  )
}

export default App


/*
steps :
  1) import { useState } from 'react'
  2) create a state for variable with it's initial value ,
      ~ do this outside the return statement ,there is no special reason but it's a good practice so it will be easy to configure about the states
        which are in use in a function
      eg.
      const [count, setCount] = useState(0)
  3) use the function to change the value of the variable ,
      eg.,
      setCount(count+1)
  4) you can do add anything eg.
    ~ you can even insert a whole html tag through it
      setcount(<navbar/>)
*/