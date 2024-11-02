import React, { useState } from 'react';

const NuevoHobbiePage = () => {
  const [hobbyName, setHobbyName] = useState("");
  const [hobbyDescription, setHobbyDescription] = useState("");
  const [image, setImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isObjective, setIsObjective] = useState(true);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleAccept = () => {
    setShowModal(false);
  };

  const handleNavClick = (type) => {
    setIsObjective(type === 'objetivos');
  };

  return (
    <div className="nuevo-hobbie">
      <header className="navbar">
        <div className="navbar__buttons-left">
          <button className="navbar__button" onClick={() => handleNavClick('objetivos')}>Objetivos</button>
          <button className="navbar__button" onClick={() => handleNavClick('logros')}>Logros</button>
        </div>
      </header>

      <main className="nuevo-hobbie__main">
        <div className="nuevo-hobbie__content">
          <div className="nuevo-hobbie__image-and-fields">
            <div className="form-content__image">
              <label>
                <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
                <img src={image || "https://via.placeholder.com/100"} alt="Cargar imagen" />
                <span>Cargar imagen</span>
              </label>
            </div>
            <div className="form-content__fields">
              <input 
                type="text" 
                className="form-content__input" 
                placeholder="Nombre del Hobbie" 
                value={hobbyName} 
                onChange={(e) => setHobbyName(e.target.value)}
              />
              <textarea 
                className="form-content__textarea" 
                placeholder="Describe tu nuevo hobbie!" 
                value={hobbyDescription} 
                onChange={(e) => setHobbyDescription(e.target.value)}
              />
            </div>
          </div>
        </div>
        <p className="form-content__help">
          {isObjective ? "Aún no has creado un objetivo, presiona en el botón de abajo para agregar uno nuevo!" : "Aún no has creado un Logro, presiona en el botón de abajo para agregar uno nuevo!"}
        </p>
        <div className="separator"></div>
        <button className="add-button" onClick={handleAddClick}>+</button>

        {showModal && (
          <div className="modal">
            <div className="modal__content">
              <h2>{isObjective ? "Nuevo Objetivo" : "Nuevo Logro"}</h2>
              <label className="modal__label">
                <span>{isObjective ? "Objetivo:" : "Logro:"}</span>
                <input type="text" className="modal__input" placeholder={`Nombre del ${isObjective ? 'objetivo' : 'logro'}`} />
              </label>
              <label className="modal__label">
                <span>Tarea:</span>
                <input type="text" className="modal__input" placeholder="Nombre tarea" />
              </label>
              <button className="add-button modal__add-task">+</button>
              <button className="modal__accept-button" onClick={handleAccept}>Aceptar</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};


export default NuevoHobbiePage;