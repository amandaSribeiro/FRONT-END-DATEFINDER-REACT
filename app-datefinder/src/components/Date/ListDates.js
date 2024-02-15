import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import logo from '../../img/logo.png';
import excluir from '../../img/excluir.png';
import editar from '../../img/editar.png';
import ler from '../../img/ler.png';
import axios from "axios";
import { Link } from "react-router-dom";

const ListDates = () => {
    const [dates, setDates] = useState([]);
    useEffect(() => {
        const fetchAllDates = async () => {
            try {
                const res = await axios.get("http://localhost:8081/date/");
                setDates(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllDates();
    }, []);
    console.log(dates);
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/date/${id}`);
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <body>
            <Link to="/Home"><img id="logoNormal" src={logo} alt="logo" /></Link>
            <div className='boxList'>
                <h1 className='h1List'>Dates Cadastrados</h1>
                <div>
                    <table className='tableList'>
                        <thead>
                            <tr>
                                <th>Título</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dates.map((date) => {
                                return (
                                    <tr>
                                        <td>{date.titulo}</td>
                                        <td>
                                            <Link to={`/readDate/${date.id}`}>
                                                <button className='botaoList'>
                                                <img src={ler} alt="Ícone de Ler" />
                                                </button>
                                            </Link>
                                            <Link to={`/updateDate/${date.id}`}>
                                                <button className='botaoList'>
                                                    <img src={editar} alt="Ícone de Editar" />
                                                </button>
                                            </Link>
                                            <button className='botaoList' onClick={() => handleDelete(date.id)}><img src={excluir} alt="Ícone de Deletar" /></button>

                                        </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
                <Link to="/addDate"><button id='btnNewDate'>Adicionar novo Date</button></Link>


            </div>
        </body>
    )
}
export default ListDates