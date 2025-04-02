import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("Pawan")
  // const [form, setform] = useState({email:"", phone:""})
  const [form, setform] = useState({})
  //if i declare it as an empty object this will through an error so we have to use condition for handling this

  const handleClick = ()=>{
    // alert("btn is clicked");
    console.log(form)
  }
  // const handlemouseover = ()=>{
  //   alert("we have a mouse over this side");
  // }
  const handleChange = (e)=>{
    // setName(e.target.value)
    setform({...form,  [e.target.name]:e.target.value});
    // ...form is called spread operator -- it is used to copy the existing state without loosing the previous value
    
  }

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      {/* <div className="red" onMouseOver={handlemouseover}>
        Hello i am red box
      </div> */}
      {/* we cannot change the value once set to allow any change we will create a function that will change the value  we will rerender it with the new value using a function handleChange*/}
      {/* <input type="text" value={name} onChange={handleChange}/> */}
      <input type="text" name='email' value={form.email?form.email:""} onChange={handleChange} />
      <input type="text" name='phone' value={form.phone?form.phone:""} onChange={handleChange} />
      </>
  )
}

export default App
