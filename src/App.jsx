import NavbarBS from "./componentes/Navbar";
import Estadistica from "./paginas/Estadistica";
import Registrar from "./paginas/Registrar";
import Historial from "./paginas/Historial";
import Home from "./paginas/Home";
import Login from "./paginas/Login";
import Perfil from "./paginas/Perfil";
import Recuperar from "./paginas/Recuperar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavbarBS />
      <Routes>
        <Route path='/Login' exact element={<Login />}/>
        <Route path='/Recuperar' element={<Recuperar />}/>
        <Route path='/Registrar' element={<Registrar />}/>
        <Route path='/Estadistica' element={<Estadistica />}/>
        <Route path='/Historial' element={<Historial />}/>
        <Route path='/Perfil' element={<Perfil />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
  );
}
export default App;
