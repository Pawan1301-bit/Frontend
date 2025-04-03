import './App.css'
import { useState } from 'react';

function App() {

  const [input, setinput] = useState("");

  function handleclick(e){
    // input += e.target.textContent;   react do not update the value immediatlly so the previous value gets updated instead which will lead to the problem of stale state issue
    // setinput(input);
    setinput((input)=> input+ e.target.value);
  }

  const handleclear=()=>{
    setinput("");
  }

  const handlevalue=()=>{
     try {
        setinput(eval(input));
     } catch (error) {
        setinput("invalid expresssion");
     }
     
  }

  //so we do not need the onchange function because we do not directly modifing the value of input box we are using buttons to append the vvalue at input box
  // const handlechange=(e)=>{
  //    setinput(e.target.value);
  // }

  return (
    <>
      <div className="container">
        <h2 className='text-3xl font-bold bg-slate-700 text-white p-6 '>Basic Calculator</h2>
        <div className="box w-1/4 h-[55vh] border-2 border-black p-4 m-auto mt-[12vh] rounded-lg">
          <div className="input">
            <input type="text"  placeholder='output will be displayed here' className=' display border-black border-2 rounded-lg w-full p-1.5 m-2' value={input} readOnly />  
            {/* we have used readonly here inorder to make sure that the usecannot directlyy modify the input box  */}
            <button onClick={handlevalue} className='border-black border-2 rounded-full w-full p-1 m-1 bg-indigo-300'>Calculate</button>
          </div>
          <div className="numbers p-4">

            <div className="row1 mt-4  ">
              <button onClick={handleclick} value={"1"} className=' border-black border-2 transition-transform duration-100 hover:scale-110 rounded-full p-2 pl-4 pr-4 justify-center ml-5 text-white bg-slate-400 '>1</button>
              <button onClick={handleclick} value={"2"} className=' border-black border-2 transition-transform duration-100 hover:scale-110 rounded-full p-2 pl-4 pr-4 justify-center ml-8 text-white bg-slate-400 '>2</button>
              <button onClick={handleclick} value={"3"} className=' border-black border-2 transition-transform duration-100 hover:scale-110 rounded-full p-2 pl-4 pr-4 justify-center ml-8 text-white bg-slate-400'>3</button>
              <button onClick={handleclear} value={"C"} className=' border-black border-2 transition-transform duration-100 hover:scale-110 rounded-full p-2 pl-4 pr-4 justify-center ml-8 text-white bg-red-400'>C</button>
            </div>
            <div className="row2  mt-4">
              <button onClick={handleclick} value={"4"} className='border-black border-2 transition-transform duration-100 hover:scale-110 rounded-full p-2 pl-4 pr-4  justify-center ml-5 text-white bg-slate-400'>4</button>
              <button onClick={handleclick} value={"5"} className='border-black border-2 transition-transform duration-100 hover:scale-110 rounded-full p-2 pl-4 pr-4  justify-center ml-8 text-white bg-slate-400'>5</button>
              <button onClick={handleclick} value={"6"} className='border-black border-2 transition-transform duration-100 hover:scale-110 rounded-full p-2 pl-4 pr-4  justify-center ml-8 text-white bg-slate-400'>6</button>
              <button onClick={handleclick} value={"+"} className='border-black border-2 transition-transform duration-100 hover:scale-110 rounded-full p-2 pl-4 pr-4  justify-center ml-8  text-white bg-teal-500'>+</button>
            </div>
            <div className="row3  mt-4">
              <button onClick={handleclick} value={"7"} className='border-black border-2 transition-transform duration-100 hover:scale-110 rounded-full p-2 pl-4 pr-4  justify-center ml-5 text-white bg-slate-400'>7</button>
              <button onClick={handleclick} value={"8"} className='border-black border-2 transition-transform duration-100 hover:scale-110 rounded-full p-2 pl-4 pr-4  justify-center ml-8 text-white bg-slate-400'>8</button>
              <button onClick={handleclick} value={"9"} className='border-black border-2 transition-transform duration-100 hover:scale-110 rounded-full p-2 pl-4 pr-4  justify-center ml-8 text-white bg-slate-400'>9</button>
              <button onClick={handleclick} value={"-"} className='border-black border-2 transition-transform duration-100 hover:scale-110 rounded-full p-2 pl-4 pr-4  justify-center ml-8 text-white bg-teal-500'>-</button>
              </div>
            <div className="row3  mt-4">
              <button onClick={handleclick} value={"0"} className='border-black border-2 transition-transform duration-100 hover:scale-110 rounded-full p-2 pl-4 pr-4  justify-center ml-5 text-white bg-slate-400'>0</button>
              <button onClick={handleclick} value={"."} className='border-black border-2 transition-transform duration-100 hover:scale-110 rounded-full p-2 pl-5 pr-5  justify-center ml-8 text-white bg-slate-400'>.</button>
              <button onClick={handleclick} value={"/"} className='border-black border-2 transition-transform duration-100 hover:scale-110 rounded-full p-2 pl-4 pr-4  justify-center ml-8 text-white bg-teal-500 '>/</button>
              <button onClick={handleclick} value={"*"} className='border-black border-2 transition-transform duration-100 hover:scale-110 rounded-full p-2 pl-4 pr-4  justify-center ml-8  text-white  bg-teal-500'>*</button>
             </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
