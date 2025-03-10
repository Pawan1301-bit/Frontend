import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, Setshowbtn] = useState(true)
  const [todos, settodos] = useState([
    {
      title: 'hey',
      desc: "Hello i am a good todo"
    },
    {
      title: 'hey i am another todo',
      desc: 'i am also a good todo'
    },
    {
      title: 'hey i am grocerry todo',
      desc: 'i am grocerry todo but i am also a good todo'
    }
  ])

  // we can create a  component here also 
  const Todo = (({todo})=>{
    return (<>
      <div className="m-4 border-1"></div>
      <div className="todo">{todo.title}</div>
      <div className="todo">{todo.desc}</div>
    </>)
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
      {showbtn?<button>True</button>:<button>False</button>}
      {/* used only for if condition otherwise we will use ternary operator */}
      {/* {showbtn && <button>true</button>} */}  
      <div className="card">
        <button onClick={() => {Setshowbtn((showbtn)=> !showbtn)}}>
          {/* count is {count} */}
          Toggle
        </button>
        {/*whenever we render a lit using map we  have to provide it a unique key  */}
        {todos.map(todo=>{
          return <Todo key={todo.title} todo={todo}/>
        }) }
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