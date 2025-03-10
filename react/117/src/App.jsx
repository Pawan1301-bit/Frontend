import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const nums = new Array(30_000_000).fill(0).map((_,i)=>{
  return{
    index: i,
    isMagical: i === 29_000_000 
  }
});

function App() {
  const [count, setCount] = useState(0)
  const [Number, setNumber] = useState(nums)

  //const magical = Number.find(item=>item.isMagical === true); //very expensive computation
  // so everytime we increase the count the page render and this operation is calculated again and again which will lead to delay in the response 
  //to deal with this problem we will use useMemo hook -- which will memorise the value and do not calulate it in every render
  const magical = useMemo(() => Number.find(item=>item.isMagical === true), [Number])
  //dependecy array --  second argument is for when we want to change the value -- it will recalcuate when the numbers are changed

  return (
    <>
      <span>magical number is {magical.index}</span>
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
        <button onClick={() => {
          setCount((count) => count + 1);
          if(count == 10){
            setNumber(
              new Array(10_000_000).fill(0).map((_,i)=>{
                return{
                  index: i,
                  isMagical: i === 9_000_000 
                }
              })
            )    
          }
          }}>
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
