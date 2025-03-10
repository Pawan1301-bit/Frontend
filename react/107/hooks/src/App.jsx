import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // count argument will change using setCount function

  //hooks -- are function that let you use react features like useState()

  return (
    <>
      <div>
          The count is {count}
          </div>
          <button onClick={()=>{
            setCount(count+1);  //setCount will change the value of count 
          }}>increment</button>
    </>
  )
}

export default App
