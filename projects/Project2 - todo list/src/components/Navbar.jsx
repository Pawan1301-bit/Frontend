
import React from 'react'

const navbar = () => {
    return (
        <div className=' bg-teal-600 text-white p-6 m-0 flex'>
            <h2 className="text-3xl ">Task Manager</h2>
            <ul className='flex absolute right-4 text-xl'>
                <li className='pr-6'>Home</li>
                <li className='pr-6'>About</li>
                <li className='pr-6'>Contact</li>
            </ul>
        </div>
    )
}

export default navbar
