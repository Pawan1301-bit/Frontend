import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //in usestate this count is not a variable it is called state variable
  const [count, setCount] = useState(0)
  const a = useRef(0);  //usecase1: to acess any element using ref
  const ref = useRef();
  //so every time when the page rerender the value  of a reinitalise to 0  so to initaialize a with useRef hook --accross rerender value persist rahagi -- jab a ki value update hogi tab page rerender nahi karaga
  useEffect(() => {
    console.log(`First rendering...`);
    ref.current.style.backgroundColor = "red"      //usecase2 -- to access any dom element using current
  }, [])
  useEffect(() => {
    a.current = a.current+1;
    console.log(`page is rendering the value of a is ${a.current}...`);
  })

  return (
    <>
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
        <button ref={ref} onClick={() => setCount((count) => count + 1)}>
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
