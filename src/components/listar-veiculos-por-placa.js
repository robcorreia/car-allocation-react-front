import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ListarVeiculosPorPlaca extends Component {
    constructor(props) {
        super(props)

        this.state = {
            veiculos: []
        }
    }

    componentWillMount() {
        axios.get("http://localhost:8080/exemplo/veiculos/buscar-por-placa")
            .then(response => {
                this.setState({veiculos: response.data});
            });
    }

    render() {
        return(
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>RG</th>
                        <th>Naturalidade</th>
                        <th>Data de Nascimento</th>
                        <th>Número CNH</th>
                        <th>Data Validade</th>
                        <th>Tipo</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                        <th>E-mail</th> 
                        <th>Profissão</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.veiculos.map(veiculo => 
                        <tr key={veiculo.idveiculo}>
                            <td>{veiculo.nome}</td>
                            <td>{veiculo.cpf}</td>
                            <td>{veiculo.rg}</td>
                            <td>{veiculo.naturalidade}</td>
                            <td>{veiculo.dataNascimento}</td>
                            <td>{veiculo.numCNH}</td>
                            <td>{veiculo.validadeCNH}</td>
                            <td>{veiculo.tipoCNH}</td>
                            <td>{veiculo.endereco}</td>
                            <td>{veiculo.telefone}</td>
                            <td>{veiculo.email}</td>
                            <td>{veiculo.profissao}</td>
                            <td><Link to={`/veiculo/cadastrar/${veiculo.idveiculo}`}>Editar</Link></td>
                        </tr>
                    )}   
                </tbody>                
            </table>
        )
    }


}

export default ListarVeiculosPorPlaca;