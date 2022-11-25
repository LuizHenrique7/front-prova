import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label} from 'reactstrap';
import { useParams } from 'react-router-dom';

export default function Formulario() {

    const baseURL = "http://localhost:8080/presenca";
    const params = useParams();
    const [post_data, setPost_data] = useState("");
    const [post_situacao, setPost_situacao] = useState("");
    

    async function postData() {
        const postData = {
            data: post_data,
            situacao: post_situacao,
            pessoaidPessoa:{idpessoa: params.id},
        };

        console.log(postData);

        try {
            await fetch(`${baseURL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData),
            });

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Form className='form_default'>
            
            <FormGroup>
                <div className="form-row">
                    <div>
                        <Label for="data">Data:</Label>
                        <Input id="data" type="date" value={post_data} onChange={(e) => setPost_data(e.target.value)}/>
                    </div>
                    <div>
                        <FormGroup onChange={(e) => setPost_situacao(e.target.value)}>
                            <Label for="situacao">Situação:</Label>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="situacao" value={true} /> Presente
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="situacao" value={false} /> Ausente
                                </Label>
                            </FormGroup>
                        </FormGroup>
                    </div>
                </div>
            </FormGroup>
            <div>
                <Button className="botao-salvar" onClick={postData}>Salvar</Button>
            </div>
            
        </Form>
    );
}