import React from 'react';
import './Header.css';

 export const Header = () => {
  return (
    <header className="main-header">
      <nav className="nav-bar">
        <div className="nav-links">
          <a href="#inicio" className="nav-item active">Inicio</a>
          <a href="#adopta" className="nav-item">Adopta</a>
          <a href="#denuncia" className="nav-item">Denuncia</a>
        </div>
        <div className="search-container">
          <span className="search-label">Buscar</span>
          <div className="search-input-wrapper">
            <input type="text" placeholder="Busqueda" />
            <button className="search-icon">🔍</button>
          </div>
        </div>
        <div className="auth-buttons">
          <a href="#login" className="login-btn">Inicia sesion</a>
          <button className="register-btn">Registrate</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;