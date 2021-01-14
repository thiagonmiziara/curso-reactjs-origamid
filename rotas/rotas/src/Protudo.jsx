import React from "react";
import { useParams, Routes, Route, NavLink , Outlet } from "react-router-dom";
import ProdutoAvaliacao from "./ProdutoAvaliacao";
import ProdutoCustomizado from "./ProdutoCustomizado";
import ProdutoDescricao from "./ProdutoDescricao";

const Protudo = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto: {params.id}</h1>

      <nav>
        <NavLink to="">Descrição |</NavLink>
        <NavLink to="avaliacao">Avaliação |</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet/>{/*quando definir as rotas no app.js tem que usasr o Outlet para funcionar*/}

     {/* <Routes>
        <Route path="" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes>
     */ // exemplo de rotas aninhadas direto no componente e o outro exemplo direto no App.js
     }
    </div>
  );
};

export default Protudo;
