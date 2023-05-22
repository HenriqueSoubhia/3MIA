import alert from "../src/assets/imgs/danger-alert.gif"
import thinking from "../src/assets/imgs/emoji-thinking.gif"

import Button from "react-bootstrap/Button"

import NavF from "./assets/componentes/nav"

import SpinA from "./assets/componentes/spinner"

import OffCanvasExample from "./assets/componentes/popup"


import "../src/App.css"

function App(){
  return(
    <div>
      <NavF></NavF>

      <h1>penis alert</h1>
      <img src={alert} alt="alerta piscando fodacci" />

      <img src={thinking} alt="pensando na vina" />
      <p>u like cocks?</p>

      <Button>Sim, eu amo</Button>
      <Button className="resposta-errada mb-3">nao</Button><br />

      <SpinA></SpinA><br />

      <OffCanvasExample className="mt-3" > veja seu resultado</OffCanvasExample>
    </div>
  )
}

export default App