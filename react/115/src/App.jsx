import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Login from './components/Login'
import User from './components/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// problem with traditional methord every time we open a link(anchor tag) the page reloads to make sure that the page do not reload we use react router-- npm i react-router-dom

const router = createBrowserRouter([
  {
    path: '/',
    element:<><Navbar/><Home/></>
  },
  {
    path: '/about',
    element: <><Navbar/><About/></>
  },
  {
    path: '/login',
    element: <><Navbar/><Login/></>
  },
  {
    path: '/user/:username',
    element: <><Navbar/><User/></>
  }
])


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar/> */}
      <RouterProvider router={router}/>
    </>
  )
}

export default App
