import React from 'react'
import Header  from './Componentes/Header.jsx'
import Navbar from './Componentes/Navbar.jsx'
import Seccion1  from './Componentes/Seccion1.jsx'
import Seccion2  from './Componentes/Seccion2.jsx'
import Footer from './Componentes/Footer.jsx'
const App = () => {
  return (
    <div>
        <Navbar />
        <Header />
      <div>
        <Seccion1 />
        <Seccion2 />
      </div>
      <Footer/>
    </div>
  )
}

export default App