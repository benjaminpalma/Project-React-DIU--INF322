import React from 'react';
import { Link } from 'react-router-dom';
import "./estilo.css";

const Signin = () => {
  return (
    <div className="login">
      <h4>Hola de nuevo</h4>
      <form>
        <div className="text_area">
          <label htmlFor="username">Email de usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            className="text_input"
            placeholder="Introduce tu email"
          />
        </div>
        <div className="text_area">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            className="text_input"
            placeholder="Introduce tu contraseña"
          />
        </div>
        <input
          type="submit"
          value="Ingresar"
          className="btn"
        />
      </form>
      <Link className="link" to="/signup">¿No tienes cuenta?, crea una aquí</Link>
    </div>
  );
}

export default Signin;