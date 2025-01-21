import "./assets/css/servico.css";
import { useState } from "react";
import Sec from "./assets/sons/servicoSec.jsx";

function Servicos() {
  const [icons, setIcons] = useState([0, 0,0,0]); // Controla os ícones de cada Sec
  const [activeSections, setActiveSections] = useState([false, false,false,false]); // Controla o estilo de cada Sec

  const title = ["Consultoria Personalizada", "Educação sobre Seguros","Facilidade na Contratação","Acompanhamento Contínuo"];
  const description = [
    "Identificamos suas necessidades e sugerimos os seguros mais adequados ao seu perfil.",
    "Explicamos como cada tipo de seguro funciona, suas coberturas, benefícios e importância para o seu dia a dia.",
    "Atuamos como ponte entre você e as principais seguradoras de Angola.",
    "Oferecemos suporte em renovações, ajustes e sinistros."
  ];
  const iconConsultoria = [
    "/icon/servico/consultoria.svg",
    "/icon/servico/consultoriaAlt.svg",
  ];
  const iconEducacao = [
    "/icon/servico/educacaoAlt.svg",
    "/icon/servico/educacao.svg",
  ];
  const iconFacilidade = [
    "/icon/servico/facilidadeAlt.svg",
    "/icon/servico/facilidade.svg",
  ];
  const iconAcompanhamento = [
    "/icon/servico/acompanhamento.svg",
    "/icon/servico/acompanhamentoAlt.svg",
  ];

  // Função para alternar o estado ativo de uma seção
  const handleMouseEnter = (index) => {
    setIcons((prevIcons) =>
      prevIcons.map((icon, i) => (i === index ? 1 : icon))
    );
    setActiveSections((prevSections) =>
      prevSections.map((active, i) => (i === index ? true : active))
    );
  };

  const handleMouseLeave = (index) => {
    setIcons((prevIcons) =>
      prevIcons.map((icon, i) => (i === index ? 0 : icon))
    );
    setActiveSections((prevSections) =>
      prevSections.map((active, i) => (i === index ? false : active))
    );
  };

  return (
    <>
      <section id="servico">
        <h1>Serviços</h1>
        <div className="row1">
          <Sec
            iconServico={iconConsultoria[icons[0]]}
            nameServico={title[0]}
            txtServico={description[0]}
            active={activeSections[0]}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
          />
          <Sec
            iconServico={iconEducacao[icons[1]]}
            nameServico={title[1]}
            txtServico={description[1]}
            active={activeSections[1]}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
          />
        </div>
        <div className="row2">
          <Sec
            iconServico={iconFacilidade[icons[2]]}
            nameServico={title[2]}
            txtServico={description[2]}
            active={activeSections[2]}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
          />
          <Sec
            iconServico={iconAcompanhamento[icons[3]]}
            nameServico={title[3]}
            txtServico={description[3]}
            active={activeSections[3]}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={() => handleMouseLeave(3)}
          />
        </div>
      </section>
    </>
  );
}

export default Servicos;
