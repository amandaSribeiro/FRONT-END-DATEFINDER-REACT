import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import excluir from '../../img/excluir.png';
import editar from '../../img/editar.png';
import ler from '../../img/ler.png';
import pesquisa from '../../img/pesquisa.png'
import './style.css';
import axios from 'axios';

const ListDates = () => {
  const [dates, setDates] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    const fetchAllDates = async () => {
      try {
        const res = await axios.get('http://localhost:8081/date/');
        setDates(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllDates();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/date/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleFiltroChange = (event) => {
    setFiltro(event.target.value);
  };

  const datesFiltrados = dates.filter((date) =>
    date.titulo.toLowerCase().startsWith(filtro.toLowerCase())
  );

  return (
    <body>
      <Link to="/Home">
        <img id="logoNormal" src={logo} alt="logo" />
      </Link>
      <div className="boxList">
        <div id='box-h1-btn-add'>
          <h2 className="h2List">Listagem de Dates </h2>
          <Link to="/addDate">
            <button id="btnNewDate">Novo Date</button>
          </Link>
        </div>
        <div id='box-filtro'>
          <img src={pesquisa} alt="Ícone de Pesquisar" />
          <input
            id='filtro'
            type="text"
            placeholder="Digite a letra inicial"
            value={filtro}
            onChange={handleFiltroChange}
          />
        </div>
        <table className="tableList">
          <thead>
            <tr>
              <th>Título</th>
              <th>Custo</th>
              <th>Encontro Duplo</th>
              <th>Em Casa</th>
              <th>Agendamento</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {datesFiltrados.map((date) => (
              <tr key={date.id}>
                <td>{date.titulo}</td>
                <td>{date.custo}</td>
                <td>{date.encontro_duplo}</td>
                <td>{date.em_casa}</td>
                <td>{date.agendamento}</td>
                <td>
                  <Link to={`/readDate/${date.id}`}>
                    <button className="botaoList">
                      <img src={ler} alt="Ícone de Ler" />
                    </button>
                  </Link>
                  <Link to={`/updateDate/${date.id}`}>
                    <button className="botaoList">
                      <img src={editar} alt="Ícone de Editar" />
                    </button>
                  </Link>
                  <button
                    className="botaoList"
                    onClick={() => handleDelete(date.id)}
                  >
                    <img src={excluir} alt="Ícone de Deletar" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </body>
  );
};

export default ListDates;
