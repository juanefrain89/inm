import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'
import Ejemplo from './components/Ejemplo'



import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";
import Casaseleccionada from './components/Casaseleccionada'
import IniciarSesion from './components/IniciarSesion'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes> 
        
      <Route path="/" element={<Ejemplo />} />
      <Route path="/casa/:id" element={<Casaseleccionada />} />
      <Route path='i' component={IniciarSesion}/>
      
         </Routes>
    </Router>
     
    </>
  )
}

export default App
