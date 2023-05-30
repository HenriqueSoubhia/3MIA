import kratos from "../../assets/imgs/kratos.jpg";
import controle from "../../assets/imgs/controle.jpg";
import games from "../../assets/imgs/games.jpg";

function CardGroup() {
  const dados = [
    {
      texto: "GTA 6, kratos corfimando na versão de PS5",
      img: kratos,
    },
    {
      texto: "Amongus",
      img: controle,
    },
    {
      texto: "Fortnite 2",
      img: games,
    },
  ];

  const cards = dados.map((item) => (
    <div key={item} className="card">
      <img src={item.img} alt="" />
      <p>{item.texto}</p>
    </div>
  ));

  return (
  <section className="section-cards">
    {cards}
  </section>
  )
}

export default CardGroup;
