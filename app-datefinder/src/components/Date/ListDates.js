import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

    const ListDates = () => {
        const [dates, setDates] = useState([]);
    //Listar Dates
    useEffect(() => {
        const fetchAllDates = async () => {
            try {
                const res = await axios.get("http://localhost:8081/date/");
                setDates(res.data);
            }   catch (err) {
                console.log(err);
            }
        };
        fetchAllDates();
    }, []);
    console.log(dates);
    //Deletar Dates
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/date/${id}`);
            window.location.reload()
        }   catch (err) {
            console.log(err);
        }
    };
return (
    <div className="container">
    <h2 className='w-100 d-flex justify-content-center p-3'>Listando 
Dates</h2>
        <div className='row'>
            <div className='col-md-12'>
            <p><Link to="/addDate" className="btn btnsuccess">Adicionar novo Date</Link></p>
            <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Endereço</th>
                    <th>Custo</th>
                    <th>Encontro Duplo</th>
                    <th>Em casa</th>
                    <th>Agendamento</th>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {dates.map((date) => {
                    return (
                        <tr>
                            <td>{date.titulo}</td>
                            <td>{date.endereco} </td>
                            <td>{date.custo} </td>
                            <td>{date.encontro_duplo} </td>
                            <td>{date.em_casa} </td>
                            <td>{date.agendamento} </td>
                            <td>{date.descricao} </td>
                            <td>
                                <Link to={`/readDate/${date.id}`} className="btn btn-success mx2">Ler</Link>
                                <Link to={`/updateDate/${date.id}`} className="btn btn-info mx2">Editar</Link>
                                <button onClick={()=>handleDelete(date.id)} className="btn btndanger">Deletar</button>
                            </td>
                        </tr>
                    )})
                }
            </tbody>
        </table>
        </div>
        </div>
    </div>
)}
export default ListDates