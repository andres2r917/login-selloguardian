import React from 'react'
import './Header.css'
const Header = () => {
  return (
      <header className="header"> 
      <div className="header__content">
        <h1 className="header__title">
          La lucha contra el<br />
          <span className="header__title--highlight">maltrato animal</span><br />
          nunca termina
        </h1>
        <p className="header__subtitle">
          Anímate a denunciar, adoptar y proteger<br />a los que no tienen voz
        </p>

        <div className="header__ctas">
          <a href="#adopta" className="header__cta header__cta--primary">
             Adoptar ahora
          </a>
          <a href="#denuncia" className="header__cta header__cta--secondary">
             Hacer una denuncia
          </a>
        </div>

        <div className="header__stats">
          <div className="header__stat">
            <span className="header__stat-number">1.240+</span>
            <span className="header__stat-label">Adoptados</span>
          </div>
          <div className="header__stat-divider" />
          <div className="header__stat">
            <span className="header__stat-number">380+</span>
            <span className="header__stat-label">Denuncias atendidas</span>
          </div>
          <div className="header__stat-divider" />
          <div className="header__stat">
            <span className="header__stat-number">95</span>
            <span className="header__stat-label">Voluntarios activos</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header