import { useState } from 'react';
import './App.css';

function App() {
  const [cat, setCat] = useState('HOLAAA');

  const handleClick = () => {
    const input = document.getElementById("name");
    if (input.value !== '') {
      setCat(input.value);
    }
  };

  return (
    <>
      <h1><u>App Gatos con Frase</u></h1>

      <img src={`https://cataas.com/cat/says/${cat}`} alt="El server de la API esta caido, vuelva en unas horas, gracias!" id="image" />

      <button type="button" id="button1" onClick={handleClick}>Gato dice:</button>
      <input type="text" placeholder="Escribe tu frase aquí y aprieta Gato dice." id="name" required />
    </>
  );
}

export default App;
