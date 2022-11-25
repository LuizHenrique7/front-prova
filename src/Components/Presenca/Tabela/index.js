import React, { useEffect, useState, useRef } from 'react';
import { Table, Button } from 'reactstrap';
import { useParams } from 'react-router-dom';


export default function Tabela() {
    
    const baseURL = "http://localhost:8080/presenca";
    const params = useParams();
    const delete_id = useRef(null);
    const [presencas, setPresencas] = useState([]);
    const exibe_presencas = presencas.filter(presenca => (presenca.pessoaidPessoa.idpessoa === parseInt(params.id)))

    useEffect(() => {
        load();
    }, [presencas]);

    async function load() {
        await fetch(`${baseURL}`, {
            method: 'GET',
        })
            .then(data => {
                return data.json();
            })
            .then(data => {
                console.log(data)
                setPresencas(data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    async function deleteById() {
        const id = delete_id.current.innerHTML;
        if (id) {
            await fetch(`${baseURL}/${id}`, { method: "delete" })
                .then(res => res.json())
                .then(res => console.log(res))
        }
    }

    return (
        <Table className="table-bordered text-center table-pessoa">
            <thead>
                <tr className='pessoa-tr'>
                    <th>ID</th>
                    <th>data</th>
                    <th>Situação</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {exibe_presencas.map(user => (
                    <tr className='pessoa-tr'>
                        <td ref={delete_id}>{user.idpresenca}</td>
                        <td>{user.data}</td>
                        <td>{user.situacao ? 'Presente' : 'Ausente'}</td>
                        <td><Button color="danger" size="sm" onClick={deleteById}>Deletar</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}