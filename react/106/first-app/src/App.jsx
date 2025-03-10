import Navbar from "./components/navbar"
import Footer from "./components/Footer"
import Cards from './components/Cards'

function App() {
  // 
  return (
    // we can only return onething that why we have  wrapped it inside one <> 
    <>
      <Navbar />
      <div className="cards">
      <Cards title="Card1" description="this is the first card" />
      <Cards title="Card2" description="this is the second card" />
      <Cards title="Card3" description="this is the third card" />
      <Cards title="Card4" description="this is the fourth card" />
      </div>
      <Footer />
    </>
  )
}

export default App


// framework vs library -- both are reusable codes

//library primaryly focused on one thing and  they are more flexible and have less strict rule
//while framework are less flexible they have there own rules  and they completly dictate the flow of program
