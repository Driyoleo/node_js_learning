import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [time, settime] = useState(0)
  const t = useRef(0)
  const id = useRef(null)

  function start() {
    if (id == null) {
      true
    } else {
      t.current = 0
      clearInterval(id.current)
      console.log(id,"yes")
    }
    id.current = setInterval(() => {
      // console.log(t.current , 0.001)
      t.current = t.current + 1
      settime(t.current)
      console.log(id)
    }, 1000);
  }

  function stop(){
    clearInterval(id.current)
  }
  return (
    <>
      <h1>time : {time}</h1>
      <div>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
      </div>
    </>
  )
}

export default App
