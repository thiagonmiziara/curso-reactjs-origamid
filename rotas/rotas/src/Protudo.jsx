import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Protudo = () => {
  const params = useParams();
  const location = useLocation();

  const search = new URLSearchParams(location.search)

  return (
    <div>
      <h1>Produto: {params.id}</h1>
    </div>
  );
};

export default Protudo;
