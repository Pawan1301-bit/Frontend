import React from 'react'
import './Cards.css'

const Cards = (props) => {
  return (
    <div className='card'>
        <img src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg" alt=""width="100%" height="233" style={{border: "2px solid black"}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Cards
