import React from "react";
import styles from "./Contato.module.css";
import foto from '../../img/contato.jpg'
import Head from "../Head";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Contato" description="Entre em contato"/>
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>thiago@gmail.com</li>
          <li>(34) 9-8430-0000</li>
          <li>Rua Ali Perto , N°1578</li>

        </ul>
      </div>
    </section>
  );
};

export default Contato;
