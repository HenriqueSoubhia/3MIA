import kratos from "../../assets/imgs/kratos.jpg";
import controle from "../../assets/imgs/controle.jpg";
import games from "../../assets/imgs/games.jpg";

import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>

      <main>
        <section className="section-painel">
          <h2>seus games</h2>
        </section>
        <section className="section-cards">
          <div className="card">
            <img src={kratos} alt="" />
            <p>GTA 6, kratos corfimando na versão de PS5</p>
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

    <Footer></Footer>


    </>
  );
}

export default Home;
