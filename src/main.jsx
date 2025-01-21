import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./header.jsx";
import Pub from "./pub.jsx";
import Servico from "./servicos.jsx";
import Parceiros from "./parceiros.jsx";
import Footer from "./footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Header />
      <Routes>
        {/* Rota para a página principal */}
        <Route path="/" element={<Pub />} />
        
        {/* Rota para o componente Servico */}
        <Route path="/servico" element={<Servico />} />
        
        {/* Outras rotas podem ser adicionadas aqui */}
        <Route path="/parceiro" element={<Parceiros />} />
      </Routes>
      <Footer />
    </StrictMode>
  </BrowserRouter>
);
