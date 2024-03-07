import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import excluir from '../../img/excluir.png';
import editar from '../../img/editar.png';
import ler from '../../img/ler.png';
import pesquisa from '../../img/pesquisa.png';
import Modal from 'react-modal';
import axios from 'axios';

const ListDates = () => {
  const [dates, setDates] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

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

  const abrirModal = (date) => {
    setSelectedDate(date);
    setIsOpen(true);
  };

  const fecharModal = () => {
    setSelectedDate(null);
    setIsOpen(false);
  };

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
    <div>
      <Link to="/Home">
        <img id="logoNormal" src={logo} alt="logo" />
      </Link>
      <div className="boxList">
        <div id="box-h1-btn-add">
          <h2 className="h2List">Listagem de Dates </h2>
          <div>
            <button id="btnNewDate">
              <Link to="/addDate" id='linkAdd'>Novo Date</Link>
            </button>
          </div>
        </div>
        <div id="box-filtro">
          <img src={pesquisa} alt="Ícone de Pesquisar" />
          <input
            id="filtro"
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
                  <button className="botaoList" onClick={() => abrirModal(date)}>
                    <img src={ler} alt="Ícone de Ler" />
                  </button>
                  <Link to={`/updateDate/${date.id}`}>
                    <button className="botaoList" onClick={() => abrirModal(date)}>
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
      <Modal isOpen={modalIsOpen} onRequestClose={fecharModal}>
        <div>
          <h2 id='h2Modal'>Detalhes do Date</h2>
          <div className="tbModal">
            <div className="tbModalRow">
              <div className="tbModalTitle">Título:</div>
              <div className="tbModalContent">{selectedDate?.titulo}</div>
            </div>

            <div className="tbModalRow">
              <div className="tbModalTitle">Endereço:</div>
              <div className="tbModalContent">{selectedDate?.endereco}</div>
            </div>

            <div className="tbModalRow">
              <div className="tbModalTitle">Custo:</div>
              <div className="tbModalContent">{selectedDate?.custo}</div>
            </div>

            <div className="tbModalRow">
              <div className="tbModalTitle">Encontro Duplo:</div>
              <div className="tbModalContent">{selectedDate?.encontro_duplo}</div>
            </div>

            <div className="tbModalRow">
              <div className="tbModalTitle">Em Casa:</div>
              <div className="tbModalContent">{selectedDate?.em_casa}</div>
            </div>

            <div className="tbModalRow">
              <div className="tbModalTitle">Agendamento:</div>
              <div className="tbModalContent">{selectedDate?.agendamento}</div>
            </div>

            <div className="tbModalRow">
              <div className="tbModalTitle">Descrição:</div>
              <div className="tbModalContent">{selectedDate?.descricao}</div>
            </div>
          </div>
          <button className='btnCloseModal' onClick={fecharModal}>Fechar Modal</button>
        </div>
      </Modal>
    </div>
  );
};

export default ListDates;
