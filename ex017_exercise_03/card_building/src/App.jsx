import { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import './App.css'

function App() {
  const [jdata, setjdata] = useState([])
  async function fetchdata() {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let d = await a.json()
    setjdata(d)
  }
  useEffect(() => {
    fetchdata()
  }, [])

  return (
    <>
    <Navbar/>
      <div className="container">
        {jdata.map((data) => {
          return <div key={data.id} className='card'>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
            <p>userId : {data.userId}, Id : {data.id}</p>
          </div>

        })}
      </div>
    </>
  )
}

export default App
{/* <div>
<h1>{data.User}</h1>
<p>{data.id}</p>
<p>{data.title}</p>
<p>{data.body}</p>
</div> */}