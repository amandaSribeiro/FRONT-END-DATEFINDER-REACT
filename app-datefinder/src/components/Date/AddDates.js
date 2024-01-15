import React from 'react';
import axios from "axios";
import logo from '../../img/logo.png';
import seta from '../../img/seta.png';
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
        <body>
                <img id="logoNormal" src={logo} alt="logo" />
                <div className='boxAdd'>
                    <h1 id='h1CadDate'>Cadastrar Date</h1>
                    <form className='formAdd'>
                        <table className='tableForm'>
                            <tr>
                                <td><label className='labelDate'>Título:</label></td>
                                <td><input type="text" id="titulo" name="titulo" onChange={handleChange} /></td>
                            </tr>

                            <tr>
                                <td><label className='labelDate'>Endereço:</label></td>
                                <td><input type="text" id="endereco" name="endereco" onChange={handleChange} /></td>
                            </tr>

                            <tr>
                                <td><label className='labelDate'>Custo:</label></td>
                                <td><input type="text" id="custo" name="custo" onChange={handleChange} /></td>
                            </tr>

                            <tr>
                                <td><label className='labelDate'>Encontro Duplo:</label></td>
                                <td><input type="text" id="encontro_duplo" name="encontro_duplo" onChange={handleChange} /></td>
                            </tr>

                            <tr>
                                <td><label className='labelDate'>Em casa:</label></td>
                                <td><input type="text" id="em_casa" name="em_casa" onChange={handleChange} /></td>
                            </tr>

                            <tr>
                                <td><label className='labelDate'>Agendamento:</label></td>
                                <td><input type="text" id="agendamento" name="agendamento" onChange={handleChange} /></td>
                            </tr>

                            <tr>
                                <td><label className='labelDate'> Descrição:</label></td>
                                <td><input type="text" id="descricao" name="descricao" onChange={handleChange} /></td>
                            </tr>
                        </table>
                    </form>

                    <button id='cadastrarDate' type="submit" onClick={handleClick} className='botaoGeral'>
                        Cadastrar
                    </button>
                    <br />
                    <Link to="/date"><button id='encontrarDate' className='botaoGeral'>Encontrar</button></Link>
                </div>
        </body>
    );
};

export default AddEditora;
