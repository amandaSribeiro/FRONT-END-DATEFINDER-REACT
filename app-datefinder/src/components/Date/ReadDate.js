import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const ReadDate = () => {
    const { id } = useParams();
    const [date, setDate] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8081/date/${id}`)
            .then(res => {
                console.log(res);
                setDate(res.data);
            })
            .catch(err => console.log(err));
    }, [id]); 
    
    return (
        <div>
            <div>
                <div>
                    <h1>Detalhes do Date</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Endereço</th>
                                <th>Custo</th>
                                <th>Encontro Duplo</th>
                                <th>Em casa</th>
                                <th>Agendamento</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{date.titulo}</td>
                                <td>{date.endereco} </td>
                                <td>{date.custo} </td>
                                <td>{date.encontro_duplo} </td>
                                <td>{date.em_casa} </td>
                                <td>{date.agendamento} </td>
                                <td>{date.descricao} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default ReadDate;