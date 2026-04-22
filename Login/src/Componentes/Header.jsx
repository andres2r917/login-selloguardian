import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <header className="main-header">
      <nav className="nav-bar">
        {/* Enlaces con navegación fluida */}
        <div className="nav-links">
          <a href="#inicio" className="nav-item active">Inicio</a>
          <a href="#adopta" className="nav-item">Adopta</a>
          <a href="#denuncia" className="nav-item">Denuncia</a>
        </div>

        {/* Buscador más estilizado */}
        <div className="search-container">
          <div className="search-input-wrapper">
            <input type="text" placeholder="¿Qué buscas?" />
            <button className="search-button">🔍</button>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="auth-buttons">
          <a href="#login" className="login-btn">Inicia sesión</a>
          <button className="register-btn">Registrarse</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;