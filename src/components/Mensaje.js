import React from 'react';
import Fade from 'react-reveal/Fade';

const Mensaje = (props) => {
  return (
    <div>
         <Fade top>
            <div className="mensaje-formulario">
                El usuario se ha creado correctamente
            </div>
         </Fade>
    </div>
  )
}

export default Mensaje;
