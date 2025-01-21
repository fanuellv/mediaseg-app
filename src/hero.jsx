import { useState, useEffect } from "react";
import "./assets/css/hero.css";

function Hero() {
  // Estado para armazenar qual div está selecionada
  const [selected, setSelected] = useState(0); // Inicia com a primeira div selecionada

  // Função para obter a imagem de fundo com base na div selecionada
  const getBackgroundImage = () => {
    switch (selected) {
      case 0:
        return "url(/img/pub1.svg)";
      case 1:
        return "url(/img/pub2.svg)";
      case 2:
        return "url(/img/pub3.svg)";
      default:
        return "url(/img/pub2.svg)"; // Imagem padrão
    }
  };

  // Alternância automática entre as divs
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSelected((prev) => (prev + 1) % 3); // Alterna entre 0, 1, 2
    }, 3000); // Altera a cada 2 segundos

    return () => clearTimeout(timeout); // Limpa o timeout ao desmontar
  }, [selected]);

  return (
    <>
      {/* Seção com fundo dinâmico */}
      <section
        id="pub"
        style={{
          background: getBackgroundImage(),
          transition: "background 0.5s ease-in-out", // Suaviza a transição
        }}
      ></section>

      {/* Container das divs */}
      <div className="containerHero">
        {/* Div 1 */}
        <div
          onClick={() => setSelected(0)} // Seleção manual
          style={{
            backgroundColor: selected === 0 ? "#0253a9" : "#fff",
            color: selected === 0 ? "#fff" : "#545454",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <p>Seguros que cuidam, soluções que protegem</p>
        </div>

        {/* Div 2 */}
        <div
          onClick={() => setSelected(1)}
          style={{
            backgroundColor: selected === 1 ? "#0253a9" : "#fff",
            color: selected === 1 ? "#fff" : "#545454",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <p>Investir em seguro é investir em você</p>
        </div>

        {/* Div 3 */}
        <div
          onClick={() => setSelected(2)}
          style={{
            backgroundColor: selected === 2 ? "#0253a9" : "#fff",
            color: selected === 2 ? "#fff" : "#545454",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <p>
            A segurança que você garante hoje é o alicerce da sua paz de amanhã.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
