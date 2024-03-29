/* eslint-disable no-unused-vars */
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import User from './components/User'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>
    },
    {
      path: "/About",
      element: <><Navbar/><About /></>
    },
    {
      path: "/Contact",
      element: <><Navbar/><Contact /></>
    },
    {
      path : "/user/:username",
      element : <><Navbar/><User/></>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
