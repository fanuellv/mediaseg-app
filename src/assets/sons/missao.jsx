import"../../pub.css"

function missao({ activeSection, setActiveSection }) {
    const handleSectionClick = () => {
        // Altera o estado apenas se a seção não estiver ativa
        setActiveSection((prevSection) => (prevSection === "missao" ? "" : "missao"));
      };
    

  return (
    <>
      
        <div
          id="missao"
          onClick={handleSectionClick}
          style={{
            backgroundColor: activeSection === "missao" ? "#0253A9" : "#fff",
            cursor: "pointer" ,
          }}
          
          
        >
          <img
            src={
              activeSection === "missao"
                ? "/icon/missaoalt.svg"
                : "/icon/missao.svg"
            }
            alt="Missão"
          />
        </div>
        
      
    </>
  );
}

export default missao;
