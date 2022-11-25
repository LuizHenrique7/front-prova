import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, FormText } from 'reactstrap';


export default function Formulario() {

    const baseURL = "http://localhost:8080/pessoa";

    const [post_nome, setPost_nome] = useState("");
    const [post_cpf, setPost_cpf] = useState("");
    const [post_matricula, setPost_matricula] = useState("");
    const [post_nascimento, setPost_nascimento] = useState("")
    const [post_foto, setPost_foto] = useState("")
    const [post_genero, setPost_genero] = useState("")
    const [post_username, setPost_username] = useState("")
    const [post_password, setPost_password] = useState("")

    async function postData() {
        const postData = {
            nome: post_nome,
            matricula: post_matricula,
            cpf: post_cpf,
            nascimento: post_nascimento,
            foto: post_foto,
            genero: post_genero,
            username: post_username,
            password: post_password,
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
        <Form className='form-cadastro'>
            <FormGroup>
                <div class="cadastro">
                <Label for="nome">Nome:</Label>
                <Input id="nome" value={post_nome} onChange={(e) => setPost_nome(e.target.value)} type='text' placeholder='Informe o nome' />
                </div>
            </FormGroup>
            <FormGroup>
                <div>
                    <div class="cadastro">
                        <Label for="cpf">CPF:</Label>
                        <Input id="cpf" type="text" value={post_cpf} onChange={(e) => setPost_cpf(e.target.value)} pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                            placeholder="Digite um CPF no formato: xxx.xxx.xxx-xx" />
                    </div>
                    <div class="cadastro">
                        <Label for="matricula">Matrícula:</Label>
                        <Input id="matricula" type="number" value={post_matricula} onChange={(e) => setPost_matricula(e.target.value)} />
                    </div>
                    <div class="cadastro">
                        <Label for="nascimento">Nascimento:</Label>
                        <Input id="nascimento" type="date" value={post_nascimento} onChange={(e) => setPost_nascimento(e.target.value)}/>
                    </div>
                    <div class="cadastro">
                        <FormGroup onChange={(e) => setPost_genero(e.target.value)}>
                            <Label for="genero">Genero:</Label>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="genero" value={'M'} /> Masculino
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="genero" value={'F'} /> Feminino
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="genero" value={'O'} /> Outro
                                </Label>
                            </FormGroup>
                        </FormGroup>
                    </div>
                    <div class="cadastro">
                        <Label for="foto">Foto:</Label>
                        <Input id="foto" type="file" value={post_foto} onChange={(e) => setPost_foto(e.target.value)}/>
                        <FormText color="muted">
                            Foto para reconhecimento.
                        </FormText>
                    </div>
                    <div class="cadastro">
                        <Label for="user">Username:</Label>
                        <Input value={post_username} onChange={(e) => setPost_username(e.target.value)} type='text' placeholder='Informe o nome de usuário'></Input>                  
                    </div> 
                    <div class="cadastro">
                        <Label for="user">Password:</Label>
                        <Input value={post_password} onChange={(e) => setPost_password(e.target.value)} type='text' placeholder='Informe a senha'></Input>                  
                    </div> 
                </div>
            </FormGroup>
            <div class="div-botao">
            <Button 
            onClick={() => {
                localStorage.clear()
            }}
        > Logout </Button>
                <Button class="botao-cadastrar" onClick={postData}>Cadastrar</Button>
            </div>
        </Form>
    );
}