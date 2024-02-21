import React from 'react';
import axios from "axios";
import logo from '../../img/logo.png';
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
        <body className='bodyPages'>
            <Link to="/Home"> <img id="logoNormal" src={logo} alt="logo" /></Link>
            <div className='boxAdd'>
                <h1 id='h1CadDate'>Cadastrar Date</h1>
                <form className='formAdd'>
                    <table className='tableForm'>
                        <div id='formDateT'>
                            <label className='labelDate'>Título:</label>
                            <input type="text" id="titulo" name="titulo" onChange={handleChange} />
                        </div>
                        <div id='formDateT'>
                            <label className='labelDate'>Endereço:</label>
                            <input type="text" id="endereco" name="endereco" onChange={handleChange} />
                        </div>

                        <div id='formDateT'>
                            <label className='labelDate'>Custo:</label>
                            <div className='radioGroup'>
                                <input type="radio" id="custo_baixo" name="custo" value="baixo" onChange={handleChange} />
                                <label htmlFor="custo_baixo">Baixo</label>

                                <input type="radio" id="custo_medio" name="custo" value="medio" onChange={handleChange} />
                                <label htmlFor="custo_medio">Médio</label>

                                <input type="radio" id="custo_alto" name="custo" value="alto" onChange={handleChange} />
                                <label htmlFor="custo_alto">Alto</label>
                            </div>
                        </div>

                        <div id='formDateT'>
                            <label className='labelDate'>Encontro Duplo:</label>
                            <div className='radioGroup'>
                                <input type="radio" id="encontro_duplo_sim" name="encontro_duplo" value="sim" onChange={handleChange} />
                                <label htmlFor="encontro_duplo_sim">Sim</label>
                                <input type="radio" id="encontro_duplo_nao" name="encontro_duplo" value="nao" onChange={handleChange} />
                                <label htmlFor="encontro_duplo_nao">Não</label>
                            </div>
                        </div>

                        <div id='formDateT'>
                            <label className='labelDate'>Em casa:</label>
                            <div className='radioGroup'>
                                <input type="radio" id="em_casa_sim" name="em_casa" value="sim" onChange={handleChange} />
                                <label htmlFor="em_casa_sim">Sim</label>

                                <input type="radio" id="em_casa_nao" name="em_casa" value="nao" onChange={handleChange} />
                                <label htmlFor="em_casa_nao">Não</label>
                            </div>
                        </div>

                        <div id='formDateT'>
                            <label className='labelDate'>Agendamento:</label>
                            <div className='radioGroup'>
                                <input type="radio" id="agendamento_sim" name="agendamento" value="sim" onChange={handleChange} />
                                <label htmlFor="agendamento_sim">Sim</label>

                                <input type="radio" id="agendamento_nao" name="agendamento" value="nao" onChange={handleChange} />
                                <label htmlFor="agendamento_nao">Não</label>
                            </div>
                        </div>

                        <div id='formDateT'>
                            <label className='labelDate'> Descrição:</label>
                            <input type="text" id="descricao" name="descricao" onChange={handleChange} />
                        </div>
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
