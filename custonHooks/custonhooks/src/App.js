import React from "react";
import "./App.css";
import useFetch from "./Hooks/usefetch/useFetch";
import useLocalStorage from "./Hooks/useLocalStorage/useLocalStorage";

function App() {
  const [produto, setProduto] = useLocalStorage("produto", "");
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        `https://ranekapi.origamid.dev/json/api/produto/`
      );
      console.log(response, json);
    }
    fetchData();
  }, [request]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }
  if (error) return <p>{error}</p>;
  if (loading)
    return (
      <div>
        <h2>Carregando...</h2>
      </div>
    );
  if (data)
    return (
      <div className="App">
        <p> Produto preferido: {produto} </p>
        <button style={{ margin: 10 }} onClick={handleClick}>
          Notebook
        </button>
        <br />
        <button onClick={handleClick}> Smartphone </button>
        <div>
          {data.map((produto) => (
            <div key={produto.id}>
              <h1>{produto.nome}</h1>
            </div>
          ))}
        </div>
      </div>
    );
  else return null;
}

export default App;
