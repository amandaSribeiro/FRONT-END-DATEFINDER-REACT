import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Importe o arquivo CSS
import logo from '../../img/logo.png';  // Ajuste o caminho da importação

const Home = () => {
  return (
    <div>
      <img id="logoIndex" src={logo} alt="logo" /> {/* Use a variável logo para o caminho da imagem */}
      <br />

      <div className="boxIndex">
        <br />
        <h1>Crie um novo Date ou encontre ideias já registradas!</h1>

        <Link to="/addDate">
          <button id="Cadastrar" className="botao">
            Cadastrar
          </button>
        </Link>

        <Link to="/date">
          <button id="Encontrar" className="botao">
            Encontrar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
