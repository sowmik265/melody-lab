import { Outlet } from "react-router-dom"
import NavBar from "./Header & Footer/NavBar"
import Footer from "./Header & Footer/Footer"



function App() {


  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
