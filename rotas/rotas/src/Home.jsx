import React from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      {/*<Head title="Home" description="Essa é a descrição da Home page"/> */}
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Essa é a descrição da Home page" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        ></link>
      </Helmet>
      <h1>Home</h1>
      <p>Essa é a Home page</p>
      <Link to="produto/notebook">Notebook</Link> |{" "}
      <Link to="produto/smartphone">Smartphone</Link>
    </div>
  );
};

export default Home;
