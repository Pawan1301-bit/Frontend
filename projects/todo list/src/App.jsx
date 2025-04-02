import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Todo from "./components/todo"
import { MdDelete } from "react-icons/md";
export default function App() {
  return (
    <div className="container m-0 p-0">
      <Navbar/>
      <Todo/>
      <Footer/>
    </div>
  )
}

// learn map, filter
//map -- use to iterate over a array and create a new array with the modified values
// let arr = [1,2,3,4,5]
// console.log(arr);
// let double = arr.map(num=>num*2)
// console.log(double);

//filter -- creates a new array of element that pass a certain condition
// let arr = [1,2,3,4,5,6];
// console.log(arr);

// const even = arr.filter(num=>num%2===0)
// console.log(even);