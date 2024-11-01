import React from 'react';
import "./login.css";

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
          value="LOGIN"
          className="btn"
        />
      </form>
      <a className="link" href="/signup">¿No tienes cuenta?, crea una aquí</a>
    </div>
  );
}

export default Signin;