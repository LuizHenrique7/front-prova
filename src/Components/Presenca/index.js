import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import Tabela from './Tabela';
import Formulario from './Formulario';
import './Presenca.css'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function PresencaBox() { 

    const params = useParams();
    const baseURL = `http://localhost:8080/pessoa/${params.id}`;
    const [users, setUsers] = useState([]);
    
    

    
     
    formulario_presenca();
    

    async function formulario_presenca() {
        await fetch(`${baseURL}`, {
            method: 'GET',
        })
            .then(data => {
                return data.json();
            })
            .then(data => {
                setUsers(data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    
    return (
    <div>
        <p><Link to="/pessoa" class="home">Home</Link></p>
        <Button color='danger' className='logout'
            onClick={() => {
                localStorage.clear()
            }}
        > Logout </Button>
        
        
        <div className="row">
        
        <div className="col-md-6 my-3">
            
            <div className='div-presenca'>
            <h2 className="font-weight-bold text-center"> Lista de presenças de {users.nome}</h2>
                <Formulario />
                </div>
            </div>
            <div className="col-md-6 my-3">
            <div className='div-presenca'>
            <h2 className="font-weight-bold text-center"> Lista de Presenças </h2>
                <Tabela />
            </div>
            </div>
        </div>
    </div>
    );
}
export default PresencaBox;
