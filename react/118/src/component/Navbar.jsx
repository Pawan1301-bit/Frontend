import { memo } from "react"; 

const Navbar = ({adjactive, getAdjactive}) => {
  console.log("Navbar is rendering");   //print everytime the page is rerender
  return (
    <div>
        I am a {adjactive} navbar {getAdjactive()}
        <button onClick={()=>{getAdjactive()}}>change me</button>
    </div>
  )
}

export default memo(Navbar)
// now the page will only rerender when adjactive(props) will change now the console part will print only for one time
//so the next problem we are facing when we pass the getAdjactive as a props then everytime the page rerender the function of getAdjactive rewrite itself 
//2 function which have the same value are also consider to be different in js
// function getAdjactive1(){()=>{return "hello"}}
// function getAdjactive2(){()=>{return "hello"}}
// although t
// hey will return  the same value but getAdjactive1 === getAdjactive2 are not considered to be equal in javascript
//so we want our functionn to not change when tthe page rerender for this purspose we will use the callback hook