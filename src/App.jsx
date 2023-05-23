import './App.css'
import ConsumoApi from './Componentes/ConsumoApi'
import {useEffect, useState} from 'react'
import Login from './Contenedor/Login'
import Desafio7 from './Componentes/Desafio7'

function App() {
  
  const [cargando, setCargando] = useState(true)
  
  useEffect(()=> {

    setTimeout(()=> {
        setCargando(false)
    },2000)

  }, [])
 
  const mensajes = [
    
  ]


  return (
    <>
      {
        cargando? (
          <h1>Cargando...</h1>
        ) :
        (
          <h1>Bienvenidos a mi pagina web</h1>
        )
      }

      {
        mensajes.length > 0 && <h2>Tienes {mensajes.length} mensajes sin leer</h2>
      }
      
      {/* Logica del Form con su renderizado condicional */}
      <Login/>
      
      {/* Ejemplo del Consumo de una Api usando RandomUsers */}
      <ConsumoApi/>

      {/* Ejemplo del Desafio 7 */}
      <Desafio7/>
    </>
  )
}

export default App
