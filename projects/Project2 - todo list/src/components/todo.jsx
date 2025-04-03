import React from 'react'
import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const Todo = () => {
    const [Todos, setTodos] = useState([])
    const [input, setinput] = useState("")

    function handleAdd() {
        if (input.trim() !== "") {
            console.log(input);
            setTodos([...Todos, input]);    //this will append the Todos with the input value
            setinput("");
            console.log(Todos);
        }
    }

    function handleKeys(e){
        if(e.key === "Enter"){
            handleAdd();
        }            
    }

    function handleChange(e) {
        setinput(e.target.value);
    }

    function handleDelete(index){
        setTodos(Todos.filter((_, i) => i !== index));
    }

    return (
        <div className="box border-black border-2 w-2/4 h-[60vh] h-max-[60vh] m-auto mt-[10vh] rounded-lg shadow-md shadow-slate-700 overflow-scroll">
            <div className="input">
                <input type="text"  onChange={handleChange} onKeyDown={handleKeys} placeholder='enter your daily task' value={input} className='border-teal-800 border-2 w-[70%] p-2.5 m-4 rounded-lg shadow-teal-800 shadow-lg mt-5' />
                <button onClick={handleAdd} className='ml-6 p-2 w-16 bg-violet-400 text-white rounded-2xl shadow-lg shadow-violet-600 border-black border-2 mt-5.5 hover:scale-105 transition-transform duration-500'>Add</button>
            </div>
            <div className="list ">
                <ol className='mt-4'>
                    {Todos.map((Todo, index)=> (
                        <li className='ml-8  text-lg flex justify-between items-center' key={index}> {Todo} <button className='p-2 mr-10 inline-block transform hover:scale-150 transition-transform duration-1000' onClick={() => handleDelete(index)} ><MdDelete/></button></li>
                    ))}
                </ol>
            </div>
        </div>
    )
} 
// } <button className='p-1'><CiEdit /></button> 

export default Todo;

/*<ul className='w-3/4  ml-10 mt-8 '>
                    <li className='text-lg p-2 m-2 flex justify-between items-center'>Task1 -- Finish todo list today
                        <span> <button onClick={handleDelete} className='inline-block transform hover:scale-150 transition-transform duration-1000'>
                            <MdDelete />
                        </button></span>
                    </li>
                    <li className='text-lg p-2 m-2 flex justify-between items-center'>Task1 -- Finish todo list today
                        <span> <button onClick={handleDelete} className='inline-block transform hover:scale-150 transition-transform duration-1000'>
                            <MdDelete />
                        </button></span>
                    </li>
                    <li className='text-lg p-2 m-2 flex justify-between items-center'>Task1 -- Finish todo list today
                        <span> <button onClick={handleDelete} className='inline-block transform hover:scale-150 transition-transform duration-1000'>
                            <MdDelete />
                        </button></span>
                    </li>
                    <li className='text-lg p-2 m-2 flex justify-between items-center'>Task1 -- Finish todo list today
                        <span> <button onClick={handleDelete} className='inline-block transform hover:scale-150 transition-transform duration-1000'>
                            <MdDelete />
                        </button></span>
                    </li>
                </ul> */
