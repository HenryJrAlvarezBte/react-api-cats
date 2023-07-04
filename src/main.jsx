import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

const button = document.getElementById("button1");

button.addEventListener("click", function(){
  if(document.getElementById("name")){    
    let cat = document.getElementById("name").value;
    const image = document.getElementById("image").src = "https://cataas.com/cat/says/" + cat;    
  }
})

async function fetchCatPhrase() {
  try {
    const response = await fetch('https://cataas.com/#/');
    const data = await response.json();
    const catPhrase = data.phrase;
    document.getElementById("name").value = catPhrase;
  } catch (error) {
    console.error('Error al obtener la frase del gato:', error);
  }
}

fetchCatPhrase();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
