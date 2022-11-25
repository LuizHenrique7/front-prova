
import Formulario from './Formulario';
import Tabela from './Tabela';
import './Pessoa.css'
import { Button } from 'reactstrap';

function PessoaBox() {

    return (
        <div>
              <Button color='danger' className='logout'
            onClick={() => {
                localStorage.clear()
            }}
        > Logout </Button>
            <div className="row">
                <div className="col-md-6 my-3">
                    <h2 className="font-weight-bold text-center"> Cadastro de Pessoas </h2>
                    <Formulario />
                </div>
                <div className="col-md-6 my-3">
                    <h2 className="font-weight-bold text-center"> Lista de Pessoas </h2>
                    <Tabela />
                </div>
            </div>
        </div>
    );
}
export default PessoaBox;