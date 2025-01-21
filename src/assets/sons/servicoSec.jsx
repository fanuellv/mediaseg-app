import PropTypes from "prop-types";
import"../css/servico.css"

function servicoSec({
  iconServico,
  nameServico,
  txtServico,
  active,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <div
      className="containerServico"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="iconServico"
        style={{
          backgroundColor: active ? "#0253A9" : "#fff",
        }}
      >
        <img src={iconServico} alt="Ícone do Serviço" />
      </div>
      <div>
        <h2
          style={{
            color: active ? "#0253A9" : "#545454",
          }}
        >
          {nameServico}
        </h2>
        <p
          style={{
            color: active ? "#545454" : "#545454",
          }}
        >
          {txtServico}
        </p>
        <a
          href="#"
          style={{
            color: active ? "#0253A9" : "#545454",
          }}
        >
          Ver mais...
        </a>
      </div>
    </div>
  );
}

// Validação das props usando PropTypes
servicoSec.propTypes = {
  iconServico: PropTypes.string.isRequired,
  nameServico: PropTypes.string.isRequired,
  txtServico: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default servicoSec;
