import"../../pub.css"

function visao({ activeSection, setActiveSection }) {
  const handleSectionClick = () => {
    setActiveSection("visao"); // Define a seção ativa
  };

  return (
    <div
      id="visao"
      onClick={handleSectionClick}
      style={{
        backgroundColor: activeSection === "visao" ? "#0253A9" : "#fff",
      }}
    >
      <img
        src={activeSection === "visao" ? "/icon/visaoalt.svg" : "/icon/visao.svg"}
        alt="Visão"
      />
    </div>
  );
}

export default visao;
