import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [adjactive, setAdjactive] = useState("good");

  //useCallback is used when we do not  want our function to  change when the page rerender
  // const getAdjactive = ()=>{
  //   return "another" + count;
  // }

  //we  only use useCallback() when the function is returning the constant value if the value is changing like in our case  we do not use useCallback() hook -- for that we add the value in depency to make it change when the page when the thing change
  const getAdjactive = useCallback(()=>{
    return "another" + count;
  },[count]);
//like here function will change whenever count is changed
  

  return (
    <>
      <div>
        <Navbar adjactive={"good"} getAdjactive={getAdjactive}/>
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
