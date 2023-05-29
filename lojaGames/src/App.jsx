import './assets/style.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './assets/pages/home'
import Sobre from './assets/pages/sobre';
import Contato from './assets/pages/contato';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contato" element={<Contato/>}></Route>
          <Route path="/Sobre" element={<Sobre/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
