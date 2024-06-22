import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'
import Ejemplo from './components/Ejemplo'
import Lg from './components/Lg'
import Partecliente from './components/Partecliente'
import Datos from './components/Datos'
import Sa from './components/Sa'
import Nuevo from './components/Nuevo'
import Dos from './components/Dos'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";
import Casaseleccionada from './components/Casaseleccionada'
import IniciarSesion from './components/IniciarSesion'
import Nuevoregistro from './components/Nuevoregistro'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes> 
        
      <Route path="/" element={<Ejemplo/>} />
      <Route path="/nuevo" element={<Nuevo/>} />
     <Route path='registro' element={<Sa/>}/>
     
      <Route path="/casa/:id" element={<Casaseleccionada />} />
      <Route path='/publicar' element={<Datos></Datos>}></Route>
      <Route path='/dos' element={<Dos></Dos>}></Route>

      <Route path="/hola" element={<Lg/>}/>
      <Route path='enviardatos' element={<Datos></Datos>} />
         </Routes>
    </Router>
     
    </>
  )
}

export default App
 