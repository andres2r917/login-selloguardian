import React from "react"
import "./App.css"
import { Header } from "./Componentes/Header.jsx";
import { Navbar } from "./Componentes/Navbar.jsx"
import Seccion1 from "./Componentes/Seccion1.jsx"
import {Footer} from "./Componentes/Footer.jsx"
function App() {
  return (
  
       <div>
      <Header/>
      <div>
        <Navbar/>
        <Seccion1/>
      </div>
        <Footer/>
       </div>

    
  )
}
export default App