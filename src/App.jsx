import { useState } from 'react'
import './App.css'

import catImage from './cat-say.png'; // Importa la imagen del gatito

function App() {
  const [showImage, setShowImage] = useState(false);

  const handleClick = async () => {
    const input = document.getElementById("name");
    if (input.value !== '') {
      const cat = input.value;
      const image = document.getElementById("image");
      image.src = `https://cataas.com/cat/says/${cat}`;
      setShowImage(true);
    } else {
      setShowImage(false);
    }
  };

  async function fetchCatPhrase() {
    try {
      const response = await fetch('https://cataas.com/c');
      const data = await response.json();
      const catPhrase = data.phrase;
      document.getElementById("name").value = catPhrase;
    } catch (error) {
      console.error('Error al obtener la frase del gato:', error);
    }
  }

  fetchCatPhrase();

  return (
    <>
      <h1><u>App Gatos con Frase</u></h1>

      {showImage ? (
        <img src={catImage} alt="" id="image" /> // Usa la imagen importada
      ) : (
        <img src={catImage} alt="server-api-caido" id="image" /> // Usa la imagen importada
      )}

      <button type="button" id="button1" onClick={handleClick}>Gato dice:</button>
      <input type="text" placeholder="Escribe tu frase aquí y aprieta Gato dice." id="name" required />
    </>
  )
}

export default App
