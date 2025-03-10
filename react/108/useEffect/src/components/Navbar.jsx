import React, { useEffect } from 'react'

const Navbar = ({color}) => {

  useEffect(() => {
    alert("this page is rendering on app.jsx");
  
    return () => {      //clearnup function -- run when the something is clean up
      alert("component is unmounted");
    }
  }, [])
  

  useEffect(() => {
    alert("color was changed");
    }, [color])
    
  return (
    <div>
        hello i am a navbar of  color {color} hehehe....
    </div>
  )
}

export default Navbar
