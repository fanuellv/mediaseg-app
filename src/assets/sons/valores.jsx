import"../../pub.css"

function valores({ activeSection, setActiveSection }) {
  const handleSectionClick = () => {
    setActiveSection("valores"); // Define a seção ativa
  };

  return (
    <div
      id="valores"
      onClick={handleSectionClick}
      style={{
        backgroundColor: activeSection === "valores" ? "#0253A9" : "#fff",
      }}
    >
      <img
        src={activeSection === "valores" ? "/icon/valoresalt.svg" : "/icon/valores.svg"}
        alt="Valores"
      />
    </div>
  );
}

export default valores;
