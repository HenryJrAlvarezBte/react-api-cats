import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const button = document.getElementById("button1");

button.addEventListener("click", function(){
  if(document.getElementById("name")){    
    let cat = document.getElementById("name").value;
    
    if(cat === "" || cat === " " || cat === "/" || cat === "." || cat === "</>"){
      cat = "HOOLA";
    }    
    document.getElementById("image").src = "https://cataas.com/cat/says/" + cat;    
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
