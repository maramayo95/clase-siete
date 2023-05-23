import  { useState  } from "react";

// eslint-disable-next-line react/prop-types
const Formulario = ({setFormLleno}) => {
    
    // Estado para almacenar como objeto los datos del formulario
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })
    // Estado para indicar si el formulario se ha llenado

    // onChange
    const manejoCambioTexto = (event) => {
        // event.target.name = Hace referencia al atributo
        // event.target.value = Hace referencia al valor del atributo
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })

    }
    // onSubmit
    const enviarDatos = event => {
        event.preventDefault()
        setFormLleno(true)
    }
    
    // En el condicional con el operador ternario, si el formulario se ha llenado, se mostrará el mensaje
    return (
        <>
           

                <form className="row" onSubmit={enviarDatos}>
                    <div className="col-md-4">
                        <input 
                        type="text" 
                        placeholder="Nombre" 
                        className="form-control" 
                        onChange={manejoCambioTexto} 
                        name="nombre" />
                    </div>
                    <div className="col-md-4">
                        <input 
                        type="text" 
                        placeholder="Apellido" 
                        className="form-control" 
                        onChange={manejoCambioTexto} 
                        name="apellido" />
                    </div>
                    <div className="col-md-4">
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </div>
                </form>
        
        </>
        )
    }
    
    export default Formulario
