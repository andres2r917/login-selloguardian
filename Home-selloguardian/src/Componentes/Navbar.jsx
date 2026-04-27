import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
         <navbar className="main-navbar">
      <nav className="nav-bar">
      
        <div className="nav-links">
          <a href="#inicio" className="nav-item active">Inicio</a>
          <a href="#adopta" className="nav-item">Adopta</a>
          <a href="#denuncia" className="nav-item">Denuncia</a>
        </div>

       
        <div className="search-container">
          <div className="search-input-wrapper">
            <input type="text" placeholder="¿Qué buscas?" />
            <button className="search-button">🔍</button>
          </div>
        </div>

      
        <div className="auth-buttons">
          <a href="#login" className="login-btn">Inicia sesión</a>
          <button className="register-btn">Registrarse</button>
        </div>
      </nav>
    </navbar>
    </div>
  )
}

export default Navbar