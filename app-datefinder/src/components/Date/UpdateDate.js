import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateDate() {
  const { id } = useParams();
  const [date, setDate] = useState({
    descricao: "",
    em_casa: "",
    encontro_duplo: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDate((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8081/date/${id}`)
      .then((res) => {
        setDate(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/date/${id}`, {
        descricao: date.descricao,
        en_casa: date.en_casa,
        encontro_duplo: date.encontro_duplo,
      });
      navigate("/date");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h1>Formulário para Editar o Date</h1>
      <form>
        <div className="mb-3 mt-3">
          <label className="form-label"> ID:</label>
          <input
            type="text"
            className="form-control"
            id="id"
            placeholder="ID"
            name="id"
            value={date.id}
            disabled
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mt-3">
          <label className="form-label"> Descrição</label>
          <input
            type="text"
            className="form-control"
            id="descricao"
            placeholder="Descrição da Editora"
            name="descricao"
            value={date.descricao}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mt-3">
          <label className="form-label">Encontro em Casa:</label>
          <input
            type="text"
            className="form-control"
            id="em_casa"
            placeholder="Encontro em Casa"
            name="em_casa"
            value={date.em_casa}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mt-3">
          <label className="form-label">Encontro Duplo:</label>
          <input
            type="text"
            className="form-control"
            id="encontro_duplo"
            placeholder="Encontro Duplo"
            name="encontro_duplo"
            value={date.encontro_duplo}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Alterar
        </button>
      </form>
      <div className="container d-flex justify-content-center">
        <Link to="/">Veja todos os Dates</Link>
      </div>
    </div>
  );
}

export default UpdateDate;
