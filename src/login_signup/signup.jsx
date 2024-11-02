import React from 'react';
import "./estilo.css";

const Signup = () => {
  return (
    <div className="signup">
      <h4>Crea una nueva cuenta</h4>
      <form>
        <div className="text_area">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="text_input"
            placeholder="Introduce tu email"
            required
          />
        </div>
        <div className="text_area">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            className="text_input"
            placeholder="Introduce tu nombre"
            required
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
            required
          />
        </div>
        <div className="text_area">
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="text_input"
            placeholder="Confirma tu contraseña"
            required
          />
        </div>
        <input
          type="submit"
          value="CREAR CUENTA"
          className="btn"
        />
      </form>
    </div>
  );
}

export default Signup;