import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import logo from '../../img/logo.png';
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
            <img id="logoNormal" src={logo} alt="logo" />
            <div className='boxList'>
                <h1 className='h1List'>Listando Dates</h1>
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
                                            <Link to={`/readDate/${date.id}`}><button className='botaoList'>Ler</button></Link>
                                            <Link to={`/updateDate/${date.id}`}><button className='botaoList'>Editar</button></Link>
                                            <button className='botaoList' onClick={() => handleDelete(date.id)}>Deletar</button>
                                        </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                    <p><Link to="/addDate">Adicionar novo Date</Link></p>
                </div>
            </div>
        </body>
    )
}
export default ListDates