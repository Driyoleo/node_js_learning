/* eslint-disable no-unused-vars */
import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [fail, setfail] = useState(false)
  const [list, setlist] = useState("")

  const changelist = useCallback(()=>{setlist(list+`,${count}`)},[fail]);

  return (
    <>
        <h1>roll numbers of students failed : {list}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          roll no : {count}
        </button>
        <br />
        <button onClick={()=>{
          setfail(!fail)
          changelist()
        }}>
          fail
        </button>
        

    </>
  )
}

export default App
