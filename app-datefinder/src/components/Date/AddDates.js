import React from 'react';
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddEditora = () => {
    const [date, setDate] = useState({
        titulo: "",
        endereco: "",
        custo: "",
        encontro_duplo: "",
        em_casa: "",
        agendamento: "",
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
        <div className='boxAdd'>
            <h1>Cadastrar Date</h1>
            <form className='formAdd'>
                <table className='tableForm'>
                    <tr>
                        <td><label className='labelDate'>Título:</label></td>
                        <td><input type="text" id="titulo" placeholder="Digite o Título" name="titulo" onChange={handleChange} /></td>
                    </tr>

                    <tr>
                        <td><label className='labelDate'>Endereço:</label></td>
                        <td><input type="text" id="endereco" placeholder="Digite o Endereço" name="endereco" onChange={handleChange} /></td>
                    </tr>

                    <tr>
                        <td><label className='labelDate'>Custo:</label></td>
                        <td><input type="text" id="custo" placeholder="Digite o Custo" name="custo" onChange={handleChange} /></td>
                    </tr>

                    <tr>
                        <td><label className='labelDate'>Encontro Duplo:</label></td>
                        <td><input type="text" id="encontro_duplo" placeholder="Digite o Encontro" name="encontro_duplo" onChange={handleChange} /></td>
                    </tr>

                    <tr>
                        <td><label className='labelDate'>Em casa:</label></td>
                        <td><input type="text" id="em_casa" placeholder="Digite o Em casa" name="em_casa" onChange={handleChange} /></td>
                    </tr>

                    <tr>
                        <td><label className='labelDate'>Agendamento:</label></td>
                        <td><input type="text" id="agendamento" placeholder="Agendamento" name="agendamento" onChange={handleChange} /></td>
                    </tr>

                    <tr>
                        <td><label className='labelDate'> Descrição:</label></td>
                        <td><input type="text" id="descricao" placeholder="Digite a descrição" name="descricao" onChange={handleChange} /></td>
                    </tr>
                </table>
            </form>

            <button type="submit" onClick={handleClick}>
                Cadastrar
            </button>
            <br />
            <Link to="/date">Listar Dates</Link>
        </div>
    );
};

export default AddEditora;
