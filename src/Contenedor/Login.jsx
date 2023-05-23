import {useState} from 'react'
import Mensaje from "../Componentes/Mensaje";
import Formulario from '../Componentes/Formulario';
const Login = () => {
    const [formLleno, setFormLleno] = useState(false)
 
 
    return (
    <>
        {
                formLleno ? 
                    
                <Mensaje texto="¡Gracias! responderemos a la brevedad!"/>

                : 
                
                <Formulario  setFormLleno={setFormLleno}/>

        }   
    </>
  )
}

export default Login