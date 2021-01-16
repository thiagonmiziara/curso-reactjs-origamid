import React from "react";
import { useParams } from "react-router-dom";
import Head from "../Head";
import styles from "./Produto.module.css";

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchData(url) {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setError(`Um erro ocorreu ${erro}`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <section className={`${styles.produto} animeLeft`}>
      <Head
        title={produto.nome}
        description={` Esse é um produto ${produto.nome}`}
      />
      {produto.fotos.map((foto) => (
        <img key={foto.src} src={foto.src} alt={foto.titulo} />
      ))}
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
