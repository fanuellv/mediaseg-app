import mediasegLogo from '/logo.svg'
import { Link } from "react-router-dom";

import './assets/css/header.css'
import './pub'

function header() {
  
    return (
      <>
       <nav >
        <img src={mediasegLogo} alt="" />
        <ul>
            <li><Link to="/" >Quem Somos</Link></li>
            <li><Link to="/servico" >Serviços</Link></li>
            <li><Link to="/parceiro" >Parceiros</Link></li>
            <li><Link to="/" >Eventos</Link></li>
        </ul>
        
        <button>   
            Aceder a MediaSeg
        </button>
        <div className="menu"></div>
       </nav>
      </>
    )
  }
  
  export default header
  