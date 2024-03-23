
import { useState } from 'react'
import './App.css'

function App() {
  const [name , setname ] = useState({firstname : "" , lastname : ""})

 function onclickhandle(){
  alert("button is clicked")
 }

 function onchangehandle(e){
  setname({...name ,[e.target.name] : e.target.value})
  console.log(name)
  
 }
  return (
    <>
    <button onClick={onclickhandle}> click me</button>
    <input type="text" name='firstname' value={name.firstname} onChange={onchangehandle} />
    <input type="text" name='lastname' value={name.lastname} onChange={onchangehandle} />
    </>
  )
}

export default App
