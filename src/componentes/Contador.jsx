import React from "react";
import "../stylesheets/contador.css"


function Contador({ clicks }){
    return ( 
    <div className="contador">
       {clicks}
    </div> 
    
    );
}

export default Contador;