import React from 'react'
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const AddEditora = () => {
    const [date, setDate] = useState({
        descricao: "",
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setDate((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8081/date", date);
            navigate("/date");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="container">
            <h2 className='w-100 d-flex justify-content-center p-3'>Adicionando
                Date</h2>
            <div className='row'>
                <div className='col-md-12'>
                    <h3>Date</h3>
                    <form>
                        <div className="mb-3 mt-3">
                            <label className="form-label"> Título:</label>
                            <input type="text" className="form-control" id="titulo"
                                placeholder="Digite o Título" name="titulo"
                                onChange={handleChange} />

                            <label className="form-label"> Endereço:</label>
                            <input type="text" className="form-control" id="endereco"
                                placeholder="Digite o Endereço" name="endereco"
                                onChange={handleChange} />

                            <label className="form-label"> Custo:</label>
                            <input type="text" className="form-control" id="custo"
                                placeholder="Digite o Custo" name="custo"
                                onChange={handleChange} />

                            <label className="form-label"> Encontro Duplo:</label>
                            <input type="text" className="form-control" id="encontro_duplo"
                                placeholder="Digite o Encontro" name="encontro_duplo"
                                onChange={handleChange} />

                            <label className="form-label"> Em casa:</label>
                            <input type="text" className="form-control" id="em_casa"
                                placeholder="Digite o Em casa" name="em_casa"
                                onChange={handleChange} />

                            <label className="form-label"> Agendamento:</label>
                            <input type="text" className="form-control" id="agendamento"
                                placeholder="Agendamento" name="agendamento"
                                onChange={handleChange} />

                            <label className="form-label"> Descrição:</label>
                            <input type="text" className="form-control" id="descricao"
                                placeholder="Digite a descrição" name="descricao"
                                onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary"
                            onClick={handleClick}>Cadastrar</button>
                        <br />
                        <Link to="/date">Listar Dates</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddEditora;