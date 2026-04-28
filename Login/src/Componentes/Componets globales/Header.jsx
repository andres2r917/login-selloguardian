
import { Link } from 'react-router-dom';
import "../Componentes Css/Header.css";

const Header = () => {
  return (
    <header className="main-header"> 
      <nav className="nav-bar">
        <div className="nav-links">
        <div className="nav-links">
        <Link to="/home" className="nav-item">Inicio</Link>
        </div>
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
        <div className="auth-buttons">
          <Link to="/login" className="login-btn">Iniciar sesión</Link>
        </div>
          <button className="register-btn">Registrarse</button>
        </div>

      </nav>
    </header>
  );
}

export default Header;