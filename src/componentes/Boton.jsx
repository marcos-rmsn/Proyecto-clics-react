import React from "react";

function Boton({texto, isClick, handleClick}){
    return(
        <button
          className= {isClick ? 'boton-click': 'reiniciar'}
          onClick = {handleClick}>
            {texto}
        </button>    
    )
}

export default Boton;