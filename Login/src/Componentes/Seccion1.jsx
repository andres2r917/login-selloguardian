import React from 'react'
import "./Seccion1.css"
const Seccion1 = () => {
  return (
    <div>
      <div>
        <h1 className='titulo'>Bienvenido</h1>
      </div>
           <div className='contenedor-padre'>
  <div className='formulario'>
    <h1>Inicio de Sesión</h1>
    <form action="Contacto.php">
      <input type="text" placeholder='Correo electrónico' className='input' required />
      <input type="password" placeholder='Contraseña' className='input' required />
      <button type="submit" className='boton'>Ingresar</button>
    </form>
    <div>
      <p className='p1' >¿No tienes una cuenta? <a href="#">Regístrate aquí</a></p>
    </div>
  </div>
</div>
       </div>
  )
}

export default Seccion1