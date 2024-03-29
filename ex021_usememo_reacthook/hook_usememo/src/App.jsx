import { useMemo, useState } from 'react'

import './App.css'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [cal, setcal] = useState(false)
  const sum = useMemo(()=>{return count1 + count2},[cal] )

  return (
    <>

        <button onClick={() => setCount1((count1) => count1 + 1)}>
          count is {count1}
        </button>
        <button onClick={() => setCount2((count2) => count2 + 1)}>
          count is {count2}
        </button>
        <p>----------------------------------------------------------</p>
        <h2>first number = {count1}</h2>
        <h2>second number = {count2}</h2>
        <h3>sum = {sum}</h3>
        <button onClick={()=>setcal(!cal)}>calculate</button>
    </>
  )
}

export default App
