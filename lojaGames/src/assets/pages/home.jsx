
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import CardGroup from "../components/card-group";

function Home() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>

      <main>
        <section className="section-painel">
          <h2>seus games</h2>
        </section>
        <CardGroup></CardGroup>
      </main>

    <Footer></Footer>


    </>
  );
}

export default Home;
