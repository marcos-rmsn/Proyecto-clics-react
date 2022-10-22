
import './App.css';
import Boton from "./componentes/Boton.jsx";
import Contador from "./componentes/Contador.jsx";
import { useState } from 'react';

function App() {
  
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks +1);
  }

  const reiniciar = () =>{
    setClicks(0); 
  }
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <Contador clicks = {clicks} />
        <Boton 
        texto = 'Click'
        isClick = {true}
        handleClick = {handleClick} />


        <Boton 
        texto = 'Reiniciar'
        isClick = {false}
        handleClick = {reiniciar} />

      </div>
    </div>
  );
}

export default App;
