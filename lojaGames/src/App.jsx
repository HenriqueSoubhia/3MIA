import './assets/style.css'
import kratos from "./assets/imgs/kratos.jpg"
import controle from "./assets/imgs/controle.jpg"
import games from "./assets/imgs/games.jpg"

function App() {

  return (
    <>
      <header>
        <h1>Retro Rush</h1>
        <p>Reviva a Era Dourada dos Jogos: Retro Rush, a Experiência Nostálgica em Alta Velocidade!</p>
      </header>
      <nav>
        <a href="">home</a>
        <a href="">contato</a>
        <a href="">sobre</a>
      </nav>

      <main>
        <section className='section-painel'>
          <h2>seus games</h2>
        </section>
        <section className='section-cards'>
          <div className="card">
            <img src={kratos} alt="" />
            <p>GTA5</p>
          </div>
          <div className="card">
            <img src={games} alt="" />
            <p>Amongus</p>
          </div>
          <div className="card">
            <img src={controle} alt="" />
            <p>Fortnite 2</p>
          </div>
        </section>
      </main>

      <footer>
        <small>Todos direitos reservados</small>
      </footer>
    </>
  )
}

export default App
