import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'

      // {/* strict mode development mai code ko do bar run karata hai ak bar check karne kai lia  */}
function App() {
  const [count, setCount] = useState(0)

  //useEffect -- ak react hook hota hai jo ak component ka mount hona pa chalta hai 
  //case 1 : run in every render
  useEffect(() => {
      alert("I will run on every render");
  })  //we have to pass a empty array
  
  //case 2 : run only on first render
  useEffect(() => {
    alert("Hey welcome to my page");
  }, [])

  // case3 : run only when certain value gets changed
  useEffect(() => {
    alert("Count was changed");
  }, [count])  

  return (
    <>
      <Navbar color={"white"}/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
