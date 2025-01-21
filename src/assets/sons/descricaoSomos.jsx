
import"../../pub.css"
import { useState } from "react";

function DescricaoSomos({ activeSection, setActiveSection }) {
  const [activeValue, setActiveValue] = useState(""); // Estado específico para valores

  const handleSectionClick = (section) => {
    setActiveSection((prev) => (prev === section ? "" : section));
  };

  const handleValueClick = (value) => {
    setActiveValue((prev) => (prev === value ? "" : value)); // Alterna a exibição do texto do valor
  };

  return (
    <>
      <p
        id="txtMissao"
        style={{ display: activeSection === "missao" ? "flex" : "none" }}
      >
        Proteger o que mais importa, oferecendo soluções de seguros
        personalizadas que proporcionem segurança, tranquilidade e suporte em
        todos os momentos. Com ética, eficiência e excelência, cuidamos dos
        nossos clientes, assegurando confiança e proteção onde for necessário.
      </p>
      <p
        id="txtVisao"
        style={{ display: activeSection === "visao" ? "flex" : "none" }}
      >
        Ser referência em inovação e qualidade no setor de seguros, oferecendo
        soluções acessíveis e personalizadas que simplifiquem a vida dos nossos
        clientes.
      </p>

      <div
        id="valor"
        style={{ display: activeSection === "valores" ? "flex" : "none" }}
      >
        {[
          {
            title: "Confiança",
            text: "Construímos relacionamentos sólidos e transparentes com nossos clientes e parceiros.",
          },
          {
            title: "Proteção",
            text: "Trabalhamos para oferecer segurança e tranquilidade em todos os momentos.",
          },
          {
            title: "Inovação",
            text: "Buscamos constantemente novas formas de melhorar nossos serviços e atender às demandas do mercado.",
          },
          {
            title: "Empatia",
            text: "Valorizamos o cuidado e a atenção às necessidades de cada cliente.",
          },
          {
            title: "Ética",
            text: "Atuamos com integridade em todas as nossas relações e decisões.",
          },
        ].map(({ title, text }) => (
          <div key={title} className="txtValor">
            <h2>{title}</h2>
            <article>
              <img
                src="/icon/plus.svg"
                alt=""
                onClick={() => handleValueClick(title)}
              />
            </article>
            <article>
              <hr />
              <p style={{ display: activeValue === title ? "flex" : "none" }}>
                {text}
              </p>
            </article>
          </div>
        ))}
      </div>
    </>
  );
}

export default DescricaoSomos;
