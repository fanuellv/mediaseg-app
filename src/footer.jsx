import "./assets/css/footer.css";


function footer() {
  return (
    <>
      <section id="footer">
        <div className="footerSec">
          <div className="col">
            <ul>
              <h2>MediaSeg</h2>
              <li>
                <a href="">Quem somos</a>
              </li>
              <li>
                <a href="">Eventos</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <h2>Serviços</h2>
              <li>
                <a href="">Consultoria personalizada</a>
              </li>
              <li>
                <a href="">Educação sobre Seguros</a>
              </li>
              <li>
                <a href="">Facilidade na contratação</a>
              </li>
              <li>
                <a href="">Acompanhamento contínuo</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <h2>Parceiros</h2>
              <li>
                <a href="">ISAF</a>
              </li>
              <li>
                <a href="">AE-ISAF</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <h2>Contactos</h2>
              <li>Tel: 999-999-999</li>
              <li>Email: mediaseg01@gmail.com</li>
              <li>
                <div className="instagram">
                  <img src="" alt="" />
                </div>
                Instagram: MediaSeg
              </li>
            </ul>
          </div>
          <div className="col">
            <img className="logoFooter" src="/logoAlt.svg" alt="" />
          </div>
        </div>
        <div className="seguradorasFooter">
          <img src="rodape/seguradorasFooter.svg" alt="" />
        </div>
      </section>
    </>
  );
}

export default footer;
