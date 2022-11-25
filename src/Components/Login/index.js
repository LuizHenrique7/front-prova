import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

import './Login.css';


async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const navigate = useNavigate()
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
    navigate("/presencas");
    
  }

  return(
    <div className="login">
      <img class="img"  src="https://imgs.search.brave.com/wwl64lQU3JLYeCxbao9SCkFe2lx96bbwMCgGSGzWE-I/rs:fit:354:354:1/g:ce/aHR0cHM6Ly9jZG4u/cHJnbG9vLmNvbS9t/ZWRpYS8zMmYyNTMw/YmJhOTM0ZTU4ODA2/ZjJlOTBkYjE2YTFj/NC5qcGc_d2lkdGg9/MTIwMCZoZWlnaHQ9/MTgwMA" alt="nice"/>
      <form onSubmit={handleSubmit}>
        <h1>Fazer login</h1>
        <div class="form-login">
          <label>
            Nome:
            <input type="text" onChange={e => setUserName(e.target.value)} placeholder="Digite seu nome" />
          </label>
        </div>
        <div class="form-login">
          <label>
            Senha:
            <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Digite sua senha"/>
          </label>
        </div>
        <div>
          <button class="botao-login" type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};