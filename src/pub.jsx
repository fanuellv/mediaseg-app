import { useState } from "react";
import "./pub.css";
import Hero from "./hero.jsx";
import Missao from "./assets/sons/missao.jsx";
import Visao from "./assets/sons/visao.jsx";
import Valores from "./assets/sons/valores.jsx";
import DescricaoSomos from "./assets/sons/descricaoSomos.jsx";


function Pub() {
  const [activeSection, setActiveSection] = useState(""); // Estado compartilhado

  return (
    <>
      <Hero/>

      <section id="somos">
        <h1>Quem Somos</h1>
        <p>MediaSeg: Seguros que Cuidam, Soluções que Protegem</p>
        <div className="container2">
          <Missao
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <Visao
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <Valores
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>
        <DescricaoSomos
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </section>

      


    </>
  );
}

export default Pub;
